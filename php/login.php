<?php
    //  如果前端是以get请求的方式传递数据过来 那么久使用$_GET['参数名字']
    //  如果前端是以post请求的方式传递数据过来 那么久使用$_POST['参数名字'] 
    $user = $_POST['username']; 
    $pass = $_POST['password'];


    // 去数据库中比配数据，是否有传递的用户名和密码
    $con = mysqli_connect('localhost','root','123456','duoshangwang');

    // 整体SQL语句用双引号引起来，字段 和 表明用反引号引起来，字符串和变量用单引号，数字直接写
    $sql = "SELECT *  FROM `user` WHERE `username` = '$user' AND `password` = '$pass'";
    
    $res = mysqli_query($con,$sql);

    if(!$res){
        die('数据库链接错误' . mysqli_error($con));
    }
   
    $arr = array();
    $row = mysqli_fetch_assoc($res);

    while($row){
        array_push($arr,$row);
        $row = mysqli_fetch_assoc($res);
    }

    // 如果没有查询到值 $arr 为空数组
    if($arr){
        print_r('登录成功');
        header('location:../html/index.html');
    }else{
        print_r('用户名或者密码错误,请重新登录');
        
    }
?>