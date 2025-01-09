import { default as React } from 'react';
interface ProfileProps {
    userName?: string;
    designation?: string;
    userimg?: string;
    isCollapse?: boolean;
}
declare const Profile: React.ForwardRefExoticComponent<ProfileProps & React.RefAttributes<HTMLDivElement>>;
export { Profile };
