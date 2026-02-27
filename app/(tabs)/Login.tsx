import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

const Login = () => {
  return (
    <View style={styles.view}>
        <Text>
            Hello this is login
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default Login