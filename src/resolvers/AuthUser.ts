import { AuthUserResolvers } from "../generated/graphqlgen";

export const AuthUser: AuthUserResolvers.Type = {
  ...AuthUserResolvers.defaultResolvers
};
