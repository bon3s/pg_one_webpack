import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import CustomButton from "./common/CustomButton";
import { Dispatch } from "redux";
import { History } from "history";
import { AppState } from "src/store/appState";

interface Props {
  customTextInput: string;
  numberInput: number;
  dispatch: Dispatch<any>;
  history: History;
  result: string;
  style: StyleSheet;
}

class ResultPage extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }
  handleButton() {
    this.props.history.push("/");
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.viewStyleSuccess}>
          <Text style={styles.textStyleSuccess}>
            Result:
            {"\n\n" + this.props.result}
          </Text>
        </View>
        <View style={styles.containerStyle}>
          <CustomButton onPress={this.handleButton}>Home</CustomButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: 15
  },
  viewStyleSuccess: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#007F00",
    borderRadius: 5
  },
  textStyleSuccess: {
    color: "#007F00",
    fontSize: 14,
    textAlign: "center"
  },
  buttonStyle: {
    margin: 10
  }
});

const mapStateToProps = (state: AppState) => ({
  result: state.customTextInputReducer.result
});

export default connect(mapStateToProps)(ResultPage);
