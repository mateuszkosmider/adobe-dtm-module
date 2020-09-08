# adobe-dtm-module
### Adobe Dynamic Tag Management

This is a Typescript module that implement Adobe Dynamic Tag Management. It is designed to use [AdobeDTM](https://docs.adobe.com/content/help/en/dtm/using/dtm-home.html) snippet.

## Installation

[npm](https://www.npmjs.com/):

```bash
npm install adobe-dtm-module --save
```

## Usage

Initializing AdobeDTM Module in React based app:

```js
import React from 'react'
...
import AdobeTagManager from 'adobe-dtm-module'

const dtmArgs = {
    trackerUrl: 'urlToYourTracker',
    digitalData: { ... }
}

AdobeTagManager.initialize(dtmArgs)
```
