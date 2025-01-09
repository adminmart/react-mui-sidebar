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
};
export declare const SidebarContext: React.Context<{
    width: string;
    collapsewidth: string;
    textColor: string;
    isCollapse: boolean;
    themeColor: string;
}>;
declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLDivElement>>;
export { Sidebar };
