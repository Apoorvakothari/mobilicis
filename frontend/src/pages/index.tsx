import { ColumnDef } from "@tanstack/react-table"
import React, { useEffect } from "react"

import Table from "@/components/table"
import useGetData from "@/hooks/useGetData"

const HomePage = () => {
  const { data } = useGetData()

  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        header: "User",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: "first_name",
            cell: (info) => info.getValue(),
            header: () => <span>First Name</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "last_name",
            id: "lastName",
            cell: (info) => info.getValue(),
            header: () => <span>Last Name</span>,
            footer: (props) => props.column.id,
          },
        ],
      },
      {
        header: "Details",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: "email",
            header: () => "Email",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "income",
            header: () => "Income",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "city",
            header: () => "City",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "car",
            header: () => "Car",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "quote",
            header: () => "Quote",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "phone_price",
            header: () => "Price",
            footer: (props) => props.column.id,
          },
        ],
      },
    ],
    []
  )

  const refreshData = () => {}

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
      <hr />

      <div>
        <button onClick={() => refreshData()}>Refresh Data</button>
      </div>
    </>
  )
}

export default HomePage
