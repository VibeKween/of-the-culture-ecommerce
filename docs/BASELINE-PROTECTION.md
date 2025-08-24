# 🔒 BASELINE PROTECTION - APPROVED WORKING STATE

**Date Created**: August 24, 2025  
**Git Commit**: `0b4ff92 🎯 Fix directory navigation alignment across all pages`  
**Status**: ✅ **PRODUCTION APPROVED - DO NOT MODIFY**

---

## ⚠️ CRITICAL WARNING

**THIS DOCUMENT PROTECTS THE EXACT WORKING STATE OF BOTH HOMEPAGE AND LOOKBOOK**

The specifications below represent the ONLY approved working state. Any modifications must:
1. Be explicitly requested by user
2. Go through full testing verification on both pages
3. Update this protection document

**Modifying CSS without updating this protection document will break the baseline.**

---

## 📋 EXACT CSS SPECIFICATIONS

### **Global Navigation Settings (main.css)**

```css
/* Directory Navigation - EXACT APPROVED SETTINGS */
.navigation {
  margin-bottom: 120px;
  text-align: left;
}

.directory-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.directory-link {
  font-family: 'Lekton', 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  font-weight: 400;
  color: #0066cc;
  text-decoration: none;
  border: none;
  padding: 0;
  line-height: 1.4;
  letter-spacing: 0.02em;
  transition: all 0.3s ease;
  position: relative;
}

/* Mobile Navigation - EXACT APPROVED SETTINGS */
@media (max-width: 768px) {
  .navigation {
    margin-bottom: 100px;
  }
  
  .directory-link {
    font-size: 0.8rem;
  }
}
```

### **Lookbook Page Overrides (lookbook.css)**

```css
/* Navigation alignment now handled by main.css - no overrides needed */
```

**CRITICAL**: The lookbook.css contains NO navigation overrides. All alignment is handled globally via main.css.

---

## 🎯 VERIFIED BEHAVIOR

### **Homepage Navigation**
- ✅ Left-aligned directory links
- ✅ Proper spacing: `margin-bottom: 120px` (100px mobile)
- ✅ Font size: `0.85rem` (0.8rem mobile)
- ✅ Tree structure with `├──` and `└──` prefixes

### **Lookbook Navigation**
- ✅ Left-aligned directory links (matches homepage exactly)
- ✅ Proper spacing: `margin-bottom: 120px` (100px mobile)
- ✅ Font size: `0.85rem` (0.8rem mobile)
- ✅ Tree structure with `├──` and `└──` prefixes

### **Lookbook Grid System**
- ✅ 2-column desktop layout
- ✅ Single-column mobile layout
- ✅ Progressive enhancement: 1400px → 1800px → 2000px → 2400px
- ✅ Proper viewport breakout within 600px page container

---

## 📁 APPROVED FILE STATES

### **Critical Files and Their Exact State**

**`/shared/css/main.css`** - Lines 119-130:
```css
/* Directory Navigation */
.navigation {
  margin-bottom: 120px;
  text-align: left;
}

.directory-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}
```

**`/pages/lookbook/lookbook.css`** - Line 211:
```css
/* Navigation alignment now handled by main.css - no overrides needed */
```

**`/index.html`** - Navigation section (lines 106-111):
```html
<section class="block navigation">
    <nav class="directory-nav">
        <a href="pages/lookbook/" class="directory-link">lookbook :: SZN2025</a>
        <a href="pages/shop/" class="directory-link">catalogue :: SZN2025</a>
    </nav>
</section>
```

---

## 🚨 REGRESSION PREVENTION

### **Common Mistakes That Break This State**
1. **Adding text-align properties to lookbook.css navigation**
2. **Modifying main.css gap values** (must remain `10px`)
3. **Adding margin-bottom overrides to lookbook navigation**
4. **Changing font-size from approved values**
5. **Modifying align-items from `flex-start`**

### **Testing Verification Required**
Before ANY CSS changes:
1. Test homepage navigation alignment (must be left-aligned)
2. Test lookbook navigation alignment (must match homepage exactly)  
3. Test lookbook grid (must be 2-column on desktop)
4. Test both pages on mobile (single-column grid, proper navigation spacing)

### **Local Testing Commands**
```bash
cd "/Users/falonbahal/Desktop/DEVELOPMENT/TUKU-GROUP/03-ECOMMERCE-OF-THE-CULTURE"
python3 -m http.server 8080
```

Test URLs:
- Homepage: `http://localhost:8080/`
- Lookbook: `http://localhost:8080/pages/lookbook/`

---

## 📝 MODIFICATION PROTOCOL

If changes are required:

1. **Document the change** in this file first
2. **Test both pages** before committing
3. **Update git commit reference** in this document
4. **Verify no regressions** on homepage/lookbook alignment
5. **Update protection specifications** with new approved state

**Never modify CSS without updating this protection document.**

---

*🔒 This document protects the baseline working state approved on August 24, 2025*