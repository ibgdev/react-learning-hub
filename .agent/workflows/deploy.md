---
description: How to deploy the React Learning Hub
---

To deploy your project, you have several excellent options. Since this is a Vite-based React application, the following platforms are recommended:

### 1. Deploy to Netlify (Recommended)
Netlify is incredibly simple for static sites and handles the SPA routing perfectly with the `netlify.toml` file I've already created for you.

1.  **Push to GitHub**: If you haven't already, push your code to a GitHub repository.
2.  **Connect to Netlify**:
    - Log in to [Netlify](https://app.netlify.com/).
    - Click **"Add new site"** > **"Import an existing project"**.
    - Select **GitHub** and authorize.
    - Choose the `react-learning-hub` repository.
3.  **Build Settings**:
    - **Build command**: `npm run build`
    - **Publish directory**: `dist`
4.  **Deploy**: Click **"Deploy site"**.

### 2. Deploy to Vercel
Vercel is the creator of Next.js but works flawlessly with Vite and standard React.

1.  **Push to GitHub**: Ensure your code is on GitHub.
2.  **Connect to Vercel**:
    - Log in to [Vercel](https://vercel.com/).
    - Click **"Add New"** > **"Project"**.
    - Import the repository.
3.  **Settings**: Vercel will auto-detect Vite. The default settings are correct.
4.  **Deploy**: Click **"Deploy"**.

### 3. Deploy to GitHub Pages (Free)
If you just want it hosted on your GitHub profile:

1.  Install the deployment package:
    ```bash
    npm install --save-dev gh-pages
    ```
2.  Add these scripts to your `package.json`:
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    ```
3.  Run:
    ```bash
    npm run deploy
    ```

---

**Note**: I have already added `netlify.toml` and `vercel.json` to your project to ensure that refreshing the page on routes like `/module/5` works correctly without showing a 404 error.
