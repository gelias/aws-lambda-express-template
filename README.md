# umovme-ses-bounce

## Installing

Install project dependencies

```bash
npm install
```

## Running

This project uses nodemon for hot reload development

```bash
npm i -g nodemon
```

To run a local server:

```bash
npm run dev
```

## Deploying

\*\*This project uses aws cli (python module), so first you have to configure your local aws cli with proper credentials

To build (zip generation in /dist):

```bash
npm run build
```

To deploy it on AWS lambda (generated zip deployment):

```bash
npm run deploy
```

To build and deploy (all-in-one):

```bash
npm run build-deploy
```