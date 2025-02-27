export const setupAssociations = ({ User, Expense, Transaction }) => {
    // User ↔ Expense (One-to-Many)
    User.hasMany(Expense, { foreignKey: "creatorId", as: "creator" });
    Expense.belongsTo(User, { foreignKey: "creatorId", as: "creator" });
  
    // User ↔ Transaction (One-to-Many)
    User.hasMany(Transaction, { foreignKey: "payeeId", as: "Payee" });
    User.hasMany(Transaction, { foreignKey: "payerId", as: "Payer" });
    Transaction.belongsTo(User, { foreignKey: "payeeId", as: "Payee" });
    Transaction.belongsTo(User, { foreignKey: "payerId", as: "Payer" });
  
    // Expense ↔ Transaction (One-to-Many)
    Expense.hasMany(Transaction, { foreignKey: "expenseId" });
    Transaction.belongsTo(Expense, { foreignKey: "expenseId" });
    
    console.log("✅ Associations set up!");

    return {User,Expense,Transaction};

    
  };
