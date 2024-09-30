## Running locally or in codespaces

```sh
git clone git@github.com:PauseAI/pauseai-website.git && cd pauseai-website && cp template.env .env # this line is for only for local PC work, possibly offline then

# Instead of pnpm you could use npm or yarn
pnpm install
pnpm run dev
# Open http://localhost:37572
```

## Deployment

We strive to make it easy to deploy easily to your GH pages to see and discuss. See [the guide](https://chatgpt.com/share/66fa9278-a7c4-8008-bf9b-8564408378ef)...

```sh
pnpm run build
```

To get rocking on your GH pages with `gh` do:

```#!/bin/bash
# Variables
REPO_URL="https://github.com/PauseAI/pauseai-website"
REPO_NAME="pauseai-website"
BRANCH="main"
USERNAME=$(gh auth status -t | grep -o 'Logged in to .\+ as \(\S\+\)' | awk '{print $6}')
FORKED_REPO_NAME="$USERNAME/$REPO_NAME"

# Enable GitHub Pages to serve from the main branch
gh api -X POST "repos/$FORKED_REPO_NAME/pages" \
  --field "source[branch]=$BRANCH" \
  --field "source[path]=/build/"
```

The OG repository gets continuously deployed to Netlify with the deployment status [here](https://app.netlify.com/sites/pauseai/deploys).
