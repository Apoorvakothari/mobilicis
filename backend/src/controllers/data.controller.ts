import { Request, Response } from "express"

import {
  fetchAllData,
  fetchFilteredData,
  fetchRegexFilteredData,
  fetchIncomeLowerThanFiveAndCarBMWOrMercedes,
  fetchUsersWithCarBMWMercedesAudiAndEmailIsAlpha,
  fetchMaleUsersWithPhonePriceMorethanTenThousand,
  fetchTopTenCitiesWithHighestNumberofUsersAndAvgIncome,
  fetchUsersWithLastNameStartingWithMAndQuoteLengthGreaterThanFifteenAndEmailIncludesLastName,

  /* Interfaces */
  FetchFilteredDataFilter,
  FetchRegexFilteredData,
} from "../services/data.services"

/* Get all data */
export const getAllData = async (req: Request, res: Response) => {
  try {
    const data = await fetchAllData()

    res.status(200).json({ message: "Data fetched successfully", data: data, error: null })
  } catch (error) {
    res.status(500).json({ message: "An error occured!", data: null, error: error.message })
  }
}

/* Filtered Endpoints */
export const getFilteredData = async (req: Request, res: Response) => {
  console.log("Query: ", req.query)

  try {
    const phonePriceMin = Number(req.query.phonePriceMin)
    const phonePriceMax = Number(req.query.phonePriceMax)
    const incomeMin = Number(req.query.incomeMin)
    const incomeMax = Number(req.query.incomeMax)
    const city = req.query.city as string
    const car = req.query.car as string
    const firstName = req.query.firstName as string
    const lastName = req.query.lastName as string
    const email = req.query.email as string
    const gender = req.query.gender as string
    const quote = req.query.quote as string

    const filters: FetchFilteredDataFilter = {
      phone_price: {
        min: phonePriceMin,
        max: phonePriceMax,
      },
      income: {
        min: incomeMin,
        max: incomeMax,
      },
      city,
      car,
      first_name: firstName,
      last_name: lastName,
      email,
      gender,
      quote,
    }

    console.log("Raw filters:", filters)

    const data = await fetchFilteredData(filters)

    res.status(200).json({ message: "Data fetched successfully", data: data, error: null })
  } catch (error) {
    res.status(500).json({ message: "An error occured!", data: null, error: error.message })
  }
}

/* Regex based Endpoints */
export const getRegexFilteredData = async (req: Request, res: Response) => {
  try {
    const { city, car, email, quote } = req.query

    const filters: FetchRegexFilteredData = {}

    if (city) filters.city = city.toString()
    if (car) filters.car = car.toString()
    if (email) filters.email = email.toString()
    if (quote) filters.quote = quote.toString()

    const data = await fetchRegexFilteredData(filters)

    res.status(200).json({ message: "Data fetched successfully", data: data, error: null })
  } catch (error) {
    res.status(500).json({ message: "An error occured!", data: null, error: error.message })
  }
}

/* Specific Endpoints */
// 1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
export const getIncomeLowerThanFiveAndCarBMWOrMercedes = async (req: Request, res: Response) => {
  try {
    const data = await fetchIncomeLowerThanFiveAndCarBMWOrMercedes()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// 2. Male Users which have phone price greater than 10,000.
export const getMaleUsersWithPhonePriceMorethanTenThousand = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await fetchMaleUsersWithPhonePriceMorethanTenThousand()

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// 3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
export const getUsersWithLastNameStartingWithMAndQuoteLengthGreaterThanFifteenAndEmailIncludesLastName =
  async (req: Request, res: Response) => {
    try {
      const data =
        await fetchUsersWithLastNameStartingWithMAndQuoteLengthGreaterThanFifteenAndEmailIncludesLastName()

      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

// 4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
export const getUsersWithCarBMWMercedesAudiAndEmailIsAlpha = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await fetchUsersWithCarBMWMercedesAudiAndEmailIsAlpha()

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// 5. Show the data of top 10 cities which have the highest number of users and their average income.
export const getTopTenCitiesWithHighestNumberofUsersAndAvgIncome = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await fetchTopTenCitiesWithHighestNumberofUsersAndAvgIncome()

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
