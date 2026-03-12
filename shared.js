// GZS shared nav, footer, mobile menu
function renderNav(activePage) {
  const links = [
    { id: 'home', label: 'Home', href: 'index.html' },
    { id: 'online', label: 'Online Coaching', href: 'online-coaching.html' },
    { id: 'inperson', label: 'In-Person', href: 'in-person.html' },
    { id: 'nicole', label: 'Treat & Train', href: 'treat-and-train.html' },
    { id: 'collective', label: 'The Collective', href: 'collective.html' },
    { id: 'about', label: 'About', href: 'about.html' },
    { id: 'contact', label: 'Contact', href: 'contact.html' },
  ];
  const navLinks = links.map(l =>
    `<li><a href="${l.href}"${l.id === activePage ? ' class="active"' : ''}>${l.label}</a></li>`
  ).join('');
  const mobLinks = links.map(l =>
    `<a href="${l.href}">${l.label}</a>`
  ).join('');
  document.getElementById('mainNav').innerHTML = `
    <a class="nav-logo" href="index.html">Ground <span>Zero</span> Strength</a>
    <ul class="nav-links">${navLinks}</ul>
    <a class="nav-cta" href="contact.html">Get Started</a>
    <button class="mob-toggle" onclick="document.getElementById('mobMenu').classList.toggle('open')" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  `;
  document.getElementById('mobMenu').innerHTML = mobLinks;
  window.addEventListener('scroll', () => {
    document.getElementById('mainNav').style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,0.07)' : 'none';
  });
}
function renderFooter(el) {
  el.innerHTML = `
    <div class="wrap">
      <div class="foot-g">
        <div>
          <a class="foot-logo" href="index.html">Ground <span>Zero</span> Strength</a>
          <p class="foot-tag">Private barbell coaching in Twin Falls, Idaho. Starting Strength affiliate. In-person, hybrid, and online.</p>
        </div>
        <div class="foot-col">
          <h4>Coaching</h4>
          <ul>
            <li><a href="online-coaching.html">Online Coaching</a></li>
            <li><a href="in-person.html">In-Person</a></li>
            <li><a href="in-person.html">Hybrid</a></li>
            <li><a href="treat-and-train.html">Treat &amp; Train</a></li>
            <li><a href="collective.html">The Collective</a></li>
          </ul>
        </div>
        <div class="foot-col">
          <h4>Info</h4>
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="https://links.gzstrength.com" target="_blank">Free Guides</a></li>
            <li><a href="https://x.com/gzstrength" target="_blank">X / Twitter</a></li>
          </ul>
        </div>
      </div>
      <div class="foot-bot">
        <p>© 2026 Ground Zero Strength. All rights reserved.</p>
        <p>647 Filer Ave, Twin Falls, ID</p><a href="tel:+12087318089" style="font-family:var(--mono);font-size:11px;letter-spacing:0.08em;color:var(--white);text-decoration:none;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);padding:8px 16px;margin-top:8px;display:inline-block;transition:all 0.2s;" onmouseover="this.style.borderColor='var(--accent)';this.style.color='var(--accent)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.15)';this.style.color='var(--white)'">(208) 731-8089</a>
      </div>
    </div>
  `;
}
