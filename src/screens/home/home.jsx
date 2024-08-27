import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from "./home.style";
import React,{useState} from "react";
import icons from "../../constants/icons"
function Home (){

    const [login, setLogin] = useState("")
    
    return <View style={styles.container}>
        <View style={styles.container2}>
            <View>
                <Image source={icons.logo} style={styles.image}/>
            </View>
            <Text style={styles.text}>Login</Text>
            <TextInput 
                style = { styles.input }
                value ={login}
                onChangeText= {text=>setLogin(text)}/>  
            <Text  style={styles.text}>Senha</Text>
            <TextInput style = { styles.input }/>
            <TouchableOpacity
                style={styles.button}
                onPress={() => console.log('Botão personalizado pressionado!')}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default Home;