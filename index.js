export const LOG_LEVEL = {
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

export const log = {
  log: function(level, ...args) {
    if (level > this.logLevel) {
      return;
    }

    if (this.logName) {
      args.unshift(`%c${this.logName} %s`, 'color:#666;');
    }

    console[level === 1 ? 'error' : 'log'].apply(console, args);
  }
}

export default log;
