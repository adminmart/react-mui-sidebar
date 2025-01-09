import * as React from "react";
type SubmenuProps = {
    children: React.ReactNode;
    title?: string;
    icon?: React.ReactNode;
    borderRadius?: string;
    textFontSize?: string;
    disabled?: boolean;
};
declare const Submenu: React.ForwardRefExoticComponent<SubmenuProps & React.RefAttributes<HTMLDivElement>>;
export { Submenu };
