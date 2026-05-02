import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ArtPiece {
  name: string;
  lines: string[];
}

const ARTS: ArtPiece[] = [
  {
    name: 'butterfly',
    lines: [
      '',
      '',
      '',
      '       .      .-~\\',
      '      / `-~\'    `- :',
      '      |    /          `._',
      '      |   |   .-.        {',
      '       \  |   `-\'         `.',
      '        \ |                /',
      '   ~-.`. \|            .-~_',
      '       .\-.\       .-~      \\',
      '        `-\'/~~ -.~          /',
      '      .-~/|`-._ /~~-.~ -- ~',
      '     /  |  \    ~- . _\\',
    ],
  },
  {
    name: 'dolphin',
    lines: [
      '                                    __',
      '                               _.-~  )',
      '                    _..--~~~~,\'   ,-/     _',
      '                 .-\'. . . .\'\'   ,-\',\'    ,\' )',
      '               ,\'. . . _   ,--~,-\'__..-\'  ,\'',
      '             ,\'. . .  (@)\' ---~~~~      ,\'',
      '            /. . . . \'~~             ,-\'',
      '           /. . . . .             ,-\'',
      '          ; . . . .  - .        ,\'',
      '         : . . . .       _     /',
      '        . . . . .          `-.:',
      '       . . . ./  - .          )',
      '      .  . . |  _____..---.._/ ___________',
      '~---~~~~----~~~~             ~~',
    ],
  },
  {
    name: 'bear',
    lines: [
      '',
      '',
      '',
      ' .--.              .--.',
      ': (\ ". _......_ ." /) :',
      ' \'.    `        `    .\'',
      '  /\'   _        _   `\\',
      ' /     0}      {0     \\',
      '|       /      \       |',
      '|     /\'        `\     |',
      ' \   | .  .==.  . |   /',
      '  \'._ \.\' \__/ \'./ _.\'',
      '  /  ``\'._-\'\'-_.\'``  \\',
    ],
  },
];

const SCRAMBLE_CHARS = '!<>-_\\/[]{}=+*^?#________';

function padLines(lines: string[], targetCount: number): string[] {
  const padded = [...lines];
  const maxLen = Math.max(...lines.map(l => l.length));
  while (padded.length < targetCount) {
    padded.push('');
  }
  return padded.map(l => l.padEnd(maxLen, ' '));
}

export default function ASCIIGallery() {
  const [index, setIndex] = useState(0);
  const [displayLines, setDisplayLines] = useState<string[]>([]);
  const [isMorphing, setIsMorphing] = useState(false);
  const [hovered, setHovered] = useState(false);
  const queueRef = useRef<{ from: string[]; to: string[]; frame: number } | null>(null);
  const rafRef = useRef<number>(0);

  const art = ARTS[index];
  const maxLines = Math.max(...ARTS.map(a => a.lines.length));

  // Initialize
  useEffect(() => {
    setDisplayLines(padLines(art.lines, maxLines));
  }, []);

  const startMorph = useCallback((toIndex: number) => {
    if (isMorphing || toIndex === index) return;
    const from = padLines(ARTS[index].lines, maxLines);
    const to = padLines(ARTS[toIndex].lines, maxLines);
    queueRef.current = { from, to, frame: 0 };
    setIndex(toIndex);
    setIsMorphing(true);
  }, [index, isMorphing, maxLines]);

  const next = useCallback(() => {
    startMorph((index + 1) % ARTS.length);
  }, [index, startMorph]);

  // Morph animation
  useEffect(() => {
    if (!isMorphing || !queueRef.current) return;

    const { from, to } = queueRef.current;
    const totalFrames = 35;

    const animate = () => {
      const q = queueRef.current;
      if (!q) return;

      q.frame++;
      const progress = q.frame / totalFrames;
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const result: string[] = [];

      for (let row = 0; row < maxLines; row++) {
        let line = '';
        const maxCol = Math.max(from[row]?.length || 0, to[row]?.length || 0);

        for (let col = 0; col < maxCol; col++) {
          const fromChar = from[row]?.[col] || ' ';
          const toChar = to[row]?.[col] || ' ';

          if (fromChar === toChar) {
            line += fromChar;
          } else if (progress < 0.3) {
            // Scramble phase
            const scrambleIdx = Math.floor(Math.random() * SCRAMBLE_CHARS.length);
            line += SCRAMBLE_CHARS[scrambleIdx] || '#';
          } else if (progress < 0.7) {
            // Mix phase
            const rowProgress = (row / maxLines);
            const threshold = ease * 1.2 - rowProgress * 0.3;
            if (Math.random() < threshold) {
              line += toChar;
            } else {
              line += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)] || '#';
            }
          } else {
            // Resolve phase
            const rowProgress = (row / maxLines);
            const threshold = ease * 1.1 - rowProgress * 0.2;
            line += Math.random() < threshold ? toChar : fromChar;
          }
        }
        result.push(line);
      }

      setDisplayLines(result);

      if (q.frame >= totalFrames) {
        setDisplayLines(to);
        setIsMorphing(false);
        queueRef.current = null;
      } else {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isMorphing, maxLines]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative w-full max-w-md mx-auto select-none"
    >
      <div className="code-block top-glow-green overflow-hidden">
        {/* Header */}
        <div className="code-header">
          <div className="code-dot bg-[#ff5f56]" />
          <div className="code-dot bg-[#ffbd2e]" />
          <div className="code-dot bg-[#27c93f]" />
          <span className="ml-2 text-text-muted text-xs font-mono">ascii_gallery.txt</span>
          <div className="ml-auto flex items-center gap-3">
            <AnimatePresence mode="wait">
              <motion.span
                key={art.name}
                initial={{ opacity: 0, y: -3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 3 }}
                className="text-[10px] text-accent-green font-mono px-2 py-0.5 rounded bg-accent-green-glow border border-accent-green/20"
              >
                {isMorphing ? '...' : art.name}
              </motion.span>
            </AnimatePresence>
            <span className="text-[10px] text-text-muted font-mono hidden sm:inline">
              {ARTS.length} pieces
            </span>
          </div>
        </div>

        {/* ASCII Art Display */}
        <div
          className="relative px-4 py-6 min-h-[320px] sm:min-h-[380px] flex items-center justify-center cursor-pointer"
          onClick={() => next()}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
            style={{
              opacity: hovered ? 1 : 0,
              background: 'radial-gradient(circle at 50% 50%, rgba(62,207,142,0.04) 0%, transparent 70%)',
            }}
          />

          {/* The ASCII Art */}
          <pre
            className="font-mono text-xs sm:text-sm leading-[1.15] text-center transition-colors duration-300"
            style={{
              color: hovered ? '#6ee7b7' : '#3ecf8e',
              textShadow: hovered ? '0 0 20px rgba(62,207,142,0.3)' : 'none',
            }}
          >
            {displayLines.map((line, i) => (
              <div key={i} className="whitespace-pre">
                {line.split('').map((ch, j) => {
                  // Color special characters differently
                  const isSpecial = /[\u25D5\u25E0\u25E1\u25BD\u2615\u274C\u229C\u2588\u2582\u2500\u256F\u2570\u0332\u0300\u02C7\u0301\uFF61\uFF65\u2227]/.test(ch);
                  const isEye = ch === '\u25D5' || ch === '\u25E0';
                  return (
                    <span
                      key={j}
                      className="inline-block transition-all duration-100"
                      style={{
                        color: isEye ? '#fbbf24' : isSpecial ? '#58a6ff' : undefined,
                        textShadow: isEye ? '0 0 8px rgba(251,191,36,0.5)' : undefined,
                      }}
                    >
                      {ch}
                    </span>
                  );
                })}
              </div>
            ))}
          </pre>

          {/* Click hint */}
          <AnimatePresence>
            {hovered && !isMorphing && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] text-text-muted font-mono"
              >
                click to morph
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scanlines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.02]"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
            }}
          />
        </div>

        {/* Navigation */}
        <div className="px-4 py-3 border-t border-border-default flex items-center justify-between">
          <div className="flex items-center gap-1">
            {ARTS.map((a, i) => (
              <button
                key={a.name}
                onClick={() => startMorph(i)}
                className={`w-6 h-6 rounded-md text-[9px] font-mono font-bold flex items-center justify-center transition-all duration-200 ${i === index
                  ? 'bg-accent-green text-bg-primary'
                  : 'text-text-muted hover:text-text-primary hover:bg-white/5'
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => startMorph((index - 1 + ARTS.length) % ARTS.length)}
              className="text-[10px] text-text-muted hover:text-accent-green transition-colors font-mono px-2 py-1 rounded hover:bg-white/5"
            >
              &larr; prev
            </button>
            <button
              onClick={next}
              className="text-[10px] text-text-muted hover:text-accent-green transition-colors font-mono px-2 py-1 rounded hover:bg-white/5"
            >
              next &rarr;
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
