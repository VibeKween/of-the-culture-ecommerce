# Domain Migration Guide - OF THE CULTURE
## From GitHub Pages to oftheculture.co

### Overview
This guide ensures smooth migration of the OF THE CULTURE ecommerce site from GitHub Pages (`vibekween.github.io/of-the-culture-ecommerce`) to the production domain (`oftheculture.co`) with proper HTTPS for secure ecommerce transactions.

### Critical Requirements for Ecommerce
- ✅ **HTTPS mandatory** - Required for secure checkout and customer trust
- ✅ **SSL certificate** - Must be properly configured before launch
- ✅ **Analytics continuity** - GA4 already configured for oftheculture.co
- ✅ **Email integration** - orders@oftheculture.co already configured
- ✅ **Zero downtime** - Seamless transition from development to production

### DNS Configuration Strategy

#### Recommended Approach: WWW Subdomain (Like Tuku Group)
Based on successful Tuku Group setup, use the same reliable pattern:

**DNS Records to Configure:**
```
Type: CNAME
Name: www
Value: vibekween.github.io
TTL: 1 Hour
```

**Domain Forwarding:**
```
From: oftheculture.co (apex)
To: https://www.oftheculture.co
Type: Permanent (301)
HTTPS: Enabled
```

#### Alternative: Apex Domain Setup
If you prefer apex domain (oftheculture.co directly):

**DNS Records:**
```
Type: A
Name: @ (or blank)
Values:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153
```

### Pre-Migration Checklist

#### 1. GitHub Pages Configuration
- [ ] Repository: `of-the-culture-ecommerce` ready
- [ ] Custom domain: Set to `www.oftheculture.co` or `oftheculture.co`
- [ ] HTTPS enforcement: Enable after DNS propagation
- [ ] CNAME file: Will be auto-generated

#### 2. DNS Provider Setup
- [ ] Access to DNS management for oftheculture.co
- [ ] CNAME or A records configured (choose one approach)
- [ ] Domain forwarding configured for apex → www (if using www)
- [ ] TTL set to 1 hour for faster propagation

#### 3. Analytics & Email Verification
- [ ] GA4 already configured for oftheculture.co ✅
- [ ] Email aliases already configured ✅
- [ ] UTM tracking ready for cross-brand analytics ✅

### Migration Timeline

#### Phase 1: DNS Setup (Day 1)
1. **Configure DNS records** following chosen approach
2. **Set up domain forwarding** (if using www)
3. **Update GitHub Pages** custom domain setting
4. **Wait for propagation** (5-30 minutes)

#### Phase 2: SSL Provisioning (Day 1-2)
1. **GitHub provisions SSL** (15 minutes to 24 hours)
2. **Test HTTPS access** on both domains
3. **Enable HTTPS enforcement** in GitHub Pages
4. **Verify secure checkout flow**

#### Phase 3: Verification (Day 2-3)
1. **End-to-end testing** - all pages load with HTTPS
2. **Cart functionality** - secure checkout process
3. **Analytics verification** - events tracking correctly
4. **Email testing** - orders@oftheculture.co working
5. **Cross-brand links** - UTM tracking to Tuku Group

### HTTPS Validation Checklist

#### Critical Ecommerce Security Tests
- [ ] **Homepage**: https://www.oftheculture.co (or oftheculture.co)
- [ ] **Shop catalog**: Secure browsing experience
- [ ] **Product pages**: HTTPS on all 5 products
- [ ] **Cart modal**: Secure cart operations
- [ ] **Checkout flow**: HTTPS maintained through Shopify redirect
- [ ] **Browser security**: No mixed content warnings
- [ ] **SSL certificate**: Valid and trusted by browsers

#### Tools for HTTPS Verification
- **SSL Labs**: ssllabs.com/ssltest/ - Comprehensive SSL analysis
- **Why No Padlock**: whynopadlock.com - Mixed content detection
- **Security Headers**: securityheaders.com - Security configuration check

### Troubleshooting Common Issues

#### DNS Propagation Problems
- **Use DNS checkers**: whatsmydns.net, dnschecker.org
- **Check globally**: Ensure propagation across regions
- **Wait time**: Up to 48 hours for full global propagation

#### SSL Certificate Issues
- **Remove/re-add domain**: Force GitHub to regenerate certificate
- **Check DNS**: Ensure proper A or CNAME records
- **Contact GitHub**: If SSL fails after 24 hours

#### HTTPS Enforcement Problems
- **Mixed content**: All resources must use HTTPS
- **Image URLs**: Verify all product images use HTTPS
- **External links**: Ensure third-party resources are secure

### Performance Considerations

#### Maintain Current Performance Standards
- **Page load times**: Sub-2 seconds maintained ✅
- **Lazy loading**: 40-60% performance gains preserved ✅
- **Cart functionality**: Smooth transitions maintained ✅
- **Mobile optimization**: Touch-safe interactions preserved ✅

#### CDN and Caching
- **GitHub Pages CDN**: Automatic global distribution
- **Browser caching**: Optimized for repeat visitors
- **Image optimization**: Existing lazy loading system

### Analytics Migration Notes

#### No Changes Required
- **GA4 Measurement ID**: G-HQEJ1LNY9S already configured ✅
- **Stream configuration**: Set for oftheculture.co ✅
- **UTM tracking**: Cross-brand analytics ready ✅
- **Event tracking**: Complete ecommerce funnel ready ✅

#### Post-Migration Verification
- [ ] **Real-time reports**: Verify traffic on new domain
- [ ] **E-commerce events**: Test cart and checkout tracking
- [ ] **Cross-brand clicks**: Confirm UTM data to Tuku Group
- [ ] **Conversion goals**: Set up in GA4 for business metrics

### Email System Verification

#### Existing Configuration ✅
- **Primary**: falon@oftheculture.co
- **Aliases**: orders@, hello@, shop@, support@, etc.
- **Integration**: All site copy uses orders@oftheculture.co

#### Post-Migration Testing
- [ ] **Order emails**: Test from cart system
- [ ] **Contact forms**: Verify delivery to orders@
- [ ] **Auto-responses**: Check email functionality
- [ ] **Spam filtering**: Ensure deliverability

### Success Metrics

#### Technical Metrics
- **SSL Rating**: A+ on SSL Labs
- **Page Speed**: <2 seconds maintained
- **Uptime**: 99.9% availability
- **Security**: No mixed content warnings

#### Business Metrics
- **Analytics tracking**: 100% event capture
- **Cart conversion**: Smooth checkout experience
- **Cross-brand tracking**: UTM data flowing to analytics
- **Email integration**: Order processing functional

### Rollback Plan

#### If Issues Arise
1. **Revert DNS**: Point back to GitHub Pages URL
2. **Remove custom domain**: Temporarily use vibekween.github.io
3. **Troubleshoot**: Fix issues in development
4. **Re-attempt**: Migration with corrected configuration

### Best Practices from Tuku Group Success

#### Lessons Learned
- **Use CNAME for www**: More reliable than A records
- **Domain forwarding**: Cleaner than duplicate DNS records
- **Wait times**: DNS and SSL need proper time to propagate
- **Testing**: Verify each step before proceeding

### Next Steps After Migration

#### Business Operations
- **Update marketing materials**: Use new domain in communications
- **Social media**: Update bio links and profiles
- **SEO optimization**: Submit sitemap to search engines
- **Customer communication**: Announce new domain if needed

#### Technical Monitoring
- **Analytics monitoring**: Watch for traffic patterns
- **Error tracking**: Monitor for any SSL or DNS issues
- **Performance monitoring**: Ensure speed standards maintained
- **Security monitoring**: Regular SSL certificate checks

---

**Implementation Timeline**: 2-3 days for complete migration
**Risk Level**: Low (following proven Tuku Group pattern)
**Business Impact**: High (professional domain for ecommerce)

**Key Success Factor**: Following the exact DNS pattern that worked for Tuku Group ensures reliable HTTPS for secure ecommerce operations.