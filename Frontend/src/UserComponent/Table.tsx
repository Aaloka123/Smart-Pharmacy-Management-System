import React from "react";

type TableProps<T extends Record<string, any>> = {
  data: T[];
  columns?: { header: string; key: keyof T }[];
  loading?: boolean;
  onRowClick?: (row: T) => void;
};

const Table = <T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  onRowClick,
}: TableProps<T>) => {
  const tableColumns =
    columns ??
    (data[0]
      ? Object.keys(data[0]).map((key) => ({
          header: key.toUpperCase(),
          key: key as keyof T,
        }))
      : []);

  return (
    <div className="overflow-x-auto rounded-xl shadow">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-blue-600 text-white sticky top-0 z-10">
          <tr>
            {tableColumns.map((col) => (
              <th
                key={String(col.key)}
                className="py-3 px-4 text-left text-sm font-semibold tracking-wide"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan={tableColumns.length}
                className="text-center py-6 text-blue-500 font-medium"
              >
                Loading data...
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={tableColumns.length}
                className="text-center py-6 text-gray-400 italic"
              >
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={() => onRowClick && onRowClick(row)}
                className={`${rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"} ${
                  onRowClick ? "cursor-pointer" : ""
                } hover:bg-blue-50 transition duration-200`}
              >
                {tableColumns.map((col) => (
                  <td
                    key={String(col.key)}
                    className="py-3 px-4 border-t border-gray-200 text-sm text-gray-700"
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
