import * as React from "react";
type MenuItemProps = {
    children: React.ReactNode;
    icon?: React.ReactNode;
    link?: string;
    badge?: boolean;
    badgeColor?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
    badgeContent?: string;
    textFontSize?: string;
    borderRadius?: string;
    disabled?: boolean;
    badgeType?: "filled" | "outlined";
    target?: string;
};
declare const MenuItem: ({ children, icon, link, badge, badgeColor, badgeContent, textFontSize, borderRadius, disabled, badgeType, target, }: MenuItemProps) => import("react/jsx-runtime").JSX.Element;
export { MenuItem };
