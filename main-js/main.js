document.addEventListener("DOMContentLoaded", function()
{



    const currentPage = window.location.pathname.split("/").pop(); // get file name (e.g. 'about.html')
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

    (function(){
        const root = document.getElementById('nav-root');

        const nav = document.createElement('nav');
        nav.className = 'navbar';
        nav.setAttribute('aria-label','Main Navigation');

        const brand = document.createElement('a');
        brand.className = 'brand';
        brand.href = '#';

        // Use image from images/INSTALLATION.png as the brand logo
        const img = document.createElement('img');
        img.src = '../../Images/INSTALLATIONS-2.png';
        img.alt = 'DMD INSTALLATIONS';
        img.className = 'logo';
        brand.appendChild(img);
        nav.appendChild(brand);

        const servicebtn = document.createElement('a');
        servicebtn.className = 'service-btn';
        servicebtn.href = '../../Contact-Page/HTML/Contact.html';
        servicebtn.textContent = 'Request Service';
        nav.appendChild(servicebtn);

        const ul = document.createElement('ul');
        ul.className = 'nav-list';

        const items = [
            { text: 'Home', href: '/index.html' },
            { text: 'Services', href: '/Services-Page/HTML/Services.html' },
            { text: 'About', href: '/About-Page/HTML/About.html' },
            { text: 'Contact', href: '/Contact-Page/HTML/Contact.html' }
        ];

        items.forEach(it => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.className = 'nav-link';
            a.href = it.href;
            a.textContent = it.text;
            a.addEventListener('click', () => {
                toggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('open');
            });
            li.appendChild(a);
            ul.appendChild(li);
        });

        nav.appendChild(ul);
        root.appendChild(nav);

        
        // basic active-link handling
        nav.addEventListener('click', (e) => {
            const link = e.target.closest('.nav-link');
            if (!link) return;
            nav.querySelectorAll('.nav-link').forEach(x => x.classList.remove('active'));
            link.classList.add('active');
        });
    })();

});
