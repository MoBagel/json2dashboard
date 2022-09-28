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

## How to use

For example to implement `NotificationBar` component.
And the data is json schema. You can see the data schema in the docuement [Data Structure Link](#data).

```
import Json2dashboard from 'json2dashboard';

const data = {
  type: 'Layout',
  props: {},
  children: [{ 
    type: 'div', 
    content: 'hello world'
  }]
}
...
        <Json2dashboard {...data}/>
...
```


## How to Develop

### Start local environment

```
yarn start
```

You could take a look the path `src/Render/utils/compConfig.ts` to add Component.
And if your component need complicate behavior. You can edit `src/Renderer.tsx` to handle it.


### Render Flow 

<iframe style="border:none" width="800" height="450" src="https://whimsical.com/embed/QuE7JXWXmBUYzTFpP93Kaf@VsSo8s35WwCCCaRgJpaE35"></iframe>

#### Import component and pass prop

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

### Props

You only need to pass `data`, `onSuccess` and `onFail`. you can see [data props](#data) to realize how many variables you can use.

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

### data

There are the props you can use for render Component.

You can also check with sample data (`src/data.js`) to help you figure out how it works.

| Key | Description. | Type |  |
| --- | --- | --- | --- |
| type | Choose the component type. (we use ant design) | string | Required |
| id | Component's key will render as key. | string | Optional |
| props | Current render Component's props. You should follow antd's document which props you can use. | Object | Required |
| children | Component Props. (above all) | Object | Optional |
| content | Use for render string. | function(variable) => string; \|\| string | Optional |


## Inside props
| Key | Description. | Type |  |
| --- | --- | --- | --- |
| variable | It uses for passing value to content function. Should use with content: (variable) => variable.key | Object | Optional |
| media | Setting width for each different media. You only can set it on Wrapper Layout. [Data Structure Link](#media)
| apiConfigs | The settings means that click action and api call with setting. [Data Structure Link](#apiconfig) | Object (Api Request option) | Optional |


### media
(Data schema)

It will use `media.xs` or `media.sm` to generate css for each media.

```
media: {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
}

=>
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

### apiConfig
There will use as API Request
```
  apiConfigs: {
    method?: string;
    type: string;
    url: string;
    payload?: {};
    query?: string,
    dataType?: string;
    headers?: {};
    options?: {};
  };
```


### Solved problem
- Media query custom breakpoint
Use Layout to be wrapper and add `media` props to handle width in different device width.

- Table's column content need to dynamic render content
It's a actually challenge. i use `render` function to get variable from table's root. But i should create function as a string to avoid json editor trim it. So i use `eval` to switch `render` as string between function.



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