
  import { Field, Form, ErrorMessage } from 'c/veeValidate';
  import * as Yup from 'c/yupLib';

  const schema = Yup.object().shape({
    email: Yup.string().email().required().label('Email Address'),
    password: Yup.string().min(5).required().label('Your Password'),
  });

  import { render } from './vueContactPage-template.js';

export default {
  render,

    setup() {
      const onSubmit = (values) => { console.log(values); };
      const onInvalidSubmit = ({ values, errors, results }) => { console.log(values, errors, results); }

      const initialValues = { password: 123};

      return { schema, onSubmit, onInvalidSubmit, initialValues };
    },
    components: {
      ErrorMessage,
      Form,
      Field,
    }
  };
