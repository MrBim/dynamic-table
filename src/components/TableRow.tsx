import React from 'react'

type Props = {
    row: DynamicTableDataEntry;
    columnNames: string[];
}

const TableRow = ({row, columnNames}: Props) => {
  return (
    <tr>
        {columnNames.map((it) => (
            <td>{row[it]}</td>
        ))}
    </tr>
  )
}

export default TableRow
