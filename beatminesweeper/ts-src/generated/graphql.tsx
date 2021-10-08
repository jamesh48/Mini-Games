import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AdvancedScore = {
  __typename?: 'AdvancedScore';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  time: Scalars['Int'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type BeginnerScore = {
  __typename?: 'BeginnerScore';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  time: Scalars['Int'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type IntermediateScore = {
  __typename?: 'IntermediateScore';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  time: Scalars['Int'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteUser: Scalars['Boolean'];
  login: UserResponse;
  logout: Scalars['Boolean'];
  newAdvancedScore?: Maybe<AdvancedScore>;
  newBeginnerScore?: Maybe<BeginnerScore>;
  newIntermediateScore?: Maybe<IntermediateScore>;
  register: UserResponse;
};


export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
};


export type MutationLoginArgs = {
  options: UsernamePasswordInput;
};


export type MutationNewAdvancedScoreArgs = {
  time: Scalars['Float'];
  username: Scalars['String'];
};


export type MutationNewBeginnerScoreArgs = {
  time: Scalars['Float'];
  username: Scalars['String'];
};


export type MutationNewIntermediateScoreArgs = {
  time: Scalars['Float'];
  username: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};

export type Query = {
  __typename?: 'Query';
  allAdvancedScores: Array<AdvancedScore>;
  allBeginnerScores: Array<BeginnerScore>;
  allIntermediateScores: Array<IntermediateScore>;
  getAllUsers: Array<User>;
  getSingleUser: UserResponse;
  me?: Maybe<User>;
};


export type QueryGetSingleUserArgs = {
  id: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UsernamePasswordInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type RegularUserFragment = { __typename?: 'User', id: number, username: string };

export type LoginMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: number, username: string } | null | undefined } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type AdvancedScoreMutationVariables = Exact<{
  username: Scalars['String'];
  time: Scalars['Float'];
}>;


export type AdvancedScoreMutation = { __typename?: 'Mutation', newAdvancedScore?: { __typename?: 'AdvancedScore', username: string, time: number } | null | undefined };

export type BeginnerScoreMutationVariables = Exact<{
  username: Scalars['String'];
  time: Scalars['Float'];
}>;


export type BeginnerScoreMutation = { __typename?: 'Mutation', newBeginnerScore?: { __typename?: 'BeginnerScore', username: string, time: number } | null | undefined };

export type IntermediateScoreMutationVariables = Exact<{
  username: Scalars['String'];
  time: Scalars['Float'];
}>;


export type IntermediateScoreMutation = { __typename?: 'Mutation', newIntermediateScore?: { __typename?: 'IntermediateScore', username: string, time: number } | null | undefined };

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: number, username: string } | null | undefined } };

export type GetAdvancedScoresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdvancedScoresQuery = { __typename?: 'Query', allAdvancedScores: Array<{ __typename?: 'AdvancedScore', id: number, username: string, time: number, createdAt: string, updatedAt: string }> };

export type GetBeginnerScoresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBeginnerScoresQuery = { __typename?: 'Query', allBeginnerScores: Array<{ __typename?: 'BeginnerScore', id: number, username: string, time: number, createdAt: string, updatedAt: string }> };

export type GetIntermediateScoresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIntermediateScoresQuery = { __typename?: 'Query', allIntermediateScores: Array<{ __typename?: 'IntermediateScore', id: number, username: string, time: number, createdAt: string, updatedAt: string }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string } | null | undefined };

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const LoginDocument = gql`
    mutation Login($options: UsernamePasswordInput!) {
  login(options: $options) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const AdvancedScoreDocument = gql`
    mutation AdvancedScore($username: String!, $time: Float!) {
  newAdvancedScore(username: $username, time: $time) {
    username
    time
  }
}
    `;
export type AdvancedScoreMutationFn = Apollo.MutationFunction<AdvancedScoreMutation, AdvancedScoreMutationVariables>;

/**
 * __useAdvancedScoreMutation__
 *
 * To run a mutation, you first call `useAdvancedScoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdvancedScoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [advancedScoreMutation, { data, loading, error }] = useAdvancedScoreMutation({
 *   variables: {
 *      username: // value for 'username'
 *      time: // value for 'time'
 *   },
 * });
 */
export function useAdvancedScoreMutation(baseOptions?: Apollo.MutationHookOptions<AdvancedScoreMutation, AdvancedScoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdvancedScoreMutation, AdvancedScoreMutationVariables>(AdvancedScoreDocument, options);
      }
export type AdvancedScoreMutationHookResult = ReturnType<typeof useAdvancedScoreMutation>;
export type AdvancedScoreMutationResult = Apollo.MutationResult<AdvancedScoreMutation>;
export type AdvancedScoreMutationOptions = Apollo.BaseMutationOptions<AdvancedScoreMutation, AdvancedScoreMutationVariables>;
export const BeginnerScoreDocument = gql`
    mutation BeginnerScore($username: String!, $time: Float!) {
  newBeginnerScore(username: $username, time: $time) {
    username
    time
  }
}
    `;
export type BeginnerScoreMutationFn = Apollo.MutationFunction<BeginnerScoreMutation, BeginnerScoreMutationVariables>;

/**
 * __useBeginnerScoreMutation__
 *
 * To run a mutation, you first call `useBeginnerScoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBeginnerScoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [beginnerScoreMutation, { data, loading, error }] = useBeginnerScoreMutation({
 *   variables: {
 *      username: // value for 'username'
 *      time: // value for 'time'
 *   },
 * });
 */
export function useBeginnerScoreMutation(baseOptions?: Apollo.MutationHookOptions<BeginnerScoreMutation, BeginnerScoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BeginnerScoreMutation, BeginnerScoreMutationVariables>(BeginnerScoreDocument, options);
      }
export type BeginnerScoreMutationHookResult = ReturnType<typeof useBeginnerScoreMutation>;
export type BeginnerScoreMutationResult = Apollo.MutationResult<BeginnerScoreMutation>;
export type BeginnerScoreMutationOptions = Apollo.BaseMutationOptions<BeginnerScoreMutation, BeginnerScoreMutationVariables>;
export const IntermediateScoreDocument = gql`
    mutation IntermediateScore($username: String!, $time: Float!) {
  newIntermediateScore(username: $username, time: $time) {
    username
    time
  }
}
    `;
export type IntermediateScoreMutationFn = Apollo.MutationFunction<IntermediateScoreMutation, IntermediateScoreMutationVariables>;

/**
 * __useIntermediateScoreMutation__
 *
 * To run a mutation, you first call `useIntermediateScoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIntermediateScoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [intermediateScoreMutation, { data, loading, error }] = useIntermediateScoreMutation({
 *   variables: {
 *      username: // value for 'username'
 *      time: // value for 'time'
 *   },
 * });
 */
export function useIntermediateScoreMutation(baseOptions?: Apollo.MutationHookOptions<IntermediateScoreMutation, IntermediateScoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IntermediateScoreMutation, IntermediateScoreMutationVariables>(IntermediateScoreDocument, options);
      }
export type IntermediateScoreMutationHookResult = ReturnType<typeof useIntermediateScoreMutation>;
export type IntermediateScoreMutationResult = Apollo.MutationResult<IntermediateScoreMutation>;
export type IntermediateScoreMutationOptions = Apollo.BaseMutationOptions<IntermediateScoreMutation, IntermediateScoreMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetAdvancedScoresDocument = gql`
    query GetAdvancedScores {
  allAdvancedScores {
    id
    username
    time
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetAdvancedScoresQuery__
 *
 * To run a query within a React component, call `useGetAdvancedScoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdvancedScoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdvancedScoresQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdvancedScoresQuery(baseOptions?: Apollo.QueryHookOptions<GetAdvancedScoresQuery, GetAdvancedScoresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdvancedScoresQuery, GetAdvancedScoresQueryVariables>(GetAdvancedScoresDocument, options);
      }
export function useGetAdvancedScoresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdvancedScoresQuery, GetAdvancedScoresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdvancedScoresQuery, GetAdvancedScoresQueryVariables>(GetAdvancedScoresDocument, options);
        }
export type GetAdvancedScoresQueryHookResult = ReturnType<typeof useGetAdvancedScoresQuery>;
export type GetAdvancedScoresLazyQueryHookResult = ReturnType<typeof useGetAdvancedScoresLazyQuery>;
export type GetAdvancedScoresQueryResult = Apollo.QueryResult<GetAdvancedScoresQuery, GetAdvancedScoresQueryVariables>;
export const GetBeginnerScoresDocument = gql`
    query GetBeginnerScores {
  allBeginnerScores {
    id
    username
    time
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetBeginnerScoresQuery__
 *
 * To run a query within a React component, call `useGetBeginnerScoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBeginnerScoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBeginnerScoresQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBeginnerScoresQuery(baseOptions?: Apollo.QueryHookOptions<GetBeginnerScoresQuery, GetBeginnerScoresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBeginnerScoresQuery, GetBeginnerScoresQueryVariables>(GetBeginnerScoresDocument, options);
      }
export function useGetBeginnerScoresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBeginnerScoresQuery, GetBeginnerScoresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBeginnerScoresQuery, GetBeginnerScoresQueryVariables>(GetBeginnerScoresDocument, options);
        }
export type GetBeginnerScoresQueryHookResult = ReturnType<typeof useGetBeginnerScoresQuery>;
export type GetBeginnerScoresLazyQueryHookResult = ReturnType<typeof useGetBeginnerScoresLazyQuery>;
export type GetBeginnerScoresQueryResult = Apollo.QueryResult<GetBeginnerScoresQuery, GetBeginnerScoresQueryVariables>;
export const GetIntermediateScoresDocument = gql`
    query GetIntermediateScores {
  allIntermediateScores {
    id
    username
    time
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetIntermediateScoresQuery__
 *
 * To run a query within a React component, call `useGetIntermediateScoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIntermediateScoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIntermediateScoresQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIntermediateScoresQuery(baseOptions?: Apollo.QueryHookOptions<GetIntermediateScoresQuery, GetIntermediateScoresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIntermediateScoresQuery, GetIntermediateScoresQueryVariables>(GetIntermediateScoresDocument, options);
      }
export function useGetIntermediateScoresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIntermediateScoresQuery, GetIntermediateScoresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIntermediateScoresQuery, GetIntermediateScoresQueryVariables>(GetIntermediateScoresDocument, options);
        }
export type GetIntermediateScoresQueryHookResult = ReturnType<typeof useGetIntermediateScoresQuery>;
export type GetIntermediateScoresLazyQueryHookResult = ReturnType<typeof useGetIntermediateScoresLazyQuery>;
export type GetIntermediateScoresQueryResult = Apollo.QueryResult<GetIntermediateScoresQuery, GetIntermediateScoresQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;