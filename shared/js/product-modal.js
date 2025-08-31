/**
 * OF THE CULTURE - Product Modal System
 * Mobile-friendly error and success messaging
 */

// Create modal HTML structure
function createModal() {
    const modalHTML = `
        <div id="otc-modal" class="otc-modal" style="display: none;">
            <div class="otc-modal-backdrop" onclick="closeModal()"></div>
            <div class="otc-modal-content">
                <div class="otc-modal-header">
                    <button class="otc-modal-close" onclick="closeModal()" aria-label="Close modal">&times;</button>
                </div>
                <div class="otc-modal-body">
                    <p id="otc-modal-message"></p>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add modal styles
    const modalStyles = `
        <style>
            .otc-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 2000;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }
            
            .otc-modal-backdrop {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(4px);
            }
            
            .otc-modal-content {
                position: relative;
                background-color: var(--color-white);
                border: 2px solid var(--color-black);
                border-radius: 4px;
                padding: 24px;
                max-width: 320px;
                width: 100%;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
                animation: modalSlideIn 0.3s ease-out;
                margin: 0 auto;
            }
            
            @keyframes modalSlideIn {
                from {
                    opacity: 0;
                    transform: translateY(-20px) scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
            
            .otc-modal-header {
                display: flex;
                justify-content: flex-end;
                margin-bottom: 16px;
            }
            
            .otc-modal-close {
                background: none;
                border: none;
                font-size: 24px;
                font-weight: 300;
                color: var(--color-black);
                cursor: pointer;
                padding: 0;
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 2px;
                transition: background-color 0.2s ease;
            }
            
            .otc-modal-close:hover {
                background-color: rgba(0, 0, 0, 0.1);
            }
            
            .otc-modal-body {
                font-family: 'JetBrains Mono', monospace;
                font-size: 1rem;
                line-height: 1.4;
                color: var(--color-black);
                text-align: center;
            }
            
            .otc-modal-body p {
                margin: 0;
            }
            
            /* Mobile responsiveness */
            @media (max-width: 768px) {
                .otc-modal {
                    padding: 16px;
                    align-items: flex-start;
                    padding-top: 100px;
                }
                
                .otc-modal-content {
                    padding: 16px 20px;
                    border-radius: 6px;
                    max-width: 280px;
                    border-width: 1px;
                }
                
                .otc-modal-header {
                    margin-bottom: 8px;
                }
                
                .otc-modal-body {
                    font-size: 0.85rem;
                    line-height: 1.3;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', modalStyles);
}

// Show modal with message
function showModal(message, type = 'info') {
    let modal = document.getElementById('otc-modal');
    if (!modal) {
        createModal();
        modal = document.getElementById('otc-modal');
    }
    
    const messageElement = document.getElementById('otc-modal-message');
    messageElement.textContent = message;
    
    // Add type-specific styling
    const modalContent = modal.querySelector('.otc-modal-content');
    modalContent.className = 'otc-modal-content';
    if (type === 'error') {
        modalContent.style.borderColor = 'var(--color-gold)';
        modalContent.style.backgroundColor = '#fffbf5';
    } else if (type === 'success') {
        modalContent.style.borderColor = 'var(--color-gold)';
    } else {
        modalContent.style.borderColor = 'var(--color-black)';
    }
    
    modal.style.display = 'flex';
    
    // Auto-close after 3 seconds for success messages
    if (type === 'success') {
        setTimeout(() => {
            closeModal();
        }, 3000);
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('otc-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Keyboard handling
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Scroll-triggered mobile cart
function initScrollCart() {
    const mobileCart = document.querySelector('.mobile-form');
    const mainImage = document.querySelector('.image-container.main-view, .product-gallery .image-container:first-child');
    
    if (!mobileCart || !mainImage) {
        console.warn('OF THE CULTURE: Mobile cart or main image not found');
        return;
    }
    
    let hasTriggered = false;
    let hasScrolled = false;
    
    // Simplified early trigger - much more aggressive timing
    const scrollHandler = () => {
        // Simple trigger at just 150px scroll - very early
        if (window.scrollY >= 150 && !hasTriggered) {
            // Use requestAnimationFrame for smooth animation
            requestAnimationFrame(() => {
                mobileCart.classList.add('visible');
                hasTriggered = true;
                console.log('OF THE CULTURE: Mobile cart triggered at 150px scroll (very early)');
            });
            window.removeEventListener('scroll', scrollHandler);
        }
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });
    
    // Fallback: Show cart after 5 seconds if not triggered by scroll
    setTimeout(() => {
        if (!hasTriggered) {
            mobileCart.classList.add('visible');
            hasTriggered = true;
            console.log('OF THE CULTURE: Mobile cart triggered via fallback timer');
        }
    }, 5000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('OF THE CULTURE: DOM loaded, screen width:', window.innerWidth);
    // Initialize mobile cart on mobile devices
    if (window.innerWidth <= 768) {
        console.log('OF THE CULTURE: Initializing mobile cart for mobile device');
        // Delay slightly to ensure DOM is fully rendered
        setTimeout(() => {
            initScrollCart();
        }, 100);
    } else {
        console.log('OF THE CULTURE: Desktop detected, mobile cart not initialized');
    }
});

// Also initialize on resize if switching to mobile view
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-form.visible')) {
        initScrollCart();
    }
});

// Export functions for global use
window.showModal = showModal;
window.closeModal = closeModal;