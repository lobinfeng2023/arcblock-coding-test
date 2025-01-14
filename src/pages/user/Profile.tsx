import { useLocaleContext } from '@arcblock/ux/lib/Locale/context';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import { Alert, Button, List, ListItem, ListItemIcon, ListItemText, Snackbar, Typography } from '@mui/material';
import { Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';

import { getUserProfile, updateUserProfile } from '../../api/user';
import AvatarSrc from '../../assets/BiazfanxmamNRoxxVxka.png';
import { isMobilePhone } from '../../utils';
import './profile.less';

interface IUserProfile {
  name: string;
  email: string;
  phone: string;
}

const UserProfile = () => {
  const [edit, setEdit] = useState(false);
  const [submiting, setSubmitting] = useState(false);
  const [successTipsShow, setSuccessTipsShow] = useState(false);
  const [userProfile, setUserProfile] = useState<IUserProfile>({
    name: '',
    email: '',
    phone: '',
  });
  const formContext = useForm<IUserProfile>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });
  const { t } = useLocaleContext();
  useEffect(() => {
    getUser();
  }, []);
  const { formState } = formContext;
  const onEditHandler = () => {
    formContext.setValue('name', userProfile.name);
    formContext.setValue('email', userProfile.email);
    formContext.setValue('phone', userProfile.phone);
    formContext.trigger('name');
    setEdit(!edit);
  };
  const onCancel = () => {
    setEdit(false);
  };
  const onConfirm = async (data: IUserProfile) => {
    setSubmitting(true);
    try {
      await updateUser(data);
      setSuccessTipsShow(true);
      setEdit(false);
      getUser();
    } catch (e) {
      console.log(e);
    } finally {
      setSubmitting(false);
    }
  };
  const getUser = async () => {
    const { data } = await getUserProfile();
    setUserProfile(data);
  };
  const updateUser = async (data: any) => {
    await updateUserProfile(data);
  };
  return (
    <Container>
      <div className="user">
        <div className="user-profile">
          <div className="user-profile-avatar">
            <Avatar
              src={AvatarSrc}
              sx={{
                width: 100,
                height: 100,
              }}
            />
          </div>

          {edit ? (
            <>
              <FormContainer onSuccess={onConfirm} formContext={formContext}>
                <div className="user-profile-content form">
                  <Stack direction="column" spacing={1}>
                    <TextFieldElement
                      name="name"
                      label={t('user.profile.name')}
                      required
                      placeholder={t('user.profile.name')}
                    />
                    <TextFieldElement
                      name="email"
                      label={t('user.profile.email')}
                      required
                      type={'email'}
                      placeholder={t('user.profile.email')}
                    />
                    <TextFieldElement
                      name="phone"
                      label={t('user.profile.mobile')}
                      placeholder={t('user.profile.mobile')}
                      required
                      rules={{
                        validate: (value) => {
                          return isMobilePhone(value) || t('user.validate.message.phone');
                        },
                      }}
                    />
                  </Stack>
                </div>
                <div className="user-profile-footer">
                  <div className="user-profile-footer-btn">
                    <Button variant="outlined" onClick={onCancel}>
                      {t('button.cancel')}
                    </Button>
                    <LoadingButton
                      variant="contained"
                      type={'submit'}
                      style={{ flex: 1 }}
                      disabled={!formState.isValid}
                      loading={submiting}>
                      {t('button.submit')}
                    </LoadingButton>
                  </div>
                </div>
              </FormContainer>
            </>
          ) : (
            <div className="user-profile-content">
              <List sx={{ width: '100%', minWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemIcon>
                    <Person4OutlinedIcon />
                  </ListItemIcon>
                  <ListItemText id="switch-list-label-wifi" primary={t('user.profile.name')} />
                  <p className="user-profile-content-text">
                    <Typography style={{ width: '160px' }} noWrap={true}>
                      {userProfile.name}
                    </Typography>
                  </p>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <MailOutlineIcon />
                  </ListItemIcon>
                  <ListItemText id="switch-list-label-wifi" primary={t('user.profile.email')} />
                  <p className="user-profile-content-text">{userProfile.email}</p>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneAndroidOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText id="switch-list-label-wifi" primary={t('user.profile.mobile')} />
                  <p className="user-profile-content-text">{userProfile.phone}</p>
                </ListItem>
              </List>
            </div>
          )}
          <div className="user-profile-footer">
            {!edit && (
              <Button variant="outlined" style={{ width: '100%' }} onClick={onEditHandler}>
                {t('button.edit')}
              </Button>
            )}
          </div>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={successTipsShow}
        autoHideDuration={2000}
        onClose={() => {
          setSuccessTipsShow(false);
        }}>
        <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
          {t('message.success')}
        </Alert>
      </Snackbar>
    </Container>
  );
};
export default UserProfile;
