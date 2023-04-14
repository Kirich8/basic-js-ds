const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.origin = null;
  }

  root() {
    return this.origin;
  }

  add(data) {
    this.origin = addElement(this.origin, data);

    function addElement(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addElement(node.left, data);
      } else {
        node.right = addElement(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return hasElement(this.origin, data);

    function hasElement(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return hasElement(node.left, data);
      } else {
        return hasElement(node.right, data);
      }
    }
  }

  find(data) {
    return findElement(this.origin, data);

    function findElement(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findElement(node.left, data);
      } else {
        return findElement(node.right, data);
      }
    }
  }

  remove(data) {
    this.root = removeElement(this.origin, data);

    function removeElement(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeElement(node.left, data);

        return node;
      } else if (node.data < data) {
        node.right = removeElement(node.right, data);

        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;

          return node;
        }

        if (!node.right) {
          node = node.left;

          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;

        node.right = removeElement(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.origin) {
      return null;
    }

    let node = this.origin;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.origin) {
      return null;
    }

    let node = this.origin;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};