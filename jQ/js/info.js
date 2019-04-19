 $('.sub').click(function(){
          var oldNum = $('.number').val()*1
          var newNum = oldNum - 1
          $('.number').val(newNum)
          if(newNum <=1){
            //禁用减法按钮 true 或 false 不用加引号
            $(this).attr('disabled',true)
          }
       })
        //因为我们通过js 获取页面上的文本内容或者value获取的都是字符，并不是数字直接进行数学运算会出问题
        //所以将获取的结果直接进行 *1 运算，就会变成数字，方便之后的数学运算
        $('.add').click(function(){
          //事件内部声明的变量事件外面使用不了
          var oldNum = $('.number').val()*1
          if(oldNum ==1){
            //因为减法按钮启用一次就够了 所以价格判断
            $('.sub').attr('disabled',false)
          }
          var newNum = oldNum + 1
          $('.number').val(newNum)
       })

$("section .dere .button a:last-child").click(function(){
      $("section .review").css("display","block");
      $(this)
         .siblings("section .description")
         .css("display","none");
})

$("section .choice .mid ul li:first-child").click(function(){
      $('.list').toggle(10)

})