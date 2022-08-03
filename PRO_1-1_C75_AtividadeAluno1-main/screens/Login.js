//importe da tela transaction a linha 1 a 13 - bibliotecas
// 17 - banco de dados
// 19 a 21  - carregar imagens 

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          //crie os estados email: "" e password:""
        };
      }
      //crie a função handleLogin aqui
      handleLogin = (email, password) => {
        //copie da tela da profe os comandos
      }

          
    render(){
        //puxe aqui as informações dos estados e-mail e password referencia tela transaction linha 272
        
        return(
            //copie o KeyboardAvoidingView da tela transaction linha 282
            //copie o Image Background e a View que esta carregando as imagens appIcon e appName linha 283 a 287
        
          <View style={styles.lowerContainer}>
            <TextInput
              style={styles.textinput}
              onChangeText={text => this.setState({ email: text })}
              placeholder={"Insira seu Email"}
              placeholderTextColor={"#FFFFFF"}
              autoFocus
            />

            //crie um textInput para o campo senha e coloque uma props
                 no final chamada secureTextEntry (use como referencia o textInput de cima)

            //crie um botao com o texto entrar e na props onPress chame 
            a função handleLogin(email, password) (use como referencia o botao da tela transaction linha 319)
           
          </View> 

          // feche aqui o ImageBackground
         //feche aqui o KeyboardAvoidingView
    )
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF"
    },
    bgImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
  
    upperContainer: {
      flex: 0.5,
      justifyContent: "center",
      alignItems: "center"
    },
    appIcon: {
      width: 280,
      height: 280,
      resizeMode: "contain",
      marginTop: 80
    },
    appName: {
      width: 180,
      resizeMode: "contain",
      marginBottom: 30
    },
    lowerContainer: {
      flex: 0.5,
      alignItems: "center"
    },
    textinput: {
      width: "75%",
      height: 55,
      padding: 10,
      borderColor: "#FFFFFF",
      borderWidth: 4,
      borderRadius: 10,
      fontSize: 18,
      color: "#FFFFFF",
      fontFamily: "Rajdhani_600SemiBold",
      backgroundColor: "#5653D4"
    },
    button: {
      width: "43%",
      height: 55,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F48D20",
      borderRadius: 15
    },
    buttonText: {
      fontSize: 24,
      color: "#FFFFFF",
      fontFamily: "Rajdhani_600SemiBold"
    }
  });
  