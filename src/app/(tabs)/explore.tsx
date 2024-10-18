import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, Text } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { verifyInstallation } from "nativewind";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <Text className=" text-primary-100 bg-red-600 border-2 active:text-white  border-red-500 p-5">
        Explore
      </Text>
      <Text className="text-primary-900 bg-green-600">
        This app includes example code to help you get started.
      </Text>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
