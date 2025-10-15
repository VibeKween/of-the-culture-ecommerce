# Testing Infrastructure - OF THE CULTURE Ecommerce

**Purpose:** Automated and manual testing tools for validating site functionality, especially during migrations and major updates.

**Created:** October 14, 2025 (Session 3 - URL Restructuring Migration)

---

## 📁 Test Suite Files

### **test-cart-migration.html** ✅ Production-Ready
**Purpose:** Automated validation of cart system and URL path detection
**Created for:** URL Restructuring Migration (Session 3 Phase 3.2)
**Status:** 10/10 tests passing
**Last Used:** October 14, 2025

---

## 🧪 Cart Migration Test Suite

### Overview
Standalone HTML test page with automated JavaScript tests for validating:
- URL path detection logic
- Cart manager initialization
- LocalStorage functionality
- Navigation patterns
- Relative path generation

### When to Use
- **URL/path restructuring migrations**
- **Cart system refactoring**
- **JavaScript path detection changes**
- **LocalStorage-based features**
- **Pre-deployment validation**

### How to Run

**1. Start Local Server:**
```bash
python3 -m http.server 3000
```

**2. Open Test Suite:**
```
http://localhost:3000/testing/test-cart-migration.html
```

**3. Run Tests:**
- Click "▶ RUN ALL TESTS" button
- Review pass/fail status
- Check console output for details

**4. Interpret Results:**
- **Total:** Number of tests executed
- **Passed:** Tests that validated successfully
- **Failed:** Tests that need attention
- **Pending:** Tests not yet run

### Test Categories

#### **1. Path Detection & URL Structure**
Tests the JavaScript logic that determines page types based on URL paths.

**Example Test:**
```javascript
const testPath = '/of-the-culture-ecommerce/atelier/';
const isNonProductPage = !testPath.includes('/atelier/') || testPath.endsWith('/atelier/');
// Expected: true (atelier root is not a product page)
```

**What It Validates:**
- Atelier root URL detection
- Product page URL detection
- Homepage URL detection
- Path-based conditional logic

**Why It Matters:**
- Controls bag icon visibility
- Determines navigation behavior
- Affects cart modal functionality

---

#### **2. Cart Manager Functions**
Tests that cart system dependencies are available and functional.

**Example Test:**
```javascript
// Verify LocalStorage is accessible
localStorage.setItem('test', 'test');
const canWrite = localStorage.getItem('test') === 'test';
localStorage.removeItem('test');
```

**What It Validates:**
- Cart manager script loads without errors
- LocalStorage read/write functionality
- Product URL generation patterns
- Image path generation correctness

**Why It Matters:**
- Cart persistence depends on LocalStorage
- Path generation affects product links
- Image paths affect cart thumbnails

---

#### **3. Navigation & Redirects**
Manual verification tests for navigation behavior.

**What It Validates:**
- Empty cart "Browse" button navigation
- Checkout URL construction
- Relative path correctness

**Why It Matters:**
- Users must navigate correctly to product pages
- Checkout must redirect to Shopify with correct URLs

---

#### **4. LocalStorage Persistence**
Tests cart data storage and retrieval.

**Example Test:**
```javascript
const cartData = localStorage.getItem('cart');
const parsed = JSON.parse(cartData);
// Verify: Array.isArray(parsed) === true
```

**What It Validates:**
- Cart persists across page navigation
- Cart data is valid JSON
- Cart structure is correct (array)

**Why It Matters:**
- Cart must survive page refreshes
- Invalid JSON breaks cart functionality

---

## 🎯 Creating Similar Tests for Future Migrations

### Test Suite Architecture

**Key Components:**
1. **Test Registration:** `addTest(containerId, name, testFn)`
2. **Test Runner:** `runAllTests()` executes all registered tests
3. **UI Feedback:** Real-time pass/fail status with details
4. **Console Logging:** Timestamped execution logs

### Template for New Tests

```javascript
// Add a new test
const myTest = addTest('section-id', 'Test description', async () => {
    // Test logic here
    const result = /* your validation */;

    return {
        pass: result === expectedValue,
        details: `Context: ${result} (expected: ${expectedValue})`
    };
});

// Add to test runner
async function runAllTests() {
    await myTest();
    // ... other tests
}
```

### Test Design Principles

**✅ Good Test Design:**
- Tests ONE specific thing
- Has clear pass/fail criteria
- Provides helpful details on failure
- Doesn't depend on external state
- Runs in isolation

**❌ Bad Test Design:**
- Tests multiple unrelated things
- Requires manual setup before running
- Fails without explaining why
- Depends on other tests passing first

### Example: Testing New Navigation Structure

```javascript
// Test new URL pattern
const navTest = addTest('nav-tests', 'Collection URLs use new format', async () => {
    const testUrls = [
        '/collections/grant/',
        '/collections/nakamoto/',
        '/collections/openheart/'
    ];

    const allValid = testUrls.every(url => {
        return url.startsWith('/collections/') && url.endsWith('/');
    });

    return {
        pass: allValid,
        details: `Tested ${testUrls.length} collection URLs`
    };
});
```

---

## 📋 Manual Testing Checklist

**Companion file:** `TESTING-CHECKLIST-SESSION-3.md`

**Purpose:** Systematic manual testing guide for:
- Cart system end-to-end workflows
- Navigation across all pages
- Asset loading validation
- SEO schema verification
- Cross-browser compatibility

**When to Use:**
- After automated tests pass
- Before production deployment
- During major feature releases

---

## 🔧 Adapting This Test Suite

### For URL Migration Tests

**Update these values:**
1. **Base URLs:** Change GitHub Pages URL to your domain
2. **Path patterns:** Update `/atelier/` to your new structure
3. **Product names:** Change product IDs to match your catalog
4. **Expected paths:** Update relative path depths

**Example:**
```javascript
// OLD
const testPath = '/of-the-culture-ecommerce/atelier/nakamoto/';

// NEW (for custom domain)
const testPath = '/shop/nakamoto/';
```

### For Cart System Tests

**Update these checks:**
1. **LocalStorage keys:** Change `'cart'` to your key name
2. **Data structure:** Update array/object validation
3. **Product ID format:** Match your product naming convention

### For Navigation Tests

**Update these targets:**
1. **Browse button URL:** Change `/atelier/` to your shop URL
2. **Checkout URL pattern:** Update Shopify domain/structure
3. **Product link format:** Match your URL routing

---

## 🚀 Best Practices

### Before Running Tests

1. ✅ **Clean browser cache:** Hard refresh (Cmd+Shift+R)
2. ✅ **Clear localStorage:** Use "CLEAR CART" button or DevTools
3. ✅ **Check console:** Look for errors before starting tests
4. ✅ **Verify server running:** Ensure local server is active

### During Testing

1. ✅ **Read test details:** Check details section for context
2. ✅ **Check console output:** Monitor execution logs
3. ✅ **Note failures immediately:** Don't wait until all tests complete
4. ✅ **Test manual scenarios:** Some tests require user interaction

### After Tests Pass

1. ✅ **Run manual verification:** Automated tests don't catch everything
2. ✅ **Test on real devices:** Don't rely solely on DevTools mobile view
3. ✅ **Check different browsers:** Safari, Chrome, Firefox
4. ✅ **Document any issues:** Note edge cases or unexpected behavior

---

## 📊 Test Results History

### October 14, 2025 - URL Restructuring Migration
**Branch:** `restructure-urls-atelier`
**Results:** 10/10 tests passed ✅
**Issues Found:**
- Favicon 404 errors (resolved)
- Meta Pixel warning (expected, not an issue)

**Key Validations:**
- ✅ Path detection logic working correctly
- ✅ Cart manager loads and initializes
- ✅ LocalStorage functional
- ✅ Product URL generation correct
- ✅ Cart persistence across navigation

**Manual Testing:**
- ✅ Cart modal opens from all product pages
- ✅ Product thumbnails display correctly
- ✅ Cart persists when navigating between pages
- ✅ Bag icon shows accurate item count
- ✅ Product links in cart navigate correctly

**Deployment Status:** Ready for production ✅

---

## 🔄 Future Test Suite Ideas

### Potential Test Suites to Create

1. **Shopify Integration Test**
   - Variant ID validation
   - Checkout URL construction
   - Price accuracy
   - Product availability checks

2. **Analytics Validation Test**
   - GA4 event firing
   - Meta Pixel tracking
   - Custom parameter validation
   - Conversion tracking accuracy

3. **SEO Schema Test**
   - Product schema validation
   - Breadcrumb schema accuracy
   - Organization schema completeness
   - Rich results eligibility

4. **Performance Test**
   - Page load times
   - Lazy loading functionality
   - Image optimization
   - JavaScript execution time

5. **Accessibility Test**
   - Keyboard navigation
   - Screen reader compatibility
   - ARIA labels
   - Color contrast ratios

---

## 📚 Additional Resources

**Related Documentation:**
- `TESTING-CHECKLIST-SESSION-3.md` - Manual testing guide
- `docs/MIGRATION-PROGRESS-TRACKER.md` - Migration session tracking
- `COMPLETE-RESTRUCTURING-AUDIT.md` - Full migration plan

**Browser Testing Tools:**
- Chrome DevTools (Network, Console, Performance tabs)
- Google Tag Assistant (Analytics validation)
- Facebook Pixel Helper (Meta Pixel validation)
- Google Rich Results Test (SEO schema validation)

**Local Testing Setup:**
```bash
# Python simple server
python3 -m http.server 3000

# Alternative: Node.js http-server
npx http-server -p 3000

# Alternative: PHP built-in server
php -S localhost:3000
```

---

## 💡 Tips for Effective Testing

1. **Test early, test often** - Don't wait until deployment
2. **Automate when possible** - Reduce manual testing burden
3. **Document edge cases** - Note unusual scenarios for future reference
4. **Test on real devices** - Simulators miss touch/gesture issues
5. **Keep tests simple** - Complex tests are hard to maintain
6. **Version your tests** - Track changes alongside code
7. **Share test results** - Document what worked/failed for team knowledge

---

**Maintained by:** Tuku Group Development Team
**Last Updated:** October 14, 2025
**Next Review:** Before next major migration or feature release
