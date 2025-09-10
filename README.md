# Medical Resume Builder

A professional, modern resume builder application built with React, TypeScript, and Tailwind CSS. Create, customize, and optimize your resume with AI-powered suggestions.

## Features

- **Live Preview** - Edit on the left, see changes instantly on the right
- **AI-Powered Optimization** - Enter a job description to get AI-optimized resume suggestions
- **Multiple Sections:**
  - Personal Information
  - Professional Summary
  - Work Experience
  - Publications
  - Projects (optional)
  - Leadership & Volunteering (optional)
  - Skills
  - Education

- **Drag & Drop** - Reorder sections and items easily
- **Print Support** - Professional print-ready resumes
- **Persistent Storage** - Auto-save your progress
- **Responsive Design** - Works on all devices

## Tech Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Drag & Drop:** @dnd-kit
- **AI Integration:** OpenAI API for resume optimization

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/support1122/Medical-Resume-Temporary.git
cd Medical-Resume-Temporary
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and add your OpenAI API key
# Get your API key from: https://platform.openai.com/api-keys
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to the local development server URL shown in the terminal

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. **Fill in your information** - Start with personal details and work your way through each section
2. **Toggle sections** - Enable/disable Projects, Leadership, and Publications sections as needed
3. **AI Optimization** - Enter a job description to get tailored suggestions
4. **Save your progress** - Your data is automatically saved to localStorage
5. **Print or export** - Use the print function to save as PDF

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help, please open an issue on GitHub.
