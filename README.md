# Financial Dashboard Application

## Project Overview
The Financial Dashboard Application is a React.js-based web application designed to provide users with an overview of their financial activities. The application features responsive design and data visualization, enabling users to view their cards, transactions, statistics, and settings across multiple views.

---

## Features

### Dashboard Page
- **My Cards Section**: Displays card details (balance, holder name, partially masked number) with a "See All" button for detailed views.
- **Recent Transactions**: Lists recent transactions with icons, descriptions, dates, and amounts.
- **Weekly Activity Chart**: Bar chart for daily deposit and withdrawal activities.
- **Expense Statistics**: Pie chart showing expense breakdown by category (e.g., Entertainment, Bills, etc.).

### Quick Transfer
- List of frequent transfer contacts with profile pictures, names, and roles.
- Input field for transfer amount and a "Send" button (UI-only functionality).

### Balance History Chart
- Line chart visualizing balance trends over the past months.

### Settings Page
- **Tabs**: "Edit Profile," "Preference," and "Security."
- **Editable Fields**: Name, username, email, password, and addresses.
- Profile picture upload/edit functionality.
- "Save" button to apply changes.

---

## Tech Stack
- **Framework**: React.js
- **State Management**: Redux
- **Styling**: styled-components
- **Charts**: Chart.js and D3.js
- **Routing**: React Router

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or above)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/financial-dashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd financial-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
5. Open your browser and navigate to `http://localhost:3000`.

---

## Deployment

1. Build the project for production:
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```
2. Deploy the build directory to a hosting platform like Vercel, Netlify, or AWS S3.

3. Provide a live demo link for submission.

---

## Project Structure

```
financial-dashboard/
├── public/                # Static assets
├── src/                   # Source code
│   ├── components/        # Reusable components
│   ├── pages/             # Application pages
│   ├── store/             # Redux store and slices
│   ├── styles/            # Global and component-specific styles
│   └── App.js             # Main App component
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

---

## Assumptions
- The application uses mock API endpoints for fetching user data.
- Charts dynamically update based on provided data.
- Accessibility and cross-browser compatibility have been considered.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact
For any queries, feel free to contact:
- **Email**: your-email@example.com
- **GitHub**: [your-github-profile](https://github.com/your-github-profile)
