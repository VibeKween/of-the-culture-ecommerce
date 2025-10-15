# How to Create Automated Test Suites

**Quick reference guide for duplicating the cart migration test pattern**

---

## 🎯 Quick Start: Copy & Adapt Pattern

### Step 1: Copy the Template

Start with `test-cart-migration.html` as your base:

```bash
cp testing/test-cart-migration.html testing/test-YOUR-FEATURE.html
```

### Step 2: Update Test Metadata

```html
<title>Your Feature Test Suite</title>
<h1>🧪 YOUR FEATURE TEST SUITE</h1>
<p>Purpose - Session X Phase X.X</p>
```

### Step 3: Define Your Tests

Replace the existing test definitions with your own:

```javascript
// PATH DETECTION TESTS → Your test category
const test1 = addTest('your-section-id', 'Test description', async () => {
    // Your test logic
    const result = /* validation */;

    return {
        pass: result === expected,
        details: `Context info: ${result}`
    };
});
```

### Step 4: Update Test Runner

```javascript
async function runAllTests() {
    log('Starting your test suite...');

    await test1();
    await test2();
    // ... your tests

    log('Test suite complete!');
}
```

---

## 📝 Test Pattern Reference

### Basic Test Structure

```javascript
const myTest = addTest(
    'container-id',           // Where to display test (see HTML sections)
    'Human readable name',    // Shows in UI
    async () => {             // Test function
        // 1. Setup (if needed)
        const value = getSomething();

        // 2. Validation
        const isValid = value === expected;

        // 3. Return result
        return {
            pass: isValid,           // Boolean: test passed?
            details: `Info: ${value}` // String: context for user
        };
    }
);
```

### Test with Error Handling

```javascript
const robustTest = addTest('section-id', 'Test name', async () => {
    try {
        // Attempt operation
        const result = riskyOperation();

        return {
            pass: result.success,
            details: `Operation completed: ${result.message}`
        };
    } catch (error) {
        // Throw error to fail test with message
        throw new Error(`Failed: ${error.message}`);
    }
});
```

### Test with Multiple Checks

```javascript
const multiCheck = addTest('section-id', 'Multiple validations', async () => {
    const checks = {
        urlFormat: url.startsWith('/shop/'),
        hasTrailingSlash: url.endsWith('/'),
        correctDepth: url.split('/').length === 3
    };

    const allPassed = Object.values(checks).every(v => v === true);

    return {
        pass: allPassed,
        details: `Checks: ${JSON.stringify(checks)}`
    };
});
```

---

## 🎨 Test UI Sections

Add new test sections in the HTML:

```html
<div class="test-section">
    <h2>Your Test Category</h2>
    <div id="your-tests-container"></div>
</div>
```

Then reference the container ID in your tests:

```javascript
addTest('your-tests-container', 'Test name', async () => {
    // Test logic
});
```

---

## 💡 Common Test Patterns

### Pattern 1: URL Validation

```javascript
const urlTest = addTest('url-tests', 'URLs match expected pattern', async () => {
    const urls = ['/shop/', '/product/item1/', '/cart/'];
    const pattern = /^\/[a-z]+\/$/;

    const allValid = urls.every(url => pattern.test(url));

    return {
        pass: allValid,
        details: `Tested ${urls.length} URLs against pattern`
    };
});
```

### Pattern 2: LocalStorage Validation

```javascript
const storageTest = addTest('storage-tests', 'Data persists correctly', async () => {
    const key = 'myData';
    const testData = { items: [1, 2, 3] };

    // Write
    localStorage.setItem(key, JSON.stringify(testData));

    // Read
    const retrieved = JSON.parse(localStorage.getItem(key));

    // Validate
    const matches = JSON.stringify(retrieved) === JSON.stringify(testData);

    // Cleanup
    localStorage.removeItem(key);

    return {
        pass: matches,
        details: 'LocalStorage read/write successful'
    };
});
```

### Pattern 3: DOM Element Validation

```javascript
const domTest = addTest('dom-tests', 'Required elements exist', async () => {
    const selectors = ['.cart-icon', '.product-grid', '#checkout-btn'];
    const elements = selectors.map(s => document.querySelector(s));

    const allExist = elements.every(el => el !== null);
    const missing = selectors.filter((s, i) => elements[i] === null);

    return {
        pass: allExist,
        details: missing.length > 0
            ? `Missing: ${missing.join(', ')}`
            : 'All elements found'
    };
});
```

### Pattern 4: Async API Call Validation

```javascript
const apiTest = addTest('api-tests', 'API endpoint responds correctly', async () => {
    try {
        const response = await fetch('/api/products');
        const data = await response.json();

        const isValid = response.ok && Array.isArray(data);

        return {
            pass: isValid,
            details: `Status: ${response.status}, Items: ${data.length}`
        };
    } catch (error) {
        throw new Error(`API call failed: ${error.message}`);
    }
});
```

### Pattern 5: Path Detection Logic

```javascript
const pathTest = addTest('path-tests', 'Detects product pages correctly', async () => {
    const testCases = [
        { path: '/shop/product1/', expected: true },
        { path: '/shop/', expected: false },
        { path: '/', expected: false }
    ];

    const results = testCases.map(tc => {
        const isProductPage = tc.path.includes('/shop/') && !tc.path.endsWith('/shop/');
        return isProductPage === tc.expected;
    });

    const allPassed = results.every(r => r === true);

    return {
        pass: allPassed,
        details: `Tested ${testCases.length} path scenarios`
    };
});
```

---

## 🔧 Customization Options

### Styling

Update colors to match your needs:

```css
:root {
    --pass-color: #4CAF50;
    --fail-color: #f44336;
    --pending-color: #FFC107;
    --accent-color: #C19A4B;
}
```

### Test Summary

Customize the summary display:

```javascript
function updateSummary() {
    document.getElementById('total-tests').textContent = testResults.total;
    document.getElementById('passed-tests').textContent = testResults.passed;
    document.getElementById('failed-tests').textContent = testResults.failed;

    // Add custom metrics
    const passRate = (testResults.passed / testResults.total * 100).toFixed(1);
    document.getElementById('pass-rate').textContent = `${passRate}%`;
}
```

### Console Logging

Add custom log formatting:

```javascript
function log(message, type = 'info') {
    const console = document.getElementById('console');
    const timestamp = new Date().toLocaleTimeString();
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.innerHTML += `${prefix} [${timestamp}] ${message}\n`;
}
```

---

## 📊 Test Organization Strategies

### Strategy 1: By Feature

```javascript
// User Authentication Tests
const loginTest = addTest('auth-tests', 'Login flow', ...);
const logoutTest = addTest('auth-tests', 'Logout flow', ...);
const sessionTest = addTest('auth-tests', 'Session persistence', ...);

// Cart Tests
const addToCartTest = addTest('cart-tests', 'Add to cart', ...);
const removeFromCartTest = addTest('cart-tests', 'Remove from cart', ...);
```

### Strategy 2: By Priority

```javascript
// Critical Tests (must pass)
const criticalTest1 = addTest('critical', 'Payment processing', ...);
const criticalTest2 = addTest('critical', 'Data security', ...);

// Important Tests (should pass)
const importantTest1 = addTest('important', 'Navigation', ...);

// Nice-to-have Tests (optional)
const optionalTest1 = addTest('optional', 'Analytics', ...);
```

### Strategy 3: By User Journey

```javascript
// Discovery Phase
const browseTest = addTest('journey', 'Browse products', ...);
const searchTest = addTest('journey', 'Search functionality', ...);

// Selection Phase
const productViewTest = addTest('journey', 'View product details', ...);
const addCartTest = addTest('journey', 'Add to cart', ...);

// Purchase Phase
const checkoutTest = addTest('journey', 'Checkout process', ...);
const confirmationTest = addTest('journey', 'Order confirmation', ...);
```

---

## ✅ Quality Checklist for New Test Suites

Before finalizing your test suite:

- [ ] **All tests have clear names** that describe what they validate
- [ ] **Pass/fail criteria are objective** (no ambiguous checks)
- [ ] **Details provide context** (help debug failures)
- [ ] **Tests are independent** (don't rely on execution order)
- [ ] **Error messages are helpful** (explain what went wrong)
- [ ] **Tests clean up after themselves** (remove test data)
- [ ] **Documentation explains purpose** (why this test exists)
- [ ] **Tests run in reasonable time** (< 5 seconds total)
- [ ] **UI is responsive and clear** (easy to read results)
- [ ] **Console output is informative** (shows execution flow)

---

## 🚀 Deployment Checklist

Before using your test suite in production workflows:

1. [ ] Test suite runs successfully in clean environment
2. [ ] All tests pass on localhost
3. [ ] Documentation is complete and accurate
4. [ ] File is committed to version control
5. [ ] README.md is updated with new test suite info
6. [ ] Team members can run tests without assistance
7. [ ] Test results are documented for baseline

---

## 📚 Real-World Examples

### Example 1: Navigation Migration Test

```javascript
// Test that old URLs redirect to new structure
const redirectTest = addTest('nav-tests', 'Old URLs redirect correctly', async () => {
    const redirects = [
        { old: '/pages/shop/', new: '/atelier/' },
        { old: '/pages/product/item1/', new: '/atelier/item1/' }
    ];

    // Note: Can't test actual redirects in standalone HTML,
    // so we validate the URL mapping logic
    const urlMapper = (oldUrl) => {
        return oldUrl.replace('/pages/shop/', '/atelier/')
                     .replace('/pages/product/', '/atelier/');
    };

    const allCorrect = redirects.every(r => {
        return urlMapper(r.old) === r.new;
    });

    return {
        pass: allCorrect,
        details: `Validated ${redirects.length} URL mappings`
    };
});
```

### Example 2: Form Validation Test

```javascript
const formTest = addTest('form-tests', 'Email validation works', async () => {
    const emailValidator = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };

    const testCases = [
        { email: 'valid@example.com', expected: true },
        { email: 'invalid@', expected: false },
        { email: 'also.valid@test.co.uk', expected: true },
        { email: 'no-at-sign.com', expected: false }
    ];

    const results = testCases.map(tc => {
        return emailValidator(tc.email) === tc.expected;
    });

    const passed = results.filter(r => r).length;

    return {
        pass: results.every(r => r),
        details: `${passed}/${testCases.length} test cases passed`
    };
});
```

---

## 🎓 Learning Resources

**JavaScript Testing Concepts:**
- Async/await patterns for asynchronous tests
- Try/catch for error handling
- Array methods (every, some, filter) for validation
- JSON.stringify for deep object comparison

**DOM Testing:**
- `document.querySelector()` for element finding
- `element.classList` for class checking
- `element.getAttribute()` for attribute validation

**LocalStorage Testing:**
- `localStorage.setItem()` to write
- `localStorage.getItem()` to read
- `localStorage.removeItem()` to cleanup
- `JSON.parse()/JSON.stringify()` for object storage

---

**Created:** October 14, 2025
**Last Updated:** October 14, 2025
**Maintained by:** Tuku Group Development Team
