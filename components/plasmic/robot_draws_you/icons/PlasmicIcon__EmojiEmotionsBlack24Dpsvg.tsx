// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EmojiEmotionsBlack24DpsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EmojiEmotionsBlack24DpsvgIcon(
  props: EmojiEmotionsBlack24DpsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"none"} d={"M0 0h24v24H0z"}></path>

      <circle cx={"15.5"} cy={"9.5"} r={"1.5"}></circle>

      <circle cx={"8.5"} cy={"9.5"} r={"1.5"}></circle>

      <path d={"M12 18c2.28 0 4.22-1.66 5-4H7c.78 2.34 2.72 4 5 4z"}></path>

      <path
        d={
          "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        }
      ></path>
    </svg>
  );
}

export default EmojiEmotionsBlack24DpsvgIcon;
/* prettier-ignore-end */
