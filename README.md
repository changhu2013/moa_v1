moa
======
该程序基于angurlar.js开发自定义指令
moaDriective
------------
#### moaTable 表格
> 配置参数：

> * dataurl　获取数据的URL

> * class    主面板样式类

> * title    标题

> * headers  表头 可以不写  eg: '编码,名称'

> * cols     列字段  必须写 eg: 'code,name'

> * paging   分页 可不写, 默认为 more 即点击按钮显示更多的方式加载数据

> * limit　  分页时，每页条数，可不写，默认为10

> * link     数据链接，可不写，eg: '/user/:code' 点击数据行页面跳转到 /user/:code 其中:code为所在行的数据的属性code值



#### moaMedialist
> 配置参数

> * dataurl　获取数据的URL

> * class    主面板样式类

> * title    标题

> * mediaobject 图片属性名

> * mediaheading 头信息属性名

> * mediabody  内容信息属性名

> * paging   分页 可不写, 默认为 more 即点击按钮显示更多的方式加载数据

> * limit　  分页时，每页条数，可不写，默认为10

> * link     数据链接，可不写，eg: '/user/:code' 点击数据行页面跳转到 /user/:code 其中:code为所在行的数据的属性code值


#### moaTree

> * dataurl　获取数据的URL

> * class    主面板样式类

> * title    标题

> * nodeicon 节点图标样式 可不写，无默认值

> * expandicon 节点展开图标样式 可不写  默认为 glyphicon glyphicon-plus

> * collapseicon  节点合并图标样式 可不写 默认为 glyphicon glyphicon-minus

> * link     数据链接，可不写，eg: '/user/:code' 点击数据行页面跳转到 /user/:code 其中:code为所在行的数据的属性code值

> * 展开节点向后台发送异步请求获取子节点，传入后台的参数名为 pid 即父项 id，根节点的 id 默认为 root

> * 节点属性说明

>>  id : 节点id， 必须有，且唯一，展开节点时，向后台发送参数 pid，其值为节点id

>>  leaf : 是否是叶子节点，boolean

>>  children : 子节点数组


