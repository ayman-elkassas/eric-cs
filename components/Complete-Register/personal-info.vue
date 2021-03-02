<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <vs-input placeholder="Username">
          <template #message-danger>
            Required
          </template>
        </vs-input>
      </vs-col>
    </vs-row>
    <br>
    <br>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <vs-input
          required autofocus
          label="Email address"
          placeholder="eric@eric.com">
          <template #message-success>
            Email Valid
          </template>
          <template #message-danger>
            Email Invalid
          </template>
        </vs-input>
      </vs-col>
    </vs-row>
    <br>
    <br>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <vs-input
          type="password"

          label="Password Account"
          placeholder="password">

          <template #message-success>
            Secure password
          </template>

          <template #message-danger>
            A special character-More than 6 digits-One lower case letter-An uppercase letter-A number
          </template>

        </vs-input>
      </vs-col>
    </vs-row>

  </div>
</template>

<script>
export default {
name: "personal-info"
}
</script>

<style scoped>

</style>
