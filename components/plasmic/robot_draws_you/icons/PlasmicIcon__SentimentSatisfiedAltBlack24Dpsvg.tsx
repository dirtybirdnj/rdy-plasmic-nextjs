// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SentimentSatisfiedAltBlack24DpsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function SentimentSatisfiedAltBlack24DpsvgIcon(
  props: SentimentSatisfiedAltBlack24DpsvgIconProps
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

      <path d={"M0 0h24v24H0V0z"} fill={"none"}></path>

      <circle cx={"15.5"} cy={"9.5"} r={"1.5"}></circle>

      <circle cx={"8.5"} cy={"9.5"} r={"1.5"}></circle>

      <path
        d={
          "M12 16c-1.48 0-2.75-.81-3.45-2H6.88a5.495 5.495 0 0010.24 0h-1.67c-.69 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        }
      ></path>
    </svg>
  );
}

export default SentimentSatisfiedAltBlack24DpsvgIcon;
/* prettier-ignore-end */
