import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface Props {
  text: string;
  onChange: (text: string) => void;
  onError: (value: boolean, text: string) => void;
  onChangeText: (text: string) => void;
  value: string;
}

class NumberInput extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  validateInput(text: string) {
    const reg = /^\d+$\b/;
    if (text.length === 0) {
      this.props.onChange(text);
    } else {
      if (reg.test(text)) {
        if (Number(text) <= 23) {
          this.props.onChange(text);
        } else {
          this.props.onError(true, "You can't enter a number higher than 23.");
        }
      } else {
        this.props.onError(true, "You can enter only numbers!");
      }
    }
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <TextInput
          style={styles.textInputStyle}
          keyboardType="numeric"
          value={this.props.value ? String(this.props.value) : ""}
          onChangeText={text => {
            this.validateInput(text);
          }}
        />
      </View>
    );
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

export default NumberInput;
