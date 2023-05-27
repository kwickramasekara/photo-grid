# Photo Grid

Self host-able photography portfolio coupled with [Sanity](https://www.sanity.io) headless CMS for asset management.

## Local Development

> **Note**
> Please refer to the [`.nvmrc`](https://github.com/kwickramasekara/photo-grid/blob/main/.nvmrc) file for the recommended Node version prior to installation. If you do not have Node installed, please refer to the [official documentation](https://nodejs.org/).

1. Create a new project in [Sanity](https://www.sanity.io/get-started/create-project).
2. Set the following env variables in `apps/admin/.env.local`:
   - `SANITY_STUDIO_PROJECT_ID` (8 character project ID)
   - `SANITY_STUDIO_DATASET` (default: `production`)
3. Run `npm install` in the root directory.
4. Run `npm start` to start both the UI and Admin apps.

## Configurations

[`photo-grid.json`](https://github.com/kwickramasekara/photo-grid/blob/main/photo-grid.json) contains customizable properties for both the UI and Admin interfaces. See below for the description of each property.

| Key                   | Description                                          |
| --------------------- | ---------------------------------------------------- |
| `admin.basepath`      | path where the admin interface will be accessed      |
| `admin.title`         | title of the admin interface                         |
| `ui.author.instagram` | instagram handle of the author                       |
| `ui.author.name`      | name of the author                                   |
| `ui.author.url`       | bio link for author                                  |
| `ui.description`      | description for the Photo Grid site to help with SEO |
| `ui.language`         | HTML language specification                          |
| `ui.title`            | Photo Grid title                                     |
| `ui.url`              | URL where your Photo Grid can be accessed publicly   |

> **Note**
> Make sure to restart the apps after making changes.

## Contributing

Contributions are welcome! Please see below for more information.

### NPM

This is a monorepo consisting of two apps and uses NPM [workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces?v=true). Each app has a `package.json` with its own dependencies and the lock file is maintained in the root. As such, when modifying packages on either of the packages, use `--workspace` or `-w` flag to install packages in the correct location.

i.e: `npm install autoprefixer -w apps/ui`
