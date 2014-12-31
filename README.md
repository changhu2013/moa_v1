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

<pre><code>
<moa-table dataurl="/users" limit="10" class="panel-primary" title="物料信息"
    headers="编码,名称" cols="code,name" link="/users/:code">
</moa-table>
</code></pre>




#### moaForm


#### moaPhoto
