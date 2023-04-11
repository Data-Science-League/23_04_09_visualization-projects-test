// src/graphql/queries.ts

import { gql } from '@apollo/client';

export const GET_COMMIT_CONTENTS = gql`
  query GetCommitContents($owner: String!, $name: String!, $branch: String!) {
    repository(owner: $owner, name: $name) {
      ref(qualifiedName: $branch) {
        target {
          ... on Commit {
            history(first: 10) {
              edges {
                node {
                  oid
                  messageHeadline
                  author {
                    name
                    date
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
