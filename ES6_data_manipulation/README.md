<div align= "center">
  <h1>ES6 data manipulation</h1>
</div>

##  Objectives

`How to define a class:` 
`Map, Filter, and Reduce on Arrays`  

`Map:` Transforms each element of an array according to a given function to create a new array.

`Filter:` Creates a new array by selecting the elements of the initial array that meet a specific criterion.

`Reduce:` Combines the elements of an array to obtain a single value by applying a cumulative function.

`Typed Arrays`
Typed arrays are specialized arrays, optimized for handling binary data. They allow working with specific types such as integers or floating-point numbers.

`Data Structures:` Set, Map, and WeakMap
`Set:` A collection of unique values.

`Map:` A collection of key-value pairs where the keys can be of any type.

`WeakMap:` A collection similar to Map, but the keys must be objects and are weakly referenced.

# Requirements
- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 9.x.x`
- Allowed editors: `vi, vim, emacs, Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using `Jest` and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running  `npm run full-test`
- All of your functions must be exported

## Exercices

| Filename | Description |
| -------- | ----------- |
|`0. Basic list of objects`|Create a getListStudents function that returns an array of objects with three attributes.|
|`1. More mapping`|Create a getListStudentIds function that returns an array of IDs from a list of objects.|
|`2. Filter`|Create a getStudentsByLocation function that returns an array of objects corresponding to a specific city.|
|`3. Reduce`|Create a function getStudentIdsSum that returns the sum of all student IDs.|
|`4. Combine`|Create a function updateStudentGradeByCity.|
|`5. Typed Arrays`|Create a function createInt8TypedArray that returns a new ArrayBuffer containing an Int8 value at a specific position.|
|`6. Set data structure`|Create a setFromArray function that returns a Set from an array.|
|`7. More set data structure`|Create a function hasValuesFromArray that returns a boolean indicating whether all elements of the array exist in the Set|
|`8. Clean set`|Create a cleanSet function that returns a string containing all values ​​in the Set starting with a specific string (startString).s|
|`9. Map data structure`|Create a function named groceriesList that returns a map of groceries.|
|`10. More map data structure` |Create an updateUniqueItems function that accepts a Map, updates the entries with a quantity from 1 to 100, and throws a "Cannot process" error if the argument is not a Map.|

<p align="center">
  <img src="https://i.imgur.com/J1oVLId.jpeg" name="logo Holberton"/>
</p>