export const transactionResolvers = {
    Query: {
      async getTransaction(_, { id }, { models }) {
        return await models.Transaction.findByPk(id);
      },
      async getAllTransactions(_, __, { models }) {
        return await models.Transaction.findAll();
      },
    },
    Mutation: {
      async createTransaction(_, { payeeId, payerId, amount, expenseId }, { models }) {
        return await models.Transaction.create({ payeeId, payerId, amount, expenseId });
      },
      async updateTransaction(_, { id, ...updates }, { models }) {
        const transaction = await models.Transaction.findByPk(id);
        if (!transaction) throw new Error("Transaction not found");
        await transaction.update(updates);
        return transaction;
      },
      async deleteTransaction(_, { id }, { models }) {
        const transaction = await models.Transaction.findByPk(id);
        if (!transaction) throw new Error("Transaction not found");
        await transaction.destroy();
        return true;
      },
    },
  };
  