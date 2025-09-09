# LOOKBOOK IMAGE SPECIFICATIONS
*Visual Product Showcase - Photography Guidelines*

## Overview
Lookbook images showcase products in lifestyle/editorial context with premium aesthetic quality. These images emphasize the cultural positioning and styling of each piece.

---

## Technical Specifications

### **Aspect Ratio**
- **4:5 ratio** (e.g., 1000x1250px)
- **Maintained across all devices** via CSS `aspect-ratio: 4/5`

### **File Requirements**
- **Format**: JPEG (.jpg) preferred for photography
- **Quality**: High quality, professional photography
- **File Size**: **300-500KB maximum** (optimized for web)
- **Dimensions**: Minimum 1000x1250px (4:5 ratio)
- **Color Profile**: sRGB

### **Naming Convention**
```
lookbook-[product-name]-[descriptor].jpg

Examples:
- lookbook-nakamoto-main.jpg
- lookbook-nodes-lifestyle.jpg
- lookbook-weme-editorial.jpg
- lookbook-dtom-styled.jpg
- lookbook-openheart-context.jpg
```

---

## Photography Guidelines

### **Composition & Framing**
- **Model centering**: Subject positioned in center/middle third of frame
- **Breathing room**: Adequate space around model/product
- **Vertical orientation**: Images shot/cropped to 4:5 ratio
- **Context inclusion**: Environmental elements that enhance cultural narrative

### **Styling Direction**
- **Cultural context**: Digital culture, creative professional aesthetic
- **Lifestyle integration**: Product worn in natural, authentic contexts
- **Minimal backgrounds**: Clean, uncluttered environments that don't compete
- **Brand alignment**: Reflects "craft over noise" philosophy

### **Lighting & Quality**
- **Professional lighting**: Well-lit, even exposure
- **Color accuracy**: True-to-life fabric colors and textures
- **Sharp focus**: Crystal clear product details
- **Minimal post-processing**: Natural, authentic look preferred

---

## Content Strategy

### **Product Positioning**
- **Hero shots**: Primary lifestyle image showcasing the product's cultural context
- **Storytelling**: Each image should communicate the piece's purpose/meaning
- **Target audience**: Digital creators, crypto builders, cultural innovators
- **Brand narrative**: Pieces designed for those building the future

### **Model Direction** (if applicable)
- **Natural poses**: Authentic, unforced styling
- **Cultural signaling**: Understated confidence, creative professional energy
- **Diverse representation**: Various body types, ethnicities, ages
- **Context appropriate**: Settings that align with digital culture aesthetic

---

## Current Implementation

### **Grid Layout**
- **2-column responsive grid** on desktop
- **Single column** on mobile
- **Lazy loading**: Performance-optimized with proven 40-60% load time improvements
- **Progressive enhancement**: Works without JavaScript

### **User Experience**
- **Smooth loading**: Placeholder system with product name
- **Touch-friendly**: Optimized for mobile interaction
- **Accessibility**: Alt text describes both product and context

---

## File Preparation Checklist

### **Before Upload**
- [ ] **Aspect ratio verified**: Exactly 4:5 (width:height)
- [ ] **File size optimized**: <500KB (use TinyPNG, Photoshop export)
- [ ] **Dimensions minimum**: 1000x1250px or higher
- [ ] **Naming convention**: follows lookbook-[product]-[descriptor].jpg
- [ ] **Quality check**: Sharp focus, accurate colors, professional lighting
- [ ] **Brand alignment**: Supports "craft over noise" aesthetic

### **Upload Process**
1. **File location**: `/images/products/lookbook/`
2. **Update HTML**: Add to lookbook gallery section
3. **Test loading**: Verify lazy loading functionality
4. **Mobile check**: Confirm display quality across devices
5. **Performance validation**: Ensure <2 second load times

---

## Integration Notes

### **HTML Structure**
```html
<div class="image-container" data-src="../../images/products/lookbook/lookbook-product-main.jpg" data-lazy="true">
    <div class="placeholder-image loading-placeholder">
        <span class="placeholder-text">PRODUCT NAME</span>
        <span class="placeholder-subtitle">Loading...</span>
    </div>
    <noscript>
        <img src="../../images/products/lookbook/lookbook-product-main.jpg" alt="Product Name - Lookbook styling" class="fallback-image">
    </noscript>
</div>
```

### **Performance Considerations**
- **Lazy loading**: Images only load when entering viewport
- **Progressive enhancement**: Full functionality with/without JavaScript
- **Mobile optimization**: Touch-safe interactions, optimized loading
- **SEO friendly**: Proper alt attributes for all images

---

## Quality Standards

### **Visual Excellence**
- Professional photography quality
- Consistent lighting and color treatment
- Sharp, well-composed images
- Cultural narrative alignment

### **Technical Excellence**
- Web-optimized file sizes
- Consistent aspect ratios
- Cross-browser compatibility
- Mobile-responsive display

### **Brand Consistency**
- Aligns with OF THE CULTURE aesthetic
- Supports digital culture positioning
- Maintains "craft over noise" philosophy
- Appeals to target creative professional audience

---

*This specification ensures lookbook images maintain the premium aesthetic while achieving optimal web performance and user experience.*