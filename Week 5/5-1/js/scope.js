// Global scope
let globalVar = "I'm a global variable";

function outerFunction() {
  // Local scope of outerFunction or Function Scope
  let outerVar = "I'm an outer variable";

  console.log(globalVar); // Accessible because globalVar is in the global scope
  console.log(outerVar); // Accessible because outerVar is within the scope of outerFunction

  function innerFunction() {
    // Local scope of innerFunction or Block scope
    let innerVar = "I'm an inner variable";

    console.log(globalVar); // Accessible because globalVar is in the global scope
    console.log(outerVar); // Accessible due to closure: innerFunction can access its containing function's variables
    console.log(innerVar); // Accessible because innerVar is defined within innerFunction
  }

  innerFunction();

  console.log(innerVar); // Would throw an error: innerVar is not accessible in the scope of outerFunction
}

outerFunction();

console.log(globalVar);
// Would throw an error: outerVar is not accessible in the global scope
