# OF THE CULTURE - Master Copy Deck
**Source of Truth for All Site Content**

**Version:** 1.2 - Final Implementation + Grid Organization  
**Date:** January 2025  
**Purpose:** Authoritative copy source organized by site navigation flow for easy review and updates  

---

## 🏢 Brand Foundation

### Core Identity
- **Brand Name**: OF THE CULTURE
- **Parent Company**: Tuku Group, LLC
- **Tagline**: "Small-batch clothing studio"
- **Mission Statement**: "Limited-run apparel. Created with intention."
- **Philosophy**: "Craft over noise. Fewer, better, slower."

### Legal/Copyright
- **Copyright**: "© 2025 Tuku Group, LLC."
- **Independence Statement**: "Independent and privately held."

---

## 🏠 HOMEPAGE Copy

### SEO & Meta Content
- **Title**: "OF THE CULTURE | Digital Culture Apparel"
- **Description**: "OF THE CULTURE creates limited-run apparel inspired by digital culture. Small-batch clothing studio committed to craftsmanship, intentional design, and cultural innovation."
- **Keywords**: "OF THE CULTURE, digital culture fashion, limited-run apparel, small-batch clothing, intentional design, cultural innovation"

### Primary Content
- **H1**: OF THE CULTURE *(displayed via SVG wordmark)*
- **Mission**: "A small-batch clothing studio. Limited-run apparel. Created with intention."

### Brand Philosophy Blocks
```
A small-batch clothing studio.
Limited-run apparel.
Created with intention.

Inspired by design.
Rooted in digital culture.
Committed to craftsmanship.

Cultural References
Subtle references:
Code. Remix culture.
Personal sovereignty.

The unspoken rituals of the internet.

Not loud.
Not trend-driven.
Each piece a signal.
A quiet presence in the sea of the everyday.
```

### Grosgrain Label Philosophy
```
Drawing inspiration from the optimism & ingenuity found within 
decentralization, our perspective embodies the spirit of innovation 
& the future, marrying elegant design with a nod to the humor, hope, 
and forward-thinking ethos of our time.
```

### Navigation
- **"lookbook :: SZN2026"**
- **"catalogue :: SZN2026"**
- **"bag::(0)"** *(empty state - JavaScript controlled)*

---

## 📖 LOOKBOOK Copy

### SEO & Meta Content
- **Title**: "SZN2026 Lookbook - OF THE CULTURE | Digital Culture Apparel"
- **Description**: "OF THE CULTURE SZN2026 lookbook featuring limited-run apparel inspired by digital culture. Visual showcase of thoughtfully designed pieces that speak to craft, intention, and cultural resonance."

### Page Headers
- **H1**: "The Grant Collection"
- **H2**: "Philosophy of Exploration"

### Lookbook Introduction
```
An experiment in using technology at hand to give form to ideas. Thought gathers shape, something imagined begins to live.
```

### Hero Group Composition Image
- **Image**: `lookbook-composition.jpg` - Full-width hero image between intro and gallery
- **Purpose**: Visual showcase of complete Grant Collection before individual product presentations
- **Technical**: Responsive lazy loading with 16:9 desktop ratio, 16:10 mobile ratio
- **Placeholder Text**: "GRANT COLLECTION" with "Loading..." subtitle

### Product Concepts *(Left-to-right, top-to-bottom grid order)*

#### WE / ME *(Grid Position 1)*
- **Concept**: Individual sovereignty, collective proof
- **Signal**: The many exist because the one insists.

#### OPEN HEART *(Grid Position 2)*
- **Product Title**: "OPEN HEART // OPEN SOURCE"
- **Concept**: Transparency as architecture
- **Signal**: A heart unguarded sets ideas free to momentum.

#### Don't Tread on Memes *(Grid Position 3)*
- **Product Title**: "DON'T TREAD ON MEMES"
- **Concept**: Cultural velocity
- **Signal**: The message outruns the market.

#### NODES *(Grid Position 4)*
- **Concept**: Points of presence
- **Signal**: A layer steady on its own, resonant when connected with others.

#### NAKAMOTO *(Grid Position 5)*
- **Concept**: A myth, encrypted
- **Signal**: The code endures where the name disappears.

### Closing Statement
```
One moment a showcase of what can be created in this moment of time. The next, a memory book of what was.
```

### Navigation
- **"return :: homepage"**
- **"browse :: catalogue"**
- **"bag::(0)"** *(empty state - JavaScript controlled)*

### Interactive Elements *(January 2025 Update)*
- **Hero Image Overlay**: "SHOP THE COLLECTION" *(uppercase, hover + scroll-triggered on mobile)*
- **Trigger Behavior**: Activates when hero image 50px from viewport top
- **Persistence**: Remains visible for entire session once triggered
- **Full Coverage**: Complete hero image overlay for maximum visibility
- **Overlay Analytics**: Tracks `lookbook_overlay_scroll_trigger`, `lookbook_overlay_touch`, `lookbook_to_shop`

---

## 🛍️ SHOP/CATALOGUE Copy

### SEO & Meta Content
- **Title**: "Shop - OF THE CULTURE | Digital Culture Apparel"
- **Description**: "OF THE CULTURE SZN2026 catalogue featuring limited-run apparel inspired by digital culture. Shop thoughtfully designed pieces for the digitally native."
- **Keywords**: "OF THE CULTURE shop, SZN2026, digital culture fashion, limited-run clothing, small-batch apparel"

### Page Headers
- **H1**: "The Grant Collection"
- **H2**: "Exploration Becomes Form"

### Shop Introduction
```
Silkscreen, embroidery, and textures move across wool, French terry, and organic cotton. Techniques chosen for meaning, materials selected for presence. Each piece emerges into something made to be worn.
```

### Product Catalog *(Left-to-right, top-to-bottom grid order)*
1. **NAKAMOTO** - $85 *(Grid Position 1)*
2. **WE / ME** - $125 *(Grid Position 2)*
3. **DTOM** - $135 *(Grid Position 3)*
4. **OPEN HEART** - $65 *(Grid Position 4)*
5. **NODES** - $145 *(Grid Position 5)*

### Navigation
- **"return :: homepage"**
- **"view :: lookbook"**
- **"bag::(0)"** *(empty state - JavaScript controlled)*

---

## 👕 PRODUCT PAGES Copy

### SEO & Meta Templates
- **Title Pattern**: "[Product Name] - OF THE CULTURE | Digital Culture Apparel"
- **Description Pattern**: "[Product description]. [Cultural positioning]. [Technical details]."

### Universal Product Page Elements

#### Product Gallery
- **View Labels**: "FRONT VIEW", "BACK VIEW", "DETAIL VIEW"

#### Purchase Form
- **Size Label**: "Size"
- **Size Placeholder**: "Select"
- **Quantity Label**: "Quantity" / "Qty"
- **Add Button**: "ADD"
- **Success State**: "✓ Yours"

#### Specifications Section
- **Accordion Header**: "ATELIER NOTES" *(caps, updated copy)*
- **Production Header**: "PRODUCTION NOTES" *(caps, unchanged from live)*

### Individual Product Copy *(Shop grid order: left-to-right, top-to-bottom)*
**Updated Order (January 2025): NAKAMOTO → OPEN HEART → DTOM → WE/ME → NODES**

#### NAKAMOTO Cap - $85 *(Shop Grid Position 1)*

**Product Description:**
```
A black wool six-panel baseball cap elevated in feel and detail. At its front, an embroidered wool patch underscores its heritage roots, bringing craft and anonymity into the same frame — a piece that speaks without a name.
```


**ATELIER NOTES:**
- **Materials**: "Milled in the U.S. from heritage Herringbone Wool"
- **Construction**: "Curved brim with brushed nickel rear clasp for discreet adjustability"
- **Sizing**: "One Size (OS)"
- **Care**: "Spot clean or dry clean only"

---

#### WE / ME Crewneck - $125 *(Shop Grid Position 2)*

**Product Description:**
```
Cut in French terry cotton, this crewneck sweatshirt balances fit and finish. Its custom embroidery allows the words to stand off the base in dimensional relief, embodying the rhythm between presence as an individual and strength as part of a whole.
```


**ATELIER NOTES:**
- **Materials**: "Certified organic cotton with a smooth exterior and soft loop-back interior"
- **Finish**: "Dyed for a lived-in character"
- **Fit**: "Standard men's sizing with a slightly tailored drape, ideal for layering"
- **Sizing Note**: "For feminine frames, sizes XS and S align with a U.S. women's small or medium"
- **Care**: "Dry clean only"

---

#### DTOM Crewneck - $135 *(Shop Grid Position 3)*

**Product Title**: "DON'T TREAD ON MEMES"

**Product Description:**
```
A structured paneled cotton sweatshirt designed with intent. The phrase across its chest is rendered in a velvety print, pressed into the fabric with subtle elevation — a shorthand for meaning that outpaces the market.
```


**ATELIER NOTES:**
- **Materials**: "Cotton fleece with natural weight and a soft-brushed interior"
- **Construction**: "Ribbed side panels and cuffs for shape retention"
- **Fit**: "Standard men's fit through the body with room to layer"
- **Sizing Note**: "For feminine frames, XS and S align with a U.S. women's small or medium"
- **Care**: "Dry clean only"

---

#### OPEN HEART Tee - $65 *(Shop Grid Position 4)*

**Product Description:**
```
A midweight cotton t-shirt with soft form and lived-in ease. The front artwork is silkscreened with raised, suede-like detailing, a finish that lends both tactility and quiet emphasis — a nod to remix culture.
```


**ATELIER NOTES:**
- **Materials**: "100% combed cotton, chosen for breathable comfort"
- **Construction**: "Mid-weight fabric with a premium handfeel"
- **Fit**: "Silhouette with subtle shaping through the shoulders"
- **Sizing Note**: "Shorter, boxier drape for a modern proportion"
- **Care**: "Dry clean only"

---

#### NODES Hoodie - $145 *(Shop Grid Position 5)*

**Product Description:**
```
A heavyweight organic cotton terry hoodie with a defined silhouette, formed yet breathable. Its graphic carries layered color saturation, silkscreened to achieve depth and presence — a signal that gains strength in connection.
```


**ATELIER NOTES:**
- **Materials**: "Textured exterior with loop-back interior"
- **Construction**: "Overlapping front hood detail for a clean neckline and simple finish"
- **Fit**: "Slightly oversized fit on a standard men's frame; subtle shoulder drop for movement"
- **Sizing Note**: "For feminine frames, size S typically aligns with a U.S. women's medium"
- **Care**: "Dry clean only"

### Navigation (All Product Pages)
- **"return :: homepage"**
- **"view :: lookbook"**
- **"back :: catalogue"**
- **"bag::(0)"** *(empty state - JavaScript controlled)*

---

## 📋 Future Use - Alternative Copy Versions

### Condensed Product Descriptions *(For mobile/product pages)*

#### OPEN HEART - Condensed
```
A midweight cotton t-shirt with soft form and lived-in ease, finished with a silkscreen print and suede-textured detailing — a nod to remix culture.
```

#### WE / ME - Condensed  
```
A French terry crewneck sweatshirt with custom embroidery that lifts from the base — a rhythm between presence as an individual and strength as part of a whole.
```

#### DTOM - Condensed
```
A paneled cotton sweatshirt with structure and intent, its chest graphic rendered in velvety print — meaning carried faster than the market.
```

#### NODES - Condensed
```
A heavyweight organic cotton terry hoodie with a defined silhouette, its layered silkscreen print built in dense color — a signal strengthened through connection.
```

#### NAKAMOTO - Condensed
```
A black wool six-panel baseball cap, elevated with an embroidered wool patch at the front — heritage and anonymity in the same frame.
```

### Product Taglines *(For cards, captions, lookbook spreads)*

- **OPEN HEART**: "A t-shirt with raised detail — open by design."
- **WE / ME**: "Embroidered to stand apart, made to stand together."
- **DTOM**: "A sweatshirt that prints what words can't keep up with."
- **NODES**: "Heavyweight, color-layered, built for connection."
- **NAKAMOTO**: "A wool cap that speaks without a name."

---

## 🛒 Cart & Commerce Copy

### Cart Modal Interface
- **Header**: "Selected Pieces"
- **Close Button**: "×"
- **Empty State**: "Your bag awaits"
- **Subtotal Label**: "Subtotal: $[amount]"
- **Action Buttons**:
  - "Browse" *(empty/minimal cart state)*
  - "Purchase" *(with items in cart)*

### Cart/Bag System States
- **Empty State**: "bag::(0)" *(Visible on all pages per Creative Director/UX standardization)*
- **With Items Dynamic**: "review :: bag (X)" *(where X = item count, JavaScript controlled)*

### Form Elements
- **Size Options**: XS, S, M, L, XL *(apparel)* | OS *(one-size items)*
- **Quantity Options**: 1, 2, 3, 4, 5
- **Validation**: Size selection required *(enforced via JavaScript)*

---

## 🎨 Brand Voice Guidelines

### Voice Characteristics
- **Refined Minimalism**: Elevated yet accessible language with poetic undertones
- **Suggestive Positioning**: "A quiet nod to", "signals", "understanding" rather than explicit declarations
- **Intentional Craft**: Emphasis on materials, construction, and thoughtful design process
- **Cultural Resonance**: Subtle references to digital culture without alienating broader audience
- **Quiet Confidence**: Understated authority without exclusion

### Recurring Phrases
- "Each piece carries intention" / "crafted with intention"
- "For those who navigate/understand"
- "A quiet nod to" / "quiet signals"
- "Made for moments that matter"
- "Small batches" / "considered response"
- "Digitally born, culturally embedded"

---

## 🔄 Copy Update Process & Best Practices

### **CRITICAL: Global Update Methodology**

**Root Cause of Homepage SZN2526 Issue:**
- Updated destination pages individually without cross-checking referring pages
- No systematic find/replace for universal changes (like season updates)
- Missed navigation links that reference updated content

**Prevention Protocol:**

#### 1. **Universal Changes First** *(Season updates, brand name changes)*
```bash
# ALWAYS start with global find/replace for universal changes
find . -name "*.html" -exec sed -i '' 's/SZN2526/SZN2026/g' {} +
find . -name "*.js" -exec sed -i '' 's/SZN2526/SZN2026/g' {} +
```

#### 2. **Site Architecture Update Order** *(Following Copy Deck Structure)*
1. Universal replacements (seasons, prices, brand terms)
2. **Homepage** (entry point - most critical)  
3. **Lookbook** (brand showcase)
4. **Shop/Catalogue** (product overview)
5. **Product pages** (individual updates)
6. **JavaScript systems** (cart, pricing, product IDs)
7. **Modal/interactive copy** (cart, forms)

#### 3. **Cross-Reference Validation**
- **Homepage navigation** → All destination pages
- **Product pricing** → Shop grid, product pages, cart system, JavaScript
- **Navigation links** → Bag/cart references, back/view links
- **Dynamic content** → Cart modal messaging, form states

#### 4. **Quality Control Checklist**
- [ ] Global find/replace completed for universal changes
- [ ] Homepage navigation reflects all destination page updates  
- [ ] All pricing matches across: shop grid, product pages, cart system, JavaScript
- [ ] Season references consistent across all pages and systems
- [ ] Cart functionality preserved during navigation changes
- [ ] End-to-end user journey tested (Homepage → Lookbook → Shop → Product → Cart)

### **Hardcoded Content Locations**

#### HTML Files (Direct content)
- `index.html` - Homepage navigation, brand messaging
- `pages/lookbook/index.html` - Collection name, product concepts
- `pages/shop/index.html` - Catalogue headers, intro copy
- `pages/product/*/index.html` - Product descriptions, cultural headers, ATELIER NOTES

#### JavaScript Files (Dynamic content)
- `shared/js/cart-manager.js` - Cart messaging, pricing, product names/prices
- `pages/product/*/index.html` - Inline JavaScript with pricing, product IDs

#### CSS Files (Label content)
- `shared/css/cart.css` - Form labels, button states (minimal)

---

## 💻 Technical Implementation Notes

### Current Status
- ✅ **All copy implemented** across Homepage, Lookbook, Shop, and Product pages
- ✅ **Navigation updated** to new structure with dynamic bag functionality
- ✅ **DTOM price updated** to $135 across all systems
- ✅ **Cart functionality preserved** - no breaking changes to existing systems

### Completed Implementation
- ✅ **Bag display standardization**: "bag::(0)" now shows consistently across all pages (homepage, lookbook, shop, product pages) per Creative Director/UX recommendation
- ✅ **JavaScript behavior updated**: Always shows bag indicator on non-product pages, updates to "review :: bag(X)" when items added
- **Mobile typography**: "THE GRANT COLLECTION" header needs scaling optimization (pending creative/UI-UX review)

### Production Notes System
- **ATELIER NOTES**: Updated with new copy (caps formatting)
- **PRODUCTION NOTES**: Unchanged from current live state (caps formatting)
- **Accordion Behavior**: Multiple sections can remain open simultaneously

---

*This copy deck follows the site architecture navigation flow (Homepage → Lookbook → Shop → Product Pages) for intuitive review and maintenance. All content has been technically implemented and is ready for final approvals.*