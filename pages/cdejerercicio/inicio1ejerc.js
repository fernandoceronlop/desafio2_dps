
import React from 'react'
import
{
  StyleSheet,
  Text,
  View

} from 'react-native'

import {InputNumberButton } from "./cdejerercicio/InputNumberButton";
const buttons =
[
['CLEAR' ,'DEL','FACT','RaizC'],
['7', '8', '9', '/'],
['4', '5', '6', '*'],
['1', '2',' 3', '-'],
['0', '.', '=', '+']

];
export default class inicio1ejerc extends Component {
constructor(){
super()
this.initialState ={
  displayValue:'0',
  operator :null,
  firstValue :'',
  secondValue:'',
  nextValue: false
}



}

  renderButtons(){
  let layouts= buttons.map((buttonRows,index)=> {
    let rowItem =buttonRows.map((buttonItems, buttonIndex)=> {
      return <InputNumberButton
  value={buttonItems}
   handleOnPress={this.handleInput.bind(this, buttonItems)}
   key={'btn-' + buttonIndex}
  />

  });

  return <View style ={styles.inputRow} key={'row-' + index}>
  {rowItem}
  </View>
  });
  return layouts
}

handleInput = (input) => {
const {displayValue,operator,firstValue,secondValue,nextValue}=this.state;
    
switch(input){
case'0':
break;
case'1':
break;
case'2':
break;
case'3':
break;
case'4':
break;
case'5':

break;
case'6':
break;
case'7':
break;
case'8':
break;
case'9':
 this.setState({ displayValue:(displayValue ==='0' )? input : displayValue +input
})
if(!nextValue)
{

  this.setState({firstValue: firstValue + input})
  }
else 
{
 this.setState({secondValue: secondValue + input})

}
break;

case '+':
case '-':
case'*':
case '/':
this.setState({
  nextValue: true,
  operator:input,
  displayValue:(operator !==null)? displayValue.substr(0,displayValue.length) : displayValue +input
})
break;
case 'FACT':
break;
case '.':
let dot = displayValue.toString().slice(-1);
this.setState({
displayValue: dot !=='.'? displayValue + input :displayValue

})
if(!nextValue)
{

  this.setState({firstValue: firstValue + input})
  }
else 
{
 this.setState({secondValue: secondValue + input})

}

break;
case'=':
let formatoperator = (operator == '*')? '*': (operator == '/')? '/' : operator
let result =eval(firstValue + formatoperator  +  secondValue)
this.setState({
  displayValue: result % 1 === 0 ? result : result.toFixed(2),
  firstValue: result % 1 === 0 ? result : result.toFixed(2),
  secondValue: '',
  operator: null,
  nextValue: false

})
break;
case 'CLEAR':
this.setState(this.initialState);
break;
case 'DEL':
let string =displayValue.toString();
let deletedString =string.substr(0, string.length == 1 ? '0' : deletedString);
let length =string.length;
this.setState({
  displayValue : length == 1 ? '0' : deletedString,
  firstValue:length == 1 ? '' : deletedString
})
break;
case 'RAIZC':
break;
}
}




render(){

  return (
    < View style={styles.container}>
    <View style={styles.resultContainer}>
<Text style={styles.resulText}>{this.state.displayValue}</Text>

    </View>

     <View style={styles.inputContainer}>


    </View>
    </View>
);
}
}
const styles= StyleSheet.create({
container:{
  flex:1,
},
resultContainer: {
  flex:2,
  justifyContent: 'center',

  backgroundColor: '#1E1240'
},
inputContainer: {
  flex:8,
  backgroundColor: '#3D0875'

},
resulText: {
  color:'white',
  fontSize: 80,
  fontWeight:'bold',
  padding:20
}
});
