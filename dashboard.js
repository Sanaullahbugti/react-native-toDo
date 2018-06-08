import React from 'react';
import { StyleSheet, Text, Button , View , TouchableOpacity , AsyncStorage,KeyboardAvoidingView,Image,TextInput,FlatList } from 'react-native';
export default class DashBoard extends React.Component {
    constructor(props){
          super(props);
          this.state={
              data:[],
              name:''
          }
          this.addItem=this.addItem.bind(this);
          
       
    }
    async componentDidMount() {
        try {
          const data = await AsyncStorage.getItem('uname');
          if (data !== null) {
            this.setState({
              data: JSON.parse(data),
            });
          }
        } catch (error) {
          alert(error);
        }
      }
    async saveData(data) {
        try {
          await AsyncStorage.setItem('uname', JSON.stringify(data));
        } catch (error) {
          alert(error);
        }
      }
    deleteItem(item) {
        const data = this.state.data;
        const index = data.indexOf(item);
        if(index>-1){
        data.splice(index,1);
        alert("Item Successfully Deleted")
        }
        this.setState({
          data: data
        });
        this.saveData(this.state.data);
      }
     addItem(){
        this.setState({data:this.state.data.concat({name:this.state.name})});   
        alert("Item Successfully Added") 
        this.saveData(this.state.data);
     }
  render() {
    return (
        <KeyboardAvoidingView style={styles.container}
        behavior='padding'
        >
             <FlatList style={{marginTop:30}}
                data={this.state.data}
                keyExtractor={item => item.name}
                renderItem={({item,index})=>
                <View style={{height:40,width:300,backgroundColor:"rgba(240,240,240,0.6)",flexDirection:"row",flex:1,marginLeft:8,marginVertical:2,borderRadius:20,paddingLeft:10}}>
                    <Text>{item.key}</Text>
                    <Text style={{width:220,fontSize:20,paddingVertical:5}}>{item.name}</Text>
                    <TouchableOpacity style={styles.delete}
                     onPress={onPress=>this.deleteItem(item)}       
>     
                <Text style={styles.deleteText}>delete</Text>
            </TouchableOpacity>
             
                 </View>
        } 
        />
            <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder='Enter user name'
            placeholderTextColor='#ffffff'
            onChangeText={(name) => this.setState({name})}
            >
            </TextInput>
            <TouchableOpacity style={styles.button}
                onPress={this.addItem}
            >
                <Text style={styles.buttonText}>Add User</Text>
            </TouchableOpacity> 
        </KeyboardAvoidingView>
    );
  }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#455a64'
    },
    inputBox:{
        backgroundColor:'rgba(255,255,255,0.4)',
        borderRadius:25,
        margin:10,
        paddingHorizontal:20,
        paddingVertical:5,
        width:300,
    },
    button:{
        backgroundColor:'#1c313a',
        width:300,
        borderRadius:25,
        paddingVertical:5,
        marginVertical:10
    },
    delete:{
        paddingVertical:5,
        height:40,
        width:70,
        backgroundColor:"#1c313a",
        borderRadius:20

    },
    buttonText:{
        fontSize:18,
        color:'#ffffff',
        textAlign:'center'
    },
    deleteText:{
        fontSize:18,
        color:'red',
        textAlign:'center'
    }
});