# OwnYourOwnStorage - Self-Service Storage Website

A modern React-based website for OwnYourOwnStorage, featuring self-service storage container booking for University of Illinois students, businesses, and families in Urbana, IL.

## 🚀 Features

- **Self-Service Booking**: 1-minute online booking form with instant confirmation
- **JotForm Integration**: Professional appointment scheduling with time selection
- **Google Ads Ready**: Conversion tracking configured for `/booking-confirmed`
- **Mobile Responsive**: Optimized for desktop and mobile devices
- **Modern UI**: Built with React, Tailwind CSS, and shadcn/ui components
- **24/7 Access**: Information and booking available around the clock

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0 + Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.7 + shadcn/ui components
- **Routing**: React Router DOM 7.6.1
- **Forms**: JotForm integration (Form ID: 251895754464067)
- **Animations**: Framer Motion 12.15.0
- **Icons**: Lucide React 0.510.0

## 📋 Prerequisites

- Node.js 18+ 
- npm or pnpm package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ownyourownstorage
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3001
   ```

## 🏗️ Build for Production

```bash
npm run build
# or
pnpm build
```

The built files will be in the `dist/` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   └── ...
├── pages/              # Page components
│   ├── HomePage.jsx    # Landing page
│   ├── BookTourPage.jsx # Booking form page
│   ├── BookingConfirmedPage.jsx # Conversion tracking page
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## 🎯 Key Pages

- **Homepage** (`/`): Landing page with hero section, features, pricing
- **Book Tour** (`/book-tour`): JotForm booking with appointment scheduling
- **Booking Confirmed** (`/booking-confirmed`): Conversion tracking page for Google Ads
- **Pricing** (`/pricing`): Storage container pricing information

## 📝 JotForm Configuration

- **Form ID**: 251895754464067
- **Features**: Name, Email, Phone, Appointment scheduling with time slots
- **Time Slots**: 2:00 PM, 3:00 PM, 4:00 PM, 7:00 PM, 8:00 PM, 9:00 PM
- **Iframe Height**: 2000px (optimized for full time selection visibility)
- **Manual Confirmation**: Backup button for booking completion

## 🔄 Booking Flow

1. **Customer visits** `/book-tour`
2. **Fills out form** with name, email, phone, appointment time
3. **Submits form** or uses manual confirmation button
4. **Redirected to** `/booking-confirmed` for conversion tracking
5. **Receives email** confirmation and text with container details

## 📊 Google Ads Integration

- **Conversion URL**: `/booking-confirmed`
- **Tracking**: Ready for Google Ads conversion tracking setup
- **Manual Backup**: Alternative confirmation method available

## 🚀 Deployment Options

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Set source to GitHub Actions
3. Push to main branch to trigger deployment

### Netlify
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import repository to Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

## 🔧 Environment Variables

No environment variables required for basic functionality. All configurations are in the source code.

## 📱 Contact Information

- **Address**: 1502 Airport Road, Urbana IL 61802
- **Email**: Drewcrichardson1999@gmail.com
- **Business**: Storage container rental and self-service tours

## 🛡️ Security & Privacy

- Privacy Policy, Terms of Service, and Cookie Policy pages included
- GDPR-compliant data handling
- Secure form submission through JotForm

## 📈 Performance

- Optimized React build with Vite
- Lazy loading for images
- Responsive design for all devices
- Fast loading times with modern bundling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for OwnYourOwnStorage.

## 🆘 Support

For technical issues or questions about the website, please contact the development team or create an issue in this repository.

---

**Built with ❤️ for OwnYourOwnStorage - Making storage simple and accessible for the University of Illinois community.**

