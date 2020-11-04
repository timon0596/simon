<template lang='pug'>
.main
  .buttons
    .button(v-for='(button,index) in buttons' :class='button' :key='index' @click='onClick(index)')
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
      delay: 1,
      isWrong:false
    }
  },
  methods:{
    generateSequence(){
      this.sequence=[]
      this.clientSequence=[]
      for(let i =0;i<this.round;i++){
        this.sequence.push(this.rand())
      }
      console.log(this.sequence)
    },
    rand(){
      return Math.round(Math.random()*3)
    },
    onClick(i){
      this.clientSequence.push(i)
      this.isWrong=this.clientSequence.some((el,i)=>el!==this.sequence[i])
    },
    execSequence(){
      this.sequence.forEach((el,i)=>{ 

        const promise = ()=>new Promise((res)=>{

          this.buttonsElements[el].classList.add('button_active')

          setTimeout(()=>{

            this.buttonsElements[el].classList.remove('button_active')

            setTimeout(()=>{res()},this.delay*1000/2)

          },this.delay*1000/2)
        })
        this.promises.push(promise)
      })
      this.promises.reduce((acc,current)=>acc.then(current),Promise.resolve())
      
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
</style>