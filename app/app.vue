<template lang='pug'>
.main
  .buttons
    .button(v-for='(button,index) in buttons' :class='button' :key='index' @click='onClick(index)')
  .start(@click='start') start
  .start(@click='stop') stop
  .start {{round}}
  .start(v-if='isWrong') game over
</template>
<script>
export default{
  data(){
    return {
      buttons:['r','g','b','o'],
      round:2,
      finished:true,
      sequence:[],
      clientSequence:[],
      buttonsElements: [],
      promises:[],
      delay: 1,
      isWrong:false,
      isPending:false,
      stopped:false,
      success:false,
      isChecking:false
    }
  },
  methods:{
    stop(){
      this.stopped=true
    },
    start(){

      if(this.isPending) return
      this.promises=[]
      this.clientSequence=[]
      this.stopped=false
      this.isPending=true
      this.isWrong=false
      this.generateSequence()
      this.execSequence()
    },
    generateSequence(){
      this.sequence=[]
      
      for(let i =0;i<this.round;i++){
        this.sequence.push(this.rand())
      }
    },
    rand(){
      return Math.round(Math.random()*3)
    },
    onClick(i){
      if(this.isPending||this.isWrong||!this.isChecking) return
        this.clientSequence.push(i)
      if(this.clientSequence.length<this.sequence.length){
        this.isWrong=this.clientSequence.some((el,i)=>el!==this.sequence[i])
        if(this.isWrong){
          this.round=1
        }
      }else if(!this.isWrong){
        this.success=true
        this.isChecking=false
        this.round++
      }
      
    },
    execSequence(){
      this.sequence.forEach((el,i)=>{ 

        const promise = ()=>new Promise((res,rej)=>{
          if(this.stopped) {
            rej('err')
            return
          }
          this.buttonsElements[el].classList.add('button_active')

          setTimeout(()=>{

            this.buttonsElements[el].classList.remove('button_active')

            setTimeout(()=>{res()},this.delay*1000/2)

          },this.delay*1000/2)
        })
        this.promises.push(promise)
      })
      this.promises.reduce((acc,current)=>acc.then(current),Promise.resolve())
      .then(()=>{
        this.isPending=false
        this.isChecking=true
      })
      .catch((e)=>{

        this.isPending=false
        this.isChecking=false
      })
      
    }
  },
  mounted(){
    this.buttonsElements=this.$el.children[0].children
  }
}
</script>
<style lang='sass'>
.main
  width: 100%
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  .buttons
    width: 500px
    height: 500px
    display: flex
    flex-wrap: wrap
    .button
      width: 50%
      height: 50%
      opacity: .5
      cursor: pointer
      transition: opacity .2s ease
      &_active
        opacity: 1
    .r
      background: red
    .g
      background: green
    .b
      background: blue
    .o
      background: orange
  .start
    padding: 10px 20px
    border: 1px solid green
    color: green
    border-radius: 5px
    cursor: pointer
    &:active
      opacity: .5
</style>