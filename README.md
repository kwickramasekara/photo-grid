# Photo Grid

Self host-able photography portfolio coupled with [Sanity](https://www.sanity.io) headless CMS for asset management.

---

## Getting Started

This is a monorepo containing the Photo grid app and its admin interface (see `apps` directory). It uses NPM [workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces?v=true) to manage monorepo related tasks.

> Please refer to the `.nvmrc` file for the required Node version prior to installation.

1. Run `npm install` in the root directory.
2. Set the following env variables in `apps/admin/.env.local`:
   - `SANITY_STUDIO_PROJECT_ID`
   - `SANITY_STUDIO_DATASET`
3. Run `npm start` to start both the UI and Admin apps.

---

## Photo Grid config

`photo-grid.json` contains customizable properties for both the UI and Admin interfaces. See below for the descriptions of each property.

| Key                 | Description                                          |
| ------------------- | ---------------------------------------------------- |
| admin.basepath      | path where the admin interface will be accessed      |
| admin.title         | title of the admin interface                         |
| ui.author.instagram | instagram handle of the author                       |
| ui.author.name      | name of the author                                   |
| ui.author.url       | bio link for author                                  |
| ui.description      | description for the Photo Grid site to help with SEO |
| ui.language         | HTML language specification                          |
| ui.title            | Photo Grid title                                     |
| ui.url              | URL where your Photo Grid can be accessed publicly   |

> Make sure to restart the applications after making changes.
