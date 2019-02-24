// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { InvestmentResolvers } from "../graphqlgen";

export const Investment: InvestmentResolvers.Type = {
  ...InvestmentResolvers.defaultResolvers,

  investor: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
