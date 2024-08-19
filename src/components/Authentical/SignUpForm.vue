<template>
  <div class="container">
    <form class="form">
      <div class="form-title"><span>Sign up to your</span></div>
      <div class="title-2"><span>PAGE</span></div>
      <div class="input-container">
        <input placeholder="Email" type="email" class="input-mail" />
        <span> </span>
      </div>

      <section class="bg-stars">
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
      </section>

      <div class="input-container">
        <input placeholder="Password" type="password" class="input-pwd" />
      </div>
      <div class="input-container">
        <input placeholder="Comfirmed Password" type="password" class="input-pwd" />
      </div>
      <button class="submit" type="submit">
        <span class="sign-text">Sign up</span>
      </button>

      <p class="signup-link">
        Already have a account?
        <router-link to="/signin" class="up">Sign in!</router-link>
      </p>
    </form>
  </div>
</template>

<style></style>
