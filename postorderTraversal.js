/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return [];
  let arr = [];

  if (root.left) {
    arr.push(...postorderTraversal(root.left));
  }
  if (root.right) {
    arr.push(...postorderTraversal(root.right));
  }
  arr.push(root.val);

  return arr;
};
