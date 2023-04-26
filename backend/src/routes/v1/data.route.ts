import { Router } from "express"

import {
  getAllData,
  getFilteredData,
  getIncomeLowerThanFiveAndCarBMWOrMercedes,
  getMaleUsersWithPhonePriceMorethanTenThousand,
  getUsersWithLastNameStartingWithMAndQuoteLengthGreaterThanFifteenAndEmailIncludesLastName,
  getUsersWithCarBMWMercedesAudiAndEmailIsAlpha,
  getTopTenCitiesWithHighestNumberofUsersAndAvgIncome,
} from "../../controllers/data.controller"

const router = Router()

/* Read */
router.route("/").get(getAllData)
router.route("/filter").get(getFilteredData)
router.route("/regex").get(getFilteredData)

// 1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
router.get("/users/income-lower-than-5-and-bmw-mercedes", getIncomeLowerThanFiveAndCarBMWOrMercedes)

// 2. Male Users which have phone price greater than 10,000.
router.get(
  "/users/male-phone-price-greater-than-10000",
  getMaleUsersWithPhonePriceMorethanTenThousand
)

// 3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
router.get(
  "/users/last-name-starts-with-M-and-email-includes-last-name",
  getUsersWithLastNameStartingWithMAndQuoteLengthGreaterThanFifteenAndEmailIncludesLastName
)

// 4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
router.get(
  "/users/car-brand-BMW-Mercedes-Audi-and-email-does-not-include-digit",
  getUsersWithCarBMWMercedesAudiAndEmailIsAlpha
)

// 5. Show the data of top 10 cities which have the highest number of users and their average income.
router.get(
  "/users/top-10-cities-highest-number-of-users-and-average-income",
  getTopTenCitiesWithHighestNumberofUsersAndAvgIncome
)

export default router
