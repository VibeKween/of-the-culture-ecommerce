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
    addItem(productId, name, price, size = 'OS') {
        const existingItemIndex = this.cart.items.findIndex(
            item => item.productId === productId && item.size === size
        );

        if (existingItemIndex >= 0) {
            // Item exists, increase quantity
            this.cart.items[existingItemIndex].quantity += 1;
            this.cart.items[existingItemIndex].total = 
                this.cart.items[existingItemIndex].quantity * this.cart.items[existingItemIndex].price;
        } else {
            // New item
            this.cart.items.push({
                productId,
                name,
                price: parseFloat(price),
                size,
                quantity: 1,
                total: parseFloat(price)
            });
        }

        this.updateCartTotals();
        this.saveCartToStorage();
        this.updateCartDisplay();
        this.showConfirmation(productId, name);
        
        console.log('Item added to cart:', { productId, name, price, size });
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
            if (quantity <= 0) {
                this.removeItem(productId, size);
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

        if (countEl) countEl.textContent = this.cart.itemCount;
        if (totalEl) totalEl.textContent = this.cart.subtotal.toFixed(2);

        // Update cart subtotal in sidebar
        const subtotalEl = document.getElementById('cartSubtotal');
        if (subtotalEl) subtotalEl.textContent = this.cart.subtotal.toFixed(2);
    }

    showConfirmation(productId, name) {
        const confirmationEl = document.getElementById(`confirmation-${productId}`);
        if (confirmationEl) {
            confirmationEl.textContent = `✓ ${name} added to cart`;
            confirmationEl.style.opacity = '1';
            
            setTimeout(() => {
                confirmationEl.style.opacity = '0';
                setTimeout(() => {
                    confirmationEl.textContent = '';
                }, 300);
            }, 2000);
        }
    }

    // Cart UI Rendering
    renderCartItems() {
        const cartItemsContainer = document.getElementById('cartItems');
        if (!cartItemsContainer) return;

        if (this.cart.items.length === 0) {
            cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
            return;
        }

        cartItemsContainer.innerHTML = this.cart.items.map(item => `
            <div class="cart-item" data-product-id="${item.productId}" data-size="${item.size}">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <div class="item-details">Size: ${item.size} | $${item.price.toFixed(2)} each</div>
                    <div class="quantity-controls">
                        <button class="qty-btn qty-decrease" data-product-id="${item.productId}" data-size="${item.size}">-</button>
                        <input type="number" class="qty-input" value="${item.quantity}" min="1" 
                               data-product-id="${item.productId}" data-size="${item.size}">
                        <button class="qty-btn qty-increase" data-product-id="${item.productId}" data-size="${item.size}">+</button>
                    </div>
                    <button class="remove-item" data-product-id="${item.productId}" data-size="${item.size}">Remove</button>
                </div>
                <div class="item-price">$${item.total.toFixed(2)}</div>
            </div>
        `).join('');

        this.attachCartItemListeners();
    }

    // Event Listeners
    attachEventListeners() {
        // Add to cart buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart')) {
                const productId = e.target.dataset.productId;
                const name = e.target.dataset.name;
                const price = e.target.dataset.price;
                const size = e.target.dataset.size || 'OS';

                this.addItem(productId, name, price, size);
            }
        });

        // View cart button
        const viewCartBtn = document.getElementById('viewCartBtn');
        if (viewCartBtn) {
            viewCartBtn.addEventListener('click', () => this.showCart());
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

        // Checkout button (placeholder)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('checkout-btn')) {
                this.checkout();
            }
        });
    }

    attachCartItemListeners() {
        // Quantity controls
        document.addEventListener('click', (e) => {
            const productId = e.target.dataset.productId;
            const size = e.target.dataset.size;

            if (e.target.classList.contains('qty-decrease')) {
                const currentQty = parseInt(e.target.nextElementSibling.value);
                this.updateQuantity(productId, size, currentQty - 1);
            } else if (e.target.classList.contains('qty-increase')) {
                const currentQty = parseInt(e.target.previousElementSibling.value);
                this.updateQuantity(productId, size, currentQty + 1);
            } else if (e.target.classList.contains('remove-item')) {
                if (confirm('Remove this item from your cart?')) {
                    this.removeItem(productId, size);
                }
            }
        });

        // Quantity input changes
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

    // Checkout (placeholder)
    checkout() {
        if (this.cart.items.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        alert(`Checkout functionality coming soon!\n\nCart Summary:\n${this.cart.itemCount} items\nTotal: $${this.cart.subtotal.toFixed(2)}`);
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
}

// Initialize cart when page loads
document.addEventListener('DOMContentLoaded', () => {
    window.cartManager = new CartManager();
    console.log('Cart system ready');
});