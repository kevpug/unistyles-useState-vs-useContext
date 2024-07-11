import { View } from "react-native";
import React from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const AtomComponent = () => {
  const { styles } = useStyles(styleSheet);
  return <View style={styles.box} />;
};

export default AtomComponent;

const styleSheet = createStyleSheet((theme) => ({
  box: {
    borderColor: theme.colors.text,
    padding: 5,
    borderWidth: 2,
  },
}));
