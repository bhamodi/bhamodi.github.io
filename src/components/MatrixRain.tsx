import {useEffect, useRef} from 'react';

const GLYPHS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');

/**
 * Lightweight "digital rain" for the hero background — a single Canvas 2D layer.
 * Perf-conscious: renders at 1x DPR and ~10fps, pauses when the hero scrolls
 * offscreen or the tab is hidden, and is disabled under reduced-motion / on
 * mobile. Trails fade via `destination-out` so the canvas stays transparent
 * and the aurora glow behind it shows through.
 */
export function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (canvas == null) {
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    if (window.matchMedia('(max-width: 640px)').matches) {
      return; // desktop-only flourish; saves battery on phones
    }
    const ctx = canvas.getContext('2d');
    if (ctx == null) {
      return;
    }

    const dpr = 1; // glyphs don't need retina — big pixel-fill savings
    const fontSize = 16;
    let cssW = 0;
    let cssH = 0;
    let cols = 0;
    let drops: number[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      cssW = rect.width;
      cssH = rect.height;
      canvas.width = Math.max(1, Math.floor(cssW * dpr));
      canvas.height = Math.max(1, Math.floor(cssH * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(cssW / fontSize);
      drops = new Array(cols)
        .fill(0)
        .map(() => Math.floor(Math.random() * -60));
      ctx.font = `${fontSize}px 'Courier New', monospace`;
      ctx.textBaseline = 'top';
    };
    resize();
    window.addEventListener('resize', resize);

    const isDark = () =>
      document.documentElement.getAttribute('data-theme') === 'dark';

    let visible = true;
    let running = false;
    let raf = 0;
    let last = 0;
    const step = 1000 / 10; // ~10 rows/sec

    const frame = (t: number) => {
      if (document.hidden || !visible) {
        running = false;
        return;
      }
      if (t - last >= step) {
        last = t;
        // Fade trails toward TRANSPARENT so the aurora stays visible.
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = 'rgba(0,0,0,0.09)';
        ctx.fillRect(0, 0, cssW, cssH);
        ctx.globalCompositeOperation = 'source-over';
        for (let i = 0; i < cols; i++) {
          const y = drops[i] * fontSize;
          const ch = GLYPHS[(Math.random() * GLYPHS.length) | 0];
          ctx.fillStyle =
            Math.random() < 0.06
              ? 'rgba(34,211,238,0.9)'
              : isDark()
                ? 'rgba(139,92,246,0.5)'
                : 'rgba(124,58,237,0.42)';
          ctx.fillText(ch, i * fontSize, y);
          if (y > cssH && Math.random() > 0.975) {
            drops[i] = Math.floor(Math.random() * -20);
          }
          drops[i]++;
        }
      }
      raf = requestAnimationFrame(frame);
    };
    const loop = () => {
      if (running) {
        return;
      }
      running = true;
      raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
        if (visible) {
          loop();
        }
      },
      {threshold: 0},
    );
    io.observe(canvas);
    const onVisibility = () => {
      if (!document.hidden && visible) {
        loop();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
      io.disconnect();
    };
  }, []);

  return <canvas ref={ref} className="rain-canvas" aria-hidden="true" />;
}
