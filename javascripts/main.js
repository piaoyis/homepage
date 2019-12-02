// 页面初始化
$(function() {
    console.log('this is a alert');

    // 移动端导航样式
    $('#nav-bar-mb')
        .on('click', function() {
            // $('#nav-bar-mb-list').toggleClass('active')
            $('#setting').toggleClass('active')
        })

    // 设置菜单的相关事件
    $('#setting')
        // 阻止弹出菜单的touchmove事件， 也就是不让它冒泡
        .on('touchmove', function(e) {
            // console.log('xxx', e, e.stopPropagation);
            e.stopPropagation();
            return false;
        })
        .on('touchmove', '.setting-box', function(e) {
            console.log('内部事件')
        })
        // 如果单机外侧空白内容 则触发开关
        .on('touchstart', function() {
            $('#setting').toggleClass('active');
        })
        .on('touchstart', '.setting-box', function(e) {
            console.log('内部单机事件');
            e.stopPropagation();
        })
})
