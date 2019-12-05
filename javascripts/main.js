// 页面初始化
$(function() {
    // 监听文档可视情况发生变话
    $(document)
        // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/visibilityState
        .on('visibilitychange', function() {
            let static = document.visibilityState,
                title = '';

            switch (static) {
                case 'hidden':
                    $(document).data('title', document.title);
                    title = 'o(*￣▽￣*)o 正经人在这等你回来'
                    break;
                case 'visible':
                    title = $(document).data('title');
                    break;
                default:

            }
            // 修改页面标题
            $(document).attr('title', title);
            // console.log('监听页面是否呗切换', title, document.visibilityState);
        })

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
