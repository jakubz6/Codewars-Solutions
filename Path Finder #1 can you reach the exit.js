function pathFinder(maze){
  let flag = false;
  maze = maze.split("\n").map(elem => elem.split(""));
  
  let visited = new Array(maze.length);
  for (let i = 0; i < maze.length; i++) {
      visited[i] = new Array(maze[0].length).fill(false);
  }
  
  function getNeighbors(array, row, col) {
    const numRows = array.length;
    const numCols = array[0].length;
    const neighbors = [];

    if (col > 0 && (array[row][col - 1] !== 'W')) {
      neighbors.push([row, col - 1]);
    }
    if (col < numCols - 1 && (array[row][col + 1] !== 'W')) {
      neighbors.push([row, col + 1]);
    }
    if (row > 0 && (array[row - 1][col] !== 'W')) {
      neighbors.push([row - 1, col]);
    }
    if (row < numRows - 1 && (array[row + 1][col] !== 'W')) {
      neighbors.push([row + 1, col]);
    }
  
    return neighbors;
  }
  
  function canReach(curr, visited) {
    if (curr[0] === maze.length - 1 && curr[1] === maze[0].length - 1) {
      flag = true;
      return;
    } else {
      visited[curr[0]][curr[1]] = true;
      let neighbors = getNeighbors(maze, curr[0], curr[1]);
      //let tempVisited = [...visited.map(row => [...row])];
      
      if (neighbors.length === 0) {
        return;
      } else {
        for (let i = 0; i < neighbors.length; i++) {
          if (visited[neighbors[i][0]][neighbors[i][1]] == false) {
            canReach(neighbors[i], visited);
          }
        }
      }
    }
    
  } canReach([0, 0], visited);
  
  if (flag) {
    return true
  } else {
    return false;
  }
}