# 03-ECOMMERCE-OF-THE-CULTURE

## Project Overview

Ecommerce microsite for OF THE CULTURE, a small-batch clothing studio. Built on the foundation of the 02-LANDING-PAGE design system with integrated commerce functionality.

**Brand Positioning**: Limited-run apparel created with intention, rooted in digital culture.

**Key Features**:
- Ultra-minimal manifesto-style design with directory navigation
- SVG wordmark system with optimized SEO implementation
- Grosgrain label brand ethos element (signature textile aesthetic)
- Blue hyperlink navigation with traditional web styling
- Enterprise-level SEO foundation with structured data
- Mobile-optimized responsive design and performance
- Page-by-page modular development approach
- **Progressive enhancement lazy loading system with 40-60% faster page loads**
- **Professional Photography Integration with optimized aspect ratio display**
- **Universal Image Architecture supporting 800x1200px main images and 600x900px detail images**
- **Premium add-to-cart system with enhanced cart thumbnails and "✓ Yours" confirmation**
- **Dynamic pricing with real-time quantity calculations**
- **Universal inline validation across all devices**
- **Desktop spacing optimization with Creative Director enhancements across all products**
- **Mobile-first responsive design with protected breakpoints and verified architecture**

**Technical Architecture**:
- Pure HTML/CSS frontend with Shopify Basic backend
- Web3-ready for wallet authentication and stablecoin payments (ETH/SOL)
- API-extensible design supporting unlimited third-party integrations
- Future MFT (Meta Fungible Token) integration for digital+physical bundles
- AI-ready architecture for content generation and optimization

## 📚 Complete Documentation

**For detailed project information, development history, and contribution guidelines:**

📖 **[Development Overview](docs/DEVELOPMENT-OVERVIEW.md)** - Complete project context and current status  
🔒 **[Baseline Protection](docs/BASELINE-PROTECTION.md)** - **CRITICAL:** Approved working state specifications  
🎨 **[CSS Design System](docs/CSS-DESIGN-SYSTEM.md)** - **LIVING DOC:** Complete 488-line design system reference  
🎯 **[Feature Roadmap](docs/features/FEATURE-ROADMAP.md)** - Development phases and priorities  
🔍 **[SEO & Technical Backlog](docs/features/SEO-TECHNICAL-BACKLOG.md)** - SEO optimization strategy and implementation timeline  
📓 **[Session Archives](docs/sessions/)** - Detailed development session documentation  
📁 **[Documentation Guide](docs/README.md)** - How to use and contribute to documentation  
📝 **[Development Notes](docs/DEVELOPMENT-NOTES.md)** - Process guidelines and standards  
🖼️ **[Image Asset Management](images/README.md)** - Favicon, product photography, and asset guidelines  
🎨 **[Creative Workflows](CREATIVE-WORKFLOWS/README.md)** - Photography, brand assets, marketing, and social media processes  
🚀 **[Building in Public](docs/building-in-public/)** - Journey documentation for blog posts, social media, and community  

**Quick Start**: New contributors should read the [Development Overview](docs/DEVELOPMENT-OVERVIEW.md) first.

## Architecture

### Folder Structure
```
03-ECOMMERCE-OF-THE-CULTURE/
├── index.html            # Homepage
├── lookbook/             # Visual product showcase
│   └── index.html
├── atelier/              # Product catalogue
│   ├── index.html        # Shop page
│   ├── nakamoto/         # NAKAMOTO Cap
│   │   └── index.html
│   ├── openheart/        # OPENHEART Tee
│   │   └── index.html
│   ├── dtom/             # DTOM Crewneck
│   │   └── index.html
│   ├── weme/             # WE/ME Crewneck
│   │   └── index.html
│   └── nodes/            # NODES Hoodie
│       └── index.html
├── shared/               # Global resources
│   ├── css/              # Global styles
│   ├── js/               # Shared JavaScript
│   └── components/       # Reusable elements
├── images/               # Brand assets and product images
├── docs/                 # Documentation and session archives
├── testing/              # Test infrastructure
│   ├── test-cart-migration.html
│   ├── README.md
│   └── HOW-TO-CREATE-TESTS.md
├── CREATIVE-WORKFLOWS/   # Creative processes (local only, not git tracked)
│   ├── 01-PHOTOGRAPHY/   # Photo shoots and image processing
│   ├── 02-BRAND-ASSETS/  # Design system and brand resources
│   ├── 03-MARKETING/     # Campaign development and strategy
│   ├── 04-SOCIAL-MEDIA/  # Social content and scheduling
│   └── 99-GUIDELINES/    # Creative standards and checklists
└── README.md             # This file
```

### Design System
- **Typography**: JetBrains Mono (primary), Lekton (grosgrain labels)
- **Colors**: Black (#000000), White (#FFFFFF), Gold (#C19A4B)
- **Layout**: 600px max-width, centered, mobile-first responsive
- **Spacing**: 80px between sections (60px on mobile)

### Professional Photography Standards
- **Main Product Images**: 800x1200px (2:3 ratio) displayed in 4:5 containers with optimal cropping
- **Detail Images**: 600x900px (2:3 ratio) displayed in 2:3 containers for full visibility
- **Format Standards**: JPG, 72 DPI, 85-90% quality, pure white backgrounds
- **Cart Thumbnails**: 60x75px on both desktop and mobile for consistent visibility
- **Naming Convention**: product-main.jpg, product-back.jpg, product-detail.jpg

## Development Approach

**Page-by-Page Development**: Each page is developed in isolation within its own folder, allowing for:
- Isolated feature iteration
- Easy A/B testing
- Modular deployment options
- Clear separation of concerns

## Current Status

**Phase 1 - Homepage Foundation**: ✅ Complete (Session #001)
- ✅ Homepage with grosgrain label implementation and balanced spacing
- ✅ Directory-style navigation links (lookbook :: SZN2526, catalogue :: SZN2526)
- ✅ Blue hyperlink styling for navigation with traditional web aesthetics
- ✅ Enterprise-level SEO implementation with structured data
- ✅ Footer with Tuku Group, LLC hyperlink integration
- ✅ Base CSS system with mobile optimization and responsive design
- ✅ SVG wordmark integration with optimized alt text
- ✅ Comprehensive documentation system and development processes

**Phase 2 - Complete Ecommerce Site**: ✅ Complete (Sessions #002-#007)
- ✅ Visual lookbook with 2-column responsive gallery (5 products)
- ✅ Atelier/catalogue page with product grid and hover animations
- ✅ 5 individual product pages with add-to-cart functionality
- ✅ Typography standardization at 0.85rem across all pages
- ✅ Product name consistency system (NAKAMOTO, WE/ME, DTOM, OPEN HEART, NODES)
- ✅ Grey placeholder treatment matching lookbook aesthetic
- ✅ Mobile-optimized responsive design across all pages
- ✅ Complete SEO implementation with structured data on all pages
- ✅ API integration placeholders for analytics and commerce backend
- ✅ Clean URL structure: /atelier/, /atelier/nakamoto/, /atelier/weme/, /atelier/dtom/, /atelier/openheart/, /atelier/nodes/

**Phase 3 - Advanced User Experience** (Sessions #008-#012):
- ✅ Complete cart system with LocalStorage management and dynamic pricing  
- ✅ Mobile shadow fixes and touch-safe hover systems
- ✅ ATELIER NOTES and PRODUCTION NOTES accordion systems
- ✅ Comprehensive copy refresh with craft-focused descriptions
- ✅ Bag display standardization across all pages
- ✅ **Desktop spacing optimization with Creative Director enhancements (Session #012)**
- ✅ **Mobile-first responsive architecture with protected breakpoints and verified functionality**
- ✅ **Systematic UX problem-solving workflow established for future iterations**

**Ready for Launch**: Frontend complete with production-ready architecture and enhanced UX

## Technical Specifications

- **No build tools**: Pure HTML/CSS approach for simplicity and performance
- **Hosting**: Cloudflare Pages with automatic deployments from GitHub
- **Production URL**: https://oftheculture.co (custom domain)
- **Preview URL**: https://of-the-culture-ecommerce.pages.dev (Cloudflare Pages)
- **Legacy URL**: https://vibekween.github.io/of-the-culture-ecommerce/ (GitHub Pages - deprecated)
- **Mobile optimization**: Responsive breakpoint at 768px with mobile-first design
- **Font loading**: Google Fonts CDN (JetBrains Mono, Lekton) with preconnect optimization
- **SEO Foundation**: JSON-LD structured data, Open Graph, Twitter Cards, semantic HTML
- **Performance**: Sub-2 second load time target with optimized assets
- **Accessibility**: WCAG compliant with visually hidden headings and proper alt text

## Launch Plan

Initial launch with 5 core products:

**Product Portfolio**:
1. **NAKAMOTO** - Terminal Aesthetics Cap (`/atelier/nakamoto/`)
2. **WE / ME** - Crypto Nomad Crewneck (`/atelier/weme/`)
3. **DTOM** - Don't Tread on Memes Crewneck (`/atelier/dtom/`)
4. **OPEN HEART** - Git Commit Tee (`/atelier/openheart/`)
5. **NODES** - Infrastructure Hoodie (`/atelier/nodes/`)

**Site Architecture**:
1. Homepage (`/`)
2. Lookbook (`/lookbook/`)
3. Atelier/catalogue (`/atelier/`)
4. Individual product pages (`/atelier/[product]/`)
5. Checkout process (Shopify integration)

Each page maintains the "craft over noise" philosophy while introducing commerce functionality.