import { useState, useEffect, useRef, useCallback } from 'react';

const chars = '!<>-_\\/[]{}=+*^?#________';

interface TextScrambleProps {
  text: string;
  className?: string;
  trigger?: boolean;
  speed?: number;
}

export default function TextScramble({ text, className = '', trigger = true, speed = 40 }: TextScrambleProps) {
  const [display, setDisplay] = useState('');
  const frameRef = useRef<number>(0);
  const queueRef = useRef<{ from: string; to: string; start: number; end: number; char?: string }[]>([]);
  const frameCounter = useRef(0);
  const hasRun = useRef(false);

  const setText = useCallback((newText: string) => {
    const oldText = display || newText;
    const length = Math.max(oldText.length, newText.length);
    const queue: typeof queueRef.current = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      queue.push({ from, to, start, end });
    }

    queueRef.current = queue;
    frameCounter.current = 0;

    const update = () => {
      let output = '';
      let complete = 0;

      for (let i = 0; i < queue.length; i++) {
        const { from, to, start, end } = queue[i];
        let char = queue[i].char;

        if (frameCounter.current >= end) {
          complete++;
          output += to;
        } else if (frameCounter.current >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queue[i].char = char;
          }
          output += `<span class="text-accent-green">${char}</span>`;
        } else {
          output += from;
        }
      }

      setDisplay(output);
      frameCounter.current++;

      if (complete < queue.length) {
        frameRef.current = requestAnimationFrame(update);
      }
    };

    frameRef.current = requestAnimationFrame(update);
  }, [display]);

  useEffect(() => {
    if (trigger && !hasRun.current) {
      hasRun.current = true;
      const timer = setTimeout(() => setText(text), 300);
      return () => {
        clearTimeout(timer);
        cancelAnimationFrame(frameRef.current);
      };
    }
  }, [trigger, text, setText]);

  return (
    <span 
      className={className} 
      dangerouslySetInnerHTML={{ __html: display || text.split('').map(() => '&nbsp;').join('') }}
    />
  );
}
