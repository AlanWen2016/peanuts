const INFINITY = 1 / 0
/**
 *
 * 将函数转换为字符串， undefined, null将返回空值，-0返回'-0'
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * toString(null)
 * // => ''
 *
 * toString(-0)
 * // => '-0'
 *
 * toString([1, 2, 3])
 * // => '1,2,3'
 */
export function toString(value) {
  if (value == null) {
    return ''
  }
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value
  }
  if (Array.isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return `${value.map((other) => other == null ? other : toString(other))}`
  }
  const result = `${value}`
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result
}

export default toString
