import * as React from 'react';
type MenuProps = {
    children: React.ReactNode;
    subHeading?: string;
};
declare const Menu: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLDivElement>>;
export { Menu };
