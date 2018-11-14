import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export interface Props {
  onPress: () => void;
}

const BackButton = ({ onPress: onPress }: Props) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>Back</Text>
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
    backgroundColor: "#009999",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 0,
    position: "absolute",
    left: 10
  }
});

export default BackButton;
