import React from 'react';
import { Box, Avatar, Typography, IconButton, Tooltip, useTheme } from '@mui/material';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

interface ProfileProps {
    userName?: string;
    designation?: string;
    userimg?: string;
    isCollapse?: boolean;
    onLogout?: () => void;
}

const Profile = React.forwardRef<HTMLDivElement, ProfileProps>(({
    userName = "",
    designation = "",
    userimg = "",
    isCollapse = false,
    onLogout
}, ref) => {
    const theme = useTheme();
    return (
        <Box>
            {isCollapse ? '' :
                <Box
                    display={'flex'}
                    alignItems="center"
                    gap={2}
                    sx={{ m: 3, p: 2, borderRadius: '8px', bgcolor: theme.palette.secondary.main + 20 }}
                >
                    <Avatar alt="Remy Sharp" src={userimg} />

                    <Box>
                        <Typography variant="h6">{userName}</Typography>
                        <Typography variant="caption" color="textSecondary">
                            {designation}
                        </Typography>
                    </Box>
                    <Box sx={{ ml: 'auto' }} onClick={onLogout}>
                        <Tooltip title="Logout" placement="top">
                            {/* <Link to="/">  Wrap the IconButton with Link */}
                                <IconButton
                                    color="primary"
                                    aria-label="logout"
                                    size="small"
                                >
                                    <AlbumOutlinedIcon />
                                </IconButton>
                            {/* </Link> */}
                        </Tooltip>
                    </Box>
                </Box>
            }
        </Box>
    );
});

export {Profile};