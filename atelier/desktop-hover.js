/**
 * Desktop-Only Hover System
 * Prevents mobile shadow box issues by only enabling hover effects for true mouse devices
 */

(function() {
    'use strict';
    
    let isDesktopDevice = false;
    let hasMouseMoved = false;
    
    // Detect true mouse device by actual mouse movement
    function detectMouseDevice() {
        document.addEventListener('mousemove', function() {
            if (!hasMouseMoved) {
                hasMouseMoved = true;
                isDesktopDevice = true;
                enableDesktopHoverEffects();
                console.log('OF THE CULTURE: Desktop mouse detected - hover effects enabled');
            }
        }, { once: true, passive: true });
    }
    
    // Enable hover effects only for desktop
    function enableDesktopHoverEffects() {
        document.body.classList.add('desktop-hover-enabled');
        
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                if (isDesktopDevice) {
                    this.classList.add('hover-active');
                }
            }, { passive: true });
            
            card.addEventListener('mouseleave', function() {
                if (isDesktopDevice) {
                    this.classList.remove('hover-active');
                }
            }, { passive: true });
        });
    }
    
    // Prevent any touch-triggered hover states
    function preventTouchHover() {
        document.addEventListener('touchstart', function() {
            // Disable hover effects if touch is detected
            isDesktopDevice = false;
            document.body.classList.remove('desktop-hover-enabled');
            
            // Remove any active hover classes
            const activeCards = document.querySelectorAll('.product-card.hover-active');
            activeCards.forEach(card => {
                card.classList.remove('hover-active');
            });
        }, { passive: true });
    }
    
    // Initialize when DOM is ready
    function init() {
        detectMouseDevice();
        preventTouchHover();
        console.log('OF THE CULTURE: Mobile-safe hover system initialized');
    }
    
    // Start detection
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();