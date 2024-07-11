import "./src/unistyles";
import { useCallback, useState } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import UnistylesTest from "./src/components/UnistylesTest";
import { UnistylesRuntime } from "react-native-unistyles";
import TimedRender from "./src/components/TimedRender";

export default function App() {
  const [doTest, setDoTest] = useState(false);
  const [themeChangeTime, setThemeChangeTime] = useState(0);
  const toggleTheme = useCallback(() => {
    const timeNow = Date.now();
    UnistylesRuntime.setTheme(
      UnistylesRuntime.themeName === "light" ? "dark" : "light"
    );

    requestAnimationFrame(() => {
      const endTime = Date.now();
      setThemeChangeTime(endTime - timeNow);
    });
  }, [UnistylesRuntime.themeName]);
  return (
    <View style={styles.container}>
      <Button title="toggleTheme" onPress={() => toggleTheme()} />
      <Button
        title="do react-native-unistyles"
        onPress={() => setDoTest(!doTest)}
      />
      <Text style={styles.timeDarkMode}>
        Changing the theme took: {themeChangeTime} ms
      </Text>
      {doTest && <TimedRender key={"unistyles-normal"}></TimedRender>}
      {doTest && <UnistylesTest />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
  },
  timeDarkMode: {
    color: "brown",
  },
});
