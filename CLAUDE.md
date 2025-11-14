# CLAUDE.md - 03-ECOMMERCE-OF-THE-CULTURE

This file provides guidance to Claude Code when working with the OF THE CULTURE ecommerce site.

## Development Philosophy & Process

**CRITICAL: Root Cause Analysis First - No Patch-First Development**

When encountering any issue, always follow this refined process:

1. **Identify Root Cause** - Understand WHY the issue exists before touching any code
2. **Analyze System Impact** - Determine what underlying behavior is causing the symptom
3. **Design Minimal Solution** - Address the core problem, not just the visible symptom
4. **Preserve Clean Architecture** - Solutions must align with existing patterns and avoid tech debt

**❌ Avoid Patch-First Approaches:**
- No `!important` declarations unless absolutely necessary
- No arbitrary overrides or band-aid CSS fixes
- No duplicate code to "fix" inconsistencies
- No hacky workarounds that mask underlying issues

**✅ Preferred Solution Patterns:**
- Single-property fixes that address root causes
- Consistent application of existing CSS patterns
- Clean, maintainable code that improves the system
- Solutions that prevent similar future issues

**Example:** Font weight inconsistency between accordion headers was solved with `font-synthesis: none` (preventing browser font variations) rather than patching with font-weight overrides.

This methodology ensures sustainable code architecture, reduced technical debt, and cleaner, more maintainable solutions.

## Copy Update Methodology

**CRITICAL: Systematic Copy Updates - No Patch-First Content Changes**

When updating site copy (seasons, pricing, product names, navigation), always follow this process:

### 1. **Universal Changes First**
For global updates (seasons, brand terms, pricing), use systematic find/replace:
```bash
# Example: Season updates
find . -name "*.html" -exec sed -i '' 's/SZN2526/SZN2026/g' {} +
find . -name "*.js" -exec sed -i '' 's/SZN2526/SZN2026/g' {} +
```

### 2. **Cross-Reference Validation** 
- **Homepage navigation** → All destination pages
- **Product pricing** → Shop grid, product pages, cart system, JavaScript
- **Navigation links** → Bag/cart references, back/view links
- **Dynamic content** → Cart modal messaging, form states

### 3. **File Update Order**
1. Universal replacements (seasons, prices, brand terms)
2. Homepage (entry point - most critical)  
3. Navigation systems (shop, lookbook)
4. Product pages (individual updates)
5. JavaScript systems (cart, pricing, product IDs)
6. Modal/interactive copy (cart, forms)

### 4. **Quality Control Checklist**
- [ ] Global find/replace completed for universal changes
- [ ] Homepage navigation reflects all destination page updates  
- [ ] All pricing matches across: shop grid, product pages, cart system, JavaScript
- [ ] Season references consistent across all pages and systems
- [ ] Cart functionality preserved during navigation changes
- [ ] End-to-end user journey tested (Homepage → Shop → Product → Cart)

### **Copy Location Reference**
- **Master copy deck**: `COPY-DECK-MASTER.md` - Complete site copy reference
- **Hardcoded locations**: Homepage, shop, lookbook, product pages HTML
- **Dynamic content**: `shared/js/cart-manager.js` - Cart messaging and pricing
- **Interactive elements**: Modal copy, form labels, button states

**Root Cause Prevention:** This process prevents issues like homepage navigation showing outdated seasons when destination pages are updated individually.

## Project Overview

OF THE CULTURE comprehensive ecommerce site - extends 02-LANDING-PAGE foundation with full commerce functionality, web3-ready architecture, and performance-optimized systems.

**Key Features:**
- Homepage with grosgrain label signature element
- Visual lookbook showcase
- Product catalog with lazy loading
- Individual product pages with accordion specifications
- Shopping cart system with smooth transitions
- Web3-ready architecture for future crypto payments

**Status:** Production ready with advanced technical architecture

## Architecture

**Page Structure:**
- `/` - Homepage with grosgrain label brand ethos element
- `/lookbook/` - Visual product showcase
- `/atelier/` - Product catalogue with lazy loading (40-60% performance gains)
- `/atelier/[product]/` - Individual product pages with ATELIER NOTES + PRODUCTION NOTES accordions
- Cart system integrated via modal (LocalStorage-based)
- Checkout via Shopify integration

**Shared Resources:**
- `shared/css/main.css` - Foundation design system
- `shared/css/cart.css` - Cart modal with butter-smooth transitions
- `shared/js/cart-manager.js` - LocalStorage-based cart management
- `shared/js/product-modal.js` - Mobile-friendly messaging system

## Technical Architecture

**Performance Optimizations:**
- Lazy loading system with IntersectionObserver
- 40-60% performance improvements on shop page
- Mobile-responsive hover systems with touch protection
- Progressive enhancement approach

**Web3 & Crypto Integration (Planned):**
- Multi-chain support (Ethereum + Solana)
- Stablecoin payments (USDC, USDT)
- Wallet authentication (MetaMask, Phantom, WalletConnect)
- Custom MFT system for digital+physical bundles

**API Extensibility:**
- Universal REST/GraphQL/WebSocket support
- Zero-rebuild architecture for unlimited scaling
- Lazy-loaded services never block user experience
- Performance guarantee maintained regardless of integrations

## Development Standards

**Design System Compliance:**
- Inherits from 01-LANDING-PAGE and 02-LANDING-PAGE foundations
- Maintains ultra-minimal aesthetic with "craft over noise" philosophy
- JetBrains Mono typography throughout
- Consistent spacing and layout patterns

**Performance Requirements:**
- Sub-2 second load times maintained
- Mobile-first responsive design
- Progressive enhancement for all features
- Accessibility compliance with semantic HTML

**Code Quality:**
- Pure HTML/CSS/JavaScript (no build tools)
- Lazy loading for all heavy resources
- Clean separation between pages and shared systems
- Comprehensive error handling and fallbacks

## Commerce Technology Stack

**Frontend:** Pure HTML/CSS/JavaScript optimized for scaling
**Hosting:** Cloudflare Pages with automatic deployments from GitHub
**Production URL:** https://oftheculture.co
**Backend:** Shopify Basic with professional commerce infrastructure
**Payments:** Traditional (Apple Pay, cards) + planned crypto integration
**Analytics:** Google Analytics 4, Meta Pixel, custom web3 tracking
**SEO:** Enterprise-level optimization with dynamic content support

## Important Notes

**Current Features:**
- ✅ Mobile shadow bug fixes for shop page thumb-scrolling
- ✅ PRODUCTION NOTES accordions on all product pages
- ✅ Cart modal system with smooth transitions
- ✅ Lazy loading with performance improvements
- ✅ Touch-safe hover systems

**Critical Systems to Preserve:**
- Lazy loading performance gains (40-60% improvement)
- Cart modal butter-smooth transitions
- Mobile hover/touch protection
- Accordion behavior (multiple sections can be open)
- Email integration (orders@oftheculture.co)

This project represents the full technical realization of the OF THE CULTURE brand with enterprise-grade ecommerce capabilities while maintaining the minimal aesthetic and performance standards established by the design system.

## Essential Development Patterns

### **Professional Photography Integration**
- **Image Specifications**: Main images 800x1200px (2:3), detail images 600x900px (2:3)
- **Container Architecture**: Main images in 4:5 containers (preferred cropping), detail images in 2:3 containers (full display)
- **Quality Standards**: JPG format, 72 DPI, 85-90% quality, pure white backgrounds
- **Cart Thumbnails**: 60x75px standardized across desktop and mobile
- **Naming Convention**: product-main.jpg, product-back.jpg, product-detail.jpg

### **Lazy Loading Implementation**
- **Performance impact**: 40-60% faster page load times achieved
- **Implementation**: IntersectionObserver with `50px rootMargin, 0.1 threshold`
- **Fallback system**: `<noscript>` tags for progressive enhancement
- **Critical pattern**: Images load only when entering viewport, preventing render blocking

### **Cart System Architecture** 
- **Storage**: LocalStorage-based persistence across page navigation
- **UI specifications**: 360px width, 40px touch targets, 0.75rem headers, 0.8rem content
- **Sticky bag functionality**: Persistent cart access across all pages
- **Email integration**: orders@oftheculture.co for order processing
- **Transition system**: Butter-smooth animations with refined typography

### **Mobile Optimization Solutions**
- **Touch-safe hover systems**: Prevents phantom hover states on mobile
- **Viewport fixes**: Eliminated content cut-off issues on mobile devices
- **Shadow bug resolution**: Fixed thumb-scrolling artifacts on shop page
- **Form standardization**: Global select element styling with JetBrains Mono
- **Consistent hover areas**: 15px padding refinement applied to shop + product pages

### **Accordion Behavior Standards**
- **Multiple sections open**: Users can expand multiple accordions simultaneously
- **Content types**: ATELIER NOTES + PRODUCTION NOTES on product pages
- **Font consistency**: `font-synthesis: none` prevents browser font variations
- **Touch targets**: Minimum 44px for accessibility compliance

## Performance Standards & Quality Gates

### **Quantified Baselines**
- **Page load times**: Sub-2 seconds consistently maintained
- **Lighthouse scores**: 90+ maintained across all pages  
- **LocalStorage operations**: <100ms for cart actions
- **Animation performance**: 60fps maintained for all transitions
- **API impact**: Zero performance degradation regardless of integrations added

### **Baseline Protection System**
- **Protected commit**: `bc532ee` - approved working state locked
- **Critical CSS values**: Navigation margin-bottom: 120px (preserved)
- **Regression testing**: Required before any modifications
- **File size monitoring**: GitHub Actions validate CSS custom properties count

### **Testing Matrix Requirements**
- **High Priority Devices**: iPhone 14/15 series, Samsung Galaxy S22/S23/S24, iPad Air/Pro
- **Connection standards**: 4G network performance baseline
- **Touch targets**: 44px minimum for all interactive elements
- **Cross-browser**: Safari, Chrome, Firefox compatibility verified

## Quality Assurance & Debugging

### **Debug Utilities System**
```javascript
// Systematic cart debugging
DebugUtils.enableCartDebugging()
```
- **Common scenarios**: Conditional bag visibility, cart persistence issues
- **Path detection**: Systematic troubleshooting for navigation states
- **QA integration**: Debug mode testing followed by normal operation verification

### **Root Cause Analysis Examples**
- **Font weight inconsistency**: Solved with `font-synthesis: none` (not font-weight overrides)
- **Mobile shadow bugs**: Touch-safe hover systems (not CSS band-aids)
- **Viewport overflow**: Progressive enhancement (not viewport hacks)

## GitHub Actions & Automation

### **Validation Workflow**
- **CSS monitoring**: Custom properties count validation
- **Performance baseline**: Automated checking maintained in CI/CD  
- **Build verification**: No build tool dependencies confirmed
- **File size tracking**: Automated monitoring prevents bloat

### **Session Handoff System**
- **Continuity framework**: Standardized transition prompts for zero context loss
- **Template location**: `docs/session-handoffs/` with project-specific copies
- **Context preservation**: Complete technical context included in handoffs
- **Integration**: Part of standard end-of-session completion checklist

## Advanced Technical Architecture

### **Zero-Impact API Architecture**
- **Critical path protection**: Static content loads instantly, APIs enhance after
- **Progressive enhancement**: Features work with/without JavaScript  
- **Universal integration**: REST/GraphQL/WebSocket support without rebuilds
- **Performance guarantee**: API integrations never impact page load times
- **Engineering estimate**: 200-300 hours senior development time for web3 integration

### **Design System Specifications**
- **Typography**: JetBrains Mono throughout (Lekton for grosgrain labels only)
- **Colors**: `--color-black: #000000`, `--color-white: #FFFFFF`, `--color-gold: #C19A4B`
- **Layout**: 600px max-width, mobile-first responsive (768px breakpoint)  
- **Spacing**: 80px vertical sections (60px on mobile)
- **Component classes**: `.page`, `.shop-page`, `.product-page` system

### **File Architecture**
- **Shared CSS**: `shared/css/main.css` (488 lines) - foundation design system
- **Page structure**: Component-based with `data-target` attributes for API-readiness
- **Asset organization**: Brand assets in `images/brand/`, products in `images/products/`
- **Clean separation**: Pages and shared systems maintain clear boundaries

## Critical Implementation Notes

### **Features Currently Live**
- ✅ Cart modal system with LocalStorage persistence (8 pages integrated)
- ✅ Lazy loading system with 40-60% performance improvements  
- ✅ Mobile shadow bug fixes and touch-safe hover systems
- ✅ PRODUCTION NOTES accordions across all product pages
- ✅ Cross-page navigation consistency and wordmark standardization

### **Systems to Preserve** 
- Lazy loading performance gains (40-60% improvement baseline)
- Cart modal butter-smooth transitions and typography refinements
- Mobile hover/touch protection systems across all devices
- Accordion multi-section behavior (multiple sections can remain open)
- GitHub Actions validation workflow for CSS properties and performance

### **Risk Assessment & Mitigation**
- **Technical risks**: Crypto volatility, network congestion, security vulnerabilities
- **Business risks**: Web3 complexity, development timeline, customer demand  
- **Mitigation strategies**: Phased approach (traditional commerce first), comprehensive fallback options

## Ecommerce Development Workflow

**CRITICAL: Production-Safe Development for Revenue-Generating Site**

This is an active ecommerce operation generating real revenue. All development must protect commerce functionality while enabling unlimited exploration and innovation.

### **Change Classification Protocol**

Before any modification, assess the change type:

**A) Routine Updates** → Main Branch (Direct to production)
- Copy updates (seasons, pricing, product names)
- Image swaps or optimizations
- Minor styling tweaks
- Documentation updates
- **Deployment**: 30 seconds to live site

**B) Development Work** → Dev-Ecommerce-Safe Branch (Protected development)
- Cart functionality changes
- Shopify integration modifications
- JavaScript/logic updates
- New features or components
- Performance modifications
- Web3 integration exploration
- **Deployment**: Only when fully tested and validated

**C) Commerce-Critical** → Main Branch + Enhanced Validation
- Checkout flow changes
- Payment processing modifications
- Analytics tracking updates
- Revenue-affecting functionality
- **Deployment**: Requires comprehensive testing + staging review

### **Branch Management Strategy**

**Source of Truth**: Main branch always reflects live site
- `main` branch ←→ https://oftheculture.co (Cloudflare Pages deployment)
- Main branch contains current production state
- **Repository Status**: Private (protects proprietary ecommerce configuration)

**Development Workflow**:
```bash
# Routine updates (90% of changes)
git checkout main
# Make changes directly
git push origin main  # Live in 30 seconds

# Development work (10% of changes)
git checkout -b dev-ecommerce-safe  # Or existing dev branch
# Develop and test safely
git checkout main && git merge dev-ecommerce-safe  # Deploy when ready
```

**Dev Branch Lifecycle**:
- Temporary workspace for complex development
- Can be recreated anytime from main branch
- Periodically sync with main: `git merge main`
- Delete and recreate when needed for fresh start

### **Ecommerce Protection Standards**

**Revenue Protection**: Commerce functionality must never be disrupted
- LocalStorage cart system preserved
- Shopify integration maintained
- Analytics tracking operational
- Performance baselines protected (40-60% improvements)

**Exploration Freedom**: Development branch enables unlimited innovation
- Web3 feature exploration
- New design concepts
- API integrations
- Performance experiments
- **Zero impact on live commerce operations**

### **Quality Gates for Commerce Changes**

**Pre-deployment validation for commerce-critical changes**:
- [ ] Cart functionality tested end-to-end
- [ ] Shopify integration verified
- [ ] Analytics tracking confirmed
- [ ] Mobile commerce flow validated
- [ ] Performance baselines maintained
- [ ] Revenue functionality preserved

This workflow ensures **unlimited exploration capability** while maintaining **rock-solid ecommerce operations** and protecting established revenue streams.

## Recent Major Updates (January 2025)

### **Interactive UX Enhancement (Session 19)**
- ✅ **Lookbook Overlay System**: "SHOP THE COLLECTION" with smart mobile scroll triggers
- ✅ **Shop Page Optimization**: Reordered for ecommerce psychology (NAKAMOTO → OPEN HEART → DTOM → WE/ME → NODES)
- ✅ **Product Page Polish**: Removed false hover affordances from informational overlays
- ✅ **Analytics Integration**: Complete GA4 tracking for user journey (lookbook → shop conversion)
- ✅ **Professional Photography**: Fresh NAKAMOTO and NODES images with quality standards maintained

### **Current Features Live**
- ✅ Interactive lookbook with persistent overlay system
- ✅ Optimized shop page order for price progression psychology
- ✅ Scroll-safe hover areas (15px padding prevents accidental triggers)
- ✅ Static informational overlays (no misleading hover states)
- ✅ Comprehensive QA testing tools with exact site sizing
- ✅ Complete analytics instrumentation for conversion tracking

### **Technical Standards Maintained**
- ✅ 40-60% performance improvements preserved
- ✅ Mobile-first responsive design enhanced
- ✅ Cart system and Shopify integration unaffected
- ✅ Professional photography quality across all contexts
- ✅ Cross-context image recognition validated

This comprehensive synthesis provides complete project context for any new Claude session, consolidating insights from 70+ documentation files into immediately actionable development guidance.