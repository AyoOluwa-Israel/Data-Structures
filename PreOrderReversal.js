var preorderTraversal = function (root) {
  if (!root) return [];
  var res = [];
  var queue = [root];
  var node = null;
  while (queue.length) {
    node = queue.pop();
    res.push(node.val);
    if (node.right) queue.push(node.right);
    if (node.left) queue.push(node.left);
  }
  return res;
};
