import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather
        style={styles.iconStyle}
        name='search'
      />
      <TextInput
        style={styles.inputStyle}
        placeholder='Search'
        autoCapitalize='none'
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    margin: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
    marginHorizontal: 4
  }
})