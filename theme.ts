// 1. Import the extendTheme function

const customTheme = () => {
  // 2. Extend the theme to include custom colors, fonts, etc
  const colors = {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  };
  return { colors };
};

export default customTheme;
