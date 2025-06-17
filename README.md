# Menrva Healthcare Website

A modern, professional Next.js website for Menrva Healthcare - Mumbai's trusted door-to-door blood testing service.

## About Menrva Healthcare

Menrva Healthcare provides convenient, affordable, and reliable blood testing services at your doorstep across Mumbai. We offer comprehensive diagnostic solutions with certified professionals, trusted lab partnerships, and discounted rates.

## Features

- **Modern Design**: Professional, responsive design optimized for all devices
- **WhatsApp Integration**: Easy booking through WhatsApp for customer convenience
- **Comprehensive Services**: Complete range of blood tests from basic health checkups to specialized diagnostics
- **Service Areas**: Coverage across all Mumbai areas with detailed location information
- **Customer Testimonials**: Real customer feedback and ratings
- **Contact Forms**: Multiple ways for customers to get in touch
- **SEO Optimized**: Proper meta tags and semantic HTML for better search visibility

## Technology Stack

- **Framework**: Next.js 15.3.3 with App Router
- **Language**: JavaScript/JSX
- **Styling**: Tailwind CSS
- **Icons**: Heroicons & Lucide React
- **Fonts**: Inter (Google Fonts)

## Pages

- **Home**: Hero section, services overview, testimonials, and call-to-action
- **Services**: Detailed service catalog with pricing and WhatsApp booking
- **About**: Company story, team, mission, and values
- **Contact**: Contact forms, service hours, and FAQ section

## Getting Started

1. **Install Dependencies**:
```bash
npm install
```

2. **Run Development Server**:
```bash
npm run dev
```

3. **Open in Browser**:
Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── components/            # Reusable components
│   ├── CTA.js            # Call-to-action section
│   ├── Footer.js         # Site footer
│   ├── Hero.js           # Hero section
│   ├── Navigation.js     # Main navigation
│   ├── Services.js       # Services showcase
│   ├── Testimonials.js   # Customer testimonials
│   └── WhyChooseUs.js    # Features section
```

## Customization

### WhatsApp Integration
Update the WhatsApp number in all components by replacing `+919876543210` with your actual WhatsApp business number.

### Contact Information
Update contact details in:
- `src/components/Footer.js`
- `src/app/contact/page.js`
- `src/components/Navigation.js`

### Service Pricing
Update pricing information in:
- `src/app/services/page.js`

### Brand Colors
The website uses a blue color scheme matching the Menrva logo. Main colors:
- Primary Blue: `#3B82F6`
- Dark Blue: `#2563EB`
- Background: Various shades of blue and gray

## SEO Features

- Proper meta titles and descriptions for all pages
- Semantic HTML structure
- Optimized for local search (Mumbai-focused)
- Fast loading with Next.js optimizations
- Mobile-first responsive design

## Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
The website can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Future Enhancements

- Online booking system integration
- Payment gateway integration
- Customer dashboard for test results
- Admin panel for managing services and bookings
- Blog section for health-related content
- Multi-language support (Hindi, Marathi)

## Support

For technical support or customization requests, please contact the development team.

## License

This project is proprietary software developed for Menrva Healthcare.
