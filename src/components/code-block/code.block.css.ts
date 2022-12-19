import { style } from "@vanilla-extract/css";
import { vars } from "~/theme/theme.css";

export const block = style({
  backgroundColor: vars.color.primary.main,
  fontFamily: vars.font.body,
  color: 'white',
  padding: 10
});