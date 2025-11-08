document.addEventListener("DOMContentLoaded", function() {
    const servicesRoot = document.getElementById('WiFiRoot');
    if (!servicesRoot) return;

    const services = [
        {
            image: '../../Images/WiFi-Home.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Home Wi-Fi Installation',
            description:
                'Get reliable Wi-Fi coverage for your entire home — perfect setup for streaming, gaming, and smart home devices. Includes router setup and signal optimization.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/WiFi-Office.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Office Wi-Fi Network Setup',
            description:
                'Professional-grade Wi-Fi solutions for offices and small businesses — includes network security, multiple device support, and high-speed internet optimization.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/WiFi-Extender.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Wi-Fi Range Extender Setup',
            description:
                'Eliminate dead zones in your home or office — our technicians configure range extenders or mesh systems for seamless connectivity throughout your space.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/WiFi-Mesh.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Mesh Wi-Fi System Installation',
            description:
                'Experience uninterrupted internet coverage with a mesh Wi-Fi system — ideal for large homes, multi-floor buildings, or properties with thick walls.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/WiFi-RouterUpgrade.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Router Upgrade & Configuration',
            description:
                'Upgrade to a high-speed router for faster, more secure connections — includes setup, firmware updates, and custom configuration for your devices.',
            BookService: 'Request Upgrade'
        },
        {
            image: '../../Images/WiFi-Security.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Wi-Fi Security Configuration',
            description:
                'Keep your network safe from unauthorized access — we set up strong passwords, encryption, and guest networks to secure your connection.',
            BookService: 'Request Setup'
        },
        {
            image: '../../Images/WiFi-Troubleshooting.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Wi-Fi Troubleshooting & Repair',
            description:
                'Experiencing slow speeds or connection drops? Our experts diagnose and fix network issues to restore stable and fast connectivity.',
            BookService: 'Request Repair'
        },
        {
            image: '../../Images/WiFi-Hotspot.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Wi-Fi Hotspot Installation',
            description:
                'Set up a reliable Wi-Fi hotspot for public areas, cafés, or events — includes secure login pages and bandwidth control for multiple users.',
            BookService: 'Request Installation'
        },
        {
            image: '../../Images/WiFi-NetworkDesign.jpg',
            PageUrl: '../../Booking-Page/HTML/Booking-Page.html',
            title: 'Custom Network Design',
            description:
                'We design and install complete networking solutions — from routers and switches to access points — tailored to your home or business needs.',
            BookService: 'Request Service'
        }
    ];

    // Clear existing content
    servicesRoot.innerHTML = '';

    services.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = 'WiFi-item';

        serviceDiv.innerHTML = `
            <img src="${service.image}" alt="${service.title}">
            <hr> 
            <div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <button class="request-service-btn" onclick="location.href='${service.PageUrl}'">${service.BookService}</button>
            </div>
        `;

        servicesRoot.appendChild(serviceDiv);
    });
});
