var invertTree = function (root) {
  if (!root) return root;
  const newNode = new TreeNode();
  newNode.val = root.val;
  newNode.right = invertTree(root.left);
  newNode.left = invertTree(root.right);
  return newNode;
};
