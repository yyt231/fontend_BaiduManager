/**
 * Created by Tony on 2016/11/30.
 */
$(document).ready(function(){
    refereshNews('精选');
    $('nav a').click(function(e){
        e.preventDefault();
        var type=$(this).text();
        refereshNews(type);
    });
});

function refereshNews(type){
    var $newsLists=$("article ul");
    $newsLists.empty();
    $.ajax({
        url:"/news",
        type:'get',
        data:{newstype:type},
        datatype:'json',
        success:function(data){
            console.log(data);
            data.forEach(function(item,index,array){

                var $list= $("<li></li>").addClass("news-list").prependTo($newsLists);
                var $newImg=$("<div></div>").addClass("news-img").appendTo($list);
                var $img=$("<img>").attr("src",item.newsimg).appendTo($newImg);
                var $newContent=$("<div></div>").addClass("news-content").appendTo($list);
                var $h1=$("<h1></h1>").html(item.newstitle).appendTo($newContent);
                var $p =$("<p></p>").appendTo($newContent);
                var time=item.newstime.split(' ')[0];
                var $newTime=$("<span></span>").addClass("news-time").html(time).appendTo($p);
                var $newSrc=$("<span></span>").addClass("news-src").html(item.newssrc).appendTo($p);
 
            });
        },
        failure:function(data){
            console.log(data);
        }
    });


    

    // var $list= $("<li></li>").addClass("news-list").prependTo($newsLists);
    // var $newImg=$("<div></div>").addClass("news-img").appendTo($list);
    // var $img=$("<img>").attr("src","img/img.JPG").appendTo($newImg);
    // var $newContent=$("<div></div>").addClass("news-content").appendTo($list);
    // var $h1=$("h1").html("1111").appendTo($newContent);
    // var $p =$("<p></p>").appendTo($newContent);
    // var $newTime=$("<span></span>").addClass("news-time").html("222").appendTo($p);
    // var $newSrc=$("<span></span>").addClass("news-src").html("3333").appendTo($p);
}