import React, { useEffect, useState } from "react"
import Link from "next/link"

import useGetData from "@/hooks/useGetData"
import useGetFilteredData from "@/hooks/useGetFilteredData"
import { ColumnDef } from "@tanstack/react-table"

import QueryButton from "@/components/query-button"
import Table from "@/components/table"

const HomePage = () => {
  const { data: d, refetch } = useGetData()
  const { query1, query2, query3, query4 } = useGetFilteredData()

  const [data, setData] = useState<any>(null)

  useEffect(() => {
    if (d) {
      setData(d)
    }
  }, [d])

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

  const refreshData = () => refetch()

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

      <div className="center my-4 w-full gap-4">
        <button
          className="rounded-lg bg-blue-500 px-4 py-2 hover:bg-blue-500/50"
          onClick={() => {
            refreshData()
            setData(d)
          }}
        >
          Refresh Data
        </button>
        <Link href={"/average"} className="rounded-lg bg-red-500 px-4 py-2 hover:bg-red-500/50">
          Top 10 cities with highest number of users and their average income.
        </Link>
      </div>
      <div className="flex flex-col justify-evenly gap-4">
        <QueryButton
          title={"Income < 5 and Car is BMW or Mercedes"}
          setData={setData}
          query={query1}
        />
        <QueryButton
          title={"Fetch Male Users With Phone Price > 10000"}
          setData={setData}
          query={query2}
        />
        <QueryButton
          title={
            "Fetch Users With LastName Starting With 'M' and Quote Length > 15 and Email Includes LastName"
          }
          setData={setData}
          query={query3}
        />
        <QueryButton
          title={"Fetch Users With Car BMW Mercedes Audi and Email Is Alpha"}
          setData={setData}
          query={query4}
        />
      </div>
    </>
  )
}

export default HomePage
