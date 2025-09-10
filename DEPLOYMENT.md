# Deployment Guide

## Quick Deploy Options

### 1. Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository: `support1122/Medical-Resume-Temporary`
5. Add environment variable: `VITE_OPENAI_API_KEY` with your OpenAI API key
6. Click "Deploy"

### 2. Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "New site from Git"
4. Choose your repository: `support1122/Medical-Resume-Temporary`
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Add environment variable: `VITE_OPENAI_API_KEY`
8. Click "Deploy site"

### 3. GitHub Pages
1. Go to your repository settings
2. Scroll to "Pages" section
3. Source: "GitHub Actions"
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
      env:
        VITE_OPENAI_API_KEY: ${{ secrets.VITE_OPENAI_API_KEY }}
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Environment Variables

Create a `.env` file in your project root:

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

## Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features Included

✅ **Publications Section** - Drag & drop functionality  
✅ **Professional Skills Layout** - Grid-based formatting  
✅ **AI Resume Optimization** - OpenAI integration  
✅ **Print Support** - Professional PDF output  
✅ **Responsive Design** - Works on all devices  
✅ **Data Persistence** - Auto-save to localStorage  

## Support

For issues or questions, please open an issue on GitHub.

