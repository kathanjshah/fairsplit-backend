import { DataTypes } from "sequelize";

const ExpenseModel = (sequelize) => {
  const Expense = sequelize.define(
    "Expense",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      amountPaid: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      creatorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      contributionCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );

  return Expense;
};

export default ExpenseModel;
