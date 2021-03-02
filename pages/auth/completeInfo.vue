<template>
  <div>
    <form-wizard
      title="Complete Register Information"
      color="#195bff">
      <tab-content
        title="Personal details">
        <personal-info></personal-info>
      </tab-content>
      <tab-content
        title="Additional Info">
asdasd
      </tab-content>
      <tab-content title="Last step">
asdasd
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import PersonalInfo from "@/components/Complete-Register/personal-info";
export default {
  name: "completeInfo",
  components: {PersonalInfo},
}
</script>

<style scoped>

</style>
