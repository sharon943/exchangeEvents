<template>
  <div class="base">
    <img :src="bgurl" alt="" class="bgimg">
    <!--验证开始-->
    <!--<div id="captcha" :class="[modelName]" v-show="verification">-->
      <!--<div id="nc-container"></div>-->
    <!--</div>-->
    <!--验证结束-->
    <main class="type1" v-if="pagetype==1">
     <ul>
       <li>
         <span>收货人</span>
         <input type="text" v-model="formLabelAlign.name" placeholder="请填写收货人姓名" :disabled="buildSuccess">
       </li>
       <li>
         <span>手机号码</span>
         <input type="number" v-model="formLabelAlign.phone" placeholder="请填写收货人手机号" :disabled="buildSuccess">
       </li>
       <li id="select_contact" @click="choose_area">
         <span>所在地区</span>
         <div class="pc-box" >
           <input type="hidden" name="contact_province_code" data-id="0001" id="contact_province_code" value="" data-province-name="">
           <input type="hidden" name="contact_city_code" id="contact_city_code" value="" data-city-name="">
           <span data-city-code="510100" data-province-code="510000" data-district-code="510105" id="show_contact">{{formLabelAlign.region}}</span>
         </div>
       </li>
       <li>
         <span>详细地址</span>
         <input type="text" v-model="formLabelAlign.address" placeholder="街道，楼牌号等" :disabled="buildSuccess">
       </li>
     </ul>
      <div @click="savedata" class="saveaddress" :style="{'background':buildSuccess?'rgb(189,189,189)':'rgb(207,164,81)'}">提交</div>
    </main>
    <main v-else-if="pagetype==2" class="type2">
      <div class="box">
        <img src="../assets/img/close.png" alt="" @click="backto1">
        <!--<h1>{{buildSuccess?'恭喜':'抱歉'}}</h1>-->
        <p>{{errorMSG}}</p>
        <p v-if="errorMSG1">{{errorMSG1}}</p>
        <p v-if="errorMSG2">{{errorMSG2}}</p>
        <!--<span @click="onCopy">分享给小伙伴一起领</span>-->
      </div>
    </main>
    <div class="commitscreen" v-show="loading"></div>
    <img src="../assets/img/loading3.gif" class="loading" alt="" v-show="loading">
  </div>
</template>
<script>
  import Vue from 'vue'
  import api from '../api/api'
  import axios from 'axios'
  import Clipboard from 'clipboard'
  import '../assets/js/iosSelect.js'
  import '../assets/js/zepto.js'
  import country from '../assets/js/areaData_v2.js'
  import '../assets/css/iosSelect.css'
export default {
  name: 'index',
  data(){
    return {
       sysWidth:'',timeData:'获取验证码',eventId:'',id:'',isCode: true,//验证码按钮是否可点击
       timeInt: 60,bgurl:'',pagetype:1,message:'',copyurl:'', verification:false,loading:true,
      appKey:'FFFF00000000017A69F4',remark:'',couponname:[],iscopyTwice:false,code:'',errorMSG2:'',
      modelName:'no-captcha',errorMSG:'',buildSuccess:false,
      nc_token:null,errorMSG1:'',
      lang:'cn',
      NC_Opt:null,
      ruleForm:{
        account:'',
        code:'',
        mobile:''
      },area:'',oneLevelId:'contact_province_code',twoLevelId:'contact_city_code',threeLevelId:'show_contact',
      labelPosition: 'left',
      formLabelAlign: {
        name: '',
        region: '',
        phone:'',
        address: ''
      }
    }
  },
  components:{
  },
  created(){
    this.sysWidth=document.body.clientWidth
    this.iscopyTwice=false
    this.UrlSearch()
  },

  mounted(){
    // 链接阿里云
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '//g.alicdn.com/sd/nch5/index.js?t=2015052012';
    document.body.appendChild(s);
  },
  methods: {
    backto1(){
      this.pagetype=1
      this.ruleForm.account=''
      this.ruleForm.code=''
      this.$parent.$el.scrollTop=0
    },
    choose_area() {
      if(this.buildSuccess){
        return
      }
      let that = this;
      var iosSelect = new IosSelect(3, [country.iosProvinces, country.iosCitys, country.iosCountys],
              {
                title: "选择省份、城市",
                closeText: '',
                sureText: '',
                itemHeight: 35,
                itemShowCount: 5,
                relation: [1, 1],
                container: '.container',
                oneLevelId: this.oneLevelId,
                twoLevelId: this.twoLevelId,
                threeLevelId: this.threeLevelId,
                callback: function (selectOneObj, selectTwoObj, selectThreeObj) {
                  that.oneLevelId = selectOneObj.id;
                  that.twoLevelId = selectTwoObj.id;
                  that.threeLevelId = selectThreeObj.id;
                  that.returnprovince = selectOneObj.value;
                  that.returncity = selectTwoObj.value;
                  that.returnregion = selectThreeObj.value;
                  that.formLabelAlign.region =
                          that.returnprovince + "-" + that.returncity + "-" + that.returnregion;


                }
              }
      );
    },
    UrlSearch() {
      var name,value;
      var str=location.href; //取得整个地址栏
      this.copyurl=str
      var num=str.indexOf("?")
      str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]
      var arr=str.split("&"); //各个参数放到数组里
      console.log(arr)
      for(var i=0;i < arr.length;i++){
        num=arr[i].indexOf("=");
        if(num>0){
          name=arr[i].substring(0,num);
          value=arr[i].substr(num+1);
          this[name]=value;
        }
        if(this[name].indexOf('#')!=-1){
          var ss=this[name].indexOf('#')
          this[name]=this[name].substring(0,ss)
        }
      }
      console.log(this.eventId,this.code)
      this.getdata()
    } ,
    getdata(){
      console.log(this.eventId,this.code)
      fetch(api.baseUrl+'/webapi/exchangeEvents/get/'+this.eventId+'/'+this.code,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
        },
      }).then(r=>r.json()).then(d=>{
        this.loading=false
        console.log(d)
        // d.data.imgUrl='https://merchants.oss-cn-hangzhou.aliyuncs.com/409/store/41984b5bbe483df1e252fceb2530978e.png'
        this.bgurl=d.data.imgUrl?d.data.imgUrl:''
        if(d.code==200){
          this.pagetype=1
          document.title = d.data.title
        }else{
          this.pagetype=2
          this.errorMSG=d.message
          this.errorMSG2=''
          if(d.data.exchangeId){
            this.errorMSG1='订单编号：'+d.data.exchangeId
          }else{
            this.errorMSG1=''
          }

        }
      })

    },
    savedata(){
      if(this.buildSuccess){
        return
      }
      if(!this.formLabelAlign.region){
        this.$message.error('请填写所在地区');
        return
      }else{
        var arr=this.formLabelAlign.region.split("-"); //各个参数放到数组里
        console.log(arr)
        var province=arr[0]
        var city=arr[1]
        var county=arr[2]

      }
      if(!this.formLabelAlign.name){
        this.$message.error('请填写收货人姓名');
        return
      }
      if(!this.formLabelAlign.phone){
        this.$message.error('请填写手机号');
        return
      }

      if(!this.formLabelAlign.address){
        this.$message.error('请填写详细地址');
        return
      }
      this.loading=true
      var params={'eventId':this.eventId,'code':this.code,'name':this.formLabelAlign.name,'mobile':this.formLabelAlign.phone,'province':province,'city':city,'county':county,'address':this.formLabelAlign.address}
      fetch(api.baseUrl+'/webapi/exchangeEvents/exchange',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(params)
      }).then(r=>r.json()).then(d=>{
        this.loading=false
        this.$parent.$el.scrollTop=0
        this.pagetype=1
        if(d.code==200){
          this.pagetype=2
          this.buildSuccess=true
          this.errorMSG=`恭喜您兑换成功 `
          this.errorMSG1=`请等待邮寄给您哦`
          this.errorMSG2='订单编号：'+d.data
        }else{
          this.pagetype=2
          this.errorMSG=d.message;
          this.errorMSG1=''
          this.errorMSG2=''

        }

      })
    },
    q(c,o){
      console.log(c)
    }
  },
}
</script>
<style lang="scss">
  .base{
    width: 100%;position: relative;height: auto;
    .bgimg{
      width: 100%;height: auto;
    }
    .commitscreen{
      position: fixed;width: 100%;height: 100%;background: rgba(0,0,0,0.5);z-index: 101;left:0;top:0;
    }
    .loading{
      position: fixed;top:0;left:0;bottom:0;right:0;margin:auto;z-index: 103;width: .25rem;
    }
    #captcha{
      position: fixed;width: 100%;height:100%;background: rgba(0,0,0,0.5);left:0;top:0;z-index: 100;padding-top: 4.7rem;
      #nc {
        width: 80%;height:1rem;margin:30% auto 0;
      }
    }
    .saveaddress{
      background: rgb(207,164,81);color:#fff;text-align: center;
      height: .4rem;line-height: .4rem;border-radius: .1rem;margin-top: .3rem;
    }
    #select_contact{
      display: flex;
      #show_contact{
        color:#495060;font-size: .14rem;
      }
    }
    main{
      padding:30px;position: absolute;top:25%;width: 100%;
    }
    ul{
     padding:.2rem .05rem;
      li{
        height: .4rem;
        font-size: .14rem;
        line-height: .4rem;
        border-bottom: 1px solid #f0f0f0;
        color: #f0f0f0;
        margin-top: .15rem;
        background: #fff;
        border-radius: .1rem;
        padding: 0 0 0 .1rem;
        & > span{
          font-size: .14rem;width: .8rem;display: inline-block;color:#535353
        }
        input{
          outline: none;border:none;height: .4rem;line-height: .4rem;background: transparent;
        }
      }
    }
    main.type1{

      button{
        font-size: .14rem;width: 100%;text-align: center;margin:.2rem auto 0;display: block;
        height:.4rem;line-height: .4rem;background: rgb(207,164,81);color:#fff;outline: none;border:none;cursor: pointer;border-radius: .05rem;
      }
    }
    main.type2{
      position: absolute;top:1rem;width: 100%;
      .box{
        width: 70%;
        margin: 0 auto;
        height: auto;
        background: #d1725f;
        position: relative;
        border-radius: .1rem;
        padding: .5rem 0 .5rem;
        img{
          position: absolute;top:.1rem;right:.1rem;width: .2rem;height:.2rem
        }
        h1{
          font-size: .16rem;color:#fff;text-align: center;margin-bottom: .1rem;
        }
        p{
          text-align: center;color:#fff
        }
        span{
          background: rgb(239,175,167);border-radius: .05rem;display: block;margin:.1rem auto ;width: 70%;
          height: .4rem;line-height: .4rem;font-size: .14rem;text-align: center;color: rgb(170,116,107);
        }
      }
    }
  }

</style>

