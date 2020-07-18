import usersQuery from "./resolvers/query/users";
import usersMutation from "./resolvers/mutation/users";

import postsQuery from "./resolvers/query/posts";
import postsMutation from "./resolvers/mutation/posts";

const resolvers = {
  Users: {
    __resolveType(user, context, info) {
      return user.isAdmin
        ? info.schema.getType("adminUser")
        : info.schema.getType("normalUser");
    }
  },
  Query: { ...usersQuery, ...postsQuery },
  Mutation: { ...usersMutation, ...postsMutation }
};

export default resolvers;
