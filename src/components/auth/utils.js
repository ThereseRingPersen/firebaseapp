export const formValidators = {
         email: {
           required: true,
           pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
         },
         fullName: { required: true, minLength: 10 },
         avatar: { required: true, validate: { isValidImage } },
         passWord: { required: true, minLength: 6 },
       };

const isValidImage = (value) => {
  if (!value) return true;
  if (typeof value !== 'string') return false;

  const validFormats = ['png', 'jpeg', 'jpg', 'svg'];
  const extenstion = value.split('.').pop();
  return validFormats.includes(extenstion);
};
