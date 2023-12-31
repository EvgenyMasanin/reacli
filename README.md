# reacling

## Description

It is a cli utility that generates various parts of your React project such as component folders, function folders, hooks, etc. Also it can be used fo generate Feature Sliced Design structure.

## Usage

```bash
# Command example
$ yarn reacling c 'component name'

# Options:
 --help  Show available commands
```

## Commands for common project

- Generate a component: `$ yarn reacling c 'component name' `
- Generate a page: `$ yarn reacling p 'page name' `
- Generate a hook: `$ yarn reacling h 'hook name' `
- Generate a feature: `$ yarn reacling f 'feature name' `
- Generate a hook for feature: `$ yarn reacling fh 'feature name' 'hook name' `
- Generate a component for feature: `$ yarn reacling fc 'feature name' 'component name' `

## Commands for FSD project

- Generate FSD structure: `$ yarn reacling init`
- Generate a page: `$ yarn reacling p 'page name'`
- Generate a widget: `$ yarn reacling w 'widget name'`
- Generate a entity: `$ yarn reacling e 'entity name'`
- Generate a feature: `$ yarn reacling f 'feature name'`
- Generate a component for sheared: `$ yarn reacling su 'component name'`
- Generate a component for entity: `$ yarn reacling eu 'entity name' 'component name'`
- Generate a component for feature: `$ yarn reacling fu 'feature name' 'component name'`
- Get help: `$ yarn reacling --help`

## Feature-Sliced Design

For using reacling to generate fsd structure create reacling.json file in root directory of your project.

##### This is default settings for FSD structure:

```json{
    "methodology": "fsd",
    "fsdStructure": {
      "app": { "withProviders": true },
      "pages": {
        "withLib": true,
        "withUi": true
      },
      "widgets": {
        "withLib": true,
        "withUi": true
      },
      "features": {
        "withApi": true,
        "withLib": true,
        "withModel": true,
        "withUi": true
      },
      "entities": {
        "withApi": true,
        "withLib": true,
        "withModel": true,
        "withUi": true
      }
    }
}
```

##### You can provide your oun settings using this interface:

```typescript
interface SliceStructure {
  withApi?: boolean
  withAssets?: boolean
  withConfig?: boolean
  withLib?: boolean
  withTypes?: boolean
  withUi?: boolean
  withModel?: boolean
}

type Methodology = 'common' | 'fsd'

interface ReaclingConfig {
  methodology?: Methodology
  fsdStructure: {
    app?: {
      withProviders?: boolean
    }
    entities?: SliceStructure
    features?: SliceStructure
    widgets?: SliceStructure
    pages?: SliceStructure
  }
}
```
##### For example:
The command `$ yarn reacling init` provide us next folders structure:
![alt text](./assets/structure.png 'Title')
