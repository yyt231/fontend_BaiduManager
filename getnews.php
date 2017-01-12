<?php
	header("Content-type:application/json;charset=utf-8");
	require_once('db.php');
	if($link){
		if($_GET['newstype']){
			$type=$_GET['newstype'];
			$sql="SELECT * FROM `news` WHERE `newstype`='{$type}'";
			mysqli_query($link,'SET NAMES utf8');
			$result=mysqli_query($link,$sql);

			$senddata = array();
			while ($row=mysqli_fetch_assoc($result)) {
			array_push($senddata,array(
						'id'=> $row['id'],
						'newstype'=> $row['newstype'],
						'newstitle'=> $row['newstitle'],
						'newsimg'=> $row['newsimg'],
						'newstime'=> $row['newstime'],
						'newssrc'=>$row['newssrc']
					));
			}
			echo json_encode($senddata);


		}else{
			$sql="SELECT * FROM `news`";
			mysqli_query($link,'SET NAMES utf8');
			$result=mysqli_query($link,$sql);

			$senddata = array();
			while ($row=mysqli_fetch_assoc($result)) {
			array_push($senddata,array(
						'id'=> $row['id'],
						'newstype'=> $row['newstype'],
						'newstitle'=> $row['newstitle'],
						'newsimg'=> $row['newsimg'],
						'newstime'=> $row['newstime'],
						'newssrc'=>$row['newssrc']
					));
			}
			echo json_encode($senddata);
		}
		
		
	}else{
		echo json_encode( array('message' => 'none' ));
	}
	mysqli_close($link);
// $arr = array(
// 		'newstype' => '精选',
// 		'newsimg'=> 'img/img.JPG',
// 		'newstitle'=>'啦啦啦来a',
// 		'newstime'=>'2016-02-28',
// 		'newssrc'=>'demo'
// 		);
// 	echo json_encode($arr);
?>