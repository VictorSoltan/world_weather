<template>
  <div class="modal_background">
    <div class="modal_window">
      <h2>Choose a city</h2>
      <span>To find city start typing and pick one from suggestions</span>
      <div class="input_n_warning">
        <input placeholder="Search city" :class='{error : validationError }' v-model="city" ref="input_city"  v-on:keyup.enter="addCity"/>
        <span v-if="validationError">Choose a city</span>
        <span v-if="modalWarning">Wrong city name or too many attempts</span>
      </div>
      <footer>
        <div>
          <button @click="city=''">CLEAR</button>
        </div>
        <div>
          <button @click="closeModal">CANCEL</button>
          <button @click="addCity">ADD</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>

import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  props: ['closeModal', 'modalWarning'],
  data(){
    return{
      v$: useValidate(),
      city: '',
      validationError: false,
    }
  },
  validations: {
      city: { required }
  },
  mounted(){
    this.$refs.input_city.focus();
  },
  methods: {
    addCity() {
      this.v$.$validate()
      if(this.v$.$error) {
        this.validationError = true
      }else{
        this.validationError = false
        this.emitToParent()
      }
    },
    emitToParent () {
      this.$emit('childToParent', this.city)
      this.city = ''
    }    
  }
}
</script>

<style lang="scss" scoped>
.modal_background{
    position: absolute;
    display: flex; 
    justify-content: center;
    align-items: center;
    z-index: 1; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; 
    background-color: rgba(0,0,0,0.4);
    .modal_window{
      display: flex;
      flex-direction: column;
      background: white;
      border-radius: 5px;
      padding: 0.6% 1%;
      width: 29%;
      @media (max-width: 1600px){
        width: 33%;
      }
      @media (max-width: 1366px){
        padding: 1% 1.6%;
        width: 37%;
      }      
      @media (max-width: 1024px){
        width: 50%;
      }
      @media (max-width: 800px){
        width: 70%;
      }
      @media (max-width: 600px){
        padding: 2% 3%;
        width: 84%;
      }      
      h2{
        margin: 1% 0% 2%;
      }
      span{
        font-size: 20px;
        color: #767676;
      }
      .input_n_warning{
        width: 100%;
        margin: 8% 0 16%;
        input{
          width: 98%;
          border: none;
          border-bottom: 1px solid #1b1b1b;
          color: #1b1b1b;
          font-size: 18px;
          padding-bottom: 2%;
          outline: none;
        }
        input.error{
            border-bottom: 1px solid #ff0101 !important;
          }
        span{
          color: #ff0101;
        }
      }
      footer{
        display: flex;
        justify-content: space-between !important;
        margin-left: 0;
        width: 100% !important;
        div{
          display: flex;
          width: 27%;
          justify-content: space-between;
          @media (max-width: 600px){
            width: 38%;
          }
          button{
            font-size: 18px;
            background: none;
            border: none;
            color: #c1c1c1;
            font-weight: 500;
            cursor: pointer;
            @media (max-width: 1366px){
              font-size: 16px;
            }
          }
          &:nth-child(2){
            button{
              &:nth-child(1){
                color: #9b51e0;
              }
            }
          }
        }
      }
    }
}
</style>