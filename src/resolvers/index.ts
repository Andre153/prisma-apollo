import { Resolvers } from "../generated/graphqlgen";

import { Investor } from "./Investor";
import { AuthUser } from "./AuthUser";
import { Investment } from "./Investment";

export const resolvers: Resolvers = {
  Investor,
  AuthUser,
  Investment
};
