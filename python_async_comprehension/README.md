<div align= "center">
  <h1>Python - Async Comprehension</h1>
</div>

## Objectives

`How to write an asynchronous generator:`  
Use async def to define the function and yield to produce the values.

`How to use asynchronous comprehensions:`  
Use async for in a list, dictionary, or set comprehension.

`How to annotate generators:`  
Use typing.Generator for synchronous generators and typing.AsyncGenerator for asynchronous generators, specifying the types of the produced values, the sent value (often None), and the return value (often None).

## Requirements

- Allowed editors: `vi, vim, emacs`
- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `python3` (version 3.9)
- All your files should end with a new line
- The first line of all your files should be exactly `#!/usr/bin/env python3`
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `pycodestyle` style (version 2.5.x)
- The length of your files will be tested using `wc`
- All your modules should have a documentation (`python3 -c 'print(**import**("my_module").**doc**)'`)
- All your functions should have a documentation (`python3 -c 'print(**import**("my_module").my_function.**doc**)'`)
- A documentation is not a simple word, it’s a real sentence explaining what’s the purpose of the module, class or method (the length of it will be verified)
- All your functions and coroutines must be type-annotated.

## Exercices

| Filename             | Description |
| -------------------- | ----------- |
| `0. Async Generator` |Create an asynchronous Python coroutine async_generator that loops 10 times, waits 1 second on each iteration, and produces a random number (0-10).|
| `1. Async Comprehensions`|Import async_generator and create async_comprehension to collect and return the 10 random numbers produced by async_generator via an asynchronous comprehension.|
| `2. Run time for four parallel comprehensions`|Import async_comprehension and create measure_runtime to run async_comprehension four times in parallel with asyncio.gather, measuring and returning the total execution time (about 10 seconds).|

<br>

<p align="center">
  <img src="https://i.imgur.com/J1oVLId.jpeg" name="logo Holberton"/>
</p>
