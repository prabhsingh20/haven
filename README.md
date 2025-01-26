# Haven: Hotel Management Application

Haven is a comprehensive hotel management application built for the internal use of staff at a small boutique hotel. Designed to streamline hotel operations, it provides an efficient and user-friendly platform for managing guest bookings, check-ins/check-outs, cabin assignments, and performance analytics.

## Preview

Check out the [live demo](#) (Demo link will be added later)

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How to Clone and Run the Project](#how-to-clone-and-run-the-project)
  - [Prerequisites](#prerequisites)
  - [Steps to Clone and Run](#steps-to-clone-and-run)
- [License](#license)
- [Contributing](#contributing)

Sure! Here’s the brief description in the README format:

---

## Project Description

**Haven** is a user-friendly and efficient hotel management application designed to help staff at boutique hotels streamline their daily operations. From managing guest bookings and check-ins/check-outs to handling room assignments and monitoring hotel performance, Haven provides a seamless experience for staff. Built with React.js and integrated with Supabase for secure authentication and backend services, the app also features interactive analytics dashboards powered by Chart.js. With support for dark and light modes, Haven ensures that staff can manage hotel operations smoothly while providing an intuitive interface for optimal productivity.

---

## Features

- **Guest Management**: Seamlessly manage guest bookings, check-ins, and check-outs.
- **Cabin Management**: Easily track and assign rooms based on availability and statuses.
- **Analytics Dashboard**: Visualize hotel performance with interactive charts and graphs.
- **Dark/Light Mode**: Toggle between dark and light themes for an enhanced user experience.
- **Authentication**: Secure staff login with robust authentication via Supabase.
- **Responsive Design**: Fully responsive interface that adapts to various devices.

## Technologies Used

- **React.js**: Frontend JavaScript library for building user interfaces.
- **Styled Components**: CSS-in-JS solution for styling components.
- **React Query**: Data fetching and state management library.
- **Supabase**: Open-source backend-as-a-service for handling database and authentication.
- **Chart.js**: JavaScript library for rendering interactive and responsive charts.
- **React Hook Form**: Form handling library for easy and scalable form management.

## How to Clone and Run the Project

### Prerequisites

- Ensure you have **Node.js** installed. You can download it from [here](https://nodejs.org/).
- Ensure you have **Git** installed. Download it from [here](https://git-scm.com/).
- You need a **Supabase** account to set up the backend and authentication. Sign up [here](https://supabase.io/).

### Steps to Clone and Run:

1. **Clone the repository**

   ```bash
   git clone https://github.com/prabhsingh20/haven.git
   ```

2. **Navigate to the project directory**

   Change into the project directory by running:

   ```bash
   cd haven
   ```

3. **Install dependencies**

   Run the following command to install all required dependencies:

   ```bash
   npm install
   ```

4. **Set up Supabase**

   - Create a new project on Supabase and set up the database and authentication API keys.
   - Update the `.env` file with your Supabase credentials.

5. **Start the development server**

   Once the dependencies are installed and the environment is set up, start the application with:

   ```bash
   npm start
   ```

   The application will be running at `http://localhost:3000`.

---

## Core Dependencies

- **React.js**: Frontend JavaScript library for building user interfaces.
- **Styled Components**: Styled Components for managing CSS in JavaScript.
- **React Query**: Fetching and caching server data efficiently.
- **Supabase**: Backend-as-a-service for database and authentication.
- **Chart.js**: Library for creating interactive and responsive charts.
- **React Hook Form**: Library for managing form handling in React.

For a full list of dependencies, check the `package.json` file.

## Contributing

✨ We welcome contributions to improve Haven! If you'd like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes.
4. Run tests (if applicable) and ensure everything works.
5. Commit your changes and push them to your forked repository.
6. Open a Pull Request to the main repository.

Please make sure to adhere to the project's coding standards and write meaningful commit messages. If you're unsure about anything, feel free to ask!

## Testing

Testing for this project is encouraged to ensure its stability and functionality. To run tests (if applicable), use:

```bash
npm run test
```

If you'd like to help write or improve tests, feel free to contribute.

## License

This project is open-source and available under the MIT License. You can freely use, modify, and distribute the code. Please see the [LICENSE](./LICENSE) file for more detailed information.
