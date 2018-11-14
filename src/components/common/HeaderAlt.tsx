// Import libraries for making a component
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import BackButton from "./BackButton";
import { connect } from "react-redux";
import { promptVisible } from "../../actions/promptActions";
import { Dispatch } from "redux";
import { History } from "history";

interface Props {
  headerText: string;
  dispatch: Dispatch<any>;
  history: History;
}

const HeaderAlt = ({ history, headerText, dispatch }: Props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <BackButton
        onPress={() => {
          history.goBack();
          dispatch(promptVisible(false, ""));
        }}
      />
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#F8F8F8",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default connect()(HeaderAlt);
