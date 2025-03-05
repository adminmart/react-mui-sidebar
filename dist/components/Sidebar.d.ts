import * as React from "react";
type SidebarProps = {
    children: React.ReactNode;
    width?: string;
    collapsewidth?: string;
    textColor?: string;
    isCollapse?: boolean;
    themeColor?: string;
    themeSecondaryColor?: string;
    mode?: "light" | "dark";
    direction?: "ltr" | "rtl";
    userName?: string;
    designation?: string;
    showProfile?: boolean;
    userimg?: string;
    onLogout?: () => void;
};
export declare const SidebarContext: React.Context<{
    width: string;
    collapsewidth: string;
    textColor: string;
    isCollapse: boolean;
    themeColor: string;
}>;
declare const Sidebar: ({ children, width, collapsewidth, textColor, isCollapse, themeColor, themeSecondaryColor, mode, direction, userName, designation, showProfile, userimg, onLogout, }: SidebarProps) => import("react/jsx-runtime").JSX.Element;
export { Sidebar };
