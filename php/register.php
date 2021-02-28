<?
    // 获取HTML传过来的用户名和密码
    $user = $_POST['username'];
    $pass = $_POST['password'];

    //连接数据库
    $con = mysqli_connect('localhost','root','123456','duoshangwang');



    //查询数据库中用户名以及密码与传进来的用户名以及密码是否匹配
    $sql = "SELECT * FROM `user` WHERE `username` = '$user' AND `password` = '$pass'";

    //执行sql语句
    $res = mysqli_query($con,$sql);

    if(!$res){
        die('数据库连接错误' . mysqli_error($con));
    }

    // 从结果集中取得一行作为关联数组。
    $row = mysqli_fetch_assoc($res);

    //如果$row有数据的时候表示以经存在该用户名
    if($row){
        print_r('该用户名已经存在，请重新输入');
    }else{
        $sql1 = "INSERT INTO `user` VALUES(null,'$user','$pass')";
        $res1 = mysqli_query($con,$sql1);

        print_r($res1);
        header('location:../html/login.html');
    }
?>