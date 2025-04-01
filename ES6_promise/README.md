<div align= "center">
  <h1>ES6 promise</h1>
</div>

##  Objectives

`Promises (how, why, and what)`  
Promises represent the eventual success or failure of an asynchronous operation, such as a data fetch. They help handle asynchronous tasks more elegantly, avoiding deeply nested callbacks. You can create promises using new Promise, and handle results or errors with .then, .catch, and .finally.

`How to use the then, resolve, catch methods`  
Use then to handle the result when a promise resolves successfully. Use resolve to fulfill a promise and send a result. Use catch to handle errors or rejections in a promise chain.

`How to use every method of the Promise object`    
Promise.all waits for all promises to resolve or one to reject. Promise.race resolves or rejects as soon as one promise does. Promise.allSettled waits for all promises to settle (resolve or reject). Promise.any resolves with the first promise that fulfills, ignoring rejections. Promise.resolve creates a resolved promise. Promise.reject creates a rejected promise.

`Throw / Try`  
Use try to execute a block of code and catch any errors in the catch block. Use throw to manually raise an error inside the try block.

`The await operator`  
The await operator pauses the execution of an async function until a promise resolves or rejects, simplifying asynchronous operations.

`How to use an async function`  
Declare a function as async and use await inside it to manage asynchronous tasks. Handle errors using try...catch. Functions marked as async return a promise by default.

# Requirements
- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 9.x.x`
- Allowed editors: `vi, vim, emacs, Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using `Jest` and the command `npm run test`
- Your code will be verified against lint using ESLint
- All of your functions must be exported

## Exercices

| Filename | Description |
| -------- | ----------- |
|`0. Keep every promise you make and only make promises you can keep`|Return a Promise using this prototype function getResponseFromAPI().|
|`1. Don't make a promise...if you know you can't keep it`|Create a function that returns a promise, resolving to an object for success or throwing an error for failure, while demonstrating asynchronous task handling.|
|`2. Catch me if you can!`|Create a function that handles a promise by resolving with an object, rejecting with an empty error, and logging a message for every outcome.|
|`3. Handle multiple successful promises`|Create a function that collectively resolves promises from uploadPhoto and createUser, logs body, firstName, and lastName on success, and logs "Signup system offline" in case of an error.|
|`4. Simple promise`|Create a function signUpUser(firstName, lastName) that returns a resolved promise containing an object with firstName and lastName as attributes.|
|`5. Reject the promises`|Create and export a function uploadPhoto(fileName) that returns a Promise rejecting with an Error and the message ${fileName} cannot be processed.|
|`6. Handle multiple promises`|Create and export a function handleProfileSignup that takes three arguments (firstName, lastName, and fileName), calls signUpUser and uploadPhoto|
|`7. Load balancer`|Create and export a function loadBalancer that takes two promises (chinaDownload and USDownload) as arguments and returns the value of the promise that resolves first.|
|`8. Throw an error`|Create a function divideFunction that takes two arguments (numerator and denominator). If the denominator is 0, throw an error with the message "cannot divide by 0". Otherwise, return the result of numerator divided by denominator.|
|`9. Throw error / try catch`|Create a function guardrail that executes a provided mathFunction, appends the result or error message to an array named queue, and always adds "Guardrail was processed".|

<br>

<p align="center">
  <img src="https://i.imgur.com/J1oVLId.jpeg" name="logo Holberton"/>
</p>