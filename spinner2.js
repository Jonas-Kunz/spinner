


const spinner2 = function(delay) {
  
  let counter = 0;
  const string = "|/-\\|\n";

  for (let char of string) {

    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, delay + counter);

    counter += delay;

  };

};

spinner2(50)

