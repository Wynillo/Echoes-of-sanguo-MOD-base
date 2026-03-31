import { useEffect, useRef, useCallback } from 'react';
import { setDamageNumberDispatch } from './damageNumberApi.js';
import type { Owner } from '../../types.js';

export function DamageNumberOverlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNumber = useCallback((amount: number, owner: Owner, kind: 'damage' | 'heal' = 'damage') => {
    const container = containerRef.current;
    if (!container) return;

    const el = document.createElement('div');
    const isDamage = kind === 'damage';

    el.className = isDamage ? 'damage-number' : 'heal-number';
    el.textContent = isDamage ? `-${amount}` : `+${amount}`;

    // Center horizontally, position in owner's half of the screen
    el.style.left = '50%';
    el.style.top = owner === 'opponent' ? '30%' : '60%';

    container.appendChild(el);

    const cleanup = () => { if (el.parentNode) el.remove(); };
    el.addEventListener('animationend', cleanup, { once: true });
    setTimeout(cleanup, 1800);
  }, []);

  useEffect(() => {
    setDamageNumberDispatch(handleNumber);
    return () => setDamageNumberDispatch(null);
  }, [handleNumber]);

  return (
    <div
      ref={containerRef}
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 501 }}
    />
  );
}
