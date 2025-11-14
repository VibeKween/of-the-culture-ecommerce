# Repository Status & Configuration

**Last Updated**: November 14, 2025
**Repository Type**: Private
**Project**: OF THE CULTURE Ecommerce Site

---

## Repository Information

### Visibility Status

**Private Repository** - This repository contains proprietary ecommerce configuration and business logic for OF THE CULTURE.

**Protected Information:**
- Ecommerce strategy and business logic
- Product catalog structure and pricing
- API configuration and integration patterns
- Analytics tracking implementation (Google Analytics 4, Meta Pixel)
- Commerce backend integration (Shopify configuration)
- Custom cart system architecture
- Marketing and conversion optimization strategies

### Repository Details

- **Owner**: VibeKween
- **Repository Name**: of-the-culture-ecommerce
- **Primary Branch**: `main`
- **Access**: Restricted to authorized collaborators only

---

## Live Deployment

### Production Site

- **Production URL**: https://oftheculture.co
- **Hosting Platform**: Cloudflare Pages
- **Deployment Method**: Automatic deployment from `main` branch
- **Preview URL**: https://of-the-culture-ecommerce.pages.dev

### Deployment Configuration

**Cloudflare Pages Settings:**
- **Source**: GitHub integration (with private repository access enabled)
- **Production Branch**: `main`
- **Build Command**: None (pure HTML/CSS/JS - no build process)
- **Build Output Directory**: `/` (root directory)
- **Framework Preset**: None
- **Deployment Speed**: ~30 seconds from push to live

**Important Notes:**
- ✅ Cloudflare Pages supports private repositories via GitHub OAuth
- ✅ No configuration changes needed when repository became private
- ✅ Automatic deployments continue to work seamlessly
- ✅ Site remains publicly accessible at production URL

---

## Development Workflow

### Branch Strategy

**Main Branch (`main`):**
- Source of truth for production code
- Automatically deploys to https://oftheculture.co
- Protected branch (recommend enabling branch protection rules)

**Development Branches:**
- Feature branches: `dev-*` or `feature/*`
- Claude AI branches: `claude/*` (temporary development branches)
- Always merge to `main` after testing

### Git Workflow

```bash
# Routine updates (copy, images, minor fixes)
git checkout main
git pull origin main
# Make changes
git add .
git commit -m "Description of changes"
git push origin main  # Live in ~30 seconds

# Complex development work
git checkout -b dev-feature-name
# Develop and test
git checkout main
git merge dev-feature-name
git push origin main
```

---

## Access & Permissions

### Who Has Access

**Repository Access Levels:**
- **Admin**: Project owner (VibeKween)
- **Write**: Authorized developers and collaborators
- **Read**: Invited team members for documentation review

**Cloudflare Pages Access:**
- Cloudflare account has OAuth access to private repository
- GitHub integration maintains automatic deployment capability

### Granting Access

To add a new collaborator:
1. Navigate to repository Settings → Collaborators
2. Click "Add people"
3. Enter GitHub username and select permission level
4. New collaborator will receive invitation email

---

## Technical Architecture

### Stack Overview

**Frontend:**
- Pure HTML/CSS/JavaScript (no build tools)
- JetBrains Mono typography system
- Mobile-first responsive design
- Progressive enhancement approach

**Backend & Services:**
- Shopify Basic for commerce backend
- Google Analytics 4 for tracking
- Meta Pixel for social conversion tracking
- LocalStorage-based cart system
- Email integration: orders@oftheculture.co

**Hosting & Deployment:**
- Cloudflare Pages (primary hosting)
- Custom domain with automatic HTTPS
- Global CDN distribution
- Automatic deployments from GitHub

### Performance Standards

**Protected Baselines:**
- Sub-2 second page load times
- 40-60% performance improvements from lazy loading
- Lighthouse scores: 90+ across all pages
- Mobile-optimized with 768px breakpoint

---

## Security Considerations

### What's Protected

**Business-Critical Information:**
- Pricing strategy and product catalog
- Analytics tracking IDs and configuration
- Shopify integration details
- Marketing conversion optimization tactics
- Future Web3 integration architecture plans

**Code & Configuration:**
- Custom cart system implementation
- Image optimization and asset management strategy
- SEO configuration and structured data
- Email integration patterns

### What's Public

**Live Site Access:**
- ✅ Public can access https://oftheculture.co
- ✅ All pages are publicly browsable
- ✅ Products and pricing are visible to customers
- ✅ Cart and checkout flows are accessible

**Separation of Concerns:**
- **Private**: How the site is built, configured, and deployed
- **Public**: What the site displays and sells to customers

---

## Migration History

### GitHub Pages → Cloudflare Pages

**Timeline:**
- **Original Deployment**: GitHub Pages (https://vibekween.github.io/of-the-culture-ecommerce/)
- **Migration Date**: August 2025
- **New Platform**: Cloudflare Pages with custom domain
- **Current Status**: Fully migrated to oftheculture.co

**Migration Benefits:**
- ✅ Custom domain without limitations
- ✅ Faster global CDN performance
- ✅ Better SSL/HTTPS handling
- ✅ Enhanced security features
- ✅ Private repository compatibility

### Repository Privacy Change

**Timeline:**
- **Original Status**: Public repository
- **Privacy Update**: November 14, 2025
- **Reason**: Protect proprietary ecommerce configuration
- **Impact**: Zero disruption to live site or deployments

---

## Documentation Updates

### Updated Files (November 14, 2025)

**Core Documentation:**
- ✅ `README.md` - Added repository privacy notice
- ✅ `CLAUDE.md` - Updated deployment and repository references
- ✅ `docs/README.md` - Updated repository information
- ✅ `docs/DEVELOPMENT-OVERVIEW.md` - Updated URLs and setup instructions
- ✅ `docs/ANALYTICS-CREDENTIALS.md` - Updated hosting status and testing URLs
- ✅ `testing/README.md` - Updated path examples for production deployment

**Template Files:**
- ✅ `docs/templates/HANDOFF-GENERATOR-GUIDE.md` - Updated example URLs
- ✅ `docs/building-in-public/templates/SESSION-SUMMARY-TEMPLATE.md` - Updated footer references

**Historical Documentation:**
- Note: Session handoff files in `docs/sessions/` contain historical references to old URLs
- These are preserved as-is for historical accuracy
- Current references in active documentation have been updated

---

## Quick Reference

### URLs

| Purpose | URL |
|---------|-----|
| Production Site | https://oftheculture.co |
| Cloudflare Preview | https://of-the-culture-ecommerce.pages.dev |
| Email Orders | orders@oftheculture.co |

### Key Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview and quick start |
| `CLAUDE.md` | Development philosophy and workflow guidelines |
| `REPO-STATUS.md` | Repository configuration (this file) |
| `docs/DEVELOPMENT-OVERVIEW.md` | Comprehensive technical documentation |
| `shared/css/main.css` | Design system (488 lines) |
| `shared/js/cart-manager.js` | Cart system implementation |

### Support & Contact

**Development Team:**
- Primary: Project owner (VibeKween)
- Collaborators: See repository Settings → Collaborators

**External Services:**
- **Cloudflare Support**: For hosting/deployment issues
- **Shopify Support**: For commerce backend questions
- **Google Analytics**: For tracking and analytics questions

---

## FAQs

### Why is the repository private?

This is an active ecommerce operation generating revenue. The repository protects business strategy, pricing logic, and proprietary configuration while keeping the public-facing site fully accessible.

### Will making the repo private affect the live site?

No. The live site at oftheculture.co remains fully public and accessible. Only the source code and configuration are private.

### How do deployments work with a private repo?

Cloudflare Pages maintains OAuth access to the private repository through GitHub integration. Deployments continue automatically when pushing to the `main` branch.

### Can I still share the live site?

Absolutely! Share https://oftheculture.co with anyone. The site is public and designed for customers to browse and purchase products.

### What if someone needs to contribute?

Invite them as a collaborator through GitHub repository settings. They'll receive an invitation to access the private repository.

---

**Document Version**: 1.0
**Maintained By**: Development Team
**Review Schedule**: Quarterly or after major infrastructure changes
