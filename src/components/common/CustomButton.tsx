import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
interface Props {
  onPress: () => void;
  children: string;
}
const CustomButton = ({ onPress, children }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: "center",
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    backgroundColor: "#ff0000",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ff0000",
    alignSelf: "center",
    paddingHorizontal: 30,
    paddingVertical: 5
  }
});

export default CustomButton;
