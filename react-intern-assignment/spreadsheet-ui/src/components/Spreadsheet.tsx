import {
  useTable,
  useSortBy,
  Column,
  Row,
  Cell,
} from 'react-table';
import { useMemo, useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import data from '../data/dummyData';

interface RecordType {
  [key: string]: string | number;
}

export default function Spreadsheet() {
  const [rowsData, setRowsData] = useState<RecordType[]>(data);

  const columns = useMemo<Column<RecordType>[]>(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Department', accessor: 'dept' },
      {
        Header: 'Salary',
        accessor: 'salary',
        Cell: ({ value }) => \`₹\${value.toLocaleString()}\`,
      },
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<RecordType>({ columns, data: rowsData }, useSortBy);

  const renderSorting = (column: any) => (
    <span className="inline-block w-4">
      {column.isSorted ? (column.isSortedDesc ? <FiChevronDown /> : <FiChevronUp />) : null}
    </span>
  );

  return (
    <div className="overflow-auto h-full bg-white rounded-md shadow-sm border border-gray-200">
      <table {...getTableProps()} className="min-w-full text-left table-fixed divide-y divide-gray-200">
        <thead className="bg-gray-50 text-gray-700">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-4 py-2 font-semibold select-none whitespace-nowrap"
                >
                  <div className="flex items-center gap-1">
                    {column.render('Header')}
                    {renderSorting(column)}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="divide-y divide-gray-100">
          {rows.map((row: Row<RecordType>) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-indigo-50">
                {row.cells.map((cell: Cell<RecordType>) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-4 py-2 whitespace-nowrap"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => {
                      const newValue = e.currentTarget.textContent ?? '';
                      setRowsData(prev => {
                        const updated = [...prev];
                        (updated[row.index] as any)[cell.column.id] = isNaN(Number(newValue))
                          ? newValue
                          : Number(newValue);
                        return updated;
                      });
                      console.log(\`Edited row \${row.index} col \${cell.column.id}: \${newValue}\`);
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
