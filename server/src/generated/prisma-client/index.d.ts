// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  post: (where?: PostWhereInput) => Promise<boolean>;
  question: (where?: QuestionWhereInput) => Promise<boolean>;
  vote: (where?: VoteWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  post: (where: PostWhereUniqueInput) => PostNullablePromise;
  posts: (args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Post>;
  postsConnection: (args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PostConnectionPromise;
  question: (where: QuestionWhereUniqueInput) => QuestionNullablePromise;
  questions: (args?: {
    where?: QuestionWhereInput;
    orderBy?: QuestionOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Question>;
  questionsConnection: (args?: {
    where?: QuestionWhereInput;
    orderBy?: QuestionOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => QuestionConnectionPromise;
  vote: (where: VoteWhereUniqueInput) => VoteNullablePromise;
  votes: (args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Vote>;
  votesConnection: (args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => VoteConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPost: (data: PostCreateInput) => PostPromise;
  updatePost: (args: {
    data: PostUpdateInput;
    where: PostWhereUniqueInput;
  }) => PostPromise;
  updateManyPosts: (args: {
    data: PostUpdateManyMutationInput;
    where?: PostWhereInput;
  }) => BatchPayloadPromise;
  upsertPost: (args: {
    where: PostWhereUniqueInput;
    create: PostCreateInput;
    update: PostUpdateInput;
  }) => PostPromise;
  deletePost: (where: PostWhereUniqueInput) => PostPromise;
  deleteManyPosts: (where?: PostWhereInput) => BatchPayloadPromise;
  createQuestion: (data: QuestionCreateInput) => QuestionPromise;
  updateQuestion: (args: {
    data: QuestionUpdateInput;
    where: QuestionWhereUniqueInput;
  }) => QuestionPromise;
  updateManyQuestions: (args: {
    data: QuestionUpdateManyMutationInput;
    where?: QuestionWhereInput;
  }) => BatchPayloadPromise;
  upsertQuestion: (args: {
    where: QuestionWhereUniqueInput;
    create: QuestionCreateInput;
    update: QuestionUpdateInput;
  }) => QuestionPromise;
  deleteQuestion: (where: QuestionWhereUniqueInput) => QuestionPromise;
  deleteManyQuestions: (where?: QuestionWhereInput) => BatchPayloadPromise;
  createVote: (data: VoteCreateInput) => VotePromise;
  updateVote: (args: {
    data: VoteUpdateInput;
    where: VoteWhereUniqueInput;
  }) => VotePromise;
  updateManyVotes: (args: {
    data: VoteUpdateManyMutationInput;
    where?: VoteWhereInput;
  }) => BatchPayloadPromise;
  upsertVote: (args: {
    where: VoteWhereUniqueInput;
    create: VoteCreateInput;
    update: VoteUpdateInput;
  }) => VotePromise;
  deleteVote: (where: VoteWhereUniqueInput) => VotePromise;
  deleteManyVotes: (where?: VoteWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  post: (
    where?: PostSubscriptionWhereInput
  ) => PostSubscriptionPayloadSubscription;
  question: (
    where?: QuestionSubscriptionWhereInput
  ) => QuestionSubscriptionPayloadSubscription;
  vote: (
    where?: VoteSubscriptionWhereInput
  ) => VoteSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type PostOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "published_ASC"
  | "published_DESC"
  | "title_ASC"
  | "title_DESC"
  | "content_ASC"
  | "content_DESC";

export type QuestionOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "options_ASC"
  | "options_DESC"
  | "title_ASC"
  | "title_DESC";

export type VoteOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "question_ASC"
  | "question_DESC"
  | "value_ASC"
  | "value_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type PostWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface PostWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  published?: Maybe<Boolean>;
  published_not?: Maybe<Boolean>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  content?: Maybe<String>;
  content_not?: Maybe<String>;
  content_in?: Maybe<String[] | String>;
  content_not_in?: Maybe<String[] | String>;
  content_lt?: Maybe<String>;
  content_lte?: Maybe<String>;
  content_gt?: Maybe<String>;
  content_gte?: Maybe<String>;
  content_contains?: Maybe<String>;
  content_not_contains?: Maybe<String>;
  content_starts_with?: Maybe<String>;
  content_not_starts_with?: Maybe<String>;
  content_ends_with?: Maybe<String>;
  content_not_ends_with?: Maybe<String>;
  AND?: Maybe<PostWhereInput[] | PostWhereInput>;
  OR?: Maybe<PostWhereInput[] | PostWhereInput>;
  NOT?: Maybe<PostWhereInput[] | PostWhereInput>;
}

export type QuestionWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface QuestionWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  options?: Maybe<String>;
  options_not?: Maybe<String>;
  options_in?: Maybe<String[] | String>;
  options_not_in?: Maybe<String[] | String>;
  options_lt?: Maybe<String>;
  options_lte?: Maybe<String>;
  options_gt?: Maybe<String>;
  options_gte?: Maybe<String>;
  options_contains?: Maybe<String>;
  options_not_contains?: Maybe<String>;
  options_starts_with?: Maybe<String>;
  options_not_starts_with?: Maybe<String>;
  options_ends_with?: Maybe<String>;
  options_not_ends_with?: Maybe<String>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  AND?: Maybe<QuestionWhereInput[] | QuestionWhereInput>;
  OR?: Maybe<QuestionWhereInput[] | QuestionWhereInput>;
  NOT?: Maybe<QuestionWhereInput[] | QuestionWhereInput>;
}

export type VoteWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface VoteWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  question?: Maybe<String>;
  question_not?: Maybe<String>;
  question_in?: Maybe<String[] | String>;
  question_not_in?: Maybe<String[] | String>;
  question_lt?: Maybe<String>;
  question_lte?: Maybe<String>;
  question_gt?: Maybe<String>;
  question_gte?: Maybe<String>;
  question_contains?: Maybe<String>;
  question_not_contains?: Maybe<String>;
  question_starts_with?: Maybe<String>;
  question_not_starts_with?: Maybe<String>;
  question_ends_with?: Maybe<String>;
  question_not_ends_with?: Maybe<String>;
  value?: Maybe<String>;
  value_not?: Maybe<String>;
  value_in?: Maybe<String[] | String>;
  value_not_in?: Maybe<String[] | String>;
  value_lt?: Maybe<String>;
  value_lte?: Maybe<String>;
  value_gt?: Maybe<String>;
  value_gte?: Maybe<String>;
  value_contains?: Maybe<String>;
  value_not_contains?: Maybe<String>;
  value_starts_with?: Maybe<String>;
  value_not_starts_with?: Maybe<String>;
  value_ends_with?: Maybe<String>;
  value_not_ends_with?: Maybe<String>;
  AND?: Maybe<VoteWhereInput[] | VoteWhereInput>;
  OR?: Maybe<VoteWhereInput[] | VoteWhereInput>;
  NOT?: Maybe<VoteWhereInput[] | VoteWhereInput>;
}

export interface PostCreateInput {
  id?: Maybe<ID_Input>;
  published?: Maybe<Boolean>;
  title: String;
  content: String;
}

export interface PostUpdateInput {
  published?: Maybe<Boolean>;
  title?: Maybe<String>;
  content?: Maybe<String>;
}

export interface PostUpdateManyMutationInput {
  published?: Maybe<Boolean>;
  title?: Maybe<String>;
  content?: Maybe<String>;
}

export interface QuestionCreateInput {
  id?: Maybe<ID_Input>;
  options: String;
  title: String;
}

export interface QuestionUpdateInput {
  options?: Maybe<String>;
  title?: Maybe<String>;
}

export interface QuestionUpdateManyMutationInput {
  options?: Maybe<String>;
  title?: Maybe<String>;
}

export interface VoteCreateInput {
  id?: Maybe<ID_Input>;
  question?: Maybe<String>;
  value: String;
}

export interface VoteUpdateInput {
  question?: Maybe<String>;
  value?: Maybe<String>;
}

export interface VoteUpdateManyMutationInput {
  question?: Maybe<String>;
  value?: Maybe<String>;
}

export interface PostSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PostWhereInput>;
  AND?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
  OR?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
  NOT?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
}

export interface QuestionSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<QuestionWhereInput>;
  AND?: Maybe<
    QuestionSubscriptionWhereInput[] | QuestionSubscriptionWhereInput
  >;
  OR?: Maybe<QuestionSubscriptionWhereInput[] | QuestionSubscriptionWhereInput>;
  NOT?: Maybe<
    QuestionSubscriptionWhereInput[] | QuestionSubscriptionWhereInput
  >;
}

export interface VoteSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<VoteWhereInput>;
  AND?: Maybe<VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput>;
  OR?: Maybe<VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput>;
  NOT?: Maybe<VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Post {
  id: ID_Output;
  published: Boolean;
  title: String;
  content: String;
}

export interface PostPromise extends Promise<Post>, Fragmentable {
  id: () => Promise<ID_Output>;
  published: () => Promise<Boolean>;
  title: () => Promise<String>;
  content: () => Promise<String>;
}

export interface PostSubscription
  extends Promise<AsyncIterator<Post>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  title: () => Promise<AsyncIterator<String>>;
  content: () => Promise<AsyncIterator<String>>;
}

export interface PostNullablePromise
  extends Promise<Post | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  published: () => Promise<Boolean>;
  title: () => Promise<String>;
  content: () => Promise<String>;
}

export interface PostConnection {
  pageInfo: PageInfo;
  edges: PostEdge[];
}

export interface PostConnectionPromise
  extends Promise<PostConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PostEdge>>() => T;
  aggregate: <T = AggregatePostPromise>() => T;
}

export interface PostConnectionSubscription
  extends Promise<AsyncIterator<PostConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PostEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePostSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface PostEdge {
  node: Post;
  cursor: String;
}

export interface PostEdgePromise extends Promise<PostEdge>, Fragmentable {
  node: <T = PostPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PostEdgeSubscription
  extends Promise<AsyncIterator<PostEdge>>,
    Fragmentable {
  node: <T = PostSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePost {
  count: Int;
}

export interface AggregatePostPromise
  extends Promise<AggregatePost>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePostSubscription
  extends Promise<AsyncIterator<AggregatePost>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Question {
  id: ID_Output;
  options: String;
  title: String;
}

export interface QuestionPromise extends Promise<Question>, Fragmentable {
  id: () => Promise<ID_Output>;
  options: () => Promise<String>;
  title: () => Promise<String>;
}

export interface QuestionSubscription
  extends Promise<AsyncIterator<Question>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  options: () => Promise<AsyncIterator<String>>;
  title: () => Promise<AsyncIterator<String>>;
}

export interface QuestionNullablePromise
  extends Promise<Question | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  options: () => Promise<String>;
  title: () => Promise<String>;
}

export interface QuestionConnection {
  pageInfo: PageInfo;
  edges: QuestionEdge[];
}

export interface QuestionConnectionPromise
  extends Promise<QuestionConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<QuestionEdge>>() => T;
  aggregate: <T = AggregateQuestionPromise>() => T;
}

export interface QuestionConnectionSubscription
  extends Promise<AsyncIterator<QuestionConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<QuestionEdgeSubscription>>>() => T;
  aggregate: <T = AggregateQuestionSubscription>() => T;
}

export interface QuestionEdge {
  node: Question;
  cursor: String;
}

export interface QuestionEdgePromise
  extends Promise<QuestionEdge>,
    Fragmentable {
  node: <T = QuestionPromise>() => T;
  cursor: () => Promise<String>;
}

export interface QuestionEdgeSubscription
  extends Promise<AsyncIterator<QuestionEdge>>,
    Fragmentable {
  node: <T = QuestionSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateQuestion {
  count: Int;
}

export interface AggregateQuestionPromise
  extends Promise<AggregateQuestion>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateQuestionSubscription
  extends Promise<AsyncIterator<AggregateQuestion>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Vote {
  id: ID_Output;
  question?: String;
  value: String;
}

export interface VotePromise extends Promise<Vote>, Fragmentable {
  id: () => Promise<ID_Output>;
  question: () => Promise<String>;
  value: () => Promise<String>;
}

export interface VoteSubscription
  extends Promise<AsyncIterator<Vote>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  question: () => Promise<AsyncIterator<String>>;
  value: () => Promise<AsyncIterator<String>>;
}

export interface VoteNullablePromise
  extends Promise<Vote | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  question: () => Promise<String>;
  value: () => Promise<String>;
}

export interface VoteConnection {
  pageInfo: PageInfo;
  edges: VoteEdge[];
}

export interface VoteConnectionPromise
  extends Promise<VoteConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<VoteEdge>>() => T;
  aggregate: <T = AggregateVotePromise>() => T;
}

export interface VoteConnectionSubscription
  extends Promise<AsyncIterator<VoteConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<VoteEdgeSubscription>>>() => T;
  aggregate: <T = AggregateVoteSubscription>() => T;
}

export interface VoteEdge {
  node: Vote;
  cursor: String;
}

export interface VoteEdgePromise extends Promise<VoteEdge>, Fragmentable {
  node: <T = VotePromise>() => T;
  cursor: () => Promise<String>;
}

export interface VoteEdgeSubscription
  extends Promise<AsyncIterator<VoteEdge>>,
    Fragmentable {
  node: <T = VoteSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateVote {
  count: Int;
}

export interface AggregateVotePromise
  extends Promise<AggregateVote>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateVoteSubscription
  extends Promise<AsyncIterator<AggregateVote>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PostSubscriptionPayload {
  mutation: MutationType;
  node: Post;
  updatedFields: String[];
  previousValues: PostPreviousValues;
}

export interface PostSubscriptionPayloadPromise
  extends Promise<PostSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PostPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PostPreviousValuesPromise>() => T;
}

export interface PostSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PostSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PostSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PostPreviousValuesSubscription>() => T;
}

export interface PostPreviousValues {
  id: ID_Output;
  published: Boolean;
  title: String;
  content: String;
}

export interface PostPreviousValuesPromise
  extends Promise<PostPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  published: () => Promise<Boolean>;
  title: () => Promise<String>;
  content: () => Promise<String>;
}

export interface PostPreviousValuesSubscription
  extends Promise<AsyncIterator<PostPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  title: () => Promise<AsyncIterator<String>>;
  content: () => Promise<AsyncIterator<String>>;
}

export interface QuestionSubscriptionPayload {
  mutation: MutationType;
  node: Question;
  updatedFields: String[];
  previousValues: QuestionPreviousValues;
}

export interface QuestionSubscriptionPayloadPromise
  extends Promise<QuestionSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = QuestionPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = QuestionPreviousValuesPromise>() => T;
}

export interface QuestionSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<QuestionSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = QuestionSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = QuestionPreviousValuesSubscription>() => T;
}

export interface QuestionPreviousValues {
  id: ID_Output;
  options: String;
  title: String;
}

export interface QuestionPreviousValuesPromise
  extends Promise<QuestionPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  options: () => Promise<String>;
  title: () => Promise<String>;
}

export interface QuestionPreviousValuesSubscription
  extends Promise<AsyncIterator<QuestionPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  options: () => Promise<AsyncIterator<String>>;
  title: () => Promise<AsyncIterator<String>>;
}

export interface VoteSubscriptionPayload {
  mutation: MutationType;
  node: Vote;
  updatedFields: String[];
  previousValues: VotePreviousValues;
}

export interface VoteSubscriptionPayloadPromise
  extends Promise<VoteSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = VotePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = VotePreviousValuesPromise>() => T;
}

export interface VoteSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<VoteSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = VoteSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = VotePreviousValuesSubscription>() => T;
}

export interface VotePreviousValues {
  id: ID_Output;
  question?: String;
  value: String;
}

export interface VotePreviousValuesPromise
  extends Promise<VotePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  question: () => Promise<String>;
  value: () => Promise<String>;
}

export interface VotePreviousValuesSubscription
  extends Promise<AsyncIterator<VotePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  question: () => Promise<AsyncIterator<String>>;
  value: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Question",
    embedded: false
  },
  {
    name: "Vote",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
