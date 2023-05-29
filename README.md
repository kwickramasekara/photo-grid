# Photo Grid

Self host-able photography portfolio coupled with [Sanity](https://www.sanity.io) headless CMS for asset management.

## Local Development

> **Note**
> Please refer to the [`.nvmrc`](https://github.com/kwickramasekara/photo-grid/blob/main/.nvmrc) file for the recommended Node version prior to installation. If you do not have Node installed, please refer to the [official documentation](https://nodejs.org/).

1. Run `npm install` in the root directory.
2. Run `npm start` to start both the UI and Admin apps.
3. Open [localhost:8080](http://localhost:8080) and [localhost:3333/admin/](http://localhost:3333/admin/) in your browser to access the UI and admin respectively.

## Configuration

[`photo-grid.json`](https://github.com/kwickramasekara/photo-grid/blob/main/photo-grid.json) contains customizable properties for both the UI and Admin interfaces. See below for the description of each property.

| Key                                | Description                                                                                      |
| ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| `admin.basepath`                   | path where the admin interface will be accessed from                                             |
| `admin.sanity.dataset` :warning:   | Sanity dataset name (default: production)                                                        |
| `admin.sanity.projectId` :warning: | Sanity project ID. Create yours at [sanity.io](https://www.sanity.io/get-started/create-project) |
| `admin.title`                      | title of the admin interface                                                                     |
| `ui.author.instagram`              | instagram handle of the author                                                                   |
| `ui.author.name`                   | name of the author                                                                               |
| `ui.author.url`                    | bio link for author                                                                              |
| `ui.description`                   | description for the Photo Grid site to help with SEO                                             |
| `ui.language`                      | HTML language specification                                                                      |
| `ui.title`                         | Photo Grid title                                                                                 |
| `ui.url`                           | URL where your Photo Grid can be accessed publicly                                               |

> **Warning**
> It is highly [recommended](https://www.sanity.io/docs/environment-variables) to use environment variables to store these values even though they get bundled with the Javascript files during the build process. To do so, create a `.env.local` file in the `apps/admin` directory with `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET` variables. Remember to set these variables in your production environment as well.

> **Note**
> Make sure to restart the apps after making config changes.

## Contributing

Contributions are welcome! Please see below for more information.

### NPM

This is a monorepo consisting of two apps and uses NPM [workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces?v=true). Each app has a `package.json` with its own dependencies and the lock file is maintained in the root. As such, when modifying packages on either of the packages, use `--workspace` or `-w` flag to install packages in the correct location.

i.e: `npm install autoprefixer -w apps/ui`
