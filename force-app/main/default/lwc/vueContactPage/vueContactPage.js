
  import { Field, Form, ErrorMessage } from 'c/veeValidate';
  import { useStyles } from 'c/vueHelpers';
  import { schema } from './vueContactPage-schema.js';
  import styles from './vueContactPage.css';

  import { render } from './vueContactPage-template.js';

export default {
  render,

    name: "ContactPage",
    components: {
      ErrorMessage,
      Form,
      Field,
    },
    setup() {
      useStyles(styles);

      const onSubmit = (values) => { console.log(values); };
      const onInvalidSubmit = ({ values, errors, results }) => { console.log(values, errors, results); }

      const initialValues = { password: 123 };

      return { schema, onSubmit, onInvalidSubmit, initialValues };
    }
  };
