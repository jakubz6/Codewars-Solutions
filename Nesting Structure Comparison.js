Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.

  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.

  if (this.length === other.length) {
    for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i]) && Array.isArray(other[i])) {
        return this[i].sameStructureAs(other[i]);
      }

      if (Array.isArray(this[i]) !== Array.isArray(other[i])) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
};