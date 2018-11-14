import React, { Component } from "react";
import { Modal, View, StyleSheet, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { AppState } from "src/store/appState";

interface State {
  visible: boolean;
}

class CustomModal extends Component<State> {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.visible}
          onRequestClose={() => {}}
        >
          <View style={styles.spinnerLayer}>
            <ActivityIndicator size={"large"} />
          </View>
        </Modal>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {},
  spinnerLayer: {
    flex: 1,
    backgroundColor: "rgba(169,169,169,0.54)",
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = (state: AppState) => ({
  visible: state.modalReducer.visible
});

export default connect(mapStateToProps)(CustomModal);
