//In Javascript there is no built-in support for tuples. But we can create a tuple using an array or object.
//However, Tuples are immutable and fixed-size in nature. So, we can create a tuple using an array and freeze it.

const myTuple = Object.freeze(['Alex', 36, 'God of Code']);
// console.log(myTuple);

/*
Sum and Product
Write a function that calculates the sum and product of all elements in a tuple of numbers.

Example

input_tuple = (1, 2, 3, 4)
sum_result, product_result = sum_product(input_tuple)
print(sum_result, product_result)  # Expected output: 10, 24
*/
const sumAndProduct = (tuple) => {
  const result = {
    sum: 0,
    product: tuple[0],
  };

  tuple.forEach((el) => {
    result.sum += el;
    result.product = result.product * el;
  });
  return result;
};

// console.log(sumAndProduct([1, 2, 3, 4])); //{ sum: 10, product: 24 }

/*
Elementwise Sum
Create a function that takes two tuples and returns a tuple containing the element-wise sum of the input tuples.

Example

tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
output_tuple = tuple_elementwise_sum(tuple1, tuple2)
print(output_tuple)  # Expected output: (5, 7, 9)
*/
const elementwiseSum = (tuple1, tuple2) => {
  const result = [];
  tuple1.forEach((el, i) => {
    if (tuple1[i] && tuple2[i]) {
      result.push(tuple1[i] + tuple2[i]);
    }
  });
  return result;
};
// console.log(elementwiseSum([1, 2, 3], [4, 5, 6])); //[5, 7, 9]
