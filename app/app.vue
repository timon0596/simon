<template lang='pug'>
.main
  .buttons
    .button(v-for='(button,index) in buttons' :class='button' :key='index' @click='onClick(index)')
  .controls
    .control(@click='start') start
    .control(@click='restart') restart
    .control round : {{round}}
    .control.control_error(v-if='isWrong') game over
  .difficulty
    label
      <input type="radio" :value='+1.5' v-model='delay'>
      |легко
    label
      <input type="radio" :value='+1' v-model='delay'>
      |средне
    label
      <input type="radio" :value='+0.4' v-model='delay'>
      |сложно
</template>
<script>
  const notes = [
    new Audio('./do.wav'),
    new Audio('./re.wav'),
    new Audio('./mi.wav'),
    new Audio('./fa.wav')
  ]
  
export default{
  data(){
    return {
      buttons:['r','g','b','o'],
      round:1,
      finished:true,
      sequence:[],
      clientSequence:[],
      buttonsElements: [],
      promises:[],
      delay: 1,
      isWrong:false,
      isPending:false,
      stopped:false,
      isChecking:false,
      notes
    }
  },
  methods:{
    restart(){
      this.stopped=true
      this.isChecking=false
      this.round=1
    },
    start(){

      if(this.isPending||this.isChecking) return
      this.promises=[]
      this.clientSequence=[]
      this.stopped=false
      
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
    execSound(i){
      this.notes.forEach((el)=>{
        el.pause()
        el.currentTime = 0
      })
      this.notes[i].play()
    },
    onClick(i){
      this.execSound(i)
      if(this.isPending||this.isWrong||!this.isChecking) return
        this.clientSequence.push(i)
        this.isWrong=this.clientSequence.some((el,i)=>el!==this.sequence[i])
        if(this.isWrong){
          this.round=1
          this.isChecking=false
        }else if(this.clientSequence.length==this.sequence.length){

          this.isChecking=false
          this.round++  
        }
        
      
    },
    execSequence(){
      this.isPending=true
      this.sequence.forEach((el,i)=>{ 

        const promise = ()=>new Promise((res,rej)=>{
          if(this.stopped) {
            rej('err')
            return
          }
          this.buttonsElements[el].classList.add('button_active')
          this.execSound(el)
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
  display: grid
  justify-content: center
  align-content: center
  grid-gap: 5px

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
      transition: opacity .1s ease
      &:hover
        opacity: .6
      &:active
        opacity: 1
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
  .controls
    display: grid
    grid-gap: 5px
  .control
    padding: 10px 20px
    border: 1px solid green
    color: green
    border-radius: 5px
    cursor: pointer
    &:active
      opacity: .5
    &_error
      border-color: red
      color: red
</style>