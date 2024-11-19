import React, { FC } from "react";
import CodeBlock from "../components/CodeBlock";

const code = `# Tree Node Definition
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# DFS Template (Recursive)
def dfs_example(root):
    result = []
    
    def dfs(node):
        if not node:
            return
        
        # Pre-order: Process current node first
        result.append(node.val)
        
        # Recursively process left and right subtrees
        dfs(node.left)
        dfs(node.right)
    
    dfs(root)
    return result

# Example: Path Sum
def has_path_sum(root, target_sum):
    if not root:
        return False
    
    # If leaf node, check if remaining sum equals node value
    if not root.left and not root right:
        return target_sum == root.val
    
    # Recursively check left and right subtrees
    return has_path_sum(root.left, target_sum - root.val) or \
           has_path_sum(root.right, target_sum - root.val)`;

const problems = [
  { id: 112, name: "Path Sum", difficulty: "Easy" },
  { id: 200, name: "Number of Islands", difficulty: "Medium" },
  { id: 394, name: "Decode String", difficulty: "Medium" },
];

const DFS: FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Depth-First Search (DFS)</h2>
      <p className="text-gray-700">
        DFS is a traversal algorithm that explores a graph or tree by going as
        deep as possible along each branch before backtracking. It can be
        implemented recursively or using a stack.
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

export default DFS;
