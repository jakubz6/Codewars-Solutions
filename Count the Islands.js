function countIslands(image) {
  const getNeighbors = (graph, row, col) => {
    const rows = graph.length;
    const cols = graph[0].length;

    const neighbors = [];

    if (row > 0 && graph[row - 1][col] !== undefined) {
      neighbors.push([row - 1, col]);
    }

    if (row < rows - 1 && graph[row + 1][col] !== undefined) {
      neighbors.push([row + 1, col]);
    }

    if (col > 0 && graph[row][col - 1] !== undefined) {
      neighbors.push([row, col - 1]);
    }

    if (col < cols - 1 && graph[row][col + 1] !== undefined) {
      neighbors.push([row, col + 1]);
    }
    return neighbors;
  }

  const dfs = (image, visited, start) => {
    [row, col] = start;
    visited[row][col] = true;
    const neighbors = getNeighbors(image, row, col);
    for (const neighbor of neighbors) {
      [row, col] = neighbor;
      if (image[row][col] === 1 && visited[row][col] !== true) {
        visited[row][col] = true;
        dfs(image, visited, [row, col]);
      }
    }

    return visited;
  }

  const visited = new Array(image.length);
  for (let i = 0; i < image.length; i++) {
    visited[i] = new Array(image[0].length).fill(false);
  }

  let count = 0;

  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] === 1 && visited[i][j] !== true) {
        dfs(image, visited, [i, j]);
        count++;
      }
    }
  }

  return count;
}