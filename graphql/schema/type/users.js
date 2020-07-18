const type = `
type normalUser implements User {
  id: Int!
  username: String!
  password: String!
  nickname: String
  isAdmin: Boolean!
  deleted: Boolean!
  createdAt: String
  updatedAt: String
}

type adminUser implements User {
  id: Int!
  username: String!
  nickname: String
  isAdmin: Boolean!
  deleted: Boolean!
  createdAt: String
  updatedAt: String
}

union Users = normalUser | adminUser

type GetUsers implements IPagination {
  count: Int!
  rows: [Users]
}
`;
export default { type };
