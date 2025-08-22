# Image Asset Management Guide

## Folder Structure

```
images/
├── README.md                # This guide
├── favicons/               # Site icons and favicons
├── brand/                  # Brand assets (logos, wordmarks)
├── products/               # Product photography
├── og-images/             # Open Graph / social media images
└── wordmark_2.svg         # Current brand wordmark
```

## Favicon System

### Required Files
Place these files in `/images/favicons/`:

```
favicons/
├── favicon.ico             # Classic favicon (16x16, 32x32, 48x48)
├── favicon-16x16.png      # Standard favicon
├── favicon-32x32.png      # Standard favicon  
├── apple-touch-icon.png   # iOS home screen (180x180)
├── android-chrome-192x192.png  # Android home screen
├── android-chrome-512x512.png  # Android splash screen
├── mstile-150x150.png     # Windows tile
└── safari-pinned-tab.svg  # Safari pinned tab (monochrome)
```

### Favicon Specifications

**Standard Favicons**:
- `favicon-16x16.png`: 16×16px, PNG, optimized for browser tabs
- `favicon-32x32.png`: 32×32px, PNG, retina browser tabs
- `favicon.ico`: Multi-size ICO (16, 32, 48px), legacy support

**Mobile & App Icons**:
- `apple-touch-icon.png`: 180×180px, PNG, iOS home screen icon
- `android-chrome-192x192.png`: 192×192px, PNG, Android home screen
- `android-chrome-512x512.png`: 512×512px, PNG, Android splash screen

**Platform-Specific**:
- `mstile-150x150.png`: 150×150px, PNG, Windows 10 tiles
- `safari-pinned-tab.svg`: Monochrome SVG, Safari pinned tab

**Design Guidelines**:
- Use simple, recognizable design that works at small sizes
- Ensure contrast and visibility on both light and dark backgrounds
- Test legibility at 16×16px (smallest size)
- Consider square format (most platforms crop to square)

### HTML Implementation
Add to `<head>` section:

```html
<!-- Favicons -->
<link rel="icon" type="image/x-icon" href="images/favicons/favicon.ico">
<link rel="icon" type="image/png" sizes="16x16" href="images/favicons/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="images/favicons/favicon-32x32.png">

<!-- Mobile Icons -->
<link rel="apple-touch-icon" sizes="180x180" href="images/favicons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="192x192" href="images/favicons/android-chrome-192x192.png">
<link rel="icon" type="image/png" sizes="512x512" href="images/favicons/android-chrome-512x512.png">

<!-- Platform Specific -->
<link rel="mask-icon" href="images/favicons/safari-pinned-tab.svg" color="#000000">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="images/favicons/mstile-150x150.png">
```

## Brand Assets

### Wordmark Requirements
- **Format**: SVG (vector, scalable)
- **Naming**: `wordmark_[version].svg` (e.g., `wordmark_2.svg`)
- **Optimization**: Minified SVG code, remove unnecessary metadata
- **Alt Text**: Descriptive alt text for accessibility

### Logo Variations
- **Primary**: Main logo for light backgrounds
- **Reversed**: Version for dark backgrounds  
- **Monochrome**: Single-color version
- **Icon**: Simplified icon version for small spaces

**Specifications**:
- **Format**: SVG preferred, PNG backup
- **Resolution**: Vector or 300 DPI minimum
- **Color Profile**: sRGB for web
- **Background**: Transparent

## Product Photography

### Image Requirements
**Formats**: 
- **Primary**: WebP (modern browsers, ~25% smaller)
- **Fallback**: JPEG (universal support)
- **Transparency**: PNG (if needed)

**Sizes & Naming Convention**:
```
products/
├── [product-name]/
│   ├── hero-1200x1200.webp       # Main product image
│   ├── hero-1200x1200.jpg        # Fallback
│   ├── detail-800x800.webp       # Detail shots
│   ├── detail-800x800.jpg        
│   ├── lifestyle-1200x800.webp   # Lifestyle/context shots
│   ├── lifestyle-1200x800.jpg
│   └── thumbnail-400x400.webp    # Grid thumbnails
```

**Technical Specifications**:
- **Resolution**: 72-96 DPI (web optimized)
- **Color Profile**: sRGB
- **Quality**: 85-90% JPEG / WebP
- **Background**: Consistent (white/transparent)

### Responsive Image Strategy
```html
<picture>
  <source srcset="images/products/item-name/hero-1200x1200.webp" type="image/webp">
  <img src="images/products/item-name/hero-1200x1200.jpg" 
       alt="Product name - descriptive alt text"
       width="1200" 
       height="1200">
</picture>
```

## Open Graph / Social Media Images

### Specifications
- **Size**: 1200×630px (Facebook/Twitter recommended)
- **Format**: JPEG or PNG
- **File Size**: Under 1MB
- **Safe Zone**: Keep text/logo within center 600×315px
- **Text**: Large, readable fonts (minimum 24px)

### Naming Convention
```
og-images/
├── og-homepage.jpg           # Homepage sharing image
├── og-lookbook.jpg          # Lookbook page sharing  
├── og-product-[name].jpg    # Individual product pages
└── og-default.jpg           # Default fallback image
```

**Content Guidelines**:
- Include brand wordmark/logo
- High contrast text on images
- Consistent brand aesthetic
- Mobile preview consideration

## Performance Optimization

### Image Optimization Checklist
- [ ] **Compression**: Optimize file sizes without quality loss
- [ ] **Format Selection**: WebP for modern browsers, JPEG/PNG fallbacks
- [ ] **Lazy Loading**: Implement for below-fold images
- [ ] **Responsive Images**: Multiple sizes for different viewports
- [ ] **Alt Text**: Descriptive, accessible alt text for all images

### Recommended Tools
- **Compression**: TinyPNG, ImageOptim, Squoosh
- **Format Conversion**: CloudConvert, GIMP, Photoshop
- **SVG Optimization**: SVGO, SVG-OMG
- **Favicon Generation**: RealFaviconGenerator.net

## Implementation Guidelines

### Adding New Images
1. **Optimize** images before adding to repository
2. **Follow naming conventions** for consistency
3. **Add appropriate alt text** in HTML
4. **Test on multiple devices** and screen sizes
5. **Update this README** if adding new categories

### File Naming Best Practices
- Use hyphens, not spaces: `product-name.jpg`
- Include dimensions where relevant: `hero-1200x1200.webp`
- Use descriptive names: `grosgrain-label-detail.jpg`
- Maintain consistent versioning: `wordmark_v2.svg`

### Quality Assurance
- **Visual Check**: Images display correctly across devices
- **Performance**: Check file sizes and loading times
- **Accessibility**: Verify alt text and color contrast
- **SEO**: Optimize file names and metadata

---

**Last Updated**: August 22, 2025  
**Maintained By**: Development Team  
**For Questions**: Reference this guide or update documentation as needed