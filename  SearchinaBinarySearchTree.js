var searchBST = function (root, val) {
  if (!root) return root;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node.val === val) return node;
    if (node.val > val) {
      if (node.left) stack.push(node.left);
    } else {
      if (node.right) stack.push(node.right);
    }
  }
  return null;
};
