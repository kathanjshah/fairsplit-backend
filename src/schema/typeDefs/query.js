import { gql } from "apollo-server-express";

export const query = gql`
  type Query {
    # User Queries
    getUser(id: ID!): User
    getAllUsers: [User!]!

    # Expense Queries
    getExpense(id: ID!): Expense
    getAllExpenses: [Expense!]!

    # Transaction Queries
    getTransaction(id: ID!): Transaction
    getAllTransactions: [Transaction!]!
  }
`;
