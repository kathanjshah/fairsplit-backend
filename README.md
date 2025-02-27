# FairSplit Backend

FairSplit is a backend API built with Node.js, GraphQL (Apollo), and PostgreSQL using Sequelize ORM. This backend enables users to manage shared expenses efficiently.

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [PostgreSQL](https://www.postgresql.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/fairsplit-backend.git
   cd fairsplit-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your `.env` file with the following variables:
   ```env
   POSTGRES_USER=your_user
   POSTGRES_PASSWORD=your_password
   POSTGRES_DB=your_database
   POSTGRES_HOST=localhost
   POSTGRES_PORT=5432
   ```

### Database Setup

Since this is the first time running the database, follow these steps:

1. **Enable Table Creation:**
   - Open `db.js`
   - Uncomment the following code:
     ```js
     // await sequelize.sync({ alter: true });
     ```
2. **Run the database connection test:**
   ```sh
   node <path_to_testConnection>/testConnection.js
   ```
3. **Re-disable Table Creation:**
   - Open `db.js` again
   - Re-comment the `sequelize.sync({ alter: true })` line to prevent accidental schema modifications in production.

### Start the Backend

Run the server with:
```sh
npm run start
```

The Apollo Server will be available at:
```
http://localhost:4000/graphql
```

### Testing Queries and Mutations
Use the Apollo Sandbox or Postman to test GraphQL queries and mutations.

## 📂 Project Structure
```
├── src
│   ├── models/            # Sequelize models
│   ├── schema/            # GraphQL schema and resolvers
│   ├── db.js              # Database connection setup
│   ├── index.js           # Main entry point
│   ├── testConnection.js  # Script to verify database connection
├── .env                   # Environment variables
├── package.json           # Dependencies and scripts
├── README.md              # Project documentation
```

## ❓ Troubleshooting
- **Database connection fails?** Check your `.env` file and ensure PostgreSQL is running.
- **Cannot read properties of undefined?** Ensure models are correctly initialized and passed to resolvers.
- **GraphQL errors?** Debug using `console.log()` inside resolvers to inspect data.

## 💡 Contributing
Feel free to fork the repo, create a new branch, and submit a pull request.

---

This guide should help you get started quickly with the FairSplit backend. 🚀

