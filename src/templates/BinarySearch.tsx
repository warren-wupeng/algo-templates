import React, { FC } from "react";
import CodeBlock from "../components/CodeBlock";

const code = `# Binary Search Template
def binary_search_example(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1  # Target not found

# Example: Search in rotated sorted array
def search_rotated(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2
        
        if arr[mid] == target:
            return mid

        # Check which half is sorted
        if arr[left] <= arr[mid]:
            if target >= arr[left] and target < arr[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if target > arr[mid] and target <= arr[right]:
                left = mid + 1
            else:
                right = mid - 1

    return -1
`;

const problems = [
  { id: 704, name: "Binary Search", difficulty: "Easy" },
  { id: 33, name: "Search in Rotated Sorted Array", difficulty: "Medium" },
  { id: 74, name: "Search a 2D Matrix", difficulty: "Medium" },
];

const BinarySearch: FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Binary Search Technique</h2>
      <p className="text-gray-700">
        Binary search is an efficient algorithm for searching sorted arrays by
        repeatedly dividing the search interval in half. It has a time
        complexity of O(log n).
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

export default BinarySearch;
