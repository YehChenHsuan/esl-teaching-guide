// Main JavaScript for Teaching Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initSmoothScrolling();
    initActiveNavigation();
    initImagePlaceholders();
    initLazyLoading();
    initAccessibility();
});

// Mobile menu functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Active navigation highlighting
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    function updateActiveLink() {
        let current = '';
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Call once on load
}

// Image placeholder management
function initImagePlaceholders() {
    const placeholders = document.querySelectorAll('.image-placeholder, .card-image-placeholder');
    
    placeholders.forEach(placeholder => {
        // Add click handler to show upload instructions
        placeholder.addEventListener('click', function() {
            showImageUploadInstructions(this);
        });
        
        // Add hover effect
        placeholder.addEventListener('mouseenter', function() {
            this.style.opacity = '0.8';
        });
        
        placeholder.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    });
}

// Show instructions for adding images
function showImageUploadInstructions(placeholder) {
    const modal = createModal();
    const imageName = placeholder.textContent.trim() || '圖片';
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>📸 添加圖片說明</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <h4>圖片位置：${imageName}</h4>
                <div class="upload-instructions">
                    <div class="instruction-item">
                        <i class="fas fa-folder"></i>
                        <div>
                            <strong>儲存位置：</strong>
                            <code>assets/images/</code> 資料夾
                        </div>
                    </div>
                    <div class="instruction-item">
                        <i class="fas fa-image"></i>
                        <div>
                            <strong>建議格式：</strong>
                            PNG, JPG (最大 2MB)
                        </div>
                    </div>
                    <div class="instruction-item">
                        <i class="fas fa-ruler"></i>
                        <div>
                            <strong>建議尺寸：</strong>
                            800x600px 或更高
                        </div>
                    </div>
                    <div class="instruction-item">
                        <i class="fas fa-code"></i>
                        <div>
                            <strong>HTML 代碼：</strong>
                            <textarea readonly>&lt;img src="assets/images/your-image.png" alt="${imageName}" class="responsive-image"&gt;</textarea>
                        </div>
                    </div>
                </div>
                <div class="instruction-note">
                    <i class="fas fa-lightbulb"></i>
                    <p>將截圖保存到 assets/images/ 資料夾，然後替換上面的佔位符代碼即可。</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal handlers
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => modal.remove());
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Copy to clipboard functionality
    const textarea = modal.querySelector('textarea');
    textarea.addEventListener('click', function() {
        this.select();
        document.execCommand('copy');
        showToast('HTML 代碼已複製到剪貼板');
    });
}

// Create modal element
function createModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <style>
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                opacity: 0;
                animation: fadeIn 0.3s ease forwards;
            }
            
            .modal-content {
                background: white;
                border-radius: 10px;
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                transform: translateY(20px);
                animation: slideUp 0.3s ease forwards;
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px;
                border-bottom: 1px solid #eee;
            }
            
            .modal-close {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #666;
            }
            
            .modal-body {
                padding: 20px;
            }
            
            .upload-instructions {
                margin: 20px 0;
            }
            
            .instruction-item {
                display: flex;
                align-items: flex-start;
                gap: 15px;
                margin-bottom: 15px;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 5px;
            }
            
            .instruction-item i {
                color: #007bff;
                margin-top: 2px;
            }
            
            .instruction-item code {
                background: #e9ecef;
                padding: 2px 6px;
                border-radius: 3px;
                font-family: monospace;
            }
            
            .instruction-item textarea {
                width: 100%;
                min-height: 60px;
                margin-top: 5px;
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 3px;
                font-family: monospace;
                font-size: 12px;
                resize: vertical;
                cursor: pointer;
            }
            
            .instruction-note {
                background: #fff3cd;
                border: 1px solid #ffeeba;
                color: #856404;
                padding: 15px;
                border-radius: 5px;
                margin-top: 20px;
                display: flex;
                align-items: flex-start;
                gap: 10px;
            }
            
            .instruction-note i {
                color: #f39c12;
                margin-top: 2px;
            }
            
            @keyframes fadeIn {
                to { opacity: 1; }
            }
            
            @keyframes slideUp {
                to { transform: translateY(0); }
            }
        </style>
    `;
    return modal;
}

// Toast notification system
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-${type === 'success' ? 'check' : 'info'}-circle"></i>
            <span>${message}</span>
        </div>
        <style>
            .toast {
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${type === 'success' ? '#28a745' : '#007bff'};
                color: white;
                padding: 15px 20px;
                border-radius: 5px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                z-index: 10001;
                transform: translateX(100%);
                animation: slideInRight 0.3s ease forwards, slideOutRight 0.3s ease 2.7s forwards;
            }
            
            .toast-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            @keyframes slideInRight {
                to { transform: translateX(0); }
            }
            
            @keyframes slideOutRight {
                to { transform: translateX(100%); }
            }
        </style>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        if (toast.parentNode) {
            toast.remove();
        }
    }, 3000);
}

// Lazy loading for images (when actual images are added)
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Accessibility improvements
function initAccessibility() {
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = '跳至主要內容';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 0 0 5px 5px;
        z-index: 10002;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Keyboard navigation for cards
    document.querySelectorAll('.feature-card, .resource-card').forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.querySelector('.card-link, .btn');
                if (link) {
                    link.click();
                }
            }
        });
    });
}

// Utility function to update page content
function updateContent(selector, content) {
    const element = document.querySelector(selector);
    if (element) {
        element.innerHTML = content;
        console.log(`Updated content for: ${selector}`);
    } else {
        console.warn(`Element not found: ${selector}`);
    }
}

// Function to add new image
function addImage(placeholder, imageSrc, altText) {
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = altText;
    img.className = 'responsive-image';
    img.style.cssText = `
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    `;
    
    placeholder.innerHTML = '';
    placeholder.appendChild(img);
    placeholder.style.border = 'none';
    placeholder.style.background = 'transparent';
}

// Export functions for global use
window.updateContent = updateContent;
window.addImage = addImage;
window.showToast = showToast;