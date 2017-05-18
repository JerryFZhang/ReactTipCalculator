import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }


  render() {
    return (
      <View style={{padding: 24}}>
        <Text style={{fontSize: 18}}>Bill Amount:</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Enter Bill Amount"
          keyboardType = 'numeric'
          onChangeText={(amount) => this.setState({amount})}
        />
        <Text style={{fontSize: 18}}>Tip Percentage:</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Enter Tip Percentage"
          keyboardType = 'numeric'
          onChangeText={(percentage) => this.setState({percentage})}
        />
        <Text style={{fontSize: 18}}>Number of people:</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Enter Number of people"
          keyboardType = 'numeric'
          onChangeText={(people) => this.setState({people})}
        />

            <Text style={{fontSize: 24}}>Each Person:</Text>
                    <Text>{this.state.text.split(' ').map((word) => (this.state.amount * (1 + this.state.percentage/100))/this.state.people).join(' ')}</Text></View>
);
}
}

AppRegistry.registerComponent('cal', () => Calculator);