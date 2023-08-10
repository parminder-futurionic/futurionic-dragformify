import React, { useState } from 'react';

interface TreeNodeProps {
  label: string;
  data: any;
}

const TreeNode: React.FC<TreeNodeProps> = ({ label, data }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button
        className="flex items-center cursor-pointer focus:outline-none hover:bg-gray-100 transition-colors duration-300"
        onClick={toggleCollapse}
        aria-label={`${label} - Toggle`}
      >
        <span
          className={`text-orange-500 ${isCollapsed ? 'rotate-0' : 'rotate-90'}`}
          aria-hidden="true"
        >
          ➤
        </span>
        <span className="ml-1 text-purple-500 font-semibold">{label}:</span>
      </button>
      {!isCollapsed && (
        <div className="ml-4 pl-2 border-l-2 border-gray-400">
          {typeof data === 'object' ? (
            <div>
              {Object.entries(data).map(([key, value]) => (
                <TreeNode key={key} label={key} data={value} />
              ))}
            </div>
          ) : (
            <div className="flex items-center">
              <span className="text-gray-600">{label}:</span>
              <span className="ml-1 text-green-500">
                {typeof data === 'boolean' ? data.toString() : data}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

interface JSONViewerProps {
  data: any;
}

const JSONViewer: React.FC<JSONViewerProps> = ({ data }) => {
  const handleExportClick = () => {
    const jsonContent = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    a.click();
    URL.revokeObjectURL(url);
  };




  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-gray-800 overflow-hidden">
      <div className="flex justify-between mb-2">
    
      <h1 className="text-4xl font-semibold">🔍 JSON Viewer</h1>

        <button
            className="btn btn-primary flex items-center transition-all duration-300"
          onClick={handleExportClick}
        >
          Export as JSON
        </button>
      </div>
      <pre className="text-gray-700">
        <code>
          {Object.entries(data).map(([key, value]) => (
            <TreeNode key={key} label={key} data={value} />
          ))}
        </code>
      </pre>
    </div>
  );
};

export default JSONViewer;
