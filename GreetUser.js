import { ActivityIndicator, Text, View } from "react-native"

export default function GreetUser(props) {
  return(
    <View>
        {props.name ? <Text>Hi {props.name} !</Text> : <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  )
}