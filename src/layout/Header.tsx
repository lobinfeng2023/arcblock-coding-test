import { useLocaleContext } from '@arcblock/ux/lib/Locale/context';
import Check from '@mui/icons-material/Check';
import LanguageIcon from '@mui/icons-material/Language';
import { IconButton, Menu, MenuItem } from '@mui/material';
import Container from '@mui/material/Container';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useEffect, useState } from 'react';

import logoSrc from '../assets/logo-rect.svg';

const localeMenu = [
  {
    label: '简体中文',
    value: 'zh',
  },
  {
    label: 'English',
    value: 'en',
  },
];
const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [locale, setLocale] = useState('en');
  const { t, changeLocale } = useLocaleContext();
  useEffect(() => {
    changeLocale(locale);
  }, [locale]);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (type: string) => {
    setLocale(type);
    setAnchorEl(null);
  };
  return (
    <Container>
      <div className="header">
        <img src={logoSrc} alt="logo" className="header-logo" />
        <div className="header-main">{t('user.profile.title')}</div>
        <div className="header-right-menu">
          <IconButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <LanguageIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}>
            {localeMenu.map((item) => {
              return (
                <MenuItem key={item.value} onClick={() => handleClose(item.value)}>
                  <ListItemIcon style={{ minWidth: 24, opacity: locale === item.value ? 1 : 0 }}>
                    <Check style={{ fontSize: 14 }} />
                  </ListItemIcon>
                  {item.label}
                </MenuItem>
              );
            })}
          </Menu>
        </div>
      </div>
    </Container>
  );
};
export default Header;
