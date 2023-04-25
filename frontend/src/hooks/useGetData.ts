import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useGetData = () => {
  const { data, isLoading, error } = useQuery(["data"], () =>
    axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/data`).then((res) => {
      console.log(res)
      return res.data.data
    })
  )

  return {
    data,
    isLoading,
    error,
  }
}

export default useGetData
