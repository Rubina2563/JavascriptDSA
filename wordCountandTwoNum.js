function wordCounter(text) {
  const lowerText = text.toLowerCase();
  const wordMap = {};
  const words = lowerText.split(/\s+/);

  for (const word of words) {
    if (word in wordMap) {
      wordMap[word]++;
    } else {
      wordMap[word] = 1;
    }
  }

  return wordMap;
}

const text = "Hello my name name name is huxn";
// { hello: 1, my: 1, name: 3, is: 1, huxn: 1 }
const wordCounts = wordCounter(text);

console.log(wordCounts);


function twoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numMap && numMap[complement] !== i) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }

  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // [0, 1]


function groupAnagrams(strs) {
  const anagramMap = {};

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (sortedStr in anagramMap) {
      anagramMap[sortedStr].push(str);
    } else {
      anagramMap[sortedStr] = [str];
    }
  }

  return Object.values(anagramMap);
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groups = groupAnagrams(strs);

console.log(groups);
// Output: [["eat", "tea", "ate"], ["bat"], ["nat", "tan"]]