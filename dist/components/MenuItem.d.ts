import * as React from "react";
type MenuItemProps = {
    children: React.ReactNode;
    icon?: React.ReactNode;
    component?: React.ElementType;
    badge?: boolean;
    link?: string;
    badgeColor?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
    badgeContent?: string;
    textFontSize?: string;
    borderRadius?: string;
    disabled?: boolean;
    badgeType?: "filled" | "outlined";
    target?: string;
    isSelected?: boolean;
};
declare const MenuItem: ({ children, icon, component, badge, link, badgeColor, badgeContent, textFontSize, borderRadius, disabled, badgeType, target, isSelected, }: MenuItemProps) => import("react/jsx-runtime").JSX.Element;
export { MenuItem };
