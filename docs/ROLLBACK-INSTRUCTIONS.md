# CART SYSTEM ROLLBACK INSTRUCTIONS

## Current Status (Session Checkpoint)
**Branch**: `cart-development-safe`
**Commit**: `f860ae9` - Complete cart system deployment
**Date**: Current session

## What's Implemented (Safe & Tested)
✅ **All 5 product pages have complete cart functionality**
- NAKAMOTO, DTOM, WEME, OPENHEART, NODES
- LocalStorage cart persistence
- Quantity controls, remove functionality
- Mobile/desktop consistent behavior
- Browse button navigation working

✅ **Core cart system stable**
- Event handling conflicts resolved
- No gold focus outlines
- Mobile color issues fixed
- Minus button stops at quantity 1

## UPCOMING: Conditional Bag Visibility
**Feature**: Hide bag indicators on homepage/lookbook/shop when cart is empty
**Risk Level**: Low (only affects non-product pages)

## Rollback Scenarios

### Scenario 1: Conditional Visibility Issues
**If conditional bag visibility causes problems:**
```bash
# Revert just the conditional visibility changes
git revert HEAD
# Or manually remove bag indicators from non-product pages
```

### Scenario 2: Full Cart System Rollback
**If entire cart system needs to be removed:**
```bash
# Go back to before cart system implementation
git checkout main
# Or go to specific clean state
git checkout [pre-cart-commit-hash]
```

### Scenario 3: Product Page Issues
**If specific product pages have problems:**
```bash
# Revert individual files
git checkout f860ae9 -- pages/product/[problematic-page]/index.html
```

## File-Level Rollback Map

### Core System Files
- `shared/js/cart-manager.js` - Complete cart logic
- `shared/css/cart.css` - All cart styling
- `shared/css/main.css` - Focus outline modifications

### Page Integration Files
- `pages/product/nakamoto/index.html` - Original implementation
- `pages/product/dtom/index.html` - Original implementation  
- `pages/product/weme/index.html` - Added in this session
- `pages/product/openheart/index.html` - Added in this session
- `pages/product/nodes/index.html` - Added in this session

### Clean Removal Process
1. Remove cart CSS links from HTML files
2. Remove bag indicator HTML from navigation
3. Remove cart overlay HTML from pages
4. Remove cart-manager.js script tags
5. Test pages load normally

## Testing Checklist (Pre-Rollback)
- [ ] All product pages load without errors
- [ ] Cart functionality works on all product pages
- [ ] Non-product pages unaffected by cart system
- [ ] No JavaScript console errors
- [ ] Mobile behavior consistent

## Emergency Contacts
- Development team lead
- QA team for testing verification
- Deployment team if production affected

## Commit References
- **Stable Checkpoint**: `f860ae9` (Current)
- **Pre-Cart State**: Check `main` branch for clean state
- **Individual Features**: See individual commits in development history

---
**Last Updated**: Current Session
**Maintained By**: Claude Code Development Team