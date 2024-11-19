import React, { FC } from "react";
import CodeBlock from "../components/CodeBlock";

const code = `# Single Pointer Template
def single_pointer_example(arr):
    pointer = 0
    
    while pointer < len(arr):
        # Process current element
        # Move pointer based on condition
        pointer += 1
    
    return pointer

# Example: Find the first non-zero element
def find_first_non_zero(arr):
    i = 0
    while i < len(arr) and arr[i] == 0:
        i += 1
    return i if i < len(arr) else -1`;

const problems = [
  { id: 27, name: "Remove Element", difficulty: "Easy" },
  { id: 283, name: "Move Zeroes", difficulty: "Easy" },
  { id: 26, name: "Remove Duplicates from Sorted Array", difficulty: "Easy" },
];

const SinglePointer: FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Single Pointer Technique</h2>
      <p className="text-gray-700">
        The single pointer technique involves using one pointer to traverse
        through an array or sequence. It's useful for in-place array
        modifications and finding specific elements.
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

export default SinglePointer;
