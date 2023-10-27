import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  indigo,
  indigoDark,
} from "@radix-ui/colors"

export type Colors = typeof colors.light & typeof colors.dark

export const colors = {
  light: {
    ...indigo,
    ...gray,
    ...blue,
    ...red,
    ...green,
  },
  dark: {
    ...indigoDark,
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    
    // 在夜间模式下调整颜色
    primary: "#FFD700", // 修改夜间模式下 primary 颜色
    secondary: "#FFA500", // 修改夜间模式下 secondary 颜色
    // 添加其他颜色定义
  },
}
