export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    timestamp: any;
    uuid: string;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
    _eq?: Maybe<Scalars["Boolean"]>;
    _gt?: Maybe<Scalars["Boolean"]>;
    _gte?: Maybe<Scalars["Boolean"]>;
    _in?: Maybe<Array<Scalars["Boolean"]>>;
    _is_null?: Maybe<Scalars["Boolean"]>;
    _lt?: Maybe<Scalars["Boolean"]>;
    _lte?: Maybe<Scalars["Boolean"]>;
    _neq?: Maybe<Scalars["Boolean"]>;
    _nin?: Maybe<Array<Scalars["Boolean"]>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
    _eq?: Maybe<Scalars["String"]>;
    _gt?: Maybe<Scalars["String"]>;
    _gte?: Maybe<Scalars["String"]>;
    _ilike?: Maybe<Scalars["String"]>;
    _in?: Maybe<Array<Scalars["String"]>>;
    _is_null?: Maybe<Scalars["Boolean"]>;
    _like?: Maybe<Scalars["String"]>;
    _lt?: Maybe<Scalars["String"]>;
    _lte?: Maybe<Scalars["String"]>;
    _neq?: Maybe<Scalars["String"]>;
    _nilike?: Maybe<Scalars["String"]>;
    _nin?: Maybe<Array<Scalars["String"]>>;
    _nlike?: Maybe<Scalars["String"]>;
    _nsimilar?: Maybe<Scalars["String"]>;
    _similar?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "comments" */
export type Comments = {
    __typename?: "comments";
    authorId?: Maybe<Scalars["uuid"]>;
    commentId: Scalars["uuid"];
    content: Scalars["String"];
    createdAt: Scalars["timestamp"];
    deletedAt?: Maybe<Scalars["timestamp"]>;
    /** An object relationship */
    post?: Maybe<Posts>;
    postId?: Maybe<Scalars["uuid"]>;
    /** An object relationship */
    user?: Maybe<Users>;
};

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
    __typename?: "comments_aggregate";
    aggregate?: Maybe<Comments_Aggregate_Fields>;
    nodes: Array<Comments>;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_Fields = {
    __typename?: "comments_aggregate_fields";
    count?: Maybe<Scalars["Int"]>;
    max?: Maybe<Comments_Max_Fields>;
    min?: Maybe<Comments_Min_Fields>;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Comments_Select_Column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<Comments_Max_Order_By>;
    min?: Maybe<Comments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
    data: Array<Comments_Insert_Input>;
    on_conflict?: Maybe<Comments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Comments_Bool_Exp>>>;
    _not?: Maybe<Comments_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Comments_Bool_Exp>>>;
    authorId?: Maybe<Uuid_Comparison_Exp>;
    commentId?: Maybe<Uuid_Comparison_Exp>;
    content?: Maybe<String_Comparison_Exp>;
    createdAt?: Maybe<Timestamp_Comparison_Exp>;
    deletedAt?: Maybe<Timestamp_Comparison_Exp>;
    post?: Maybe<Posts_Bool_Exp>;
    postId?: Maybe<Uuid_Comparison_Exp>;
    user?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
    /** unique or primary key constraint */
    PkB302f2e474ce2a6cbacd7981aa5 = "PK_b302f2e474ce2a6cbacd7981aa5",
}

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
    authorId?: Maybe<Scalars["uuid"]>;
    commentId?: Maybe<Scalars["uuid"]>;
    content?: Maybe<Scalars["String"]>;
    createdAt?: Maybe<Scalars["timestamp"]>;
    deletedAt?: Maybe<Scalars["timestamp"]>;
    post?: Maybe<Posts_Obj_Rel_Insert_Input>;
    postId?: Maybe<Scalars["uuid"]>;
    user?: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Comments_Max_Fields = {
    __typename?: "comments_max_fields";
    authorId?: Maybe<Scalars["uuid"]>;
    commentId?: Maybe<Scalars["uuid"]>;
    content?: Maybe<Scalars["String"]>;
    createdAt?: Maybe<Scalars["timestamp"]>;
    deletedAt?: Maybe<Scalars["timestamp"]>;
    postId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
    authorId?: Maybe<Order_By>;
    commentId?: Maybe<Order_By>;
    content?: Maybe<Order_By>;
    createdAt?: Maybe<Order_By>;
    deletedAt?: Maybe<Order_By>;
    postId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
    __typename?: "comments_min_fields";
    authorId?: Maybe<Scalars["uuid"]>;
    commentId?: Maybe<Scalars["uuid"]>;
    content?: Maybe<Scalars["String"]>;
    createdAt?: Maybe<Scalars["timestamp"]>;
    deletedAt?: Maybe<Scalars["timestamp"]>;
    postId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
    authorId?: Maybe<Order_By>;
    commentId?: Maybe<Order_By>;
    content?: Maybe<Order_By>;
    createdAt?: Maybe<Order_By>;
    deletedAt?: Maybe<Order_By>;
    postId?: Maybe<Order_By>;
};

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
    __typename?: "comments_mutation_response";
    /** number of affected rows by the mutation */
    affected_rows: Scalars["Int"];
    /** data of the affected rows by the mutation */
    returning: Array<Comments>;
};

/** input type for inserting object relation for remote table "comments" */
export type Comments_Obj_Rel_Insert_Input = {
    data: Comments_Insert_Input;
    on_conflict?: Maybe<Comments_On_Conflict>;
};

/** on conflict condition type for table "comments" */
export type Comments_On_Conflict = {
    constraint: Comments_Constraint;
    update_columns: Array<Comments_Update_Column>;
    where?: Maybe<Comments_Bool_Exp>;
};

/** ordering options when selecting data from "comments" */
export type Comments_Order_By = {
    authorId?: Maybe<Order_By>;
    commentId?: Maybe<Order_By>;
    content?: Maybe<Order_By>;
    createdAt?: Maybe<Order_By>;
    deletedAt?: Maybe<Order_By>;
    post?: Maybe<Posts_Order_By>;
    postId?: Maybe<Order_By>;
    user?: Maybe<Users_Order_By>;
};

/** primary key columns input for table: "comments" */
export type Comments_Pk_Columns_Input = {
    commentId: Scalars["uuid"];
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
    /** column name */
    AuthorId = "authorId",
    /** column name */
    CommentId = "commentId",
    /** column name */
    Content = "content",
    /** column name */
    CreatedAt = "createdAt",
    /** column name */
    DeletedAt = "deletedAt",
    /** column name */
    PostId = "postId",
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
    authorId?: Maybe<Scalars["uuid"]>;
    commentId?: Maybe<Scalars["uuid"]>;
    content?: Maybe<Scalars["String"]>;
    createdAt?: Maybe<Scalars["timestamp"]>;
    deletedAt?: Maybe<Scalars["timestamp"]>;
    postId?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "comments" */
export enum Comments_Update_Column {
    /** column name */
    AuthorId = "authorId",
    /** column name */
    CommentId = "commentId",
    /** column name */
    Content = "content",
    /** column name */
    CreatedAt = "createdAt",
    /** column name */
    DeletedAt = "deletedAt",
    /** column name */
    PostId = "postId",
}

/** mutation root */
export type Mutation_Root = {
    __typename?: "mutation_root";
    /** delete data from the table: "comments" */
    delete_comments?: Maybe<Comments_Mutation_Response>;
    /** delete single row from the table: "comments" */
    delete_comments_by_pk?: Maybe<Comments>;
    /** delete data from the table: "posts" */
    delete_posts?: Maybe<Posts_Mutation_Response>;
    /** delete single row from the table: "posts" */
    delete_posts_by_pk?: Maybe<Posts>;
    /** delete data from the table: "users" */
    delete_users?: Maybe<Users_Mutation_Response>;
    /** delete single row from the table: "users" */
    delete_users_by_pk?: Maybe<Users>;
    /** insert data into the table: "comments" */
    insert_comments?: Maybe<Comments_Mutation_Response>;
    /** insert a single row into the table: "comments" */
    insert_comments_one?: Maybe<Comments>;
    /** insert data into the table: "posts" */
    insert_posts?: Maybe<Posts_Mutation_Response>;
    /** insert a single row into the table: "posts" */
    insert_posts_one?: Maybe<Posts>;
    /** insert data into the table: "users" */
    insert_users?: Maybe<Users_Mutation_Response>;
    /** insert a single row into the table: "users" */
    insert_users_one?: Maybe<Users>;
    /** update data of the table: "comments" */
    update_comments?: Maybe<Comments_Mutation_Response>;
    /** update single row of the table: "comments" */
    update_comments_by_pk?: Maybe<Comments>;
    /** update data of the table: "posts" */
    update_posts?: Maybe<Posts_Mutation_Response>;
    /** update single row of the table: "posts" */
    update_posts_by_pk?: Maybe<Posts>;
    /** update data of the table: "users" */
    update_users?: Maybe<Users_Mutation_Response>;
    /** update single row of the table: "users" */
    update_users_by_pk?: Maybe<Users>;
};

/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
    where: Comments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Comments_By_PkArgs = {
    commentId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
    where: Posts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
    postId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
    where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
    userId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
    objects: Array<Comments_Insert_Input>;
    on_conflict?: Maybe<Comments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Comments_OneArgs = {
    object: Comments_Insert_Input;
    on_conflict?: Maybe<Comments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
    objects: Array<Posts_Insert_Input>;
    on_conflict?: Maybe<Posts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
    object: Posts_Insert_Input;
    on_conflict?: Maybe<Posts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
    objects: Array<Users_Insert_Input>;
    on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
    object: Users_Insert_Input;
    on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
    _set?: Maybe<Comments_Set_Input>;
    where: Comments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Comments_By_PkArgs = {
    _set?: Maybe<Comments_Set_Input>;
    pk_columns: Comments_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
    _set?: Maybe<Posts_Set_Input>;
    where: Posts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
    _set?: Maybe<Posts_Set_Input>;
    pk_columns: Posts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
    _set?: Maybe<Users_Set_Input>;
    where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
    _set?: Maybe<Users_Set_Input>;
    pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
    /** in the ascending order, nulls last */
    Asc = "asc",
    /** in the ascending order, nulls first */
    AscNullsFirst = "asc_nulls_first",
    /** in the ascending order, nulls last */
    AscNullsLast = "asc_nulls_last",
    /** in the descending order, nulls first */
    Desc = "desc",
    /** in the descending order, nulls first */
    DescNullsFirst = "desc_nulls_first",
    /** in the descending order, nulls last */
    DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "posts" */
export type Posts = {
    __typename?: "posts";
    authorId?: Maybe<Scalars["uuid"]>;
    /** An array relationship */
    comments: Array<Comments>;
    /** An aggregated array relationship */
    comments_aggregate: Comments_Aggregate;
    content: Scalars["String"];
    createdAt: Scalars["timestamp"];
    deletedAt?: Maybe<Scalars["timestamp"]>;
    postId: Scalars["uuid"];
    title: Scalars["String"];
    updatedAt: Scalars["timestamp"];
    /** An object relationship */
    user?: Maybe<Users>;
};

/** columns and relationships of "posts" */
export type PostsCommentsArgs = {
    distinct_on?: Maybe<Array<Comments_Select_Column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<Comments_Order_By>>;
    where?: Maybe<Comments_Bool_Exp>;
};

/** columns and relationships of "posts" */
export type PostsComments_AggregateArgs = {
    distinct_on?: Maybe<Array<Comments_Select_Column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<Comments_Order_By>>;
    where?: Maybe<Comments_Bool_Exp>;
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
    __typename?: "posts_aggregate";
    aggregate?: Maybe<Posts_Aggregate_Fields>;
    nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
    __typename?: "posts_aggregate_fields";
    count?: Maybe<Scalars["Int"]>;
    max?: Maybe<Posts_Max_Fields>;
    min?: Maybe<Posts_Min_Fields>;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Posts_Select_Column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<Posts_Max_Order_By>;
    min?: Maybe<Posts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
    data: Array<Posts_Insert_Input>;
    on_conflict?: Maybe<Posts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Posts_Bool_Exp>>>;
    _not?: Maybe<Posts_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Posts_Bool_Exp>>>;
    authorId?: Maybe<Uuid_Comparison_Exp>;
    comments?: Maybe<Comments_Bool_Exp>;
    content?: Maybe<String_Comparison_Exp>;
    createdAt?: Maybe<Timestamp_Comparison_Exp>;
    deletedAt?: Maybe<Timestamp_Comparison_Exp>;
    postId?: Maybe<Uuid_Comparison_Exp>;
    title?: Maybe<String_Comparison_Exp>;
    updatedAt?: Maybe<Timestamp_Comparison_Exp>;
    user?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
    /** unique or primary key constraint */
    PkCdc670193be6ca43f590dbabcee = "PK_cdc670193be6ca43f590dbabcee",
}

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
    authorId?: Maybe<Scalars["uuid"]>;
    comments?: Maybe<Comments_Arr_Rel_Insert_Input>;
    content?: Maybe<Scalars["String"]>;
    createdAt?: Maybe<Scalars["timestamp"]>;
    deletedAt?: Maybe<Scalars["timestamp"]>;
    postId?: Maybe<Scalars["uuid"]>;
    title?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["timestamp"]>;
    user?: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
    __typename?: "posts_max_fields";
    authorId?: Maybe<Scalars["uuid"]>;
    content?: Maybe<Scalars["String"]>;
    createdAt?: Maybe<Scalars["timestamp"]>;
    deletedAt?: Maybe<Scalars["timestamp"]>;
    postId?: Maybe<Scalars["uuid"]>;
    title?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
    authorId?: Maybe<Order_By>;
    content?: Maybe<Order_By>;
    createdAt?: Maybe<Order_By>;
    deletedAt?: Maybe<Order_By>;
    postId?: Maybe<Order_By>;
    title?: Maybe<Order_By>;
    updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
    __typename?: "posts_min_fields";
    authorId?: Maybe<Scalars["uuid"]>;
    content?: Maybe<Scalars["String"]>;
    createdAt?: Maybe<Scalars["timestamp"]>;
    deletedAt?: Maybe<Scalars["timestamp"]>;
    postId?: Maybe<Scalars["uuid"]>;
    title?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
    authorId?: Maybe<Order_By>;
    content?: Maybe<Order_By>;
    createdAt?: Maybe<Order_By>;
    deletedAt?: Maybe<Order_By>;
    postId?: Maybe<Order_By>;
    title?: Maybe<Order_By>;
    updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
    __typename?: "posts_mutation_response";
    /** number of affected rows by the mutation */
    affected_rows: Scalars["Int"];
    /** data of the affected rows by the mutation */
    returning: Array<Posts>;
};

/** input type for inserting object relation for remote table "posts" */
export type Posts_Obj_Rel_Insert_Input = {
    data: Posts_Insert_Input;
    on_conflict?: Maybe<Posts_On_Conflict>;
};

/** on conflict condition type for table "posts" */
export type Posts_On_Conflict = {
    constraint: Posts_Constraint;
    update_columns: Array<Posts_Update_Column>;
    where?: Maybe<Posts_Bool_Exp>;
};

/** ordering options when selecting data from "posts" */
export type Posts_Order_By = {
    authorId?: Maybe<Order_By>;
    comments_aggregate?: Maybe<Comments_Aggregate_Order_By>;
    content?: Maybe<Order_By>;
    createdAt?: Maybe<Order_By>;
    deletedAt?: Maybe<Order_By>;
    postId?: Maybe<Order_By>;
    title?: Maybe<Order_By>;
    updatedAt?: Maybe<Order_By>;
    user?: Maybe<Users_Order_By>;
};

/** primary key columns input for table: "posts" */
export type Posts_Pk_Columns_Input = {
    postId: Scalars["uuid"];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
    /** column name */
    AuthorId = "authorId",
    /** column name */
    Content = "content",
    /** column name */
    CreatedAt = "createdAt",
    /** column name */
    DeletedAt = "deletedAt",
    /** column name */
    PostId = "postId",
    /** column name */
    Title = "title",
    /** column name */
    UpdatedAt = "updatedAt",
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
    authorId?: Maybe<Scalars["uuid"]>;
    content?: Maybe<Scalars["String"]>;
    createdAt?: Maybe<Scalars["timestamp"]>;
    deletedAt?: Maybe<Scalars["timestamp"]>;
    postId?: Maybe<Scalars["uuid"]>;
    title?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
    /** column name */
    AuthorId = "authorId",
    /** column name */
    Content = "content",
    /** column name */
    CreatedAt = "createdAt",
    /** column name */
    DeletedAt = "deletedAt",
    /** column name */
    PostId = "postId",
    /** column name */
    Title = "title",
    /** column name */
    UpdatedAt = "updatedAt",
}

/** query root */
export type Query_Root = {
    __typename?: "query_root";
    /** fetch data from the table: "comments" */
    comments: Array<Comments>;
    /** fetch aggregated fields from the table: "comments" */
    comments_aggregate: Comments_Aggregate;
    /** fetch data from the table: "comments" using primary key columns */
    comments_by_pk?: Maybe<Comments>;
    /** fetch data from the table: "posts" */
    posts: Array<Posts>;
    /** fetch aggregated fields from the table: "posts" */
    posts_aggregate: Posts_Aggregate;
    /** fetch data from the table: "posts" using primary key columns */
    posts_by_pk?: Maybe<Posts>;
    /** fetch data from the table: "users" */
    users: Array<Users>;
    /** fetch aggregated fields from the table: "users" */
    users_aggregate: Users_Aggregate;
    /** fetch data from the table: "users" using primary key columns */
    users_by_pk?: Maybe<Users>;
};

/** query root */
export type Query_RootCommentsArgs = {
    distinct_on?: Maybe<Array<Comments_Select_Column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<Comments_Order_By>>;
    where?: Maybe<Comments_Bool_Exp>;
};

/** query root */
export type Query_RootComments_AggregateArgs = {
    distinct_on?: Maybe<Array<Comments_Select_Column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<Comments_Order_By>>;
    where?: Maybe<Comments_Bool_Exp>;
};

/** query root */
export type Query_RootComments_By_PkArgs = {
    commentId: Scalars["uuid"];
};

/** query root */
export type Query_RootPostsArgs = {
    distinct_on?: Maybe<Array<Posts_Select_Column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<Posts_Order_By>>;
    where?: Maybe<Posts_Bool_Exp>;
};

/** query root */
export type Query_RootPosts_AggregateArgs = {
    distinct_on?: Maybe<Array<Posts_Select_Column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<Posts_Order_By>>;
    where?: Maybe<Posts_Bool_Exp>;
};

/** query root */
export type Query_RootPosts_By_PkArgs = {
    postId: Scalars["uuid"];
};

/** query root */
export type Query_RootUsersArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_AggregateArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_By_PkArgs = {
    userId: Scalars["uuid"];
};

/** subscription root */
export type Subscription_Root = {
    __typename?: "subscription_root";
    /** fetch data from the table: "comments" */
    comments: Array<Comments>;
    /** fetch aggregated fields from the table: "comments" */
    comments_aggregate: Comments_Aggregate;
    /** fetch data from the table: "comments" using primary key columns */
    comments_by_pk?: Maybe<Comments>;
    /** fetch data from the table: "posts" */
    posts: Array<Posts>;
    /** fetch aggregated fields from the table: "posts" */
    posts_aggregate: Posts_Aggregate;
    /** fetch data from the table: "posts" using primary key columns */
    posts_by_pk?: Maybe<Posts>;
    /** fetch data from the table: "users" */
    users: Array<Users>;
    /** fetch aggregated fields from the table: "users" */
    users_aggregate: Users_Aggregate;
    /** fetch data from the table: "users" using primary key columns */
    users_by_pk?: Maybe<Users>;
};

/** subscription root */
export type Subscription_RootCommentsArgs = {
    distinct_on?: Maybe<Array<Comments_Select_Column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<Comments_Order_By>>;
    where?: Maybe<Comments_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootComments_AggregateArgs = {
    distinct_on?: Maybe<Array<Comments_Select_Column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<Comments_Order_By>>;
    where?: Maybe<Comments_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootComments_By_PkArgs = {
    commentId: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootPostsArgs = {
    distinct_on?: Maybe<Array<Posts_Select_Column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<Posts_Order_By>>;
    where?: Maybe<Posts_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPosts_AggregateArgs = {
    distinct_on?: Maybe<Array<Posts_Select_Column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<Posts_Order_By>>;
    where?: Maybe<Posts_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPosts_By_PkArgs = {
    postId: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootUsersArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
    userId: Scalars["uuid"];
};

/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
    _eq?: Maybe<Scalars["timestamp"]>;
    _gt?: Maybe<Scalars["timestamp"]>;
    _gte?: Maybe<Scalars["timestamp"]>;
    _in?: Maybe<Array<Scalars["timestamp"]>>;
    _is_null?: Maybe<Scalars["Boolean"]>;
    _lt?: Maybe<Scalars["timestamp"]>;
    _lte?: Maybe<Scalars["timestamp"]>;
    _neq?: Maybe<Scalars["timestamp"]>;
    _nin?: Maybe<Array<Scalars["timestamp"]>>;
};

/** columns and relationships of "users" */
export type Users = {
    __typename?: "users";
    avatar?: Maybe<Scalars["String"]>;
    /** An array relationship */
    comments: Array<Comments>;
    /** An aggregated array relationship */
    comments_aggregate: Comments_Aggregate;
    email: Scalars["String"];
    isActive: Scalars["Boolean"];
    name: Scalars["String"];
    /** An array relationship */
    posts: Array<Posts>;
    /** An aggregated array relationship */
    posts_aggregate: Posts_Aggregate;
    role: Scalars["String"];
    userId: Scalars["uuid"];
};

/** columns and relationships of "users" */
export type UsersCommentsArgs = {
    distinct_on?: Maybe<Array<Comments_Select_Column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<Comments_Order_By>>;
    where?: Maybe<Comments_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersComments_AggregateArgs = {
    distinct_on?: Maybe<Array<Comments_Select_Column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<Comments_Order_By>>;
    where?: Maybe<Comments_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPostsArgs = {
    distinct_on?: Maybe<Array<Posts_Select_Column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<Posts_Order_By>>;
    where?: Maybe<Posts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPosts_AggregateArgs = {
    distinct_on?: Maybe<Array<Posts_Select_Column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<Posts_Order_By>>;
    where?: Maybe<Posts_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
    __typename?: "users_aggregate";
    aggregate?: Maybe<Users_Aggregate_Fields>;
    nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
    __typename?: "users_aggregate_fields";
    count?: Maybe<Scalars["Int"]>;
    max?: Maybe<Users_Max_Fields>;
    min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Users_Select_Column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<Users_Max_Order_By>;
    min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
    data: Array<Users_Insert_Input>;
    on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
    _not?: Maybe<Users_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
    avatar?: Maybe<String_Comparison_Exp>;
    comments?: Maybe<Comments_Bool_Exp>;
    email?: Maybe<String_Comparison_Exp>;
    isActive?: Maybe<Boolean_Comparison_Exp>;
    name?: Maybe<String_Comparison_Exp>;
    posts?: Maybe<Posts_Bool_Exp>;
    role?: Maybe<String_Comparison_Exp>;
    userId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
    /** unique or primary key constraint */
    Pk_8bf09ba754322ab9c22a215c919 = "PK_8bf09ba754322ab9c22a215c919",
    /** unique or primary key constraint */
    Uq_97672ac88f789774dd47f7c8be3 = "UQ_97672ac88f789774dd47f7c8be3",
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
    avatar?: Maybe<Scalars["String"]>;
    comments?: Maybe<Comments_Arr_Rel_Insert_Input>;
    email?: Maybe<Scalars["String"]>;
    isActive?: Maybe<Scalars["Boolean"]>;
    name?: Maybe<Scalars["String"]>;
    posts?: Maybe<Posts_Arr_Rel_Insert_Input>;
    role?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
    __typename?: "users_max_fields";
    avatar?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    role?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
    avatar?: Maybe<Order_By>;
    email?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    role?: Maybe<Order_By>;
    userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
    __typename?: "users_min_fields";
    avatar?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    role?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
    avatar?: Maybe<Order_By>;
    email?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    role?: Maybe<Order_By>;
    userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
    __typename?: "users_mutation_response";
    /** number of affected rows by the mutation */
    affected_rows: Scalars["Int"];
    /** data of the affected rows by the mutation */
    returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
    data: Users_Insert_Input;
    on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
    constraint: Users_Constraint;
    update_columns: Array<Users_Update_Column>;
    where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
    avatar?: Maybe<Order_By>;
    comments_aggregate?: Maybe<Comments_Aggregate_Order_By>;
    email?: Maybe<Order_By>;
    isActive?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    posts_aggregate?: Maybe<Posts_Aggregate_Order_By>;
    role?: Maybe<Order_By>;
    userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
    userId: Scalars["uuid"];
};

/** select columns of table "users" */
export enum Users_Select_Column {
    /** column name */
    Avatar = "avatar",
    /** column name */
    Email = "email",
    /** column name */
    IsActive = "isActive",
    /** column name */
    Name = "name",
    /** column name */
    Role = "role",
    /** column name */
    UserId = "userId",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
    avatar?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    isActive?: Maybe<Scalars["Boolean"]>;
    name?: Maybe<Scalars["String"]>;
    role?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
    /** column name */
    Avatar = "avatar",
    /** column name */
    Email = "email",
    /** column name */
    IsActive = "isActive",
    /** column name */
    Name = "name",
    /** column name */
    Role = "role",
    /** column name */
    UserId = "userId",
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
    _eq?: Maybe<Scalars["uuid"]>;
    _gt?: Maybe<Scalars["uuid"]>;
    _gte?: Maybe<Scalars["uuid"]>;
    _in?: Maybe<Array<Scalars["uuid"]>>;
    _is_null?: Maybe<Scalars["Boolean"]>;
    _lt?: Maybe<Scalars["uuid"]>;
    _lte?: Maybe<Scalars["uuid"]>;
    _neq?: Maybe<Scalars["uuid"]>;
    _nin?: Maybe<Array<Scalars["uuid"]>>;
};

export type HomeUserQueryQueryVariables = Exact<{ [key: string]: never }>;

export type HomeUserQueryQuery = { __typename?: "query_root" } & {
    users: Array<
        { __typename?: "users" } & Pick<Users, "userId" | "email" | "name" | "avatar" | "role">
    >;
};

export type GetSpecificUserQueryQueryVariables = Exact<{
    _eq: Scalars["uuid"];
}>;

export type GetSpecificUserQueryQuery = { __typename?: "query_root" } & {
    users: Array<
        { __typename?: "users" } & Pick<
            Users,
            "userId" | "role" | "name" | "isActive" | "email" | "avatar"
        >
    >;
};

export type InsertUserMutationMutationVariables = Exact<{
    email: Scalars["String"];
    avatar?: Maybe<Scalars["String"]>;
    name: Scalars["String"];
}>;

export type InsertUserMutationMutation = { __typename?: "mutation_root" } & {
    insert_users_one?: Maybe<{ __typename?: "users" } & Pick<Users, "userId" | "name" | "email">>;
};

export type GetUsersWithPagingQueryQueryVariables = Exact<{
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    _ilike?: Maybe<Scalars["String"]>;
}>;

export type GetUsersWithPagingQueryQuery = { __typename?: "query_root" } & {
    users: Array<
        { __typename?: "users" } & Pick<
            Users,
            "email" | "name" | "avatar" | "role" | "userId" | "isActive"
        >
    >;
};

export type UpdateUserMutaionMutationVariables = Exact<{
    avatar?: Maybe<Scalars["String"]>;
    name: Scalars["String"];
    userId: Scalars["uuid"];
    isActive?: Maybe<Scalars["Boolean"]>;
}>;

export type UpdateUserMutaionMutation = { __typename?: "mutation_root" } & {
    update_users_by_pk?: Maybe<
        { __typename?: "users" } & Pick<
            Users,
            "avatar" | "email" | "name" | "userId" | "role" | "isActive"
        >
    >;
};
