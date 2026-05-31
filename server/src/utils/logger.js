const getTimeStamp = () => {
  return new Date().toISOString();
};
const writeLog = (level, message) => {
  const log = `[${getTimeStamp()}]  [${level.toUpperCase()}]: ${message}\n`;

  console.log(log);
};

export const logger = {
  info: (message) => writeLog("info", message),
  warn: (message) => writeLog("warn", message),
  error: (message) => writeLog("error", message),
  debug: (message) => writeLog("debug", message),
};
