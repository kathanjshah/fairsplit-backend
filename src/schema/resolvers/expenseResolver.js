export const expenseResolvers = {
    Query: {
      async getExpense(_, { id }, { models }) {
        return await models.Expense.findByPk(id);
      },
      async getAllExpenses(_, __, { models }) {
        return await models.Expense.findAll();
      },
    },
    Mutation: {
      async createExpense(_, { amountPaid, creatorId, contributionCount }, { models }) {
        const newExpense = await models.Expense.create({ amountPaid, creatorId, contributionCount });
        return await models.Expense.findByPk(newExpense.id, {
            include: [{ model: models.User, as: "creator" }],
          });
      },
      async updateExpense(_, { id, ...updates }, { models }) {
        const expense = await models.Expense.findByPk(id);
        if (!expense) throw new Error("Expense not found");
        await expense.update(updates);
        return expense;
      },
      async deleteExpense(_, { id }, { models }) {
        const expense = await models.Expense.findByPk(id);
        if (!expense) throw new Error("Expense not found");
        await expense.destroy();
        return true;
      },
    },
  };
  