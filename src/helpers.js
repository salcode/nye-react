export function calcRemainingSeconds(endTimestamp, nowTimestamp) {
  return Math.ceil((endTimestamp - nowTimestamp)/1000);
}

export function getHourMinuteSecond(seconds) {
  const hours = Math.floor(seconds / 3600);
  if (seconds<0) {
    seconds = seconds + hours * -1 * 3600;
  }
  return {
    hours: hours,
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: Math.floor(seconds % 60),
  }
}
