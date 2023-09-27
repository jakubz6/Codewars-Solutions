export function calculateCombinations(startPosition: string, patternLength: number): number {
  let totalPatterns: number = 0;

  type adjListScreen = { [vertex: string]: string[] };
  type adjListPoints = { [vertex: string]: number[] };

  let pointsNeighbors: adjListScreen = {
    'A': ['B', 'D', 'E', 'F', 'H'],
    'B': ['A', 'C', 'D', 'E', 'F', 'G', 'I'],
    'C': ['B', 'D', 'E', 'F', 'H'],
    'D': ['A', 'B', 'C', 'E', 'G', 'H', 'I'],
    'E': ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I'],
    'F': ['A', 'B', 'C', 'E', 'G', 'H', 'I'],
    'G': ['B', 'D', 'E', 'F', 'H'],
    'H': ['A', 'C', 'D', 'E', 'F', 'G', 'I'],
    'I': ['B', 'D', 'E', 'F', 'H'],
  };

  const pinPoints: adjListPoints = {
    'A': [0, 0],
    'B': [0, 1],
    'C': [0, 2],
    'D': [1, 0],
    'E': [1, 1],
    'F': [1, 2],
    'G': [2, 0],
    'H': [2, 1],
    'I': [2, 2]
  }

  const pinScreen: boolean[][] = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ];

  function updatePinScreen(pointsNeighbors: adjListScreen, usedPoints: boolean[][]): void {
    const updateNeighbors = (pointA: string, pointB: string) => {
      pointsNeighbors[pointA].push(pointB);
      pointsNeighbors[pointB].push(pointA);
    };

    if (usedPoints[0][1]) {
      updateNeighbors('A', 'C');
    }

    if (usedPoints[1][0]) {
      updateNeighbors('G', 'A');
    }

    if (usedPoints[1][2]) {
      updateNeighbors('I', 'C');
    }

    if (usedPoints[2][1]) {
      updateNeighbors('G', 'I');
    }

    if (usedPoints[1][1]) {
      const adjenctPoints = [['A', 'I'], ['B', 'H'], ['C', 'G'], ['D', 'F']];
      for (let pair of adjenctPoints) {
        updateNeighbors(pair[0], pair[1]);
      }
    }

    for (let point in pointsNeighbors) {
      pointsNeighbors[point] = Array.from(new Set(pointsNeighbors[point]));
    }
  }

  function countPatterns(startPos: string, length: number, usedPoints: boolean[][], pointNeighbors: adjListScreen, currLength: number = 1): any {
    usedPoints[pinPoints[startPos][0]][pinPoints[startPos][1]] = true;

    updatePinScreen(pointNeighbors, usedPoints);

    let tempUsedPoints: boolean[][] = [...usedPoints.map(row => [...row])];

    if (currLength == length) {
      totalPatterns++;

      return;
    } else {
      for (let i = 0; i < pointNeighbors[startPos].length; i++) {
        const point = pointNeighbors[startPos][i];

        if (tempUsedPoints[pinPoints[point][0]][pinPoints[point][1]] === false) {
          tempUsedPoints = [...usedPoints.map(row => [...row])];
          countPatterns(point, length, tempUsedPoints, JSON.parse(JSON.stringify(pointNeighbors)), currLength + 1);
        }
      }
    }
  }
  
  if (patternLength <= 0 || patternLength > 9) {
    return 0;
  }

  countPatterns(startPosition, patternLength, pinScreen, pointsNeighbors);

  return totalPatterns;
}