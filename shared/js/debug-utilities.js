/**
 * Debug Utilities for OF THE CULTURE Cart System
 * 
 * Collection of debugging functions that can be activated during development
 * and QA testing to diagnose cart system issues.
 * 
 * Usage:
 * 1. Include this file in HTML when debugging is needed
 * 2. Call DebugUtils.enableCartDebugging() to activate comprehensive logging
 * 3. Call DebugUtils.disableCartDebugging() to clean up
 */

class DebugUtils {
    static debugEnabled = false;
    static originalMethods = {};

    /**
     * Enable comprehensive cart debugging with detailed console logging
     */
    static enableCartDebugging() {
        if (!window.cartManager) {
            console.warn('Cart Manager not found. Make sure cart-manager.js is loaded first.');
            return;
        }

        this.debugEnabled = true;
        const cart = window.cartManager;

        // Store original methods
        this.originalMethods.init = cart.init.bind(cart);
        this.originalMethods.updateConditionalBagVisibility = cart.updateConditionalBagVisibility.bind(cart);
        this.originalMethods.loadCartFromStorage = cart.loadCartFromStorage.bind(cart);

        // Override init with debug version
        cart.init = function() {
            this.loadCartFromStorage();
            this.updateCartDisplay();
            this.attachEventListeners();
            console.log('🐛 DEBUG: Cart Manager initialized', {
                itemCount: this.cart.itemCount,
                currentPage: window.location.pathname,
                bagIndicatorFound: !!document.querySelector('.bag-indicator')
            });
            
            // Force conditional visibility update after initialization
            setTimeout(() => {
                console.log('🐛 DEBUG: Force updating conditional visibility after 100ms...');
                this.updateConditionalBagVisibility();
            }, 100);
        };

        // Override updateConditionalBagVisibility with debug version
        cart.updateConditionalBagVisibility = function() {
            const bagIndicator = document.querySelector('.bag-indicator');
            const currentPath = window.location.pathname;
            
            console.log('🐛 === CONDITIONAL VISIBILITY DEBUG ===');
            console.log('🐛 Current path:', currentPath);
            console.log('🐛 Bag indicator element:', bagIndicator);
            console.log('🐛 Cart item count:', this.cart.itemCount);
            console.log('🐛 Cart items:', this.cart.items);
            
            if (!bagIndicator) {
                console.log('🐛 ❌ No bag indicator found on this page - exiting');
                return;
            }

            const isNonProductPage = !currentPath.includes('/pages/product/');
            
            console.log('🐛 Is non-product page?', isNonProductPage);
            console.log('🐛 Contains /pages/product/?', currentPath.includes('/pages/product/'));
            
            if (isNonProductPage) {
                console.log('🐛 ✅ Processing non-product page...');
                if (this.cart.itemCount > 0) {
                    console.log('🐛 🟢 SHOWING bag indicator - cart has', this.cart.itemCount, 'items');
                    bagIndicator.style.display = 'block';
                    console.log('🐛 Bag indicator display style set to:', bagIndicator.style.display);
                    console.log('🐛 Bag indicator computed style:', window.getComputedStyle(bagIndicator).display);
                } else {
                    console.log('🐛 🔴 HIDING bag indicator - cart is empty');
                    bagIndicator.style.display = 'none';
                }
            } else {
                console.log('🐛 ❌ This is a product page - skipping conditional visibility');
            }
            console.log('🐛 === END CONDITIONAL VISIBILITY DEBUG ===');
        };

        // Override loadCartFromStorage with debug version
        cart.loadCartFromStorage = function() {
            try {
                const stored = localStorage.getItem(this.storageKey);
                console.log('🐛 DEBUG: Raw localStorage data:', stored);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    console.log('🐛 DEBUG: Parsed cart data:', parsed);
                    this.cart = { ...this.cart, ...parsed };
                    console.log('🐛 DEBUG: Cart loaded from storage:', this.cart);
                } else {
                    console.log('🐛 DEBUG: No cart data found in localStorage');
                }
            } catch (error) {
                console.error('🐛 DEBUG: Error loading cart from storage:', error);
                this.resetCart();
            }
        };

        console.log('🐛 ===== CART DEBUGGING ENABLED =====');
        console.log('🐛 Call DebugUtils.disableCartDebugging() to restore normal operation');
        
        // Re-initialize with debug logging
        cart.init();
    }

    /**
     * Disable cart debugging and restore original methods
     */
    static disableCartDebugging() {
        if (!this.debugEnabled) {
            console.log('🐛 Cart debugging is not currently enabled');
            return;
        }

        if (!window.cartManager) {
            console.warn('Cart Manager not found');
            return;
        }

        const cart = window.cartManager;

        // Restore original methods
        cart.init = this.originalMethods.init;
        cart.updateConditionalBagVisibility = this.originalMethods.updateConditionalBagVisibility;
        cart.loadCartFromStorage = this.originalMethods.loadCartFromStorage;

        this.debugEnabled = false;
        console.log('🐛 ===== CART DEBUGGING DISABLED =====');
        console.log('🐛 Original cart methods restored');
    }

    /**
     * Get current cart state for debugging
     */
    static inspectCartState() {
        if (!window.cartManager) {
            console.warn('Cart Manager not found');
            return null;
        }

        const cart = window.cartManager;
        const state = {
            cart: cart.getCart(),
            localStorage: localStorage.getItem(cart.storageKey),
            bagIndicator: document.querySelector('.bag-indicator'),
            currentPage: window.location.pathname,
            debugEnabled: this.debugEnabled
        };

        console.table(state);
        return state;
    }

    /**
     * Test conditional visibility across different scenarios
     */
    static testConditionalVisibility() {
        console.log('🧪 === CONDITIONAL VISIBILITY TEST ===');
        
        const scenarios = [
            { path: '/', expected: 'conditional' },
            { path: '/pages/lookbook/', expected: 'conditional' },
            { path: '/pages/shop/', expected: 'conditional' },
            { path: '/pages/product/nakamoto/', expected: 'always visible' },
            { path: '/pages/product/weme/', expected: 'always visible' }
        ];

        scenarios.forEach(scenario => {
            const isNonProduct = !scenario.path.includes('/pages/product/');
            console.log(`🧪 Path: ${scenario.path} | Non-product: ${isNonProduct} | Expected: ${scenario.expected}`);
        });

        console.log('🧪 === END TEST ===');
    }

    /**
     * Quick reference for common debugging commands
     */
    static help() {
        console.log(`
🐛 === DEBUG UTILITIES HELP ===

Quick Commands:
- DebugUtils.enableCartDebugging()     // Enable comprehensive logging
- DebugUtils.disableCartDebugging()    // Restore normal operation  
- DebugUtils.inspectCartState()        // View current cart state
- DebugUtils.testConditionalVisibility() // Test path detection logic
- DebugUtils.help()                    // Show this help

Browser Console Testing:
1. Open browser console (F12)
2. Include debug-utilities.js in your HTML
3. Run DebugUtils.enableCartDebugging()
4. Navigate between pages to see detailed logs
5. Run DebugUtils.disableCartDebugging() when done

Common Issues:
- Bag not showing: Check cart.itemCount > 0
- Wrong page detection: Verify currentPath logic
- LocalStorage issues: Check stored data format
        `);
    }
}

// Make available globally when loaded
if (typeof window !== 'undefined') {
    window.DebugUtils = DebugUtils;
    console.log('🐛 Debug Utilities loaded. Run DebugUtils.help() for usage info.');
}