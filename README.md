# Photo Grid

Self host-able photography portfolio coupled with [Sanity](https://www.sanity.io) headless CMS for asset management.

## Local Development

1. Run `npm install` in the root directory.
2. Run `npm start`.
3. Open [localhost:3333](http://localhost:3333) and [localhost:3333/admin/](http://localhost:3333/admin/) in your browser.

> **Note**
> Please refer to the [`.nvmrc`](https://github.com/kwickramasekara/photo-grid/blob/main/.nvmrc) file for the recommended Node version prior to installation. If you do not have Node installed, please refer to the [official documentation](https://nodejs.org/).

> **Note**
> When developing locally, Sanity API responses are cached for [1 day](https://github.com/kwickramasekara/photo-grid/blob/main/src/_data/sanity.js#L23) by default. To purge the cache, remove `.cache/data-sanity` directory or change cache duration.

## Configuration

[`photo-grid.json`](https://github.com/kwickramasekara/photo-grid/blob/main/photo-grid.json) contains customizable properties for both the UI and Admin interfaces. See below for the description of each property.

| Key                                | Description                                                                                      |
| ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| `admin.sanity.dataset` :warning:   | Sanity dataset name (default: production)                                                        |
| `admin.sanity.projectId` :warning: | Sanity project ID. Create yours at [sanity.io](https://www.sanity.io/get-started/create-project) |
| `admin.title`                      | Title of the admin interface                                                                     |
| `author.instagram`                 | Instagram handle of the author                                                                   |
| `author.name`                      | Name of the author                                                                               |
| `author.url`                       | Bio link for the author                                                                          |
| `basePath`                         | Relative path where Photo Grid is located. Useful for subdirectories.                            |
| `colorPreference`                  | Background color preference - `auto`, `dark` or `light`                                          |
| `description`                      | Description for the Photo Grid site to help with SEO                                             |
| `displayOrder`                     | Ordering for the grid - `asc` or `desc`                                                          |
| `gridGap`                          | Gap between photos in rems (Tailwind uses rem for spacing)                                       |
| `language`                         | HTML language specification                                                                      |
| `photoPath`                        | Path to store/serve individual photos; leave empty to store on root.                             |
| `photoWidth`                       | Photo preview width in pixels.                                                                   |
| `port`                             | Port to run the local dev server                                                                 |
| `showDetails`                      | Show modal with photo tags, exif data and etc. - `true` or `false`                               |
| `showDetailsExif`                  | Camera and exposure info shown within the modal - `true` or `false`                              |
| `thumbnailWidth`                   | Grid thumbnail width in pixels                                                                   |
| `title`                            | Photo Grid title                                                                                 |

> **Warning**
> It is highly [recommended](https://www.sanity.io/docs/environment-variables) to use environment variables to store these values to avoid checking them into version control. However do note that they get bundled with client-side Javascript during the build process. To do so, create a `.env` file in the root directory with `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET` variables. Remember to set these variables in your CI/CD environment as well.

> **Note**
> Make sure to restart the apps after making config changes.
