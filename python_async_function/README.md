
<div align= "center">
  <h1>Python - Async</h1>
</div>

##  Objectives

`Async and await syntax`  
The async and await keywords are used to define and manage asynchronous functions in Python.

`async`: Used to define a coroutine.

`await`: Pauses the execution of a coroutine until the awaited task completes.

`How to run an async program with asyncio ?`  
The standard way to run an asynchronous program is to use the asyncio.run() function. This function starts the event loop and executes the main coroutine.

`How to run coroutines concurrently ?`  
You can run multiple coroutines concurrently using functions like asyncio.gather() or asyncio.create_task(), which allow for parallel execution.

`How to create asyncio tasks ?`  
Tasks allow you to run coroutines in the background. You can use asyncio.create_task() to start a coroutine as a task and manage it separately.

`How to Use the Random Module ?`  
The random module provides functions for generating pseudo-random numbers, as well as tools for manipulating random selections.`

## Requirements

- A `README.md` file, at the root of the folder of the project, is mandatory
- Allowed editors: `vi, vim, emacs`
- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `python3` (version 3.9)
- All your files should end with a new line
- All your files must be executable
- The length of your files will be tested using `wc`
- The first line of all your files should be exactly `#!/usr/bin/env python3`
- Your code should use the `pycodestyle` style (version 2.5.x)
- All your functions and coroutines must be type-annotated.
- All your modules should have a documentation `(python3 -c 'print(__import__("my_module").__doc__)')`
- All your functions should have a documentation `(python3 -c 'print(__import__("my_module").my_function.__doc__)')`
- A documentation is not a simple word, it’s a real sentence explaining what’s the purpose of the module, class or method (the length of it will be verified)

## Exercices

| Filename | Description |
| -------- | ----------- |
|`0. The basics of async`|Create an asynchronous coroutine wait_random that accepts an integer max_delay (default value: 10). It waits for a random duration (between 0 and max_delay, inclusive) and then returns the delay as a float. Use Python's random module.|
|`1. Let's execute multiple coroutines at the same time with async`|Create an async function wait_n that takes two integers, n and max_delay. It imports wait_random, spawns it n times with the specified max_delay, and returns a list of delays in ascending order, managing concurrency without using sort().|
|`2. Measure the runtime`|Create a measure_time function that takes two integers, n and max_delay. It imports wait_n, measures the total execution time of wait_n(n, max_delay) using the time module, and returns the average time per coroutine as a float (total_time / n).|
|`3. Tasks`|Import wait_random from 0-basic_async_syntax. Create a regular function task_wait_random that takes an integer max_delay and returns an asyncio.Task|
|`4. Tasks`|Take the code from wait_n and alter it into a new function task_wait_n. The code is nearly identical to wait_n except task_wait_random is being called.|


<br>

<p align="center">
  <img src="https://i.imgur.com/J1oVLId.jpeg" name="logo Holberton"/>
</p>