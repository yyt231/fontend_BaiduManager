/**
 * Created by Tony on 2016/11/30.
 */
$(document).ready(function(){
    $newsTable=$("#newstable tbody");

    $('#btnsubmit').click(function(e){
        e.preventDefault();

        if($('#news-title').val()==="" ||$('#news-img').val()==="" ||$('#news-time').val()==="" ||$('news-src').val()==="" ){
                if($('#news-title').val()===""){
                    $('#news-title').parent().addClass('has-error');
                }else{
                    $('#news-title').parent().removeClass('has-error');
                }

                if($('#news-img').val()===""){
                    $('#news-img').parent().addClass('has-error');
                }else{
                    $('#news-img').parent().removeClass('has-error');
                }

                if($('#news-time').val()===""){
                    $('#news-time').parent().addClass('has-error');
                }else{
                    $('#news-time').parent().removeClass('has-error');
                }

                if($('#news-src').val()===""){
                    $('#news-src').parent().addClass('has-error');
                }else{
                    $('#news-src').parent().removeClass('has-error');
                }
        }else{
                var jsonNews={
                    newstitle:$('#news-title').val(),
                    newstype:$('#news-type').val(),
                    newsimg:$('#news-img').val(),
                    newstime:$('#news-time').val(),
                    newssrc:$('#news-src').val()
                    
                };
                // console.log(jsonNews);
                $.ajax({
                    url:'../insert.php',
                    type:'post',
                    data:jsonNews,
                    datatype:'json',
                    success:function(data){
                        console.log(data);
                        refereshNews();
                    }
                });
        }
    });
    //删除新闻
    var deleteId=null;
    $('#newstable').on('click','.btn-danger',function(e){
        $('#delModal').modal("show");
        deleteId=$(this).parent().prevAll().eq(3).html();
    });
    $('#delModal #confirmDelete').click(function(){
        
        if(deleteId){
            $.ajax({
                url:'../delete.php',
                type:'post',
                datatype:'json',
                data:{newsid:deleteId},
                success:function(data){
                    console.log(data);
                    $('#delModal').modal("hide");
                    refereshNews();
                }
            });
        }
    });
    // 修改新闻
    var updateId=null;
    $('#newstable').on('click','.btn-primary',function(e){
        $('#updateModal').modal("show");
        updateId=$(this).parent().prevAll().eq(3).html();
        $.ajax({
                url:'../cur.php',
                type:'get',
                datatype:'json',
                data:{newsid:updateId},
                success:function(data){
                    console.log(data);
                    $('#unews-type').val(data[0].newstype);
                    $('#unews-title').val(data[0].newstitle);
                    $('#unews-img').val(data[0].newsimg);
                    var utime=data[0].newstime.split(' ')[0];
                    $('#unews-time').val(utime);
                    $('#unews-src').val(data[0].newssrc);

                    // $('#updateModal').modal("hide");
                    // refereshNews();
                }
            });
    });

    $('#updateModal #confirmUpdate').click(function(){
        var jsonNews={
                    newsid:updateId,
                    newstitle:$('#unews-title').val(),
                    newstype:$('#unews-type').val(),
                    newsimg:$('#unews-img').val(),
                    newstime:$('#unews-time').val(),
                    newssrc:$('#unews-src').val()
                };
        if(updateId){
            $.ajax({
                url:'../update.php',
                type:'post',
                datatype:'json',
                data:jsonNews,
                success:function(data){
                    console.log(data);
                    $('#updateModal').modal("hide");
                    refereshNews();
                }
            });
        }
    });

    refereshNews();
    function  refereshNews(){
    $newsTable.empty();
    $.ajax({
        type:'get',
        url:'../getnews.php',
        datatype:'json',
        data:{newstype:""},
        success:function(data){
            console.log(data);
            data.forEach(function(item,index,array){
                var $tdid=$('<td>').html(item.id);
                var $tdtitle=$('<td>').html(item.newstitle);
                var $tdimg=$('<td>').html(item.newsimg);
                var $tdtype=$('<td>').html(item.newstype);
                var $tdtime=$('<td>').html(item.newstime);
                var $tdsrc=$('<td>').html(item.newssrc);
                var $tdctl=$('<td>');
                var $btnEdit=$('<button>').addClass('btn btn-primary btn-xs').html('修改');
                var $btnDel=$('<button>').addClass('btn btn-danger btn-xs').html('删除');
                $tdctl.append($btnEdit,$btnDel);
                var $row=$('<tr>');
                $row.append($tdid,$tdtype,$tdtitle,$tdtime,$tdctl);
                $newsTable.append($row);
            });
        }
    })
}
});
