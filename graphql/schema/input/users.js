export default `
input CreateUser {
  username: String!
  password: String!
  nickname: String
}

input UpdateUser {
  id: ID!
  password: String
  nickname: String
  isAdmin: Boolean
}
`;

// Input type은 세 개이상일 때, 사용
