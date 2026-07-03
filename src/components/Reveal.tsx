import type {CSSProperties, ReactNode} from 'react';

import {useEffect, useRef, useState} from 'react';

type RevealProps = {
  children: ReactNode;
  /** Stagger the entrance, in milliseconds. */
  delay?: number;
};

/**
 * Fades + slides its children in when they scroll into view. Renders instantly
 * (no animation) when the user prefers reduced motion.
 */
export function Reveal({children, delay = 0}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (node == null) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      {threshold: 0.15, rootMargin: '0px 0px -10% 0px'},
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = delay ? {transitionDelay: `${delay}ms`} : {};

  return (
    <div ref={ref} className={visible ? 'reveal is-visible' : 'reveal'} style={style}>
      {children}
    </div>
  );
}
