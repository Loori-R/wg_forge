/*
collect array's element to object with first letters as keys
and sorted words array as a value

Example:
['test', 'foo', 'bar', 'farm', 'trust', 'ham', 'harm'] -> {
  't': ['test', 'trust'],
  'f': ['farm', 'foo'],
  'b': ['bar'],
  'h': ['ham', 'harm'],
}
*/
export function collectByFirstLetter(...words) {
  const res = {}
  words.map((item) => {
    if (!res[item[0]]) {
      res[item[0]] = []
    }
    res[item[0]].push(item)
    res[item[0]].sort()
  })
  return res
}

/*
Write a function which receives object and list of keys
and returns object with only keys passed in arguments.
unknown keys are ignored

Example:
({name: 'John', age: 42}, 'name') yields {name: 'John'}
*/
export function only(obj, ...keys) {
  const result = {}
  keys.map((item) => {
    const res = obj[item]
    if (res === undefined) { return }
    result[item] = res
  })
  return result
}

/*
Function counts words in given text.
returns an object with word as key and it's frequence as value

Note: It should ignore punctuation marks and uppercase symbols

Example:
'Awesome! Does it work? It should works' yields
{
  awesome: 1,
  test: 1,
  it: 2,
  should: 1,
  works: 1,
}
'' yields {}
*/
export function wordsCount(text) {
  const result = {}
  if (!text) { return result }
  const textLower = text.toLowerCase()
  const arrWords = textLower.match(/\w+/g)
  arrWords.map((item) => {
    if (!result[item]) { result[item] = 1 }
    else { result[item]++ }
  })
  return result
}

/*
Write a function's body which create an object for user representation
It should contains method for password validation:
password is weak if it contains only lowercase letters or only uppercase

Example:
const user = createUser('root', 'topsecret')
user.login === 'root' // true
user.password === 'topsecret' // true
user.isWeakPassword() === true
user.password = 'topSecreT'
user.isWeakPassword() === false
*/

export function createUser(login, password) {
  const res = {
    login: login,
    password: password,
    isWeakPassword: () => {
      const allLower = Object.values(res.password).every((item) => { return item.toLowerCase() === item })
      const allUpper = Object.values(res.password).every((item) => { return item.toUpperCase() === item })
      return (allLower || allUpper)
    }
  }
  return res
}
