# Issue reproduction example

## What

When using `next@15` with `assetPrefix` and `next/dynamic`, the CSS files are not loaded correctly.

To see the right behavior, comment the `assetPrefix` property in the `main/next.config.mjs` file.


## Why

The CSS files are loaded on the page only with the pathname instead of using the full URL of the asset

https://github.com/vercel/next.js/blob/canary/packages/next/src/build/webpack/config/blocks/css/index.ts#L620

Here is a simple fix:

```diff
- _N_E_STYLE_LOAD(new URL(href).pathname).then(
+ _N_E_STYLE_LOAD(new URL(href).toString()).then(
```

## How to run

1. Start the asset proxy web server (to mimic a CDN):

```sh
cd ./asset-proxy
npm run dev
```


2. Start the main app using the asset proxy:

```sh
cd ./main
npm run dev
```

3. Go to http://localhost:3000/

4. See that CSS are loaded from http://localhost:3000/ instead of http://localhost:4000 while the pathname is ok.