import React, { useState, useEffect } from "react";
import TableHeadings from "./TableHeadings";
import TableRow from "./TableRow";

type Props = {
  data: DynamicTableDataEntry[];
};

const DynamicTable = ({ data }: Props) => {
  const [headings, setHeadings] = useState<string[]>([]);
  const [sortedData, setSortedData] = useState<DynamicTableDataEntry[]>([]);
  const [sortBy, setSortBy] = useState({ sortDirection: "dsc", sortKey: "" });

  useEffect(() => {
    console.log("sortBy.sortKey", sortBy.sortKey);
    if (sortBy.sortKey === "") {
      setSortedData(data);
    } else {
      console.log("sorting");
      setSortedData(
        data.sort((a, b) => {
          if (a[sortBy.sortKey].toString() < b[sortBy.sortKey].toString()) {
            return sortBy.sortDirection === "dsc" ? -1 : 1;
          }
          if (
            a[sortBy.sortKey].toLocaleString() >
            b[sortBy.sortKey].toLocaleString()
          ) {
            return sortBy.sortDirection === "dsc" ? 1 : -1;
          }
          return 0;
        })
      );
    }
  }, [sortBy]);

  useEffect(() => {
    setHeadings(Object.keys(data[0]));
  }, [data]);

  return (
    <table>
      <TableHeadings
        columnNames={headings}
        setSort={setSortBy}
        sortInfo={sortBy}
      />
      <tbody>
        {sortedData.map((it) => (
          <TableRow key={Object.values(it).join('')} row={it} columnNames={headings} />
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
