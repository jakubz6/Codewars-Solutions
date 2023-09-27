function longestSlideDown(pyramid) {
  const cache = new Map();

  const SlideUp = (a, b) => {
    const value = pyramid[a][b];

    if (value == null) {
      return -Infinity;
    }

    if (a === 0 && b === 0) {
      return value;
    }

    const key = JSON.stringify([a, b]);
    const entry = cache.get(key);

    if (entry != null) {
      return entry;
    }

    const result = value + Math.max(SlideUp(a - 1, b), SlideUp(a - 1, b - 1));

    cache.set(key, result);
    return result;
  }
  const groundIndex = pyramid.length - 1;
  
  return Math.max(...pyramid[groundIndex].map((_, i) => SlideUp(groundIndex, i)));
}