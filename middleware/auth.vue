<template>
  <div class="auth-wrapper align-items-stretch aut-bg-img">
    <div class="flex-grow-1">
      <div class="h-100 d-md-flex align-items-end auth-side-img">
        <div class="col-sm-10 auth-content w-auto">
          <img src="assets/images/logo.svg" alt="" class="img-fluid">
          <h1 class="text-white my-4">Welcome Back!</h1>
          <h4 class="text-white font-weight-normal">Signin to your account and get explore the Nextro Dashboard Template.<br />Do not forget to play with live customizer</h4>
        </div>
      </div>
      <div class="auth-side-form">
        <nuxt-child></nuxt-child>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "auth",
  layout:"AuthLayout/auth",
  data(){
    return{
      routeName:this.$route.path,
    }
  },
  //todo:Middleware for redirect to base child
  created(){
    this.recall()
  },
  methods:{
    recall(){
      if(this.routeName==="/auth" || this.routeName==="/auth/"){
        this.$router.push('/auth/login');
      }
    }
  }
}
</script>

<style scoped>

@import '~assets/nextro/assets/css/style.css';

</style>
