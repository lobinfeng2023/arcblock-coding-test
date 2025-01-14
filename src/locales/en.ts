import { flatten } from 'flat';

export default flatten({
  user: {
    profile: {
      title: 'User Profile',
      name: 'Name',
      email: 'Email',
      mobile: 'Phone',
    },
  },
  validate: {
    message: {
      required: 'This field is required',
      email: 'Please enter a valid email address',
      phone: 'Please enter a valid phone number',
    },
  },
  button: {
    submit: 'Submit',
    cancel: 'Cancel',
    edit: 'Edit',
  },
  message: {
    success: 'Update success',
  },
});
