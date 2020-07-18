import users from "./users";

const _interface = `
  ${users._interface}
  interface IPagination {
    count: Int!
  }
`;
export default _interface;
