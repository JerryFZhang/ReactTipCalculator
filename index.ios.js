import React, { Component } from 'react';
import ScreenSwitcher from 'react-native-device-screen-switcher';
import { AppRegistry, Text, TextInput, View, StyleSheet, TouchableWithoutFeedback, Keyboard, Picker } from 'react-native';
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }


  render() {
    return (
        <ScreenSwitcher>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style = {styles.card}>

      <TextInput
      style={styles.input}
      placeholder="Enter Bill Amount"
      placeholderTextColor="#dddddd"
      keyboardType = 'numeric'
      onChangeText={(amount) => this.setState({amount})}
      /><Text style={styles.title}>After Tax</Text>
      </View>
      <View style = {styles.card}>

      <TextInput
      style={styles.input}
      placeholder="Enter Tip Percentage"
      placeholderTextColor="#dddddd"
      keyboardType = 'numeric'
      onChangeText={(percentage) => this.setState({percentage})}
      />
      <Text style={styles.title}>%</Text>
      </View>
      
      <View style = {styles.card}>
      <Picker
      selectedValue={this.state.ppl}
      onValueChange={(ppl) => this.setState({ppl})}>
      <Picker.Item label="1" value="1" />
      <Picker.Item label="2" value="2" />
      <Picker.Item label="3" value="3" />
      <Picker.Item label="4" value="4" />
      <Picker.Item label="5" value="5" />
      <Picker.Item label="6" value="6" />
      <Picker.Item label="7" value="7" />
      <Picker.Item label="8" value="8" />
      <Picker.Item label="9" value="9" />
      <Picker.Item label="10" value="10" />
      <Picker.Item label="11" value="11" />
      <Picker.Item label="12" value="12" />
      <Picker.Item label="13" value="13" />
      <Picker.Item label="14" value="14" />
      <Picker.Item label="15" value="15" />
      <Picker.Item label="16" value="16" />
      <Picker.Item label="17" value="17" />
      <Picker.Item label="18" value="18" />
      <Picker.Item label="19" value="19" />
      <Picker.Item label="20" value="20" />
      <Picker.Item label="21" value="21" />
      <Picker.Item label="22" value="22" />
      <Picker.Item label="23" value="23" />
      <Picker.Item label="24" value="24" />
      <Picker.Item label="25" value="25" />
      <Picker.Item label="26" value="26" />
      <Picker.Item label="27" value="27" />
      <Picker.Item label="28" value="28" />
      <Picker.Item label="29" value="29" />
      <Picker.Item label="30" value="30" />
      <Picker.Item label="31" value="31" />
      <Picker.Item label="32" value="32" />
      <Picker.Item label="33" value="33" />
      <Picker.Item label="34" value="34" />
      <Picker.Item label="35" value="35" />
      <Picker.Item label="36" value="36" />
      <Picker.Item label="37" value="37" />
      <Picker.Item label="38" value="38" />
      <Picker.Item label="39" value="39" />
      <Picker.Item label="40" value="40" />
      <Picker.Item label="41" value="41" />
      <Picker.Item label="42" value="42" />
      <Picker.Item label="43" value="43" />
      <Picker.Item label="44" value="44" />
      <Picker.Item label="45" value="45" />
      <Picker.Item label="46" value="46" />
      <Picker.Item label="47" value="47" />
      <Picker.Item label="48" value="48" />
      <Picker.Item label="49" value="49" />
      <Picker.Item label="50" value="50" />
      <Picker.Item label="51" value="51" />
      <Picker.Item label="52" value="52" />
      <Picker.Item label="53" value="53" />
      <Picker.Item label="54" value="54" />
      <Picker.Item label="55" value="55" />
      <Picker.Item label="56" value="56" />
      <Picker.Item label="57" value="57" />
      <Picker.Item label="58" value="58" />
      <Picker.Item label="59" value="59" />
      <Picker.Item label="60" value="60" />
      <Picker.Item label="61" value="61" />
      <Picker.Item label="62" value="62" />
      <Picker.Item label="63" value="63" />
      <Picker.Item label="64" value="64" />
      <Picker.Item label="65" value="65" />
      <Picker.Item label="66" value="66" />
      <Picker.Item label="67" value="67" />
      <Picker.Item label="68" value="68" />
      <Picker.Item label="69" value="69" />
      <Picker.Item label="70" value="70" />
      <Picker.Item label="71" value="71" />
      <Picker.Item label="72" value="72" />
      <Picker.Item label="73" value="73" />
      <Picker.Item label="74" value="74" />
      <Picker.Item label="75" value="75" />
      <Picker.Item label="76" value="76" />
      <Picker.Item label="77" value="77" />
      <Picker.Item label="78" value="78" />
      <Picker.Item label="79" value="79" />
      <Picker.Item label="80" value="80" />
      <Picker.Item label="81" value="81" />
      <Picker.Item label="82" value="82" />
      <Picker.Item label="83" value="83" />
      <Picker.Item label="84" value="84" />
      <Picker.Item label="85" value="85" />
      <Picker.Item label="86" value="86" />
      <Picker.Item label="87" value="87" />
      <Picker.Item label="88" value="88" />
      <Picker.Item label="89" value="89" />
      <Picker.Item label="90" value="90" />
      <Picker.Item label="91" value="91" />
      <Picker.Item label="92" value="92" />
      <Picker.Item label="93" value="93" />
      <Picker.Item label="94" value="94" />
      <Picker.Item label="95" value="95" />
      <Picker.Item label="96" value="96" />
      <Picker.Item label="97" value="97" />
      <Picker.Item label="98" value="98" />
      <Picker.Item label="99" value="99" />
      </Picker>
      <Text style={styles.title}>Number of people:</Text>
      </View>
      <View style = {styles.card}>
      <Text style={styles.input} >{this.state.text.split(' ').map((word) => (this.state.amount * (1 + this.state.percentage/100))/this.state.ppl).join(' ')}</Text><Text style={styles.title}>Per Person</Text></View>
      </View>
    </TouchableWithoutFeedback></ScreenSwitcher>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 18,
      flex: 1,
    textAlign:'right', 
      color: 'white'
  },
  input: {
    color: 'white',
    padding: 18,
      flex:2 
  },
  card: {
    backgroundColor: '#007aff',
    borderColor: 'white',
    shadowColor:'black',
    margin: 12,
      flex: 3,
      borderRadius:6
  }
});

AppRegistry.registerComponent('cal', () => Calculator);
