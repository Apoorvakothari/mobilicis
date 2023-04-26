import axios from "axios"

import { useQuery } from "@tanstack/react-query"

const useGetData = () => {
  const { data, isLoading, error, refetch } = useQuery(["data"], () =>
    axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/data`).then((res) => {
      console.log(res)
      return res.data.data
    })
  )

  return {
    data,
    isLoading,
    error,
    refetch,
  }
}

export default useGetData
