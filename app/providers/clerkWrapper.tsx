"use client";
import React, { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { useTheme } from "@/app/contexts/useTheme";
import { dark, experimental__simple as light } from "@clerk/themes";

const ClerkWrapper = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: theme === "dark" ? dark : light,
      }}
    >
      {children}
    </ClerkProvider>
  );
};

export default ClerkWrapper;
