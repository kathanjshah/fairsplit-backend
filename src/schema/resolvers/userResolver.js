export const userResolvers = {
    Query: {
      async getUser(_, { id }, { models }) {
        return await models.User.findByPk(id);
      },
      async getAllUsers(_, __, { models }) {
        return await models.User.findAll();
      },
    },
    Mutation: {
      async createUser(_, { email, firstName, lastName }, { models }) {
        return await models.User.create({ email, firstName, lastName });
      },
      async updateUser(_, { id, ...updates }, { models }) {
        const user = await models.User.findByPk(id);
        if (!user) throw new Error("User not found");
        await user.update(updates);
        return user;
      },
      async deleteUser(_, { id }, { models }) {
        const user = await models.User.findByPk(id);
        if (!user) throw new Error("User not found");
        await user.destroy();
        return true;
      },
    },
  };
  