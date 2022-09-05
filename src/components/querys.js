import { gql } from '@apollo/client';

const GET_NAME_COUNTRIES = gql`
  query{
    countries{
      code
        name
        native
        phone
        continent{
          code
          name
        }
        capital
        currency
        languages{
          code
          name
          native
        }
        emojiU
    }
  }
`;

export default GET_NAME_COUNTRIES