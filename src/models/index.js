import UserModel from "./User.js";
import ExpenseModel from "./Expense.js";
import TransactionModel from "./Transaction.js";

export const initializeModels = (sequelize) => {
  const User = UserModel(sequelize);
  const Expense = ExpenseModel(sequelize);
  const Transaction = TransactionModel(sequelize);

  return { User, Expense, Transaction };
};
