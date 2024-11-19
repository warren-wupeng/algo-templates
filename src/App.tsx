import React, { useState } from "react";
import SinglePointer from "./templates/SinglePointer";
import SlidingWindow from "./templates/SlidingWindow";
import BinarySearch from "./templates/BinarySearch";
import BFS from "./templates/BFS";
import DFS from "./templates/DFS";
import TwoPointers from "./templates/TwoPointers";

function App() {
  const [activeTemplate, setActiveTemplate] = useState("single-pointer");

  const templates = [
    { id: "single-pointer", name: "Single Pointer", component: SinglePointer },
    { id: "two-pointers", name: "Two Pointers", component: TwoPointers },
    { id: "sliding-window", name: "Sliding Window", component: SlidingWindow },
    { id: "binary-search", name: "Binary Search", component: BinarySearch },
    { id: "bfs", name: "BFS", component: BFS },
    { id: "dfs", name: "DFS", component: DFS },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            LeetCode Algorithm Templates
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-64 flex-shrink-0">
              <div className="bg-white p-4 rounded-lg shadow">
                <nav className="space-y-2">
                  {templates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => setActiveTemplate(template.id)}
                      className={`w-full text-left px-4 py-2 rounded-md ${
                        activeTemplate === template.id
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {template.name}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white p-6 rounded-lg shadow">
                {templates.find((t) => t.id === activeTemplate)?.component({})}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
