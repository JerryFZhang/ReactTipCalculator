'use strict';
import React, { Component } from 'react';
import StarRating from 'react-native-star-rating';
import { AsyncStorage, AppState, AppRegistry, Text, TextInput, View, StyleSheet, TouchableWithoutFeedback, Keyboard, Picker, Button } from 'react-native';
import Swiper from 'react-native-swiper';
var App_State_Object;
var existance;

class Calculator extends Component {
  state = {
    starCount: 3,
    percentage: 0,
    currency: "$"
  };

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      starCount: 3,
      percentage: 0,
      currency: "$"
    };
    AsyncStorage.getItem("percentage").then((value) => {
      // Todo: Try catch
      this.setState({"percentage": value});
      console.log(value);
    }).done();
    AsyncStorage.getItem("currency").then((value) => {
      this.setState({"currency": value});
      console.log(value);
    }).done();

  };


  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
      percentage: 10 + rating *2
    });
  }
  

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Swiper style={styles.wrapper} showsButtons={false} horizontal={false}>
      <View style={styles.slide1}>
      <TextInput
      style={styles.input}
      placeholder="Enter Bill Amount "
      placeholderTextColor="#666666"
      keyboardType = 'numeric'
      onChangeText={(amount) => this.setState({amount})}
      />
      <Text style={styles.text}>{this.state.currency} After Tax</Text>
      </View>
      <View style={styles.slide2}>
      <TextInput
      style={styles.input}
      placeholder="Enter or Select Tip % "
      placeholderTextColor="#666666"
      keyboardType = 'numeric'
      onChangeText={(percentage) => this.setState({percentage})}
      />
      <View style = {{padding:12}}>
      <StarRating
      disabled={false}
      maxStars={5}
      rating={this.state.starCount}
      selectedStar={(rating) => this.onStarRatingPress(rating)}
      starColor={'black'}
      emptyStarColor={'#666666'}
      />
      <Text style={styles.text}>I would like to give a {this.state.percentage} percent tip.</Text>
      </View>
      </View>
      <View style={styles.slide3}>
      <TextInput
      style={styles.input}
      placeholder="Enter or Select"
      placeholderTextColor="#666666"
      keyboardType = 'numeric'
      onChangeText={(ppl) => this.setState({ppl})}
      />
      <View>
      <Picker
      selectedValue={this.state.ppl}
      onValueChange={(ppl) => this.setState({ppl})}>
      <Picker.Item label="1" value="1" color= "black"/>
      <Picker.Item label="2" value="2"color="black" />
      <Picker.Item label="3" value="3"color="black" />
      <Picker.Item label="4" value="4"color="black" />
      <Picker.Item label="5" value="5"color="black" />
      <Picker.Item label="6" value="6"color="black" />
      <Picker.Item label="7" value="7"color="black" />
      <Picker.Item label="8" value="8"color="black" />
      <Picker.Item label="9" value="9"color="black" />
      <Picker.Item label="10" value="10"color="black" />
      <Picker.Item label="11" value="11"color="black" />
      <Picker.Item label="12" value="12"color="black" />
      <Picker.Item label="13" value="13"color="black" />
      <Picker.Item label="14" value="14"color="black" />
      <Picker.Item label="15" value="15"color="black" />
      <Picker.Item label="16" value="16"color="black" />
      <Picker.Item label="17" value="17"color="black" />
      <Picker.Item label="18" value="18"color="black" />
      <Picker.Item label="19" value="19"color="black" />
      <Picker.Item label="20" value="20"color="black" />
      <Picker.Item label="21" value="21"color="black" />
      <Picker.Item label="22" value="22"color="black" />
      <Picker.Item label="23" value="23"color="black" />
      <Picker.Item label="24" value="24"color="black" />
      <Picker.Item label="25" value="25"color="black" />
      <Picker.Item label="26" value="26"color="black" />
      <Picker.Item label="27" value="27"color="black" />
      <Picker.Item label="28" value="28"color="black" />
      <Picker.Item label="29" value="29"color="black" />
      <Picker.Item label="30" value="30"color="black" />
      <Picker.Item label="31" value="31"color="black" />
      <Picker.Item label="32" value="32"color="black" />
      <Picker.Item label="33" value="33"color="black" />
      <Picker.Item label="34" value="34"color="black" />
      <Picker.Item label="35" value="35"color="black" />
      <Picker.Item label="36" value="36"color="black" />
      <Picker.Item label="37" value="37"color="black" />
      <Picker.Item label="38" value="38"color="black" />
      <Picker.Item label="39" value="39"color="black" />
      <Picker.Item label="40" value="40"color="black" />
      <Picker.Item label="41" value="41"color="black" />
      <Picker.Item label="42" value="42"color="black" />
      <Picker.Item label="43" value="43"color="black" />
      <Picker.Item label="44" value="44"color="black" />
      <Picker.Item label="45" value="45"color="black" />
      <Picker.Item label="46" value="46"color="black" />
      <Picker.Item label="47" value="47"color="black" />
      <Picker.Item label="48" value="48"color="black" />
      <Picker.Item label="49" value="49"color="black" />
      <Picker.Item label="50" value="50"color="black" />
      <Picker.Item label="51" value="51"color="black" />
      <Picker.Item label="52" value="52"color="black" />
      <Picker.Item label="53" value="53"color="black" />
      <Picker.Item label="54" value="54"color="black" />
      <Picker.Item label="55" value="55"color="black" />
      <Picker.Item label="56" value="56"color="black" />
      <Picker.Item label="57" value="57"color="black" />
      <Picker.Item label="58" value="58"color="black" />
      <Picker.Item label="59" value="59"color="black" />
      <Picker.Item label="60" value="60"color="black" />
      <Picker.Item label="61" value="61"color="black" />
      <Picker.Item label="62" value="62"color="black" />
      <Picker.Item label="63" value="63"color="black" />
      <Picker.Item label="64" value="64"color="black" />
      <Picker.Item label="65" value="65"color="black" />
      <Picker.Item label="66" value="66"color="black" />
      <Picker.Item label="67" value="67"color="black" />
      <Picker.Item label="68" value="68"color="black" />
      <Picker.Item label="69" value="69"color="black" />
      <Picker.Item label="70" value="70"color="black" />
      <Picker.Item label="71" value="71"color="black" />
      <Picker.Item label="72" value="72"color="black" />
      <Picker.Item label="73" value="73"color="black" />
      <Picker.Item label="74" value="74"color="black" />
      <Picker.Item label="75" value="75"color="black" />
      <Picker.Item label="76" value="76"color="black" />
      <Picker.Item label="77" value="77"color="black" />
      <Picker.Item label="78" value="78"color="black" />
      <Picker.Item label="79" value="79"color="black" />
      <Picker.Item label="80" value="80"color="black" />
      <Picker.Item label="81" value="81"color="black" />
      <Picker.Item label="82" value="82"color="black" />
      <Picker.Item label="83" value="83"color="black" />
      <Picker.Item label="84" value="84"color="black" />
      <Picker.Item label="85" value="85"color="black" />
      <Picker.Item label="86" value="86"color="black" />
      <Picker.Item label="87" value="87"color="black" />
      <Picker.Item label="88" value="88"color="black" />
      <Picker.Item label="89" value="89"color="black" />
      <Picker.Item label="90" value="90"color="black" />
      <Picker.Item label="91" value="91"color="black" />
      <Picker.Item label="92" value="92"color="black" />
      <Picker.Item label="93" value="93"color="black" />
      <Picker.Item label="94" value="94"color="black" />
      <Picker.Item label="95" value="95"color="black" />
      <Picker.Item label="96" value="96"color="black" />
      <Picker.Item label="97" value="97"color="black" />
      <Picker.Item label="98" value="98"color="black" />
      <Picker.Item label="99" value="99"color="black" />
      </Picker>
      <Text style={styles.text}>Number of people</Text>
      </View>
      </View>
      <View style={styles.slide4}>
      <Text style={styles.text}>Bill Amount</Text>
      <Text style={styles.input}>{this.state.currency}{this.state.amount}</Text>
      <Text style={styles.text}> </Text>
      <Text style={styles.text}>Tip Amount</Text>
      <Text style={styles.input} >{this.state.currency}{(this.state.amount * (this.state.percentage/100))}</Text>
      <Text style={styles.text}>Total Amount</Text>
      <Text style={styles.input} >{this.state.currency}{this.state.amount * (1 + this.state.percentage/100)}</Text>
      <Text style={styles.text}> </Text>
      <Text style={styles.text}>Per Person</Text>
      <Text style={styles.input} >{this.state.currency}{(this.state.amount * (1 + this.state.percentage/100))/this.state.ppl}</Text>
      <Text style={styles.text}>Tip Per Person</Text><Text style={styles.input} >{this.state.currency}{(this.state.amount * (this.state.percentage/100))/this.state.ppl}</Text>
      </View>
      <View style={styles.slide3}>
      <Text style={styles.text}>Settings</Text>
      <TextInput
      style={styles.input2}
      placeholder="Enter Default % "
      placeholderTextColor="#666666"
      keyboardType = 'numeric'
      onChangeText={
        (text) => this.saveData(text)
      }
      />
      <View>
      <Text style={styles.input2}>Select Default Currency</Text>
      <Picker
      selectedValue={this.state.currency}
      onValueChange={(text) => this.saveCurr(text)}>
      <Picker.Item label="$" value="$" color= "black"/>
      <Picker.Item label="£" value="£"color="black" />
      <Picker.Item label="€" value="€"color="black" />
      </Picker>
      </View>
      </View>
      </Swiper>
      </TouchableWithoutFeedback>
    );
  }
  saveData(value) {
    this.state.percentage = value;
    AsyncStorage.setItem("percentage", value);
    this.setState({"percentage": value});
    console.log(value);
  }
  saveCurr(value) {
    this.state.percentage = value;
    AsyncStorage.setItem("currency", value);
    this.setState({"currency": value});
    console.log(value);
  }
};



const styles = StyleSheet.create({
  input: {
    height:36,
    color: 'black',
    fontSize: 30,
    textAlign:'center'
  },
  input2: {
    height:60,
    color: 'black',
    fontSize: 24,
    textAlign:'center'
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BBDEFB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C5CAE9',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B3E5FC',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#eeeeee',
    padding: 60
  },
  slide5: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  wrapper: {
  },
  Button:{
    position: 'absolute',
    bottom:0
  }
});

AppRegistry.registerComponent('cal', () => Calculator);
