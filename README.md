# react-autolink-heading

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> A component to add links to headings with ids back to themselves.

Just like [rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings) but for React.

## Install

```bash
npm install react-autolink-heading
```

## Usage

```tsx
import { AutolinkHeading } from 'react-autolink-heading';

<AutolinkHeading>
  <h2>My header title</h2>
</AutolinkHeading>;
```

## API

### myPackage(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### postfix

Type: `string`
Default: `rainbows`

Lorem ipsum.

[build-img]: https://github.com/FranciscoMoretti/react-autolink-heading/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/FranciscoMoretti/react-autolink-heading/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/react-autolink-heading
[downloads-url]: https://www.npmtrends.com/react-autolink-heading
[npm-img]: https://img.shields.io/npm/v/react-autolink-heading
[npm-url]: https://www.npmjs.com/package/react-autolink-heading
[issues-img]: https://img.shields.io/github/issues/FranciscoMoretti/react-autolink-heading
[issues-url]: https://github.com/FranciscoMoretti/react-autolink-heading/issues
[codecov-img]: https://codecov.io/gh/FranciscoMoretti/react-autolink-heading/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/FranciscoMoretti/react-autolink-heading
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-url]: http://commitizen.github.io/cz-cli/
