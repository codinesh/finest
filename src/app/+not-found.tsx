import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";

export default function NotFoundScreen() {
  return (
    <Box>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Box style={styles.container}>
        <Box>This screen doesn't exist.</Box>
        <Link href="/" style={styles.link}></Link>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
