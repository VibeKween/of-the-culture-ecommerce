# SESSION 3 TESTING CHECKLIST
**URL Restructuring Migration - Comprehensive Validation**

**Server:** http://localhost:3000
**Branch:** `restructure-urls-atelier`
**Status:** ⬜ NOT STARTED

---

## 🚨 CRITICAL: Cart System Testing (Phase 3.2)

### Setup
- [ ] Server running at `http://localhost:3000`
- [ ] Browser DevTools open (Console + Network tabs)
- [ ] Clear browser cache and localStorage before starting

### Test 1: Add to Cart from Product Pages
**Goal:** Verify cart-manager.js path detection works correctly

**NAKAMOTO Product Page:**
- [ ] Navigate to http://localhost:3000/atelier/nakamoto/
- [ ] Select size (any variant)
- [ ] Click "ADD TO BAG"
- [ ] **Expected:** Cart modal opens smoothly
- [ ] **Expected:** Product displays with correct image
- [ ] **Expected:** No console errors
- [ ] **Result:** ✅ PASS / ❌ FAIL

**OPENHEART Product Page:**
- [ ] Navigate to http://localhost:3000/atelier/openheart/
- [ ] Select size
- [ ] Click "ADD TO BAG"
- [ ] **Expected:** Cart modal opens, product added
- [ ] **Expected:** Both products visible in cart
- [ ] **Result:** ✅ PASS / ❌ FAIL

**Remaining Products (DTOM, WE/ME, NODES):**
- [ ] DTOM: Add to cart → ✅ PASS / ❌ FAIL
- [ ] WE/ME: Add to cart → ✅ PASS / ❌ FAIL
- [ ] NODES: Add to cart → ✅ PASS / ❌ FAIL

### Test 2: Cart Modal Functionality
**Goal:** Verify all cart interactions work

- [ ] **Quantity buttons:** +/- work for all products
- [ ] **Remove button:** Removes individual products
- [ ] **Product links in cart:** Click product name/image
  - [ ] **Expected:** Navigate to `/atelier/[product]/`
  - [ ] **Result:** ✅ PASS / ❌ FAIL
- [ ] **Product thumbnails:** All images display correctly (60x75px)
- [ ] **Cart total:** Calculates correctly

### Test 3: Cart Persistence
**Goal:** Verify LocalStorage cart persists across navigation

- [ ] Add 2-3 products to cart
- [ ] Navigate to homepage (http://localhost:3000/)
- [ ] **Expected:** Bag icon shows item count
- [ ] Click bag icon
- [ ] **Expected:** Cart modal opens with all products
- [ ] Navigate to lookbook (http://localhost:3000/lookbook/)
- [ ] **Expected:** Bag icon still shows count
- [ ] Click bag icon
- [ ] **Expected:** Same products in cart
- [ ] **Result:** ✅ PASS / ❌ FAIL

### Test 4: Empty Cart "Browse" Button
**Goal:** Verify empty cart navigates to /atelier/

- [ ] Clear all items from cart (or start fresh)
- [ ] Open cart modal (bag icon)
- [ ] Click "Browse our catalogue" button
- [ ] **Expected:** Navigate to http://localhost:3000/atelier/
- [ ] **Result:** ✅ PASS / ❌ FAIL

### Test 5: Conditional Bag Visibility
**Goal:** Verify bag icon shows/hides correctly on different pages

- [ ] **Homepage:** Bag icon visible → ✅ PASS / ❌ FAIL
- [ ] **Lookbook:** Bag icon visible → ✅ PASS / ❌ FAIL
- [ ] **Atelier (shop):** Bag icon visible → ✅ PASS / ❌ FAIL
- [ ] **Product pages:** Bag icon visible → ✅ PASS / ❌ FAIL

### Test 6: Checkout Navigation (Shopify Integration)
**Goal:** Verify checkout URL construction (DO NOT COMPLETE PURCHASE)

- [ ] Add product to cart
- [ ] Click "Purchase" button
- [ ] **Expected:** Redirect to Shopify checkout
- [ ] **Check URL includes:** variant IDs, quantities, correct domain
- [ ] **DO NOT COMPLETE CHECKOUT** (test only)
- [ ] Close Shopify tab and return to site
- [ ] **Result:** ✅ PASS / ❌ FAIL

---

## ⚠️ IF ANY CART TESTS FAIL: STOP AND DEBUG

**Common Issues:**
- 404 errors → Check asset paths in DevTools Network tab
- Cart modal doesn't open → Check console for JS errors
- Product links broken → Check relative path generation
- Images missing → Check getProductImageUrl() function

---

## 🔍 Navigation Testing (Phase 3.3)

### Homepage Navigation
- [ ] Click "view :: lookbook" → http://localhost:3000/lookbook/
- [ ] Click "browse :: catalogue" → http://localhost:3000/atelier/
- [ ] **Result:** ✅ PASS / ❌ FAIL

### Lookbook Navigation
- [ ] Wordmark logo → http://localhost:3000/
- [ ] "SHOP THE COLLECTION" overlay → http://localhost:3000/atelier/
- [ ] **Result:** ✅ PASS / ❌ FAIL

### Atelier (Shop) Navigation
- [ ] Wordmark logo → http://localhost:3000/
- [ ] "return :: homepage" → http://localhost:3000/
- [ ] "view :: lookbook" → http://localhost:3000/lookbook/
- [ ] Click NAKAMOTO product → http://localhost:3000/atelier/nakamoto/
- [ ] Click OPENHEART product → http://localhost:3000/atelier/openheart/
- [ ] Click DTOM product → http://localhost:3000/atelier/dtom/
- [ ] Click WE/ME product → http://localhost:3000/atelier/weme/
- [ ] Click NODES product → http://localhost:3000/atelier/nodes/
- [ ] **Result:** ✅ PASS / ❌ FAIL

### Product Page Navigation (Test on NAKAMOTO)
- [ ] Wordmark logo → http://localhost:3000/
- [ ] "return :: homepage" → http://localhost:3000/
- [ ] "view :: lookbook" → http://localhost:3000/lookbook/
- [ ] "back :: catalogue" → http://localhost:3000/atelier/
- [ ] **Result:** ✅ PASS / ❌ FAIL

### Mobile Navigation (DevTools Mobile View)
- [ ] Switch to mobile viewport (375px width)
- [ ] Repeat homepage navigation tests
- [ ] Repeat atelier navigation tests
- [ ] **Result:** ✅ PASS / ❌ FAIL

---

## 📊 Asset Loading Validation (Phase 3.6)

### Check DevTools Network Tab (on each page)
**Homepage:**
- [ ] Zero 404 errors
- [ ] All CSS loads
- [ ] All JS loads
- [ ] All images load
- [ ] Favicon displays

**Lookbook:**
- [ ] Zero 404 errors
- [ ] Lazy-loaded images work correctly
- [ ] All assets load

**Atelier (Shop):**
- [ ] Zero 404 errors
- [ ] All 5 product images load
- [ ] Lazy loading works

**Product Pages (check NAKAMOTO + one other):**
- [ ] Zero 404 errors
- [ ] Main product image loads
- [ ] Detail images load
- [ ] All CSS/JS loads

**Overall Asset Check:**
- [ ] **Total 404 errors across all pages:** 0
- [ ] **Result:** ✅ PASS / ❌ FAIL

---

## 🔬 SEO Validation (Phase 3.5)

### Tool: https://search.google.com/test/rich-results

**Test All Pages:**
- [ ] Homepage - Organization schema valid
- [ ] Lookbook - Breadcrumb schema valid
- [ ] Atelier - Breadcrumb schema shows "Atelier" (not "Shop")
- [ ] NAKAMOTO - Product + breadcrumb schemas valid
- [ ] OPENHEART - Schemas valid
- [ ] DTOM - Schemas valid
- [ ] WE/ME - Schemas valid
- [ ] NODES - Schemas valid

**Verify in Page Source (View Source):**
- [ ] All canonical URLs use `/atelier/` paths (no `/pages/`)
- [ ] All Open Graph URLs correct
- [ ] All breadcrumbs show "Atelier" label
- [ ] **Result:** ✅ PASS / ❌ FAIL

---

## 🌐 Cross-Browser Testing (Phase 3.7)

**Chrome Desktop:**
- [ ] Full navigation flow works
- [ ] Cart functionality works
- [ ] No console errors

**Safari Desktop:**
- [ ] Full navigation flow works
- [ ] Cart functionality works
- [ ] No console errors

**Firefox Desktop:**
- [ ] Cart functionality works
- [ ] Navigation works

**Mobile Safari (iPhone):**
- [ ] Touch interactions work
- [ ] Cart modal opens/closes smoothly
- [ ] Navigation works

**Result:** ✅ PASS / ❌ FAIL

---

## ✅ SESSION 3 COMPLETION CRITERIA

**All tests must pass:**
- [ ] ✅ Cart system 100% functional (CRITICAL)
- [ ] ✅ All navigation links work correctly
- [ ] ✅ Zero 404 errors across all pages
- [ ] ✅ SEO schemas validated
- [ ] ✅ Cross-browser compatible
- [ ] ✅ Mobile responsive

**If all tests pass:**
- [ ] Ready for Session 4 (Deployment)

**If any tests fail:**
- [ ] Document failures
- [ ] Debug and fix issues
- [ ] Re-run tests
- [ ] DO NOT PROCEED to deployment

---

## 📝 Notes & Issues

**Issues Found:**
- [ ] Issue 1: _________________________________
- [ ] Issue 2: _________________________________
- [ ] Issue 3: _________________________________

**Testing Completed By:** _______________
**Date:** _______________
**Overall Status:** ✅ READY FOR DEPLOYMENT / ❌ NEEDS FIXES
