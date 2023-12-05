import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  }
});

export const btn = (name: any, activeTab: any): ViewStyle => ({
  paddingVertical: SIZES.medium,
  paddingHorizontal: SIZES.xLarge,
  backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
  borderRadius: SIZES.medium,
  marginLeft: 2,
  ...SHADOWS.medium,
  shadowColor: COLORS.white,
})

export const btnText = (name: any, activeTab: any) => StyleSheet.create({
  fontFamily: 'DMMedium' as any,
  fontSize: SIZES.small as any,
  color: name === activeTab ? "#C3BFCC" as any : "#AAA9B8" as any,
})

export default styles;
