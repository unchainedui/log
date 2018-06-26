# Unchained UI

## Log

[![NPM Version](https://img.shields.io/npm/v/uc-log.svg?style=flat-square)](https://www.npmjs.com/package/uc-log)
[![NPM Downloads](https://img.shields.io/npm/dt/uc-log.svg?style=flat-square)](https://www.npmjs.com/package/uc-log)

Log mixin with levels of verbosity

### Usage

```js
import compose from 'uc-compose'
import { log, LOG_LEVEL } from 'uc-log'

const MyClass = function() {}
MyClass.prototype = compose(
  log,
  {
    logLevel: LOG_LEVEL.DEBUG,
    logName: 'My Class',
    method: function() {
      this.log(LOG_LEVEL.INFO, 'Hello')
    }
  }
)
```

### Methods

#### log(level, ...args)

Logs all `args` into console if `level` is smaller than `logLevel` property of the class.

### Properties

* **logLevel** - number, defines the maximum log level to be printed out
* **logName** - string, if defined will be prepended to every log line

### LEVELS

```js
const LOG_LEVEL = {
  NONE: 0,
  ALERT: 1,
  CRITICAL: 2,
  ERROR: 3,
  WARNING: 4,
  NOTICE: 5,
  INFO: 6,
  DEBUG: 7,
  ALL: 255
}
```

License MIT

© velocityzen

