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

//Palindrome problem
//if the reverse string is equal to tthe original one then that give true
//convert string to array(split),reverse{reverse},convert back to string(join),compare string

//integer reversing
//convert number to string(toString),convert string to array(split),reverse the sting(reverse) ,convert array back to string(join), ocnvert string to number(parseInt and math.sign), return number

//Sentence Capitalization
//make string lowercase(toLowerCase) , convert string to array(split through space ) , capitalize each word(map function that convert only word[0] to capital and then add remaining with word.slice(1)) , convert array back to string

//FizzBuzz
//print number from 1 to n, if number is divisible by 3, print fizz, if by 5,print buzz, if by 3 and 5 then print FizzBuzz, else print number

//MaxProfit
//array chunk
//two Sum
