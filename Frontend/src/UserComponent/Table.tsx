import React from "react";

type TableProps<T extends Record<string, any>> = {
  data: T[];
  columns?: { header: string; key: keyof T }[];
};

const Table = <T extends Record<string, any>>({
  data,
  columns,
}: TableProps<T>) => {
  // If columns are not provided, generate from first data object
  const tableColumns =
    columns ??
    (data[0]
      ? Object.keys(data[0]).map((key) => ({
          header: key,
          key: key as keyof T,
        }))
      : []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
        <thead className="bg-blue-500 text-white">
          <tr>
            {tableColumns.map((col) => (
              <th
                key={String(col.key)}
                className="py-2 px-4 text-left border-b border-gray-300"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={tableColumns.length}
                className="text-center py-4 text-gray-500"
              >
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${
                  rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-100 transition`}
              >
                {tableColumns.map((col) => (
                  <td
                    key={String(col.key)}
                    className="py-2 px-4 border-b border-gray-200"
                  >
                    {row[col.key] ?? "-"}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
