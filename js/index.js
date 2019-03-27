   var oImg=document.getElementById("img");
   var oPrev=document.getElementById("prev");
   var oNext=document.getElementById("next");
   window.onload= function(){
   
   var arrSrc=["img/original.jpg","img/original3.jpg","img/original4.jpg","img/original5.jpg","img/original6.jpg","img/original7.jpg"];
   var arrTxt=["文案1","文案2","文案3","文案4","文案5","文案6"];
   var oCircle = document.getElementById('list');
   var aCircle = oCircle.getElementsByTagName('li');
   var timer;
   var num=0;
   var onOff=true; //true 循环  false 走顺序
   function fn(){      //开始先定义c一个公共函数方便下面调用
             oImg.src = arrSrc[num];     //图片的显示路径
         }
         fn();
   oPrev.onclick = function(){
             num--;  //点击左边的箭头那么就是num--
             if(onOff){  //onOff默认是true所以就是走循环了
                 if(num==-1){    //在一直减的过程中，数组里最小的就是0，所以等于-1的时候要循环下去所以让它显示最后一张
                    num=arrSrc.length-1;
                 }
   
             }else{  //否则onOff是false所以就是走顺序了
                 if(num==-1){     //在一直减的过程中，数组里最小的就是0，所以等于-1的时候没有数据走了，所以让它显示第一张不能点击了
                     num=0;  
                     alert("已经是第一张了")
                 }
             }
             fn();//判断好之后记得调用函数
         };
         //相反下面就是点击左边的箭头所做出的判断，道理同上
         oNext.onclick = function(){
             num++;
             if(onOff){
                 if(num==arrTxt.length){
                     num=0;
                 }
             }else{
                 if(num==arrTxt.length){
                     num=arrSrc.length-1;
                     alert("已经是最后一张了")
                 }
             }
             fn();
         }
     }
        var timer;
            //设置定时器
        window.setInterval("changeImage()",3000);
        var count =1;    //在调用函数的时候0.jpg已经显示，如果num=0，那么在执行下面函数时，0.jpg会再次显示2秒
        //设置寻找图片的函数
        var arrSrc=["img/original.jpg","img/original3.jpg","img/original4.jpg","img/original5.jpg","img/original6.jpg","img/original7.jpg"];
        function changeImage(){
            var img = document.getElementById("img");//img对象就相当于img标签
            if (count <6) {
                 oImg.src=arrSrc[count];
                count++;
            }else {
                count= 0;
                changeImage();
            }
        }
