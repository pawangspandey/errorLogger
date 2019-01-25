
interface Level {
  readonly Info: Number;
  readonly Warning: Number;
  readonly Error: Number;
}

class Logger {
  public Level: Level = {
    Info: 1,
    Warning: 2,
    Error: 3
  }

  private selectedLevel: Number = this.Level.Info;

  constructor(level?: Number) {
    this.selectedLevel = level ? level : this.selectedLevel;
  }

  public setLevel = (level: Number): void => {
    this.selectedLevel = level;
  }

  private shouldLog = (level: Number): Boolean => {
    return level >= this.selectedLevel;
  }

  public info = (...data: any[]): void =>  {
    if (this.shouldLog(this.Level.Info)) {
      console.info(...data);
    }
  }

  public error = (...data: any[]): void =>  {
    if (this.shouldLog(this.Level.Error)) {
      console.error(...data);
    }
  }

  public warn = (...data: any[]): void =>  {
    if (this.shouldLog(this.Level.Warning)) {
      console.warn(...data);
    }
  }
}

let logger = new Logger();

logger.info('hello world', {}); // console.info called with 'hello world' and {}
logger.error('error!', new Error('msg')); // console.error called with 'error!', and new Error('msg')
logger.setLevel(logger.Level.Warning); // only warning messages and higher should log
logger.warn('danger!'); // console.warn called with 'danger!'
logger.error('high danger!'); // console.error called with 'high danger!'
logger.info('everything is okay'); // nothing should be invoked here since log level is Warning