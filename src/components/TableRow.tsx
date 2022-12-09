import React from 'react'

type Props = {
    row: DynamicTableDataEntry;
    columnNames: string[];
}

const TableRow = ({row, columnNames}: Props) => {
  return (
    <tr>
        {columnNames.map((it) => (
            <td key={`${it}${row[it]}`}>{row[it]}</td>
        ))}
    </tr>
  )
}

export default TableRow
