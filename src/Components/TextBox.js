import React, {Component} from 'react';
import {View,Text,TouchableHighlight,StyleSheet,TextInput} from 'react-native';
import {db} from '../Databasefile';
import List from './List';

let addItem = item => {  
    db.database().ref('/items').push({
      name: item
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
  };
export default class TextBox extends Component {
  constructor(){
      super();
      this.state = {
          name : ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
  }
  
  handleChange = e =>{
      this.setState({
          name:e.nativeEvent.text
      })
  }
  handleSubmit = () => {
    addItem(this.state.name);
    
  };
  componentDidMount(){
    //this.listenForItems(this.itemsRef);
  }
  render() {
    return (
        <View style={styles.main}>
        <TextInput style={styles.itemInput} onChange={this.handleChange} />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
        <List/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    backgroundColor: '#1234'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    width:200,
    marginLeft:50,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
