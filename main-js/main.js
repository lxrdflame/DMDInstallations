document.addEventListener("DOMContentLoaded", function() {
    (function(){
        const root = document.getElementById('nav-root');
        if (!root) return; // Safety check

        const nav = document.createElement('nav');
        nav.className = 'navbar';
        nav.setAttribute('aria-label','Main Navigation');

        const brand = document.createElement('a');
        brand.className = 'brand';
        brand.href = '/'; // Root home page

        // Use image from images/INSTALLATION.png as the brand logo
        const img = document.createElement('img');
        img.src = '/DMDInstallations/Images/INSTALLATIONS-2.png';
        img.alt = 'DMD INSTALLATIONS';
        img.className = 'logo';
        brand.appendChild(img);
        nav.appendChild(brand);

        const servicebtn = document.createElement('a');
        servicebtn.className = 'service-btn';
        servicebtn.href = '/Contact-Page/HTML/Contact.html';
        servicebtn.textContent = 'Request Service';
        nav.appendChild(servicebtn);

        const ul = document.createElement('ul');
        ul.className = 'nav-list';

        // Use absolute paths from root for consistency
        const items = [
            { text: 'Home', href: '/DMDInstallations/index.html' },
            { text: 'Services', href: '/DMDInstallations/Services-Page/HTML/Services.html' },
            { text: 'About', href: '/DMDInstallations/About-Page/HTML/About.html' },
            { text: 'Contact', href: '/DMDInstallations/Contact-Page/HTML/Contact.html' }
        ];

        items.forEach(it => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.className = 'nav-link';
            a.href = it.href;
            a.textContent = it.text;
            li.appendChild(a);
            ul.appendChild(li);
        });

        nav.appendChild(ul);
        root.appendChild(nav);

        // Active link handling - compare with current page
        const currentPage = window.location.pathname;
        
        // Handle home page special case
        const normalizedCurrentPage = currentPage === '/' || currentPage.endsWith('/index.html') 
            ? '/index.html' 
            : currentPage;
        
        nav.querySelectorAll('.nav-link').forEach(link => {
            const linkPath = link.getAttribute('href');
            if (normalizedCurrentPage === linkPath || 
                (normalizedCurrentPage === '/' && linkPath === '/index.html')) {
                link.classList.add('active');
            }
        });

        // Basic click handling for mobile menu (if you have one)
        nav.addEventListener('click', (e) => {
            const link = e.target.closest('.nav-link');
            if (!link) return;
            
            // If you have a mobile menu toggle, close it here
            // const toggle = document.querySelector('[aria-expanded]');
            // if (toggle) {
            //     toggle.setAttribute('aria-expanded', 'false');
            //     nav.classList.remove('open');
            // }
        });
    })();
});