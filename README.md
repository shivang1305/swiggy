# Swiggy Clone

Welcome to the Swiggy Clone repository! This project is a full-stack web application built with React.js, Redux Toolkit, Tailwind CSS, and integrates with Swiggy's live APIs to provide a Swiggy-like experience.

## Screenshots

![Home Page](https://github.com/shivang1305/swiggy/tree/testing/images/HomePage.png?raw=true)
![Restaurant Page](https://github.com/shivang1305/swiggy/tree/testing/images/RestaurantPage.png?raw=true)
![Restaurant Categories](https://github.com/shivang1305/swiggy/tree/testing/images/RestaurantCategories.png?raw=true)
![Location](https://github.com/shivang1305/swiggy/tree/testing/images/Location.png?raw=true)
![Cart Page](https://github.com/shivang1305/swiggy/tree/testing/images/CartPage.png?raw=true)
![Empty Cart](https://github.com/shivang1305/swiggy/tree/testing/images/EmptyCart.png?raw=true)
![Unserviceable Location](https://github.com/shivang1305/swiggy/tree/testing/images/UnserviceableLocation.png?raw=true)

## Features

1. **User Authentication**: User authentication with restricted routing ensures that users can access only the appropriate content.

2. **Real-time Search**: Real-time search functionality allows users to find specific restaurants quickly.

3. **Restaurant Filters**: Apply filters to sort and find restaurants based on your preferences.

4. **Location Selection**: Users can change their location, and the app fetches restaurants based on the selected location.

5. **Cart Management**: The shopping cart is tied to a specific restaurant, enabling a seamless ordering experience.

6. **Payment Gateway Integration**: Integration with a payment gateway for a convenient and secure payment process.

7. **Lazy Loading**: Optimize performance with lazy loading to load resources only when needed.

8. **Testing**: The project includes integration tests and unit tests with 100% code coverage.

## Tech Stack

- **Frontend**: React.js, Redux Toolkit, React Router, Axios, Tailwind CSS
- **Backend**: Swiggy Live APIs
- **Authentication**: JWT (JSON Web Tokens)
- **Testing**: React Testing Library, Jest
- **Deployment**: Netlify (Live/Prod Link: [FoodyMonk](https://foodymonk.netlify.app/))

## Setup

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/swiggy-clone.git
   cd swiggy-clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables: Create a `.env` file and add your API keys or credentials.
4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:1234` to access the application.

## Note:

This project is a clone application created for learning and demonstration purposes. It is not associated with Swiggy and is not intended for commercial use.

Happy coding!
