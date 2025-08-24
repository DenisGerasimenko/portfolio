# Images Directory

This directory should contain your project images and skill icons.

## Required Images:

### For Main Section (Main.module.scss):
- `your-photo.jpg` - Your personal photo for the hero section

### For Projects Section (Projects.js):
- `social-network2.jpg` - Screenshot of your social network project
- `cards3.png` - Screenshot of your cards project  
- `todo-list.png` - Screenshot of your todo list project

### For Skills Section (Skills.js):
- `js-file.svg` - JavaScript skill icon
- `react.svg` - React skill icon
- `html.svg` - HTML5 skill icon

### For Footer Section (Footer.js):
- `linkedin.svg` - LinkedIn social media icon

## Image Specifications:
- **Personal Photo**: Recommended size 300x400px, portrait orientation
- **Project Images**: Recommended size 400x250px, landscape orientation
- **Skill Icons**: SVG format preferred, 64x64px or vector
- **Social Media Icons**: SVG format preferred, 24x24px or vector
- **Formats**: JPG, PNG, SVG, or WebP
- **Quality**: Optimize for web (under 200KB each)

## How to Add Images:
1. Place your images in this directory
2. Update the import statements in the respective files:
   - For main photo: Uncomment and update `Main.module.scss` line ~84
   - For project images: Uncomment and update `Projects.js` lines 5-7
   - For skill icons: Uncomment and update `Skills.js` lines 5-7
   - For social icons: Uncomment and update `Footer.js` line 5

## Current Status:
- Using placeholder images from placeholder.com for projects
- Using CDN icons from devicons for skills and social media
- Replace with actual assets for production