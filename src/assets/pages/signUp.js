import { StatusBar } from 'expo-status-bar';
import { Text, ImageBackground, TouchableOpacity, TextInput, View, Pressable } from 'react-native';

// IMPORTANDO COMPONENTES
import InputComp from '../components/InputComp';
import TextComp from '../components/TextComp';

// IMPORTANDO O ICONE
import Foundation from '@expo/vector-icons/Foundation';

// IMPOTANDO STYLES
import { styles } from '../styles/styles';

// IMPORTAÇÃO NATIVE
import { useNavigation } from '@react-navigation/native';

export default function signUp() {

  const Navigation = useNavigation();

  return (
    <ImageBackground style={styles.containerSI} source={require("../images/sign.jpg")}>

      <Foundation name="mountains" size={50} color="#345577" style={{ bottom: 190, right: 130 }} />

      <Text style={styles.tituloSI}>CRIE SUA CONTA!</Text>
      <Text style={styles.subTituloSI}> Acesse novos conteúdos todos os dias!</Text>

      <View>
        <TextComp>Nome:</TextComp>
        <InputComp textPlaceHolder={"Digite seu nome"} password={false} />

        <TextComp>Email:</TextComp>
        <InputComp textPlaceHolder={"Digite seu email"} password={false} />

        <TextComp>Senha:</TextComp>
        <InputComp textPlaceHolder={"Digite sua senha"} password={true} />
      </View>
      <TouchableOpacity style={styles.btnSI}>
        <Text style={styles.cadastroSI}>CRIAR CONTA</Text>
      </TouchableOpacity>

      <View style={styles.div}>
        <Text style={styles.details}>Já tem uma conta?</Text>
        <Pressable onPress={() => Navigation.navigate("signIn")}><Text style={{ color: "#345577", fontWeigh: "bold" }}> Acesse aqui! </Text></Pressable>
      </View>

    </ImageBackground>
  );
}
