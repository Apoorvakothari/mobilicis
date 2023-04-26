## Introduction

The source code for Mobilicis is available on GitHub: https://github.com/Apoorvakothari/mobilicis
Mobilicis is hosted on Vercel, and can be accessed at the following URL: https://mobilicis-nu.vercel.app/

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

## Code explanations

The entire project is a monorepo consisting of a frontend built using Next.js with tailwind css and a backend written in Node-Express and a Mongo Database

### Project Structure

**Frontend**
The frontend folder contains the main source code for the frontend application. This includes the pages, components, styles, and utility functions.

- pages: Contains the different pages of the frontend application, each represented by a separate file.
- components: Contains reusable React components that are used throughout the frontend application.
- styles: Contains the global styles for the frontend application.
- hooks: Contains custom React hooks used by the frontend application
- utils: Contains utility functions and modules that are used throughout the project, such as database connection functions and data processing functions.
- interface: Contains TypeScript interfaces used throughout the frontend application.

**Backend**
The backend folder contains the main source code for the backend API. This includes the routes, controllers, models, and database connection functions.

- config: Contains the application configuration files
- routes: Defines the API routes, with each route having a corresponding controller function defined in the controllers folder.
- controllers: Processes the data apply thr business logic and returns it to the client in the correct format.
- services: Contains services used by the backend server to interact with external entities like Database and other APIs
- models: Defines the structure of the data and provides methods for interacting with the database.
- utils: Contains utility functions and modules that are used throughout the project, such as database connection functions and data processing functions.

### Technology Stack

The project is built with the following technologies:

- Next.js: Next.js is a popular React framework that offers server-side rendering and other performance optimizations out of the box, making it a great choice for building high-performance web applications.
- Tailwind: Tailwind CSS is a utility-first CSS framework that offers a lot of pre-defined styles and classes, making it easy to style components without writing custom CSS.
- Typescript: TypeScript is a typed superset of JavaScript that offers static type checking, making it easier to catch errors during development and improve code maintainability.
- TanStack: TanStack is a set of open source technologies including React, TypeScript, GraphQL, and Prisma, which together provide an efficient and streamlined way to build scalable web applications.
- Node.js: Node.js is a popular server-side JavaScript runtime that offers a non-blocking I/O model and a rich ecosystem of third-party libraries, making it a great choice for building scalable web applications.
- Express.js: Express.js is a minimalist web framework for Node.js that provides a lot of flexibility and a rich set of features for building web applications.
- MongoDB: Mongo is a popular NoSQL database that offers high performance, scalability, and flexibility, making it a great choice for storing and managing large amounts of unstructured data. Here it is used to store the sample data provided in the "sample_data.json" file, which is then used to fetch specific data based on the requirements given in the task.
