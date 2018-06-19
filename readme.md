# Unchained UI

## Log

Log mixin with levels of verbosity

### Usage

```js
import { log, LOG_LEVEL } from 'uc-log'

const MyClass = function() {}
MyClass.prototype = Object.assign({},
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

