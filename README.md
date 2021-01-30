# @CodeDreams/next-template

## Main Depencies

- [React](https://reactjs.org/)
- [Mobx](https://mobx.js.org/)
- [Styled Components](https://www.styled-components.com/)
- [Material UI](https://material-ui.com/)

Welcome Dreaaaaamer!! We created this boilerplate so that we can make your life easier when building a dream

## Whats the idea of this repository

This template was created with care to standardize our applications

## Who has to make your life easier?

We have the project's folder architecture and code, after all, only coding is much fun

We also have automations

We also have automations, to work we need to install

### 1. Install hygen:

```bash
For macOS and Homebrew

$ brew tap jondot/tap
$ brew install hygen

```

```bash
Globally with npm (or yarn):

$ npm i -g hygen //recommended
$ yarn global add hygen

```

### 2. Now, let's start making your day happier:

To create a new page

```bash
$ yarn generate:page

```

To create a new mobx-page

```bash
$ yarn generate:mobx-page

```

To create a new compenent

```bash
$ yarn generate:component

```

Really, that's it.

### 3. Not over yet!

We also sent as a gift 1 component, the typography that is used for texts and title

```ts
// Props
declare type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline';

declare type TypographyType = {
  variant?: TypographyVariants;
};
```

Example:

```jsx
<Typograph variant="h1"></Typograph>
```

## Architecture

### Stores

The `stores` are responsible for storing the application status. Any type of information that can be used in more than one container or component, must be stored in a store. They are also responsible for making external requests through `services`, which handle external requests and error handling. No store should handle errors; this is the responsibility of the service and the container that started the request

[Mobx] (https://mobx.js.org/) is being used to deal with stores. Just use the `inject` and` observer` decorators where you want to inject a store and observe its changes (usually in `containers`).

### Pages

These are the screens that have their own routes. They are always divided between `container` and` component`. The container (index.js) connects to the `stores`, if necessary and is responsible for all the logic of the Page and for passing the information from the store to the interface. The `component` (page name) is responsible for the visual interface.

### Components

All visual components are declared in this folder. Buttons, checkbox, inputs. Components responsible for "behavior" are also declared, even without an interface.

### Assets

It has theme styles and the `next` global styles

# Commits

### Commits should follow the following pattern:

`<type>(scope): <description>`

### The types can be as follows:

```bash
feat: New feature
fix: Bug fix
chore: A change that is neither a new feature nor a bug fix
cr: fix changes request from PullRequest
```

### Now, the following syntax can be used to commit:

```bash
git add .
git checkout -b <type>/<Change>
git commit -m <type>/<Change>
git push -u origin <type>/<Change>
open a Pull Request
```

### Finally let's fly in this dream
