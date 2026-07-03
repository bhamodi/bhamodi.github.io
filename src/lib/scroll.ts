import type {MouseEvent} from 'react';

/** Smoothly scroll to an in-page element by id, honoring reduced-motion. */
export function smoothScrollTo(id: string) {
  const target = document.getElementById(id);
  if (!target) {
    return;
  }
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;
  target.scrollIntoView({
    behavior: reduceMotion ? 'auto' : 'smooth',
    block: 'start',
  });
  history.replaceState(null, '', id === 'top' ? ' ' : `#${id}`);
}

/** onClick handler for anchor elements that scrolls without a hard jump. */
export function scrollToId(id: string) {
  return (event: MouseEvent<HTMLElement>) => {
    if (!document.getElementById(id)) {
      return;
    }
    event.preventDefault();
    smoothScrollTo(id);
  };
}
