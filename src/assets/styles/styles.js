import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 15,
  },

  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    bottom: 90,
  },

  subTitulo: {
    fontSize: 15,
    color: "white",
    fontStyle: "italic",
    textAlign: "center",
    bottom: 80,
  },

  btn: {
    backgroundColor: "#44704a",
    width: 280,
    height: 40,
    borderRadius: 30,
    top: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },

  login: {
    color: "#629669",
    fontSize: 15,
  },

  containerSI: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 10,
  },

  tituloSI: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    bottom: 100,
  },

  subTituloSI: {
    color: "white",
    fontSize: 13,
    fontStyle: "italic",
    bottom: 100,
  },

  inputs: {

  },

  input: {
    backgroundColor: "rgba(221, 221, 221, 0.64)",
    width: 200,
    height: 30,
    borderRadius: 30,
    bottom: 40,
  },

  btnSI: {
    backgroundColor: "#345577",
    width: 280,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cadastroSI: {
    color: "#6ea2d0",
    fontStyle: "italic",
  },

  div: {
    flexDirection: "row",
    color: "white",
    top: 160,
  },

  details: {
    color: "white",

  }

});
