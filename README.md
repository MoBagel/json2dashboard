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

### How to use

#### Import component and pass prop
You only need to pass `data`, `onSuccess` and `onFail`. you can see [data props](#data) to realize how many variables you can use.
```
import Json2dashboard from 'json2dashboard';

function Component(){
return 
  ...
  <Json2dashboard data={data} onSuccess={handleSuccess} onFail={handleFail} />
  ...
  }
```
You can see `src/Editor/Dashboard.tsx` that how to implement json2dashboard.

### onSuccess and onFail
It will pass two parameter that are `response` and `config` for onSuccess and onFail callback function.

- sample code
```
  const handleSuccess = async (
    res: { status: number; blob: () => Blob; json: () => {} },
    config: { url: string; name: string; type: string; },
  ) => {
    if (res.status === 200 && config.type === 'file') {
      const file = await res.blob();
      FileSaver.saveAs(file, `${config?.name}.csv`);
    } else if (errorStatus.includes(getStatusStart)) {
      handleFail(res, config);
    }
  };

  const handleFail = async (
    res: { status: number; json: () => {} },
    config: { url: string; name: any; type: string },
  ) => {
    if(res.status === 500) {
      // do you error handle
    }
  }
```

#### data

There are the props you can use for render Component.

You can also check with sample data (`src/data.js`) to help you figure out how it works.

| Key | Description. | Type |  |
| --- | --- | --- | --- |
| type | Choose the component type. (we use ant design) | string | Required |
| id | Component's key will render as key. | string | Optional |
| props | Current render Component's props. You should follow antd's document which props you can use. | Object | Required |
| children | Component Props. (above all) | Object | Optional |
| content | Use for render string. | function(variable) => string; \|\| string | Optional |
| variable | It uses for passing value to content function. Should use with content: (variable) => variable.key | Object | Optional |
| media | Setting width for each different media. You only can set it on Wrapper Layout. [Data Structure Link](#media)
 | Object {xs: string, sm: string} | Optional |
| apiConfigs | It needs to use with `isDownload: true`. The settings means that click action and api call with setting. [Data Structure Link](#apiconfig) | Object (Api Request option) | Optional |
| isDownload | Can use `isDownload` with Button and Table Component. It will render action with api call. You should also add apiConfigs | Boolean | Optional |

#### media
(Data schema)

It will use `media.xs` or `media.sm` to generate css for each media.

```
      @media (max-width: 576px) {
        width: ${media.xs};
      }
      @media (min-width: 576px) {
        width: ${media.sm};
      }
      @media (min-width: 768px) {
        width: ${media.md};
      }
      @media (min-width: 992px) {
        width: ${media.lg};
      }
      @media (min-width: 1200px) {
        width: ${media.xl};
      }
      @media (min-width: 1600px) {
        width: ${media.xxl};
      }
```

#### apiConfig
There will use as API Request
```
  apiConfigs?: {
    method?: string;
    type: string;
    url: string;
    payload?: {};
    query?: string ('file'),
    dataType?: string;
    headers?: {};
    options?: {};
  };
```
