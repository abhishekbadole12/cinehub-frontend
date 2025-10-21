// context/useDimensionsContext.tsx
import React, { createContext, useContext } from "react";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

interface DimensionsContextProps {
  width: number;
  height: number;
  cardWidth: number;
  cardHeight: number;
  isSmallDevice: boolean;
}

const DimensionsContext = createContext<DimensionsContextProps | null>(null);

export const DimensionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const cardWidth = width * 0.9;
  const cardHeight = cardWidth * 0.56;

  const value: DimensionsContextProps = {
    width,
    height,
    cardWidth,
    cardHeight,
    isSmallDevice: width < 380,
  };

  return (
    <DimensionsContext.Provider value={value}>
      {children}
    </DimensionsContext.Provider>
  );
};

export const useDimensionsContext = () => {
  const ctx = useContext(DimensionsContext);
  if (!ctx) {
    throw new Error(
      "useDimensionsContext must be used inside DimensionsProvider"
    );
  }
  return ctx;
};
