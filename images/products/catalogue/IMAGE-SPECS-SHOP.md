# SHOP/CATALOGUE IMAGE SPECIFICATIONS
*Product Grid Display - Commercial Photography Guidelines*

## Overview
Shop page images present products in clean, commercial format optimized for catalog browsing and selection. Focus on clear product presentation with minimal distractions.

---

## Technical Specifications

### **Aspect Ratio**
- **5:7 ratio** (e.g., 1000x1400px)
- **Portrait orientation** for consistent grid display
- **CSS Implementation**: `padding-bottom: 140%` (mobile: 160%)

### **File Requirements**
- **Format**: JPEG (.jpg) for photography
- **Quality**: Commercial product photography standard
- **File Size**: **200-400KB maximum** (optimized for grid loading)
- **Dimensions**: Minimum 1000x1400px (5:7 ratio)
- **Color Profile**: sRGB for web consistency

### **Naming Convention**
```
shop-[product-name]-[version].jpg

Examples:
- shop-nakamoto-main.jpg
- shop-nodes-grain-5-50.jpg
- shop-weme-grain-5-50.jpg
- shop-dtom-grain-5-50.jpg
- shop-openheart-grain-5-50.jpg

Note: "grain-5-50" indicates film grain effect at 5% opacity, 50% intensity
```

---

## Photography Guidelines

### **Commercial Product Standards**
- **Clean backgrounds**: Minimal, non-competing backgrounds
- **Product focus**: Clear, unobstructed view of the piece
- **Consistent lighting**: Professional, even lighting across all images
- **Color accuracy**: True representation of fabric colors and textures

### **Composition Requirements**
- **Centered product**: Product positioned prominently in frame
- **Full garment visibility**: Complete view of the piece (unless cropped stylistically)
- **Consistent scale**: Similar sizing across different products in grid
- **Minimal props**: Focus on product, not styling elements

### **Brand Aesthetic**
- **Film grain texture**: Subtle grain effect for analog warmth (5% opacity, 50% intensity)
- **Muted color palette**: Align with digital culture minimalism
- **Premium feel**: High-quality, professional commercial photography
- **Cultural subtlety**: Understated references to digital/crypto culture

---

## Current Implementation Analysis

### **Grid Performance**
- **Lazy loading**: Proven 40-60% performance improvements
- **Responsive design**: 3-column desktop, 2-column tablet, 1-column mobile
- **Touch optimization**: Mobile-friendly hover states and interactions
- **Progressive loading**: Images load as user scrolls

### **User Experience**
- **Quick browsing**: Fast-loading images for efficient catalog scanning
- **Clear product identity**: Easy product recognition and differentiation
- **Seamless navigation**: Smooth transitions to product detail pages
- **Mobile-optimized**: Touch-friendly grid interactions

---

## File Preparation Checklist

### **Pre-Production Setup**
- [ ] **Lighting setup**: Professional, consistent lighting rig
- [ ] **Background prepared**: Clean, minimal background selection
- [ ] **Product styling**: Garments properly steamed, positioned
- [ ] **Camera settings**: High resolution, proper color profile

### **Photography Execution**
- [ ] **Multiple angles**: Capture various compositions
- [ ] **Focus verification**: Sharp, clear product details
- [ ] **Color accuracy**: True-to-life fabric representation
- [ ] **Composition check**: Product centered, well-framed

### **Post-Production Workflow**
- [ ] **Crop to 5:7 ratio**: Exactly 1000x1400px minimum
- [ ] **Color correction**: Accurate fabric colors
- [ ] **Apply grain effect**: 5% opacity, 50% intensity film grain
- [ ] **Optimize file size**: Target 200-400KB
- [ ] **Quality verification**: Sharp details maintained after compression

### **Upload Preparation**
- [ ] **Naming convention**: shop-[product]-[version].jpg
- [ ] **File size check**: <400KB confirmed
- [ ] **Dimensions verified**: Minimum 1000x1400px (5:7 ratio)
- [ ] **Quality assurance**: Final visual review

---

## Integration Requirements

### **HTML Structure**
```html
<div class="product-item">
    <div class="image-container" data-lazy="true" data-src="../../images/products/catalogue/Production/shop-product-main.jpg">
        <div class="loading-placeholder">
            <span class="placeholder-text">PRODUCT</span>
            <span class="placeholder-subtitle">Loading...</span>
        </div>
        <noscript>
            <img src="../../images/products/catalogue/Production/shop-product-main.jpg" alt="Product Name" class="fallback-image">
        </noscript>
    </div>
    <div class="product-info">
        <h3 class="product-name">PRODUCT NAME</h3>
        <p class="product-price">$XXX</p>
    </div>
</div>
```

### **File Organization**
```
/images/products/catalogue/
├── Production/          # Live, optimized images
│   ├── shop-nakamoto-main.jpg
│   ├── shop-nodes-grain-5-50.jpg
│   └── [other products]
├── Archive/            # Previous versions, backups
└── IMAGE-SPECS-SHOP.md # This specification document
```

---

## Performance Standards

### **Loading Optimization**
- **File size target**: 200-400KB per image
- **Format optimization**: JPEG with optimal compression
- **Lazy loading**: Only load images entering viewport
- **Progressive enhancement**: Fallback for no-JavaScript environments

### **User Experience Metrics**
- **Grid load time**: <2 seconds for initial view
- **Image quality**: Sharp, professional presentation
- **Color consistency**: Accurate across different displays
- **Mobile performance**: Optimized for 4G networks

---

## Quality Control Checklist

### **Before Upload**
- [ ] **Aspect ratio**: Exactly 5:7 (width:height)
- [ ] **File size**: Between 200-400KB
- [ ] **Image quality**: Sharp, professional, consistent lighting
- [ ] **Brand alignment**: Matches OF THE CULTURE aesthetic
- [ ] **Color accuracy**: True fabric representation
- [ ] **Grain effect**: Subtle film texture applied (5% opacity, 50%)

### **After Upload**
- [ ] **Loading test**: Verify lazy loading functionality
- [ ] **Mobile check**: Display quality on various devices
- [ ] **Grid alignment**: Proper positioning in product grid
- [ ] **Performance validation**: Page load time under 2 seconds
- [ ] **Cross-browser test**: Safari, Chrome, Firefox compatibility

---

## Brand Standards

### **Visual Consistency**
- **Professional quality**: Commercial photography standards
- **Cultural alignment**: Reflects digital culture aesthetic
- **Minimal approach**: "Craft over noise" philosophy
- **Premium positioning**: High-quality, intentional presentation

### **Technical Excellence**
- **Web optimization**: Fast loading, responsive display
- **Accessibility**: Proper alt text, fallback options
- **Performance**: Maintains site speed standards
- **Scalability**: Consistent approach across all products

---

## Production Notes

### **Current Proven System**
- Film grain effect at 5% opacity, 50% intensity
- 5:7 aspect ratio maintained across all products
- File sizes optimized between 200-400KB
- Lazy loading with 40-60% performance improvements

### **Future Considerations**
- Maintain consistent aesthetic as product line expands
- Regular performance audits to ensure loading standards
- Seasonal updates may require color/styling consistency checks
- Integration with future web3/crypto payment systems

---

*This specification ensures shop images maintain commercial quality while achieving optimal web performance and brand consistency.*