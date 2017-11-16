/**
 * @author: shirychen (shirychen9@163.com)
 * @date: 2017/11/16
 */
/**
 * @desc   计算时间戳${startTime}与${endTime}时间间隔
 * @param  {Number} startTime 开始时间
 * @param  {Number} endTime 结束时间（不填取当前时间）
 * @return {Object}
 */
function timestampInterval(startTime, endTime) {
  startTime = parseInt(startTime);
  if (isNaN(startTime)) return;
  endTime = parseInt(endTime);
  endTime = endTime && !isNaN(endTime) ? endTime : Date.now();

  let oldDate = Date.parse(new Date(startTime));
  let nowDate = Date.parse(new Date(endTime));
  let disTime = parseInt((nowDate - oldDate) / 1000); // 单位：s
  // year
  let year = Math.floor(disTime / 86400 / 365);
  disTime = disTime % (3600 * 24 * 365);
  // month
  let month = Math.floor(disTime / 86400 / 30);
  disTime = disTime % (3600 * 24 * 30);
  // day
  let day = Math.floor(disTime / (3600 * 24));
  disTime = disTime % (3600 * 24);
  // hour
  let hour = Math.floor(disTime / (60 * 60));
  disTime = disTime % (60 * 60);
  // minute
  let minute = Math.floor(disTime / 60);
  disTime = disTime % 60
  // seconds
  let seconds = disTime;

  return {
    year: year,
    month: month,
    day: day,
    hour: hour,
    minute: minute,
    seconds: seconds
  }
}