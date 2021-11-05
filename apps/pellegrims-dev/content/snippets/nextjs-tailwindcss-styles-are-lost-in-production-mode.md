---
title: 'Next.js tailwindcss styles are lost in production mode'
description: 'When building a NextJs 11 application in production mode, all the tailwindcss styling is lost.'
date: '2021-11-02'
tags: ['next.js', 'tailwindcss']
published: true
---

## Issue

When first building a Next.Js 11 application in production mode, all the styling related to tailwindcss was lost.

## Solution

The purge property in my tailwind.config.js configuration file looked like this:

```javascript
module.exports = {
  purge: [join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}')],
};
```

The official tailwindcss documentation explicitly states the following on the purge array:

> this list should include any files in your project that reference any of your styles by name.

I extracted plenty of components from my pages into the components folder and they should also be added to the purge array like this:

```javascript
module.exports = {
  purge: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
  ],
};
```

## Source

- [https://github.com/vercel/next.js/issues/14595](https://github.com/vercel/next.js/issues/14595)
- [https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html](https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html)
