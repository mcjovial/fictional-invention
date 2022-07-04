import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      })
      setResults(response.data.businesses)
      console.log(response.data);
    } catch (error) {
      setErrorMessage('Something went wrong')
      console.log(error);
    }
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi()}
      />
      <Text>{errorMessage}</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({}) 