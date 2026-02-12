import React from "react";

// Define types for props
type Column = {
  header: string;
  key: string;
};

type TableProps = {
  columns: Column[];
  data: Record<string, any>[]; // each row is an object with string keys
};

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-blue-500 text-white">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="py-2 px-4 text-left border-b border-gray-300"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="py-2 px-4 border-b border-gray-200"
                >
                  {row[col.key] ?? "-"} {/* Use nullish coalescing */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
