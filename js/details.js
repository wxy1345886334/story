var box=document.querySelector(".content_1"),num_1=document.querySelectorAll(".sp1"),cartList4=localStorage.getItem("cartList4"),cartList4=eval("("+cartList4+")"),search1=location.search,dt,str,val;if(search1){var ar1=search1.split("=");if("?id"==ar1[0]){let id=ar1[1];!async function(){dt=await promiseAjax({url:"../php/details.php",data:"id="+id}),dt=eval("("+dt+")"),dt.number=1,str=`
            <div class="exhibition cla">
            <div class="ex-l fl">
                <!-- 小图列表展示 -->
                <div class="smallImg fl">
                    <div class="smallup">
                        <img src="../register_img/xbSmallup.gif">
                    </div>
                    <ul class="imgMenu">
                        <li class="img_li">
                            <img src="${dt.url2}" class="img_p1">
                        </li>
                    </ul>
                    <div class="smalldown">
                        <img src="../register_img/xbSmalldown.gif" alt="">
                    </div>
                </div>
                <!-- 大图展示 -->
                <div class="bigImg fl" id="big_l">
                    <img src="${dt.url2}">
                    <div class="mark" id="mark1"></div>
                    <div class="rightImg" id="big_r"><img src="${dt.url2}" id="pic1"></div>  
                </div>
            </div>
            <div class="ex-r fr">
                <div class="e_title">
                    <h1>${dt.title}</h1>
                </div>
                <div class="e_price">
                    <ul class="dotted">
                        <li>
                            <span class="bt1">销售价：</span>
                            <span class="ran">￥</span>
                            <span class="ran">${dt.price}</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="pt15">
                        <li>
                            <span style="display: inline-block">商品编号：</span>
                            <span>${dt.bianhao}</span>
                        </li>
                        <li>
                            <span>保质天数：</span>
                            <span>${dt.Qgb}</span>
                        </li>
                        <li>
                            <span>商品品牌：</span>
                            <span style="text-decoration:underline">${dt.pinpai}</span>
                        </li>
                    </ul>
                </div>
                <div class="pinglun fl">
                    <div class="score">
                        <h3>商品评分：</h3>
                        <div class="star"> </div>
                        <div class="scoretext">
                            (己有0人评分)
                        </div>
                        <div class="fl mt3">
                            <img src="../register_img/office-icon.jpg">
                        </div>
                    </div>
                </div>
                <div class="canshu fl">
                    <div class="sizebox fr">
                        <h3 class="kucun">
                            库存状态：
                            <span>少量有货</span>
                        </h3>
                    </div>
                    <div class="buy1">
                        <h3>我要购买：</h3>
                        <div class="bleft1">
                            <span  class="btn fl" id="btn1">-</span>
                            <input type="text" name="text1" value="1" class="jishu fl">
                            <span class="btn fl">+</span>
                        </div>
                    </div>
                    <div class="btn2">
                        <div class="bleft">
                            <a href="" class="buy_c"></a>
                        </div>
                        <div class="bleft s_fav">
                            <p></p>
                        </div>
                        <br>
                    </div>
                    <p class="item_text">
                        温馨提示：经拆封后或包装损坏的食品；一经激活或者试用后价值贬损较大的商品，如手机等电子产品、硒鼓、墨盒等OA消耗品，不支持7天无理由退货。详情请参考退换货政策
                    </p>
                </div>
            </div>
        </div>
        <div class="bigbox1 cla">
            <div class="content_l fl">
                <div class="mrank">
                    <div class="mrank_box">
                        <div class="hd">
                            <h2>销量排行</h2>
                        </div>
                        <div class="bd">
                            <ul>
                                <li>
                                    <p class="pic">
                                        <img src="../register_img/H800-4291.jpg" alt="晨光 盖帽式中性笔 (黑) 0.5mm  Q7" width="50px" height="50px">
                                    </p>
                                    <p class="bd_name">
                                        晨光 盖帽式中性笔 (黑) 0.5mm  Q7
                                    </p>
                                    <p class="price">¥  1.20</p>
                                    <i class="icon_0 icon_1"></i>
                                </li>
                                <li>
                                    <p class="pic">
                                        <img src="../register_img/H800-3862.jpg" alt="晨光 按动式中性笔 (黑) 0.5mm  K35" width="50px" height="50px">
                                    </p>
                                    <p class="bd_name">晨光 按动式中性笔 (黑) 0.5mm  K35</p>
                                    <p class="price">¥  2.70</p>
                                    <i class="icon_0 icon_2"></i>
                                </li>
                                <li>
                                    <p class="pic">
                                        <img src="../register_img/H800-3686.jpg" alt="晨光 按动式中性笔 (黑) 0.5mm  GP-1008" width="50px" height="50px">
                                    </p>
                                    <p class="bd_name">
                                        晨光 按动式中性笔 (黑) 0.5mm  GP-1008
                                    </p>
                                    <p class="price">¥  2.60</p>
                                    <i class="icon_0 icon_3"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mrank_box">
                        <div class="hd">
                            <h2>最新上架</h2>
                        </div>
                        <div class="bd">
                            <ul>
                                <li>
                                    <p class="pic">
                                        <img src="../register_img/H203-2991.jpg" alt="百乐 按制式磨摩擦 (蓝) 0.7mm  LFBK-23F-L" width="50px" height="50px">
                                    </p>
                                    <p class="bd_name">
                                        百乐 按制式磨摩擦 (蓝) 0.7mm  LFBK-23F-L
                                    </p>
                                    <p class="price">¥  21.00</p>
                                    <i class="icon_0 icon_1"></i>
                                </li>
                                <li>
                                    <p class="pic">
                                        <img src="../register_img/H203-3002.jpg" alt="百乐 按制式磨摩擦 (红) 0.7mm  LFBK-23F-R" width="50px" height="50px">
                                    </p>
                                    <p class="bd_name">百乐 按制式磨摩擦 (红) 0.7mm  LFBK-23F-R</p>
                                    <p class="price">¥  21.00</p>
                                    <i class="icon_0 icon_2"></i>
                                </li>
                                <li>
                                    <p class="pic">
                                        <img src="../register_img/H203-3013.jpg" alt="百乐 开拓王走珠笔 (黑) 0.5mm  BXRT-V5-B" width="50px" height="50px">
                                    </p>
                                    <p class="bd_name">
                                        百乐 开拓王走珠笔 (黑) 0.5mm  BXRT-V5-B
                                    </p>
                                    <p class="price">¥  14.50</p>
                                    <i class="icon_0 icon_3"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mrank_box">
                        <div class="hd">
                            <h2>最低价格</h2>
                        </div>
                        <div class="bd">
                            <ul>
                                <li>
                                    <p class="pic">
                                        <img src="../register_img/H800-2498.jpg" alt="爱好 直液式中性笔 (黑) 0.5mm  AH-2000A" width="50px" height="50px">
                                    </p>
                                    <p class="bd_name">
                                        爱好 直液式中性笔 (黑) 0.5mm  AH-2000A
                                    </p>
                                    <p class="price">¥  0.60</p>
                                    <i class="icon_0 icon_1"></i>
                                </li>
                                <li>
                                    <p class="pic">
                                        <img src="../register_img/H800-2520.jpg" alt="爱好 直液式中性笔 (蓝) 0.5mm  AH-2000A" width="50px" height="50px">
                                    </p>
                                    <p class="bd_name">爱好 直液式中性笔 (蓝) 0.5mm  AH-2000A</p>
                                    <p class="price">¥  0.60</p>
                                    <i class="icon_0 icon_2"></i>
                                </li>
                                <li>
                                    <p class="pic">
                                        <img src="../register_img/H202-6072.jpg" alt="晨光 盖帽式中性笔 (蓝) 0.5mm  Q7" width="50px" height="50px">
                                    </p>
                                    <p class="bd_name">
                                        晨光 盖帽式中性笔 (蓝) 0.5mm  Q7
                                    </p>
                                    <p class="price">¥  1.20</p>
                                    <i class="icon_0 icon_3"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="miaoshu fr">
                <h3>商品信息</h3>
                <ul class="spec">
                    <li class="spec-m">
                        <p>${dt.Nid}</p>
                    </li>
                    <li class="spec-m">
                        <p>${dt.type}</p>
                    </li>
                    <li class="spec-m">
                        <p>${dt.miaoshu}</p>
                    </li>
                </ul>
                <br>
                <br>
                <br>
                <div class="imgCon">
                    <img src="../register_img/product-show.jpg" alt="" class="spzs">
                    <img src="${dt.url2}" alt="" class="big_img">
                </div>
            </div>
        </div>
            `,$(".content_1").html(str)}()}else alert("参数有误"),location.href="../pages/list.html"}else alert("非法进入，请选择商品"),location.href="../pages/list.html";function st1(){var s=`<span class="cart_j">${cartList4.length}</span>`;num_1[0].innerHTML=s}box.onclick=function(e){var e=e||window.event,target=e.target||srcElement,cartList4,cartList4,bool,inp,inp;"buy_c"==target.className&&(cartList4=localStorage.getItem("cartList4")||[],0<cartList4.length?(cartList4=eval("("+cartList4+")"),bool=!0,cartList4.forEach(s=>{dt.id==s.id&&(bool=!1,s.number++,localStorage.setItem("cartList4",JSON.stringify(cartList4)))}),bool&&(dt.number=1,cartList4.push(dt),localStorage.setItem("cartList4",JSON.stringify(cartList4)))):(dt.number=1,cartList4.push(dt),localStorage.setItem("cartList4",JSON.stringify(cartList4)))),"+"==target.innerHTML&&(inp=document.querySelector(".jishu"),val=parseInt(inp.value),val++,inp.value=val,console.log(val)),"-"==target.innerHTML&&(inp=document.querySelector(".jishu"),val=parseInt(inp.value),val<=1?val=1:val--,inp.value=val)},setTimeout(function(){var a=document.getElementById("mark1"),e=document.getElementById("big_l"),s=document.getElementById("big_r"),c=document.getElementById("pic1");e.onmouseover=function(){a.style.display="block",s.style.display="block"},e.onmouseout=function(){a.style.display="none",s.style.display="none"},e.onmousemove=function(s){var i=(s=s||window.event).pageX-e.offsetLeft-parseInt(a.offsetWidth/2),l=s.pageY-e.offsetTop-parseInt(a.offsetHeight/2),t=e.offsetWidth-a.offsetWidth,s=e.offsetHeight-a.offsetHeight,i=i<=0?(a.style.left="0px",0):t<=i?(a.style.left=t+"px",t):(a.style.left=i+"px",i),l=l<=0?(a.style.top="0px",0):s<=l?(a.style.top=s+"px",s):(a.style.top=l+"px",l);c.style.left=-2*i+"px",c.style.top=-2*l+"px"}},100),st1();