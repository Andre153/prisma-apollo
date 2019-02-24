// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { InvestorResolvers } from "../graphqlgen";

export const Investor: InvestorResolvers.Type = {
  ...InvestorResolvers.defaultResolvers,

  auth: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  investments: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
