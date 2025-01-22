import * as React from "react";
type SubmenuProps = {
    children: React.ReactNode;
    title?: string;
    icon?: React.ReactNode;
    borderRadius?: string;
    textFontSize?: string;
    disabled?: boolean;
};
declare const Submenu: ({ children, title, icon, borderRadius, textFontSize, disabled, }: SubmenuProps) => import("react/jsx-runtime").JSX.Element;
export { Submenu };
