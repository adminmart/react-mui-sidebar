import { default as React, ReactNode, ElementType } from 'react';
interface MenuItemProps {
    component?: ElementType;
    children: ReactNode;
    [key: string]: any;
}
declare const Links: React.FC<MenuItemProps>;
export default Links;
