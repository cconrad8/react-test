import { useState } from "react";
import { Box, Button, ButtonGroup, Icon, Text } from "@chakra-ui/react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import PlainCell from "./PlainCell";
import LinkCell from "./LinkCell";
import StatusCell from "./StatusCell";
import TagCell from "./TagCell";
import Filters from "./Filters";
import SortIcon from "./icons/SortIcon";

const columns = [
  {
    accessorKey: "studyId",
    header: "Study ID",
    size: 120,
    cell: PlainCell,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: "studyName",
    header: "Study Name",
    size: 400,
    cell: PlainCell,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: "studyPI",
    header: "Study Investigators",
    size: 225,
    cell: PlainCell,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: "DSPLink",
    header: "DSP Live Link",
    cell: LinkCell,
    enableSorting: false,
    enableColumnFilter: true,
    filterFn: (row, columnId, filterStatuses) => {
      if (filterStatuses.length === 0) return true;
      const status = row.getValue(columnId);
      return filterStatuses.includes(status?.id);
    },
  },
  {
    accessorKey: "dataDepositComplete",
    header: "Data section",
    cell: StatusCell,
  },
  /* WIP feature
  {
    accessorKey: "governanceComplete",
    header: "Governance section",
    cell: StatusCell,
  },
  {
    accessorKey: "underGDPR",
    header: "GDPR",
    size: 125,
    cell: TagCell,
  },
  */
  {
    accessorKey: "revision",
    header: "Last Revised",
    cell: PlainCell,
  },
];

const DSPTable = ({data}) => {
  const [tableData, setTableData] = useState(data);
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode: "onChange",
    meta: {
      updateData: (rowIndex, columnId, value) =>
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex
              ? {
                  ...prev[rowIndex],
                  [columnId]: value,
                }
              : row
          )
        ),
    },
  });

  return (
    <Box>
      <Filters
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
      <Box className="table" w={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Box className="tr" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Box className="th" w={header.getSize()} key={header.id}>
                {header.column.columnDef.header}
                {header.column.getCanSort() && (
                  <Icon
                    as={SortIcon}
                    mx={3}
                    fontSize={14}
                    onClick={header.column.getToggleSortingHandler()}
                  />
                )}
                {
                  {
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted()]
                }
                <Box
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={`resizer ${
                    header.column.getIsResizing() ? "isResizing" : ""
                  }`}
                />
              </Box>
            ))}
          </Box>
        ))}
        {table.getRowModel().rows.map((row) => (
          <Box className="tr" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Box className="td" w={cell.column.getSize()} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <br />
      <Text mb={2}>
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </Text>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button
          onClick={() => table.previousPage()}
          isDisabled={!table.getCanPreviousPage()}
          borderColor='gray.600'
          color='gray.800'
        >
          {"<"}
        </Button>
        <Button
          onClick={() => table.nextPage()}
          isDisabled={!table.getCanNextPage()}
          borderColor='gray.800'
          color='gray.600'
        >
          {">"}
        </Button>
      </ButtonGroup>
    </Box>
  );
};
export default DSPTable;
