export const typeDefs = /* GraphQL */ `type AggregateAuthUser {
  count: Int!
}

type AggregateInvestment {
  count: Int!
}

type AggregateInvestor {
  count: Int!
}

type AuthUser {
  id: ID!
  token: String!
  isActive: Boolean!
}

type AuthUserConnection {
  pageInfo: PageInfo!
  edges: [AuthUserEdge]!
  aggregate: AggregateAuthUser!
}

input AuthUserCreateInput {
  token: String!
  isActive: Boolean!
}

input AuthUserCreateOneInput {
  create: AuthUserCreateInput
  connect: AuthUserWhereUniqueInput
}

type AuthUserEdge {
  node: AuthUser!
  cursor: String!
}

enum AuthUserOrderByInput {
  id_ASC
  id_DESC
  token_ASC
  token_DESC
  isActive_ASC
  isActive_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AuthUserPreviousValues {
  id: ID!
  token: String!
  isActive: Boolean!
}

type AuthUserSubscriptionPayload {
  mutation: MutationType!
  node: AuthUser
  updatedFields: [String!]
  previousValues: AuthUserPreviousValues
}

input AuthUserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AuthUserWhereInput
  AND: [AuthUserSubscriptionWhereInput!]
  OR: [AuthUserSubscriptionWhereInput!]
  NOT: [AuthUserSubscriptionWhereInput!]
}

input AuthUserUpdateDataInput {
  token: String
  isActive: Boolean
}

input AuthUserUpdateInput {
  token: String
  isActive: Boolean
}

input AuthUserUpdateManyMutationInput {
  token: String
  isActive: Boolean
}

input AuthUserUpdateOneRequiredInput {
  create: AuthUserCreateInput
  update: AuthUserUpdateDataInput
  upsert: AuthUserUpsertNestedInput
  connect: AuthUserWhereUniqueInput
}

input AuthUserUpsertNestedInput {
  update: AuthUserUpdateDataInput!
  create: AuthUserCreateInput!
}

input AuthUserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  isActive: Boolean
  isActive_not: Boolean
  AND: [AuthUserWhereInput!]
  OR: [AuthUserWhereInput!]
  NOT: [AuthUserWhereInput!]
}

input AuthUserWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type Investment {
  id: ID!
  companyName: String!
  shareAmount: Float!
  amountPerShare: Float!
  investor: Investor!
}

type InvestmentConnection {
  pageInfo: PageInfo!
  edges: [InvestmentEdge]!
  aggregate: AggregateInvestment!
}

input InvestmentCreateInput {
  companyName: String!
  shareAmount: Float!
  amountPerShare: Float!
  investor: InvestorCreateOneWithoutInvestmentsInput!
}

input InvestmentCreateManyWithoutInvestorInput {
  create: [InvestmentCreateWithoutInvestorInput!]
  connect: [InvestmentWhereUniqueInput!]
}

input InvestmentCreateWithoutInvestorInput {
  companyName: String!
  shareAmount: Float!
  amountPerShare: Float!
}

type InvestmentEdge {
  node: Investment!
  cursor: String!
}

enum InvestmentOrderByInput {
  id_ASC
  id_DESC
  companyName_ASC
  companyName_DESC
  shareAmount_ASC
  shareAmount_DESC
  amountPerShare_ASC
  amountPerShare_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type InvestmentPreviousValues {
  id: ID!
  companyName: String!
  shareAmount: Float!
  amountPerShare: Float!
}

input InvestmentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  companyName: String
  companyName_not: String
  companyName_in: [String!]
  companyName_not_in: [String!]
  companyName_lt: String
  companyName_lte: String
  companyName_gt: String
  companyName_gte: String
  companyName_contains: String
  companyName_not_contains: String
  companyName_starts_with: String
  companyName_not_starts_with: String
  companyName_ends_with: String
  companyName_not_ends_with: String
  shareAmount: Float
  shareAmount_not: Float
  shareAmount_in: [Float!]
  shareAmount_not_in: [Float!]
  shareAmount_lt: Float
  shareAmount_lte: Float
  shareAmount_gt: Float
  shareAmount_gte: Float
  amountPerShare: Float
  amountPerShare_not: Float
  amountPerShare_in: [Float!]
  amountPerShare_not_in: [Float!]
  amountPerShare_lt: Float
  amountPerShare_lte: Float
  amountPerShare_gt: Float
  amountPerShare_gte: Float
  AND: [InvestmentScalarWhereInput!]
  OR: [InvestmentScalarWhereInput!]
  NOT: [InvestmentScalarWhereInput!]
}

type InvestmentSubscriptionPayload {
  mutation: MutationType!
  node: Investment
  updatedFields: [String!]
  previousValues: InvestmentPreviousValues
}

input InvestmentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: InvestmentWhereInput
  AND: [InvestmentSubscriptionWhereInput!]
  OR: [InvestmentSubscriptionWhereInput!]
  NOT: [InvestmentSubscriptionWhereInput!]
}

input InvestmentUpdateInput {
  companyName: String
  shareAmount: Float
  amountPerShare: Float
  investor: InvestorUpdateOneRequiredWithoutInvestmentsInput
}

input InvestmentUpdateManyDataInput {
  companyName: String
  shareAmount: Float
  amountPerShare: Float
}

input InvestmentUpdateManyMutationInput {
  companyName: String
  shareAmount: Float
  amountPerShare: Float
}

input InvestmentUpdateManyWithoutInvestorInput {
  create: [InvestmentCreateWithoutInvestorInput!]
  delete: [InvestmentWhereUniqueInput!]
  connect: [InvestmentWhereUniqueInput!]
  disconnect: [InvestmentWhereUniqueInput!]
  update: [InvestmentUpdateWithWhereUniqueWithoutInvestorInput!]
  upsert: [InvestmentUpsertWithWhereUniqueWithoutInvestorInput!]
  deleteMany: [InvestmentScalarWhereInput!]
  updateMany: [InvestmentUpdateManyWithWhereNestedInput!]
}

input InvestmentUpdateManyWithWhereNestedInput {
  where: InvestmentScalarWhereInput!
  data: InvestmentUpdateManyDataInput!
}

input InvestmentUpdateWithoutInvestorDataInput {
  companyName: String
  shareAmount: Float
  amountPerShare: Float
}

input InvestmentUpdateWithWhereUniqueWithoutInvestorInput {
  where: InvestmentWhereUniqueInput!
  data: InvestmentUpdateWithoutInvestorDataInput!
}

input InvestmentUpsertWithWhereUniqueWithoutInvestorInput {
  where: InvestmentWhereUniqueInput!
  update: InvestmentUpdateWithoutInvestorDataInput!
  create: InvestmentCreateWithoutInvestorInput!
}

input InvestmentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  companyName: String
  companyName_not: String
  companyName_in: [String!]
  companyName_not_in: [String!]
  companyName_lt: String
  companyName_lte: String
  companyName_gt: String
  companyName_gte: String
  companyName_contains: String
  companyName_not_contains: String
  companyName_starts_with: String
  companyName_not_starts_with: String
  companyName_ends_with: String
  companyName_not_ends_with: String
  shareAmount: Float
  shareAmount_not: Float
  shareAmount_in: [Float!]
  shareAmount_not_in: [Float!]
  shareAmount_lt: Float
  shareAmount_lte: Float
  shareAmount_gt: Float
  shareAmount_gte: Float
  amountPerShare: Float
  amountPerShare_not: Float
  amountPerShare_in: [Float!]
  amountPerShare_not_in: [Float!]
  amountPerShare_lt: Float
  amountPerShare_lte: Float
  amountPerShare_gt: Float
  amountPerShare_gte: Float
  investor: InvestorWhereInput
  AND: [InvestmentWhereInput!]
  OR: [InvestmentWhereInput!]
  NOT: [InvestmentWhereInput!]
}

input InvestmentWhereUniqueInput {
  id: ID
}

type Investor {
  id: ID!
  auth: AuthUser!
  fistName: String!
  lastName: String!
  investments(where: InvestmentWhereInput, orderBy: InvestmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Investment!]
}

type InvestorConnection {
  pageInfo: PageInfo!
  edges: [InvestorEdge]!
  aggregate: AggregateInvestor!
}

input InvestorCreateInput {
  auth: AuthUserCreateOneInput!
  fistName: String!
  lastName: String!
  investments: InvestmentCreateManyWithoutInvestorInput
}

input InvestorCreateOneWithoutInvestmentsInput {
  create: InvestorCreateWithoutInvestmentsInput
  connect: InvestorWhereUniqueInput
}

input InvestorCreateWithoutInvestmentsInput {
  auth: AuthUserCreateOneInput!
  fistName: String!
  lastName: String!
}

type InvestorEdge {
  node: Investor!
  cursor: String!
}

enum InvestorOrderByInput {
  id_ASC
  id_DESC
  fistName_ASC
  fistName_DESC
  lastName_ASC
  lastName_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type InvestorPreviousValues {
  id: ID!
  fistName: String!
  lastName: String!
}

type InvestorSubscriptionPayload {
  mutation: MutationType!
  node: Investor
  updatedFields: [String!]
  previousValues: InvestorPreviousValues
}

input InvestorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: InvestorWhereInput
  AND: [InvestorSubscriptionWhereInput!]
  OR: [InvestorSubscriptionWhereInput!]
  NOT: [InvestorSubscriptionWhereInput!]
}

input InvestorUpdateInput {
  auth: AuthUserUpdateOneRequiredInput
  fistName: String
  lastName: String
  investments: InvestmentUpdateManyWithoutInvestorInput
}

input InvestorUpdateManyMutationInput {
  fistName: String
  lastName: String
}

input InvestorUpdateOneRequiredWithoutInvestmentsInput {
  create: InvestorCreateWithoutInvestmentsInput
  update: InvestorUpdateWithoutInvestmentsDataInput
  upsert: InvestorUpsertWithoutInvestmentsInput
  connect: InvestorWhereUniqueInput
}

input InvestorUpdateWithoutInvestmentsDataInput {
  auth: AuthUserUpdateOneRequiredInput
  fistName: String
  lastName: String
}

input InvestorUpsertWithoutInvestmentsInput {
  update: InvestorUpdateWithoutInvestmentsDataInput!
  create: InvestorCreateWithoutInvestmentsInput!
}

input InvestorWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  auth: AuthUserWhereInput
  fistName: String
  fistName_not: String
  fistName_in: [String!]
  fistName_not_in: [String!]
  fistName_lt: String
  fistName_lte: String
  fistName_gt: String
  fistName_gte: String
  fistName_contains: String
  fistName_not_contains: String
  fistName_starts_with: String
  fistName_not_starts_with: String
  fistName_ends_with: String
  fistName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  investments_every: InvestmentWhereInput
  investments_some: InvestmentWhereInput
  investments_none: InvestmentWhereInput
  AND: [InvestorWhereInput!]
  OR: [InvestorWhereInput!]
  NOT: [InvestorWhereInput!]
}

input InvestorWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createAuthUser(data: AuthUserCreateInput!): AuthUser!
  updateAuthUser(data: AuthUserUpdateInput!, where: AuthUserWhereUniqueInput!): AuthUser
  updateManyAuthUsers(data: AuthUserUpdateManyMutationInput!, where: AuthUserWhereInput): BatchPayload!
  upsertAuthUser(where: AuthUserWhereUniqueInput!, create: AuthUserCreateInput!, update: AuthUserUpdateInput!): AuthUser!
  deleteAuthUser(where: AuthUserWhereUniqueInput!): AuthUser
  deleteManyAuthUsers(where: AuthUserWhereInput): BatchPayload!
  createInvestment(data: InvestmentCreateInput!): Investment!
  updateInvestment(data: InvestmentUpdateInput!, where: InvestmentWhereUniqueInput!): Investment
  updateManyInvestments(data: InvestmentUpdateManyMutationInput!, where: InvestmentWhereInput): BatchPayload!
  upsertInvestment(where: InvestmentWhereUniqueInput!, create: InvestmentCreateInput!, update: InvestmentUpdateInput!): Investment!
  deleteInvestment(where: InvestmentWhereUniqueInput!): Investment
  deleteManyInvestments(where: InvestmentWhereInput): BatchPayload!
  createInvestor(data: InvestorCreateInput!): Investor!
  updateInvestor(data: InvestorUpdateInput!, where: InvestorWhereUniqueInput!): Investor
  updateManyInvestors(data: InvestorUpdateManyMutationInput!, where: InvestorWhereInput): BatchPayload!
  upsertInvestor(where: InvestorWhereUniqueInput!, create: InvestorCreateInput!, update: InvestorUpdateInput!): Investor!
  deleteInvestor(where: InvestorWhereUniqueInput!): Investor
  deleteManyInvestors(where: InvestorWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  authUser(where: AuthUserWhereUniqueInput!): AuthUser
  authUsers(where: AuthUserWhereInput, orderBy: AuthUserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AuthUser]!
  authUsersConnection(where: AuthUserWhereInput, orderBy: AuthUserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AuthUserConnection!
  investment(where: InvestmentWhereUniqueInput!): Investment
  investments(where: InvestmentWhereInput, orderBy: InvestmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Investment]!
  investmentsConnection(where: InvestmentWhereInput, orderBy: InvestmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InvestmentConnection!
  investor(where: InvestorWhereUniqueInput!): Investor
  investors(where: InvestorWhereInput, orderBy: InvestorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Investor]!
  investorsConnection(where: InvestorWhereInput, orderBy: InvestorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InvestorConnection!
  node(id: ID!): Node
}

type Subscription {
  authUser(where: AuthUserSubscriptionWhereInput): AuthUserSubscriptionPayload
  investment(where: InvestmentSubscriptionWhereInput): InvestmentSubscriptionPayload
  investor(where: InvestorSubscriptionWhereInput): InvestorSubscriptionPayload
}
`