<template>
  <Form class="slds-form-element contact-form" data-v-vuecontactpage
        @submit="onSubmit"
        @invalid-submit="onInvalidSubmit"
        :validation-schema="schema" 
        :initial-values="initialValues"
        v-slot="{ errors, meta: formMeta }"
  >
    <div class="slds-form-element" :class="{'slds-has-error': errors.email}" data-v-vuecontactpage>
      <label for="email" class="slds-form-element__label">Your Email</label>
      <div class="slds-form-element__control" data-v-vuecontactpage>
        <Field id="email" name="email" type="email" class="slds-input" />
      </div>
      <ErrorMessage name="email" class="slds-form-element__help" data-v-vuecontactpage />
    </div>

    <div class="slds-form-element" :class="{'slds-has-error': errors.password}" data-v-vuecontactpage>
      <label for="password" class="slds-form-element__label">Your Password</label>
      <div class="slds-form-element__control" data-v-vuecontactpage>
        <Field id="password" name="password" type="password" class="slds-input" data-v-vuecontactpage />
      </div>
      <ErrorMessage name="password" class="slds-form-element__help" data-v-vuecontactpage />
    </div>

    <div class="contact-form__submit-holder" data-v-vuecontactpage>
      <button :disabled="!formMeta.valid">Submit</button>
    </div>
  </Form>
</template>

<script>
  import { Field, Form, ErrorMessage } from 'c/veeValidate';
  import { useStyles } from 'c/vueHelpers';
  import { schema } from './vueContactPage-schema.js';
  import styles from './vueContactPage.css';

  export default {
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
</script>

<style lang="scss" scoped>
  .contact-form {
    border: 1px solid #dddbda;
    border-radius: 4px;
    padding: 10px;

    &__ {
      &submit-holder {
        padding: 20px 0 0; 
      }
    }
  }
</style>
