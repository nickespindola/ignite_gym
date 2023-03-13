import { Heading, HStack, Text, VStack } from "native-base";
import React from "react";

export function HomeHeader() {
  return (
    <HStack>
      <VStack>
        <Text color="gray.100">Olá,</Text>
        <Heading color="gray.100">Nicolas</Heading>
      </VStack>
    </HStack>
  )
}