# Introduction

Built specifically for use with [React](https://react.dev) and [Tailwind CSS](https://tailwindcss.com/), tw-rus-ui offers a range of accessible, highly customizable components that can be easily integrated into any react project. tw-rus-ui comes with a set of default styles. Furthermore, each component can be parameterized using a set of props that can be used to change the default styles of the component.

# Installation

tw-rus-ui is available as an NPM package and can be installed using the following command:

```bash
npm install tw-rus-ui
```

or

```bash
yarn add tw-rus-ui
```

# Configuration

tw-rus-ui is designed by rewindui to be used with React and Tailwind CSS. To use tw-rus-ui, you must first install ReactJS and [Tailwind CSS](https://tailwindcss.com/docs/installation) in your project. Furthermore, you must also install the following NPM packages:

```bash
npm install tailwind-scrollbar @tailwindcss/forms @tailwindcss/typography
```

or

```bash
yarn add tailwind-scrollbar @tailwindcss/forms @tailwindcss/typography
```

After having installed Tailwind CSS, you must configure it to work with tw-rus-ui. To do this, you must first create a `tailwind.config.js` file in the root directory of your project. Then, add the following code to that config file:

> It is highly recommended to add only the needed style files to avoid having a bloated css file

```js
module.exports = {
  content: [
    './src/**/*.{html,jsx,tsx}',
    // you can either add all styles
    './node_modules/tw-rus-ui/dist/theme/styles/*.js',
    // OR you can add only the styles you need
    './node_modules/tw-rus-ui/dist/theme/styles/Button.styles.js',
    './node_modules/tw-rus-ui/dist/theme/styles/Text.styles.js',
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
  ],
};
```

# Usage

To start using tw-rus-ui components just add the following import statement to the top of your React component:

```tsx
import { Button } from 'tw-rus-ui';
```

Then, you can use the component in your JSX code:

```tsx
<Button>Click Me</Button>
```

# Properties

Each component has a set of default styles that can be parameterized using the corresponding props. For example, the `Button` component has a default blue color and a medium size. These values can be changed by setting the `color` and `size` props to the component:

```tsx
<Button color="black" size="sm">
  Click Me
</Button>
```

Moreover, the style of a component can be customized by passing the normal `className` prop to it. This prop can be used to override the default styles of the component. For example, the following code will change the font weight of the button to semi-bold:

tw-rus-ui is using [tailwind-merge](https://github.com/dcastil/tailwind-merge) to merge the default classes with the classes you provide in the `className` prop and resolve any possible conflicts.

```tsx
<Button color="black" size="sm" className="font-semibold">
  Click Me
</Button>
```

# Variants

Trying to avoid to make the user use multiple properties again and again we have created a `variant` prop. A variant is basically a pre-defined set of properties that can be used to customize a component. For example, the `Button` component has a `success` variant that can be used to create a bootstrap-like success button:

```tsx
<Button variant="success">Click Me</Button>
```

You can read more about the variants of each component in their corresponding documentation page.

# Customization

All tw-rus-ui components are highly customizable. This means that you can easily change the default styles of a component by overriding the corresponding Tailwind CSS classes.
