import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const SearchIceCreams = gql`
    query($searchQuery: String) {
        listIceCreams(filter: {
          searchField: {
                contains: $searchQuery
            }
        }) {
            items {
                name
                description
            }
        }
    }
`;


const ListIceCreams = gql`
    query {
        listIceCreams {
            items {
                name
                description
            }
        }
    }
`;



// Compose data
const composeData =   graphql(ListIceCreams, {
    options: data => ({
      fetchPolicy: 'cache-and-network'
    }),
    props: props => ({
      onSearch: searchQuery => {
        searchQuery = searchQuery.toLowerCase()
        return props.data.fetchMore({
          query: searchQuery === '' ? ListIceCreams : SearchIceCreams,
          variables: {
            searchQuery
          },
          updateQuery: (previousResult, { fetchMoreResult }) => ({
            ...previousResult,
            listIceCreams: {
              ...previousResult.listIceCreams,
              items: fetchMoreResult.listIceCreams.items
            }
          })
        })
      },
      data: props.data
    })
})


const styles = {
    container: {
      padding: 10,
      borderBottom: '1px solid #ddd'
    },
    title: {
      fontSize: 18
    },
    description: {
      fontSize: 15,
      color: 'rgba(0, 0, 0, .5)'
    },
    input: {
      height: 40,
      width: 300,
      padding: 7,
      fontSize: 15,
      outline: 'none'
    }
  }



export { ListIceCreams, SearchIceCreams, composeData, styles }