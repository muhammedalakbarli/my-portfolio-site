emailjs.init('Ra3x9rfxclqNF0X6m');

let _successTimer = null;

async function handleSubmit(e) {
  e.preventDefault();

  const btn     = document.querySelector('.btn-send');
  const success = document.getElementById('form-success');
  const form    = document.getElementById('contact-form');

  btn.disabled    = true;
  btn.textContent = '...';

  try {
    await emailjs.send('service_x6tal99', 'template_dko1ikk', {
      name:    document.getElementById('c-name').value.trim(),
      email:   document.getElementById('c-email').value.trim(),
      subject: document.getElementById('c-subject').value.trim() || 'Portfolio Contact',
      message: document.getElementById('c-message').value.trim(),
    });

    form.reset();
    success.style.display = 'block';
    clearTimeout(_successTimer);
    _successTimer = setTimeout(() => { success.style.display = 'none'; }, 5000);
  } catch (err) {
    alert('Xəta baş verdi, yenidən cəhd et.');
    console.error(err);
  } finally {
    btn.disabled    = false;
    btn.textContent = t('contact_send') || 'Göndər →';
  }
}
