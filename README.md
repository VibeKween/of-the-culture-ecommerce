# 03-ECOMMERCE-OF-THE-CULTURE

## Project Overview

Ecommerce microsite for OF THE CULTURE, a small-batch clothing studio. Built on the foundation of the 02-LANDING-PAGE design system with integrated commerce functionality.

**Brand Positioning**: Limited-run apparel created with intention, rooted in digital culture.

**Key Features**:
- Ultra-minimal manifesto-style design
- SVG wordmark system
- Grosgrain label brand ethos element
- Mobile-optimized product and checkout processes
- Page-by-page modular development approach

## Architecture

### Folder Structure
```
03-ECOMMERCE-OF-THE-CULTURE/
├── pages/
│   ├── homepage/         # Landing page with brand manifesto
│   ├── lookbook/         # Visual product showcase
│   ├── shop/             # Product grid/list
│   ├── product/          # Individual product pages
│   ├── cart/             # Shopping cart
│   └── checkout/         # Purchase flow
├── shared/
│   ├── css/              # Global styles
│   ├── js/               # Shared JavaScript
│   └── components/       # Reusable elements
├── images/               # Brand assets and product images
├── docs/                 # Documentation and session archives
└── README.md             # This file
```

### Design System
- **Typography**: JetBrains Mono (primary), Lekton (grosgrain labels)
- **Colors**: Black (#000000), White (#FFFFFF), Gold (#C19A4B)
- **Layout**: 600px max-width, centered, mobile-first responsive
- **Spacing**: 80px between sections (60px on mobile)

## Development Approach

**Page-by-Page Development**: Each page is developed in isolation within its own folder, allowing for:
- Isolated feature iteration
- Easy A/B testing
- Modular deployment options
- Clear separation of concerns

## Current Status

**Phase 1 - Homepage Foundation**: ✅ Complete
- Homepage with grosgrain label implementation
- Base CSS system with mobile optimization
- SVG wordmark integration

**Next Steps**:
- Add navigation links to future pages
- Develop lookbook page
- Build product catalog system
- Implement shopping cart functionality

## Technical Specifications

- **No build tools**: Pure HTML/CSS approach
- **Static deployment**: Ready for GitHub Pages or similar
- **Mobile optimization**: Responsive breakpoint at 768px
- **Font loading**: Google Fonts CDN (JetBrains Mono, Lekton)

## Launch Plan

Initial launch with 5 products across:
1. Landing page (homepage)
2. Lookbook (visual showcase)
3. Product pages (individual items)
4. Checkout process
5. Legal/policy pages

Each page maintains the "craft over noise" philosophy while introducing commerce functionality.