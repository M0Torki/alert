import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
    state: () => ({
        alert:[],
        
    }),
    actions: {
        addAlert(message, type) {
            this.alert.push({ message, type }),
            setTimeout(() => {
                this.alert.shift()
            }, 3000)
        }
    }
})


