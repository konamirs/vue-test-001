import { defineStore } from "pinia";

export const AuthenticalStore = defineStore('authentical', {
    state:() => {
      return{
        user:null,
        token:localStorage.getItem("token") || ''
      }
    },
    actions:{
      setUser(user: null){
        this.user = user
      },
      setToken(token: string){
        localStorage.setItem("token", token)
        this.token = token
      },
      logoutButton(){
        localStorage.removeItem("token")
        this.token = ''
      }
    }
})