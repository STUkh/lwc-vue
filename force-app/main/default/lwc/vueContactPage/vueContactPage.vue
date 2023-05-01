<template>
  <Form @submit="onSubmit" name="abc"
        @invalid-submit="onInvalidSubmit"
        :validation-schema="schema" class="slds-form-element contact-form"
        :initial-values="initialValues"
        v-slot="{ errors, meta: formMeta }"
  >
    <div class="slds-form-element" :class="{'slds-has-error': errors.email}">
      <label for="email" class="slds-form-element__label">Your Email</label>
      <div class="slds-form-element__control">
        <Field id="email" name="email" type="email" class="slds-input" />
      </div>
      <ErrorMessage name="email" class="slds-form-element__help" />
    </div>

    <div class="slds-form-element" :class="{'slds-has-error': errors.password}">
      <label for="password" class="slds-form-element__label">Your Password</label>
      <div class="slds-form-element__control">
        <Field id="password" name="password" type="password" class="slds-input" />
      </div>
      <ErrorMessage name="password" class="slds-form-element__help" />
    </div>

    <div class="contact-form__submit-holder">
      <button :disabled="!formMeta.valid">Submit</button>
    </div>
  </Form>
</template>

<script>
  import { Field, Form, ErrorMessage } from 'c/veeValidate';
  import * as Yup from 'c/yupLib';

  const schema = Yup.object().shape({
    email: Yup.string().email().required().label('Email Address'),
    password: Yup.string().min(5).required().label('Your Password'),
  });

  export default {
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
</script>
