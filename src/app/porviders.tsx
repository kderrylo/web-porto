"use client";

import {NextUIProvider} from "@nextui-org/react";
import {CacheProvider} from "@chakra-ui/next-js";
import {ChakraProvider} from "@chakra-ui/react";

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}