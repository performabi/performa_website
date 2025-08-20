\# Performa BI - Freelance Website



This is the repository for the Performa BI freelance services website, built with React and Vite, and designed for deployment on GitHub Pages.



\## Setup and Local Development



1\.  \*\*Clone the repository:\*\*

&nbsp;   ```bash

&nbsp;   git clone \[https://github.com/YOUR\_USERNAME/YOUR\_REPOSITORY\_NAME.git](https://github.com/YOUR\_USERNAME/YOUR\_REPOSITORY\_NAME.git)

&nbsp;   cd YOUR\_REPOSITORY\_NAME

&nbsp;   ```



2\.  \*\*Install dependencies:\*\*

&nbsp;   ```bash

&nbsp;   npm install

&nbsp;   ```



3\.  \*\*Run the development server:\*\*

&nbsp;   ```bash

&nbsp;   npm run dev

&nbsp;   ```

&nbsp;   This will start the website locally, usually at `http://localhost:5173`.



\## Deployment to GitHub Pages



This project uses GitHub Actions for automated deployment.



1\.  \*\*Update `package.json`:\*\*

&nbsp;   \* Open `package.json` and update the `homepage` field to match your GitHub Pages URL:

&nbsp;       ```json

&nbsp;       "homepage": "https://YOUR\_USERNAME.github.io/YOUR\_REPOSITORY\_NAME"

&nbsp;       ```



2\.  \*\*Update `vite.config.js`:\*\*

&nbsp;   \* Open `vite.config.js` and update the `base` property to match your repository name:

&nbsp;       ```javascript

&nbsp;       base: '/YOUR\_REPOSITORY\_NAME/'

&nbsp;       ```



3\.  \*\*Enable GitHub Pages:\*\*

&nbsp;   \* In your GitHub repository, go to `Settings` > `Pages`.

&nbsp;   \* Under "Build and deployment", set the `Source` to \*\*GitHub Actions\*\*.



4\.  \*\*Push to `main`:\*\*

&nbsp;   \* Commit and push your changes to the `main` branch.

&nbsp;   \* The GitHub Action defined in `.github/workflows/deploy.yml` will automatically run, build your site, and deploy it.

&nbsp;   \* Your live site will be available at the URL you specified in the `homepage` field.



