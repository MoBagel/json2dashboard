<h1 align="center">
    Json to Dashboard
</h1>

<div align="center">

It's built for using on Mobagel 8ndpoint's project. We wrapped ant design's component or built some component for common scenery case. To make our develop effieciency.

</div>

## Installation

- Install plugin

```
yarn add json2dashboard
// or with npm
npm install json2dashboard
```

## Usage

For example to implement `NotificationBar` component.

```
import Json2dashboard from 'json2dashboard';

...
        <Json2dashboard {...data}/>
...
```

## How to Develop

-

### Start local environment

```
yarn start
```

### Deploy step

We have already integrated `github action`. You just need create version tag on `github`. And it will automatically build and deploy on npm.

You can see `.github/workflow/publish.yml`. It's CI/CD setting.

- if you still need to deploy from your local

```
yarn build

// Update package.json version
npm version [major | minor | patch]
// major 0.0.0 -> 1.0.0
// minor 0.0.0 -> 0.1.0
// patch 0.0.0 -> 0.0.1

npm publish
```
