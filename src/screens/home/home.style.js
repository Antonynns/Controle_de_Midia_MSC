import { COLORS } from "../../constants/theme"
export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.azul,
        alignItems: "center"
    },

    input: {
        whdth: 40,
        borderWidth: 3,
        color: 'gray',
        padding: 10,
        alignItems: "center",
        posicion: "absolute",
        borderRadius: 10,
        borderColor: COLORS.azul,
        margin: 10,
        fontSize: 20
    },

    container2: {
        backgroundColor: COLORS.branco,
        padding: 20,
        alignItems: "left",
        posicion: "absolute",
        margin: "auto",
        borderRadius: 20,
    },

    text:{
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold"
    },

    image: {
        margin: "auto",
        posicion: "absolute",
        display: "block",
        alignItems:"center"
    },

    button: {
        backgroundColor: '#007AFF',
        borderRadius: 8,
        padding: 20,
        margin: 20
      },
      buttonText: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
      },
}