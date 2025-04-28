#!/usr/bin/env python3

import asyncio
import random

async def async_generator():
  """ 
  Yields a random number between 0 and 10 every second for 10 seconds.
  """
  for i in range(10):
    await asyncio.sleep(1)
    yield random.uniform(0, 10)

async def async_comprehension():
  """
  Collects 10 random numbers using an async comprehension over async_generator.
  """
  return [i async for i in async_generator()]
