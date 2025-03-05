interface ProfileProps {
    userName?: string;
    designation?: string;
    userimg?: string;
    isCollapse?: boolean;
    onLogout?: () => void;
}
declare const Profile: ({ userName, designation, userimg, isCollapse, onLogout, }: ProfileProps) => import("react/jsx-runtime").JSX.Element;
export { Profile };
