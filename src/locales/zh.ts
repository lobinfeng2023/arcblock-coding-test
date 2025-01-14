import { flatten } from 'flat';

export default flatten({
  user: {
    profile: {
      title: '个人信息',
      name: '姓名',
      email: '邮箱',
      mobile: '电话',
    },
  },
  validate: {
    message: {
      required: '这个字段是必填的',
      email: '请输入一个有效的邮箱地址',
      phone: '请输入一个有效的电话号码',
    },
  },
  button: {
    submit: '提交',
    cancel: '取消',
    edit: '编辑',
  },
});
