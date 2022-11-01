import * as React from 'react';
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import { styled, alpha } from '@mui/material/styles'
import { ButtonBase } from '@mui/material';

const StyledButtonBase = styled(ButtonBase)(({theme}) => ({
    padding: theme.spacing(0, 1.3, 1, 0),
    textAlign: "start"
}))

const StyledPopover = styled(Popover)(({theme})=>({
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
    "& .MuiPopover-paper": {
        width: "150vh",
        height: "80vh",
        backgroundColor: alpha(theme.palette.secondary.dark, 0.9),

    }
    
}))

const MyPopover = ({children}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <StyledButtonBase aria-describedby={id} onClick={handleClick}>
                {children}
            </StyledButtonBase>
            <StyledPopover
                id={id}
                open={open}
                onClose={handleClose}
                anchorPosition={{left: "15%", top: "50%"}}
            >
                <Typography>The content of the Popover.</Typography>
            </StyledPopover>
        </>
    );
}

export default MyPopover