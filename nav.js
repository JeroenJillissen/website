(function () {
  var u = 'jeroen', d = 'jillissen.com';
  var mailto = 'mailto:' + u + '@' + d;

  // ── Add or remove pages here ──────────────────────────────────────────────
  var PAGES = [
    { slug: '',     label: 'About' },
    { slug: 'now/', label: 'Now'   },
  ];
  // ─────────────────────────────────────────────────────────────────────────

  var path = window.location.pathname;
  var inSub = /\/(now|notes|resume)(\/|$)/.test(path);
  var base  = inSub ? '../' : './';

  function activeSlug() {
    if (/\/now(\/|$)/.test(path))    return 'now/';
    if (/\/notes(\/|$)/.test(path))  return 'notes/';
    if (/\/resume(\/|$)/.test(path)) return 'resume/';
    return '';
  }

  var active = activeSlug();

  // Nav
  var nav = document.getElementById('site-nav');
  if (nav) {
    var html = '';
    PAGES.forEach(function (p) {
      var cls = p.slug === active ? ' class="active"' : '';
      html += '<a href="' + base + p.slug + '"' + cls + '>' + p.label + '</a>';
    });
    html += '<span class="nav-break"></span>';
    html += '<a class="nav-contact" href="' + mailto + '">Email</a>';
    html += '<a class="nav-contact" href="https://www.linkedin.com/in/jeroenjillissen/" target="_blank" rel="noopener">LinkedIn</a>';
    html += '<a class="nav-contact" href="https://bsky.app/profile/jillissen.com" target="_blank" rel="noopener">Bluesky</a>';
    nav.innerHTML = html;
  }

  // Footer
  var footer = document.getElementById('site-footer');
  if (footer) {
    footer.innerHTML =
      '<a href="' + mailto + '">Email</a>' +
      '<span class="footer-sep"> / </span>' +
      '<a href="https://www.linkedin.com/in/jeroenjillissen/" target="_blank" rel="noopener">LinkedIn</a>' +
      '<span class="footer-sep"> / </span>' +
      '<a href="https://bsky.app/profile/jillissen.com" target="_blank" rel="noopener">Bluesky</a>';
  }
})();
