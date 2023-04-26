import React, { useEffect } from "react"

import { UseQueryResult } from "@tanstack/react-query"

interface QueryButtonInterface {
  buttonDecor?: string
  className?: string
  title: string
  setData: React.Dispatch<any>
  query: UseQueryResult
}

const QueryButton: React.FC<QueryButtonInterface> = ({
  title,
  setData,
  query,
  className,
  buttonDecor,
}) => {
  const { data, refetch } = query

  useEffect(() => {
    if (!data) {
      refetch()
    }
  }, [data, refetch])

  return (
    <div className={"text-center " + className}>
      <button
        className={"rounded-md bg-white/50 px-4 py-2 hover:bg-white/20 " + buttonDecor}
        onClick={() => {
          console.log(`${title}: ${data}`)
          setData(data)
        }}
      >
        {title}
      </button>
    </div>
  )
}

export default QueryButton
