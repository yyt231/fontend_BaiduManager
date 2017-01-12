<?php
	header("Content-type:application/json;charset=utf-8");
	require_once('db.php');
	if($link){
		$newsid=addslashes(htmlspecialchars($_POST['newsid']));
		$newsTitle=addslashes(htmlspecialchars($_POST['newstitle']));
		$newsType=addslashes(htmlspecialchars($_POST['newstype']));
		$newsImg=addslashes(htmlspecialchars($_POST['newsimg']));
		$newsTime=addslashes(htmlspecialchars($_POST['newstime']));
		$newsSrc=addslashes(htmlspecialchars($_POST['newssrc']));
		
		$sql="UPDATE `news` SET `newstype`='{$newsType}',`newstitle`='{$newsTitle}',`newsimg`='{$newsImg}',`newstime`='{$newsTime}',`newssrc`='{$newsSrc}' WHERE `id`='{$newsid}'";
		mysqli_query($link,'SET NAMES utf8');
		$result=mysqli_query($link,$sql);
		echo json_encode( array('success' => '成功' ));
	}
	mysqli_close($link);

?>