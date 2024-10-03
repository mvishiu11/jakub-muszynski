# Personal Website

Welcome to the source code for my personal website, built with **Next.js**, **Shadcn**, and **Vercel**. This site is designed to showcase my technical skills, projects, and professional background. It includes dynamic features such as GitHub stats, WakaTime integration, and the potential for future blog entries and project updates. You can visit the live site [here](https://jakub-muszynski-kby3.vercel.app/).

## **Features**
- **Projects Section**: Display of my key projects with detailed descriptions, technologies used, and future support for embedded live demos.
- **GitHub & WakaTime Stats**: Real-time coding activity and contributions from GitHub and WakaTime.
- **Dark/Light Mode Toggle**: Seamless switching between dark and light themes to suit user preferences.
- **Contact Page**: A form to get in touch, with social media links and options to send messages (email integration coming soon).
- **Blog Section** (optional): A future addition for sharing insights, project updates, and technical articles.

## **Technologies Used**
- **Framework**: [Next.js](https://nextjs.org/) for building the frontend and backend logic of the website.
- **UI Components**: [Shadcn](https://shadcn.dev/) for design consistency and reusable components.
- **Hosting**: [Vercel](https://vercel.com/) for seamless deployment with automatic builds and previews.
- **Emails**: [Sendgrid](https://sendgrid.com/en-us) is used for scalable and sender-safe delivery of emails from the contact form.
- **APIs**: GitHub and WakaTime integrations to showcase real-time project and coding stats. Also a custom API endpoint for sending emails via Sendgrid.
- **Styling**: Tailwind CSS for responsive and modern UI/UX design.

## **Project Structure**
- `src/app/`: Main directory containing the pages and APIs, including the home, projects, and contact pages.
- `src/components/`: Reusable React components like navigation bars, footers, and the stats display.
- `public/`: Static assets like images (including the favicon).
- `next.config.mjs`: Configuration file for custom Next.js settings (including external images and SVGs).

## **Setup Instructions**

### **Prerequisites**
- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [npm](https://www.npmjs.com/get-npm)

### **1. Clone the repository**
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/personal-website.git
cd personal-website
```

### **2. Install dependencies**
```bash
npm install
```

### **3. Run the development server**
Start the Next.js development server:

```bash
npm run dev
```

The website will now be running locally at [http://localhost:3000](http://localhost:3000).

### **4. Deploying to Production**
To deploy the site, Vercel is recommended for automatic builds and previews. You can easily deploy with:

```bash
vercel
```

Once deployed, Vercel will provide a live URL to access your personal website.

## **Customizations**
- **Adding New Projects**: Projects are managed in the `src/pages/projects` directory. You can add or update projects by modifying or adding files in this directory.
- **Blog Integration** (Optional): If you choose to add a blog, you can create Markdown or MDX files for posts. Blog posts will be rendered dynamically on the blog page.
- **GitHub & WakaTime Stats**: API keys for GitHub and WakaTime integrations can be configured in the environment variables or directly in the fetch requests within the components.

## **Contributing**
Contributions and suggestions are welcome! Feel free to submit issues or open pull requests.

## **Future Improvements**
- Full email integration for the contact form. (DONE)
- Embed project demos for interactive previews.
- More advanced stats integration (GitHub contributions over time, language usage charts). (DONE)
- Blog section to share technical knowledge and project updates.
