import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter Bill Amount"
          keyboardType = 'numeric'
          onChangeText={(amount) => this.setState({amount})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Enter Tip Percentage"
          keyboardType = 'numeric'
          onChangeText={(percentage) => this.setState({percentage})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Enter Number of people"
          keyboardType = 'numeric'
          onChangeText={(people) => this.setState({people})}
        />
        <Text style={{padding: 10, fontSize: 42}}>aTotal:
          {this.state.text.split(' ').map((word) => (this.state.amount * (1 + this.state.percentage/100))/this.state.people).join(' ')}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('cal', () => Calculator);