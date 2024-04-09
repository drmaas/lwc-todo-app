# LWC TODO App

The **LWC TS Boilerplate** example contains the minimum code needed to get a simple TODO Single Page Application (SPA) on LWR running in Typescript.

## Project Setup

The directory structure looks like this:

```fs
src/
  ├── assets/           // static assets
  │   └── recipes-logo.png
  |   └── favicon.ico
  └── modules/          // lwc modules
      └── todo/
          └── app/
              ├── app.css
              ├── app.html
              └── app.ts
          └── item/
              ├── item.css
              ├── item.html
              └── item.ts
          └── list/
              ├── list.css
              ├── list.html
              └── list.ts                            
lwr.config.json         // lwr configuration
package.json            // npm packaging configuration
```

## Configuration

The LWR server is configured in `lwr.config.json`, at the root of the project. The **LWC TS Boilerplate** example has one LWC module and one server-side route.

## Running the Project in dev Mode

```bash
yarn install
yarn dev # dev:compat for AMD format
```

Open the site at [http://localhost:3000](http://localhost:3000)

## Statically Generate and Preview the Site

```bash
yarn build # dev:prod-compat for AMD format
yarn start
```

Open the site at [http://localhost:3000](http://localhost:3000)

## References

<https://developer.salesforce.com/docs/platform/lwr/guide/lwr-get-started.html>
<https://lwc.dev/>
<https://recipes.lwc.dev>