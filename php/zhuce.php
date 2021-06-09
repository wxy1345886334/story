<?php
include "./datas.php";

// //获取传入的参数
$u=$_POST['u'];
$p=$_POST['p'];

//编写sql语句
$sql="insert into user1(username,password) values('$u','$p')";
//执行sql语句
$result=mysqli_query($link,$sql);
//判断当前数据是否添加成功
if($result){    
     echo 1;
}else{
    echo "<script>alert('注册失败');location.href='../pages/register.html'</script>";
}
//关闭数据库连接
mysqli_close($link);
?>