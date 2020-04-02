# alt:V Boilerplate with Typescript + React for linux

![Node.js CI](https://github.com/Stone-Codes/altv-boilerplate-linux/workflows/Node.js%20CI/badge.svg) ![Docker Image CI](https://github.com/Stone-Codes/altv-boilerplate-linux/workflows/Docker%20Image%20CI/badge.svg)

This project is a small boilerplate to start out with using Typescript + React with alt.V

### Key-Features

- Using typescript for the server/client and the react views
- Rollup for bundling
- Automaticly starting the server after rollup bundling has finished => chokidar-cli
- Makefile for common commands
- Simple Dockerfile for this repo

---

## Getting started

### Using the Makefile

To install the dependencies for the views and the resource itself simply use

```bash
make install
```

To build the server / client files once run (You have to start the server manually after the build)

```bash
make build
```

If you want the files to be watched and the server to be started after every bundling run

```bash
make start
```

To get the react views up use

```bash
make views
```

### Manually

1. **Dependencies for the resource**
   Go to the `resources/myresource/` folder and run

```bash
yarn install
```

2. **Dependencies for the views**
   Go to the `resources/myresource/client/src/views/` folder and run

```bash
yarn install
```

3. **Running / building**
   If you just want to build the files once run inside `resources/myresource/`

```bash
yarn build
```

If you want the files to be watched and the server to be started after every bundling run inside `resources/myresource/`

```bash
yarn start
```
