<template >
  <div>
    <div class="gap-y-2">
      <AlertComponent></AlertComponent>
    </div>
    <div class="flex justify-center items-center w-fit h-fit flex-col gap-2">
      <button class="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md" @click="alertStore.addAlert('عملیات با موفقیت انجام شد', 'success')">Add Alert</button>
      <button class="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-md" @click="alertStore.addAlert('خطایی رخ داده است', 'error')">Add Alert</button>
      <button class="bg-yellow-500 cursor-pointer text-white px-4 py-2 rounded-md" @click="alertStore.addAlert('اطللاعات صحیح نیست', 'warning')">Add Alert</button>
      <button class="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-md" @click="alertStore.addAlert('اطلاعات جدید ثبت شد', 'info')">Add Alert</button>
    </div>
  </div>
</template>
<script setup>
import AlertComponent from './components/AlertComponent.vue'
import { useAlertStore } from './store/alertStore'

const alertStore = useAlertStore()

  
</script>
<style lang="">
  
</style>