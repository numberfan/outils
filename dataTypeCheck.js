/**
 * @author: shirychen (shirychen9@163.com)
 * @date: 2017/12/7
 */
/**
 * @desc   数据类型检测
 * @param  obj
 * @return {String} 检测结果。如：boolean、number、string等
 */
var class2type = {};
var toString = class2type.toString;
'Boolean Number String Function Array Date Regexp Object Error'.split(' ').forEach((item) => {
  class2type["[object " + item + "]"] = item.toLowerCase()
});
function type (obj) {
  return obj == null ? obj : class2type[toString.call(obj)] || 'object'
}