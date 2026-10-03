(function () {
  // Links to the old single-page sections now land on the page that holds them.
  // Runs on the homepage only; any other fragment is left alone.
  if (document.body.getAttribute('data-page') === 'home') {
    var moved = {
      capabilities: 'production-studio/#capabilities',
      process: 'production-studio/#process',
      agencies: 'production-studio/#agencies',
      rates: 'production-studio/#rates',
      work: 'work/#work',
      contact: 'contact/#contact'
    };
    var go = function () {
      var target = moved[window.location.hash.slice(1)];
      if (target) { window.location.replace(target); }
    };
    go();
    window.addEventListener('hashchange', go);
  }

  // Running timecode at 24 fps, counted from page load.
  var tc = document.getElementById('timecode');
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  if (tc && !still && window.requestAnimationFrame) {
    var start = performance.now();
    var last = -1;
    (function tick(now) {
      var frames = Math.floor(((now - start) / 1000) * 24);
      if (frames !== last) {
        last = frames;
        var f = frames % 24;
        var s = Math.floor(frames / 24);
        tc.textContent = pad(Math.floor(s / 3600) % 24) + ':' + pad(Math.floor(s / 60) % 60) + ':' + pad(s % 60) + ':' + pad(f);
      }
      requestAnimationFrame(tick);
    })(start);
  }

  // Copy the email address, with a select-the-text fallback.
  var btn = document.getElementById('copy-email');
  var link = document.getElementById('email-link');
  if (btn && link) {
    btn.addEventListener('click', function () {
      var address = link.textContent.trim();
      function selectIt() {
        var range = document.createRange();
        range.selectNodeContents(link);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        btn.textContent = 'Selected';
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(address).then(function () {
          btn.textContent = 'Copied';
        }, selectIt);
      } else {
        selectIt();
      }
      setTimeout(function () { btn.textContent = 'Copy address'; }, 2200);
    });
  }
})();
