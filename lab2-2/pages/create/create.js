// pages/create/create.js
var app = getApp()
var roomID = ""
var num = ""
var p=1
var rank = ""
var score = "" //Record points

Page({
    data: {
      p:1, //The first few players in the game 0 means that all throwing is completed
      statu:0, //Status: 0 create room interface, 1 not started, 2 throwing, 3 Results
      resultList:[],
      rank:"",    
      score:"",  
      rank1:"",   
      rank2:"",   
      rank3:"",    
      rank4:"",   
      score1:"",
      score2:"",
      score3:"",
      score4:"",
      select:false,
      num:'--选择人数--',
      nums: [
        '2 Player',
        '3 Player',
        '4 Player',
       ],

       userName:[
        '1',
        '2',
        '3',
        '4'
       ],

      // Dice picture address
      dices: [
        '../../image/playDice.gif',
        '../../image/dice1.png',
        '../../image/dice2.png',
        '../../image/dice3.png',
        '../../image/dice4.png',
        '../../image/dice5.png',
        '../../image/dice6.png',
      ],
      
      //Bobing result
      dicelist:[
        '../../image/dice1.png',
        '../../image/dice2.png',
        '../../image/dice3.png',
        '../../image/dice4.png',
        '../../image/dice5.png',
        '../../image/dice6.png',
      ],

    },

    /** 
     * Click the drop-down box
     */
    bindShowMsg() {
      this.setData({
      select: !this.data.select
      })
    },
    /**
     * Selected drop-down box
     */
    mySelect(e) {
      console.log(e)
      var name = e.currentTarget.dataset.name
      console.log("选择房间人数",name)
      this.setData({
      num: name,
      select: false
      })
      num = name
    },
    //Input box
    bindKeyInput: function(e) {
        this.setData({
         roomID : e.detail.value
        })
        roomID = e.detail.value
        console.log("输入房间名称",roomID)
      },

      //OK button
     click(){
      console.log("确定房间名称：", roomID)
      console.log("确定房间人数：", num)
        if(!this.data.roomID){
            this.setData({
              infoMess:'输入的房间号不能为空',
            })
          }else{
            this.setData({
                infoMess:'',
                roomID:roomID,
                statu:1
            })
            wx.setStorageSync('roomID', num)
            console.log("创建成功！")
            
          }
      },

    click1(){
        console.log("点击投掷")
        this.setData({
          statu: 2,
          finallyRank:[]
        })
    },

    click2(){
      console.log("点击停止投掷")
      this.setData({
        statu: 3
      })
      this.result();
  },

    random(min,max){   //Generate random number
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*(max-min+1)+min);
    },

    result(){
      var list=[];
      var listsrc=[];
      var one=0;  //Statistical throwing results
      var two=0;
      var three=0;
      var four=0;
      var five=0;
      var six=0;
      for(var i=0;i<6;i++){
          var t=this.random(1,6);
          list.push(t);
          if(t==1)one++;
          if(t==2)two++;
          if(t==3)three++;
          if(t==4)four++;
          if(t==5)five++;
          if(t==6)six++;
        }
      this.setData({
        resultList:list
      })
      for(var i=0;i<6;i++){
        var dicesrc="../../image/dice"+this.data.resultList[i]+".png"
        listsrc.push(dicesrc)
      }
      this.setData({
        dicelist:listsrc,
      })
      var flag=0;
      if(one==1&&two==1&&three==1&&four==1&&five==1&&six==1){
        this.setData({
          rank:"对堂！",
          score:"+300"
        })
        flag=1
      }else{
        if(four==1){
        this.setData({
          rank:"一秀！",
          score:"+10"
        })
        flag=1
      }
      if(four==2){
        this.setData({
          rank:"二举！",
          score:"+50"
        })
        flag=1
      }
      if(four==3){
        this.setData({
          rank:"三红！",
          score:"+200"
        })
        flag=1
      }
      if(four==4){
        if(one==2){
          this.setData({
            rank:"状元插金花！",
            score:"+1000"
          })
          flag=1
        }
        else{
          this.setData({
            rank:"状元！",
            score:"+500"
          })
          flag=1
        }
      }
      if(four==6){
        this.setData({
          rank:"六杯红！",
          score:"+500"
        })
        flag=1
      }
      if(three==4){
        this.setData({
          rank:"四进！",
          score:"+100"
        })
        flag=1
      }
      if(three==5){
        this.setData({
          rank:"五王！",
          score:"+500"
        })
        flag=1
      }
      if(six==6){
        this.setData({
          rank:"六杯黑！",
          score:"+500"
        })
        flag=1
      }
    }
    if(flag==0){
      this.setData({
        rank:"再接再厉",
        score:"+0"
      })
    }
      // console.log(this.data.resultList)
      console.log("输出投掷结果:",this.data.rank)
      rank=this.data.rank
      score=this.data.score
    },

    click3(){
      this.setData({
        statu:1
      })
    },
  
  next2(){ //Click player 2
    this.setData({
      p:2,
      statu:1,
      rank1:rank,
      score1:score
    })
  },

  next3(){ //Click player 3
    this.setData({
      p:3,
      statu:1,
      rank2:rank,
      score2:score
    })
  },

  next4(){ //Click player 4
    this.setData({
      p:4,
      statu:1,
      rank3:rank,
      score3:score
    })
  },

  finish(){ //Click generate results
    this.setData({
      p:0
    })
    if(num=='2 Player'){
      this.setData({
        rank2:rank,
        score2:score
      })
    }
    if(num=='3 Player'){
      this.setData({
        rank3:rank,
        score3:score
      })
    }

    if(num=='4 Player'){
      this.setData({
        rank4:rank,
        score4:score
      })
    }
    console.log("排名完成")
  },

  again(){  //再来一局
    this.setData({
      statu: 1 ,
      p:1
    })
  },

  toFirstPage(){ //Jump to home page
    wx.switchTab({  
      url: '/pages/index/index'  
    });  
  }
})