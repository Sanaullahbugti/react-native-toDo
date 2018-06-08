import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,KeyboardAvoidingView,Image,TextInput,AsyncStorage,button } from 'react-native';

export default class Splash extends React.Component {
    constructor(props){
        super(props);
        this.callme=this.callme.bind(this);
        this.state={email:'',
        password:''
    }

  }
  async componentDidMount(){
       
    if(AsyncStorage.getItem('@uname:key')){
   user= [{email:'admin@gmail.com',password:'admin'}];
   try {
     AsyncStorage.setItem('@uname:key', JSON.stringify(user));
  } catch (error) {
    // Error saving data
  }
}
}
    async callme(){
        //alert(this.state.email)
        let a=await  AsyncStorage.getItem('@uname:key');
        let b=JSON.parse(a);
      
      if(this.state.email.toLowerCase()===b[0].email.toLowerCase() && this.state.password.toLowerCase()===b[0].password.toLowerCase()){
            this.props.navigation.navigate('Dashboard'); 
        }else{
            alert('email or passsword wrong ');
        }
    }
    static navigationOptions = {
        header:null,
      };
  render() {
    return (
        <KeyboardAvoidingView style={styles.container}
        behavior='padding'
        >
        <View style={styles.container1}>
            <Image
                style={{width: 150, height: 150}}
                source={require('./src/images/logo.png')}
            />
            <Text style={styles.logoText1}
            >Welcome to the geeks academy
            </Text>
        </View>
            <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder='Email'
            placeholderTextColor='#ffffff'
            onChangeText={(email) => this.setState({email})}
            >
            </TextInput>
            <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder='password'
            placeholderTextColor='#ffffff'
            onChangeText={(password)=>this.setState({password})}
            secureTextEntry
            >
            </TextInput>
            <TouchableOpacity style={styles.button}
                onPress={this.callme}
            >
                <Text style={styles.buttonText}>Login</Text>

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
        paddingVertical:14,
        width:300,
    },
    button:{
        backgroundColor:'#1c313a',
        width:300,
        borderRadius:25,
        paddingVertical:14,
        marginVertical:10
    },
    buttonText:{
        fontSize:18,
        color:'#ffffff',
        textAlign:'center'
    },container1:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    logoText1:{
        marginVertical:2,
        fontSize:18,
        color:'rgba(255,255,255,0.7)',
        
    }
});