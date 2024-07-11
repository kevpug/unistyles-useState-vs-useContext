/* picked from Tamagui Sandbox\
 https://github.com/tamagui/tamagui/blob/a4cc57455c71287cc0ef995c4f55e52452504f79/apps/kitchen-sink/src/Sandbox.tsx#L82
 */

import { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
function TimedRender(props) {
  const [start] = useState(Date.now());
  const [end, setEnd] = useState(0);

  useLayoutEffect(() => {
    setEnd(Date.now());
  }, []);

  return (
    <View style={{ backgroundColor: "pink", flexDirection: "column" }}>
      {!!end && (
        <Text style={styles.text}>Initial rendering took {end - start}ms</Text>
      )}
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "green",
    marginTop: 12,
    fontSize: 18,
    backgroundColor: "pink",
  },
});

export default TimedRender;
