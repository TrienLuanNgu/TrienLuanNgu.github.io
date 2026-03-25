# Website-Profolio
This is my website profolio, including all my projects and experiences.

## GitHub Pages
This repo publishes an Angular app stored in `website_profolio/`, so GitHub Pages must deploy the built output instead of the repository root.

### Required GitHub setting
In the repository on GitHub, go to `Settings > Pages` and set:

`Source: GitHub Actions`

### Local build command
From `website_profolio/`, run:

```powershell
npm run build:pages
```

The site output will be generated in:

`website_profolio/dist/website_profolio/browser`

The workflow in this repo deploys that folder automatically when you push to `main`.

Because this repository is your user site repo (`TrienLuanNgu.github.io`), the app is built with a root base path:

`/`
