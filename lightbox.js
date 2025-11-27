document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.modal-close');
    const modalImg = document.querySelector('.modal-main-image');
    const modalTitle = document.querySelector('.modal-title');
    const modalDesc = document.querySelector('.modal-description');
    const modalCat = document.querySelector('.modal-category');
    const prevBtn = document.querySelector('.modal-prev');
    const nextBtn = document.querySelector('.modal-next');
    const dotsContainer = document.querySelector('.modal-dots');
    
    let currentImages = [];
    let currentImageIndex = 0;

    // Function to update modal content based on index
    function updateImage() {
        modalImg.style.opacity = '0'; // Simple fade effect
        
        setTimeout(() => {
            modalImg.src = currentImages[currentImageIndex];
            modalImg.style.opacity = '1';
        }, 200);

        // Update dots
        const dots = document.querySelectorAll('.modal-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentImageIndex);
        });

        // Show/Hide arrows based on number of images
        if (currentImages.length > 1) {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
        } else {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        }
    }

    // Open Modal
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            // Get data from attributes
            const title = this.getAttribute('data-title') || this.querySelector('h3').innerText;
            const category = this.getAttribute('data-category');
            const desc = this.getAttribute('data-desc') || this.querySelector('p').innerText;
            
            // Parse images array
            try {
                currentImages = JSON.parse(this.getAttribute('data-images'));
            } catch (e) {
                // Fallback if JSON fails or single image
                currentImages = [this.querySelector('img').src];
            }

            // Set Content
            modalTitle.innerText = title;
            modalCat.innerText = category;
            modalDesc.innerText = desc;
            
            currentImageIndex = 0;
            
            // Create Dots
            dotsContainer.innerHTML = '';
            if (currentImages.length > 1) {
                currentImages.forEach((_, index) => {
                    const dot = document.createElement('div');
                    dot.classList.add('modal-dot');
                    if (index === 0) dot.classList.add('active');
                    dot.addEventListener('click', (e) => {
                        e.stopPropagation(); // Prevent modal close
                        currentImageIndex = index;
                        updateImage();
                    });
                    dotsContainer.appendChild(dot);
                });
            }

            updateImage();
            modal.style.display = 'flex';
            // Slight delay to allow display:flex to apply before adding opacity class
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close Modal Logic
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300); // Match CSS transition time
    }

    closeBtn.addEventListener('click', closeModal);
    
    // Close on click outside content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // Navigation Logic
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex + 1) % currentImages.length;
        updateImage();
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
        updateImage();
    });
});