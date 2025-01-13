import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import { List, ListItem, ListItemText, ListItemIcon, Button, FormControl, InputLabel, OutlinedInput} from '@mui/material';
import AvatarSrc from '../../assets/BiazfanxmamNRoxxVxka.png';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import './profile.less'
import { useState } from 'react';
const UserProfile = () => {
    const [edit, setEdit] = useState(false);
    const onEditHandler = () => {
        setEdit(!edit);
    }
    return (
        <Container>
            <div className='user'>
                <div className="user-profile">
                    <div className='user-profile-avatar'>
                        <Avatar 
                            src={AvatarSrc} 
                            sx={{
                                width: 100,
                                height: 100,
                            }} 
                        />
                    </div>
                    {
                        edit ? <div className='user-profile-content form'>
                            <FormControl>
                                <InputLabel htmlFor="component-outlined">Name</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    defaultValue="Composed TextField"
                                    label="Name"
                                    fullWidth
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="component-outlined">Email</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    defaultValue="Composed TextField"
                                    label="Name"
                                    fullWidth
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="component-outlined">Phone</InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    defaultValue="Composed TextField"
                                    label="Name"
                                    fullWidth
                                />
                            </FormControl>
                        </div> :
                        <div className='user-profile-content'>
                            <List sx={{ width: '100%', minWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <ListItemIcon>
                                        <Person4OutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText id="switch-list-label-wifi" primary="Name" />
                                    <p className='user-profile-content-text'>lobinfeng</p>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <MailOutlineIcon />
                                    </ListItemIcon>
                                    <ListItemText id="switch-list-label-wifi" primary="Email" />
                                    <p className='user-profile-content-text'>lobinfeng@foxmail.com</p>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <PhoneAndroidOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText id="switch-list-label-wifi" primary="Phone" />
                                    <p className='user-profile-content-text'>17602886574</p>
                                </ListItem>
                            </List>
                        </div>
                    }
                    <div className='user-profile-footer'>
                        {
                            edit ? <div className='user-profile-footer-btn'>
                                <Button variant="outlined" onClick={onEditHandler}>Cancel</Button>
                                <Button variant="contained" onClick={onEditHandler} style={{flex: 1}}>Comfirm</Button>
                            </div> : <Button variant="outlined" style={{width: '100%'}} onClick={onEditHandler}>Edit</Button>
                        }
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default UserProfile;