/*
write a function's body that concat all passed strings to one and returns it
*/
export function concat(...strings) {
  if (strings.length < 0) { return }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return strings.reduce(reducer)
}

/*
write a function's body that returns string
that contains element of initial strings with odd indexes

Example:
'abcd' -> 'ac'
'' -> ''
'test' -> 'ts'
*/
export function oddElements(string) {
  if (string.length === 0) { return string }
  const odd = (item, index) => {
    if ((index + 1) % 2 != 0) { return item }
  }
  return Object.values(string).map(odd).join('')
}

/*
write a function's body that returns words count in passed string

Example:
'abcd' -> 1
'' -> 0
'foo bar' -> 2

Note: String has .split(separator) method where seprator is another string
*/
export function wordsCount(string) {
  if (string.length === 0) { return 0 }
  if (!/\s/.test(string)) { return 1 }
  return string.match(/\s/g).length + 1
}
