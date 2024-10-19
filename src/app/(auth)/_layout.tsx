import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { ScrollView } from "@/components/ui/scroll-view";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Image } from "@/components/ui/image";

const AuthLayout = () => {
  return (
    <SafeAreaView className="w-full h-full">
      <ScrollView
        className="w-full h-full"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <HStack className="w-full h-full bg-background-0 flex-grow justify-center">
          <VStack
            className="relative hidden md:flex h-full w-full flex-1  items-center  justify-center"
            space="md"
          >
            <Image
              source={require("@/assets/images/radialGradient.png")}
              className="object-cover h-full w-full"
              alt="Radial Gradient"
            />
          </VStack>
          <VStack className="md:items-center md:justify-center flex-1 w-full  p-9 md:gap-10 gap-16 md:m-auto md:w-1/2 h-full"></VStack>
        </HStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthLayout;
