// Apply smooth fade transition to all main gallery images
document.querySelectorAll('.gallery-main img').forEach(img => {
  img.style.transition = 'opacity .2s ease';
});

// Cursor hint
document.querySelectorAll('.gallery-main').forEach(el => {
  el.style.cursor = 'zoom-in';
  el.title = 'Spustelėkite norėdami padidinti';
});

// Thumbnail swap – called from inline onclick in HTML
function changeMain(mainId, thumbEl, thumbsId) {
  const mainImg = document.getElementById(mainId);
  const thumbsContainer = document.getElementById(thumbsId);

  mainImg.style.opacity = '0';
  setTimeout(() => {
    mainImg.src = thumbEl.src;
    mainImg.style.opacity = '1';
  }, 150);

  thumbsContainer.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
}

// Lightbox – injected into DOM once, reused for all galleries
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
  <button class="lightbox-close" aria-label="Uždaryti">&times;</button>
  <img src="" alt="Nuotrauka" />
`;
document.body.appendChild(lightbox);

const lbImg = lightbox.querySelector('img');
const lbClose = lightbox.querySelector('.lightbox-close');

document.querySelectorAll('.gallery-main').forEach(gallery => {
  gallery.addEventListener('click', () => {
    lbImg.src = gallery.querySelector('img').src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

lbClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
