import { StatusBar } from 'expo-status-bar';
import { Text, ImageBackground, TouchableOpacity, View, Pressable } from 'react-native';

// IMPORTAÇÃO COMPONENTES
import InputComp from '../components/InputComp';
import TextComp from '../components/TextComp';

// IMPORTANDO O ICONE
import Foundation from '@expo/vector-icons/Foundation';

import { styles } from '../styles/styles';

// IMPORTAÇÃO NATIVE
import { useNavigation } from '@react-navigation/native';

export default function signIn() {

  const Navigation = useNavigation();

  return (
    <ImageBackground style={styles.containerSI} source={require("../images/sign.jpg")}>

      <Foundation name="mountains" size={50} color="#345577" style={{ bottom: 190, right: 130 }} />

      <Text style={styles.tituloSI}>ACESSE SUA CONTA!</Text>
      <Text style={styles.subTituloSI}> Bem vindo de volta usuário!</Text>

      <View style={styles.inputs}>
        <TextComp>Email:</TextComp>
        <InputComp textPlaceHolder={"Digite seu email"} password={false} />
        <TextComp>Senha:</TextComp>
        <InputComp textPlaceHolder={"Digite sua senha"} password={true} />


        <Pressable style={{ position: 'absolute', right: -80, bottom: 7 }} onPress={() => { }}>
          <Text style={{ color: "#6ea2d0", fontSize: 12 }}>Forgot your password?</Text>
        </Pressable>
      </View>

      <TouchableOpacity style={styles.btnSI}>
        <Text style={styles.cadastroSI}> ENTRAR </Text>
      </TouchableOpacity>

      <View style={styles.div}>
        <Text style={styles.details}>Não tem uma conta ainda?</Text>
        <Pressable onPress={() => Navigation.navigate("signUp")}><Text style={{ color: "#345577", fontWeigh: "bold" }}> Crie uma aqui! </Text></Pressable>
      </View>


    </ImageBackground>
  );
}
