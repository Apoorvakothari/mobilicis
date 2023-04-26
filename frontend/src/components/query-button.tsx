import React, { useEffect } from "react"

import { UseQueryResult } from "@tanstack/react-query"

interface QueryButtonInterface {
  title: string
  setData: React.Dispatch<any>
  query: UseQueryResult
}

const QueryButton: React.FC<QueryButtonInterface> = ({ title, setData, query }) => {
  const { data, refetch } = query

  useEffect(() => {
    if (!data) {
      refetch()
    }
  }, [data, refetch])

  return (
    <div className="text-center">
      <button
        className="rounded-md bg-white/50 px-4 py-2 hover:bg-white/20"
        onClick={() => {
          setData(data)
        }}
      >
        {title}
      </button>
    </div>
  )
}

export default QueryButton
