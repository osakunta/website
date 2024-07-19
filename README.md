# website - The new website for Satakunta Nation

# Running

1. Install [node](https://nodejs.org/en)
2. Rename `.env.local.example` and set the CMS_URL
3. Run `npm install`
4. Run `npm run dev` to start a local development server

# Development workflow

1. Create a new branch, name it so it describes the feature or fix you're implementing.
2. Push the branch to the repo and create a pull request against the main branch.
   - A tool called [husky](https://typicode.github.io/husky/) runs the linter and tests locally for each commit
3. Verify your changes through the "preview", the link will appear as a comment in the PR.
4. If everything is okay, merge the PR. The main branch is automatically deployed to production.

A file `translations.json` is downloaded from the CMS every time you run a command. This allows Typescript to use it's type data for autocompleting and build-time verifying translation keys.

## License

This project contains both code and content. The code of the website is licensed under GPLv3. By content we mean text, image, logos or designs specific to the Satakunta Nation. The content is proprietary. In other words, you can freely use the technical implementation (code, config files) of this website for your purposes, but make your own content.
