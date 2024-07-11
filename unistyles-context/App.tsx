import "./src/unistyles";
import { useCallback, useState } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import UnistylesTest from "./src/components/UnistylesTest";
import { UnistylesProvider } from "react-native-unistyles";
import TimedRender from "./src/components/TimedRender";

export default function App() {
  const [doTest, setDoTest] = useState(false);
  const [themeChangeTime, setThemeChangeTime] = useState(0);
  const [theme, setTheme] = useState("light");
  const toggleTheme = useCallback(() => {
    const timeNow = Date.now();
    setTheme(theme === "light" ? "dark" : "light");

    requestAnimationFrame(() => {
      const endTime = Date.now();
      setThemeChangeTime(endTime - timeNow);
    });
  }, [theme]);
  return (
    <UnistylesProvider theme={theme as any}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Unistyles but using useContext instead of useState
        </Text>
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
    </UnistylesProvider>
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
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "lime",
  },
});
