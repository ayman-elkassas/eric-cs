<template>
  <div>
      <vs-navbar
        style="z-index: 9999;"
        padding-scroll square
        fixed shadow-scroll center-collapsed v-model="active"
      >
        <template #left>
          <img src="/logo2.png" alt="">
        </template>
        <template>
          <vs-navbar-item
            to="/home/profile"
            :active="active === 'guide'" id="guide">
            <vs-avatar badge badge-color="success" history primary>
              <img src="~/assets/home/app-assets/images/avatars/2.png" alt="">
              <template #badge>
                AE
              </template>
            </vs-avatar>
          </vs-navbar-item>
          <vs-navbar-item
            to="/home/timeline"
            :active="active === 'home'" id="home">
            <i class='bx bx-home'></i>
            Home
          </vs-navbar-item>
          <vs-navbar-item :active="active === 'components'" id="components">
            <i class='bx bx-album'></i>
            Components
          </vs-navbar-item>
          <vs-navbar-item :active="active === 'license'" id="license">
            <i class='bx bx-book'></i>
            license
          </vs-navbar-item>
          <vs-navbar-item :active="active === 'docs'" id="docs">
            <i class='bx bx-alarm'></i>
            Documents
          </vs-navbar-item>
          <vs-navbar-item :active="active === 'components'" id="components">
            <i class='bx bx-album'></i>
            Components
          </vs-navbar-item>
          <vs-navbar-item :active="active === 'license'" id="license">
            <i class='bx bx-book'></i>
            license
          </vs-navbar-item>
          <vs-navbar-item :active="active === 'license'" id="license">
            <i class='bx bx-book'></i>
            license
          </vs-navbar-item>
          <vs-navbar-item :active="active === 'license'" id="license">
            <i class='bx bx-book'></i>
            license
          </vs-navbar-item>
        </template>
        <template #right>
          <vs-button flat >Login</vs-button>
          <vs-button primary circle>Get Started</vs-button>
        </template>
      </vs-navbar>

    </div>
</template>

<script>
export default {
  name: "header-home",
  data:() => ({
    active: 'home'
  })
}
</script>

<style scoped>

.child{
  //width: 100%;
  //height:100vh;
}

</style>
