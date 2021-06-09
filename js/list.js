var pagination=document.querySelector(".pagination"),cartList4=localStorage.getItem("cartList4"),num_1=document.querySelectorAll(".sp1"),cartList4=eval("("+cartList4+")");(async function(){var arr=await promiseAjax({url:"../php/list.php"}),arr=eval("("+arr+")"),o1={pageInfo:{pagenum:1,pagesize:12,totalsize:arr,length:length,totalpage:Math.ceil(arr.length/12)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}};new Pagination(pagination,o1,t=>{var t=arr.slice(12*(t-1),12*t),a="";t.forEach(t=>{a+=`
            <li class="goods_li">
                            <p class="goods_item">
                                <a href="../pages/details.html?id=${t.id}">
                                    <img src="${t.url2}" alt="" class="gd_img">
                                </a>
                            </p>
                            <h3 class="goods_name">
                                <a href="">${t.title}</a>
                            </h3>
                            <p class="goods_sku">商品编号：${t.bianhao}</p>
                            <p class="goods_price">
                                <span class="rmb">￥</span>
                                <span class="rmb mr-9">${t.price}</span>
                            </p>
                            <p class="goods_buy">
                                <span  class="btn fl" id="btn1">-</span>
                                <input type="text" name="text" value="1" class="jishu fl">
                                <span class="btn fl">+</span>
                                <a href="" class="fav">收藏</a>
                                <a class="buy" data-id="${t.id}">购买</a>
                            </p>
                        </li>
            `}),$(".clearfix").html(a)})})();var box=document.querySelector(".clearfix");function st1(){var t=`<span class="cart_j">${cartList4.length}</span>`;num_1[0].innerHTML=t}box.onclick=function(e){var e=e||window.event,target=e.target||e.srcElement,num,num,num2,id;"+"==target.innerHTML&&(num=$(target).prev()[0].value,num++,$(target).prev()[0].value=num),"-"==target.innerHTML&&(num=$(target).next()[0].value,num<=1?num=1:num--,$(target).next()[0].value=num),"购买"==target.innerHTML&&(cartList4=localStorage.getItem("cartList4")||[],num2=$(target).prev().prev().prev()[0].value,id=parseInt(target.getAttribute("data-id")),async function(){var bool2;dt=await promiseAjax({url:"../php/cart.php",data:"id="+id}),dt=eval("("+dt+")"),console.log(dt),0<cartList4.length?(cartList4=eval("("+cartList4+")"),bool2=!0,cartList4.forEach(t=>{dt.id==t.id&&(bool2=!1,t.number=num2,localStorage.setItem("cartList4",JSON.stringify(cartList4)),cart1(),st1())}),bool2&&(dt.number=num2,cartList4.push(dt),localStorage.setItem("cartList4",JSON.stringify(cartList4)),cart1(),st1())):(dt.number=num2,cartList4.push(dt),localStorage.setItem("cartList4",JSON.stringify(cartList4)),cart1(),st1())}())},st1();