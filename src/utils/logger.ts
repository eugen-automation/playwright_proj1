// Utility logger using Node.js console
class Logger {
  info(message: string) {
    console.info(`[INFO] ${message}`);
  }
  warn(message: string) {
    console.warn(`[WARN] ${message}`);
  }
  error(message: string) {
    console.error(`[ERROR] ${message}`);
  }
  debug(message: string) {
    console.debug(`[DEBUG] ${message}`);
  }
}

const logger = new Logger();
export default logger;
