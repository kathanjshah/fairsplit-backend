import { gql } from "apollo-server";

export const transactionTypeDefs = gql`
type Transaction {
  id: ID!
  payee: User!  
  payer: User! 
  amount: Float!
  expense: Expense!  
  createdAt: String!
  updatedAt: String!
}
`;

