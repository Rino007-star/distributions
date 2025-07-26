# RINO - Innovative Software Solutions Landing Page

A modern, responsive landing page for RINO, a software business, built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Features a minimalist aesthetic with glassmorphism effects and floating elements for a premium, modern feel.

## 🚀 Features

- **Modern Design**: Minimalist aesthetic with glassmorphism effects
- **Responsive**: Fully optimized for mobile, tablet, and desktop
- **Animated**: Smooth animations and micro-interactions using Framer Motion
- **Performance**: Built with Next.js 15 for optimal performance
- **TypeScript**: Full type safety throughout the codebase
- **Aceternity UI**: Custom UI components inspired by Aceternity UI library

## 🛠️ Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd rino-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Design Features

### Glassmorphism Components
- **FloatingCard**: Cards with backdrop blur and glass-like transparency
- **GlassButton**: Interactive buttons with glassmorphic styling
- **GlassNavbar**: Floating navigation bar with scroll effects

### Animated Elements
- **HeroSection**: Staggered text animations with gradient effects
- **FeatureCard**: Cards with hover animations and icon transitions
- **AnimatedBackground**: Floating orbs and particle effects

### Responsive Design
- Mobile-first approach
- Optimized layouts for all screen sizes
- Custom responsive navigation with mobile menu

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and custom scrollbar
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   └── ui/
│       ├── animated-background.tsx  # Background animations
│       ├── feature-card.tsx         # Service feature cards
│       ├── floating-card.tsx        # Glassmorphic card wrapper
│       ├── glass-button.tsx         # Interactive buttons
│       ├── glass-navbar.tsx         # Navigation component
│       └── hero-section.tsx         # Hero section with animations
└── lib/
    └── utils.ts             # Utility functions (cn helper)
```

## 🎯 Sections Included

1. **Hero Section**: Main brand introduction with call-to-action buttons
2. **Stats Section**: Key metrics and achievements
3. **Services Section**: 6 core service offerings with icons
4. **About Section**: Company mission and value propositions
5. **Testimonials**: Client feedback with ratings
6. **Contact/CTA**: Final call-to-action section
7. **Footer**: Brand information and copyright

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
```
Then deploy to Vercel via their platform or CLI.

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Heroku
- AWS Amplify
- Railway

## 🎨 Customization

### Colors
The design uses a purple/blue gradient scheme. Update the following in your components:
- `from-blue-500/20 to-purple-600/20` - Primary gradients
- `text-blue-300` - Accent colors
- `border-white/20` - Glass borders

### Content
Update the content in `src/app/page.tsx`:
- `services` array - Service offerings
- `testimonials` array - Client feedback
- `stats` array - Company metrics
- Text content throughout the page

### Branding
- Update the logo text in the navbar
- Modify the hero title and subtitle
- Change metadata in `layout.tsx`

## 📱 Mobile Optimization

- Touch-friendly navigation with mobile menu
- Optimized text sizes and spacing
- Responsive grid layouts
- Hidden scrollbars on mobile for clean look
- Smooth scroll behavior

## ⚡ Performance

- Static generation for optimal loading speed
- Optimized images and fonts
- Minimal JavaScript bundle size
- Efficient animations with Framer Motion

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For support or questions about this landing page template, please open an issue in the repository.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
