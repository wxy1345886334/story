var cart_d=document.querySelector(".cart_d"),smal=document.querySelector(".smal"),smal1=document.querySelector(".smal1"),smal2=document.querySelector(".smal2"),name1=getCookie("name"),cartList4=localStorage.getItem("cartList4");function st1(){var t=`<span class="cart_j">${cartList4.length}</span>`;num_1[0].innerHTML=t}function cart1(){var a,e,r,s,i;0<=cartList4.length&&(r=e=a="",i=s=0,cartList4.forEach(t=>{t.select&&s++,i+=parseInt(parseFloat(t.price)*parseInt(t.number)),a+=`
            <li class="cla">
            <div class="photo fl">
                <a href="../pages/details.html?id=${t.id}">
                    <img src="${t.url2}">
                </a>
            </div>
            <div class="p_name fl">
                <a href="../pages/details.html?id=${t.id}">${t.title}</a>
            </div>
            <div class="p_price fr">
                <p>¥ ${t.price}x${t.number}</p>
                <span class="f12" data-id="${t.id}">删除</span>
            </div>
        </li>
            `,e=`
            <i>${s}</i>
            `,r=`
            <strong>${i}</strong>
            `}),smal.innerHTML=a,smal1.innerHTML=e,smal2.innerHTML=r)}cartList4=eval("("+cartList4+")"),$(".gwc-t").mouseover(function(){cart_d.style.display="block"}),$(".gwc-t").mouseout(function(){cart_d.style.display="none"}),name1&&cart1(),cart_d.onclick=function(t){var a,t=(t=t||window.event).target||t.srcElement;"删除"==t.innerHTML&&(a=t.getAttribute("data-id"),cartList4=cartList4.filter(t=>t.id!=a),localStorage.setItem("cartList4",JSON.stringify(cartList4)),st1(),cart1())};