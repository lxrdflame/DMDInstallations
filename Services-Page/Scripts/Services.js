document.addEventListener("DOMContentLoaded", function() {
    const servicesRoot = document.getElementById('servicesRoot');
    if (!servicesRoot) return;

    const services = [
        {
            image: '../../Images/DSTV-image.jpg',
            PageUrl: '../Service-pages/DSTV-page.html',
            title: 'DSTV Installation',
            description: 'DSTV installation and maintenance including dish alignment, signal testing, and troubleshooting.',
            BookService: 'Request Service'
        },
        {
            image: '../../Images/CCTV-Image.png',
            PageUrl: '../Service-pages/CCTV-page.html',
            title: 'CCTV Installation',
            description: 'CCTV installation and maintenance services for residential and commercial properties.',
            BookService: 'Request Service'
        },
        {
            image: '../../Images/Alarm-Image.png',
            PageUrl: '../Service-pages/Alarm-page.html',
            title: 'Alarm Installation',
            description: 'Alarm installation and monitoring services for residential and commercial properties.',
            BookService: 'Request Service'
        },
        {
            image: '../../Images/Wifi-Image.png',
            PageUrl: '../Service-pages/Wifi-page.html',
            title: 'Wifi Installation',
            description: 'Professional wifi installation and optimization services for homes and businesses.',
            BookService: 'Request Service'
        },
        {
            image: '../../Images/Surround-Sound.png',
            PageUrl: '../Service-pages/SoundSystem-page.html',
            title: 'Surround Sound Installation',
            description: 'Custom surround sound system installation for an immersive audio experience.',
            BookService: 'Request Service'
        }
    ];

    // Clear any existing content (optional)
    servicesRoot.innerHTML = '';

    services.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = 'service-item';

        serviceDiv.innerHTML = `
            <img src="${service.image}" alt="${service.title}">
            <div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <button class="request-service-btn" onclick="location.href='${service.PageUrl}'">${service.BookService}</button>
            </div>
        `;

        servicesRoot.appendChild(serviceDiv);
    });


    //Side Bar toggle
    const SideBarToggle = document.querySelector('.toggle-sidebar-btn');
    const sidebar = document.querySelector('.sidebar');
    let isSidebarOpen = false;
    let hamburgerMenu = "&#9776;";
    let closeMenu = "&times;";

    
    if (SideBarToggle) {
        // ensure there's a span inside the button to update the icon/text
        let buttonSpan = SideBarToggle.querySelector('span');
        if (!buttonSpan) {
            buttonSpan = document.createElement('span');
            // move any existing children into the span
            while (SideBarToggle.firstChild) {
                buttonSpan.appendChild(SideBarToggle.firstChild);
            }
            SideBarToggle.appendChild(buttonSpan);
        }

        SideBarToggle.addEventListener('click', () => {
           if (!isSidebarOpen)
           {
                isSidebarOpen = true;
                gsap.to(".sidebar", {x: 0, duration: 1 });
           }
           else if (isSidebarOpen)
            {
               isSidebarOpen = false;
                gsap.to(".sidebar", {x: -200, duration: 1 });
           }
            buttonSpan.innerHTML = isSidebarOpen ? closeMenu : hamburgerMenu;
        });
    }


});
