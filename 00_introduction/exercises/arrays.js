/*
Given a list of strings, return the count of the number of
strings where the string length is 2 or more and the first
and last chars of the string are the same.

['abc', 'aa', 'bb'] yields 2
*/
export function matchEnds(words) {
  const res = []
  words.map((item) => {
    if (item.length < 2) { return }
    if (item[0] == item[item.length - 1]) {
      console.log(`${item[0]} == ${item[item.length - 1]}`)
      res.push(item)
    }
  })
  return res.length
}

/*
Given an array of numbers, return new array where
first element is diffrence between maximum and minimum of passed array
last element is sum of minimum and maximum
and passed array in center
[1, 2, 3] yields [2, 1, 2, 3, 4]
[5, 2, 14] yields [12, 5, 2, 14, 16]
*/
export function addFirstAndLast(numbers) {
  const sorted = numbers.slice().sort((a, b) => { return a - b })
  const min = sorted[0]
  const max = sorted[sorted.length - 1]
  numbers.push(max + min)
  numbers.unshift(max - min)
  return numbers
}

/*
Given a list of strings, return a list with the strings
in sorted order, except group all the strings that begin with 'x' first.
e.g. ['mix', 'xyz', 'apple', 'xanadu', 'aardvark'] yields
['xanadu', 'xyz', 'aardvark', 'apple', 'mix']
Hint: this can be done by making 2 lists and sorting each of them
before combining them.
*/
export function xLetterFirst(words) {
  const arr = []
  const arrX = []
  words.map((item) => {
    if (item[0] === 'x') {
      arrX.push(item)
    } else { arr.push(item) }
  })
  arr.sort()
  arrX.sort()
  return arrX.concat(arr)
}

/*
Given a list of non-empty arrays, return a list sorted in increasing
order by the last element in each tuple.
e.g. [[1, 7], [1, 3], [3, 4, 5], [2, 2]] yields
[[2, 2], [1, 3], [3, 4, 5], [1, 7]]
*/
export function sortByLast(nestedArrays) {
  return nestedArrays.sort((a, b) => {
    return a[a.length - 1] - b[b.length - 1];
  })
}
