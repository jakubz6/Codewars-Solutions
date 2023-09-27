function treeByLevels (rootNode, level = 0) {
  if (!Boolean(rootNode)) {
    return [];
  }
  
	let result = rootNode.value !== null ? [{level: level, value: rootNode.value}] : [];
    
  if (rootNode.left !== null) {
    result.push(...treeByLevels(rootNode.left, level + 1));
  }
  
  if (rootNode.right !== null) {
    result.push(...treeByLevels(rootNode.right, level + 1));
  }
  
  if (level === 0) {
    const list = [];
    let maxLevel = level;
        
    for (let i = 0; i < result.length; i++) {
      maxLevel = Math.max(maxLevel, result[i].level);
    }
    
    for (let i = 0; i <= maxLevel; i++) {
      for (let j = 0; j < result.length; j++) {
        if (result[j].level === i) {
          list.push(result[j].value);
        }
      }
    }
    
    return list;
  }
    
  return result;
}