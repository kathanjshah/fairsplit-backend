import {mutation} from "./mutation.js";
import {query} from "./query.js";
import {userTypeDefs, expenseTypeDefs, transactionTypeDefs} from "./types";



export const typeDefs = [mutation, query, userTypeDefs, expenseTypeDefs, transactionTypeDefs];