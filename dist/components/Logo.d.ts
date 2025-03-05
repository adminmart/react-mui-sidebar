import * as React from "react";
type LogoProps = {
    children: React.ReactNode;
    img?: string;
    href?: string;
    component?: React.ElementType;
};
declare const Logo: ({ children, img, href, component, }: LogoProps) => import("react/jsx-runtime").JSX.Element;
export { Logo };
