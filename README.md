# ben-reilly

Deep clone utility, optimal code paths for Node.js and Browsers

```javascript
const clone = require('ben-reilly')
const copy = clone(anyObject)
```

This library has different implementations for Node.js and Browsers. In Node.js it will use the **very** fast v8 serializer
and uses `realistic-structured-clone` in the browser.

![IMG_0260](https://user-images.githubusercontent.com/579/65085877-91f1a300-d964-11e9-8612-23be052d23f6.png)

Library is named after [Ben Reilly](https://en.wikipedia.org/wiki/Ben_Reilly) the "Scarlet Spider," a clone of Peter Parker.
