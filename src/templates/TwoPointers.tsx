import React, { FC } from "react";
import CodeBlock from "../components/CodeBlock";

const code = `# Two Pointers Template
def two_pointers_example(arr):
    left = 0
    right = len(arr) - 1
    
    while left < right:
        # Process elements at left and right pointers
        # Move pointers based on conditions
        left += 1
        right -= 1

# Example: Reverse Array
def reverse_array(arr):
    left = 0
    right = len(arr) - 1
    
    while left < right:
        # Swap elements
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1

# Example: Two Sum Sorted
def two_sum(numbers, target):
    left = 0
    right = len(numbers) - 1
    
    while left < right:
        sum = numbers[left] + numbers[right]
        if sum == target:
            return [left + 1, right + 1]
        elif sum < target:
            left += 1
        else:
            right -= 1
    
    return [-1, -1]`;

const problems = [
  { id: 167, name: "Two Sum II Input Array Is Sorted", difficulty: "Medium" },
  { id: 15, name: "3Sum", difficulty: "Medium" },
  { id: 125, name: "Valid Palindrome", difficulty: "Easy" },
];

const TwoPointers: FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Two Pointers Technique</h2>
      <p className="text-gray-700">
        The two pointers technique uses two pointers to solve array problems
        efficiently. It's commonly used for searching pairs, reversing arrays,
        or detecting palindromes.
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

export default TwoPointers;
