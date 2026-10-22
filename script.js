// Copy-email button
(function () {
  var btn = document.getElementById('copy');
  var label = document.getElementById('copyLabel');
  var email = document.getElementById('email');
  if (!btn || !label || !email) return;

  function done(text) {
    label.textContent = text;
    setTimeout(function () { label.textContent = 'Copy email address'; }, 1800);
  }

  btn.addEventListener('click', function () {
    var text = email.textContent.trim();
    var p = navigator.clipboard && navigator.clipboard.writeText
      ? navigator.clipboard.writeText(text)
      : Promise.reject();
    p.then(function () { done('Copied'); }, function () {
      // Fallback: select the address so it can be copied manually
      var r = document.createRange();
      r.selectNodeContents(email);
      var s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
      done('Press copy');
    });
  });
})();
