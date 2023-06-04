# Photo Grid

Self host-able photography portfolio coupled with [Sanity](https://www.sanity.io) headless CMS for asset management.

## Local Development

> **Note**
> Please refer to the [`.nvmrc`](https://github.com/kwickramasekara/photo-grid/blob/main/.nvmrc) file for the recommended Node version prior to installation. If you do not have Node installed, please refer to the [official documentation](https://nodejs.org/).

1. Run `npm install` in the root directory.
2. Run `npm start`.
3. Open [localhost:3333](http://localhost:3333) and [localhost:3333/admin/](http://localhost:3333/admin/) in your browser.

## Configuration

[`photo-grid.json`](https://github.com/kwickramasekara/photo-grid/blob/main/photo-grid.json) contains customizable properties for both the UI and Admin interfaces. See below for the description of each property.

| Key                                | Description                                                                                      |
| ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| `admin.sanity.dataset` :warning:   | Sanity dataset name (default: production)                                                        |
| `admin.sanity.projectId` :warning: | Sanity project ID. Create yours at [sanity.io](https://www.sanity.io/get-started/create-project) |
| `admin.title`                      | title of the admin interface                                                                     |
| `author.instagram`                 | instagram handle of the author                                                                   |
| `author.name`                      | name of the author                                                                               |
| `author.url`                       | bio link for author                                                                              |
| `description`                      | description for the Photo Grid site to help with SEO                                             |
| `displayOrder`                     | ordering for the grid - `asc` or `desc`                                                          |
| `gridGap`                          | gap between photos in rems (Tailwind uses rem for spacing)                                       |
| `language`                         | HTML language specification                                                                      |
| `port`                             | Port to run the local dev server                                                                 |
| `themePreference`                  | Background color preference - `dark` or `light`                                                  |
| `thumbnailWidth`                   | Grid thumbnail width in pixels                                                                   |
| `title`                            | Photo Grid title                                                                                 |
| `url`                              | URL where your Photo Grid can be accessed publicly                                               |

> **Warning**
> It is highly [recommended](https://www.sanity.io/docs/environment-variables) to use environment variables to store these values even though they get bundled with the Javascript files during the build process. To do so, create a `.env.local` file in the root directory with `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET` variables. Remember to set these variables in your production environment as well.

> **Note**
> Make sure to restart the apps after making config changes.
