## Introduction

The frontend application is built using Next.js and Tailwind, which allows for easy and efficient styling of the web pages. Next.js is a React-based framework that enables server-side rendering, providing better performance and faster load times for the web pages. Tailwind is a CSS framework that provides pre-defined classes for styling, making it easier to design web pages without the need for custom CSS.

The Typescript language is used to provide added type safety to the codebase, which ensures that there are fewer runtime errors and that the code is easier to maintain. ESLint and Prettier are used to maintain a proper code structure, ensuring that the code is consistent and easy to read.

The MongoDB database is used to store the sample data provided in the "sample_data.json" file, which is then used to fetch specific data based on the requirements given in the task. The API routes are designed to be fast and efficient, with the data being fetched and displayed on the frontend in a table format as per the task requirements.

## Configuration

1. First, make sure you have Node.js and npm (Node Package Manager) installed on your computer, You can check this by running the following commands in your terminal:

```
    node -v
    npm -v
```

> Read docs here [Node.js Documentation](https://nodejs.org/en/docs/)

2. Once you have npm installed you can run the following both to install and upgrade Yarn

```
    npm install --global yarn
    yarn --version
```

> Read docs here [Yarn Installation guide](https://classic.yarnpkg.com/lang/en/docs/install)

## Installation

1. Clone the Mobilicis project from GitHub

```
    git clone https://github.com/Apoorvakothari/mobilicis
```

2. Once the project is cloned, navigate into the project directory and run the following command to install all the necessary dependencies:

   $ Terminal 1

   ```
       cd ./frontend
       yarn install
       yarn dev
   ```

   $ Terminal 2

   ```
       cd ./backend
       yarn install
       yarn dev
   ```

> This will start the development server and client and you should be able to see your client running at [`http://localhost:3000`](http://localhost:3000) in your browser and browser at [`http://localhost:5000`](http://localhost:5000) .

## Source Code

The source code for Mobilicis is available on GitHub: https://github.com/Apoorvakothari/mobilicis

The source code for this project is divided into Two folders, with each folder containing different files that serve different purposes.

The src folder contains the main source code for the project, including the API routes, controllers, and database models. The public folder contains the static assets for the frontend application, such as images and fonts.

The components folder contains reusable React components that are used throughout the frontend application. The pages folder contains the different pages of the frontend application, each represented by a separate file.

The utils folder contains utility functions and modules that are used throughout the project, such as database connection functions and data processing functions.

The API routes are defined in the routes folder, with each route having a corresponding controller function defined in the controllers folder. The controllers are responsible for processing the data and returning it to the client in the correct format.

The database models are defined in the models folder, with each model representing a different collection in the MongoDB database. The models define the structure of the data and provide methods for interacting with the database.

## Hostname and URL

Mobilicis is hosted on Vercel, which provides fast and reliable hosting for web applications and can be accessed at the following URL: https://mobilicis-nu.vercel.app/

### Local Development

To run the Mobilicis website locally, follow these steps:

1.Clone the GitHub repository to your local machine.
2.Install the necessary dependencies by running npm install.
3.Start the local development server by running npm run dev.
