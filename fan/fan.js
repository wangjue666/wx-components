// components/ranklist/norlist/norlist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      bChecked:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
      switchedChange(){
        if(!this.data.bChecked){
            this.setData({
                bChecked:true
            })
            this.triggerEvent('showFace',{},{});
        }else{
            this.setData({
                bChecked:false
            })
            this.triggerEvent('cancelFace',{},{});
        }

      }
  }
})
