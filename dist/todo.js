(function(){
    var itemsLeft = 0,  //剩余事项个数
        itemsArr = [],  //事项数组
        listType = 'all',   //当前列表是为All、Active还是Completed
        $main,
        $footer;
    $(function(){
        $main = $('#main');
        $footer = $('#footer');
        //输入框回车添加事项
        $('#new_todo').keydown(function(e){
            if(e.keyCode == 13 && $(this).val() != ''){
                var rand = Math.random();
                if(listType == 'all' || listType == 'active'){
                    var tmp = '<li data-id="'+ rand +'">'
                        +   '<div>'
                        +   '<input type="checkbox" class="toggle">'
                        +   '<label>'+ $(this).val() +'</label>'
                        +   '<button class="destroy"></button>'
                        +   '</div>'
                        + '</li>';
                    $('#todo_list').append(tmp);
                }
                //把新事项加入到数组
                var obj = {
                    value: $(this).val(),
                    id: rand,  //随机数作为id
                    type: 0 //未完成标记
                };
                itemsArr.push(obj);
                $('#todo_count').find('strong').html(++itemsLeft);
                //如果main隐藏则设置为显示
                if(!$main.is(':visible')){
                    $main.show();
                    $footer.show();
                }
                $(this).val('');    //清空输入框
            }
        });
    }).on('click', '.toggle', function(){
        //点击事项，标记完成或取消
        var $li = $(this).parents('li');
        var randomId = $li.data('id');
        if($(this).is(':checked') && !$li.hasClass('completed')){
            $li.addClass('completed');

            $('#todo_count').find('strong').html(--itemsLeft);  //剩下数量减一
            //设置该项的状态为已完成
            itemsArr.forEach(function(item, idx){
                if(item.id == randomId){
                    itemsArr[idx].type = 1;
                    return false;
                }
            })
        }else {
            $li.removeClass('completed');
            //设置该项的状态为未完成
            itemsArr.forEach(function(item, idx){
                if(item.id == randomId){
                    itemsArr[idx].type = 0;
                    return false;
                }
            });
        }

    }).on('click', '#filters a', function(){
        //切换All、Active、Completed
        if($(this).hasClass('selected')){
            return false;
        }else {
            $('#filters').find('a').removeClass('selected');
            $(this).addClass('selected');
            listType = $(this).data('id');  //更改全局变量--列表类型
            var lists = []; //用于放置新列表list
            itemsArr.forEach(function (item, idx) {
                if(listType == 'active'){
                    if(item.type == 0)
                        lists.push(getList(item));
                }else if(listType == 'completed'){
                    if(item.type == 1)
                        lists.push(getList(item));
                }else{
                    lists.push(getList(item));
                }
            });
            $('#todo_list').html(lists.join(''));   //将lists数组转字符串，放入todo-list
        }
    }).on('click', '.destroy', function(){
        //点击删除
        var $li = $(this).parents('li');
        var randomId = $li.data('id');
        var startArr = [],
            endArr = [],
            len = itemsArr.length;
        itemsArr.forEach(function(item, idx){
            if(item.id == randomId){
                startArr = itemsArr.splice(0, idx+1);
                endArr = startArr.splice(0, idx);

                if(item.type == 0){
                    $('#todo_count').find('strong').html(--itemsLeft);  //剩下数量减一
                }
                return false;
            }
        });
        itemsArr = endArr.concat(itemsArr);
        $li.remove();
    }).on('click', '#clear_completed', function(){
        //清除已完成的事项

    });

    function getList(item) {
        return  '<li'+ (item.type == 1 ? ' class="completed"' : '') +' data-id="'+ item.id +'">'
            +   '<div>'
            +   '<input type="checkbox" class="toggle"'+ (item.type == 1 ? ' checked' : '') +'>'
            +   '<label>'+ item.value +'</label>'
            +   '<button class="destroy"></button>'
            +   '</div>'
            +   '</li>';
    }
})();