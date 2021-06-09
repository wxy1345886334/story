var cartList4=localStorage.getItem("cartList4"),name1=getCookie("name"),box=document.querySelector(".container1"),cart=document.querySelector(".cart"),xuans=document.getElementsByName("xuan"),deliver=document.querySelector(".deliver"),val,xiaoji,ar2,dt,url;async function abc(){var arr=await promiseAjax({url:"../php/list.php"}),arr=eval("("+arr+")");ar2=arr.slice(0,12);var str="";ar2.forEach(t=>{str+=`
        <li class="cla">
        <a href="../pages/details.html?id=${t.id}""><img src="${t.url2}" alt=""></a>
        <a href="" class="p_title">
            <span>${t.title}</span>
        </a>
        <div class="yj_price"></div>
        <div class="price_1">
            现价：￥
            <span>${t.price}</span>
        </div>
        <input type="button" name="add_c" class="add_cart" value="加入购物车" data-id=${t.id}>
    </li>
        `}),$(".p_list").html(str)}function show1(){var e,i,l,r;0<cartList4.length&&(l=i=e="",r=cartList4.every(t=>1==t.select),cartList4.forEach(t=>{var a=t.price,a=parseFloat(a.split("/")[0]);xiaoji=(a*t.number).toFixed(2),e+=`
        <ul class="cart_center cart_top cla">
            <li>
            <input type="checkbox" name="xuan" class="quan" data-id=${t.id} ${1==t.select?"checked":""}>
            </li>
            <li class="tl">
                <div class="li_l fl">
                    <img src="${t.url2}">
                </div>
                <div class="li_r fl">
                    <p>${t.title}</p>
                    <p>&nbsp;&nbsp;单位:支</p>
                </div>
            </li>
            <li>${t.bianhao}</li>
            <li><span>¥</span><span>${t.price}</span></li>
            <li><span>0</span></li>
            <li>有库存</li>
            <li>
                <div class="bleft1">
                    <span  class="btn fl" id="btn1" data-id=${t.id}>-</span>
                    <input type="text" name="text" value="${t.number}" class="jishu fl">
                    <span class="btn fl" data-id=${t.id}>+</span>
                </div>
            </li>
            <li><span>¥</span><span class="xiaoji">${xiaoji}</span></li>
            <li class="last1">
                <p>
                    <span href="">收藏</span>
                </p>
                <p>
                    <span href="" data-id=${t.id} class="cur">删除</span>
                </p>
            </li>
        </ul>
            `,i=`
            <label>
                <input type="checkbox" name="quan" class="quan" ${r?"checked":""}>
                全选
            </label>
            `,l=`
            <input type="checkbox" name="quan1" ${r?"checked":""}>
            <span>&nbsp;全选</span>
            `}),box.innerHTML=e,$(".qx1").html(i),$(".quan1").html(l))}function total(){var a=0,e=0;return cartList4.forEach(t=>{1==t.select&&(a+=t.number,e+=parseFloat(t.price)*parseInt(t.number))}),[a,e]}function zongji(){var a=0;return cartList4.forEach(t=>{a+=parseFloat(t.price)*parseInt(t.number)}),a}function settlement1(){var t=$(".total_1").html();alert("您需要支付"+t+"元"),cartList4.forEach(a=>{1==a.select&&(cartList4=cartList4.filter(t=>t.id!=a.id))}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),$(".yxzs").html(parseFloat(total()[0]).toFixed(2)),$(".heji").html(parseFloat(total()[1]).toFixed(2)),$(".total_1").html(parseFloat(zongji()).toFixed(2)),$(".type").html(xuans.length),show1()}abc(),name1?(cartList4=eval("("+cartList4+")"),show1()):(alert("尚未登录，请先登录"),url=location.href,location.href="../pages/login.html?newUrl="+url),cart.onclick=function(t){var a,e=(t=t||window.event).target||t.srcElement;"+"==e.innerHTML&&(a=e.getAttribute("data-id"),cartList4.forEach(t=>{t.id==a&&t.number++}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1(),$(".yxzs").html(parseFloat(total()[0]).toFixed(2)),$(".heji").html(parseFloat(total()[1]).toFixed(2)),$(".total_1").html(parseFloat(zongji()).toFixed(2))),"-"==e.innerHTML&&(a=e.getAttribute("data-id"),cartList4.forEach(t=>{t.id==a&&(t.number<=1?t.number=1:t.number--)}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1(),$(".yxzs").html(parseFloat(total()[0]).toFixed(2)),$(".heji").html(parseFloat(total()[1]).toFixed(2)),$(".total_1").html(parseFloat(zongji()).toFixed(2))),"quan"!=e.name&&"quan1"!=e.name||(cartList4.forEach(t=>{e.checked?t.select=1:t.select=0}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1(),$(".yxzs").html(parseFloat(total()[0]).toFixed(2)),$(".heji").html(parseFloat(total()[1]).toFixed(2))),"xuan"==e.name&&(a=e.getAttribute("data-id"),cartList4.forEach(t=>{t.id==a&&(1==t.select?t.select=0:t.select=1)}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1(),$(".yxzs").html(parseFloat(total()[0]).toFixed(2)),$(".heji").html(parseFloat(total()[1]).toFixed(2))),"删除"==e.innerHTML&&(a=e.getAttribute("data-id"),cartList4=cartList4.filter(t=>t.id!=a),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1(),$(".yxzs").html(parseFloat(total()[0]).toFixed(2)),$(".heji").html(parseFloat(total()[1]).toFixed(2)),$(".total_1").html(parseFloat(zongji()).toFixed(2)),$(".type").html(xuans.length)),"批量删除"==e.innerHTML&&(cartList4.forEach(a=>{1==a.select&&(cartList4=cartList4.filter(t=>t.id!=a.id))}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1(),$(".yxzs").html(parseFloat(total()[0]).toFixed(2)),$(".heji").html(parseFloat(total()[1]).toFixed(2)),$(".total_1").html(parseFloat(zongji()).toFixed(2)),$(".type").html(xuans.length))},$(".yxzs").html(parseFloat(total()[0]).toFixed(2)),$(".heji").html(parseFloat(total()[1]).toFixed(2)),$(".total_1").html(parseFloat(zongji()).toFixed(2)),$(".type").html(xuans.length),deliver.onclick=function(e){var e=e||window.event,target=e.target||srcElement,id;async function aaa(){var bool1;dt=await promiseAjax({url:"../php/cart.php",data:"id="+id}),dt=eval("("+dt+")"),0<cartList4.length?(cartList4=eval("("+cartList4+")"),bool1=!0,cartList4.forEach(t=>{dt.id==t.id&&(bool1=!1,t.number++,localStorage.setItem("cartList4",JSON.stringify(cartList4)))}),bool1&&(dt.number=1,cartList4.push(dt),localStorage.setItem("cartList4",JSON.stringify(cartList4)))):(dt.number=1,cartList4.push(dt),localStorage.setItem("cartList4",JSON.stringify(cartList4))),show1(),$(".yxzs").html(parseFloat(total()[0]).toFixed(2)),$(".heji").html(parseFloat(total()[1]).toFixed(2)),$(".total_1").html(parseFloat(zongji()).toFixed(2)),$(".type").html(xuans.length)}"add_c"==target.name&&(cartList4=localStorage.getItem("cartList4")||[],id=parseInt(target.getAttribute("data-id")),aaa())};