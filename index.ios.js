import React, { Component } from 'react';
import ScreenSwitcher from 'react-native-device-screen-switcher';
import PopupDialog, {
  DialogTitle,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
  DefaultAnimation,
} from 'react-native-popup-dialog';
import StarRating from 'react-native-star-rating';
import { AppState, AppRegistry, Text, TextInput, View, StyleSheet, TouchableWithoutFeedback, Keyboard, Picker, Button,SegmentedControlIOS } from 'react-native';
import Swiper from 'react-native-swiper';
var STORAGE_KEY = '@AsyncStorageExample:key';

class Calculator extends Component {
  state = {
    appState: AppState.currentState
  }

  constructor(props) {
    super(props);
    this.state = {text: '',
    starCount: 3,
    percentage: 0
  };
}
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
    placeholder="Enter Bill Amount"
    placeholderTextColor="#eeeeee"
    keyboardType = 'numeric'
    onChangeText={(amount) => this.setState({amount})}
    />
    <Text style={styles.text}>After Tax</Text>
    </View>
    <View style={styles.slide2}>
    <TextInput
    style={styles.input}
    placeholder="Tip Percentage"
    placeholderTextColor="#eeeeee"
    keyboardType = 'numeric'
    onChangeText={(percentage) => this.setState({percentage})}
    />
    <View style = {{padding:12}}>
    <StarRating
    disabled={false}
    maxStars={5}
    rating={this.state.starCount}
    selectedStar={(rating) => this.onStarRatingPress(rating)}
    starColor={'white'}
    emptyStarColor={'white'}
    /><Text style={styles.text}>I would like to give a {this.state.percentage} % tip.</Text>
    </View></View>
    <View style={styles.slide3}>
    <TextInput
    style={styles.input}
    placeholder="Enter or Select"
    placeholderTextColor="#eeeeee"
    keyboardType = 'numeric'
    onChangeText={(ppl) => this.setState({ppl})}
    />
    <View>
    <Picker
    selectedValue={this.state.ppl}
    onValueChange={(ppl) => this.setState({ppl})}>
    <Picker.Item label="1" value="1" color= "white"/>
    <Picker.Item label="2" value="2"color="white" />
    <Picker.Item label="3" value="3"color="white" />
    <Picker.Item label="4" value="4"color="white" />
    <Picker.Item label="5" value="5"color="white" />
    <Picker.Item label="6" value="6"color="white" />
    <Picker.Item label="7" value="7"color="white" />
    <Picker.Item label="8" value="8"color="white" />
    <Picker.Item label="9" value="9"color="white" />
    <Picker.Item label="10" value="10"color="white" />
    <Picker.Item label="11" value="11"color="white" />
    <Picker.Item label="12" value="12"color="white" />
    <Picker.Item label="13" value="13"color="white" />
    <Picker.Item label="14" value="14"color="white" />
    <Picker.Item label="15" value="15"color="white" />
    <Picker.Item label="16" value="16"color="white" />
    <Picker.Item label="17" value="17"color="white" />
    <Picker.Item label="18" value="18"color="white" />
    <Picker.Item label="19" value="19"color="white" />
    <Picker.Item label="20" value="20"color="white" />
    <Picker.Item label="21" value="21"color="white" />
    <Picker.Item label="22" value="22"color="white" />
    <Picker.Item label="23" value="23"color="white" />
    <Picker.Item label="24" value="24"color="white" />
    <Picker.Item label="25" value="25"color="white" />
    <Picker.Item label="26" value="26"color="white" />
    <Picker.Item label="27" value="27"color="white" />
    <Picker.Item label="28" value="28"color="white" />
    <Picker.Item label="29" value="29"color="white" />
    <Picker.Item label="30" value="30"color="white" />
    <Picker.Item label="31" value="31"color="white" />
    <Picker.Item label="32" value="32"color="white" />
    <Picker.Item label="33" value="33"color="white" />
    <Picker.Item label="34" value="34"color="white" />
    <Picker.Item label="35" value="35"color="white" />
    <Picker.Item label="36" value="36"color="white" />
    <Picker.Item label="37" value="37"color="white" />
    <Picker.Item label="38" value="38"color="white" />
    <Picker.Item label="39" value="39"color="white" />
    <Picker.Item label="40" value="40"color="white" />
    <Picker.Item label="41" value="41"color="white" />
    <Picker.Item label="42" value="42"color="white" />
    <Picker.Item label="43" value="43"color="white" />
    <Picker.Item label="44" value="44"color="white" />
    <Picker.Item label="45" value="45"color="white" />
    <Picker.Item label="46" value="46"color="white" />
    <Picker.Item label="47" value="47"color="white" />
    <Picker.Item label="48" value="48"color="white" />
    <Picker.Item label="49" value="49"color="white" />
    <Picker.Item label="50" value="50"color="white" />
    <Picker.Item label="51" value="51"color="white" />
    <Picker.Item label="52" value="52"color="white" />
    <Picker.Item label="53" value="53"color="white" />
    <Picker.Item label="54" value="54"color="white" />
    <Picker.Item label="55" value="55"color="white" />
    <Picker.Item label="56" value="56"color="white" />
    <Picker.Item label="57" value="57"color="white" />
    <Picker.Item label="58" value="58"color="white" />
    <Picker.Item label="59" value="59"color="white" />
    <Picker.Item label="60" value="60"color="white" />
    <Picker.Item label="61" value="61"color="white" />
    <Picker.Item label="62" value="62"color="white" />
    <Picker.Item label="63" value="63"color="white" />
    <Picker.Item label="64" value="64"color="white" />
    <Picker.Item label="65" value="65"color="white" />
    <Picker.Item label="66" value="66"color="white" />
    <Picker.Item label="67" value="67"color="white" />
    <Picker.Item label="68" value="68"color="white" />
    <Picker.Item label="69" value="69"color="white" />
    <Picker.Item label="70" value="70"color="white" />
    <Picker.Item label="71" value="71"color="white" />
    <Picker.Item label="72" value="72"color="white" />
    <Picker.Item label="73" value="73"color="white" />
    <Picker.Item label="74" value="74"color="white" />
    <Picker.Item label="75" value="75"color="white" />
    <Picker.Item label="76" value="76"color="white" />
    <Picker.Item label="77" value="77"color="white" />
    <Picker.Item label="78" value="78"color="white" />
    <Picker.Item label="79" value="79"color="white" />
    <Picker.Item label="80" value="80"color="white" />
    <Picker.Item label="81" value="81"color="white" />
    <Picker.Item label="82" value="82"color="white" />
    <Picker.Item label="83" value="83"color="white" />
    <Picker.Item label="84" value="84"color="white" />
    <Picker.Item label="85" value="85"color="white" />
    <Picker.Item label="86" value="86"color="white" />
    <Picker.Item label="87" value="87"color="white" />
    <Picker.Item label="88" value="88"color="white" />
    <Picker.Item label="89" value="89"color="white" />
    <Picker.Item label="90" value="90"color="white" />
    <Picker.Item label="91" value="91"color="white" />
    <Picker.Item label="92" value="92"color="white" />
    <Picker.Item label="93" value="93"color="white" />
    <Picker.Item label="94" value="94"color="white" />
    <Picker.Item label="95" value="95"color="white" />
    <Picker.Item label="96" value="96"color="white" />
    <Picker.Item label="97" value="97"color="white" />
    <Picker.Item label="98" value="98"color="white" />
    <Picker.Item label="99" value="99"color="white" />
    </Picker>
    <Text style={styles.text}>Number of people</Text>
    </View>
    </View>
    <View style={styles.slide4}>

    <Text style={styles.text}>Bill Amount</Text>
    <Text style={styles.input} >{this.state.amount}</Text>

    <Text style={styles.text}>Tip Amount</Text>
    <Text style={styles.input} >{this.state.text.split(' ').map((word) => (this.state.amount * (this.state.percentage/100))/this.state.ppl)}</Text>

    <Text style={styles.text}>Total Amount</Text>
    <Text style={styles.input} >{this.state.text.split(' ').map((word) => (this.state.amount * (1 + this.state.percentage/100)))}</Text>


    <Text style={styles.text}>Per Person</Text>
    <Text style={styles.input} >{this.state.text.split(' ').map((word) => (this.state.amount * (1 + this.state.percentage/100))/this.state.ppl)}</Text>

    <Text style={styles.text}>Tip Per Person</Text><Text style={styles.input} >{this.state.text.split(' ').map((word) => (this.state.amount * (this.state.percentage/100))/this.state.ppl)}</Text>
    </View>
    <View style={styles.container}>
    <Button
    title="Show Dialog"
    onPress={() => {
      this.popupDialog.show();
    }}
    />
    <PopupDialog
    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
    dialogAnimation = { new SlideAnimation({ slideFrom: 'top' })}
    dialogTitle={<DialogTitle title="Settings" />}
    actions={[
      <DialogButton
      text="Done"
      onPress={() => {
        this.popupDialog.dismiss();
      }}
      key=""
      />
    ]}
    >
    <View>
    <SegmentedControlIOS
    values={['$', '£', '€']}
    selectedIndex={this.state.selectedIndex}
    onValueChange={(event) => {
      this.setState({currency: this.state.selectedIndex});

    }}
    />
    </View>
    </PopupDialog>
    </View>
    </Swiper>
    </TouchableWithoutFeedback>
  );

}
}

const styles = StyleSheet.create({
  input: {
    height:60,
    color: 'white',
    fontSize: 30,
    textAlign:'center'
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#222222',
    padding: 60
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  wrapper: {
  },
  Button:{
    //        flex: 1,
    //        alignItems: 'baseline',
    position: 'absolute',
    bottom:0
  }
});

AppRegistry.registerComponent('cal', () => Calculator);
