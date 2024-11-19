import React, { FC } from "react";
import CodeBlock from "../components/CodeBlock";

const code = `def sliding_window_example(arr, k):
    window_start = 0
    window_sum = 0
    max_sum = 0

    for window_end in range(len(arr)):
        window_sum += arr[window_end]  # Add the next element

        # Start sliding when we hit the window size
        if window_end >= k - 1:
            max_sum = max(max_sum, window_sum)
            window_sum -= arr[window_start]  # Remove the element going out
            window_start += 1  # Slide the window

    return max_sum

# Example: Find max sum of k consecutive elements
def max_sum_subarray(arr, k):
    return sliding_window_example(arr, k)`;

const problems = [
  { id: 643, name: "Maximum Average Subarray I", difficulty: "Easy" },
  {
    id: 3,
    name: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
  },
  { id: 209, name: "Minimum Size Subarray Sum", difficulty: "Medium" },
];

const SlidingWindow: FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Sliding Window Technique</h2>
      <p className="text-gray-700">
        The sliding window technique is used to solve array/string problems
        efficiently by maintaining a window that slides through the data. It's
        particularly useful for finding subarrays or substrings that meet
        certain conditions.
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

export default SlidingWindow;
