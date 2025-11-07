document.addEventListener("DOMContentLoaded", function()
{
    


 // Sample image data - replace with your own images
        const images = [
            {
                url: 'Images/DSTV-image.jpg',
                title: 'DSTV Installation',
                description: 'Dstv installations and Repairs including Multi-room setups, Dish Alignments, and Decoder Configurations. (Includes TV Mounting services).',
                details: 'More...',
                Pageurl: 'Services-Page/Service-pages/DSTV-page.html'
            },
            {
                url: 'Images/CCTV-Image.png',
                title: 'CCTV Camera Setup',
                description: 'Professional CCTV camera installations for homes and businesses. We provide high-quality surveillance solutions to ensure your property\'s safety and security.',
                details: 'More...',
                Pageurl: 'Services-Page/Service-pages/CCTV-page.html'
            },
            {
                url: 'Images/Alarm-Image.png',
                title: 'Alarm System Installation',
                description: 'Expert installation of alarm systems for residential and commercial properties. We ensure your safety with top-notch security solutions.',
                details: 'More...',
                Pageurl: 'Services-Page/Service-pages/Alarm-page.html'
            },
            {
                url: 'Images/Wifi-Image.png',
                title: 'Wifi Installation',
                description: 'Reliable wifi installation services for homes and businesses. We ensure seamless connectivity with our expert solutions.',
                details: 'More...',
                Pageurl: 'Services-Page/Service-pages/Wifi-page.html'

            },
            {
                url: 'Images/Surround-Sound.png',
                title: 'Surround Sound Installation',
                description: 'Immersive surround sound systems for a cinematic experience at home. We design and install custom audio solutions tailored to your space.',
                details: 'More...',
                Pageurl: 'Services-Page/Service-pages/SoundSystem-page.html'
            }
        ];

        // DOM Elements
        const carousel = document.querySelector('.carousel');
        const indicatorsContainer = document.querySelector('.indicators');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        let currentIndex = 0;
        let autoSlideInterval;

        // Initialize the carousel
        function initCarousel() {
            // Create carousel items
            images.forEach((image, index) => {
                const carouselItem = document.createElement('div');
                carouselItem.className = 'carousel-item';
                
                // Create description panel
                const descriptionPanel = document.createElement('div');
                descriptionPanel.className = 'description-panel';
                
                const title = document.createElement('h2');
                title.className = 'image-title';
                title.textContent = image.title;
                
                const description = document.createElement('p');
                description.className = 'image-description';
                description.textContent = image.description;
                
                const details = document.createElement('button');
                details.className = 'More-btn';
                details.textContent = image.details;
               details.addEventListener('click', () => {
                    window.location.href = image.Pageurl;});
                
                descriptionPanel.appendChild(title);
                descriptionPanel.appendChild(description);
                descriptionPanel.appendChild(details);
                
                // Create image panel
                const imagePanel = document.createElement('div');
                imagePanel.className = 'image-panel';
                imagePanel.style.backgroundImage = `url(${image.url})`;
                
                // Add panels to carousel item
                carouselItem.appendChild(descriptionPanel);
                carouselItem.appendChild(imagePanel);
                
                // Add carousel item to carousel
                carousel.appendChild(carouselItem);
                
                // Create indicators
                const indicator = document.createElement('div');
                indicator.className = 'indicator';
                if (index === 0) indicator.classList.add('active');
                indicator.addEventListener('click', () => goToSlide(index));
                indicatorsContainer.appendChild(indicator);
            });
            
            // Start auto sliding
            startAutoSlide();
        }

        // Go to a specific slide
        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        // Update carousel position and active indicator
        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Update indicators
            document.querySelectorAll('.indicator').forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }

        // Next slide
        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        }

        // Previous slide
        function prevSlide() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        }

        // Start auto sliding
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 5000);
        }

        // Stop auto sliding
        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        // Event listeners
        prevBtn.addEventListener('click', () => {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });

        nextBtn.addEventListener('click', () => {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });

        // Pause auto slide on hover
        carousel.addEventListener('mouseenter', stopAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);

        // Initialize the carousel
        initCarousel();
});