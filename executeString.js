function execute(code, variables) {
  // creating new function with given code and variable names as parameters
  const func = new Function(
    ...Object.keys(variables),
    "$math",
    "$logger",
    code
  );

  // calling function with given variables and global functions
  func(
    ...Object.values(variables),
    {
      sum: (a, b) => a + b,
      mul: (a, b) => a * b,
    },
    console.log
  );
}

// test_1
execute('$logger("Sum:", $math.sum(a, b))', { a: 17, b: 3 });

//test_2
execute('$logger("Mul:", $math.mul(a, b))', { a: 17, b: 3 });
