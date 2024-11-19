import React, { FC } from "react";
import CodeBlock from "../components/CodeBlock";

const code = `# Tree Node Definition
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# BFS Template
def bfs_example(root):
    if not root:
        return []
    
    result = []
    queue = [root]
    
    while queue:
        level_size = len(queue)
        
        for _ in range(level_size):
            node = queue.pop(0)
            result.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
    
    return result

# Example: Level Order Traversal
def level_order(root):
    if not root:
        return []
    
    result = []
    queue = [root]
    
    while queue:
        level_size = len(queue)
        current_level = []
        
        for _ in range(level_size):
            node = queue.pop(0)
            current_level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(current_level)
    
    return result`;

const problems = [
  { id: 102, name: "Binary Tree Level Order Traversal", difficulty: "Medium" },
  {
    id: 107,
    name: "Binary Tree Level Order Traversal II",
    difficulty: "Medium",
  },
  { id: 199, name: "Binary Tree Right Side View", difficulty: "Medium" },
];

const BFS: FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Breadth-First Search (BFS)</h2>
      <p className="text-gray-700">
        BFS is a traversal algorithm that explores a graph or tree level by
        level. It uses a queue data structure and is particularly useful for
        finding shortest paths and level-order traversals.
      </p>
      <CodeBlock code={code} />
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Practice Problems</h3>
        <ul className="list-disc pl-5 space-y-2">
          {problems.map((problem) => (
            <li key={problem.id}>
              <a
                href={`https://leetcode.com/problems/${problem.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {problem.id}. {problem.name}
              </a>
              <span
                className={`ml-2 px-2 py-1 rounded text-sm ${
                  problem.difficulty === "Easy"
                    ? "bg-green-100 text-green-800"
                    : problem.difficulty === "Medium"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {problem.difficulty}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BFS;
