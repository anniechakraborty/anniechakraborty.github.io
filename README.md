# anniechakraborty.github.io

My personal portfolio site, built with React, Vite, TypeScript and Tailwind CSS.
Blog posts are pulled from Medium through a small [Flask backend](https://github.com/anniechakraborty/PersonalWebsiteBackend).

## Development

```sh
npm install
npm run dev      # local dev server with hot reload
npm run build    # type-check and build into build/
npm run preview  # serve the production build locally
```

## Where things live

- `src/data.ts`: all of the site's content (work, education, projects, skills, links). Edit this to update the page.
- `src/components/`: one component per page section, plus the shared `Section` wrapper.
- `src/hooks.ts`: the typing effect, scroll-into-view reveal and nav scroll-spy.
- `src/index.css`: Tailwind import, fonts and the keyframe animations.
