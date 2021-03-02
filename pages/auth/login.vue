<template>

  <div class="auth-content">
    <img src="assets/images/auth/auth-logo-dark.html" alt="" class="img-fluid mb-4 d-block d-xl-none d-lg-none">
    <h3 class="mb-4 f-w-400">Signin</h3>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <fa icon="envelope" />
        </span>
      </div>
      <input type="email" class="form-control" placeholder="Email address">
    </div>
    <div class="input-group mb-4">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <fa icon="lock" />
        </span>
      </div>
      <input type="password" class="form-control" placeholder="Password">
    </div>
    <div class="form-group text-left mt-2">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input input-primary" id="customCheckdefh2" checked="">
        <label class="custom-control-label" for="customCheckdefh2">Save credentials</label>
      </div>
    </div>
    <button class="btn btn-block btn-primary mb-0">Signin</button>
    <div class="text-center">
      <div class="saprator my-4"><span>OR</span></div>
      <button class="btn text-white bg-facebook mb-2 mr-2  wid-40 px-0 hei-40 rounded-circle"></button>
      <button class="btn text-white bg-googleplus mb-2 mr-2 wid-40 px-0 hei-40 rounded-circle"><i class="fab fa-google-plus-g"></i></button>
      <button class="btn text-white bg-twitter mb-2  wid-40 px-0 hei-40 rounded-circle"><i class="fab fa-twitter"></i></button>
      <p class="mb-2 mt-4 text-muted">Forgot password? <a href="auth-reset-password-img-side.html" class="f-w-400">Reset</a></p>
      <p class="mt-4">Don’t have an account? <nuxt-link to="/auth/signup" class="f-w-400">Signup</nuxt-link></p>
      <p class="mb-0 text-muted">Back to home? <nuxt-link to="/" class="f-w-400">Home</nuxt-link></p>
    </div>
  </div>

</template>

<script>
export default {
  name: "login",
  layout:"AuthLayout/auth"
}
</script>

<style scoped>

@import '~assets/nextro/assets/css/style.css';

</style>
