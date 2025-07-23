import { StatusBar } from 'expo-status-bar';
import { Text, ImageBackground, TouchableOpacity, TextInput, View, Pressable } from 'react-native';

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

      <Text style={{ color: "#6ea2d0", bottom: 40, }}>Email:</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={{ color: "#6ea2d0", bottom: 40, }}>Senha:</Text>
      <TextInput style={styles.input}></TextInput>

      <TouchableOpacity style={styles.btnSI}>
        <Text style={styles.cadastroSI}> ENTRAR </Text>
      </TouchableOpacity>

      <View style={styles.div}>
        <Text style={styles.details}>Não tem uma conta ainda?</Text>
        <Pressable onPress={() => Navigation.navigate("signUp")}><Text style={{ color: "white", fontWeigh: "bold" }}> Crie uma aqui! </Text></Pressable>
      </View>

    </ImageBackground>
  );
}
