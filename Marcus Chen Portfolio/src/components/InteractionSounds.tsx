import { useEffect, useRef } from 'react';

type SoundKind = 'click' | 'key';

function makeNoiseBuffer(context: AudioContext) {
  const buffer = context.createBuffer(1, context.sampleRate * 0.08, context.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < data.length; i += 1) {
    data[i] = Math.random() * 2 - 1;
  }

  return buffer;
}

function playMechanicalSound(context: AudioContext, noiseBuffer: AudioBuffer, kind: SoundKind) {
  const now = context.currentTime;
  const master = context.createGain();
  const toneGain = context.createGain();
  const noiseGain = context.createGain();
  const filter = context.createBiquadFilter();
  const tone = context.createOscillator();
  const noise = context.createBufferSource();

  const isClick = kind === 'click';
  const baseFrequency = isClick ? 620 : 250;
  const targetFrequency = isClick ? 180 : 115;

  master.gain.setValueAtTime(0.28, now);

  toneGain.gain.setValueAtTime(isClick ? 0.22 : 0.14, now);
  toneGain.gain.exponentialRampToValueAtTime(0.0001, now + (isClick ? 0.045 : 0.07));

  noiseGain.gain.setValueAtTime(isClick ? 0.08 : 0.12, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + (isClick ? 0.03 : 0.05));

  tone.type = isClick ? 'triangle' : 'square';
  tone.frequency.setValueAtTime(baseFrequency, now);
  tone.frequency.exponentialRampToValueAtTime(targetFrequency, now + 0.018);
  tone.detune.setValueAtTime(isClick ? -8 : -3, now);

  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(isClick ? 1700 : 1200, now);
  filter.Q.setValueAtTime(isClick ? 6 : 9, now);

  noise.buffer = noiseBuffer;

  tone.connect(toneGain);
  toneGain.connect(master);

  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(master);
  master.connect(context.destination);

  tone.start(now);
  noise.start(now);
  tone.stop(now + 0.09);
  noise.stop(now + 0.08);
}

export default function InteractionSounds() {
  const contextRef = useRef<AudioContext | null>(null);
  const noiseBufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    const getContext = () => {
      if (!contextRef.current) {
        const AudioContextCtor = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!AudioContextCtor) return null;
        contextRef.current = new AudioContextCtor();
      }

      return contextRef.current;
    };

    const play = (kind: SoundKind) => {
      const context = getContext();
      if (!context) return;

      if (!noiseBufferRef.current) {
        noiseBufferRef.current = makeNoiseBuffer(context);
      }

      const maybeResume = context.state === 'suspended' ? context.resume() : Promise.resolve();
      void maybeResume.then(() => {
        if (context.state === 'running' && noiseBufferRef.current) {
          playMechanicalSound(context, noiseBufferRef.current, kind);
        }
      });
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0 || event.pointerType === 'touch') return;
      play('click');
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.repeat) return;

      const triggerKeys =
        event.key.length === 1 ||
        event.key === 'Enter' ||
        event.key === 'Backspace' ||
        event.key === 'Tab' ||
        event.key === 'Spacebar' ||
        event.key === ' ';

      if (!triggerKeys) return;
      play('key');
    };

    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('keydown', handleKeyDown, { passive: true });

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
      void contextRef.current?.close();
      contextRef.current = null;
      noiseBufferRef.current = null;
    };
  }, []);

  return null;
}
