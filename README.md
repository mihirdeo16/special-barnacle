# Email Signature Template

A simple, clean email signature template that loads information from a configuration file.

## Files

- `signature.html` - The main template file with preview
- `config.json` - Configuration file with your personal information
- `load-config.js` - JavaScript that loads the configuration
- `images/` - Folder for your profile photo

## How to Use

### 1. Customize Your Information

Edit `config.json` with your actual information:
```json
{
  "name": "Your Actual Name",
  "phone": "Your Phone Number",
  "title": "Your Job Title",
  "linkedin": "https://linkedin.com/in/yourprofile",
}
```

### 2. Add Your Photo

Place your profile picture as `image.png` in the `images/` folder.

### 3. Preview and Copy

1. Run `python3 -m http.server 5500`
2. Open `http://localhost:5500/signature.html`
3. Your information will automatically load from `config.json`
4. Copy the HTML code from the textarea
5. Paste it into your email client's signature settings

## Features

- **Clean Design**: Centered layout with blue accent border
- **Profile Photo**: Circular image at the top
- **Contact Section**: Blue background with phone, LinkedIn, and GitHub
- **Auto-loading**: Information automatically loads from config file
- **Ready HTML**: Generates email-ready HTML code

## Layout

1. **Photo** - Circular profile picture at the top
2. **Name & Title** - Your name and job title below the photo
3. **Contact Me Section** - Blue box with phone, LinkedIn, and GitHub links
