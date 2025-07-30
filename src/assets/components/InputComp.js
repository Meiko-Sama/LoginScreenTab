import { TextInput } from "react-native";
import { styles } from "../styles/styles";


export default function InputComp({ textPlaceholder, password }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={textPlaceholder}
      placeholderTextColor={"rgb(185, 185, 185)"}
      secureTextEntry={password}
    />
  )
}
