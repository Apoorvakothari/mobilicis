import Data from "../model/data.model"

/* Fetch all data from Data */
export const fetchAllData = async () => {
  try {
    const data = await Data.find({})
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/* Filtering Queries */
export interface FetchFilteredDataFilter {
  phone_price?: {
    min?: number
    max?: number
  }
  income?: {
    min?: number
    max?: number
  }
  city?: string
  car?: string
  first_name?: string
  last_name?: string
  email?: string
  gender?: "Male" | "Female"
  quote?: string
}

export const fetchFilteredData = async (filters?: FetchFilteredDataFilter) => {
  try {
    const query: any = {}

    if (filters?.phone_price) {
      const { min, max } = filters.phone_price
      if (min) query.phone_price = { $gte: min }
      if (max) query.phone_price = { ...query.phone_price, $lte: max }
    }

    if (filters?.income) {
      const { min, max } = filters.income
      if (min) query.income = { $gte: min }
      if (max) query.income = { ...query.income, $lte: max }
    }

    if (filters?.city) {
      query.city = filters.city
    }

    if (filters?.car) {
      query.car = filters.car
    }

    if (filters?.first_name) {
      query.first_name = filters.first_name
    }

    if (filters?.last_name) {
      query.last_name = filters.last_name
    }

    if (filters?.email) {
      query.email = { $regex: `^${filters.email}`, $options: "i" }
    }

    if (filters?.gender) {
      query.gender = filters.gender
    }

    if (filters?.quote) {
      query.quote = { $regex: filters.quote }
    }

    const data = await Data.find(query)

    return data
  } catch (error) {
    throw new Error(error)
  }
}

/* Regex Queries */
export interface FetchRegexFilteredData<T = string> {
  city?: T
  car?: T
  email?: T
  quote?: T
}

export const fetchRegexFilteredData = async (filters?: FetchRegexFilteredData) => {
  try {
    const { city, email, quote, car } = filters || {}

    const regexFilters: FetchRegexFilteredData<RegExp> = {}

    if (city) regexFilters.city = new RegExp(city)
    if (car) regexFilters.car = new RegExp(car)
    if (email) regexFilters.email = new RegExp(email)
    if (quote) regexFilters.quote = new RegExp(quote)

    const data = await Data.find(regexFilters)

    return data
  } catch (error) {
    throw new Error(error)
  }
}

/* Specific Queries */
// 1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
export const fetchIncomeLowerThanFiveAndCarBMWOrMercedes = async () => {
  try {
    const data = await Data.find({
      income: { $lt: 5 },
      car_brand: { $in: ["BMW", "Mercedes"] },
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

// 2. Male Users which have phone price greater than 10,000.
export const fetchMaleUsersWithPhonePriceMorethanTenThousand = async () => {
  try {
    const data = Data.find({
      gender: "Male",
      phone_price: { $gt: 10000 },
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

// 3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
export const fetchUsersWithLastNameStartingWithMAndQuoteLengthGreaterThanFifteenAndEmailIncludesLastName =
  async () => {
    try {
      const data = Data.find({
        last_name: { $regex: /^M/i },
        email: { $regex: `.*${"last_name"}.*` },
        $where: `this.quote.length > 15`,
      })

      return data
    } catch (error) {
      throw new Error(error)
    }
  }

// 4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
export const fetchUsersWithCarBMWMercedesAudiAndEmailIsAlpha = async () => {
  try {
    const data = Data.find({
      car_brand: { $in: ["BMW", "Mercedes", "Audi"] },
      email: { $not: /\d/ },
    })

    return data
  } catch (error) {
    throw new Error(error)
  }
}

// 5. Show the data of top 10 cities which have the highest number of users and their average income.
export const fetchTopTenCitiesWithHighestNumberofUsersAndAvgIncome = async () => {
  try {
    const data = Data.aggregate([
      {
        $group: {
          _id: "$city",
          count: { $sum: 1 },
          average_income: { $avg: "$income" },
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
      {
        $limit: 10,
      },
    ])

    return data
  } catch (error) {
    throw new Error(error)
  }
}
