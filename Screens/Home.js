import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

export default class Home extends React.Component{
    constructor(){
        super();
        this.state={
            text:text,
           isSearchPressed:'',
           defination:'',
           example:[],
           word:'',
           lexicalCategory:''
        }
    }
    getWord=(word)=>{
var searchKeyword=word.toLowerCase();
var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json";
return fetch(url)
.then((data)=>{
if(data.status===200){
    return data.json()
}
else{
    return null
}
})
.then((response)=>{
var responseObject=respone
if(responseObject){
    var wordData = responseObject.definations[0]
    var definition =wordData.description
    var lexicalCategory=wordData.wordType 
    this.setState({
        "word":this.state.text,
        "defination":definition,
        "lexicalCategory":lexicalCategory
    })
}
})
    
    }
render(){
    return(
        <View>
  <TextInput
  style={styles.inputBox}
  onChangeText={text =>{
      this.setState({
          text:text,
          isSearchPressed:false,
          word:"loading...",
          examples:[],
          defination:''
      })
  }}
  value={this.state.text}>

  </TextInput>
 <TouchableOpacity
 style={styles.sbutton}
 onPress={()=>{
     this.setState({
         isSearchPressed:true,
        
     })
     this.getWord(this.state.text);
 }}>
<Text  style={styles.buttonText}>Search</Text>
 </TouchableOpacity>
d
        </View>
    )
}
}
const styles = StyleSheet.create({
    inputBox: {
        marginTop: 30,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 2,
        outline: 'none',
        borderRadius:10
      },
      sbutton: {
        marginTop: 10,
        marginLeft: 140,
        borderWidth: 2,
        borderColor: 'black',
        fontStyle: 'italics',
        width: 110,
        height: 30,
        borderRadius:8
      },
      buttonText: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 16,
        alignContent:'center',
        textAlign:'center',
        marginTop:2.5
      },
})