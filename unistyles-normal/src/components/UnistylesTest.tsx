import { View, StyleSheet } from "react-native";
import AtomComponent from "./AtomComponent";

const UnistylesTest = () => {
  return <Demo />;
};

const Demo = () => {
  return (
    <View style={styles.container}>
      {new Array(1000).fill(0).map((_, i) => (
        <AtomComponent key={i} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
});

export default UnistylesTest;
