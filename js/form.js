// Pre-fill sodyba select when clicking "Rezervuoti" from a sodyba card
function preselectSodyba(num) {
  const sel = document.getElementById('sodyba');
  if (sel) sel.value = String(num);
}

// Form submission handler
function submitForm(e) {
  e.preventDefault();

  const form = document.getElementById('inquiryForm');
  const success = document.getElementById('formSuccess');
  const submitBtn = form.querySelector('button[type="submit"]');

  // Required field check
  if (!form.vardas.value.trim() || !form.tel.value.trim() || !form.sodyba.value) {
    return;
  }

  submitBtn.textContent = 'Siunčiama...';
  submitBtn.disabled = true;

  // Replace this timeout with a real fetch() call to your backend
  setTimeout(() => {
    form.reset();
    submitBtn.textContent = 'Siųsti užklausą';
    submitBtn.disabled = false;
    success.classList.add('show');
    setTimeout(() => success.classList.remove('show'), 5000);
  }, 1200);
}
