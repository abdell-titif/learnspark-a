# LearnSpark AI - Personalized Educational Ebooks

This is a landing page for LearnSpark AI, a concept platform for creating AI-powered personalized educational ebooks.

## GitHub Pages Deployment Instructions

### Option 1: Direct GitHub Pages Deployment

1. Create a new GitHub repository
2. Upload the `index.html` file to the repository
3. Go to Settings > Pages
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be published at `https://yourusername.github.io/repository-name/`

### Option 2: Using a Custom Domain

1. Follow steps 1-3 above
2. Under "Custom domain", enter your domain name
3. Click "Save"
4. Configure your DNS provider with the appropriate records:
   - For an apex domain (example.com): Add 4 A records pointing to GitHub's IP addresses
   - For a subdomain (www.example.com): Add a CNAME record pointing to `yourusername.github.io`

## Features

- **Responsive Design**: Works on all devices and screen sizes
- **Modern UI**: Utilizes CSS variables and modern layouts
- **Interactive Elements**: Includes hover effects and animations
- **Self-Contained**: Single HTML file with all CSS included

## Customization

You can easily customize this landing page:

- Change colors by modifying the CSS variables in the `:root` section
- Update text content as needed
- Add or remove sections based on your requirements
- Replace emojis in feature icons with custom SVGs or images

## Credits

- Fonts: System font stack
- Icons: Emoji characters
- Layout: Custom CSS Grid and Flexbox
