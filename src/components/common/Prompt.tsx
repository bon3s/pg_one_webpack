import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
import { promptVisible } from "../../actions/promptActions";
import { Dispatch } from "redux";
import { AppState } from "src/store/appState";

interface Props {
  visible: boolean;
  dispatch: Dispatch<any>;
  msg: string;
}

class Prompt extends Component<Props> {
  render() {
    if (this.props.visible) {
      return (
        <View style={styles.viewStyleFail}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              this.props.dispatch(promptVisible(false, ""));
            }}
          >
            <Icon name="close" size={15} color="#aaaaaa" />
          </TouchableOpacity>
          <Text style={styles.textStyleFail}>{String(this.props.msg)}</Text>
        </View>
      );
    }
    return <View />;
  }
}

const styles = StyleSheet.create({
  viewStyleFail: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ff0000",
    borderRadius: 5
  },
  textStyleFail: {
    color: "#ff0000",
    fontSize: 14,
    textAlign: "center"
  },
  closeButton: {
    position: "absolute",
    top: 5,
    right: 5
  }
});

const mapStateToProps = (state: AppState) => ({
  visible: state.promptReducer.visible,
  msg: state.promptReducer.msg
});

export default connect(mapStateToProps)(Prompt);
