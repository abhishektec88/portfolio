# Developer Portfolio

A modern, responsive developer portfolio built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases skills, projects, and provides a way for potential clients or employers to get in touch.

## Features

- 🚀 **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- 📱 **Fully Responsive**: Optimized for all device sizes
- 🎨 **Beautiful UI**: Clean, modern design with smooth animations
- ⚡ **Fast Performance**: Optimized for speed and SEO
- 📧 **Contact Form**: Functional contact form with validation
- 🎯 **Smooth Scrolling**: Seamless navigation between sections
- 🌙 **Dark Mode Ready**: Prepared for dark mode implementation

## Sections

- **Hero**: Personal introduction with call-to-action buttons
- **About**: Skills showcase with animated progress bars and technology tags
- **Projects**: Featured projects grid with detailed project cards
- **Contact**: Contact form with social media links and contact information

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change name, title, and description
   - Update profile image placeholder

2. **About Section** (`src/components/About.tsx`):
   - Update your story and experience
   - Modify skills array with your skills and proficiency levels
   - Update technologies list

3. **Projects Section** (`src/components/Projects.tsx`):
   - Replace sample projects with your actual projects
   - Update project descriptions, technologies, and links

4. **Contact Section** (`src/components/Contact.tsx`):
   - Update contact information (email, phone, location)
   - Add your social media links
   - Configure contact form backend integration

### Styling

The portfolio uses Tailwind CSS for styling. You can customize:

- Colors in the gradient backgrounds
- Typography and spacing
- Component layouts and animations
- Custom CSS in `src/app/globals.css`

### Adding New Sections

To add new sections:

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Add navigation link in `src/components/Navigation.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: Heroicons (SVG)
- **Package Manager**: pnpm

## Performance Features

- Server-side rendering (SSR)
- Static generation where possible
- Image optimization
- Font optimization
- CSS optimization
- Bundle splitting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions, feel free to reach out!

---

Built with ❤️ using Next.js and TypeScript
