# DEBUG PROCEDURES - OF THE CULTURE

## Purpose
Systematic debugging procedures for diagnosing and resolving cart system issues. Maintains world-class QA standards through repeatable debugging processes.

## Debug Utilities System

### Quick Start
1. Include debug utilities in HTML when needed:
   ```html
   <script src="shared/js/debug-utilities.js"></script>
   ```
2. Enable debugging in browser console:
   ```javascript
   DebugUtils.enableCartDebugging()
   ```
3. Navigate between pages to see detailed logs
4. Disable when done:
   ```javascript
   DebugUtils.disableCartDebugging()
   ```

### Available Debug Commands

#### Core Debugging
- `DebugUtils.enableCartDebugging()` - Enable comprehensive logging
- `DebugUtils.disableCartDebugging()` - Restore normal operation
- `DebugUtils.inspectCartState()` - View current cart state
- `DebugUtils.help()` - Show help and usage info

#### Specialized Testing  
- `DebugUtils.testConditionalVisibility()` - Test path detection logic
- `clearCart()` - Clear cart data for testing (global function)

## Common Debugging Scenarios

### Scenario 1: Conditional Bag Visibility Issues
**Symptoms:** Bag indicator not showing/hiding correctly on homepage/lookbook/shop

**Debug Steps:**
1. Enable cart debugging: `DebugUtils.enableCartDebugging()`
2. Add item to cart on product page
3. Navigate to homepage/lookbook/shop
4. Check console for:
   - Current path detection
   - Cart item count (should be > 0)
   - Bag indicator element presence
   - Non-product page logic evaluation
   - Display style setting

**Key Log Messages:**
- `🟢 SHOWING bag indicator - cart has X items` (success)
- `🔴 HIDING bag indicator - cart is empty` (expected when empty)
- `❌ No bag indicator found on this page` (element missing)

### Scenario 2: Cart Persistence Issues
**Symptoms:** Cart data not persisting across page navigation

**Debug Steps:**
1. Enable debugging and check localStorage logs
2. Add item to cart
3. Navigate to different page
4. Look for:
   - `Raw localStorage data: {...}` (should contain cart data)
   - `Parsed cart data: {...}` (should show proper structure)
   - `Cart loaded from storage: {...}` (should show itemCount > 0)

**Key Indicators:**
- `No cart data found in localStorage` (persistence failure)
- `Error loading cart from storage: ...` (parsing error)

### Scenario 3: Path Detection Issues
**Symptoms:** Wrong behavior on different page types

**Debug Steps:**
1. Run `DebugUtils.testConditionalVisibility()` to verify logic
2. Check path detection logs:
   - `Current path: /pages/lookbook/` (should be correct)
   - `Is non-product page? true` (homepage/lookbook/shop)
   - `Contains /pages/product/? false` (for non-product pages)

## Debugging Best Practices

### Before Debugging
1. **Reproduce the issue reliably**
2. **Clear browser cache and localStorage**
3. **Test in incognito/private browsing mode**
4. **Check browser console for existing errors**

### During Debugging
1. **Enable debugging at start of session**
2. **Take screenshots of console output**
3. **Document exact reproduction steps**
4. **Test multiple page navigation paths**
5. **Verify both empty and filled cart states**

### After Debugging  
1. **Disable debugging to restore normal operation**
2. **Document findings in QA logs**
3. **Create regression tests for fixed issues**
4. **Update debug procedures if needed**

## Integration with QA Process

### QA Testing with Debug Mode
1. **Always test with debugging enabled first**
2. **Verify debug logs show expected behavior**
3. **Test user journey end-to-end with logging**
4. **Disable debugging and test normal operation**
5. **Compare behavior between debug and normal modes**

### Debug Log Analysis
- **Success Indicators:** All logs show expected behavior
- **Warning Signs:** Missing elements, wrong paths, empty cart data
- **Failure Points:** Console errors, unexpected logic flow

## Future Debug Enhancements

### Potential Additions
- **Performance monitoring:** Track load times and initialization delays  
- **User interaction tracking:** Log all clicks, form submissions
- **Cross-browser compatibility:** Browser-specific debugging
- **Mobile debugging:** Touch events and responsive behavior
- **API integration testing:** Future Shopify/payment debugging

### Automation Opportunities
- **Automated debug log analysis**
- **Continuous integration testing with debug mode**
- **Alert system for common debug patterns**

## Maintenance

### Regular Review
- Review debug utilities quarterly
- Update procedures based on new features
- Archive debug logs from major testing sessions
- Maintain compatibility with cart system updates

### Documentation Updates
- Update procedures when adding new debug features
- Document new debugging scenarios as they arise
- Keep examples current with latest code structure

---

**Remember:** Debug utilities are powerful tools that should be used systematically. Always disable debugging when moving to production testing to ensure normal user experience is verified.

*This document will be updated as debugging procedures evolve and new scenarios are discovered.*