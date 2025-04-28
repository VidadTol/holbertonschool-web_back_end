#!/usr/bin/env python3

"""Module for the measure_runtime function"""

import asyncio
import time


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() ->float:
  """
  Measures the total runtime of async_comprehension
  and returns it.
  """

  start_time = time.time()
  await asyncio.gather(
    async_comprehension(),
    async_comprehension(),
    async_comprehension(),
    async_comprehension()
  )
  end_time = time.time()
  return end_time - start_time
