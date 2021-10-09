import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const RegularUserFragmentDoc = gql `
    fragment RegularUser on User {
  id
  username
}
    `;
export const LoginDocument = gql `
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
export function useLoginMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(LoginDocument, options);
}
export const LogoutDocument = gql `
    mutation Logout {
  logout
}
    `;
export function useLogoutMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(LogoutDocument, options);
}
export const AdvancedScoreDocument = gql `
    mutation AdvancedScore($username: String!, $time: Float!) {
  newAdvancedScore(username: $username, time: $time) {
    username
    time
  }
}
    `;
export function useAdvancedScoreMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(AdvancedScoreDocument, options);
}
export const BeginnerScoreDocument = gql `
    mutation BeginnerScore($username: String!, $time: Float!) {
  newBeginnerScore(username: $username, time: $time) {
    username
    time
  }
}
    `;
export function useBeginnerScoreMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(BeginnerScoreDocument, options);
}
export const IntermediateScoreDocument = gql `
    mutation IntermediateScore($username: String!, $time: Float!) {
  newIntermediateScore(username: $username, time: $time) {
    username
    time
  }
}
    `;
export function useIntermediateScoreMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(IntermediateScoreDocument, options);
}
export const RegisterDocument = gql `
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
export function useRegisterMutation(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(RegisterDocument, options);
}
export const GetAdvancedScoresDocument = gql `
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
export function useGetAdvancedScoresQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetAdvancedScoresDocument, options);
}
export function useGetAdvancedScoresLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetAdvancedScoresDocument, options);
}
export const GetBeginnerScoresDocument = gql `
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
export function useGetBeginnerScoresQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetBeginnerScoresDocument, options);
}
export function useGetBeginnerScoresLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetBeginnerScoresDocument, options);
}
export const GetIntermediateScoresDocument = gql `
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
export function useGetIntermediateScoresQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetIntermediateScoresDocument, options);
}
export function useGetIntermediateScoresLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetIntermediateScoresDocument, options);
}
export const MeDocument = gql `
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export function useMeQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(MeDocument, options);
}
export function useMeLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(MeDocument, options);
}
//# sourceMappingURL=graphql.js.map