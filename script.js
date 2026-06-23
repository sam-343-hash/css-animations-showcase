// Pause animations when tab is not visible (saves CPU)
document.addEventListener('visibilitychange', () => {
  const animatedEls = document.querySelectorAll(
    '.orb, .loader span, .typewriter p, .pulse-ring, .spin-border, .morph, .neon-text'
  );
  animatedEls.forEach(el => {
    el.style.animationPlayState = document.hidden ? 'paused' : 'running';
  });
});

// Click on morph to change its gradient
const morph = document.querySelector('.morph');
const gradients = [
  'linear-gradient(135deg, #a78bfa, #22d3ee)',
  'linear-gradient(135deg, #f472b6, #4ade80)',
  'linear-gradient(135deg, #fb923c, #a78bfa)',
  'linear-gradient(135deg, #22d3ee, #f472b6)',
];
let gradientIndex = 0;
morph?.addEventListener('click', () => {
  gradientIndex = (gradientIndex + 1) % gradients.length;
  morph.style.background = gradients[gradientIndex];
});

// Console welcome message
console.log('%c CSS Animations Showcase ', 'background:#a78bfa;color:#fff;font-size:16px;padding:6px 12px;border-radius:4px;');
console.log('All animations are pure CSS. JS is only used for:\n  • Pausing when tab hidden\n  • Morph gradient toggle on click');
