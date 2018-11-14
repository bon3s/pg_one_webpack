import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";

import { History } from "history";

interface Props {
  customTextInput: string;
  numberInput: number;
  history: History;
  value: string;
  onChangeText: (text: string) => void;
  onChange: (text: string) => void;
}

class CustomTextInput extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <TextInput
          style={styles.textInputStyle}
          value={this.props.value ? this.props.value : ""}
          onChangeText={text => {
            this.props.onChange(text);
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
    width: "60%"
  },
  viewStyle: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CustomTextInput;
