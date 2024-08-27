import { View , Text ,Image} from "react-native";
import { styles } from "./equipamentos.style";
import icons from "../../constants/icons.js"

function Equipamentos (){

lista=["computadores", "Roteadores" ,"impressoras"," Perifericos e peças de reservar", "Equipamentos de rede", "dispositivos de armazenamento"]


return <View style={styles.container}>
        
        {lista.map((iten, index)=>(  
             
            <View Key={index} style={styles.intem} >
                <Image source={icons.o1} style={styles.se1}/>

                <View style={styles.se2}><Text style={styles.text}>{iten}</Text></View>

                <View style={styles.se1}></View>
            </View>
        ))}
        
    </View>
}


export default Equipamentos;