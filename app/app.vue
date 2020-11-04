<template lang='pug'>
.main
  .buttons
    .button(v-for='(button,index) in buttons' :class='button' :key='index')
</template>
<script>
export default{
  data(){
    return {
      buttons:['r','g','b','o'],
      round:5,
      finished:true,
      sequence:[],
      clientSequence:[],
      buttonsElements: [],
      promises:[],
      delay: 1
    }
  },
  methods:{
    generateSequence(){
      this.sequence=[]
      for(let i =0;i<this.round;i++){
        this.sequence.push(this.rand())
      }
    },
    rand(){
      return Math.round(Math.random()*3)
    },
    onClick(){

    },
    execSequence(){
      this.sequence.forEach((el,i)=>{ 

        const promise = ()=>new Promise((res)=>{

          this.buttonsElements[el].classList.add('button_active')

          setTimeout(()=>{

            this.buttonsElements[el].classList.remove('button_active')

            res()

          },this.delay*1000)
        })
        this.promises.push(promise)
      })
      // this.promises.reduce((acc,current)=>acc.then(()=>current()))

      console.log(this.promises.reduce((acc,current)=>acc.then(current),Promise.resolve()))
      
    }
  },
  mounted(){
    this.buttonsElements=this.$el.children[0].children
    this.generateSequence()
    this.execSequence()
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
      opacity: .7
      cursor: pointer
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
</style>