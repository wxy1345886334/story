var imgs=$(".bg1"),lis=$(".li_nav>li"),box=document.querySelector(".bd"),dsq1,index=0,num_1=document.querySelectorAll(".sp1"),cartList4=localStorage.getItem("cartList4"),prevTop,top1;function moveMent(){hide1(),2<++index&&(index=0),show1()}function hide1(){imgs[index].style.zIndex=1,imgs[index].style.opacity=.1}cartList4=eval("("+cartList4+")"),move(imgs[index],{opacity:100}),dsq1=setInterval(moveMent,3e3),box.onmouseover=function(){clearInterval(dsq1)},box.onmouseout=function(){dsq1=setInterval(moveMent,3e3)};for(let i=0;i<lis.length;i++)lis[i].onclick=function(){hide1(),index=i,show1()};function show1(){imgs[index].style.zIndex=2,move(imgs[index],{opacity:100});for(var e=0;e<lis.length;e++)lis[e].className="";lis[index].className="bg"}window.onscroll=function(){300<(top1=document.documentElement.scrollTop)&&($(".dis_nav")[0].style.height="159px",$(".dis_nav")[0].style.zIndex="100",$(".dis_nav")[0].style.opacity="1",$(".dis_nav")[0].style.display="block"),top1<300&&($(".dis_nav")[0].style.height="0px",$(".dis_nav")[0].style.opacity="0",$(".dis_nav")[0].style.zIndex="0",$(".dis_nav")[0].style.display="none"),prevTop=top1},window.onload=function(){var e=document.getElementById("search1");e.onclick=function(){" 办公采购好帮手，想要啥就搜搜"==e.value&&(e.value="",this.focus())},e.onblur=function(){""==e.value&&(e.value=" 办公采购好帮手，想要啥就搜搜名")};var n=document.getElementById("search2");n.onclick=function(){" 办公采购好帮手，想要啥就搜搜"==n.value&&(n.value="",this.focus())},n.onblur=function(){""==n.value&&(n.value=" 办公采购好帮手，想要啥就搜搜名")}};var inp=document.getElementById("search1"),inp1=document.getElementById("search2"),ul=document.querySelector(".search_t"),ul1=document.querySelector(".search_t1");function st1(){var e=`<span class="cart_j">${cartList4.length}</span>`;num_1[0].innerHTML=e}inp.oninput=function(){var val=this.value;val?(ul.style.display="block",ajax({url:"../php/search.php",type:"post",data:"cb=fn2&wd="+val,success:function(dt){var obj1=eval("("+dt.split("2(")[1].split(");")[0]+")"),arr=obj1.s,s1="";arr.forEach(e=>{s1+=`
                        <li>${e}</li>
                    `}),ul.innerHTML=s1}})):ul.style.display="none"},inp1.oninput=function(){var val=this.value;val?(ul1.style.display="block",ajax({url:"../php/search.php",type:"post",data:"cb=fn2&wd="+val,success:function(dt){var obj1=eval("("+dt.split("2(")[1].split(");")[0]+")"),arr=obj1.s,s1="";arr.forEach(e=>{s1+=`
                        <li>${e}</li>
                    `}),ul1.innerHTML=s1}})):ul1.style.display="none"},st1();