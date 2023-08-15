# React AutolinkHeading

[![npm package][npm-img]][npm-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]

![react-autolink-heading](react-autolink-heading.png)

`AutolinkHeading` is a React component that enhances your headings with automatic anchor links, making navigation within long documents a breeze.

_Just like [rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings) but for React._

## Features

- Automatically generates anchor links for headings.
- Customizable class names and ARIA labels.
- Works with various levels of headings (h1 - h6).
- Lightweight and easy to integrate.

## Install

Install the package via npm:

```bash
npm install react-autolink-heading
```

or pnpm

```bash
pnpm i react-autolink-heading
```

## Usage

```tsx
import React from 'react';
import { AutolinkHeading } from 'autolink-heading';

function MyComponent() {
  return (
    <div>
      <AutolinkHeading className="my-heading" linkClassName="my-link">
        <h2>My Header Title</h2>
      </AutolinkHeading>
      {/* Add more AutolinkHeading components as needed */}
    </div>
  );
```

## Props

| Prop          | Type      | Description                                                  |
| ------------- | --------- | ------------------------------------------------------------ |
| children      | ReactNode | The heading element(s) to enhance with anchor links.         |
| className     | string    | Additional class name(s) for the heading element.            |
| linkClassName | string    | Additional class name(s) for the anchor link.                |
| ariaLabel     | string    | ARIA label for the anchor link (default: 'Link to section'). |
| headingId     | string    | Manually set the heading ID for the anchor link.             |

## License

This project is licensed under the [MIT License](LICENSE).

---

If you find AutolinkHeading helpful, consider giving it a ⭐️ on [GitHub](https://github.com/FranciscoMoretti/react-autolink-heading)!

[downloads-img]: https://img.shields.io/npm/dt/react-autolink-heading
[downloads-url]: https://www.npmtrends.com/react-autolink-heading
[npm-img]: https://img.shields.io/npm/v/react-autolink-heading
[npm-url]: https://www.npmjs.com/package/react-autolink-heading
[issues-img]: https://img.shields.io/github/issues/FranciscoMoretti/react-autolink-heading
[issues-url]: https://github.com/FranciscoMoretti/react-autolink-heading/issues
