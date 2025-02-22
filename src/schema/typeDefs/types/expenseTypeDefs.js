import { gql } from "apollo-server";

export const expenseTypeDefs = gql`
  type Expense {
  id: ID!
  amountPaid: Float!
  creator: User!
  contributionCount: Int!
}
`;
