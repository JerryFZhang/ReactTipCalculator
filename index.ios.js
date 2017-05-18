import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }


  render() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View>
        <View style = {styles.card}>
        
        <TextInput
          style={styles.input}
          placeholder="Enter Bill Amount"
          keyboardType = 'numeric'
          onChangeText={(amount) => this.setState({amount})}
        /><Text style={styles.title}>After Tax</Text>
        </View>
         <View style = {styles.card}>
        
        <TextInput
          style={styles.input}
          placeholder="Enter Tip Percentage"
          keyboardType = 'numeric'
          onChangeText={(percentage) => this.setState({percentage})}
        />
        <Text style={styles.title}>%</Text>
       </View>
         <View style = {styles.card}>
        
        <TextInput
          style={styles.input}
          placeholder="Enter Number of people"
          keyboardType = 'numeric'
          onChangeText={(people) => this.setState({people})}
        />
        <Text style={styles.title}>Number of people:</Text>
</View>
        <View style = {styles.card}>
                    <Text style={styles.input} >{this.state.text.split(' ').map((word) => (this.state.amount * (1 + this.state.percentage/100))/this.state.people).join(' ')}</Text><Text style={styles.title}>Per Person</Text></View>
                        </View></TouchableWithoutFeedback>
);
}
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 12,
    textAlign:'right', color: 'white',
  },
  input: {
    color: '#dddddd',
   padding: 18,
      flex:3,

  },
    card: {
    backgroundColor: '#149688',
      borderColor: 'white',
    shadowColor:'black',  
        margin: 36
  }
});

AppRegistry.registerComponent('cal', () => Calculator);