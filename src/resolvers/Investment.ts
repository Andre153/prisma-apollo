import { InvestmentResolvers } from "../generated/graphqlgen";

export const Investment: InvestmentResolvers.Type = {
  ...InvestmentResolvers.defaultResolvers,

  investor: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
