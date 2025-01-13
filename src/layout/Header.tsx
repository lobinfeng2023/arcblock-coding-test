import logoSrc from '../assets/logo-rect.svg';
import { useState } from 'react'
import { Menu, MenuItem, IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import ListItemIcon from '@mui/material/ListItemIcon';
import Check from '@mui/icons-material/Check';
import Container from '@mui/material/Container';
const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <Container>
            <div className="header">
                <img src={logoSrc} alt="logo" className="header-logo" />
                <div className='header-main'>
                    User Profile
                </div>
                <div className='header-right-menu'>
                    <IconButton
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <LanguageIcon />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon style={{minWidth: 24}}>
                                <Check style={{fontSize: 14}}/>
                            </ListItemIcon>
                            简体中文
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon style={{minWidth: 24}}>
                                <Check style={{fontSize: 14}}/>
                            </ListItemIcon>
                            English
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </Container>

    )
}
export default Header;