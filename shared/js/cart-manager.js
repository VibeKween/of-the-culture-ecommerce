/**
 * Shopping Cart Management System - OF THE CULTURE
 * LocalStorage-based cart with persistence across sessions
 */

class CartManager {
    constructor() {
        this.cart = {
            items: [],
            subtotal: 0,
            itemCount: 0,
            lastUpdated: null
        };
        
        this.storageKey = 'of-the-culture-cart';
        this.init();
    }

    init() {
        this.loadCartFromStorage();
        this.updateCartDisplay();
        this.attachEventListeners();
        console.log('Cart Manager initialized');
    }

    // LocalStorage Operations
    loadCartFromStorage() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            if (stored) {
                const parsed = JSON.parse(stored);
                this.cart = { ...this.cart, ...parsed };
                console.log('Cart loaded from storage:', this.cart);
            }
        } catch (error) {
            console.error('Error loading cart from storage:', error);
            this.resetCart();
        }
    }

    saveCartToStorage() {
        try {
            this.cart.lastUpdated = Date.now();
            localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
            console.log('Cart saved to storage');
        } catch (error) {
            console.error('Error saving cart to storage:', error);
        }
    }

    // Cart Operations
    addItem(productId, name, price, size = 'OS', quantity = 1) {
        const addQuantity = parseInt(quantity) || 1;
        const existingItemIndex = this.cart.items.findIndex(
            item => item.productId === productId && item.size === size
        );

        if (existingItemIndex >= 0) {
            // Item exists, add to existing quantity
            this.cart.items[existingItemIndex].quantity += addQuantity;
            this.cart.items[existingItemIndex].total = 
                this.cart.items[existingItemIndex].quantity * this.cart.items[existingItemIndex].price;
        } else {
            // New item
            this.cart.items.push({
                productId,
                name,
                price: parseFloat(price),
                size,
                quantity: addQuantity,
                total: parseFloat(price) * addQuantity
            });
        }

        this.updateCartTotals();
        this.saveCartToStorage();
        this.updateCartDisplay();
        
        console.log('Item added to cart:', { productId, name, price, size, quantity: addQuantity });
        return true;
    }

    removeItem(productId, size = 'OS') {
        const itemIndex = this.cart.items.findIndex(
            item => item.productId === productId && item.size === size
        );

        if (itemIndex >= 0) {
            this.cart.items.splice(itemIndex, 1);
            this.updateCartTotals();
            this.saveCartToStorage();
            this.updateCartDisplay();
            this.renderCartItems();
            console.log('Item removed from cart:', { productId, size });
            return true;
        }
        return false;
    }

    updateQuantity(productId, size, quantity) {
        const itemIndex = this.cart.items.findIndex(
            item => item.productId === productId && item.size === size
        );

        if (itemIndex >= 0) {
            const currentQuantity = this.cart.items[itemIndex].quantity;
            
            if (quantity < 1) {
                // Don't allow minus button to go below 1 - user must use Remove button
                return false;
            } else if (quantity > 5 && quantity > currentQuantity) {
                // Only block increases above 5, allow decreases from any amount
                return false;
            } else {
                this.cart.items[itemIndex].quantity = parseInt(quantity);
                this.cart.items[itemIndex].total = 
                    this.cart.items[itemIndex].quantity * this.cart.items[itemIndex].price;
                this.updateCartTotals();
                this.saveCartToStorage();
                this.updateCartDisplay();
                this.renderCartItems();
            }
            return true;
        }
        return false;
    }

    clearCart() {
        this.cart = {
            items: [],
            subtotal: 0,
            itemCount: 0,
            lastUpdated: Date.now()
        };
        this.saveCartToStorage();
        this.updateCartDisplay();
        this.renderCartItems();
        console.log('Cart cleared');
    }

    // Development helper - clear cart via console
    clearCartForTesting() {
        localStorage.removeItem(this.storageKey);
        location.reload();
    }

    // Helper Methods
    updateCartTotals() {
        this.cart.subtotal = this.cart.items.reduce((sum, item) => sum + item.total, 0);
        this.cart.itemCount = this.cart.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    resetCart() {
        this.cart = {
            items: [],
            subtotal: 0,
            itemCount: 0,
            lastUpdated: null
        };
        console.log('Cart reset due to error');
    }

    // UI Updates
    updateCartDisplay() {
        const countEl = document.getElementById('cartCount');
        const totalEl = document.getElementById('cartTotal');
        const bagLinkEl = document.querySelector('.bag-link');

        if (countEl) countEl.textContent = this.cart.itemCount;
        if (totalEl) totalEl.textContent = this.cart.subtotal.toFixed(2);

        // Update bag copy based on cart state
        if (bagLinkEl) {
            if (this.cart.itemCount === 0) {
                bagLinkEl.innerHTML = `bag::(0)`;
                bagLinkEl.classList.add('empty');
            } else {
                bagLinkEl.innerHTML = `<button id="reviewBagBtn">review bag::(${this.cart.itemCount})</button>`;
                bagLinkEl.classList.remove('empty');
                
                // Re-attach event listener for new button
                const newReviewBtn = document.getElementById('reviewBagBtn');
                if (newReviewBtn) {
                    newReviewBtn.addEventListener('click', () => this.showCart());
                }
            }
        }

        // Update conditional bag visibility for non-product pages
        this.updateConditionalBagVisibility();

        // Update cart subtotal in sidebar
        const subtotalEl = document.getElementById('cartSubtotal');
        if (subtotalEl) subtotalEl.textContent = this.cart.subtotal.toFixed(2);
        
        // Update checkout button based on cart state
        this.updateCheckoutButton();
    }

    // Conditional bag visibility for homepage, lookbook, and shop pages
    updateConditionalBagVisibility() {
        const bagIndicator = document.querySelector('.bag-indicator');
        const currentPath = window.location.pathname;
        
        if (!bagIndicator) return; // Only applies to pages with conditional bag indicators

        // Check if this is a non-product page (homepage, lookbook, shop)
        const isNonProductPage = !currentPath.includes('/pages/product/');
        
        if (isNonProductPage) {
            // Always show bag indicator on non-product pages per Creative Director/UX recommendation
            // JavaScript will update the content from "bag::(0)" to "review :: bag(X)" as needed
            bagIndicator.style.display = 'block';
        }
    }


    // Cart UI Rendering
    renderCartItems() {
        const cartItemsContainer = document.getElementById('cartItems');
        if (!cartItemsContainer) return;

        if (this.cart.items.length === 0) {
            cartItemsContainer.innerHTML = '<div class="empty-cart">Your bag awaits</div>';
            return;
        }

        cartItemsContainer.innerHTML = this.cart.items.map(item => {
            const productUrl = this.getProductUrl(item.productId);
            const imageUrl = this.getProductImageUrl(item.productId);
            return `
            <div class="cart-item" data-product-id="${item.productId}" data-size="${item.size}">
                <div class="item-image">
                    <img src="${imageUrl}" alt="${item.name}" class="cart-item-img">
                </div>
                <div class="item-info">
                    <h4><a href="${productUrl}" class="product-link">${item.name}</a></h4>
                    <div class="item-details">Size: ${item.size} | $${item.price.toFixed(2)} each</div>
                    <div class="quantity-controls">
                        <button class="qty-btn qty-decrease" data-product-id="${item.productId}" data-size="${item.size}">-</button>
                        <input type="number" class="qty-input" value="${item.quantity}" min="1" max="${Math.max(5, item.quantity)}"
                               data-product-id="${item.productId}" data-size="${item.size}">
                        <button class="qty-btn qty-increase" data-product-id="${item.productId}" data-size="${item.size}">+</button>
                    </div>
                    <button class="remove-item" data-product-id="${item.productId}" data-size="${item.size}">Remove</button>
                </div>
                <div class="item-price">$${item.total.toFixed(2)}</div>
            </div>
        `;
        }).join('');

        // Cart item listeners are handled globally, no need to re-attach
    }

    // Event Listeners
    attachEventListeners() {
        // Integrate with existing purchase forms
        document.addEventListener('submit', (e) => {
            if (e.target.classList.contains('purchase-form')) {
                e.preventDefault(); // Prevent form submission
                
                // Get form data
                const formData = new FormData(e.target);
                const size = formData.get('size');
                const quantity = parseInt(formData.get('quantity')) || 1;
                
                // Extract product info from page or form attributes
                let productId, name, price;
                
                // Try to get from meta tags (product pages)
                const productMeta = document.querySelector('meta[property="product:product_id"]');
                const nameMeta = document.querySelector('meta[property="og:title"]');
                const priceMeta = document.querySelector('meta[property="product:price:amount"]');
                
                if (productMeta && nameMeta && priceMeta) {
                    productId = productMeta.getAttribute('content');
                    name = nameMeta.getAttribute('content').replace(' - OF THE CULTURE', '');
                    price = priceMeta.getAttribute('content');
                } else {
                    // Fallback: Try to determine product from URL
                    const urlPath = window.location.pathname;
                    if (urlPath.includes('nakamoto')) {
                        productId = 'nakamoto';
                        name = 'NAKAMOTO';
                        price = '85';
                    } else if (urlPath.includes('weme')) {
                        productId = 'weme';
                        name = 'WEME'; 
                        price = '125';
                    } else if (urlPath.includes('dtom')) {
                        productId = 'dtom';
                        name = 'DTOM';
                        price = '135';
                    } else if (urlPath.includes('openheart')) {
                        productId = 'openheart';
                        name = 'OPENHEART';
                        price = '65';
                    } else if (urlPath.includes('nodes')) {
                        productId = 'nodes';
                        name = 'NODES';
                        price = '145';
                    }
                }
                
                if (productId && name && price && size) {
                    this.addItem(productId, name, price, size, quantity);
                    
                    // Preserve existing "✓ Yours" confirmation
                    const button = e.target.querySelector('.add-to-cart-btn');
                    if (button) {
                        button.innerHTML = '✓ Yours';
                        button.style.backgroundColor = 'var(--color-gold)';
                        button.style.color = 'var(--color-black)';
                    }
                } else {
                    console.error('Missing product information for cart');
                }
            }
        });
        
        // Legacy support for testing environment
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart')) {
                const productId = e.target.dataset.productId;
                const name = e.target.dataset.name;
                const price = e.target.dataset.price;
                const size = e.target.dataset.size || 'OS';

                this.addItem(productId, name, price, size);
            }
        });

        // Review bag button
        const reviewBagBtn = document.getElementById('reviewBagBtn');
        if (reviewBagBtn) {
            reviewBagBtn.addEventListener('click', () => this.showCart());
        }

        // Close cart
        const cartClose = document.getElementById('cartClose');
        const cartOverlay = document.getElementById('cartOverlay');
        
        if (cartClose) {
            cartClose.addEventListener('click', () => this.hideCart());
        }
        
        if (cartOverlay) {
            cartOverlay.addEventListener('click', (e) => {
                if (e.target === cartOverlay) {
                    this.hideCart();
                }
            });
        }

        // Checkout button handled dynamically in updateCheckoutButton()

        // Cart item controls (quantity and remove)
        document.addEventListener('click', (e) => {
            const productId = e.target.dataset.productId;
            const size = e.target.dataset.size;

            if (e.target.classList.contains('qty-decrease')) {
                e.preventDefault();
                e.stopPropagation();
                const currentQty = parseInt(e.target.nextElementSibling.value);
                this.updateQuantity(productId, size, currentQty - 1);
            } else if (e.target.classList.contains('qty-increase')) {
                e.preventDefault();
                e.stopPropagation();
                const currentQty = parseInt(e.target.previousElementSibling.value);
                this.updateQuantity(productId, size, currentQty + 1);
            } else if (e.target.classList.contains('remove-item')) {
                e.preventDefault();
                e.stopPropagation();
                this.removeItem(productId, size);
            }
        });

        // Cart quantity input changes
        document.addEventListener('change', (e) => {
            if (e.target.classList.contains('qty-input')) {
                const productId = e.target.dataset.productId;
                const size = e.target.dataset.size;
                const quantity = parseInt(e.target.value);
                
                if (quantity > 0) {
                    this.updateQuantity(productId, size, quantity);
                } else {
                    e.target.value = 1;
                }
            }
        });
    }


    // Cart UI Controls
    showCart() {
        this.renderCartItems();
        const cartOverlay = document.getElementById('cartOverlay');
        if (cartOverlay) {
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    hideCart() {
        const cartOverlay = document.getElementById('cartOverlay');
        if (cartOverlay) {
            cartOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Navigate to checkout page
    checkout() {
        if (this.cart.items.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        // Navigate to checkout page based on current context
        const currentPath = window.location.pathname;
        if (currentPath.includes('/pages/product/')) {
            // From product page
            window.location.href = '../../checkout/';
        } else if (currentPath.includes('/pages/')) {
            // From other page folders (lookbook, shop)
            window.location.href = '../checkout/';
        } else {
            // From homepage
            window.location.href = 'pages/checkout/';
        }
    }

    
    updateCheckoutButton() {
        const checkoutBtn = document.querySelector('.checkout-btn');
        if (checkoutBtn) {
            console.log('Updating checkout button - cart count:', this.cart.itemCount);
            if (this.cart.itemCount === 0) {
                checkoutBtn.textContent = 'Browse';
                console.log('Setting Browse button');
                checkoutBtn.onclick = (e) => {
                    e.preventDefault();
                    console.log('Browse button clicked - navigating to shop');
                    // Navigate to shop page based on current context
                    const currentPath = window.location.pathname;
                    if (currentPath.includes('/pages/product/')) {
                        // From product page
                        window.location.href = '../../shop/';
                    } else if (currentPath.includes('/pages/')) {
                        // From other page folders (lookbook, shop)
                        window.location.href = '../shop/';
                    } else {
                        // From homepage
                        window.location.href = 'pages/shop/';
                    }
                };
            } else {
                checkoutBtn.textContent = 'Purchase';
                console.log('Setting Purchase button');
                checkoutBtn.onclick = (e) => {
                    e.preventDefault();
                    console.log('Purchase button clicked');
                    this.checkout();
                };
            }
        }
    }


    // Utility Methods
    getCart() {
        return { ...this.cart };
    }

    getItemCount() {
        return this.cart.itemCount;
    }

    getSubtotal() {
        return this.cart.subtotal;
    }

    getProductUrl(productId) {
        // Generate relative URL to product pages from cart context
        const currentPath = window.location.pathname;
        const isInProductPage = currentPath.includes('/pages/product/');
        
        if (isInProductPage) {
            // From product page to product page (../productId/)
            return `../${productId}/`;
        } else {
            // From other pages to product page  
            return `pages/product/${productId}/`;
        }
    }

    getProductImageUrl(productId) {
        // Generate relative URL to product-pages main images
        const currentPath = window.location.pathname;
        
        // Map productId to the product-pages main image filename
        const imageFileName = this.getProductMainImageFileName(productId);
        
        if (currentPath.includes('/pages/product/')) {
            // From product page to product-pages images
            return `../../../images/products/product-pages/${imageFileName}`;
        } else if (currentPath.includes('/pages/')) {
            // From other page folders (lookbook, shop) to product-pages images
            return `../../images/products/product-pages/${imageFileName}`;
        } else {
            // From homepage to product-pages images
            return `images/products/product-pages/${imageFileName}`;
        }
    }

    getProductMainImageFileName(productId) {
        // Map cart productId to product-pages main image naming convention
        const imageMap = {
            'nakamoto': 'nakamoto-main.jpg',
            'weme': 'weme-main.jpg', 
            'dtom': 'dtom-main.jpeg',
            'openheart': 'openheart-main.jpeg',
            'nodes': 'nodes-main.jpeg'
        };
        
        return imageMap[productId] || `${productId}-main.jpg`;
    }
}

// Initialize cart when page loads
document.addEventListener('DOMContentLoaded', () => {
    window.cartManager = new CartManager();
    // Make clearCartForTesting globally accessible for development
    window.clearCart = () => {
        localStorage.removeItem('of-the-culture-cart');
        location.reload();
    };
    console.log('Cart system ready');
});