class Node {
  constructor(data, left = null, right = null) {
    (this.data = data), (this.left = left), (this.right = right);
  }
}

class BST {
  constructor(node) {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
    } else {
      const searchTree = (node) => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let min = this.root;
    while (min.left !== null) {
      min = min.left;
    }
    return min.data;
  }

  findMax() {
    let max = this.root;
    while (max.right !== null) {
      max = max.right;
    }
    return max.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (current.data > data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return false;
      }
    }
    return current.data;
  }

  remove(data) {
    const removeNode = (node, data) => {
      console.log(node, data);
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }
        //node has no left child
        if (node.left === null) {
          return node.right;
        }
        // node has no right child
        if (node.right === null) {
          return node.left;
        }

        //node has two children
        var temp = node.right;
        while (temp.left !== null) {
          temp = temp.left;
        }
        node.data = temp.data;
        node.right = removeNode(node.left, data);
        return node;
      } else if (data < node.left) {
        node.left = removeNode(node.left, data);
      } else {
        node.right = removeNode(node.right, data);
      }
    };
    this.root = removeNode(this.root, data);
  }
}

let result = new BST();
result.add(15);
result.add(13);
result.add(25);
result.add(12);
result.add(35);
result.add(33);
result.add(17);

console.log(result.findMin());
console.log(result.find(33));
console.log(result.find(37));

console.log(result.findMax());
console.log(result.remove(15));
