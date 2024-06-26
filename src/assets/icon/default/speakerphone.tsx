import React from "react";

import { iconColor } from "@/assets/config/iconColor";

interface Props {
  color?: keyof typeof iconColor;
  size?: { width: number; height: number };
}

export const SpeakerphoneIcon: React.FC<Props> = ({
  color = "default",
  size,
}) => (
  <svg
    aria-hidden="true"
    fill={iconColor[color] || iconColor.primary}
    focusable="false"
    height={size?.height || 20}
    role="presentation"
    viewBox="0 0 20 20"
    width={size?.width || 20}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 3.00002C17.9999 2.82962 17.9563 2.66208 17.8733 2.51329C17.7902 2.36449 17.6706 2.23938 17.5256 2.14982C17.3806 2.06026 17.2152 2.00923 17.045 2.00156C16.8748 1.9939 16.7054 2.02985 16.553 2.10602L8.763 6.00002H5C4.20435 6.00002 3.44129 6.31609 2.87868 6.8787C2.31607 7.4413 2 8.20437 2 9.00002C2 9.79567 2.31607 10.5587 2.87868 11.1213C3.44129 11.6839 4.20435 12 5 12H5.28L7.051 17.316C7.11735 17.5152 7.24472 17.6885 7.41505 17.8113C7.58538 17.934 7.79004 18.0001 8 18H9C9.26522 18 9.51957 17.8947 9.70711 17.7071C9.89464 17.5196 10 17.2652 10 17V12.618L16.553 15.894C16.7054 15.9702 16.8748 16.0061 17.045 15.9985C17.2152 15.9908 17.3806 15.9398 17.5256 15.8502C17.6706 15.7607 17.7902 15.6355 17.8733 15.4867C17.9563 15.3379 17.9999 15.1704 18 15V3.00002Z"
    />
  </svg>
);
