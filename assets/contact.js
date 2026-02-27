function submitContactForm(event) {
  event.preventDefault();
  var messageEl = document.getElementById('contact-message');
  var nameEl = document.getElementById('contact-name');
  var emailEl = document.getElementById('contact-email');
  var urlEl = document.getElementById('contact-url');
  var categoryEl = document.getElementById('contact-category');
  var statusEl = document.getElementById('form-status');
  var message = messageEl.value.trim();

  if (!message) return;

  statusEl.textContent = 'Sending...';
  statusEl.className = 'mt-3 text-sm text-gray-400';

  // Retrieve configuration safely
  var config = window.JUSTNICE_CONFIG || {};
  var webhookUrl = config.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('Contact form configuration missing (CONTACT_WEBHOOK_URL).');
    statusEl.textContent = 'Configuration error. Please try again later.';
    statusEl.className = 'mt-3 text-sm text-red-400';
    return;
  }

  // Determine source from data attribute or default
  var formEl = document.getElementById('contact-form');
  var source = formEl.getAttribute('data-source') || 'justnice.us';

  fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: message,
      name: nameEl ? nameEl.value.trim() : '',
      email: emailEl ? emailEl.value.trim() : '',
      url: urlEl ? urlEl.value.trim() : '',
      category: categoryEl ? categoryEl.value : '',
      source: source,
      page: window.location.pathname,
      timestamp: new Date().toISOString()
    })
  })
  .then(function (response) {
    if (response.ok) {
      statusEl.textContent = 'Thank you! Your message has been sent.';
      statusEl.className = 'mt-3 text-sm text-green-400';
      messageEl.value = '';
      if (nameEl) nameEl.value = '';
      if (emailEl) emailEl.value = '';
      if (urlEl) urlEl.value = '';
      if (categoryEl) categoryEl.value = '';
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .catch(function () {
    statusEl.textContent = 'Something went wrong. Please try again.';
    statusEl.className = 'mt-3 text-sm text-red-400';
  });
}
