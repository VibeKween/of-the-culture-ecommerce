# PRODUCT PAGE IMAGE SPECIFICATIONS
*Individual Product Detail - Complete Photography Suite*

## Overview
Product page images provide comprehensive product documentation with multiple views (main, back, detail) following premium ecommerce standards. Each product requires a complete image set for thorough customer evaluation.

---

## Technical Specifications

### **Aspect Ratio**
- **4:5 ratio** (e.g., 1000x1250px) for all product images
- **Consistent across all views**: Main, back, detail images
- **CSS Implementation**: `aspect-ratio: 4/5`

### **File Requirements**
- **Format**: JPEG (.jpg/.jpeg) for photography
- **Quality**: Premium ecommerce photography standard
- **File Size**: **200-500KB maximum** (CRITICAL for performance)
- **Dimensions**: Minimum 1000x1250px (4:5 ratio)
- **Color Profile**: sRGB for web consistency

### **Current File Size Analysis**
```
❌ Current Issues:
- WE/ME: 13.4MB (needs 97% reduction → 300KB)
- DTOM: 2.6MB (needs 88% reduction → 300KB)  
- NODES: 3.3MB (needs 91% reduction → 300KB)
- OPEN HEART: 3.1MB (needs 90% reduction → 300KB)

✅ Optimal Example:
- NAKAMOTO: 83KB (perfect size, loads instantly)
```

---

## Image Types Required

### **1. Main Product Image**
**Purpose**: Primary product view for main display
```
Naming: [product-name]-main.jpg
Examples:
- nakamoto-main.jpg
- weme-main.jpg
- dtom-main.jpeg
- nodes-main.jpeg
- openheart-main.jpeg
```

**Requirements**:
- **Front-facing view**: Primary product presentation
- **Model/flat lay**: Product worn or styled appropriately
- **Clean background**: Minimal, non-competing background
- **Full product visibility**: Complete garment shown clearly

### **2. Back View Image**
**Purpose**: Show back design, construction details
```
Naming: [product-name]-back.jpg
Examples:
- nakamoto-back.jpg
- weme-back.jpg
- dtom-back.jpg
```

**Requirements**:
- **Back-facing view**: Clear view of rear design elements
- **Same model/styling**: Consistent with main image presentation
- **Detail visibility**: Graphics, construction, fit from behind
- **Consistent lighting**: Matches main image quality

### **3. Detail View Image**
**Purpose**: Close-up of key features, materials, craftsmanship
```
Naming: [product-name]-detail.jpg
Examples:
- nakamoto-detail.jpg (embroidery close-up)
- weme-detail.jpg (fabric texture, logo)
- dtom-detail.jpg (print detail, material)
```

**Requirements**:
- **Macro/close-up**: Key product features highlighted
- **Material texture**: Fabric weave, print quality, construction
- **Brand elements**: Logo, tags, unique design elements
- **Sharp focus**: Crystal clear detail reproduction

---

## Photography Guidelines

### **Commercial Product Standards**
- **Professional lighting**: Consistent, even lighting across all views
- **Color accuracy**: True representation of fabric colors
- **Sharp focus**: Every detail crisp and clear
- **Consistent styling**: Same model, positioning, background treatment

### **Brand Aesthetic Alignment**
- **Cultural context**: Reflects digital culture positioning
- **Premium quality**: High-end ecommerce photography standards
- **Minimal backgrounds**: Focus on product, not environment
- **Authentic presentation**: True-to-life size, fit, drape

### **Model Direction** (if applicable)
- **Natural poses**: Authentic, comfortable positioning
- **Consistent styling**: Hair, makeup, accessories minimal/consistent
- **Cultural alignment**: Appeals to digital creators, crypto builders
- **Fit demonstration**: Shows how garment drapes and fits

---

## Current Implementation Issues

### **Performance Problems**
- **Loading times**: 10+ seconds for large images
- **User experience**: "Permanent loading" states
- **Mobile impact**: Severe performance issues on cellular networks
- **Bandwidth costs**: Excessive data usage for users

### **Technical Issues**
- **File sizes**: 25-160x larger than optimal
- **Memory usage**: Browser memory consumption excessive
- **SEO impact**: Page speed scores severely affected
- **User abandonment**: High drop-off from slow loading

---

## File Preparation Checklist

### **Pre-Production Setup**
- [ ] **Equipment ready**: Professional camera, lighting, tripod
- [ ] **Background prepared**: Clean, consistent backdrop
- [ ] **Product prepared**: Garments steamed, styled, ready
- [ ] **Model briefed**: Understanding of poses, brand aesthetic

### **Photography Session**
- [ ] **Main view captured**: Front-facing, full product visible
- [ ] **Back view captured**: Clear rear view, same lighting/styling
- [ ] **Detail shots**: Multiple close-ups of key features
- [ ] **Focus verification**: All shots sharp, properly exposed
- [ ] **Consistency check**: Lighting, styling consistent across all views

### **Post-Production Workflow**
- [ ] **Crop to 4:5 ratio**: Exactly 1000x1250px minimum
- [ ] **Color correction**: Accurate fabric color representation
- [ ] **Sharpening**: Enhance details without over-processing
- [ ] **Background cleanup**: Remove distractions, maintain consistency

### **Optimization Process** (CRITICAL)
- [ ] **Resize for web**: Maintain quality while reducing file size
- [ ] **Compress images**: Target 200-500KB per image
- [ ] **Quality verification**: Ensure sharpness maintained
- [ ] **File size confirmation**: <500KB maximum, ideally 200-300KB

### **Upload Preparation**
- [ ] **Naming convention**: [product]-[view].jpg format
- [ ] **File organization**: Proper folder structure maintained
- [ ] **Quality final check**: Visual review of all compressed images
- [ ] **Performance validation**: File sizes optimized for web

---

## Integration Requirements

### **HTML Structure**
```html
<!-- Main Product Image -->
<div class="image-container main-view">
    <img src="../../../images/products/product-pages/product-main.jpg" 
         alt="Product Name - Front View" 
         class="product-main-image" 
         loading="lazy" 
         decoding="async">
    <div class="image-overlay">
        <span class="view-label">FRONT VIEW</span>
    </div>
</div>

<!-- Additional Views (Back, Detail) -->
<div class="additional-views">
    <div class="image-container view-item">
        <div class="placeholder-image small">
            <span class="placeholder-text">BACK</span>
            <span class="placeholder-subtitle">VIEW</span>
        </div>
        <div class="image-overlay">
            <span class="view-label">BACK VIEW</span>
        </div>
    </div>
</div>
```

### **File Organization**
```
/images/products/product-pages/
├── nakamoto-main.jpg      (✅ 83KB - optimal)
├── weme-main.jpg          (❌ 13.4MB - needs optimization)
├── dtom-main.jpeg         (❌ 2.6MB - needs optimization)
├── nodes-main.jpeg        (❌ 3.3MB - needs optimization)
├── openheart-main.jpeg    (❌ 3.1MB - needs optimization)
├── [future back views]
├── [future detail views]
└── IMAGE-SPECS-PRODUCT-PAGES.md
```

---

## Performance Standards

### **Critical Requirements**
- **File size**: 200-500KB maximum per image
- **Load time**: <2 seconds on 4G networks
- **Quality**: Professional ecommerce standard maintained
- **Consistency**: All products meet same performance standards

### **Optimization Targets**
- **WE/ME**: 13.4MB → 300KB (97% reduction required)
- **DTOM**: 2.6MB → 300KB (88% reduction required)
- **NODES**: 3.3MB → 300KB (91% reduction required)
- **OPEN HEART**: 3.1MB → 300KB (90% reduction required)
- **NAKAMOTO**: 83KB (maintain current optimization)

---

## Quality Control Checklist

### **Photography Quality**
- [ ] **Professional standards**: Commercial product photography quality
- [ ] **Consistent lighting**: Even, professional illumination
- [ ] **Sharp focus**: All product details crisp and clear
- [ ] **Color accuracy**: True fabric color representation
- [ ] **Complete coverage**: Main, back, detail views captured

### **Technical Standards**
- [ ] **Aspect ratio**: Exactly 4:5 (width:height)
- [ ] **File size**: 200-500KB range (CRITICAL)
- [ ] **Image quality**: High resolution, professional presentation
- [ ] **Naming convention**: [product]-[view].jpg format
- [ ] **Web optimization**: sRGB color profile, optimized compression

### **Brand Alignment**
- [ ] **Cultural context**: Reflects digital culture aesthetic
- [ ] **Premium positioning**: High-quality, intentional presentation
- [ ] **Target audience**: Appeals to creative professionals, builders
- [ ] **Consistency**: Matches overall OF THE CULTURE brand standards

---

## Immediate Action Required

### **Priority 1: Existing Image Optimization**
```
Current Status: CRITICAL PERFORMANCE ISSUE
- 4 out of 5 product images causing loading failures
- File sizes 25-160x larger than web standards
- User experience severely impacted

Required Action:
1. Professional image optimization for existing files
2. Reduce file sizes by 88-97% while maintaining quality
3. Upload optimized versions immediately
4. Validate performance improvements
```

### **Priority 2: Complete Image Sets**
- Capture back views for all products
- Create detail shots highlighting key features
- Maintain consistency across all product pages
- Implement systematic photography workflow

---

## Production Workflow

### **For New Products**
1. **Photography session**: Capture main, back, detail views
2. **Post-production**: Edit, color correct, optimize
3. **File preparation**: Crop, compress, name properly
4. **Quality assurance**: Verify file sizes, image quality
5. **Upload**: Add to product-pages folder, update HTML
6. **Testing**: Verify loading performance, visual quality

### **For Existing Products**
1. **Immediate**: Optimize current oversized files
2. **Short-term**: Capture missing back/detail views
3. **Long-term**: Establish consistent photography standards
4. **Ongoing**: Maintain performance standards for all products

---

*This specification ensures product page images meet both premium quality standards and critical web performance requirements.*