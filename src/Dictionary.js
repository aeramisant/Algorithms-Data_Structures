//create a dictionary
const myDictionary = {
  name: 'Alex',
  age: 36,
};

//update/add element to the dictionary
myDictionary.aka = 'God of Code';
myDictionary['age'] = 37;

// console.log(myDictionary);
//print out the dictionary
const showDictionary = (dictionary) => {
  for (let entry in dictionary) {
    console.log(entry, ':', dictionary[entry]);
  }
};
// showDictionary(myDictionary);

//look for a entry in the dictionary
const searchDictionary = (dictionary, value) => {
  for (let entry in dictionary) {
    if (dictionary[entry] === value) {
      return `ENTRY FOUND ---   ${entry}: ${dictionary[entry]}`;
    }
  }
  return 'ENTRY NOT FOUND';
};

// console.log(searchDictionary(myDictionary, 'Alex'));

//remove entry from the dictionary
const removeEntryFromDictionary = (dictionary, entry) => {
  delete dictionary[entry];
  return dictionary;
};
myDictionary.testing = 'test';
// console.log(myDictionary);
// removeEntryFromDictionary(myDictionary, 'testing');
// console.log(myDictionary);

//print all the keys in the dictionary
const getKeys = (dictionary) => {
  const result = [];
  for (let key in dictionary) {
    result.push(key);
  }
  return result;
};

// console.log(getKeys(myDictionary));

//remove last entry from the dictionary
const popLastItemFromDictionary = (dictionary) => {
  const keys = getKeys(dictionary);
  const lastKey = keys[keys.length - 1];
  delete myDictionary[lastKey];
  return dictionary;
};

// console.log(popLastItemFromDictionary(myDictionary));

/*
Count Word Frequency
Define a function to count the frequency of words in a given list of words.

Example:

words = ['apple', 'orange', 'banana', 'apple', 'orange', 'apple'] 
count_word_frequency(words) 
Output:

 {'apple': 3, 'orange': 2, 'banana': 1}
*/
const countWordFrequency = (words) => {
  const result = {};
  words.forEach((word) =>
    result.hasOwnProperty(word) ? result[word]++ : (result[word] = 1)
  );
  return result;
};

// console.log(
//   countWordFrequency(['apple', 'orange', 'banana', 'apple', 'orange', 'apple'])
// );
/*
Common Keys
Define a function with takes two dictionaries as parameters and merge them and sum the values of common keys.

Example:

dict1 = {'a': 1, 'b': 2, 'c': 3}
dict2 = {'b': 3, 'c': 4, 'd': 5}
merge_dicts(dict1, dict2)
Output:

{'a': 1, 'b': 5, 'c': 7, 'd': 5}
*/
const commonKeys = (dict1, dict2) => {
  const dict1length = Object.keys(dict1).length;
  const dict2length = Object.keys(dict2).length;
  const result = dict1length > dict2length ? dict1 : dict2;

  for (let key in result) {
    result[key] = dict1[key] + dict2[key];
  }
  return result;
};

// console.log(commonKeys({ a: 1, b: 2, c: 3 }, { b: 3, c: 4, a: 5 }));

/*
Key with the Highest Value
Define a function which takes a dictionary as a parameter and returns the key with the highest value in a dictionary.

Example:

my_dict = {'a': 5, 'b': 9, 'c': 2}
max_value_key(my_dict))
Output:

b
*/
const keyWithHighestValue = (dictionary) => {
  let highestValue = ['key', 0];
  for (let key in dictionary) {
    if (dictionary[key] > highestValue[1]) {
      highestValue = [key, dictionary[key]];
    }
  }
  return highestValue[0];
};

// console.log(keyWithHighestValue({ a: 5, b: 9, c: 2 })); //b

/*
Reverse Key-Value Pairs
Define a function which takes as a parameter dictionary and returns a dictionary in which everse the key-value pairs are reversed.

Example:

my_dict = {'a': 1, 'b': 2, 'c': 3}
reverse_dict(my_dict)
Output:

{1: 'a', 2: 'b', 3: 'c'}
*/

const reverseKeyValuePairs = (dictionary) => {
  const result = {};
  for (let key in dictionary) {
    result[dictionary[key]] = key;
  }
  return result;
};

// console.log(reverseKeyValuePairs({ a: 1, b: 2, c: 3 })); //{1: 'a', 2: 'b', 3: 'c'}

/*
Conditional Filter
Define a function that takes a dictionary as a parameter and returns a dictionary with elements based on a condition.

Example:

my_dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4} 
filtered_dict = filter_dict(my_dict, lambda k, v: v % 2 == 0) 
Output:

{'b': 2, 'd': 4}
*/

const conditionalFilter = (dictionary, conditionFn) => {
  const result = {};
  for (let key in dictionary) {
    if (conditionFn(dictionary[key])) {
      result[key] = dictionary[key];
    }
  }
  return result;
};

// console.log(
//   conditionalFilter({ a: 1, b: 2, c: 3, d: 4 }, (value) => value % 2 === 0)
// ); //{b: 2, d: 4}

/*
Same Frequency
Define a function which takes two lists as parameters and check if two given lists have the same frequency of elements.

Example:

list1 = [1, 2, 3, 2, 1]
list2 = [3, 1, 2, 1, 3]
check_same_frequency(list1, list2)
Output:

False
*/

const checkSameFrequency = (list1, list2) => {
  if (list1.length !== list2.length) return false;
  const frequency1 = {};
  const frequency2 = {};

  list1.map((item) => (frequency1[item] = frequency1[item] + 1 || 1));
  list2.map((item) => (frequency2[item] = frequency2[item] + 1 || 1));

  for (let key in frequency1) {
    if (frequency1[key] !== frequency2[key]) {
      return false;
    }
  }
  return true;
};

// console.log(checkSameFrequency([1, 2, 3, 3, 1], [3, 1, 2, 1, 3])); //false
