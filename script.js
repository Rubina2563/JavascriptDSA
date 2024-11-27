class myArray{
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    get(index) {
        return this.data[index];
    }
    
    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    shift() {
        const firstItem = this.data[0];
        delete this.data[0];

        for (let i = 0; i < this.length ; i++){
            this.data[i]=this.data[i+1]
        }
        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }

    delete(index) {
        const item = this.data[index];
        delete this.data[index];
        for (let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1];

        }

        delete this.data[this.length - 1];
        this.length--;
        return item;
    }
}

const newArray = new myArray();
newArray.push(1);
 
 newArray.push(2);
// newArray.push(2);
 console.log(newArray);
newArray.push(3);
// newArray.push(2);
  console.log(newArray);
newArray.push(4);
  console.log(newArray);
console.log(newArray.pop());
 console.log(newArray);
console.log(newArray.get(2));
 console.log(newArray.delete(2))
// console.log(newArray.pop());
// console.log(newArray)
//  console.log(newArray.shift());
//  console.log(newArray);

//reverse string problem
//convert the string to Array(split method), reverse the Array(reversse method), convert string back to array{join method}

const reverseString = (str) => str.split("").reverse().join("");

console.log(reverseString("hello"))

//Palindrome problem
//if the reverse string is equal to tthe original one then that give true
//convert string to array(split),reverse{reverse},convert back to string(join),compare string

const isPalindrome = (str) => str.split("").reverse().join("") === str;
console.log(isPalindrome("mom"));


//integer reversing
//convert number to string(toString),convert string to array(split),reverse the sting(reverse) ,convert array back to string(join), ocnvert string to number(parseInt and math.sign), return number
const reverseInt = (n) => {
    let reversed = n.toString().split("").reverse().join("");
    return parent(reversed)*Math.sign(n)
}
console.log(reverseInt(-123))

   



//Sentence Capitalization
//make string lowercase(toLowerCase) , convert string to array(split through space ) , capitalize each word(map function that convert only word[0] to capital and then add remaining with word.slice(1)) , convert array back to string

const capilatize = (str) => {
    return str.toLowerCase().split(" ").map(word=>word[0].toUpperCase()+word.slice(1)).join(" ")
}
console.log(capilatize("hello world"))

//FizzBuzz
//print number from 1 to n, if number is divisible by 3, print fizz, if by 5,print buzz, if by 3 and 5 then print FizzBuzz, else print number

const FizzBuzz = (num) => {
    for (i = 0; i <= num; i++){
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        } else if (i % 3 == 0) {
             console.log("Fizz");
        } else if (i % 5 == 0) {
             console.log("Buzz");
        } else {
            console.log('Fizz Buzz')
        }
    }
}

FizzBuzz(15)
//MaxProfit

const maxProfit = (prices) => {
  let minPrice = prices[0]; // Assume the first day is the cheapest to buy
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    // console.log(currentPrice);

    // Update minimum price if a lower price is found
    minPrice = Math.min(minPrice, currentPrice);
    // console.log(minPrice);

    // Calculate potential profit for selling today
    const potentialProfit = currentPrice - minPrice;
    // console.log(potentialProfit);

    // Update maxProfit if a higher profit is found
    maxProfit = Math.max(maxProfit, potentialProfit);
    // console.log(maxProfit);
  }

  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log("Maximum profit:", profit);
//array chunk

const chunk = (array, size) => {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    // console.log("------------", chunk);
    chunked.push(chunk);
    index += size;
  }

  return chunked;
};

// console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));


//two Sum

// ⚠️ This is not better solution, we'll make it better in the upcoming videos!

function twoSum(nums, target) {
  // Loop through each number in the list
  for (let i = 0; i < nums.length; i++) {
    // For each number, check the rest of the list
    for (let j = i + 1; j < nums.length; j++) {
      // If the current number and the one we're checking add up to the target, return their indexes
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  // If no matching pair is found, return an empty array
  return [];
}

const res = twoSum([2, 7, 11, 15], 9);
const res2 = twoSum([1, 3, 7, 9, 2], 11);
console.log(res);
console.log(res2);
