import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JWT: any;
  Role: any;
  timestamp: any;
};

export type Auth = {
  __typename?: 'Auth';
  /** JWT access token */
  accessToken: Scalars['JWT'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT'];
  user: UserNest;
};

/** columns and relationships of "Bookmark" */
export type Bookmark = {
  __typename?: 'Bookmark';
  /** An object relationship */
  Post?: Maybe<Post>;
  /** An object relationship */
  User?: Maybe<User>;
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  postId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregated selection of "Bookmark" */
export type Bookmark_Aggregate = {
  __typename?: 'Bookmark_aggregate';
  aggregate?: Maybe<Bookmark_Aggregate_Fields>;
  nodes: Array<Bookmark>;
};

export type Bookmark_Aggregate_Bool_Exp = {
  count?: InputMaybe<Bookmark_Aggregate_Bool_Exp_Count>;
};

export type Bookmark_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Bookmark_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Bookmark_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Bookmark" */
export type Bookmark_Aggregate_Fields = {
  __typename?: 'Bookmark_aggregate_fields';
  avg?: Maybe<Bookmark_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bookmark_Max_Fields>;
  min?: Maybe<Bookmark_Min_Fields>;
  stddev?: Maybe<Bookmark_Stddev_Fields>;
  stddev_pop?: Maybe<Bookmark_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bookmark_Stddev_Samp_Fields>;
  sum?: Maybe<Bookmark_Sum_Fields>;
  var_pop?: Maybe<Bookmark_Var_Pop_Fields>;
  var_samp?: Maybe<Bookmark_Var_Samp_Fields>;
  variance?: Maybe<Bookmark_Variance_Fields>;
};


/** aggregate fields of "Bookmark" */
export type Bookmark_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bookmark_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Bookmark" */
export type Bookmark_Aggregate_Order_By = {
  avg?: InputMaybe<Bookmark_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bookmark_Max_Order_By>;
  min?: InputMaybe<Bookmark_Min_Order_By>;
  stddev?: InputMaybe<Bookmark_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bookmark_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bookmark_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bookmark_Sum_Order_By>;
  var_pop?: InputMaybe<Bookmark_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bookmark_Var_Samp_Order_By>;
  variance?: InputMaybe<Bookmark_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Bookmark" */
export type Bookmark_Arr_Rel_Insert_Input = {
  data: Array<Bookmark_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Bookmark_On_Conflict>;
};

/** aggregate avg on columns */
export type Bookmark_Avg_Fields = {
  __typename?: 'Bookmark_avg_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Bookmark" */
export type Bookmark_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Bookmark". All fields are combined with a logical 'AND'. */
export type Bookmark_Bool_Exp = {
  Post?: InputMaybe<Post_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Bookmark_Bool_Exp>>;
  _not?: InputMaybe<Bookmark_Bool_Exp>;
  _or?: InputMaybe<Array<Bookmark_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  postId?: InputMaybe<Int_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Bookmark" */
export enum Bookmark_Constraint {
  /** unique or primary key constraint on columns "id" */
  BookmarkPkey = 'Bookmark_pkey',
  /** unique or primary key constraint on columns "postId", "userId" */
  BookmarkUserIdPostIdKey = 'Bookmark_userId_postId_key'
}

/** input type for incrementing numeric columns in table "Bookmark" */
export type Bookmark_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Bookmark" */
export type Bookmark_Insert_Input = {
  Post?: InputMaybe<Post_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Bookmark_Max_Fields = {
  __typename?: 'Bookmark_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Bookmark" */
export type Bookmark_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bookmark_Min_Fields = {
  __typename?: 'Bookmark_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Bookmark" */
export type Bookmark_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Bookmark" */
export type Bookmark_Mutation_Response = {
  __typename?: 'Bookmark_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Bookmark>;
};

/** on_conflict condition type for table "Bookmark" */
export type Bookmark_On_Conflict = {
  constraint: Bookmark_Constraint;
  update_columns?: Array<Bookmark_Update_Column>;
  where?: InputMaybe<Bookmark_Bool_Exp>;
};

/** Ordering options when selecting data from "Bookmark". */
export type Bookmark_Order_By = {
  Post?: InputMaybe<Post_Order_By>;
  User?: InputMaybe<User_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Bookmark */
export type Bookmark_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Bookmark" */
export enum Bookmark_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'postId',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "Bookmark" */
export type Bookmark_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Bookmark_Stddev_Fields = {
  __typename?: 'Bookmark_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Bookmark" */
export type Bookmark_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Bookmark_Stddev_Pop_Fields = {
  __typename?: 'Bookmark_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Bookmark" */
export type Bookmark_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Bookmark_Stddev_Samp_Fields = {
  __typename?: 'Bookmark_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Bookmark" */
export type Bookmark_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Bookmark" */
export type Bookmark_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bookmark_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bookmark_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Bookmark_Sum_Fields = {
  __typename?: 'Bookmark_sum_fields';
  id?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Bookmark" */
export type Bookmark_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** update columns of table "Bookmark" */
export enum Bookmark_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'postId',
  /** column name */
  UserId = 'userId'
}

export type Bookmark_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Bookmark_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Bookmark_Set_Input>;
  where: Bookmark_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Bookmark_Var_Pop_Fields = {
  __typename?: 'Bookmark_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Bookmark" */
export type Bookmark_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Bookmark_Var_Samp_Fields = {
  __typename?: 'Bookmark_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Bookmark" */
export type Bookmark_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Bookmark_Variance_Fields = {
  __typename?: 'Bookmark_variance_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Bookmark" */
export type Bookmark_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** columns and relationships of "Category" */
export type Category = {
  __typename?: 'Category';
  /** An array relationship */
  Posts: Array<Post>;
  /** An aggregate relationship */
  Posts_aggregate: Post_Aggregate;
  /** An array relationship */
  Sources: Array<Source>;
  /** An aggregate relationship */
  Sources_aggregate: Source_Aggregate;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "Category" */
export type CategoryPostsArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


/** columns and relationships of "Category" */
export type CategoryPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


/** columns and relationships of "Category" */
export type CategorySourcesArgs = {
  distinct_on?: InputMaybe<Array<Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Source_Order_By>>;
  where?: InputMaybe<Source_Bool_Exp>;
};


/** columns and relationships of "Category" */
export type CategorySources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Source_Order_By>>;
  where?: InputMaybe<Source_Bool_Exp>;
};

/** aggregated selection of "Category" */
export type Category_Aggregate = {
  __typename?: 'Category_aggregate';
  aggregate?: Maybe<Category_Aggregate_Fields>;
  nodes: Array<Category>;
};

/** aggregate fields of "Category" */
export type Category_Aggregate_Fields = {
  __typename?: 'Category_aggregate_fields';
  avg?: Maybe<Category_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Category_Max_Fields>;
  min?: Maybe<Category_Min_Fields>;
  stddev?: Maybe<Category_Stddev_Fields>;
  stddev_pop?: Maybe<Category_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Category_Stddev_Samp_Fields>;
  sum?: Maybe<Category_Sum_Fields>;
  var_pop?: Maybe<Category_Var_Pop_Fields>;
  var_samp?: Maybe<Category_Var_Samp_Fields>;
  variance?: Maybe<Category_Variance_Fields>;
};


/** aggregate fields of "Category" */
export type Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Category_Avg_Fields = {
  __typename?: 'Category_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Category". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
  Posts?: InputMaybe<Post_Bool_Exp>;
  Posts_aggregate?: InputMaybe<Post_Aggregate_Bool_Exp>;
  Sources?: InputMaybe<Source_Bool_Exp>;
  Sources_aggregate?: InputMaybe<Source_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Category_Bool_Exp>>;
  _not?: InputMaybe<Category_Bool_Exp>;
  _or?: InputMaybe<Array<Category_Bool_Exp>>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Category" */
export enum Category_Constraint {
  /** unique or primary key constraint on columns "id" */
  CategoryPkey = 'Category_pkey'
}

/** input type for incrementing numeric columns in table "Category" */
export type Category_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Category" */
export type Category_Insert_Input = {
  Posts?: InputMaybe<Post_Arr_Rel_Insert_Input>;
  Sources?: InputMaybe<Source_Arr_Rel_Insert_Input>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Category_Max_Fields = {
  __typename?: 'Category_max_fields';
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Category_Min_Fields = {
  __typename?: 'Category_min_fields';
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Category" */
export type Category_Mutation_Response = {
  __typename?: 'Category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Category>;
};

/** input type for inserting object relation for remote table "Category" */
export type Category_Obj_Rel_Insert_Input = {
  data: Category_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Category_On_Conflict>;
};

/** on_conflict condition type for table "Category" */
export type Category_On_Conflict = {
  constraint: Category_Constraint;
  update_columns?: Array<Category_Update_Column>;
  where?: InputMaybe<Category_Bool_Exp>;
};

/** Ordering options when selecting data from "Category". */
export type Category_Order_By = {
  Posts_aggregate?: InputMaybe<Post_Aggregate_Order_By>;
  Sources_aggregate?: InputMaybe<Source_Aggregate_Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Category */
export type Category_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Category" */
export enum Category_Select_Column {
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "Category" */
export type Category_Set_Input = {
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Category_Stddev_Fields = {
  __typename?: 'Category_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Category_Stddev_Pop_Fields = {
  __typename?: 'Category_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Category_Stddev_Samp_Fields = {
  __typename?: 'Category_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "Category" */
export type Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Category_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Category_Stream_Cursor_Value_Input = {
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Category_Sum_Fields = {
  __typename?: 'Category_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "Category" */
export enum Category_Update_Column {
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Category_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Category_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Category_Set_Input>;
  where: Category_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Category_Var_Pop_Fields = {
  __typename?: 'Category_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Category_Var_Samp_Fields = {
  __typename?: 'Category_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Category_Variance_Fields = {
  __typename?: 'Category_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

/** columns and relationships of "Comment" */
export type Comment = {
  __typename?: 'Comment';
  /** An object relationship */
  Post?: Maybe<Post>;
  /** An object relationship */
  User?: Maybe<User>;
  content: Scalars['String'];
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  postId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregated selection of "Comment" */
export type Comment_Aggregate = {
  __typename?: 'Comment_aggregate';
  aggregate?: Maybe<Comment_Aggregate_Fields>;
  nodes: Array<Comment>;
};

export type Comment_Aggregate_Bool_Exp = {
  count?: InputMaybe<Comment_Aggregate_Bool_Exp_Count>;
};

export type Comment_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Comment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Comment_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Comment" */
export type Comment_Aggregate_Fields = {
  __typename?: 'Comment_aggregate_fields';
  avg?: Maybe<Comment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Comment_Max_Fields>;
  min?: Maybe<Comment_Min_Fields>;
  stddev?: Maybe<Comment_Stddev_Fields>;
  stddev_pop?: Maybe<Comment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comment_Stddev_Samp_Fields>;
  sum?: Maybe<Comment_Sum_Fields>;
  var_pop?: Maybe<Comment_Var_Pop_Fields>;
  var_samp?: Maybe<Comment_Var_Samp_Fields>;
  variance?: Maybe<Comment_Variance_Fields>;
};


/** aggregate fields of "Comment" */
export type Comment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Comment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Comment" */
export type Comment_Aggregate_Order_By = {
  avg?: InputMaybe<Comment_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comment_Max_Order_By>;
  min?: InputMaybe<Comment_Min_Order_By>;
  stddev?: InputMaybe<Comment_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Comment_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Comment_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Comment_Sum_Order_By>;
  var_pop?: InputMaybe<Comment_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Comment_Var_Samp_Order_By>;
  variance?: InputMaybe<Comment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Comment" */
export type Comment_Arr_Rel_Insert_Input = {
  data: Array<Comment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};

/** aggregate avg on columns */
export type Comment_Avg_Fields = {
  __typename?: 'Comment_avg_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Comment" */
export type Comment_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Comment". All fields are combined with a logical 'AND'. */
export type Comment_Bool_Exp = {
  Post?: InputMaybe<Post_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Comment_Bool_Exp>>;
  _not?: InputMaybe<Comment_Bool_Exp>;
  _or?: InputMaybe<Array<Comment_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  postId?: InputMaybe<Int_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Comment" */
export enum Comment_Constraint {
  /** unique or primary key constraint on columns "id" */
  CommentPkey = 'Comment_pkey'
}

/** input type for incrementing numeric columns in table "Comment" */
export type Comment_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Comment" */
export type Comment_Insert_Input = {
  Post?: InputMaybe<Post_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Comment_Max_Fields = {
  __typename?: 'Comment_max_fields';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Comment" */
export type Comment_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Comment_Min_Fields = {
  __typename?: 'Comment_min_fields';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Comment" */
export type Comment_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Comment" */
export type Comment_Mutation_Response = {
  __typename?: 'Comment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Comment>;
};

/** on_conflict condition type for table "Comment" */
export type Comment_On_Conflict = {
  constraint: Comment_Constraint;
  update_columns?: Array<Comment_Update_Column>;
  where?: InputMaybe<Comment_Bool_Exp>;
};

/** Ordering options when selecting data from "Comment". */
export type Comment_Order_By = {
  Post?: InputMaybe<Post_Order_By>;
  User?: InputMaybe<User_Order_By>;
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Comment */
export type Comment_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Comment" */
export enum Comment_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'postId',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "Comment" */
export type Comment_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Comment_Stddev_Fields = {
  __typename?: 'Comment_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Comment" */
export type Comment_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comment_Stddev_Pop_Fields = {
  __typename?: 'Comment_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Comment" */
export type Comment_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comment_Stddev_Samp_Fields = {
  __typename?: 'Comment_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Comment" */
export type Comment_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Comment" */
export type Comment_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Comment_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Comment_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Comment_Sum_Fields = {
  __typename?: 'Comment_sum_fields';
  id?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Comment" */
export type Comment_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** update columns of table "Comment" */
export enum Comment_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'postId',
  /** column name */
  UserId = 'userId'
}

export type Comment_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Comment_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Comment_Set_Input>;
  where: Comment_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Comment_Var_Pop_Fields = {
  __typename?: 'Comment_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Comment" */
export type Comment_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comment_Var_Samp_Fields = {
  __typename?: 'Comment_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Comment" */
export type Comment_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Comment_Variance_Fields = {
  __typename?: 'Comment_variance_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Comment" */
export type Comment_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** columns and relationships of "Company" */
export type Company = {
  __typename?: 'Company';
  /** An array relationship */
  Watchlists: Array<Watchlist>;
  /** An aggregate relationship */
  Watchlists_aggregate: Watchlist_Aggregate;
  c: Scalars['Int'];
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  nameEn: Scalars['String'];
  nameVn: Scalars['String'];
  postTo: Scalars['String'];
  stockCode: Scalars['String'];
};


/** columns and relationships of "Company" */
export type CompanyWatchlistsArgs = {
  distinct_on?: InputMaybe<Array<Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Watchlist_Order_By>>;
  where?: InputMaybe<Watchlist_Bool_Exp>;
};


/** columns and relationships of "Company" */
export type CompanyWatchlists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Watchlist_Order_By>>;
  where?: InputMaybe<Watchlist_Bool_Exp>;
};

/** aggregated selection of "Company" */
export type Company_Aggregate = {
  __typename?: 'Company_aggregate';
  aggregate?: Maybe<Company_Aggregate_Fields>;
  nodes: Array<Company>;
};

/** aggregate fields of "Company" */
export type Company_Aggregate_Fields = {
  __typename?: 'Company_aggregate_fields';
  avg?: Maybe<Company_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Company_Max_Fields>;
  min?: Maybe<Company_Min_Fields>;
  stddev?: Maybe<Company_Stddev_Fields>;
  stddev_pop?: Maybe<Company_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Company_Stddev_Samp_Fields>;
  sum?: Maybe<Company_Sum_Fields>;
  var_pop?: Maybe<Company_Var_Pop_Fields>;
  var_samp?: Maybe<Company_Var_Samp_Fields>;
  variance?: Maybe<Company_Variance_Fields>;
};


/** aggregate fields of "Company" */
export type Company_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Company_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Company_Avg_Fields = {
  __typename?: 'Company_avg_fields';
  c?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Company". All fields are combined with a logical 'AND'. */
export type Company_Bool_Exp = {
  Watchlists?: InputMaybe<Watchlist_Bool_Exp>;
  Watchlists_aggregate?: InputMaybe<Watchlist_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Company_Bool_Exp>>;
  _not?: InputMaybe<Company_Bool_Exp>;
  _or?: InputMaybe<Array<Company_Bool_Exp>>;
  c?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  nameEn?: InputMaybe<String_Comparison_Exp>;
  nameVn?: InputMaybe<String_Comparison_Exp>;
  postTo?: InputMaybe<String_Comparison_Exp>;
  stockCode?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Company" */
export enum Company_Constraint {
  /** unique or primary key constraint on columns "id" */
  CompanyPkey = 'Company_pkey'
}

/** input type for incrementing numeric columns in table "Company" */
export type Company_Inc_Input = {
  c?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Company" */
export type Company_Insert_Input = {
  Watchlists?: InputMaybe<Watchlist_Arr_Rel_Insert_Input>;
  c?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  nameEn?: InputMaybe<Scalars['String']>;
  nameVn?: InputMaybe<Scalars['String']>;
  postTo?: InputMaybe<Scalars['String']>;
  stockCode?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Company_Max_Fields = {
  __typename?: 'Company_max_fields';
  c?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  nameEn?: Maybe<Scalars['String']>;
  nameVn?: Maybe<Scalars['String']>;
  postTo?: Maybe<Scalars['String']>;
  stockCode?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Company_Min_Fields = {
  __typename?: 'Company_min_fields';
  c?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  nameEn?: Maybe<Scalars['String']>;
  nameVn?: Maybe<Scalars['String']>;
  postTo?: Maybe<Scalars['String']>;
  stockCode?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Company" */
export type Company_Mutation_Response = {
  __typename?: 'Company_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Company>;
};

/** input type for inserting object relation for remote table "Company" */
export type Company_Obj_Rel_Insert_Input = {
  data: Company_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Company_On_Conflict>;
};

/** on_conflict condition type for table "Company" */
export type Company_On_Conflict = {
  constraint: Company_Constraint;
  update_columns?: Array<Company_Update_Column>;
  where?: InputMaybe<Company_Bool_Exp>;
};

/** Ordering options when selecting data from "Company". */
export type Company_Order_By = {
  Watchlists_aggregate?: InputMaybe<Watchlist_Aggregate_Order_By>;
  c?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nameEn?: InputMaybe<Order_By>;
  nameVn?: InputMaybe<Order_By>;
  postTo?: InputMaybe<Order_By>;
  stockCode?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Company */
export type Company_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Company" */
export enum Company_Select_Column {
  /** column name */
  C = 'c',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'nameEn',
  /** column name */
  NameVn = 'nameVn',
  /** column name */
  PostTo = 'postTo',
  /** column name */
  StockCode = 'stockCode'
}

/** input type for updating data in table "Company" */
export type Company_Set_Input = {
  c?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  nameEn?: InputMaybe<Scalars['String']>;
  nameVn?: InputMaybe<Scalars['String']>;
  postTo?: InputMaybe<Scalars['String']>;
  stockCode?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Company_Stddev_Fields = {
  __typename?: 'Company_stddev_fields';
  c?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Company_Stddev_Pop_Fields = {
  __typename?: 'Company_stddev_pop_fields';
  c?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Company_Stddev_Samp_Fields = {
  __typename?: 'Company_stddev_samp_fields';
  c?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "Company" */
export type Company_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Company_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Company_Stream_Cursor_Value_Input = {
  c?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  nameEn?: InputMaybe<Scalars['String']>;
  nameVn?: InputMaybe<Scalars['String']>;
  postTo?: InputMaybe<Scalars['String']>;
  stockCode?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Company_Sum_Fields = {
  __typename?: 'Company_sum_fields';
  c?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "Company" */
export enum Company_Update_Column {
  /** column name */
  C = 'c',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'nameEn',
  /** column name */
  NameVn = 'nameVn',
  /** column name */
  PostTo = 'postTo',
  /** column name */
  StockCode = 'stockCode'
}

export type Company_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Company_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Company_Set_Input>;
  where: Company_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Company_Var_Pop_Fields = {
  __typename?: 'Company_var_pop_fields';
  c?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Company_Var_Samp_Fields = {
  __typename?: 'Company_var_samp_fields';
  c?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Company_Variance_Fields = {
  __typename?: 'Company_variance_fields';
  c?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Keyword" */
export type Keyword = {
  __typename?: 'Keyword';
  /** An array relationship */
  _KeywordToPosts: Array<_KeywordToPost>;
  /** An aggregate relationship */
  _KeywordToPosts_aggregate: _KeywordToPost_Aggregate;
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "Keyword" */
export type Keyword_KeywordToPostsArgs = {
  distinct_on?: InputMaybe<Array<_KeywordToPost_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_KeywordToPost_Order_By>>;
  where?: InputMaybe<_KeywordToPost_Bool_Exp>;
};


/** columns and relationships of "Keyword" */
export type Keyword_KeywordToPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_KeywordToPost_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_KeywordToPost_Order_By>>;
  where?: InputMaybe<_KeywordToPost_Bool_Exp>;
};

/** aggregated selection of "Keyword" */
export type Keyword_Aggregate = {
  __typename?: 'Keyword_aggregate';
  aggregate?: Maybe<Keyword_Aggregate_Fields>;
  nodes: Array<Keyword>;
};

/** aggregate fields of "Keyword" */
export type Keyword_Aggregate_Fields = {
  __typename?: 'Keyword_aggregate_fields';
  avg?: Maybe<Keyword_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Keyword_Max_Fields>;
  min?: Maybe<Keyword_Min_Fields>;
  stddev?: Maybe<Keyword_Stddev_Fields>;
  stddev_pop?: Maybe<Keyword_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Keyword_Stddev_Samp_Fields>;
  sum?: Maybe<Keyword_Sum_Fields>;
  var_pop?: Maybe<Keyword_Var_Pop_Fields>;
  var_samp?: Maybe<Keyword_Var_Samp_Fields>;
  variance?: Maybe<Keyword_Variance_Fields>;
};


/** aggregate fields of "Keyword" */
export type Keyword_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Keyword_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Keyword_Avg_Fields = {
  __typename?: 'Keyword_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Keyword". All fields are combined with a logical 'AND'. */
export type Keyword_Bool_Exp = {
  _KeywordToPosts?: InputMaybe<_KeywordToPost_Bool_Exp>;
  _KeywordToPosts_aggregate?: InputMaybe<_KeywordToPost_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Keyword_Bool_Exp>>;
  _not?: InputMaybe<Keyword_Bool_Exp>;
  _or?: InputMaybe<Array<Keyword_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Keyword" */
export enum Keyword_Constraint {
  /** unique or primary key constraint on columns "name" */
  KeywordNameKey = 'Keyword_name_key',
  /** unique or primary key constraint on columns "id" */
  KeywordPkey = 'Keyword_pkey'
}

/** input type for incrementing numeric columns in table "Keyword" */
export type Keyword_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Keyword" */
export type Keyword_Insert_Input = {
  _KeywordToPosts?: InputMaybe<_KeywordToPost_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Keyword_Max_Fields = {
  __typename?: 'Keyword_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Keyword_Min_Fields = {
  __typename?: 'Keyword_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Keyword" */
export type Keyword_Mutation_Response = {
  __typename?: 'Keyword_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Keyword>;
};

/** input type for inserting object relation for remote table "Keyword" */
export type Keyword_Obj_Rel_Insert_Input = {
  data: Keyword_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Keyword_On_Conflict>;
};

/** on_conflict condition type for table "Keyword" */
export type Keyword_On_Conflict = {
  constraint: Keyword_Constraint;
  update_columns?: Array<Keyword_Update_Column>;
  where?: InputMaybe<Keyword_Bool_Exp>;
};

/** Ordering options when selecting data from "Keyword". */
export type Keyword_Order_By = {
  _KeywordToPosts_aggregate?: InputMaybe<_KeywordToPost_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Keyword */
export type Keyword_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Keyword" */
export enum Keyword_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "Keyword" */
export type Keyword_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Keyword_Stddev_Fields = {
  __typename?: 'Keyword_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Keyword_Stddev_Pop_Fields = {
  __typename?: 'Keyword_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Keyword_Stddev_Samp_Fields = {
  __typename?: 'Keyword_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "Keyword" */
export type Keyword_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Keyword_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Keyword_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Keyword_Sum_Fields = {
  __typename?: 'Keyword_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "Keyword" */
export enum Keyword_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Keyword_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Keyword_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Keyword_Set_Input>;
  where: Keyword_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Keyword_Var_Pop_Fields = {
  __typename?: 'Keyword_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Keyword_Var_Samp_Fields = {
  __typename?: 'Keyword_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Keyword_Variance_Fields = {
  __typename?: 'Keyword_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** columns and relationships of "Post" */
export type Post = {
  __typename?: 'Post';
  /** An array relationship */
  Bookmarks: Array<Bookmark>;
  /** An aggregate relationship */
  Bookmarks_aggregate: Bookmark_Aggregate;
  /** An object relationship */
  Category?: Maybe<Category>;
  /** An array relationship */
  Comments: Array<Comment>;
  /** An aggregate relationship */
  Comments_aggregate: Comment_Aggregate;
  /** An object relationship */
  Source?: Maybe<Source>;
  /** An array relationship */
  Votes: Array<Vote>;
  /** An aggregate relationship */
  Votes_aggregate: Vote_Aggregate;
  /** An array relationship */
  _KeywordToPosts: Array<_KeywordToPost>;
  /** An aggregate relationship */
  _KeywordToPosts_aggregate: _KeywordToPost_Aggregate;
  articleHtml?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['timestamp'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  permalink: Scalars['String'];
  publishDate?: Maybe<Scalars['timestamp']>;
  slug: Scalars['String'];
  sourceId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};


/** columns and relationships of "Post" */
export type PostBookmarksArgs = {
  distinct_on?: InputMaybe<Array<Bookmark_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bookmark_Order_By>>;
  where?: InputMaybe<Bookmark_Bool_Exp>;
};


/** columns and relationships of "Post" */
export type PostBookmarks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bookmark_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bookmark_Order_By>>;
  where?: InputMaybe<Bookmark_Bool_Exp>;
};


/** columns and relationships of "Post" */
export type PostCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


/** columns and relationships of "Post" */
export type PostComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


/** columns and relationships of "Post" */
export type PostVotesArgs = {
  distinct_on?: InputMaybe<Array<Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vote_Order_By>>;
  where?: InputMaybe<Vote_Bool_Exp>;
};


/** columns and relationships of "Post" */
export type PostVotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vote_Order_By>>;
  where?: InputMaybe<Vote_Bool_Exp>;
};


/** columns and relationships of "Post" */
export type Post_KeywordToPostsArgs = {
  distinct_on?: InputMaybe<Array<_KeywordToPost_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_KeywordToPost_Order_By>>;
  where?: InputMaybe<_KeywordToPost_Bool_Exp>;
};


/** columns and relationships of "Post" */
export type Post_KeywordToPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_KeywordToPost_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_KeywordToPost_Order_By>>;
  where?: InputMaybe<_KeywordToPost_Bool_Exp>;
};

/** aggregated selection of "Post" */
export type Post_Aggregate = {
  __typename?: 'Post_aggregate';
  aggregate?: Maybe<Post_Aggregate_Fields>;
  nodes: Array<Post>;
};

export type Post_Aggregate_Bool_Exp = {
  count?: InputMaybe<Post_Aggregate_Bool_Exp_Count>;
};

export type Post_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Post_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Post_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Post" */
export type Post_Aggregate_Fields = {
  __typename?: 'Post_aggregate_fields';
  avg?: Maybe<Post_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Post_Max_Fields>;
  min?: Maybe<Post_Min_Fields>;
  stddev?: Maybe<Post_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Sum_Fields>;
  var_pop?: Maybe<Post_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Var_Samp_Fields>;
  variance?: Maybe<Post_Variance_Fields>;
};


/** aggregate fields of "Post" */
export type Post_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Post" */
export type Post_Aggregate_Order_By = {
  avg?: InputMaybe<Post_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Post_Max_Order_By>;
  min?: InputMaybe<Post_Min_Order_By>;
  stddev?: InputMaybe<Post_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Post_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Post_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Post_Sum_Order_By>;
  var_pop?: InputMaybe<Post_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Post_Var_Samp_Order_By>;
  variance?: InputMaybe<Post_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Post" */
export type Post_Arr_Rel_Insert_Input = {
  data: Array<Post_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Avg_Fields = {
  __typename?: 'Post_avg_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sourceId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Post" */
export type Post_Avg_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sourceId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Post". All fields are combined with a logical 'AND'. */
export type Post_Bool_Exp = {
  Bookmarks?: InputMaybe<Bookmark_Bool_Exp>;
  Bookmarks_aggregate?: InputMaybe<Bookmark_Aggregate_Bool_Exp>;
  Category?: InputMaybe<Category_Bool_Exp>;
  Comments?: InputMaybe<Comment_Bool_Exp>;
  Comments_aggregate?: InputMaybe<Comment_Aggregate_Bool_Exp>;
  Source?: InputMaybe<Source_Bool_Exp>;
  Votes?: InputMaybe<Vote_Bool_Exp>;
  Votes_aggregate?: InputMaybe<Vote_Aggregate_Bool_Exp>;
  _KeywordToPosts?: InputMaybe<_KeywordToPost_Bool_Exp>;
  _KeywordToPosts_aggregate?: InputMaybe<_KeywordToPost_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Post_Bool_Exp>>;
  _not?: InputMaybe<Post_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Bool_Exp>>;
  articleHtml?: InputMaybe<String_Comparison_Exp>;
  categoryId?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  language?: InputMaybe<String_Comparison_Exp>;
  permalink?: InputMaybe<String_Comparison_Exp>;
  publishDate?: InputMaybe<Timestamp_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  sourceId?: InputMaybe<Int_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Post" */
export enum Post_Constraint {
  /** unique or primary key constraint on columns "permalink" */
  PostPermalinkKey = 'Post_permalink_key',
  /** unique or primary key constraint on columns "id" */
  PostPkey = 'Post_pkey',
  /** unique or primary key constraint on columns "slug" */
  PostSlugKey = 'Post_slug_key'
}

/** input type for incrementing numeric columns in table "Post" */
export type Post_Inc_Input = {
  categoryId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  sourceId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Post" */
export type Post_Insert_Input = {
  Bookmarks?: InputMaybe<Bookmark_Arr_Rel_Insert_Input>;
  Category?: InputMaybe<Category_Obj_Rel_Insert_Input>;
  Comments?: InputMaybe<Comment_Arr_Rel_Insert_Input>;
  Source?: InputMaybe<Source_Obj_Rel_Insert_Input>;
  Votes?: InputMaybe<Vote_Arr_Rel_Insert_Input>;
  _KeywordToPosts?: InputMaybe<_KeywordToPost_Arr_Rel_Insert_Input>;
  articleHtml?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  permalink?: InputMaybe<Scalars['String']>;
  publishDate?: InputMaybe<Scalars['timestamp']>;
  slug?: InputMaybe<Scalars['String']>;
  sourceId?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Post_Max_Fields = {
  __typename?: 'Post_max_fields';
  articleHtml?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  permalink?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['timestamp']>;
  slug?: Maybe<Scalars['String']>;
  sourceId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Post" */
export type Post_Max_Order_By = {
  articleHtml?: InputMaybe<Order_By>;
  categoryId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  permalink?: InputMaybe<Order_By>;
  publishDate?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  sourceId?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Min_Fields = {
  __typename?: 'Post_min_fields';
  articleHtml?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  permalink?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['timestamp']>;
  slug?: Maybe<Scalars['String']>;
  sourceId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Post" */
export type Post_Min_Order_By = {
  articleHtml?: InputMaybe<Order_By>;
  categoryId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  permalink?: InputMaybe<Order_By>;
  publishDate?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  sourceId?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Post" */
export type Post_Mutation_Response = {
  __typename?: 'Post_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Post>;
};

/** input type for inserting object relation for remote table "Post" */
export type Post_Obj_Rel_Insert_Input = {
  data: Post_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_On_Conflict>;
};

/** on_conflict condition type for table "Post" */
export type Post_On_Conflict = {
  constraint: Post_Constraint;
  update_columns?: Array<Post_Update_Column>;
  where?: InputMaybe<Post_Bool_Exp>;
};

/** Ordering options when selecting data from "Post". */
export type Post_Order_By = {
  Bookmarks_aggregate?: InputMaybe<Bookmark_Aggregate_Order_By>;
  Category?: InputMaybe<Category_Order_By>;
  Comments_aggregate?: InputMaybe<Comment_Aggregate_Order_By>;
  Source?: InputMaybe<Source_Order_By>;
  Votes_aggregate?: InputMaybe<Vote_Aggregate_Order_By>;
  _KeywordToPosts_aggregate?: InputMaybe<_KeywordToPost_Aggregate_Order_By>;
  articleHtml?: InputMaybe<Order_By>;
  categoryId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  permalink?: InputMaybe<Order_By>;
  publishDate?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  sourceId?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Post */
export type Post_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Post" */
export enum Post_Select_Column {
  /** column name */
  ArticleHtml = 'articleHtml',
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Language = 'language',
  /** column name */
  Permalink = 'permalink',
  /** column name */
  PublishDate = 'publishDate',
  /** column name */
  Slug = 'slug',
  /** column name */
  SourceId = 'sourceId',
  /** column name */
  Text = 'text',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "Post" */
export type Post_Set_Input = {
  articleHtml?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  permalink?: InputMaybe<Scalars['String']>;
  publishDate?: InputMaybe<Scalars['timestamp']>;
  slug?: InputMaybe<Scalars['String']>;
  sourceId?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Post_Stddev_Fields = {
  __typename?: 'Post_stddev_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sourceId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Post" */
export type Post_Stddev_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sourceId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Stddev_Pop_Fields = {
  __typename?: 'Post_stddev_pop_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sourceId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Post" */
export type Post_Stddev_Pop_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sourceId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Stddev_Samp_Fields = {
  __typename?: 'Post_stddev_samp_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sourceId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Post" */
export type Post_Stddev_Samp_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sourceId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Post" */
export type Post_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Stream_Cursor_Value_Input = {
  articleHtml?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  permalink?: InputMaybe<Scalars['String']>;
  publishDate?: InputMaybe<Scalars['timestamp']>;
  slug?: InputMaybe<Scalars['String']>;
  sourceId?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Post_Sum_Fields = {
  __typename?: 'Post_sum_fields';
  categoryId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sourceId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Post" */
export type Post_Sum_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sourceId?: InputMaybe<Order_By>;
};

/** update columns of table "Post" */
export enum Post_Update_Column {
  /** column name */
  ArticleHtml = 'articleHtml',
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Language = 'language',
  /** column name */
  Permalink = 'permalink',
  /** column name */
  PublishDate = 'publishDate',
  /** column name */
  Slug = 'slug',
  /** column name */
  SourceId = 'sourceId',
  /** column name */
  Text = 'text',
  /** column name */
  Title = 'title'
}

export type Post_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Post_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Set_Input>;
  where: Post_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Post_Var_Pop_Fields = {
  __typename?: 'Post_var_pop_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sourceId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Post" */
export type Post_Var_Pop_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sourceId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Var_Samp_Fields = {
  __typename?: 'Post_var_samp_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sourceId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Post" */
export type Post_Var_Samp_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sourceId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Variance_Fields = {
  __typename?: 'Post_variance_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sourceId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Post" */
export type Post_Variance_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sourceId?: InputMaybe<Order_By>;
};

/** columns and relationships of "Publisher" */
export type Publisher = {
  __typename?: 'Publisher';
  /** An array relationship */
  Sources: Array<Source>;
  /** An aggregate relationship */
  Sources_aggregate: Source_Aggregate;
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};


/** columns and relationships of "Publisher" */
export type PublisherSourcesArgs = {
  distinct_on?: InputMaybe<Array<Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Source_Order_By>>;
  where?: InputMaybe<Source_Bool_Exp>;
};


/** columns and relationships of "Publisher" */
export type PublisherSources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Source_Order_By>>;
  where?: InputMaybe<Source_Bool_Exp>;
};

/** aggregated selection of "Publisher" */
export type Publisher_Aggregate = {
  __typename?: 'Publisher_aggregate';
  aggregate?: Maybe<Publisher_Aggregate_Fields>;
  nodes: Array<Publisher>;
};

/** aggregate fields of "Publisher" */
export type Publisher_Aggregate_Fields = {
  __typename?: 'Publisher_aggregate_fields';
  avg?: Maybe<Publisher_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Publisher_Max_Fields>;
  min?: Maybe<Publisher_Min_Fields>;
  stddev?: Maybe<Publisher_Stddev_Fields>;
  stddev_pop?: Maybe<Publisher_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Publisher_Stddev_Samp_Fields>;
  sum?: Maybe<Publisher_Sum_Fields>;
  var_pop?: Maybe<Publisher_Var_Pop_Fields>;
  var_samp?: Maybe<Publisher_Var_Samp_Fields>;
  variance?: Maybe<Publisher_Variance_Fields>;
};


/** aggregate fields of "Publisher" */
export type Publisher_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Publisher_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Publisher_Avg_Fields = {
  __typename?: 'Publisher_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Publisher". All fields are combined with a logical 'AND'. */
export type Publisher_Bool_Exp = {
  Sources?: InputMaybe<Source_Bool_Exp>;
  Sources_aggregate?: InputMaybe<Source_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Publisher_Bool_Exp>>;
  _not?: InputMaybe<Publisher_Bool_Exp>;
  _or?: InputMaybe<Array<Publisher_Bool_Exp>>;
  bio?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Publisher" */
export enum Publisher_Constraint {
  /** unique or primary key constraint on columns "name" */
  PublisherNameKey = 'Publisher_name_key',
  /** unique or primary key constraint on columns "id" */
  PublisherPkey = 'Publisher_pkey'
}

/** input type for incrementing numeric columns in table "Publisher" */
export type Publisher_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Publisher" */
export type Publisher_Insert_Input = {
  Sources?: InputMaybe<Source_Arr_Rel_Insert_Input>;
  bio?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Publisher_Max_Fields = {
  __typename?: 'Publisher_max_fields';
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Publisher_Min_Fields = {
  __typename?: 'Publisher_min_fields';
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Publisher" */
export type Publisher_Mutation_Response = {
  __typename?: 'Publisher_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Publisher>;
};

/** input type for inserting object relation for remote table "Publisher" */
export type Publisher_Obj_Rel_Insert_Input = {
  data: Publisher_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Publisher_On_Conflict>;
};

/** on_conflict condition type for table "Publisher" */
export type Publisher_On_Conflict = {
  constraint: Publisher_Constraint;
  update_columns?: Array<Publisher_Update_Column>;
  where?: InputMaybe<Publisher_Bool_Exp>;
};

/** Ordering options when selecting data from "Publisher". */
export type Publisher_Order_By = {
  Sources_aggregate?: InputMaybe<Source_Aggregate_Order_By>;
  bio?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Publisher */
export type Publisher_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Publisher" */
export enum Publisher_Select_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Website = 'website'
}

/** input type for updating data in table "Publisher" */
export type Publisher_Set_Input = {
  bio?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Publisher_Stddev_Fields = {
  __typename?: 'Publisher_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Publisher_Stddev_Pop_Fields = {
  __typename?: 'Publisher_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Publisher_Stddev_Samp_Fields = {
  __typename?: 'Publisher_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "Publisher" */
export type Publisher_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Publisher_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Publisher_Stream_Cursor_Value_Input = {
  bio?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Publisher_Sum_Fields = {
  __typename?: 'Publisher_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "Publisher" */
export enum Publisher_Update_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Website = 'website'
}

export type Publisher_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Publisher_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Publisher_Set_Input>;
  where: Publisher_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Publisher_Var_Pop_Fields = {
  __typename?: 'Publisher_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Publisher_Var_Samp_Fields = {
  __typename?: 'Publisher_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Publisher_Variance_Fields = {
  __typename?: 'Publisher_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type ResetPasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

/** User role */
export enum RoleNest {
  Admin = 'ADMIN',
  User = 'USER'
}

/** Boolean expression to compare columns of type "Role". All fields are combined with logical 'AND'. */
export type Role_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Role']>;
  _gt?: InputMaybe<Scalars['Role']>;
  _gte?: InputMaybe<Scalars['Role']>;
  _in?: InputMaybe<Array<Scalars['Role']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Role']>;
  _lte?: InputMaybe<Scalars['Role']>;
  _neq?: InputMaybe<Scalars['Role']>;
  _nin?: InputMaybe<Array<Scalars['Role']>>;
};

export type SignupInput = {
  email: Scalars['String'];
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

/** columns and relationships of "Source" */
export type Source = {
  __typename?: 'Source';
  /** An object relationship */
  Category?: Maybe<Category>;
  /** An array relationship */
  Posts: Array<Post>;
  /** An aggregate relationship */
  Posts_aggregate: Post_Aggregate;
  /** An object relationship */
  Publisher?: Maybe<Publisher>;
  categoryId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  name: Scalars['String'];
  publisherId?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
};


/** columns and relationships of "Source" */
export type SourcePostsArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


/** columns and relationships of "Source" */
export type SourcePosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};

/** aggregated selection of "Source" */
export type Source_Aggregate = {
  __typename?: 'Source_aggregate';
  aggregate?: Maybe<Source_Aggregate_Fields>;
  nodes: Array<Source>;
};

export type Source_Aggregate_Bool_Exp = {
  count?: InputMaybe<Source_Aggregate_Bool_Exp_Count>;
};

export type Source_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Source_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Source_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Source" */
export type Source_Aggregate_Fields = {
  __typename?: 'Source_aggregate_fields';
  avg?: Maybe<Source_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Source_Max_Fields>;
  min?: Maybe<Source_Min_Fields>;
  stddev?: Maybe<Source_Stddev_Fields>;
  stddev_pop?: Maybe<Source_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Source_Stddev_Samp_Fields>;
  sum?: Maybe<Source_Sum_Fields>;
  var_pop?: Maybe<Source_Var_Pop_Fields>;
  var_samp?: Maybe<Source_Var_Samp_Fields>;
  variance?: Maybe<Source_Variance_Fields>;
};


/** aggregate fields of "Source" */
export type Source_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Source_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Source" */
export type Source_Aggregate_Order_By = {
  avg?: InputMaybe<Source_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Source_Max_Order_By>;
  min?: InputMaybe<Source_Min_Order_By>;
  stddev?: InputMaybe<Source_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Source_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Source_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Source_Sum_Order_By>;
  var_pop?: InputMaybe<Source_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Source_Var_Samp_Order_By>;
  variance?: InputMaybe<Source_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Source" */
export type Source_Arr_Rel_Insert_Input = {
  data: Array<Source_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Source_On_Conflict>;
};

/** aggregate avg on columns */
export type Source_Avg_Fields = {
  __typename?: 'Source_avg_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  publisherId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Source" */
export type Source_Avg_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  publisherId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Source". All fields are combined with a logical 'AND'. */
export type Source_Bool_Exp = {
  Category?: InputMaybe<Category_Bool_Exp>;
  Posts?: InputMaybe<Post_Bool_Exp>;
  Posts_aggregate?: InputMaybe<Post_Aggregate_Bool_Exp>;
  Publisher?: InputMaybe<Publisher_Bool_Exp>;
  _and?: InputMaybe<Array<Source_Bool_Exp>>;
  _not?: InputMaybe<Source_Bool_Exp>;
  _or?: InputMaybe<Array<Source_Bool_Exp>>;
  categoryId?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  publisherId?: InputMaybe<Int_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Source" */
export enum Source_Constraint {
  /** unique or primary key constraint on columns "id" */
  SourcePkey = 'Source_pkey'
}

/** input type for incrementing numeric columns in table "Source" */
export type Source_Inc_Input = {
  categoryId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  publisherId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Source" */
export type Source_Insert_Input = {
  Category?: InputMaybe<Category_Obj_Rel_Insert_Input>;
  Posts?: InputMaybe<Post_Arr_Rel_Insert_Input>;
  Publisher?: InputMaybe<Publisher_Obj_Rel_Insert_Input>;
  categoryId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  publisherId?: InputMaybe<Scalars['Int']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Source_Max_Fields = {
  __typename?: 'Source_max_fields';
  categoryId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  publisherId?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Source" */
export type Source_Max_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  publisherId?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Source_Min_Fields = {
  __typename?: 'Source_min_fields';
  categoryId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  publisherId?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Source" */
export type Source_Min_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  publisherId?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Source" */
export type Source_Mutation_Response = {
  __typename?: 'Source_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Source>;
};

/** input type for inserting object relation for remote table "Source" */
export type Source_Obj_Rel_Insert_Input = {
  data: Source_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Source_On_Conflict>;
};

/** on_conflict condition type for table "Source" */
export type Source_On_Conflict = {
  constraint: Source_Constraint;
  update_columns?: Array<Source_Update_Column>;
  where?: InputMaybe<Source_Bool_Exp>;
};

/** Ordering options when selecting data from "Source". */
export type Source_Order_By = {
  Category?: InputMaybe<Category_Order_By>;
  Posts_aggregate?: InputMaybe<Post_Aggregate_Order_By>;
  Publisher?: InputMaybe<Publisher_Order_By>;
  categoryId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  publisherId?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Source */
export type Source_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Source" */
export enum Source_Select_Column {
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PublisherId = 'publisherId',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "Source" */
export type Source_Set_Input = {
  categoryId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  publisherId?: InputMaybe<Scalars['Int']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Source_Stddev_Fields = {
  __typename?: 'Source_stddev_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  publisherId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Source" */
export type Source_Stddev_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  publisherId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Source_Stddev_Pop_Fields = {
  __typename?: 'Source_stddev_pop_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  publisherId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Source" */
export type Source_Stddev_Pop_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  publisherId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Source_Stddev_Samp_Fields = {
  __typename?: 'Source_stddev_samp_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  publisherId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Source" */
export type Source_Stddev_Samp_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  publisherId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Source" */
export type Source_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Source_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Source_Stream_Cursor_Value_Input = {
  categoryId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  publisherId?: InputMaybe<Scalars['Int']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Source_Sum_Fields = {
  __typename?: 'Source_sum_fields';
  categoryId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  publisherId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Source" */
export type Source_Sum_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  publisherId?: InputMaybe<Order_By>;
};

/** update columns of table "Source" */
export enum Source_Update_Column {
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PublisherId = 'publisherId',
  /** column name */
  Url = 'url'
}

export type Source_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Source_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Source_Set_Input>;
  where: Source_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Source_Var_Pop_Fields = {
  __typename?: 'Source_var_pop_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  publisherId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Source" */
export type Source_Var_Pop_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  publisherId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Source_Var_Samp_Fields = {
  __typename?: 'Source_var_samp_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  publisherId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Source" */
export type Source_Var_Samp_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  publisherId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Source_Variance_Fields = {
  __typename?: 'Source_variance_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  publisherId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Source" */
export type Source_Variance_Order_By = {
  categoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  publisherId?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type Token = {
  __typename?: 'Token';
  /** JWT access token */
  accessToken: Scalars['JWT'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT'];
};

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User';
  /** An array relationship */
  Bookmarks: Array<Bookmark>;
  /** An aggregate relationship */
  Bookmarks_aggregate: Bookmark_Aggregate;
  /** An array relationship */
  Comments: Array<Comment>;
  /** An aggregate relationship */
  Comments_aggregate: Comment_Aggregate;
  /** An array relationship */
  Votes: Array<Vote>;
  /** An aggregate relationship */
  Votes_aggregate: Vote_Aggregate;
  /** An array relationship */
  Watchlists: Array<Watchlist>;
  /** An aggregate relationship */
  Watchlists_aggregate: Watchlist_Aggregate;
  createdAt: Scalars['timestamp'];
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  role: Scalars['Role'];
  updatedAt: Scalars['timestamp'];
};


/** columns and relationships of "User" */
export type UserBookmarksArgs = {
  distinct_on?: InputMaybe<Array<Bookmark_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bookmark_Order_By>>;
  where?: InputMaybe<Bookmark_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserBookmarks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bookmark_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bookmark_Order_By>>;
  where?: InputMaybe<Bookmark_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserVotesArgs = {
  distinct_on?: InputMaybe<Array<Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vote_Order_By>>;
  where?: InputMaybe<Vote_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserVotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vote_Order_By>>;
  where?: InputMaybe<Vote_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserWatchlistsArgs = {
  distinct_on?: InputMaybe<Array<Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Watchlist_Order_By>>;
  where?: InputMaybe<Watchlist_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserWatchlists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Watchlist_Order_By>>;
  where?: InputMaybe<Watchlist_Bool_Exp>;
};

export type UserNest = {
  __typename?: 'UserNest';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastname?: Maybe<Scalars['String']>;
  role: RoleNest;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  Bookmarks?: InputMaybe<Bookmark_Bool_Exp>;
  Bookmarks_aggregate?: InputMaybe<Bookmark_Aggregate_Bool_Exp>;
  Comments?: InputMaybe<Comment_Bool_Exp>;
  Comments_aggregate?: InputMaybe<Comment_Aggregate_Bool_Exp>;
  Votes?: InputMaybe<Vote_Bool_Exp>;
  Votes_aggregate?: InputMaybe<Vote_Aggregate_Bool_Exp>;
  Watchlists?: InputMaybe<Watchlist_Bool_Exp>;
  Watchlists_aggregate?: InputMaybe<Watchlist_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<Role_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'User_email_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'User_pkey'
}

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  Bookmarks?: InputMaybe<Bookmark_Arr_Rel_Insert_Input>;
  Comments?: InputMaybe<Comment_Arr_Rel_Insert_Input>;
  Votes?: InputMaybe<Vote_Arr_Rel_Insert_Input>;
  Watchlists?: InputMaybe<Watchlist_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Role']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['Role']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['Role']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  __typename?: 'User_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "User" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  Bookmarks_aggregate?: InputMaybe<Bookmark_Aggregate_Order_By>;
  Comments_aggregate?: InputMaybe<Comment_Aggregate_Order_By>;
  Votes_aggregate?: InputMaybe<Vote_Aggregate_Order_By>;
  Watchlists_aggregate?: InputMaybe<Watchlist_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: User */
export type User_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Role']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** Streaming cursor of the table "User" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Role']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** columns and relationships of "Vote" */
export type Vote = {
  __typename?: 'Vote';
  /** An object relationship */
  Post?: Maybe<Post>;
  /** An object relationship */
  User?: Maybe<User>;
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  postId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregated selection of "Vote" */
export type Vote_Aggregate = {
  __typename?: 'Vote_aggregate';
  aggregate?: Maybe<Vote_Aggregate_Fields>;
  nodes: Array<Vote>;
};

export type Vote_Aggregate_Bool_Exp = {
  count?: InputMaybe<Vote_Aggregate_Bool_Exp_Count>;
};

export type Vote_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vote_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vote_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Vote" */
export type Vote_Aggregate_Fields = {
  __typename?: 'Vote_aggregate_fields';
  avg?: Maybe<Vote_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vote_Max_Fields>;
  min?: Maybe<Vote_Min_Fields>;
  stddev?: Maybe<Vote_Stddev_Fields>;
  stddev_pop?: Maybe<Vote_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vote_Stddev_Samp_Fields>;
  sum?: Maybe<Vote_Sum_Fields>;
  var_pop?: Maybe<Vote_Var_Pop_Fields>;
  var_samp?: Maybe<Vote_Var_Samp_Fields>;
  variance?: Maybe<Vote_Variance_Fields>;
};


/** aggregate fields of "Vote" */
export type Vote_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vote_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Vote" */
export type Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Vote_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vote_Max_Order_By>;
  min?: InputMaybe<Vote_Min_Order_By>;
  stddev?: InputMaybe<Vote_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vote_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vote_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vote_Sum_Order_By>;
  var_pop?: InputMaybe<Vote_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vote_Var_Samp_Order_By>;
  variance?: InputMaybe<Vote_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Vote" */
export type Vote_Arr_Rel_Insert_Input = {
  data: Array<Vote_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Vote_On_Conflict>;
};

/** aggregate avg on columns */
export type Vote_Avg_Fields = {
  __typename?: 'Vote_avg_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Vote" */
export type Vote_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Vote". All fields are combined with a logical 'AND'. */
export type Vote_Bool_Exp = {
  Post?: InputMaybe<Post_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Vote_Bool_Exp>>;
  _not?: InputMaybe<Vote_Bool_Exp>;
  _or?: InputMaybe<Array<Vote_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  postId?: InputMaybe<Int_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Vote" */
export enum Vote_Constraint {
  /** unique or primary key constraint on columns "id" */
  VotePkey = 'Vote_pkey',
  /** unique or primary key constraint on columns "postId", "userId" */
  VotePostIdUserIdKey = 'Vote_postId_userId_key'
}

/** input type for incrementing numeric columns in table "Vote" */
export type Vote_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Vote" */
export type Vote_Insert_Input = {
  Post?: InputMaybe<Post_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Vote_Max_Fields = {
  __typename?: 'Vote_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Vote" */
export type Vote_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vote_Min_Fields = {
  __typename?: 'Vote_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Vote" */
export type Vote_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Vote" */
export type Vote_Mutation_Response = {
  __typename?: 'Vote_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vote>;
};

/** on_conflict condition type for table "Vote" */
export type Vote_On_Conflict = {
  constraint: Vote_Constraint;
  update_columns?: Array<Vote_Update_Column>;
  where?: InputMaybe<Vote_Bool_Exp>;
};

/** Ordering options when selecting data from "Vote". */
export type Vote_Order_By = {
  Post?: InputMaybe<Post_Order_By>;
  User?: InputMaybe<User_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Vote */
export type Vote_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Vote" */
export enum Vote_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'postId',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "Vote" */
export type Vote_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Vote_Stddev_Fields = {
  __typename?: 'Vote_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Vote" */
export type Vote_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vote_Stddev_Pop_Fields = {
  __typename?: 'Vote_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Vote" */
export type Vote_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vote_Stddev_Samp_Fields = {
  __typename?: 'Vote_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Vote" */
export type Vote_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Vote" */
export type Vote_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vote_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vote_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Vote_Sum_Fields = {
  __typename?: 'Vote_sum_fields';
  id?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Vote" */
export type Vote_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** update columns of table "Vote" */
export enum Vote_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'postId',
  /** column name */
  UserId = 'userId'
}

export type Vote_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vote_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vote_Set_Input>;
  where: Vote_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vote_Var_Pop_Fields = {
  __typename?: 'Vote_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Vote" */
export type Vote_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vote_Var_Samp_Fields = {
  __typename?: 'Vote_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Vote" */
export type Vote_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vote_Variance_Fields = {
  __typename?: 'Vote_variance_fields';
  id?: Maybe<Scalars['Float']>;
  postId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Vote" */
export type Vote_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** columns and relationships of "Watchlist" */
export type Watchlist = {
  __typename?: 'Watchlist';
  /** An object relationship */
  Company?: Maybe<Company>;
  /** An object relationship */
  User?: Maybe<User>;
  companyId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  symbol: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};

/** aggregated selection of "Watchlist" */
export type Watchlist_Aggregate = {
  __typename?: 'Watchlist_aggregate';
  aggregate?: Maybe<Watchlist_Aggregate_Fields>;
  nodes: Array<Watchlist>;
};

export type Watchlist_Aggregate_Bool_Exp = {
  count?: InputMaybe<Watchlist_Aggregate_Bool_Exp_Count>;
};

export type Watchlist_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Watchlist_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Watchlist_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Watchlist" */
export type Watchlist_Aggregate_Fields = {
  __typename?: 'Watchlist_aggregate_fields';
  avg?: Maybe<Watchlist_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Watchlist_Max_Fields>;
  min?: Maybe<Watchlist_Min_Fields>;
  stddev?: Maybe<Watchlist_Stddev_Fields>;
  stddev_pop?: Maybe<Watchlist_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Watchlist_Stddev_Samp_Fields>;
  sum?: Maybe<Watchlist_Sum_Fields>;
  var_pop?: Maybe<Watchlist_Var_Pop_Fields>;
  var_samp?: Maybe<Watchlist_Var_Samp_Fields>;
  variance?: Maybe<Watchlist_Variance_Fields>;
};


/** aggregate fields of "Watchlist" */
export type Watchlist_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Watchlist_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Watchlist" */
export type Watchlist_Aggregate_Order_By = {
  avg?: InputMaybe<Watchlist_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Watchlist_Max_Order_By>;
  min?: InputMaybe<Watchlist_Min_Order_By>;
  stddev?: InputMaybe<Watchlist_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Watchlist_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Watchlist_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Watchlist_Sum_Order_By>;
  var_pop?: InputMaybe<Watchlist_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Watchlist_Var_Samp_Order_By>;
  variance?: InputMaybe<Watchlist_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Watchlist" */
export type Watchlist_Arr_Rel_Insert_Input = {
  data: Array<Watchlist_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Watchlist_On_Conflict>;
};

/** aggregate avg on columns */
export type Watchlist_Avg_Fields = {
  __typename?: 'Watchlist_avg_fields';
  companyId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Watchlist" */
export type Watchlist_Avg_Order_By = {
  companyId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Watchlist". All fields are combined with a logical 'AND'. */
export type Watchlist_Bool_Exp = {
  Company?: InputMaybe<Company_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Watchlist_Bool_Exp>>;
  _not?: InputMaybe<Watchlist_Bool_Exp>;
  _or?: InputMaybe<Array<Watchlist_Bool_Exp>>;
  companyId?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Watchlist" */
export enum Watchlist_Constraint {
  /** unique or primary key constraint on columns "id" */
  WatchlistPkey = 'Watchlist_pkey'
}

/** input type for incrementing numeric columns in table "Watchlist" */
export type Watchlist_Inc_Input = {
  companyId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Watchlist" */
export type Watchlist_Insert_Input = {
  Company?: InputMaybe<Company_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  companyId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  symbol?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Watchlist_Max_Fields = {
  __typename?: 'Watchlist_max_fields';
  companyId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  symbol?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Watchlist" */
export type Watchlist_Max_Order_By = {
  companyId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Watchlist_Min_Fields = {
  __typename?: 'Watchlist_min_fields';
  companyId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  symbol?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Watchlist" */
export type Watchlist_Min_Order_By = {
  companyId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Watchlist" */
export type Watchlist_Mutation_Response = {
  __typename?: 'Watchlist_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Watchlist>;
};

/** on_conflict condition type for table "Watchlist" */
export type Watchlist_On_Conflict = {
  constraint: Watchlist_Constraint;
  update_columns?: Array<Watchlist_Update_Column>;
  where?: InputMaybe<Watchlist_Bool_Exp>;
};

/** Ordering options when selecting data from "Watchlist". */
export type Watchlist_Order_By = {
  Company?: InputMaybe<Company_Order_By>;
  User?: InputMaybe<User_Order_By>;
  companyId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Watchlist */
export type Watchlist_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Watchlist" */
export enum Watchlist_Select_Column {
  /** column name */
  CompanyId = 'companyId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "Watchlist" */
export type Watchlist_Set_Input = {
  companyId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  symbol?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Watchlist_Stddev_Fields = {
  __typename?: 'Watchlist_stddev_fields';
  companyId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Watchlist" */
export type Watchlist_Stddev_Order_By = {
  companyId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Watchlist_Stddev_Pop_Fields = {
  __typename?: 'Watchlist_stddev_pop_fields';
  companyId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Watchlist" */
export type Watchlist_Stddev_Pop_Order_By = {
  companyId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Watchlist_Stddev_Samp_Fields = {
  __typename?: 'Watchlist_stddev_samp_fields';
  companyId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Watchlist" */
export type Watchlist_Stddev_Samp_Order_By = {
  companyId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Watchlist" */
export type Watchlist_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Watchlist_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Watchlist_Stream_Cursor_Value_Input = {
  companyId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  symbol?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Watchlist_Sum_Fields = {
  __typename?: 'Watchlist_sum_fields';
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Watchlist" */
export type Watchlist_Sum_Order_By = {
  companyId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "Watchlist" */
export enum Watchlist_Update_Column {
  /** column name */
  CompanyId = 'companyId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UserId = 'userId'
}

export type Watchlist_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Watchlist_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Watchlist_Set_Input>;
  where: Watchlist_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Watchlist_Var_Pop_Fields = {
  __typename?: 'Watchlist_var_pop_fields';
  companyId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Watchlist" */
export type Watchlist_Var_Pop_Order_By = {
  companyId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Watchlist_Var_Samp_Fields = {
  __typename?: 'Watchlist_var_samp_fields';
  companyId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Watchlist" */
export type Watchlist_Var_Samp_Order_By = {
  companyId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Watchlist_Variance_Fields = {
  __typename?: 'Watchlist_variance_fields';
  companyId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Watchlist" */
export type Watchlist_Variance_Order_By = {
  companyId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "_KeywordToPost" */
export type _KeywordToPost = {
  __typename?: '_KeywordToPost';
  A: Scalars['Int'];
  B: Scalars['Int'];
  /** An object relationship */
  Keyword: Keyword;
  /** An object relationship */
  Post: Post;
};

/** aggregated selection of "_KeywordToPost" */
export type _KeywordToPost_Aggregate = {
  __typename?: '_KeywordToPost_aggregate';
  aggregate?: Maybe<_KeywordToPost_Aggregate_Fields>;
  nodes: Array<_KeywordToPost>;
};

export type _KeywordToPost_Aggregate_Bool_Exp = {
  count?: InputMaybe<_KeywordToPost_Aggregate_Bool_Exp_Count>;
};

export type _KeywordToPost_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<_KeywordToPost_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<_KeywordToPost_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "_KeywordToPost" */
export type _KeywordToPost_Aggregate_Fields = {
  __typename?: '_KeywordToPost_aggregate_fields';
  avg?: Maybe<_KeywordToPost_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<_KeywordToPost_Max_Fields>;
  min?: Maybe<_KeywordToPost_Min_Fields>;
  stddev?: Maybe<_KeywordToPost_Stddev_Fields>;
  stddev_pop?: Maybe<_KeywordToPost_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_KeywordToPost_Stddev_Samp_Fields>;
  sum?: Maybe<_KeywordToPost_Sum_Fields>;
  var_pop?: Maybe<_KeywordToPost_Var_Pop_Fields>;
  var_samp?: Maybe<_KeywordToPost_Var_Samp_Fields>;
  variance?: Maybe<_KeywordToPost_Variance_Fields>;
};


/** aggregate fields of "_KeywordToPost" */
export type _KeywordToPost_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_KeywordToPost_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "_KeywordToPost" */
export type _KeywordToPost_Aggregate_Order_By = {
  avg?: InputMaybe<_KeywordToPost_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<_KeywordToPost_Max_Order_By>;
  min?: InputMaybe<_KeywordToPost_Min_Order_By>;
  stddev?: InputMaybe<_KeywordToPost_Stddev_Order_By>;
  stddev_pop?: InputMaybe<_KeywordToPost_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<_KeywordToPost_Stddev_Samp_Order_By>;
  sum?: InputMaybe<_KeywordToPost_Sum_Order_By>;
  var_pop?: InputMaybe<_KeywordToPost_Var_Pop_Order_By>;
  var_samp?: InputMaybe<_KeywordToPost_Var_Samp_Order_By>;
  variance?: InputMaybe<_KeywordToPost_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "_KeywordToPost" */
export type _KeywordToPost_Arr_Rel_Insert_Input = {
  data: Array<_KeywordToPost_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<_KeywordToPost_On_Conflict>;
};

/** aggregate avg on columns */
export type _KeywordToPost_Avg_Fields = {
  __typename?: '_KeywordToPost_avg_fields';
  A?: Maybe<Scalars['Float']>;
  B?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "_KeywordToPost" */
export type _KeywordToPost_Avg_Order_By = {
  A?: InputMaybe<Order_By>;
  B?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "_KeywordToPost". All fields are combined with a logical 'AND'. */
export type _KeywordToPost_Bool_Exp = {
  A?: InputMaybe<Int_Comparison_Exp>;
  B?: InputMaybe<Int_Comparison_Exp>;
  Keyword?: InputMaybe<Keyword_Bool_Exp>;
  Post?: InputMaybe<Post_Bool_Exp>;
  _and?: InputMaybe<Array<_KeywordToPost_Bool_Exp>>;
  _not?: InputMaybe<_KeywordToPost_Bool_Exp>;
  _or?: InputMaybe<Array<_KeywordToPost_Bool_Exp>>;
};

/** unique or primary key constraints on table "_KeywordToPost" */
export enum _KeywordToPost_Constraint {
  /** unique or primary key constraint on columns "A", "B" */
  KeywordToPostAbUnique = '_KeywordToPost_AB_unique'
}

/** input type for incrementing numeric columns in table "_KeywordToPost" */
export type _KeywordToPost_Inc_Input = {
  A?: InputMaybe<Scalars['Int']>;
  B?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "_KeywordToPost" */
export type _KeywordToPost_Insert_Input = {
  A?: InputMaybe<Scalars['Int']>;
  B?: InputMaybe<Scalars['Int']>;
  Keyword?: InputMaybe<Keyword_Obj_Rel_Insert_Input>;
  Post?: InputMaybe<Post_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type _KeywordToPost_Max_Fields = {
  __typename?: '_KeywordToPost_max_fields';
  A?: Maybe<Scalars['Int']>;
  B?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "_KeywordToPost" */
export type _KeywordToPost_Max_Order_By = {
  A?: InputMaybe<Order_By>;
  B?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type _KeywordToPost_Min_Fields = {
  __typename?: '_KeywordToPost_min_fields';
  A?: Maybe<Scalars['Int']>;
  B?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "_KeywordToPost" */
export type _KeywordToPost_Min_Order_By = {
  A?: InputMaybe<Order_By>;
  B?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "_KeywordToPost" */
export type _KeywordToPost_Mutation_Response = {
  __typename?: '_KeywordToPost_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_KeywordToPost>;
};

/** on_conflict condition type for table "_KeywordToPost" */
export type _KeywordToPost_On_Conflict = {
  constraint: _KeywordToPost_Constraint;
  update_columns?: Array<_KeywordToPost_Update_Column>;
  where?: InputMaybe<_KeywordToPost_Bool_Exp>;
};

/** Ordering options when selecting data from "_KeywordToPost". */
export type _KeywordToPost_Order_By = {
  A?: InputMaybe<Order_By>;
  B?: InputMaybe<Order_By>;
  Keyword?: InputMaybe<Keyword_Order_By>;
  Post?: InputMaybe<Post_Order_By>;
};

/** select columns of table "_KeywordToPost" */
export enum _KeywordToPost_Select_Column {
  /** column name */
  A = 'A',
  /** column name */
  B = 'B'
}

/** input type for updating data in table "_KeywordToPost" */
export type _KeywordToPost_Set_Input = {
  A?: InputMaybe<Scalars['Int']>;
  B?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type _KeywordToPost_Stddev_Fields = {
  __typename?: '_KeywordToPost_stddev_fields';
  A?: Maybe<Scalars['Float']>;
  B?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "_KeywordToPost" */
export type _KeywordToPost_Stddev_Order_By = {
  A?: InputMaybe<Order_By>;
  B?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type _KeywordToPost_Stddev_Pop_Fields = {
  __typename?: '_KeywordToPost_stddev_pop_fields';
  A?: Maybe<Scalars['Float']>;
  B?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "_KeywordToPost" */
export type _KeywordToPost_Stddev_Pop_Order_By = {
  A?: InputMaybe<Order_By>;
  B?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type _KeywordToPost_Stddev_Samp_Fields = {
  __typename?: '_KeywordToPost_stddev_samp_fields';
  A?: Maybe<Scalars['Float']>;
  B?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "_KeywordToPost" */
export type _KeywordToPost_Stddev_Samp_Order_By = {
  A?: InputMaybe<Order_By>;
  B?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "_KeywordToPost" */
export type _KeywordToPost_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: _KeywordToPost_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _KeywordToPost_Stream_Cursor_Value_Input = {
  A?: InputMaybe<Scalars['Int']>;
  B?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type _KeywordToPost_Sum_Fields = {
  __typename?: '_KeywordToPost_sum_fields';
  A?: Maybe<Scalars['Int']>;
  B?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "_KeywordToPost" */
export type _KeywordToPost_Sum_Order_By = {
  A?: InputMaybe<Order_By>;
  B?: InputMaybe<Order_By>;
};

/** update columns of table "_KeywordToPost" */
export enum _KeywordToPost_Update_Column {
  /** column name */
  A = 'A',
  /** column name */
  B = 'B'
}

export type _KeywordToPost_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<_KeywordToPost_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<_KeywordToPost_Set_Input>;
  where: _KeywordToPost_Bool_Exp;
};

/** aggregate var_pop on columns */
export type _KeywordToPost_Var_Pop_Fields = {
  __typename?: '_KeywordToPost_var_pop_fields';
  A?: Maybe<Scalars['Float']>;
  B?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "_KeywordToPost" */
export type _KeywordToPost_Var_Pop_Order_By = {
  A?: InputMaybe<Order_By>;
  B?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type _KeywordToPost_Var_Samp_Fields = {
  __typename?: '_KeywordToPost_var_samp_fields';
  A?: Maybe<Scalars['Float']>;
  B?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "_KeywordToPost" */
export type _KeywordToPost_Var_Samp_Order_By = {
  A?: InputMaybe<Order_By>;
  B?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type _KeywordToPost_Variance_Fields = {
  __typename?: '_KeywordToPost_variance_fields';
  A?: Maybe<Scalars['Float']>;
  B?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "_KeywordToPost" */
export type _KeywordToPost_Variance_Order_By = {
  A?: InputMaybe<Order_By>;
  B?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  changePassword: UserNest;
  /** delete data from the table: "Bookmark" */
  delete_Bookmark?: Maybe<Bookmark_Mutation_Response>;
  /** delete single row from the table: "Bookmark" */
  delete_Bookmark_by_pk?: Maybe<Bookmark>;
  /** delete data from the table: "Category" */
  delete_Category?: Maybe<Category_Mutation_Response>;
  /** delete single row from the table: "Category" */
  delete_Category_by_pk?: Maybe<Category>;
  /** delete data from the table: "Comment" */
  delete_Comment?: Maybe<Comment_Mutation_Response>;
  /** delete single row from the table: "Comment" */
  delete_Comment_by_pk?: Maybe<Comment>;
  /** delete data from the table: "Company" */
  delete_Company?: Maybe<Company_Mutation_Response>;
  /** delete single row from the table: "Company" */
  delete_Company_by_pk?: Maybe<Company>;
  /** delete data from the table: "Keyword" */
  delete_Keyword?: Maybe<Keyword_Mutation_Response>;
  /** delete single row from the table: "Keyword" */
  delete_Keyword_by_pk?: Maybe<Keyword>;
  /** delete data from the table: "Post" */
  delete_Post?: Maybe<Post_Mutation_Response>;
  /** delete single row from the table: "Post" */
  delete_Post_by_pk?: Maybe<Post>;
  /** delete data from the table: "Publisher" */
  delete_Publisher?: Maybe<Publisher_Mutation_Response>;
  /** delete single row from the table: "Publisher" */
  delete_Publisher_by_pk?: Maybe<Publisher>;
  /** delete data from the table: "Source" */
  delete_Source?: Maybe<Source_Mutation_Response>;
  /** delete single row from the table: "Source" */
  delete_Source_by_pk?: Maybe<Source>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** delete data from the table: "Vote" */
  delete_Vote?: Maybe<Vote_Mutation_Response>;
  /** delete single row from the table: "Vote" */
  delete_Vote_by_pk?: Maybe<Vote>;
  /** delete data from the table: "Watchlist" */
  delete_Watchlist?: Maybe<Watchlist_Mutation_Response>;
  /** delete single row from the table: "Watchlist" */
  delete_Watchlist_by_pk?: Maybe<Watchlist>;
  /** delete data from the table: "_KeywordToPost" */
  delete__KeywordToPost?: Maybe<_KeywordToPost_Mutation_Response>;
  forgotPassword: Scalars['String'];
  /** insert data into the table: "Bookmark" */
  insert_Bookmark?: Maybe<Bookmark_Mutation_Response>;
  /** insert a single row into the table: "Bookmark" */
  insert_Bookmark_one?: Maybe<Bookmark>;
  /** insert data into the table: "Category" */
  insert_Category?: Maybe<Category_Mutation_Response>;
  /** insert a single row into the table: "Category" */
  insert_Category_one?: Maybe<Category>;
  /** insert data into the table: "Comment" */
  insert_Comment?: Maybe<Comment_Mutation_Response>;
  /** insert a single row into the table: "Comment" */
  insert_Comment_one?: Maybe<Comment>;
  /** insert data into the table: "Company" */
  insert_Company?: Maybe<Company_Mutation_Response>;
  /** insert a single row into the table: "Company" */
  insert_Company_one?: Maybe<Company>;
  /** insert data into the table: "Keyword" */
  insert_Keyword?: Maybe<Keyword_Mutation_Response>;
  /** insert a single row into the table: "Keyword" */
  insert_Keyword_one?: Maybe<Keyword>;
  /** insert data into the table: "Post" */
  insert_Post?: Maybe<Post_Mutation_Response>;
  /** insert a single row into the table: "Post" */
  insert_Post_one?: Maybe<Post>;
  /** insert data into the table: "Publisher" */
  insert_Publisher?: Maybe<Publisher_Mutation_Response>;
  /** insert a single row into the table: "Publisher" */
  insert_Publisher_one?: Maybe<Publisher>;
  /** insert data into the table: "Source" */
  insert_Source?: Maybe<Source_Mutation_Response>;
  /** insert a single row into the table: "Source" */
  insert_Source_one?: Maybe<Source>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** insert data into the table: "Vote" */
  insert_Vote?: Maybe<Vote_Mutation_Response>;
  /** insert a single row into the table: "Vote" */
  insert_Vote_one?: Maybe<Vote>;
  /** insert data into the table: "Watchlist" */
  insert_Watchlist?: Maybe<Watchlist_Mutation_Response>;
  /** insert a single row into the table: "Watchlist" */
  insert_Watchlist_one?: Maybe<Watchlist>;
  /** insert data into the table: "_KeywordToPost" */
  insert__KeywordToPost?: Maybe<_KeywordToPost_Mutation_Response>;
  /** insert a single row into the table: "_KeywordToPost" */
  insert__KeywordToPost_one?: Maybe<_KeywordToPost>;
  login: Auth;
  refreshToken: Token;
  resetPassword: Scalars['String'];
  signup: Auth;
  /** update data of the table: "Bookmark" */
  update_Bookmark?: Maybe<Bookmark_Mutation_Response>;
  /** update single row of the table: "Bookmark" */
  update_Bookmark_by_pk?: Maybe<Bookmark>;
  /** update multiples rows of table: "Bookmark" */
  update_Bookmark_many?: Maybe<Array<Maybe<Bookmark_Mutation_Response>>>;
  /** update data of the table: "Category" */
  update_Category?: Maybe<Category_Mutation_Response>;
  /** update single row of the table: "Category" */
  update_Category_by_pk?: Maybe<Category>;
  /** update multiples rows of table: "Category" */
  update_Category_many?: Maybe<Array<Maybe<Category_Mutation_Response>>>;
  /** update data of the table: "Comment" */
  update_Comment?: Maybe<Comment_Mutation_Response>;
  /** update single row of the table: "Comment" */
  update_Comment_by_pk?: Maybe<Comment>;
  /** update multiples rows of table: "Comment" */
  update_Comment_many?: Maybe<Array<Maybe<Comment_Mutation_Response>>>;
  /** update data of the table: "Company" */
  update_Company?: Maybe<Company_Mutation_Response>;
  /** update single row of the table: "Company" */
  update_Company_by_pk?: Maybe<Company>;
  /** update multiples rows of table: "Company" */
  update_Company_many?: Maybe<Array<Maybe<Company_Mutation_Response>>>;
  /** update data of the table: "Keyword" */
  update_Keyword?: Maybe<Keyword_Mutation_Response>;
  /** update single row of the table: "Keyword" */
  update_Keyword_by_pk?: Maybe<Keyword>;
  /** update multiples rows of table: "Keyword" */
  update_Keyword_many?: Maybe<Array<Maybe<Keyword_Mutation_Response>>>;
  /** update data of the table: "Post" */
  update_Post?: Maybe<Post_Mutation_Response>;
  /** update single row of the table: "Post" */
  update_Post_by_pk?: Maybe<Post>;
  /** update multiples rows of table: "Post" */
  update_Post_many?: Maybe<Array<Maybe<Post_Mutation_Response>>>;
  /** update data of the table: "Publisher" */
  update_Publisher?: Maybe<Publisher_Mutation_Response>;
  /** update single row of the table: "Publisher" */
  update_Publisher_by_pk?: Maybe<Publisher>;
  /** update multiples rows of table: "Publisher" */
  update_Publisher_many?: Maybe<Array<Maybe<Publisher_Mutation_Response>>>;
  /** update data of the table: "Source" */
  update_Source?: Maybe<Source_Mutation_Response>;
  /** update single row of the table: "Source" */
  update_Source_by_pk?: Maybe<Source>;
  /** update multiples rows of table: "Source" */
  update_Source_many?: Maybe<Array<Maybe<Source_Mutation_Response>>>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
  /** update multiples rows of table: "User" */
  update_User_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
  /** update data of the table: "Vote" */
  update_Vote?: Maybe<Vote_Mutation_Response>;
  /** update single row of the table: "Vote" */
  update_Vote_by_pk?: Maybe<Vote>;
  /** update multiples rows of table: "Vote" */
  update_Vote_many?: Maybe<Array<Maybe<Vote_Mutation_Response>>>;
  /** update data of the table: "Watchlist" */
  update_Watchlist?: Maybe<Watchlist_Mutation_Response>;
  /** update single row of the table: "Watchlist" */
  update_Watchlist_by_pk?: Maybe<Watchlist>;
  /** update multiples rows of table: "Watchlist" */
  update_Watchlist_many?: Maybe<Array<Maybe<Watchlist_Mutation_Response>>>;
  /** update data of the table: "_KeywordToPost" */
  update__KeywordToPost?: Maybe<_KeywordToPost_Mutation_Response>;
  /** update multiples rows of table: "_KeywordToPost" */
  update__KeywordToPost_many?: Maybe<Array<Maybe<_KeywordToPost_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootChangePasswordArgs = {
  data: ChangePasswordInput;
};


/** mutation root */
export type Mutation_RootDelete_BookmarkArgs = {
  where: Bookmark_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bookmark_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CategoryArgs = {
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Category_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CommentArgs = {
  where: Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comment_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CompanyArgs = {
  where: Company_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Company_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_KeywordArgs = {
  where: Keyword_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Keyword_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PostArgs = {
  where: Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PublisherArgs = {
  where: Publisher_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Publisher_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_SourceArgs = {
  where: Source_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Source_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_VoteArgs = {
  where: Vote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vote_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_WatchlistArgs = {
  where: Watchlist_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Watchlist_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete__KeywordToPostArgs = {
  where: _KeywordToPost_Bool_Exp;
};


/** mutation root */
export type Mutation_RootForgotPasswordArgs = {
  data: ForgotPasswordInput;
};


/** mutation root */
export type Mutation_RootInsert_BookmarkArgs = {
  objects: Array<Bookmark_Insert_Input>;
  on_conflict?: InputMaybe<Bookmark_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bookmark_OneArgs = {
  object: Bookmark_Insert_Input;
  on_conflict?: InputMaybe<Bookmark_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoryArgs = {
  objects: Array<Category_Insert_Input>;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Category_OneArgs = {
  object: Category_Insert_Input;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CommentArgs = {
  objects: Array<Comment_Insert_Input>;
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comment_OneArgs = {
  object: Comment_Insert_Input;
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CompanyArgs = {
  objects: Array<Company_Insert_Input>;
  on_conflict?: InputMaybe<Company_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_OneArgs = {
  object: Company_Insert_Input;
  on_conflict?: InputMaybe<Company_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_KeywordArgs = {
  objects: Array<Keyword_Insert_Input>;
  on_conflict?: InputMaybe<Keyword_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Keyword_OneArgs = {
  object: Keyword_Insert_Input;
  on_conflict?: InputMaybe<Keyword_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PostArgs = {
  objects: Array<Post_Insert_Input>;
  on_conflict?: InputMaybe<Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_OneArgs = {
  object: Post_Insert_Input;
  on_conflict?: InputMaybe<Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PublisherArgs = {
  objects: Array<Publisher_Insert_Input>;
  on_conflict?: InputMaybe<Publisher_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Publisher_OneArgs = {
  object: Publisher_Insert_Input;
  on_conflict?: InputMaybe<Publisher_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SourceArgs = {
  objects: Array<Source_Insert_Input>;
  on_conflict?: InputMaybe<Source_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Source_OneArgs = {
  object: Source_Insert_Input;
  on_conflict?: InputMaybe<Source_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VoteArgs = {
  objects: Array<Vote_Insert_Input>;
  on_conflict?: InputMaybe<Vote_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vote_OneArgs = {
  object: Vote_Insert_Input;
  on_conflict?: InputMaybe<Vote_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WatchlistArgs = {
  objects: Array<Watchlist_Insert_Input>;
  on_conflict?: InputMaybe<Watchlist_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Watchlist_OneArgs = {
  object: Watchlist_Insert_Input;
  on_conflict?: InputMaybe<Watchlist_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__KeywordToPostArgs = {
  objects: Array<_KeywordToPost_Insert_Input>;
  on_conflict?: InputMaybe<_KeywordToPost_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__KeywordToPost_OneArgs = {
  object: _KeywordToPost_Insert_Input;
  on_conflict?: InputMaybe<_KeywordToPost_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  data: LoginInput;
};


/** mutation root */
export type Mutation_RootRefreshTokenArgs = {
  token: Scalars['JWT'];
};


/** mutation root */
export type Mutation_RootResetPasswordArgs = {
  data: ResetPasswordInput;
};


/** mutation root */
export type Mutation_RootSignupArgs = {
  data: SignupInput;
};


/** mutation root */
export type Mutation_RootUpdate_BookmarkArgs = {
  _inc?: InputMaybe<Bookmark_Inc_Input>;
  _set?: InputMaybe<Bookmark_Set_Input>;
  where: Bookmark_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bookmark_By_PkArgs = {
  _inc?: InputMaybe<Bookmark_Inc_Input>;
  _set?: InputMaybe<Bookmark_Set_Input>;
  pk_columns: Bookmark_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Bookmark_ManyArgs = {
  updates: Array<Bookmark_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoryArgs = {
  _inc?: InputMaybe<Category_Inc_Input>;
  _set?: InputMaybe<Category_Set_Input>;
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Category_By_PkArgs = {
  _inc?: InputMaybe<Category_Inc_Input>;
  _set?: InputMaybe<Category_Set_Input>;
  pk_columns: Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Category_ManyArgs = {
  updates: Array<Category_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CommentArgs = {
  _inc?: InputMaybe<Comment_Inc_Input>;
  _set?: InputMaybe<Comment_Set_Input>;
  where: Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_By_PkArgs = {
  _inc?: InputMaybe<Comment_Inc_Input>;
  _set?: InputMaybe<Comment_Set_Input>;
  pk_columns: Comment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_ManyArgs = {
  updates: Array<Comment_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CompanyArgs = {
  _inc?: InputMaybe<Company_Inc_Input>;
  _set?: InputMaybe<Company_Set_Input>;
  where: Company_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Company_By_PkArgs = {
  _inc?: InputMaybe<Company_Inc_Input>;
  _set?: InputMaybe<Company_Set_Input>;
  pk_columns: Company_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Company_ManyArgs = {
  updates: Array<Company_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_KeywordArgs = {
  _inc?: InputMaybe<Keyword_Inc_Input>;
  _set?: InputMaybe<Keyword_Set_Input>;
  where: Keyword_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Keyword_By_PkArgs = {
  _inc?: InputMaybe<Keyword_Inc_Input>;
  _set?: InputMaybe<Keyword_Set_Input>;
  pk_columns: Keyword_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Keyword_ManyArgs = {
  updates: Array<Keyword_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PostArgs = {
  _inc?: InputMaybe<Post_Inc_Input>;
  _set?: InputMaybe<Post_Set_Input>;
  where: Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_By_PkArgs = {
  _inc?: InputMaybe<Post_Inc_Input>;
  _set?: InputMaybe<Post_Set_Input>;
  pk_columns: Post_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_ManyArgs = {
  updates: Array<Post_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PublisherArgs = {
  _inc?: InputMaybe<Publisher_Inc_Input>;
  _set?: InputMaybe<Publisher_Set_Input>;
  where: Publisher_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Publisher_By_PkArgs = {
  _inc?: InputMaybe<Publisher_Inc_Input>;
  _set?: InputMaybe<Publisher_Set_Input>;
  pk_columns: Publisher_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Publisher_ManyArgs = {
  updates: Array<Publisher_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SourceArgs = {
  _inc?: InputMaybe<Source_Inc_Input>;
  _set?: InputMaybe<Source_Set_Input>;
  where: Source_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Source_By_PkArgs = {
  _inc?: InputMaybe<Source_Inc_Input>;
  _set?: InputMaybe<Source_Set_Input>;
  pk_columns: Source_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Source_ManyArgs = {
  updates: Array<Source_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VoteArgs = {
  _inc?: InputMaybe<Vote_Inc_Input>;
  _set?: InputMaybe<Vote_Set_Input>;
  where: Vote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vote_By_PkArgs = {
  _inc?: InputMaybe<Vote_Inc_Input>;
  _set?: InputMaybe<Vote_Set_Input>;
  pk_columns: Vote_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vote_ManyArgs = {
  updates: Array<Vote_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_WatchlistArgs = {
  _inc?: InputMaybe<Watchlist_Inc_Input>;
  _set?: InputMaybe<Watchlist_Set_Input>;
  where: Watchlist_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Watchlist_By_PkArgs = {
  _inc?: InputMaybe<Watchlist_Inc_Input>;
  _set?: InputMaybe<Watchlist_Set_Input>;
  pk_columns: Watchlist_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Watchlist_ManyArgs = {
  updates: Array<Watchlist_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate__KeywordToPostArgs = {
  _inc?: InputMaybe<_KeywordToPost_Inc_Input>;
  _set?: InputMaybe<_KeywordToPost_Set_Input>;
  where: _KeywordToPost_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__KeywordToPost_ManyArgs = {
  updates: Array<_KeywordToPost_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Bookmark" */
  Bookmark: Array<Bookmark>;
  /** fetch aggregated fields from the table: "Bookmark" */
  Bookmark_aggregate: Bookmark_Aggregate;
  /** fetch data from the table: "Bookmark" using primary key columns */
  Bookmark_by_pk?: Maybe<Bookmark>;
  /** fetch data from the table: "Category" */
  Category: Array<Category>;
  /** fetch aggregated fields from the table: "Category" */
  Category_aggregate: Category_Aggregate;
  /** fetch data from the table: "Category" using primary key columns */
  Category_by_pk?: Maybe<Category>;
  /** fetch data from the table: "Comment" */
  Comment: Array<Comment>;
  /** fetch aggregated fields from the table: "Comment" */
  Comment_aggregate: Comment_Aggregate;
  /** fetch data from the table: "Comment" using primary key columns */
  Comment_by_pk?: Maybe<Comment>;
  /** fetch data from the table: "Company" */
  Company: Array<Company>;
  /** fetch aggregated fields from the table: "Company" */
  Company_aggregate: Company_Aggregate;
  /** fetch data from the table: "Company" using primary key columns */
  Company_by_pk?: Maybe<Company>;
  /** fetch data from the table: "Keyword" */
  Keyword: Array<Keyword>;
  /** fetch aggregated fields from the table: "Keyword" */
  Keyword_aggregate: Keyword_Aggregate;
  /** fetch data from the table: "Keyword" using primary key columns */
  Keyword_by_pk?: Maybe<Keyword>;
  /** fetch data from the table: "Post" */
  Post: Array<Post>;
  /** fetch aggregated fields from the table: "Post" */
  Post_aggregate: Post_Aggregate;
  /** fetch data from the table: "Post" using primary key columns */
  Post_by_pk?: Maybe<Post>;
  /** fetch data from the table: "Publisher" */
  Publisher: Array<Publisher>;
  /** fetch aggregated fields from the table: "Publisher" */
  Publisher_aggregate: Publisher_Aggregate;
  /** fetch data from the table: "Publisher" using primary key columns */
  Publisher_by_pk?: Maybe<Publisher>;
  /** fetch data from the table: "Source" */
  Source: Array<Source>;
  /** fetch aggregated fields from the table: "Source" */
  Source_aggregate: Source_Aggregate;
  /** fetch data from the table: "Source" using primary key columns */
  Source_by_pk?: Maybe<Source>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table: "Vote" */
  Vote: Array<Vote>;
  /** fetch aggregated fields from the table: "Vote" */
  Vote_aggregate: Vote_Aggregate;
  /** fetch data from the table: "Vote" using primary key columns */
  Vote_by_pk?: Maybe<Vote>;
  /** fetch data from the table: "Watchlist" */
  Watchlist: Array<Watchlist>;
  /** fetch aggregated fields from the table: "Watchlist" */
  Watchlist_aggregate: Watchlist_Aggregate;
  /** fetch data from the table: "Watchlist" using primary key columns */
  Watchlist_by_pk?: Maybe<Watchlist>;
  /** fetch data from the table: "_KeywordToPost" */
  _KeywordToPost: Array<_KeywordToPost>;
  /** fetch aggregated fields from the table: "_KeywordToPost" */
  _KeywordToPost_aggregate: _KeywordToPost_Aggregate;
  hello: Scalars['String'];
  helloWorld: Scalars['String'];
  me: UserNest;
};


export type Query_RootBookmarkArgs = {
  distinct_on?: InputMaybe<Array<Bookmark_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bookmark_Order_By>>;
  where?: InputMaybe<Bookmark_Bool_Exp>;
};


export type Query_RootBookmark_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bookmark_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bookmark_Order_By>>;
  where?: InputMaybe<Bookmark_Bool_Exp>;
};


export type Query_RootBookmark_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCommentArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Query_RootComment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Query_RootComment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCompanyArgs = {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Query_RootCompany_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Query_RootCompany_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootKeywordArgs = {
  distinct_on?: InputMaybe<Array<Keyword_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Keyword_Order_By>>;
  where?: InputMaybe<Keyword_Bool_Exp>;
};


export type Query_RootKeyword_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Keyword_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Keyword_Order_By>>;
  where?: InputMaybe<Keyword_Bool_Exp>;
};


export type Query_RootKeyword_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPostArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Query_RootPost_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Query_RootPost_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPublisherArgs = {
  distinct_on?: InputMaybe<Array<Publisher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Publisher_Order_By>>;
  where?: InputMaybe<Publisher_Bool_Exp>;
};


export type Query_RootPublisher_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Publisher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Publisher_Order_By>>;
  where?: InputMaybe<Publisher_Bool_Exp>;
};


export type Query_RootPublisher_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSourceArgs = {
  distinct_on?: InputMaybe<Array<Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Source_Order_By>>;
  where?: InputMaybe<Source_Bool_Exp>;
};


export type Query_RootSource_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Source_Order_By>>;
  where?: InputMaybe<Source_Bool_Exp>;
};


export type Query_RootSource_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootVoteArgs = {
  distinct_on?: InputMaybe<Array<Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vote_Order_By>>;
  where?: InputMaybe<Vote_Bool_Exp>;
};


export type Query_RootVote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vote_Order_By>>;
  where?: InputMaybe<Vote_Bool_Exp>;
};


export type Query_RootVote_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootWatchlistArgs = {
  distinct_on?: InputMaybe<Array<Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Watchlist_Order_By>>;
  where?: InputMaybe<Watchlist_Bool_Exp>;
};


export type Query_RootWatchlist_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Watchlist_Order_By>>;
  where?: InputMaybe<Watchlist_Bool_Exp>;
};


export type Query_RootWatchlist_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_Root_KeywordToPostArgs = {
  distinct_on?: InputMaybe<Array<_KeywordToPost_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_KeywordToPost_Order_By>>;
  where?: InputMaybe<_KeywordToPost_Bool_Exp>;
};


export type Query_Root_KeywordToPost_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_KeywordToPost_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_KeywordToPost_Order_By>>;
  where?: InputMaybe<_KeywordToPost_Bool_Exp>;
};


export type Query_RootHelloArgs = {
  name: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Bookmark" */
  Bookmark: Array<Bookmark>;
  /** fetch aggregated fields from the table: "Bookmark" */
  Bookmark_aggregate: Bookmark_Aggregate;
  /** fetch data from the table: "Bookmark" using primary key columns */
  Bookmark_by_pk?: Maybe<Bookmark>;
  /** fetch data from the table in a streaming manner: "Bookmark" */
  Bookmark_stream: Array<Bookmark>;
  /** fetch data from the table: "Category" */
  Category: Array<Category>;
  /** fetch aggregated fields from the table: "Category" */
  Category_aggregate: Category_Aggregate;
  /** fetch data from the table: "Category" using primary key columns */
  Category_by_pk?: Maybe<Category>;
  /** fetch data from the table in a streaming manner: "Category" */
  Category_stream: Array<Category>;
  /** fetch data from the table: "Comment" */
  Comment: Array<Comment>;
  /** fetch aggregated fields from the table: "Comment" */
  Comment_aggregate: Comment_Aggregate;
  /** fetch data from the table: "Comment" using primary key columns */
  Comment_by_pk?: Maybe<Comment>;
  /** fetch data from the table in a streaming manner: "Comment" */
  Comment_stream: Array<Comment>;
  /** fetch data from the table: "Company" */
  Company: Array<Company>;
  /** fetch aggregated fields from the table: "Company" */
  Company_aggregate: Company_Aggregate;
  /** fetch data from the table: "Company" using primary key columns */
  Company_by_pk?: Maybe<Company>;
  /** fetch data from the table in a streaming manner: "Company" */
  Company_stream: Array<Company>;
  /** fetch data from the table: "Keyword" */
  Keyword: Array<Keyword>;
  /** fetch aggregated fields from the table: "Keyword" */
  Keyword_aggregate: Keyword_Aggregate;
  /** fetch data from the table: "Keyword" using primary key columns */
  Keyword_by_pk?: Maybe<Keyword>;
  /** fetch data from the table in a streaming manner: "Keyword" */
  Keyword_stream: Array<Keyword>;
  /** fetch data from the table: "Post" */
  Post: Array<Post>;
  /** fetch aggregated fields from the table: "Post" */
  Post_aggregate: Post_Aggregate;
  /** fetch data from the table: "Post" using primary key columns */
  Post_by_pk?: Maybe<Post>;
  /** fetch data from the table in a streaming manner: "Post" */
  Post_stream: Array<Post>;
  /** fetch data from the table: "Publisher" */
  Publisher: Array<Publisher>;
  /** fetch aggregated fields from the table: "Publisher" */
  Publisher_aggregate: Publisher_Aggregate;
  /** fetch data from the table: "Publisher" using primary key columns */
  Publisher_by_pk?: Maybe<Publisher>;
  /** fetch data from the table in a streaming manner: "Publisher" */
  Publisher_stream: Array<Publisher>;
  /** fetch data from the table: "Source" */
  Source: Array<Source>;
  /** fetch aggregated fields from the table: "Source" */
  Source_aggregate: Source_Aggregate;
  /** fetch data from the table: "Source" using primary key columns */
  Source_by_pk?: Maybe<Source>;
  /** fetch data from the table in a streaming manner: "Source" */
  Source_stream: Array<Source>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "User" */
  User_stream: Array<User>;
  /** fetch data from the table: "Vote" */
  Vote: Array<Vote>;
  /** fetch aggregated fields from the table: "Vote" */
  Vote_aggregate: Vote_Aggregate;
  /** fetch data from the table: "Vote" using primary key columns */
  Vote_by_pk?: Maybe<Vote>;
  /** fetch data from the table in a streaming manner: "Vote" */
  Vote_stream: Array<Vote>;
  /** fetch data from the table: "Watchlist" */
  Watchlist: Array<Watchlist>;
  /** fetch aggregated fields from the table: "Watchlist" */
  Watchlist_aggregate: Watchlist_Aggregate;
  /** fetch data from the table: "Watchlist" using primary key columns */
  Watchlist_by_pk?: Maybe<Watchlist>;
  /** fetch data from the table in a streaming manner: "Watchlist" */
  Watchlist_stream: Array<Watchlist>;
  /** fetch data from the table: "_KeywordToPost" */
  _KeywordToPost: Array<_KeywordToPost>;
  /** fetch aggregated fields from the table: "_KeywordToPost" */
  _KeywordToPost_aggregate: _KeywordToPost_Aggregate;
  /** fetch data from the table in a streaming manner: "_KeywordToPost" */
  _KeywordToPost_stream: Array<_KeywordToPost>;
};


export type Subscription_RootBookmarkArgs = {
  distinct_on?: InputMaybe<Array<Bookmark_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bookmark_Order_By>>;
  where?: InputMaybe<Bookmark_Bool_Exp>;
};


export type Subscription_RootBookmark_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bookmark_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bookmark_Order_By>>;
  where?: InputMaybe<Bookmark_Bool_Exp>;
};


export type Subscription_RootBookmark_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootBookmark_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Bookmark_Stream_Cursor_Input>>;
  where?: InputMaybe<Bookmark_Bool_Exp>;
};


export type Subscription_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCategory_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Category_Stream_Cursor_Input>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCommentArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Subscription_RootComment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Subscription_RootComment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootComment_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Comment_Stream_Cursor_Input>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Subscription_RootCompanyArgs = {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Subscription_RootCompany_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Subscription_RootCompany_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCompany_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Company_Stream_Cursor_Input>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Subscription_RootKeywordArgs = {
  distinct_on?: InputMaybe<Array<Keyword_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Keyword_Order_By>>;
  where?: InputMaybe<Keyword_Bool_Exp>;
};


export type Subscription_RootKeyword_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Keyword_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Keyword_Order_By>>;
  where?: InputMaybe<Keyword_Bool_Exp>;
};


export type Subscription_RootKeyword_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootKeyword_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Keyword_Stream_Cursor_Input>>;
  where?: InputMaybe<Keyword_Bool_Exp>;
};


export type Subscription_RootPostArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Subscription_RootPost_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Subscription_RootPost_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPost_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Post_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Subscription_RootPublisherArgs = {
  distinct_on?: InputMaybe<Array<Publisher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Publisher_Order_By>>;
  where?: InputMaybe<Publisher_Bool_Exp>;
};


export type Subscription_RootPublisher_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Publisher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Publisher_Order_By>>;
  where?: InputMaybe<Publisher_Bool_Exp>;
};


export type Subscription_RootPublisher_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPublisher_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Publisher_Stream_Cursor_Input>>;
  where?: InputMaybe<Publisher_Bool_Exp>;
};


export type Subscription_RootSourceArgs = {
  distinct_on?: InputMaybe<Array<Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Source_Order_By>>;
  where?: InputMaybe<Source_Bool_Exp>;
};


export type Subscription_RootSource_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Source_Order_By>>;
  where?: InputMaybe<Source_Bool_Exp>;
};


export type Subscription_RootSource_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSource_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Source_Stream_Cursor_Input>>;
  where?: InputMaybe<Source_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootVoteArgs = {
  distinct_on?: InputMaybe<Array<Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vote_Order_By>>;
  where?: InputMaybe<Vote_Bool_Exp>;
};


export type Subscription_RootVote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vote_Order_By>>;
  where?: InputMaybe<Vote_Bool_Exp>;
};


export type Subscription_RootVote_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVote_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vote_Stream_Cursor_Input>>;
  where?: InputMaybe<Vote_Bool_Exp>;
};


export type Subscription_RootWatchlistArgs = {
  distinct_on?: InputMaybe<Array<Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Watchlist_Order_By>>;
  where?: InputMaybe<Watchlist_Bool_Exp>;
};


export type Subscription_RootWatchlist_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Watchlist_Order_By>>;
  where?: InputMaybe<Watchlist_Bool_Exp>;
};


export type Subscription_RootWatchlist_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootWatchlist_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Watchlist_Stream_Cursor_Input>>;
  where?: InputMaybe<Watchlist_Bool_Exp>;
};


export type Subscription_Root_KeywordToPostArgs = {
  distinct_on?: InputMaybe<Array<_KeywordToPost_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_KeywordToPost_Order_By>>;
  where?: InputMaybe<_KeywordToPost_Bool_Exp>;
};


export type Subscription_Root_KeywordToPost_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_KeywordToPost_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_KeywordToPost_Order_By>>;
  where?: InputMaybe<_KeywordToPost_Bool_Exp>;
};


export type Subscription_Root_KeywordToPost_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<_KeywordToPost_Stream_Cursor_Input>>;
  where?: InputMaybe<_KeywordToPost_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

export type LoginMutationVariables = Exact<{
  loginData: LoginInput;
}>;


export type LoginMutation = { __typename?: 'mutation_root', login: { __typename?: 'Auth', refreshToken: any, accessToken: any } };

export type SignupMutationVariables = Exact<{
  data: SignupInput;
}>;


export type SignupMutation = { __typename?: 'mutation_root', signup: { __typename?: 'Auth', accessToken: any, refreshToken: any } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'query_root', me: { __typename?: 'UserNest', email: string, firstname?: string | null, lastname?: string | null, id: string } };

export type PostQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Post_Order_By> | Post_Order_By>;
}>;


export type PostQuery = { __typename?: 'query_root', Post: Array<{ __typename?: 'Post', id: number, image?: string | null, permalink: string, sourceId?: number | null, categoryId?: number | null, createdAt: any, title: string, slug: string, Source?: { __typename?: 'Source', id: number, name: string, Publisher?: { __typename?: 'Publisher', id: number, name: string } | null } | null, Votes_aggregate: { __typename?: 'Vote_aggregate', aggregate?: { __typename?: 'Vote_aggregate_fields', count: number } | null } }> };

export type Insert_Bookmark_OneMutationVariables = Exact<{
  object: Bookmark_Insert_Input;
}>;


export type Insert_Bookmark_OneMutation = { __typename?: 'mutation_root', insert_Bookmark_one?: { __typename?: 'Bookmark', postId?: number | null, userId?: string | null, id: number } | null };

export type Delete_Bookmark_By_PkMutationVariables = Exact<{
  deleteBookmarkByPkId: Scalars['Int'];
}>;


export type Delete_Bookmark_By_PkMutation = { __typename?: 'mutation_root', delete_Bookmark_by_pk?: { __typename?: 'Bookmark', postId?: number | null, id: number } | null };

export type GetPostCommentsQueryVariables = Exact<{
  where?: InputMaybe<Comment_Bool_Exp>;
  orderBy?: InputMaybe<Array<Comment_Order_By> | Comment_Order_By>;
}>;


export type GetPostCommentsQuery = { __typename?: 'query_root', Comment: Array<{ __typename?: 'Comment', userId?: string | null, postId?: number | null, id: number, createdAt: any, content: string, User?: { __typename?: 'User', firstname?: string | null, lastname?: string | null, id: string } | null }> };

export type Insert_Comment_OneMutationVariables = Exact<{
  object: Comment_Insert_Input;
}>;


export type Insert_Comment_OneMutation = { __typename?: 'mutation_root', insert_Comment_one?: { __typename?: 'Comment', userId?: string | null, postId?: number | null, id: number, createdAt: any, content: string, User?: { __typename?: 'User', firstname?: string | null, lastname?: string | null, id: string } | null } | null };

export type CommentSubscriptionVariables = Exact<{
  where?: InputMaybe<Comment_Bool_Exp>;
  orderBy?: InputMaybe<Array<Comment_Order_By> | Comment_Order_By>;
}>;


export type CommentSubscription = { __typename?: 'subscription_root', Comment: Array<{ __typename?: 'Comment', userId?: string | null, postId?: number | null, id: number, createdAt: any, content: string, User?: { __typename?: 'User', firstname?: string | null, lastname?: string | null, id: string } | null }> };

export type PostWithBookmarkQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<Post_Order_By> | Post_Order_By>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Post_Bool_Exp>;
}>;


export type PostWithBookmarkQuery = { __typename?: 'query_root', Post: Array<{ __typename?: 'Post', id: number, image?: string | null, permalink: string, sourceId?: number | null, categoryId?: number | null, createdAt: any, title: string, text?: string | null, articleHtml?: string | null, slug: string, Source?: { __typename?: 'Source', id: number, name: string, Publisher?: { __typename?: 'Publisher', id: number, name: string, image?: string | null } | null } | null, Votes_aggregate: { __typename?: 'Vote_aggregate', aggregate?: { __typename?: 'Vote_aggregate_fields', count: number } | null }, Bookmarks: Array<{ __typename?: 'Bookmark', id: number, createdAt: any, userId?: string | null }>, Votes: Array<{ __typename?: 'Vote', userId?: string | null, id: number }> }> };

export type Post_By_PkQueryVariables = Exact<{
  postByPkId: Scalars['Int'];
}>;


export type Post_By_PkQuery = { __typename?: 'query_root', Post_by_pk?: { __typename?: 'Post', id: number, image?: string | null, permalink: string, sourceId?: number | null, categoryId?: number | null, createdAt: any, title: string, text?: string | null, articleHtml?: string | null, Source?: { __typename?: 'Source', id: number, name: string, Publisher?: { __typename?: 'Publisher', id: number, name: string, image?: string | null } | null } | null, Votes_aggregate: { __typename?: 'Vote_aggregate', aggregate?: { __typename?: 'Vote_aggregate_fields', count: number } | null }, Bookmarks: Array<{ __typename?: 'Bookmark', id: number, createdAt: any, userId?: string | null }>, Votes: Array<{ __typename?: 'Vote', userId?: string | null, id: number }> } | null };

export type Post_By_SlugQueryVariables = Exact<{
  where?: InputMaybe<Post_Bool_Exp>;
}>;


export type Post_By_SlugQuery = { __typename?: 'query_root', Post: Array<{ __typename?: 'Post', id: number, image?: string | null, permalink: string, sourceId?: number | null, categoryId?: number | null, createdAt: any, title: string, text?: string | null, articleHtml?: string | null, Source?: { __typename?: 'Source', id: number, name: string, Publisher?: { __typename?: 'Publisher', id: number, name: string, image?: string | null } | null } | null, Votes_aggregate: { __typename?: 'Vote_aggregate', aggregate?: { __typename?: 'Vote_aggregate_fields', count: number } | null }, Bookmarks: Array<{ __typename?: 'Bookmark', id: number, createdAt: any, userId?: string | null }>, Votes: Array<{ __typename?: 'Vote', userId?: string | null, id: number }> }> };

export type VoteSubscriptionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type VoteSubscriptionSubscription = { __typename?: 'subscription_root', Vote_aggregate: { __typename?: 'Vote_aggregate', aggregate?: { __typename?: 'Vote_aggregate_fields', count: number } | null } };

export type UpVoteMutationVariables = Exact<{
  objects: Array<Vote_Insert_Input> | Vote_Insert_Input;
}>;


export type UpVoteMutation = { __typename?: 'mutation_root', insert_Vote?: { __typename?: 'Vote_mutation_response', returning: Array<{ __typename?: 'Vote', id: number, postId?: number | null, Post?: { __typename?: 'Post', Votes_aggregate: { __typename?: 'Vote_aggregate', aggregate?: { __typename?: 'Vote_aggregate_fields', count: number } | null } } | null }> } | null };

export type Delete_Vote_By_PkMutationVariables = Exact<{
  deleteVoteByPkId: Scalars['Int'];
}>;


export type Delete_Vote_By_PkMutation = { __typename?: 'mutation_root', delete_Vote_by_pk?: { __typename?: 'Vote', id: number, postId?: number | null } | null };

export type Vote_AggregateQueryVariables = Exact<{
  where?: InputMaybe<Vote_Bool_Exp>;
}>;


export type Vote_AggregateQuery = { __typename?: 'query_root', Vote_aggregate: { __typename?: 'Vote_aggregate', aggregate?: { __typename?: 'Vote_aggregate_fields', count: number } | null } };

export type WatchlistQueryVariables = Exact<{ [key: string]: never; }>;


export type WatchlistQuery = { __typename?: 'query_root', Watchlist: Array<{ __typename?: 'Watchlist', userId?: string | null, id: number, createdAt: any, Company?: { __typename?: 'Company', id: number, stockCode: string } | null }> };

export type CompanyQueryVariables = Exact<{
  where?: InputMaybe<Company_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type CompanyQuery = { __typename?: 'query_root', Company: Array<{ __typename?: 'Company', stockCode: string, postTo: string, nameVn: string, nameEn: string, id: number, c: number }> };

export type MyWatchlistsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MyWatchlistsSubscription = { __typename?: 'subscription_root', Watchlist: Array<{ __typename?: 'Watchlist', userId?: string | null, id: number, createdAt: any, Company?: { __typename?: 'Company', id: number, stockCode: string } | null }> };

export type GetWatchlistQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWatchlistQuery = { __typename?: 'query_root', Watchlist: Array<{ __typename?: 'Watchlist', userId?: string | null, id: number, createdAt: any, Company?: { __typename?: 'Company', id: number, stockCode: string } | null }> };

export type Insert_Watchlist_OneMutationVariables = Exact<{
  object: Watchlist_Insert_Input;
}>;


export type Insert_Watchlist_OneMutation = { __typename?: 'mutation_root', insert_Watchlist_one?: { __typename?: 'Watchlist', companyId?: number | null, id: number, symbol: string, userId?: string | null } | null };

export type Delete_Watchlist_By_PkMutationVariables = Exact<{
  deleteWatchlistByPkId: Scalars['Int'];
}>;


export type Delete_Watchlist_By_PkMutation = { __typename?: 'mutation_root', delete_Watchlist_by_pk?: { __typename?: 'Watchlist', id: number } | null };

export type Delete_WatchlistMutationVariables = Exact<{
  where: Watchlist_Bool_Exp;
}>;


export type Delete_WatchlistMutation = { __typename?: 'mutation_root', delete_Watchlist?: { __typename?: 'Watchlist_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'Watchlist', userId?: string | null, symbol: string }> } | null };


export const LoginDocument = gql`
    mutation Login($loginData: LoginInput!) {
  login(data: $loginData) {
    refreshToken
    accessToken
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const SignupDocument = gql`
    mutation Signup($data: SignupInput!) {
  signup(data: $data) {
    accessToken
    refreshToken
  }
}
    `;

export function useSignupMutation() {
  return Urql.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    email
    firstname
    lastname
    id
  }
}
    `;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery, MeQueryVariables>({ query: MeDocument, ...options });
};
export const PostDocument = gql`
    query Post($limit: Int, $offset: Int, $orderBy: [Post_order_by!]) {
  Post(limit: $limit, offset: $offset, order_by: $orderBy) {
    id
    image
    permalink
    sourceId
    categoryId
    createdAt
    title
    slug
    Source {
      id
      name
      Publisher {
        id
        name
      }
    }
    Votes_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

export function usePostQuery(options?: Omit<Urql.UseQueryArgs<PostQueryVariables>, 'query'>) {
  return Urql.useQuery<PostQuery, PostQueryVariables>({ query: PostDocument, ...options });
};
export const Insert_Bookmark_OneDocument = gql`
    mutation Insert_Bookmark_one($object: Bookmark_insert_input!) {
  insert_Bookmark_one(object: $object) {
    postId
    userId
    id
  }
}
    `;

export function useInsert_Bookmark_OneMutation() {
  return Urql.useMutation<Insert_Bookmark_OneMutation, Insert_Bookmark_OneMutationVariables>(Insert_Bookmark_OneDocument);
};
export const Delete_Bookmark_By_PkDocument = gql`
    mutation Delete_Bookmark_by_pk($deleteBookmarkByPkId: Int!) {
  delete_Bookmark_by_pk(id: $deleteBookmarkByPkId) {
    postId
    id
  }
}
    `;

export function useDelete_Bookmark_By_PkMutation() {
  return Urql.useMutation<Delete_Bookmark_By_PkMutation, Delete_Bookmark_By_PkMutationVariables>(Delete_Bookmark_By_PkDocument);
};
export const GetPostCommentsDocument = gql`
    query GetPostComments($where: Comment_bool_exp, $orderBy: [Comment_order_by!]) {
  Comment(where: $where, order_by: $orderBy) {
    userId
    postId
    id
    createdAt
    content
    User {
      firstname
      lastname
      id
    }
  }
}
    `;

export function useGetPostCommentsQuery(options?: Omit<Urql.UseQueryArgs<GetPostCommentsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPostCommentsQuery, GetPostCommentsQueryVariables>({ query: GetPostCommentsDocument, ...options });
};
export const Insert_Comment_OneDocument = gql`
    mutation Insert_Comment_one($object: Comment_insert_input!) {
  insert_Comment_one(object: $object) {
    userId
    postId
    id
    createdAt
    content
    User {
      firstname
      lastname
      id
    }
  }
}
    `;

export function useInsert_Comment_OneMutation() {
  return Urql.useMutation<Insert_Comment_OneMutation, Insert_Comment_OneMutationVariables>(Insert_Comment_OneDocument);
};
export const CommentDocument = gql`
    subscription Comment($where: Comment_bool_exp, $orderBy: [Comment_order_by!]) {
  Comment(where: $where, order_by: $orderBy) {
    userId
    postId
    id
    createdAt
    content
    User {
      firstname
      lastname
      id
    }
  }
}
    `;

export function useCommentSubscription<TData = CommentSubscription>(options: Omit<Urql.UseSubscriptionArgs<CommentSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<CommentSubscription, TData>) {
  return Urql.useSubscription<CommentSubscription, TData, CommentSubscriptionVariables>({ query: CommentDocument, ...options }, handler);
};
export const PostWithBookmarkDocument = gql`
    query PostWithBookmark($orderBy: [Post_order_by!], $limit: Int, $offset: Int, $where: Post_bool_exp) {
  Post(order_by: $orderBy, limit: $limit, offset: $offset, where: $where) {
    id
    image
    permalink
    sourceId
    categoryId
    createdAt
    title
    text
    articleHtml
    slug
    Source {
      id
      name
      Publisher {
        id
        name
        image
      }
    }
    Votes_aggregate {
      aggregate {
        count
      }
    }
    Bookmarks {
      id
      createdAt
      userId
    }
    Votes {
      userId
      id
    }
  }
}
    `;

export function usePostWithBookmarkQuery(options?: Omit<Urql.UseQueryArgs<PostWithBookmarkQueryVariables>, 'query'>) {
  return Urql.useQuery<PostWithBookmarkQuery, PostWithBookmarkQueryVariables>({ query: PostWithBookmarkDocument, ...options });
};
export const Post_By_PkDocument = gql`
    query Post_by_pk($postByPkId: Int!) {
  Post_by_pk(id: $postByPkId) {
    id
    image
    permalink
    sourceId
    categoryId
    createdAt
    title
    text
    articleHtml
    Source {
      id
      name
      Publisher {
        id
        name
        image
      }
    }
    Votes_aggregate {
      aggregate {
        count
      }
    }
    Bookmarks {
      id
      createdAt
      userId
    }
    Votes {
      userId
      id
    }
  }
}
    `;

export function usePost_By_PkQuery(options: Omit<Urql.UseQueryArgs<Post_By_PkQueryVariables>, 'query'>) {
  return Urql.useQuery<Post_By_PkQuery, Post_By_PkQueryVariables>({ query: Post_By_PkDocument, ...options });
};
export const Post_By_SlugDocument = gql`
    query Post_by_slug($where: Post_bool_exp) {
  Post(where: $where) {
    id
    image
    permalink
    sourceId
    categoryId
    createdAt
    title
    text
    articleHtml
    Source {
      id
      name
      Publisher {
        id
        name
        image
      }
    }
    Votes_aggregate {
      aggregate {
        count
      }
    }
    Bookmarks {
      id
      createdAt
      userId
    }
    Votes {
      userId
      id
    }
  }
}
    `;

export function usePost_By_SlugQuery(options?: Omit<Urql.UseQueryArgs<Post_By_SlugQueryVariables>, 'query'>) {
  return Urql.useQuery<Post_By_SlugQuery, Post_By_SlugQueryVariables>({ query: Post_By_SlugDocument, ...options });
};
export const VoteSubscriptionDocument = gql`
    subscription VoteSubscription {
  Vote_aggregate {
    aggregate {
      count
    }
  }
}
    `;

export function useVoteSubscriptionSubscription<TData = VoteSubscriptionSubscription>(options: Omit<Urql.UseSubscriptionArgs<VoteSubscriptionSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<VoteSubscriptionSubscription, TData>) {
  return Urql.useSubscription<VoteSubscriptionSubscription, TData, VoteSubscriptionSubscriptionVariables>({ query: VoteSubscriptionDocument, ...options }, handler);
};
export const UpVoteDocument = gql`
    mutation UpVote($objects: [Vote_insert_input!]!) {
  insert_Vote(objects: $objects) {
    returning {
      id
      postId
      Post {
        Votes_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  }
}
    `;

export function useUpVoteMutation() {
  return Urql.useMutation<UpVoteMutation, UpVoteMutationVariables>(UpVoteDocument);
};
export const Delete_Vote_By_PkDocument = gql`
    mutation Delete_Vote_by_pk($deleteVoteByPkId: Int!) {
  delete_Vote_by_pk(id: $deleteVoteByPkId) {
    id
    postId
  }
}
    `;

export function useDelete_Vote_By_PkMutation() {
  return Urql.useMutation<Delete_Vote_By_PkMutation, Delete_Vote_By_PkMutationVariables>(Delete_Vote_By_PkDocument);
};
export const Vote_AggregateDocument = gql`
    query Vote_aggregate($where: Vote_bool_exp) {
  Vote_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    `;

export function useVote_AggregateQuery(options?: Omit<Urql.UseQueryArgs<Vote_AggregateQueryVariables>, 'query'>) {
  return Urql.useQuery<Vote_AggregateQuery, Vote_AggregateQueryVariables>({ query: Vote_AggregateDocument, ...options });
};
export const WatchlistDocument = gql`
    query Watchlist {
  Watchlist {
    userId
    id
    createdAt
    Company {
      id
      stockCode
    }
  }
}
    `;

export function useWatchlistQuery(options?: Omit<Urql.UseQueryArgs<WatchlistQueryVariables>, 'query'>) {
  return Urql.useQuery<WatchlistQuery, WatchlistQueryVariables>({ query: WatchlistDocument, ...options });
};
export const CompanyDocument = gql`
    query Company($where: Company_bool_exp, $limit: Int) {
  Company(where: $where, limit: $limit) {
    stockCode
    postTo
    nameVn
    nameEn
    id
    c
  }
}
    `;

export function useCompanyQuery(options?: Omit<Urql.UseQueryArgs<CompanyQueryVariables>, 'query'>) {
  return Urql.useQuery<CompanyQuery, CompanyQueryVariables>({ query: CompanyDocument, ...options });
};
export const MyWatchlistsDocument = gql`
    subscription myWatchlists {
  Watchlist {
    userId
    id
    createdAt
    Company {
      id
      stockCode
    }
  }
}
    `;

export function useMyWatchlistsSubscription<TData = MyWatchlistsSubscription>(options: Omit<Urql.UseSubscriptionArgs<MyWatchlistsSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<MyWatchlistsSubscription, TData>) {
  return Urql.useSubscription<MyWatchlistsSubscription, TData, MyWatchlistsSubscriptionVariables>({ query: MyWatchlistsDocument, ...options }, handler);
};
export const GetWatchlistDocument = gql`
    query getWatchlist {
  Watchlist {
    userId
    id
    createdAt
    Company {
      id
      stockCode
    }
  }
}
    `;

export function useGetWatchlistQuery(options?: Omit<Urql.UseQueryArgs<GetWatchlistQueryVariables>, 'query'>) {
  return Urql.useQuery<GetWatchlistQuery, GetWatchlistQueryVariables>({ query: GetWatchlistDocument, ...options });
};
export const Insert_Watchlist_OneDocument = gql`
    mutation Insert_Watchlist_one($object: Watchlist_insert_input!) {
  insert_Watchlist_one(object: $object) {
    companyId
    id
    symbol
    userId
  }
}
    `;

export function useInsert_Watchlist_OneMutation() {
  return Urql.useMutation<Insert_Watchlist_OneMutation, Insert_Watchlist_OneMutationVariables>(Insert_Watchlist_OneDocument);
};
export const Delete_Watchlist_By_PkDocument = gql`
    mutation Delete_Watchlist_by_pk($deleteWatchlistByPkId: Int!) {
  delete_Watchlist_by_pk(id: $deleteWatchlistByPkId) {
    id
  }
}
    `;

export function useDelete_Watchlist_By_PkMutation() {
  return Urql.useMutation<Delete_Watchlist_By_PkMutation, Delete_Watchlist_By_PkMutationVariables>(Delete_Watchlist_By_PkDocument);
};
export const Delete_WatchlistDocument = gql`
    mutation Delete_Watchlist($where: Watchlist_bool_exp!) {
  delete_Watchlist(where: $where) {
    affected_rows
    returning {
      userId
      symbol
    }
  }
}
    `;

export function useDelete_WatchlistMutation() {
  return Urql.useMutation<Delete_WatchlistMutation, Delete_WatchlistMutationVariables>(Delete_WatchlistDocument);
};