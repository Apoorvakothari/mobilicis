import React from "react"
import Link from "next/link"

import useGetFilteredData from "@/hooks/useGetFilteredData"
import { ColumnDef } from "@tanstack/react-table"

import Table from "@/components/table"

const AveragePage = () => {
  const {
    query5: { data, refetch },
  } = useGetFilteredData()

  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        header: "User",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: "city",
            cell: (info) => info.getValue(),
            header: () => <span>City</span>,
            footer: (props) => props.column.id,
          },
        ],
      },
      {
        header: "Details",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: "userCount",
            header: () => "User Count",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "avgIncome",
            header: () => "Average Income",
            footer: (props) => props.column.id,
          },
        ],
      },
    ],
    []
  )

  return (
    <>
      {data && (
        <Table
          {...{
            data,
            columns,
          }}
        />
      )}
      <div className="center gap-2">
        <button
          className="rounded-lg bg-blue-500 px-4 py-2 hover:bg-blue-500/50"
          onClick={() => {
            refetch()
          }}
        >
          Refresh Data
        </button>
        <Link href={"/"} className="rounded-lg bg-red-500 px-4 py-2 hover:bg-red-500/50">
          Back
        </Link>
      </div>
    </>
  )
}

export default AveragePage
