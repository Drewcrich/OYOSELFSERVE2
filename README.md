# OwnYourOwnStorage Website - Updated July 16, 2025

## Recent Updates
- **JotForm Mobile Fix**: Resolved mobile responsiveness issue where submit button was not visible when selecting appointment times
- **Enhanced Mobile Experience**: Improved iframe height handling for better mobile user experience
- **FCRA Compliance**: Full legal compliance with credit check policies and consumer protection requirements

## Project Overview
Professional storage container rental website for University of Illinois students and Urbana community. Features self-service booking, transparent pricing with credit check policies, and mobile-optimized design.

## Key Features
- **Self-Service Booking**: JotForm integration with mobile-responsive design
- **Credit Check Policy**: Clear differentiation between prepaid (no credit check) and monthly (credit check required) options
- **FCRA Compliance**: Full legal compliance with consumer protection requirements
- **Mobile-First Design**: Optimized for all devices with touch-friendly interactions
- **Professional Styling**: Green for positive actions, blue for informational content

## Setup Instructions

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation
1. Extract the zip file to your desired directory
2. Navigate to the project directory:
   ```bash
   cd ownyourownstorage_update_20250716
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the development server:
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

### Build for Production
Create a production build:
```bash
npm run build
```
The built files will be in the `dist` directory.

## Deployment Options

### Option 1: Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects using the included `_redirects` file

### Option 2: Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

### Option 3: GitHub Pages
1. Build the project: `npm run build`
2. Upload contents of `dist` folder to your GitHub Pages repository
3. Ensure proper routing configuration

## File Structure
```
ownyourownstorage_update_20250716/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   └── CustomChatbot.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutUsPage.jsx
│   │   ├── BookTourPage.jsx (Updated with mobile fix)
│   │   ├── PricingPage.jsx
│   │   ├── PrivacyPolicyPage.jsx
│   │   ├── TermsOfServicePage.jsx
│   │   └── GoogleAdsLandingPage.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── _redirects
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Legal Compliance Features
- **FCRA Compliance**: Privacy Policy includes required consumer protection disclosures
- **Credit Check Policy**: Clear notices on pricing and throughout the site
- **Terms of Service**: Updated with credit check requirements and consumer rights
- **Updated Dates**: All legal pages reflect July 14, 2025 updates

## Mobile Optimization
- **Responsive Design**: Mobile-first approach with touch-optimized interactions
- **JotForm Mobile Fix**: Resolved iframe height issues for appointment booking
- **Fast Loading**: Optimized code and assets for quick mobile loading
- **Accessibility**: High contrast colors and readable fonts

## Color Scheme
- **Green**: Positive actions (no credit check, savings, benefits)
- **Blue**: Informational content (credit check required, standard processes)
- **Yellow**: Attention items (business hours, important notices)

## Support
For technical support or questions about deployment, contact the development team.

## Version History
- **July 16, 2025**: JotForm mobile responsiveness fix
- **July 14, 2025**: FCRA compliance updates and legal page revisions
- **Initial Release**: Complete website with self-service booking system

