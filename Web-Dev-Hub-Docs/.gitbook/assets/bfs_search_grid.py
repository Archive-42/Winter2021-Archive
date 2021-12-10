"""
ID: b2d4ac17-3a7f-478f-8949-da86687be458
"""
from collections import deque
from collections.abc import Sequence


def bfs_search_grid(grid: Sequence[Sequence[int]], start: tuple[int, int], goal: tuple[int, int]) -> bool:
    """On a grid of 0s and 1s, find if start is connected to goal via a path of 1s."""
    rows = range(len(grid))
    cols = range(len(grid[0]))
    seen = {start}
    to_visit = deque([start])
    while to_visit:
        r, c = to_visit.popleft()
        if (r, c) == goal:
            return True
        adjacent = {(r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1)}
        for next_node in adjacent - seen:
            r1, c1 = next_node
            # Using these range objects is a concise alternative to 0 <= r1 < len(graph) and 0 <= c1 < len(graph[0])
            if r1 in rows and c1 in cols and grid[r1][c1]:
                seen.add(next_node)
                to_visit.append(next_node)
    return False
