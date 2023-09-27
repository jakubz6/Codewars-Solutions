function validateBattlefield(field) {
  const direction = {
    RIGHT: 'r',
    DOWN: 'd'
  }

  const ships = {
    battleship: {
      count: 0,
      expected: 1,
      length: 4
    },
    cruisers: {
      count: 0,
      expected: 2,
      length: 3
    },
    destroyers: {
      count: 0,
      expected: 3,
      length: 2
    },
    submarines: {
      count: 0,
      expected: 4,
      length: 1
    }
  }

  const visited = new Array(10);
  
  for (let i = 0; i < 10; i++) {
    visited[i] = new Array(10).fill(false);
  }

  function isNextShip(start, direc) {
    const [row, col] = start;

    if (direc === direction.RIGHT) {
      return field[row][col + 1] === 1 ? [row, col + 1] : false;
    } else {
      return field[row + 1][col] === 1 ? [row + 1, col] : false;
    }
  }

  function isCurrentShip(start, direc) {
    const [row, col] = start;

    if (direc === direction.RIGHT) {
      if (row - 1 >= 0) {
        if (field[row - 1][col] === 1) {
          return false;
        }
      }

      if (row + 1 < 10) {
        if (field[row + 1][col] == 1) {
          return false;
        }
      }
    } else {
      if (col - 1 >= 0) {
        if (field[row][col - 1] === 1) {
          return false;
        }
      }

      if (col + 1 < 10) {
        if (field[row][col + 1] === 1) {
          return false;
        }
      }
    }

    return true;
  }

  function searchInDirection(start, direction, count = 0) {
    const [row, col] = start;

    let curr = isCurrentShip(start, direction);
    let next = isNextShip(start, direction);

    if (curr) {
      count++;
    }

    if (curr) {
      visited[row][col] = true;

      if (next === false) {
        return count;
      }

      return searchInDirection(next, direction, count);
    } else {
      return count;
    }
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let length;
      if (field[i][j] === 1 && visited[i][j] === false) {
        length = searchInDirection([i, j], direction.RIGHT);
      }

      if (field[j][i] === 1 && visited[j][i] === false) {
        length = searchInDirection([j, i], direction.DOWN);
      }

      if (length !== undefined && length !== 0) {
        for (let ship in ships) {
          if (ships[ship].length === length) {
            ships[ship].count++;
          }
        }
      }
    }
  }

  for (let ship in ships) {
    if (ships[ship].count !== ships[ship].expected) {
      return false;
    }
  }
  
  return true;
}