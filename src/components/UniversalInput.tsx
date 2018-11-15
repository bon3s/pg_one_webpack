import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface Props {
  inputType: string;
  maxLength: number;
  value: string;
  onValueChange: (text: string) => void;
  onError: (text: string) => void;
}

class UniversalInput extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.validateNumberInput = this.validateNumberInput.bind(this);
    this.validateTextInput = this.validateTextInput.bind(this);
  }

  public validateNumberInput(text: string) {
    const reg = /^\d+$\b/;
    if (text.length === 0) {
      this.props.onValueChange(text);
    } else {
      if (reg.test(text)) {
        if (Number(text) <= this.props.maxLength) {
          this.props.onValueChange(text);
        } else {
          this.props.onError(
            "You can't enter a number higher than " + this.props.maxLength
          );
        }
      } else {
        this.props.onError("You can enter only numbers!");
      }
    }
  }

  public validateTextInput(text: string) {
    if (text.length === 0) {
      this.props.onValueChange(text);
    } else {
      if (text.length < this.props.maxLength) {
        this.props.onValueChange(text);
      } else {
        this.props.onError(
          "You can enter a max of " + this.props.maxLength + " characters."
        );
      }
    }
  }

  render() {
    if (this.props.inputType == "number") {
      return (
        <View style={styles.viewStyle}>
          <TextInput
            style={styles.textInputStyle}
            keyboardType="numeric"
            value={this.props.value ? String(this.props.value) : ""}
            onChangeText={this.validateNumberInput}
          />
        </View>
      );
    }
    if (this.props.inputType == "text") {
      return (
        <View style={styles.viewStyle}>
          <TextInput
            style={styles.textInputStyle}
            value={this.props.value ? String(this.props.value) : ""}
            onChangeText={this.validateTextInput}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    padding: 10,
    fontSize: 16,
    color: "#ff0000",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ff0000",
    width: "30%"
  },
  viewStyle: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default UniversalInput;
