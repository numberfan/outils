/**
 * @author: shirychen (shirychen9@163.com)
 * @date: 2017/12/7
 */
/**
 * @desc   类数组
 * @param  obj
 * @return {Boolean}
 */
function likeArray(obj) {
  var length = !!obj && 'length' in obj && obj.length, // 返回 length的值
      type = typeof obj;
  console.log(typeof length == 'number' && length > 0)

  return 'string' == type || length === 0 || (typeof length == 'number' && length > 0)
}