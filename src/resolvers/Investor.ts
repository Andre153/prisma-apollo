import { InvestorResolvers } from "../generated/graphqlgen";

export const Investor: InvestorResolvers.Type = {
  ...InvestorResolvers.defaultResolvers,

  auth: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  investments: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
