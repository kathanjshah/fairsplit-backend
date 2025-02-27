import { userResolvers } from "./userResolver.js";
import { expenseResolvers } from "./expenseResolver.js";
import { transactionResolvers } from "./transactionResolver.js";

export const resolvers = [userResolvers, expenseResolvers,transactionResolvers];