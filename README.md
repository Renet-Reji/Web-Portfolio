# Renet Mammen Reji Portfolio

A responsive, single-page portfolio for Renet Mammen Reji, a Computer Science undergraduate focused on AI/ML, computer vision, and full-stack development.

## Technologies

- Semantic HTML5
- CSS3 with responsive layout, generated visuals, glass/blur effects, and reduced-motion support
- Vanilla JavaScript for navigation, active section state, scroll reveals, mobile menu, and back-to-top behavior
- Google Fonts: Space Grotesk and DM Sans

## Run locally

No build step is required. Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Folder structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   └── profile.jpg       # Add the real profile image here
│   ├── icons/
│   └── resume/
│       └── resume.pdf        # Add the real resume here when available
└── README.md
```

## Updating content

- Personal details, section copy, project descriptions, skills, education, certifications, and contact links are in `index.html`.
- Add a project by copying a `.project-card` article in the Projects section and updating its content and visual class.
- Add a profile photo at `assets/images/profile.jpg`. The current layout automatically shows a tasteful RR placeholder when the file is missing.
- Add the actual resume as `assets/resume/resume.pdf`, then add or update a `Download Resume` link in the contact actions. No PDF is included because no source resume file was supplied.
- GitHub and LinkedIn URLs appear in the hero, contact area, and footer. Update each matching link together if those profiles change.
- The LeetCode value is stored as visible text in the highlights and Problem Solving sections; update both `100+` values if the verified count changes.

## Deployment

This is a static website, so no build command is needed.

### GitHub Pages

1. Create a GitHub repository and upload the contents of this folder to its root.
2. Open the repository's **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select the default branch and the `/ (root)` folder, then save.
4. GitHub will provide the published site URL after the workflow completes.

### Netlify

Drag the project folder into Netlify's deploy area, or connect the GitHub repository. Use the repository root as the publish directory and leave the build command empty.

### Other static hosts

Vercel static hosting and Cloudflare Pages can use the same settings: repository root as the publish directory, no build command, and `index.html` as the entry point.

## Honest-content note

Project repository and demo URLs were not supplied, so project cards use editable `Repository placeholder` links that point to the contact section rather than inventing destinations. Internship descriptions and research notes intentionally only use the information provided.
