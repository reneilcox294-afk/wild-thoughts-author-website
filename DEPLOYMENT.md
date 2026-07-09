# Deployment Instructions

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

## Build for Production

```bash
npm run build
npm start
```

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js
5. Click Deploy

### GitHub Pages

1. Uncomment `basePath` and `assetPrefix` in `next.config.js`
2. Update values to match your repo name
3. Run `npm run export`
4. Push `out` folder to GitHub Pages branch

### Other Hosting

The project works on any Node.js hosting:
- Railway
- Heroku
- DigitalOcean
- AWS
- Google Cloud

## Environment Variables

Create `.env.local` if needed for API endpoints:

```
NEXT_PUBLIC_API_URL=your_api_url
```

## Customization

### Update Site Info

Edit `src/config/site.ts` with your details

### Update Content

Edit `src/config/constants.ts` for:
- Quotes
- Testimonials
- Chapters
- Author bio

### Update Colors

Edit `tailwind.config.ts` to customize the color palette

### Update Metadata

Edit `src/config/seo.ts` for SEO settings

## Performance Optimization

- Images are optimized with Next.js Image component
- Code splitting is automatic
- Dynamic imports for heavy components
- CSS is minified and optimized
- JavaScript is minified and tree-shaken

## SEO Features

- Meta tags for all pages
- Open Graph support
- Twitter Card support
- Sitemap generation
- Robots.txt
- Structured data ready
- Mobile-friendly
- Fast Core Web Vitals

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Troubleshooting

### Port already in use
```bash
npm run dev -- -p 3001
```

### Build issues
```bash
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### TypeScript errors
```bash
npm run lint
```

## Support

For issues or questions, check the Next.js documentation:
https://nextjs.org/docs
