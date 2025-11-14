# Analytics Credentials & Setup - OF THE CULTURE

## Single Source of Truth for Analytics

### Google Analytics 4 Configuration

**Account Information:**
- **Google Account**: tukugroupllc@gmail.com
- **Property Name**: OF THE CULTURE Ecommerce
- **Stream Name**: OF THE CULTURE Website

**Technical Details:**
- **Measurement ID**: `G-HQEJ1LNY9S`
- **Stream ID**: `12184974167`
- **Stream URL**: https://oftheculture.co (configured for future domain)

**Enhanced Measurement Enabled:**
- ✅ Page views
- ✅ Scrolls
- ✅ Outbound clicks
- ✅ Site search
- ✅ Video engagement
- ✅ File downloads
- ✅ Form interactions

### Current Hosting Status

**Live Production Site**: Cloudflare Pages deployment with custom domain

- **Production URL**: https://oftheculture.co
- **Preview URL**: https://of-the-culture-ecommerce.pages.dev (Cloudflare Pages)
- **Analytics Configuration**: Set up for oftheculture.co (production tracking active)

### Implementation Status

**✅ Complete Setup:**
- Google Analytics 4 tracking installed across all 8 pages
- Measurement ID `G-HQEJ1LNY9S` properly configured
- E-commerce events integrated (cart, checkout, product views)
- Lookbook interaction tracking implemented
- Meta Pixel placeholders ready (not activated)

**📋 Files Updated with Real Analytics ID:**
- `/pages/homepage/index.html`
- `/pages/lookbook/index.html`
- `/pages/shop/index.html`
- `/pages/product/nakamoto/index.html`
- `/pages/product/weme/index.html`
- `/pages/product/dtom/index.html`
- `/pages/product/openheart/index.html`
- `/pages/product/nodes/index.html`

### Testing Instructions

**For Production Site:**
1. Visit: https://oftheculture.co
2. Open Google Analytics Real-time reports
3. Navigate through pages and test cart functionality
4. Verify events appear in GA4 real-time

**When Domain Goes Live:**
- No changes needed to analytics code
- Analytics will automatically start tracking oftheculture.co traffic
- Both GitHub Pages and live domain will send data to same GA4 property

### Meta Pixel Status

**Current Status**: Placeholder code installed but NOT active
- **Placeholder ID**: `YOUR_PIXEL_ID_HERE` (not functional)
- **Can be removed**: Easily removable if not needed
- **Can be activated**: Replace placeholder with real Pixel ID when ready

### Analytics Events Currently Tracking

**Page Events:**
- Homepage visits
- Lookbook visits with image load tracking
- Shop catalog views
- Individual product page views

**E-commerce Events:**
- Product views with pricing data
- Add to cart actions
- Remove from cart actions
- Cart modal views
- Checkout initiation (to Shopify)

**Engagement Events:**
- Lookbook scroll depth (25%, 50%, 75%, 100%)
- Gallery item interactions (clicks, hovers)
- Image lazy loading completion

### Access & Permissions

**Primary Access**: tukugroupllc@gmail.com
**Analytics Property**: OF THE CULTURE Ecommerce (Google Analytics 4)
**Stream**: OF THE CULTURE Website (ID: 12184974167)

### Email Aliases Configuration

**Primary Account**: falon@oftheculture.co
**Configured Aliases** (all redirect to primary account):
- atelier@oftheculture.co
- hello@oftheculture.co
- orders@oftheculture.co ← Currently used in site copy
- privacy@oftheculture.co
- shop@oftheculture.co
- support@oftheculture.co

**Note**: All email references in site copy use `orders@oftheculture.co` which is properly configured.

### Next Steps

1. **Test Current Setup**: Verify tracking on GitHub Pages site
2. **Domain Migration**: When oftheculture.co goes live, analytics will work automatically
3. **Meta Pixel Decision**: Decide whether to activate or remove Facebook tracking
4. **Conversion Goals**: Set up specific business goals in GA4

---

**Last Updated**: Session 17 - Analytics Implementation Complete
**Status**: ✅ Ready for production testing and domain migration