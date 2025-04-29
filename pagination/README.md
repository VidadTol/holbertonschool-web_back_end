
<div align= "center">
  <h1>Pagination</h1>
</div>

##  Objectives

`How to paginate a dataset with simple page and page_size parameters ?`

Use the page and page_size parameters in the request URL (e.g., /items?page=2&page_size=20). The server returns the items corresponding to the requested page.

`How to paginate a dataset with hypermedia metadata ?`

Include links to the pages (first, prev, next, last) in the API response. This allows the client to easily navigate between pages without having to manually construct URLs.

`How to paginate in a deletion-resilient manner ?`

Use cursor-based pagination (with a unique identifier) ​​instead of offset-based pagination. You can also use deletion markers.


## Requirements

- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `python3` (version 3.9)
- All your files should end with a new line
- The first line of all your files should be exactly `#!/usr/bin/env python3`
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `pycodestyle` style (version 2.5.*)
- The length of your files will be tested using `wc`
- All your modules should have a documentation `(python3 -c 'print(__import__("my_module").__doc__)')`
- All your functions should have a documentation `(python3 -c 'print(__import__("my_module").my_function.__doc__)')`
- A documentation is not a simple word, it’s a real sentence explaining what’s the purpose of the module, class or method (the length of it will be verified)
- All your functions and coroutines must be type-annotated.

## Exercices

| Filename | Description |
| -------- | ----------- |
|`0. Simple helper function`|Create a function index_range(page, page_size) that returns a tuple (start_index, end_index) representing the start and end indices for paging a list, given the page number (base 1) and the page size.|
|`1. Simple pagination`||
|`2. Hypermedia pagination`||
|`3. Deletion-resilient hypermedia pagination`||


<br>

<p align="center">
  <img src="https://i.imgur.com/J1oVLId.jpeg" name="logo Holberton"/>
</p>