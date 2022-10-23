
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {inicio1ejerc } from "./cdejerercicio/inicio1ejerc";

export default class inicio1ejerc extends components {
  render() {
    const {value,  handleOnPress} = this.props;

    return <TouchableOpacity style={styles.container}
  onPress={()=> handleOnPress(value)}>
    <Text style={styles.Text}>{value}</Text>
    
    
    </TouchableOpacity>;
  }
}

const styles = styles.create({
  container: {
    flex: 1,
    margin: 1,
  backgroundColor: 'rgba(255, 255, 255, 255, 0.1)',
    justifyContext: 'center',
    alignItems: 'center'
  },
  text:{
color:'white' ,
fontsize: 26

  }
}
)
;