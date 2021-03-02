<template>
  <div class=" auth-content">
    <img src="assets/images/auth/auth-logo-dark.html" alt="" class="img-fluid mb-4 d-block d-xl-none d-lg-none">
    <h4 class="mb-3 f-w-400">Sign up</h4>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text"><i class="bx bxs-user"></i></span>
      </div>
      <input type="text" class="form-control" placeholder="Username">
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text"><i class="bx bx-mail-send"></i></span>
      </div>
      <input type="email" class="form-control" placeholder="Email address">
    </div>
    <div class="input-group mb-4">
      <div class="input-group-prepend">
        <span class="input-group-text"><i class="bx bx-lock"></i></span>
      </div>
      <input type="password" class="form-control" placeholder="Password">
    </div>
    <div class="form-group text-left mt-2">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input input-primary" id="customCheckdefh2" checked="">
        <label class="custom-control-label" for="customCheckdefh2">Send me the <a href="#!"> Newsletter</a> weekly.</label>
      </div>
    </div>
    <button class="btn btn-primary btn-block mb-4" @click="openLoading()">Sign up</button>
    <div class="text-center">
      <div class="saprator my-4"><span>OR</span></div>
      <button class="btn text-white bg-facebook mb-2 mr-2  wid-40 px-0 hei-40 rounded-circle"><i class="bx bxl-facebook"></i></button>
      <button class="btn text-white bg-googleplus mb-2 mr-2 wid-40 px-0 hei-40 rounded-circle"><i class="bx bxl-google-plus"></i></button>
      <button class="btn text-white bg-twitter mb-2  wid-40 px-0 hei-40 rounded-circle"><i class="bx bxl-twitter"></i></button>
      <p class="mt-4">Already have an account? <nuxt-link to="/auth/login" class="f-w-400">Signin</nuxt-link></p>
      <p class="mb-0 text-muted">Back to home? <nuxt-link to="/" class="f-w-400">Home</nuxt-link></p>
    </div>

    <div >
      <vs-dialog prevent-close blur v-model="active">

        <complete-info></complete-info>

      </vs-dialog>
    </div>

  </div>
</template>

<script>
import CompleteInfo from "@/pages/auth/completeInfo";
export default {
  name: "signup",
  components: {CompleteInfo},
  layout:"AuthLayout/auth",
  data(){
    return{
      active: false,
    }
  },
  methods:{
    openLoading() {
      this.active=true;

      // this.openNotification('top-left', 'danger', `<i class='bx bxs-bug' ></i>`
      //     ,'Make Sure From Credentials','Username or password not matched with account credentials, make sure and try again...');
    },
    openNotification(position = null, border,icon,title,text) {
      const noti = this.$vs.notification({
        border,
        icon,
        progress: 'auto',
        position,
        title:title ,
        text:text
      })
    },
  }
}
</script>

<style scoped>

@import '~assets/nextro/assets/css/style.css';

</style>
