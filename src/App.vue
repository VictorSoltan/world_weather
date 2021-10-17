<template>
  <div :class='{modal: modalWindow}'>
    <div class="main_block">
      <h1>World Weather</h1>
      <span>Wath weather in your current location</span>
      <div class="town_card" v-if="userInfo&&userWeather">
        <h2>{{userInfo.city}}, {{userInfo.countryCode}}</h2>
        <span>Your current location</span>
        <div class="info_block">
          <div>
            <h4>Weather</h4>
            <h4>{{userWeather.weather[0].main}}</h4>
          </div>
          <div>
            <h4>Temperature</h4>
            <h4>{{userWeather.main.temp}}°C</h4>      
          </div>
          <div>
            <h4>Humidity</h4>
            <h4>{{userWeather.main.humidity}}%</h4>         
          </div>
        </div>
        <footer>
          <span>{{this.timePassed}}</span>
          <button @click="reloadMainInfo">RELOAD</button>  
        </footer>
      </div>
    </div>    
    <footer>
      <div class="others_cards" v-if="weathers" v-bind:style="[weathers.length > 3 ? {justifyContent: 'space-between'} : {justifyContent: 'flex-start'}]">
        <TownWeather v-for="weather in weathers" :weather="weather" :key="weather.id" v-on:childToParent="deleteCard" :moment="moment" :reloadCard="reloadCard"/>
      </div>
      <div class="add_more" v-bind:style="[modalWindow ? {display: 'none'} : null]" > 
        <button @click="modalWindow = !modalWindow">+</button>
      </div>
    </footer>
    <Modal v-if="modalWindow" v-on:childToParent="createCard" :closeModal="closeModal" :modalWarning="modalWarning" />
  </div>
</template>

<script>
import TownWeather from './components/TownWeather'
import Modal from './components/Modal'

import axios from 'axios'
import moment from 'moment'
export default {
  name: 'App',
  components: {
    TownWeather,
    Modal
  },
  data(){
    return{
      modalWindow: false,
      modalWarning: false,
      weathers: [],
      userIp: '',
      userInfo: false,
      userWeather: '',
      timeCreated: '',
      timePassed: '',
      info: '',
      index: 0
    }
  },
  async mounted() {
    if(localStorage.getItem("weathers") !== null){
      this.weathers = JSON.parse(localStorage.getItem("weathers"))
    }    
    this.reloadMainInfo()
  },
  created () {    
    setInterval(() => {
      this.timePassed = this.moment(this.timeCreated).fromNow()
    }, 60000)
  },  
  methods: {
    moment: function (value) {
      if(value){
        return moment(value);
      }else{
        return moment();
      }
    },
    closeModal() {
        this.modalWindow = false
    },    
    async fetchCityWeather(value) {
      try{
        this.info = await axios.get(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${value}&appid=f096b26d313d10e206868d0f949bc118`)
        this.modalWindow = false
        this.modalWarning = false
        return(this.info)
      } catch(e){
        this.modalWarning = true
      }
    },
    async createCard(value){
      this.info = await this.fetchCityWeather(value)
      await this.weathers.push({name: this.info.data.name, country: this.info.data.sys.country, weather: this.info.data.weather[0].main, temp: this.info.data.main.temp, humidity: this.info.data.main.humidity, id: this.weathers.length, moment: moment() })
      await localStorage.setItem("weathers", JSON.stringify(this.weathers))
    },    
    async reloadMainInfo(){
      await axios.get('https://api.ipify.org?format=json')
        .then(data => this.userIp = data.data.ip)

      await axios.get(`http://ip-api.com/json/${this.userIp}`)
        .then(data => this.userInfo = data.data)
      await this.fetchCityWeather(this.userInfo.city)

      await axios.get(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.userInfo.city}&appid=f096b26d313d10e206868d0f949bc118`)
        .then(data => this.userWeather = data.data)

      this.timeCreated = moment()
      this.timePassed = this.moment(this.timeCreated).fromNow()
    },
    async reloadCard(value){
      this.index = this.weathers.findIndex(p => p.id === value)
      console.log(this.weathers[this.index].name)
      this.info = await this.fetchCityWeather(this.weathers[this.index].name)
      console.log(this.info)
      console.log(this.weathers[this.index])
      this.weathers[this.index].weather = this.info.data.weather[0].main
      this.weathers[this.index].temp = this.info.data.main.temp
      this.weathers[this.index].humidity = this.info.data.main.humidity
      this.weathers[this.index].moment = moment()
      await localStorage.setItem("weathers", JSON.stringify(this.weathers))
    },
    deleteCard(value){
      console.log(value)
      this.index = this.weathers.findIndex(p => p.id === value.id)
      if(this.index === 0){
        this.weathers.splice(0, 1);
      }else if(value.id >= this.weathers.length){
        this.weathers.splice(this.weathers.length-1, this.weathers.length);
      }else{
        this.weathers.splice(value.id, 1);
      }      
      
      localStorage.setItem("weathers", JSON.stringify(this.weathers))
    }
  }
}
</script>

<style lang="scss">
body{
    margin: 0;
}
#app{
  font-family: 'Lato', sans-serif;
  color: #1B1B1B;
  .main_block{
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    h1{
      margin: 1% 0 1.5%;
      font-size: 70px;
      font-weight: 300;
      @media (max-width: 1366px){
        font-size: 60px;
      }
      @media (max-width: 1024px){
        font-size: 50px;
      }
      @media (max-width: 520px){
        font-size: 45px;
      }
    }
    span{
      font-size: 24px;
      color: #767676;
      font-weight: 400;
      @media (max-width: 1366px){
        font-size: 20px;
      }
      @media (max-width: 520px){
        font-size: 16px;
      }
    }
    .town_card{
      width: 38.9%;
      margin-top: 1%;
      padding: 1% 2% 0.5%;
      text-align: left;
      box-shadow: 0px 0px 4px 3px #dbdbdb;
      border-radius: 5px;
      @media (max-width: 1366px){
        margin-top: 2%;
        width: 44%;
      }
      @media (max-width: 1024px){
        width: 50%;
      }
      @media (max-width: 520px){
        width: 60%;
        margin-top: 4%;
      }
      h2{
        font-weight: 700;
      }
      span{
        font-size: 18px;
        color: #1b1b1b;
      }
      .info_block{
        margin-top: 3%;
        div{
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #c4c4c4;
          h4{
            font-weight: 400;
            margin-bottom: 1.5%;
            &:nth-child(2){
              font-size: 17px;
              @media (max-width: 520px){
                font-size: 15px;
              }
            }
          }
        }
      }
      footer{
        display: flex;
        width: 100%;
        margin: 1.6% 0;
        align-items: flex-end;
        flex-direction: column;
        @media (max-width: 520px){
          margin: 4% 0;
        }
        span{
          color: #a8a8a8;
          font-size: 15px;

          @media (max-width: 520px){
            font-size: 14px;
          }
        }
        button{
          font-size: 16px;
          margin-top: 5%;
          color: #9b51e0;
          border: none;
          background: none;
          font-weight: 500;
          cursor: pointer;
          @media (max-width: 520px){
            font-size: 14px;
          }
        }
      }
    }
  }
  footer{
    display: flex;
    min-height: 11vh;
    align-items: flex-end;
    justify-content: center;
    width: 81%;
    margin: 2.9% auto 0;
    @media (max-width: 1366px){
      width: 88%;
    }
    .others_cards{
      display: flex;
      overflow: scroll;
      width: 100%;
      padding: 1% 0 0;
    }    
    .add_more{
      position: absolute;
      right: 1%;
      margin-bottom: 5px;
      @media (max-width: 1366px){
        margin-bottom: 15px;
      }
      button{
        background: #9b51e0;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);
        color: white;
        font-size: 20px;
        border-radius: 50%;
        padding: 10px 16px;
        text-align: center;
        cursor: pointer;
        border: none;
      }
    }
  }
  .modal{
    width: 100%;
    height: 100vh; 
    overflow: hidden;
  }
}

</style>
