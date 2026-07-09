# Development Guide

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   ├── about/            # About page
│   ├── book/             # Book details
│   ├── author/           # Author bio
│   ├── contact/          # Contact page
│   ├── sitemap.ts        # Sitemap
│   ├── robots.ts         # Robots
│   └── not-found.tsx     # 404 page
├── components/
│   ├── Navigation.tsx    # Header nav
│   ├── Footer.tsx        # Footer
│   ├── Hero.tsx          # Hero section
│   ├── CTAButton.tsx     # CTA buttons
│   ├── Testimonials.tsx  # Reviews
│   ├── FeaturedQuotes.tsx # Quotes
│   ├── NewsletterForm.tsx # Newsletter
│   ├── ContactForm.tsx   # Contact form
│   ├── SectionHeader.tsx # Section headers
│   └── FeatureCard.tsx   # Feature cards
├── config/
│   ├── site.ts           # Site config
│   ├── seo.ts            # SEO config
│   └── constants.ts      # Content
├── hooks/
│   └── useDarkMode.ts    # Dark mode
├── types/
│   └── index.ts          # TypeScript types
├── utils/
│   └── helpers.ts        # Utilities
└── styles/
    ├── globals.css       # Global styles
    └── animations.css    # Animations
```

## Adding New Pages

1. Create a folder in `src/app/` with the page name
2. Add `page.tsx` inside
3. Export a default React component
4. Page is automatically routed

```tsx
export default function NewPage() {
  return <div>New Page</div>
}
```

## Adding New Components

1. Create file in `src/components/`
2. Create functional React component
3. Add proper TypeScript types
4. Export default

```tsx
interface Props {
  title: string
}

const MyComponent: React.FC<Props> = ({ title }) => {
  return <div>{title}</div>
}

export default MyComponent
```

## Styling

Use Tailwind CSS utility classes:

```tsx
<div className="bg-gold-500 text-white p-4 rounded-lg">
  Content
</div>
```

Custom colors defined in `tailwind.config.ts`:
- `primary` - Black, grays, whites
- `gold` - Gold/yellow accents

## Animations

Use Framer Motion for animations:

```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## Dark Mode

Use the `useDarkMode` hook:

```tsx
import { useDarkMode } from '@/hooks/useDarkMode'

const { isDark, toggleDarkMode } = useDarkMode()
```

Tailwind dark mode classes:

```tsx
<div className="bg-white dark:bg-primary-900">
  Content
</div>
```

## Forms

Use React Hook Form for form management:

```tsx
import { useForm } from 'react-hook-form'

const { register, handleSubmit } = useForm()
```

## Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://your-site.com
```

Access in code:

```tsx
process.env.NEXT_PUBLIC_SITE_URL
```

## Testing

Run ESLint:

```bash
npm run lint
```

## Debugging

### Console Logging
```tsx
console.log('Debug message')
```

### Next.js Debug Mode
```bash
DEBUG=* npm run dev
```

### Browser DevTools
Press F12 in browser

## Performance Tips

1. Use dynamic imports for large components
2. Optimize images
3. Use proper key props in lists
4. Avoid unnecessary re-renders
5. Code split at route boundaries

## Best Practices

1. Use TypeScript for type safety
2. Keep components focused and small
3. Extract repeated logic to hooks
4. Use semantic HTML
5. Test on mobile devices
6. Follow accessibility guidelines
7. Write meaningful commit messages

## Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
