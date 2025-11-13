# Shopify Test Mode Validation Guide
**Purpose:** Ensure safe E2E testing without affecting production operations
**Store:** oftheculture.myshopify.com
**Created:** January 2025 - E2E Testing Exploration

---

## 🔒 Safety First: Pre-Testing Validation

Before running any E2E tests, validate these Shopify settings to ensure test mode is properly configured.

---

## Step 1: Verify Test Payment Gateway (CRITICAL)

**Navigation:** Shopify Admin → Settings → Payments

### ✅ What to Check:

1. **Look for "Bogus Gateway"**
   - Should appear in your payment providers list
   - Status: "Enabled" or "Active"
   - This is Shopify's official test payment processor

2. **Test Card Numbers:**
   - `1` → Always succeeds
   - `2` → Always fails
   - `3` → Raises exception
   - Full card format: `4242 4242 4242 4242` (Visa test)

### ⚠️ If Bogus Gateway is NOT enabled:

**Enable it now:**
1. Go to Settings → Payments
2. Scroll to "Test mode" section
3. Click "Enable test mode" or "Add Bogus Gateway"
4. Save changes

**Important:** Bogus Gateway only works in development stores or stores with test mode enabled.

---

## Step 2: Validate Store Status

**Navigation:** Shopify Admin → Settings → Plan

### ✅ What to Check:

**Option A: Development Store**
- Store type shows "Development store"
- ✅ **Best for testing** - Test orders don't affect production
- ✅ Bogus Gateway available by default
- ✅ No charges for test transactions

**Option B: Live Store with Test Mode**
- Store type shows "Basic Plan" or higher
- Payment section has "Test mode" toggle
- ✅ Test orders marked clearly in admin
- ⚠️ Some limitations on test data volume

**Current Status:** You mentioned your store is in "test mode" - verify which type above.

---

## Step 3: Product Inventory Settings

**Navigation:** Shopify Admin → Products → [Any Product] → Variants

### ✅ What to Check:

For each product variant:
1. **Track quantity** checkbox status
   - If CHECKED → Test orders will reduce inventory
   - If UNCHECKED → Test orders won't affect stock

2. **Inventory policy**
   - "Continue selling when out of stock" → Safe for testing
   - "Stop selling when out of stock" → May block tests if inventory depletes

### 🛡️ Recommended Test Settings:

**Option A: Disable inventory tracking for tests**
```
Track quantity: ❌ UNCHECKED (for all test variants)
```

**Option B: Set high inventory quantities**
```
Track quantity: ✅ CHECKED
Inventory: 1000+ units (won't deplete during testing)
```

---

## Step 4: Email Notification Settings

**Navigation:** Shopify Admin → Settings → Notifications

### ✅ What to Check:

**Customer notifications that may fire during tests:**
- ✉️ Order confirmation
- ✉️ Shipping confirmation (if fulfillment enabled)
- ✉️ Order cancelled (if testing refunds)

### 🛡️ Test-Safe Email Strategy:

**Option A: Use test email addresses**
```
During tests, always use:
- test-e2e@oftheculture.co
- test-playwright@oftheculture.co
- automated-test@oftheculture.co
```

**Option B: Disable customer notifications temporarily**
```
1. Go to each notification template
2. Toggle "Enabled" to OFF
3. Remember to re-enable after testing!
```

**Option C: Email preview only (safest)**
```
Test orders in Shopify show email previews
You can view what would be sent without actually sending
```

---

## Step 5: Analytics Filtering (Prevent Data Pollution)

### Google Analytics 4 Filter

**Navigation:** GA4 Admin → Data Settings → Data Filters

**Create test traffic filter:**
```
Filter Name: Exclude E2E Tests
Filter Type: Internal Traffic
Match Type: Email contains
Value: test-e2e
Action: Exclude
```

### Meta Pixel Filter

**Add to your Meta Pixel code:**
```javascript
// In your analytics tracking
if (email.includes('test-e2e') || email.includes('automated-test')) {
    // Skip Meta Pixel tracking for test orders
    console.log('Test order - analytics skipped');
    return;
}
```

---

## Step 6: Verify Variant IDs Match

**Navigation:** Shopify Admin → Products → [Product] → Variants → Edit

### ✅ Cross-Reference Validation:

Your `cart-manager.js` has these variant IDs mapped (lines 590-628):

**NAKAMOTO:**
- OS: `49535554420929`

**WE/ME:**
- XS: `49535523455169`
- S: `49535523487937`
- M: `49535523520705`
- L: `49535523553473`
- XL: `49535523586241`
- XXL: `49535523619009`

**DTOM:**
- XS: `49535534891201`
- S: `49535534858433`
- M: `49535534825665`
- L: `49535534792897`
- XL: `49535534760129`
- XXL: `49535534923969`

**OPENHEART:**
- XS: `49535561236673`
- S: `49535561269441`
- M: `49535561302209`
- L: `49535561334977`
- XL: `49535561367745`

**NODES:**
- XS: `49535569035457`
- S: `49535569068225`
- M: `49535569100993`
- L: `49535569133761`
- XL: `49535569166529`
- XXL: `49535569199297`

### 🔍 How to Verify:

1. Open each product in Shopify admin
2. Click "Edit" on any variant
3. Look for "Variant ID" in the URL or page
4. Compare to the list above
5. **Any mismatches = tests will fail**

---

## Step 7: Test Order Identification

### 🏷️ Test Order Tagging Strategy

**Recommendation:** Use consistent test identifiers:

**Customer emails:**
```
test-e2e-[timestamp]@oftheculture.co
Example: test-e2e-20250113@oftheculture.co
```

**Order notes:**
```
Automated E2E test - Safe to delete
Date: [timestamp]
Test suite: Playwright Shopify Checkout
```

**Order tags in Shopify:**
```
Tags: automated-test, e2e-testing, safe-to-delete
```

### 🗑️ Cleanup Test Orders:

**After testing complete:**
1. Go to Orders in Shopify admin
2. Filter by tag: `automated-test`
3. Bulk select test orders
4. Click "More actions" → "Archive" or "Delete"

**Shopify keeps archived orders separate from analytics**

---

## 🎯 Final Pre-Test Checklist

Before running E2E tests, confirm:

- [ ] **Bogus Gateway enabled** (or test payment method configured)
- [ ] **Store type confirmed** (Development or Test mode verified)
- [ ] **Inventory tracking** strategy decided (disabled or high quantities)
- [ ] **Email strategy** chosen (test addresses or notifications disabled)
- [ ] **Analytics filters** created (GA4 + Meta Pixel)
- [ ] **Variant IDs verified** (all 25 variants match cart-manager.js)
- [ ] **Test order tagging** strategy documented
- [ ] **Cleanup process** planned for post-testing

---

## 🚨 Red Flags to Watch For

**STOP testing if you see:**

❌ **Real payment processing** - Test cards should NEVER charge actual money
❌ **Production inventory depleting** - Test orders reducing actual stock
❌ **Customer emails to real addresses** - Notifications going to non-test emails
❌ **Live analytics data pollution** - Real GA4/Meta Pixel events from tests

**If any occur:** Stop tests immediately, review settings above, fix issue before continuing.

---

## 📊 Post-Test Validation

**After E2E tests complete:**

1. **Check Shopify Orders:**
   - Test orders show "Test" badge or tag
   - Customer emails are test addresses
   - Order total shows test payment method

2. **Verify Analytics Clean:**
   - GA4 shows no test traffic in main reports
   - Meta Pixel events filtered correctly
   - Real customer data unaffected

3. **Confirm Inventory Intact:**
   - Product quantities match pre-test levels
   - No unexpected stock depletion

4. **Clean Up Test Data:**
   - Archive/delete test orders
   - Clear test customer accounts (if created)
   - Document any issues found

---

## 🔧 Troubleshooting Common Issues

### Issue: "Bogus Gateway not available"

**Cause:** Store not in development/test mode
**Fix:** Contact Shopify support to enable test mode, or use Shopify Payments test mode

### Issue: "Variant ID not found"

**Cause:** Mismatch between cart-manager.js and Shopify
**Fix:** Update cart-manager.js with correct IDs from Shopify admin

### Issue: "Real charges processing"

**Cause:** Live payment gateway active instead of test mode
**Fix:** STOP IMMEDIATELY - Disable live gateway, enable Bogus Gateway only

### Issue: "Inventory depleting unexpectedly"

**Cause:** Track quantity enabled on test products
**Fix:** Uncheck "Track quantity" or set inventory to 1000+ units

---

## 📞 Need Help?

**Shopify Support:**
- help.shopify.com
- Live chat in admin (bottom right corner)
- Phone: Available on Basic plan and higher

**Reference Documentation:**
- Shopify Testing Guide: shopify.dev/docs/apps/testing
- Bogus Gateway Docs: shopify.dev/docs/apps/testing/bogus-gateway
- Test Orders: help.shopify.com/manual/orders/test-orders

---

**Status:** Ready for E2E testing after validation complete ✅
**Next Step:** Run through checklist, document results, proceed with Playwright setup

**Maintained by:** OF THE CULTURE Development Team
**Last Updated:** January 13, 2025
