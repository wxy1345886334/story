<?php
header("Access-Control-Allow-Origin:*"); 
header("content-type:text/html;charset=utf-8");
//获取传入的参数
$cb=$_POST['cb'];
$wd=$_POST['wd'];

//拼接地址
$str="http://suggestion.baidu.com/su?cb=".$cb."&wd=".$wd;
//根据地址，获取改地址中的数据
$data=file_get_contents($str);
//把当前获取的数据，设置编码
$str1=iconv("GBK","UTF-8",$data);
//把结果响应给客户端
echo $str1;
?>