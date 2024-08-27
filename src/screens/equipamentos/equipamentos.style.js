
import { COLORS } from "../../constants/theme"
export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.azul,
        alignItems: "center"
    },
    intem:{
        backgroundColor: COLORS.branco,
        borderRadius: 10,
        width: "90%",
        padding: 10,
        marginTop:40,
        flexWrap: "wrap", 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: "space-between"
    },
    se1:{
        backgroundColor: COLORS.azul,
        height:"outo",
        width:"20%",
    },
    se2:{
        maxWidth:"50%",
        alignItems: "100%",
        textAlign:"center"
    },
    text:{
        maxWidth:"100%",
        textAlign:"center",
        alignItems:"center",
        fontSize: 20,
        fontWeight: "bold"
    }
}