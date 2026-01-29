# Deployment Guide

## Quick Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   # If you haven't added a remote yet
   git remote add origin https://github.com/yourusername/agent-school-demo.git

   # Push to GitHub
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain** (Optional):
   - In Vercel project settings → Domains
   - Add your custom domain (e.g., demo.agentschool.com)
   - Follow DNS configuration instructions

## Environment Variables (Optional)

If you want to add analytics or other services:

1. In Vercel project → Settings → Environment Variables
2. Add the following if needed:
   - `NEXT_PUBLIC_GA_ID` - Google Analytics ID
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` - Plausible domain

## Manual Build

If you want to deploy elsewhere:

```bash
# Build the production bundle
npm run build

# The output will be in .next/ folder
# You can then deploy this folder to any Node.js hosting
```

## Testing Production Build Locally

```bash
# Build and start production server
npm run build
npm start

# Open http://localhost:3000
```

## Performance Checklist

Before going live:

- [ ] Test on Chrome, Safari, Firefox, Edge
- [ ] Test mobile fallback message
- [ ] Verify all animations run smoothly
- [ ] Test full demo flow end-to-end
- [ ] Verify CTA form submission works
- [ ] Check console for errors
- [ ] Run Lighthouse audit (target: 90+ scores)
- [ ] Test with slow 3G network throttling

## Analytics Setup

### Option 1: Google Analytics

1. Get GA4 tracking ID from analytics.google.com
2. Add to Vercel environment variables: `NEXT_PUBLIC_GA_ID`
3. Update `lib/analytics.ts`:
   ```typescript
   if (window.gtag) {
     window.gtag('event', eventName, properties);
   }
   ```

### Option 2: Plausible

1. Add to Vercel environment variables: `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
2. Update `lib/analytics.ts`:
   ```typescript
   if (window.plausible) {
     window.plausible(eventName, { props: properties });
   }
   ```

## Calendly Integration

Current setup opens Calendly in new tab. To embed:

1. Get Calendly embed code
2. Replace form submission in `app/demo/page.tsx`
3. Or use Calendly's inline widget

## Monitoring

Vercel provides built-in:
- Deployment logs
- Function logs
- Analytics (if enabled)
- Web Vitals monitoring

Access via: Vercel Dashboard → Your Project → Analytics

## Troubleshooting

**Build fails on Vercel:**
- Check build logs in Vercel deployment
- Run `npm run build` locally to reproduce
- Verify all dependencies are in package.json

**Animations lag:**
- Check Lighthouse Performance score
- Enable GPU acceleration in browser
- Test on different devices

**Form doesn't submit:**
- Check browser console for errors
- Verify Calendly URL is correct
- Test form validation

## Post-Deployment

1. Share demo link in cold emails
2. Monitor analytics for:
   - Demo start rate
   - Run 1 completion
   - Run 2 completion
   - CTA clicks
3. Iterate based on drop-off points

## Support

For issues, check:
- Vercel deployment logs
- Browser console errors
- Next.js documentation: https://nextjs.org/docs
