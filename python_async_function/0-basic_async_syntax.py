#!/usr/bin/env python3
""" basic async syntax """

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """ waits for a random delay and returns the delay time"""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
