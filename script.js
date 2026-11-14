const toggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  }
});


// Validacija forme
const form = document.getElementById('form');
const status = document.getElementById('status');

function setError(id, message) {
  document.getElementById('err-' + id).textContent = message;
  document.getElementById(id).classList.toggle('invalid', Boolean(message));
  return !message;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const ime = form.ime.value.trim();
  const email = form.email.value.trim();
  const poruka = form.poruka.value.trim();

  const ok = [
    setError('ime', ime.length < 3 ? 'Upiši ime i prezime (najmanje 3 znaka).' : ''),
    setError('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Upiši ispravnu e-mail adresu.'),
    setError('poruka', poruka.length < 10 ? 'Napiši barem 10 znakova.' : '')
  ].every(Boolean);

  status.textContent = ok ? 'Hvala, ' + ime.split(' ')[0] + '! Prijava je zaprimljena.' : '';
  if (ok) form.reset();
});