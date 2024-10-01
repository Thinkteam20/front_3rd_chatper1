/** @jsx createVNode */
import { createVNode } from "../../lib";

export const PostForm = () => (
    <div className="mb-4 bg-white rounded-lg shadow-md p-4">
        <textarea
            id="post-content"
            placeholder="무슨 생각을 하고 계신가요?"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
            id="post-submit"
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
        >
            게시
        </button>
    </div>
);
