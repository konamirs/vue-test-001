<template>
  <div class="container">
    <Form class="form" :validation-schema="validationSchema" :initial-values="initialValues" @submit="onSubmitHandler">
      <div class="form-title"><span>Sign up to your</span></div>
      <div class="title-2"><span>PAGE</span></div>
      <div class="input-container">
        <Field name="email" placeholder="Email" type="text" class="input-mail" />
        <p class="text-red-500 text-xs">
          <ErrorMessage name="email"  />
        </p>
        <span> </span>
      </div>

      <section class="bg-stars">
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
      </section>

      <div class="input-container">
        <Field name="name" placeholder="Name" type="text" class="input-pwd" />
        <p class="text-red-500 text-xs">
          <ErrorMessage name="name"  />
        </p>
      </div>
      <div class="input-container">
        <Field name="password" placeholder="Password" type="password" class="input-pwd" />
        <p class="text-red-500 text-xs">
          <ErrorMessage name="password"  />
        </p>
      </div>
      <button class="submit" type="submit">
        <span class="sign-text">Sign up</span>
      </button>

      <p class="signup-link">
        Already have a account?
        <router-link to="/signin" class="up">Sign in!</router-link>
      </p>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage, type GenericObject } from 'vee-validate';
import * as yup from 'yup'

const validationSchema = yup.object({
  email: yup.string().required('Email is required').email('Please enter a valid Email'),
  name: yup.string().required('Name is required'),

  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password need to be more than 5 characters')
})

const initialValues = {
  email: '',
  name: '',
  password: ''
}

const onSubmitHandler = (e:GenericObject) => {
  alert(JSON.stringify(e))
}
</script>
