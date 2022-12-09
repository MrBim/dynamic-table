import React, { Dispatch, SetStateAction } from "react";

type Props = {
  columnNames: string[];
  setSort: Dispatch<SetStateAction<{ sortDirection: string; sortKey: string }>>;
  sortInfo: {
    sortDirection: string;
    sortKey: string;
  };
};

const TableHeadings = ({ columnNames, setSort, sortInfo }: Props) => {
  const handleTHClick = (selection: string) => {
    setSort({
      sortKey: selection,
      sortDirection:
        selection !== sortInfo.sortKey
          ? "dsc"
          : sortInfo.sortDirection === "dsc"
          ? "asc"
          : "dsc",
    });
  };
  return (
    <thead>
      <tr>
        {columnNames.map((it) => (
          <td key={it} onClick={() => handleTHClick(it)}>
            {it}{" "}
            <span>
              {it === sortInfo.sortKey
                ? sortInfo.sortDirection === "asc"
                  ? "asc"
                  : "dsc"
                : null}
            </span>
          </td>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeadings;
