<template dir="rtl">
    <div class="fixed top-0 right-0 m-4 flex flex-col gap-y-2">
        <TransitionGroup name="slide" tag="div" class="flex flex-col gap-y-2">
            <div v-for="alert in alertStore.alert" :key="alert.id" class="w-72 h-16  flex items-center justify-center rounded-lg" :class="classes[alert.type]">
            {{ alert.message }}
            </div>
        </TransitionGroup>
    </div>
</template>
<script setup>
import { useAlertStore } from '../store/alertStore'

const classes = {
    success: 'bg-blue-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-white',
    info: 'bg-lime-500 text-white'
}

const alertStore = useAlertStore()
</script>
<style scoped>

</style>