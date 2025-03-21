import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
  query books($searchTerm: String!) {
    books(searchTerm: $searchTerm) {
      bookId
      title
      authors
      description
      image
      link
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;