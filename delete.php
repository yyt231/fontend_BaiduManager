<?php
	header("Content-type:application/json;charset=utf-8");
	require_once('db.php');
	if($link){
		$newsid=$_POST['newsid'];
		mysqli_query($link,'SET NAMES utf8');
		$sql="DELETE FROM `news` WHERE `news`.`id`='{$newsid}'";
		
		$result=mysqli_query($link,$sql);
		echo json_encode( array('success' => '成功' ));
	}
	mysqli_close($link);
?>