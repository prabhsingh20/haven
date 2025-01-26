# Haven: Hotel Management Application

## Project Overview

**Haven** is a comprehensive hotel management application designed to streamline operations for staff at a small boutique hotel. This intuitive system handles guest bookings, check-ins/check-outs, cabin management, and offers insightful analytics to enhance operational efficiency. The system allows staff to seamlessly manage hotel operations while ensuring an exceptional guest experience.

With a sleek and modern interface, Haven supports both light and dark modes, secure staff authentication, and is powered by cutting-edge technologies like React.js, Supabase, and Chart.js.

## Features

- **Guest Management**: Easily manage guest bookings, track check-ins, and handle check-outs.
- **Cabin Management**: Effortlessly manage room availability, statuses, and room assignments.
- **Analytics Dashboard**: Interactive charts and graphs to analyze hotel performance.
- **Dark/Light Mode**: Toggle between dark and light modes to enhance readability based on user preferences.
- **Authentication**: Secure staff login with robust authentication mechanisms.
- **Responsive Design**: Fully responsive and user-friendly interface for all devices.

## Technologies Used

- **React.js**: Frontend JavaScript library for building user interfaces.
- **Styled Components**: Library for writing scoped CSS within JavaScript.
- **React Query**: Data fetching and state management library for efficient server state synchronization.
- **Supabase**: Open-source backend-as-a-service for database management, authentication, and storage.
- **Chart.js**: JavaScript charting library to display interactive and responsive charts.
- **React Hook Form**: Library for handling form validation and submissions in React.

## How to Clone and Run the Project

### Prerequisites

- Ensure you have **Node.js** installed. You can download it from [here](https://nodejs.org/).
- You should have **Git** installed. Download it from [here](https://git-scm.com/).
- You need a **Supabase** account to set up the backend and authentication. You can sign up [here](https://supabase.io/).

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

   Run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

4. **Set up Supabase**

   - Create a new project in Supabase and configure the database, authentication, and API keys.
   - Update your environment variables (e.g., `.env`) with your Supabase credentials.

5. **Start the development server**

   Once the dependencies are installed and the environment variables are set, start the app by running:

   ```bash
   npm start
   ```

   The application will be running at `http://localhost:3000`.

---

## Core Dependencies

- **React.js**: Frontend JavaScript library for building user interfaces.
- **Styled Components**: Styled Components for managing CSS in JavaScript.
- **React Query**: Fetching and caching server data efficiently.
- **Supabase**: Database and authentication services.
- **Chart.js**: Library for creating interactive and responsive charts.
- **React Hook Form**: Library for form handling in React.

For a complete list of dependencies, check the `package.json` file.

## Contributing

✨ We welcome contributions to improve Haven! If you'd like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes.
4. Run tests (if applicable) and ensure everything works.
5. Commit your changes and push to your forked repository.
6. Open a Pull Request to the main repository.

Please ensure to adhere to the project's coding standards, and write meaningful commit messages. If you're unsure about anything, feel free to ask!

## Testing

Testing for this project is encouraged to ensure its robustness. You can run tests with the following command (if applicable):

```bash
npm run test
```

If you’d like to help write or improve tests, please feel free to contribute.

## License

This project is open-source and available under the MIT License. You can freely use, modify, and distribute the code. Please see the [LICENSE](./LICENSE) file for more detailed information.
