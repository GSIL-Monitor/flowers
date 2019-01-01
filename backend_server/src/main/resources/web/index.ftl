<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
    <title>花</title>
    <!-- 初始化样式库 -->
    <link rel="stylesheet" href="./css/normalize.css">
    <!-- 抢礼品公共样式 -->
    <link rel="stylesheet" href="css/style.css">
    <!-- 引入 WeUI -->
    <link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/1.1.2/weui.css" />

</head>

<body>

    <div id="container"></div>

    <!-- 使用 -->

    <script src="js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script src="js/js-yaml.min.js"></script>
    <script src="js/hrframe.js"></script>
    <script src="js/template-web.js"></script>
    <script src="js/my-app.js"></script>

    <script>

    system_init('${noncestr!}','${timestamp!}','${singature!}','${plugin!}','${data!}');
    </script>
</body>


</html>