// Elements to animate on scroll
const REVEAL_SELECTORS = [
  '.sodyba-card',
  '.paslauga-card',
  '.kaina-card',
  '.loc-item',
  '.kontaktai-main',
  '.kontakt-sodyba-card',
  '.rule-card',
  '.extra-services',
].join(', ');

// Staggered grids – first child triggers siblings
const STAGGER_GRIDS = [
  '.paslaugos-grid',
  '.kainos-grid',
  '.kontaktai-rules',
  '.kontaktai-sodybos',
].join(', ');

// Apply reveal class to all targets
document.querySelectorAll(REVEAL_SELECTORS).forEach(el => el.classList.add('reveal'));

// Single-element reveal observer
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(REVEAL_SELECTORS).forEach(el => revealObserver.observe(el));

// Stagger observer – animates grid children one by one
const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const siblings = entry.target.parentElement.querySelectorAll('.reveal');
      siblings.forEach((sibling, idx) => {
        if (!sibling.classList.contains('visible')) {
          setTimeout(() => sibling.classList.add('visible'), idx * 80);
        }
      });
      staggerObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll(STAGGER_GRIDS).forEach(grid => {
  const first = grid.firstElementChild;
  if (first) staggerObserver.observe(first);
});
