class CategoryTreeNode {
  constructor(id, name, parentId, children) {
    this.id = id;
    this.name = name;
    this.parentId = parentId;
    this.children = children;
  }
}

function mapJsonToTreeNode(json) {
  const id = json.id;
  const name = json.name;
  const parentId = json.parentId;
  const children = json.children.map(childJson => mapJsonToTreeNode(childJson));

  return new CategoryTreeNode(id, name, parentId, children);
}

export default CategoryTreeNode;