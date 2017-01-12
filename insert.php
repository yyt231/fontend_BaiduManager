<?php
	header("Content-type:application/json;charset=utf-8");
	require_once('db.php');
	if($link){
		$newsTitle=$_POST['newstitle'];
		$newsType=$_POST['newstype'];
		$newsImg=$_POST['newsimg'];
		$newsTime=$_POST['newstime'];
		$newsSrc=$_POST['newssrc'];
		
		$sql="INSERT INTO `news` (`newstype`,`newstitle`,`newsimg`,`newstime`,`newssrc`)
							 VALUES ('{$newsType}','{$newsTitle}','{$newsImg}','{$newsTime}','{$newsSrc}')";
		// $sql="INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES (NULL, '测试', '测试title', 'img/img.JPG', '2016-11-30 00:00:00', 'demo')";
		mysqli_query($link,'SET NAMES utf8');
		$result=mysqli_query($link,$sql);
		echo json_encode( array('success' => '成功' ));
	}else{

	}

?>