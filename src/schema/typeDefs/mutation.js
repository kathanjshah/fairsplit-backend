import { gql } from "apollo-server-express";

export const mutation = gql`
  type Mutation {
    # User Mutations
    createUser(email: String!, firstName: String!, lastName: String!): User!
    updateUser(id: ID!, email: String, firstName: String, lastName: String): User!
    deleteUser(id: ID!): Boolean!

    # Expense Mutations
    createExpense(amountPaid: Float!, creatorId: ID!, contributionCount: Int!): Expense!
    updateExpense(id: ID!, amountPaid: Float, contributionCount: Int): Expense!
    deleteExpense(id: ID!): Boolean!

    # Transaction Mutations
    createTransaction(payeeId: ID!, payerId: ID!, amount: Float!, expenseId: ID!): Transaction!
    updateTransaction(id: ID!, payeeId: ID, payerId: ID, amount: Float, expenseId: ID): Transaction!
    deleteTransaction(id: ID!): Boolean!
  }
`;
