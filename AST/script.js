document.addEventListener('DOMContentLoaded', function() {
    // Space Program Animations
    const circles = document.querySelectorAll('.circle');
    const astronautImg = document.querySelector('.astronaut-img');
    
    function animateOnScroll() {
        const scrollPosition = window.scrollY;
        const elementPosition = astronautImg.getBoundingClientRect().top + scrollPosition;
        const windowHeight = window.innerHeight;
        
        if (scrollPosition > elementPosition - windowHeight + 100) {
            circles.forEach(circle => {
                circle.style.animationPlayState = 'running';
            });
            astronautImg.style.animationPlayState = 'running';
        }
    }
    
    circles.forEach(circle => {
        circle.style.animationPlayState = 'paused';
    });
    astronautImg.style.animationPlayState = 'paused';
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Timeline Slider Functionality
    const timelineTrack = document.querySelector('.timeline-track');
    const timelineSlides = document.querySelectorAll('.timeline-slide');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentSlide = 0;
    const slideCount = timelineSlides.length;
    
    // Create dots
    timelineSlides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.slider-dots button');
    dots[0].classList.add('active');
    
    function updateSlider() {
        timelineTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSlider();
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlider();
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-advance slides (optional)
    let slideInterval = setInterval(nextSlide, 5000);
    
    timelineTrack.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    timelineTrack.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
    
    // Gallery Hover Effects
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
});