import axios from "axios"

import { useQuery } from "@tanstack/react-query"

const useGetFilteredData = () => {
  // Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”
  const getIncomeLowerThanFiveAndCarBMWOrMercedes = useQuery(
    ["IncomeLowerThanFiveAndCarBMWOrMercedes"],
    async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/data/filter`, {
        params: {
          incomeMax: 5,
          car: ["BMW", "Mercedes"],
        },
      })
      return res.data.data
    }
  )

  // Male Users which have phone price greater than 10,000
  const getMaleUsersWithPhonePriceMorethanTenThousand = useQuery(
    ["MaleUsersWithPhonePriceMorethanTenThousand"],
    async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/data/filter`, {
        params: {
          gender: "Male",
          phonePriceMin: 10000,
        },
      })
      return res.data.data
    }
  )

  // Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name
  const getUsersWithLastNameStartingWithMAndQuoteLengthGreaterThanFifteenAndEmailIncludesLastName =
    useQuery(
      ["UsersWithLastNameStartingWithMAndQuoteLengthGreaterThanFifteenAndEmailIncludesLastName"],
      async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/data/filter`, {
          params: {
            lastName: "^M",
            quote: { $regex: ".{15,}" },
            email: { $regex: "M" },
          },
        })
        return res.data.data
      }
    )

  // Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
  const getUsersWithCarBMWMercedesAudiAndEmailIsAlpha = useQuery(
    ["UsersWithCarBMWMercedesAudiAndEmailIsAlpha"],
    async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/data/filter`, {
        params: {
          car: ["BMW", "Mercedes", "Audi"],
          email: "^[a-zA-Z@.]*$",
        },
      })
      return res.data.data
    }
  )

  // Show the data of top 10 cities which have the highest number of users and their average income.
  const getTopTenCitiesWithHighestNumberofUsersAndAvgIncome = useQuery(
    ["TopTenCitiesWithHighestNumberofUsersAndAvgIncome"],
    async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/data/`)
      const groupByCity = res.data.reduce((groups: any, user: any) => {
        const city = user.city
        if (!groups[city]) {
          groups[city] = { city, users: [], incomeSum: 0 }
        }
        groups[city].users.push(user)
        groups[city].incomeSum += user.income
        return groups
      }, {})
      const cityData = Object.values(groupByCity).map((city_1: any) => ({
        city: city_1.city,
        userCount: city_1.users.length,
        avgIncome: city_1.incomeSum / city_1.users.length,
      }))
      cityData.sort((a, b) => b.userCount - a.userCount)
      return cityData.slice(0, 10)
    }
  )

  return {
    query1: getIncomeLowerThanFiveAndCarBMWOrMercedes,
    query2: getMaleUsersWithPhonePriceMorethanTenThousand,
    query3:
      getUsersWithLastNameStartingWithMAndQuoteLengthGreaterThanFifteenAndEmailIncludesLastName,
    query4: getUsersWithCarBMWMercedesAudiAndEmailIsAlpha,
    query5: getTopTenCitiesWithHighestNumberofUsersAndAvgIncome,
  }
}

export default useGetFilteredData
