<template>
  <div class="main_block">
    <div class="town_card">
      <h2>{{weather.name}}</h2>
      <span>{{weather.country}}</span>
      <div class="info_block">
        <div>
          <h4>Weather</h4>
          <h4>{{weather.weather}}</h4>
        </div>
        <div>
          <h4>Temperature</h4>
          <h4>{{weather.temp}}°C</h4>      
        </div>
        <div>
          <h4>Humidity</h4>
          <h4>{{weather.humidity}}%</h4>         
        </div>        
      </div>
      <footer>
        <span>{{timePassed}}</span>
        <div class="footer_buttons">
          <button @click="emitToParent">REMOVE</button>  
          <button @click="reloadCard(this.weather.id)">RELOAD</button>  
        </div>
      </footer>
    </div>
  </div>
</template>

<script>

export default {
  props: ['weather', 'moment', 'reloadCard'],
  data(){
    return{
      timePassed: this.moment(this.weather.moment).fromNow()
    }
  },
  created () {    
    setInterval(() => {
      this.timePassed = this.moment(this.weather.moment).fromNow()
    }, 1000)
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.weather)
    }
  }
}
</script>

<style lang="scss" scoped>
.main_block{
    min-width: 225px;
    width: 19.8%;
    margin: 0px 2.4% 5px;
    @media (max-width: 1280px){
      min-width: 200px;
    }
    @media (max-width: 520px){
      min-width: 190px;
      margin: 0px 5% 5px;
    }
    .town_card{
      width: 100% !important;
      padding: 6% 6% !important;
      h2{
        font-size: 30px;
        margin-bottom: 6%;
        margin-top: 5%;
        @media (max-width: 520px){
          font-size: 24px;
        }
      }
      span{
        @media (max-width: 520px){
          font-size: 16px !important;
        }        
      }
      .info_block{
        h4{
          font-size: 18px;
          @media (max-width: 520px){
            font-size: 14px !important;
          }
        }
      }
      footer{
        span{
          margin-top: 2%;
          font-size: 17px;
          @media (max-width: 1366px){
            font-size: 15px;
          }
          @media (max-width: 520px){
            font-size: 14px;
          }          
        }
        .footer_buttons{
          display: flex;
          justify-content: space-between;
          border: none !important;
          width: 100%;
          margin-top: 4%;
          button{
            padding: 0;
            @media (max-width: 520px){
              font-size: 14px !important;
            }            
          }
        }
      }
    }

}
</style>