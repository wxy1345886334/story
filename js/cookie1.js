var cookie=document.cookie,key=cookie.split("=")[0],value=cookie.split("=")[1],str="";value&&(str=`
    <p class="sz fl">${value}, 欢迎来到易优百！</p>
    <a class="dl exit fl" href="">退出</a>
    `,$(".hd-c").html(str).css("color","#e33b00")),$(".exit").click(function(){document.cookie=`${key}=${value};expires=Thu,18 Dec 2018 12:00:00 GMT;`});