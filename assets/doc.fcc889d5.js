import{c as t,o as e,A as n}from"./vendor.80bf15c7.js";const o={class:"markdown-body"},d=n('<h1>ShortPassword 短密码组件</h1><h3>介绍</h3><p>短密码输入框，可用于输入密码、短信验证码等</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { ShortPassword } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(ShortPassword);\n\n</code></pre><h2>代码示例</h2><h3>公用片段</h3><pre><code class="language-html">&lt;nut-shortpassword\n  v-model:value=&quot;state.value&quot;\n  v-model:visible=&quot;state.visible&quot;\n  :no-button=&quot;state.noButton&quot;\n  :length=&quot;state.length&quot;\n  :error-msg=&quot;state.errorMsg&quot;\n  @change=&quot;methods.onChange&quot;\n  @complete=&quot;methods.onComplete&quot;\n  @ok=&quot;methods.onOk&quot;\n  @tips=&quot;methods.onTips&quot;&gt;\n&lt;/nut-shortpassword&gt;\n</code></pre><pre><code class="language-javascript">import { reactive, getCurrentInstance } from &#39;vue&#39;;\nsetup() {\n  let { ctx } = getCurrentInstance();\n  const state = reactive({\n    visible: false,\n    noButton: true,\n    value: &#39;&#39;,\n    errorMsg: &#39;&#39;,\n    length: 6\n  });\n  const methods = {\n    onChange(val: string) {\n      val &amp;&amp; ctx.$toast.text(val);\n    },\n    onOk(val: string) {\n      val &amp;&amp; ctx.$toast.text(val);\n      state.visible = false;\n    },\n    onComplete() {\n      \n    },\n    onTips() {\n      ctx.$toast.text(&#39;执行忘记密码逻辑&#39;);\n    }\n  };\n  return {\n    state,\n    methods\n  };\n}\n\n</code></pre><h3>基础用法</h3><pre><code class="language-html">&lt;nut-cell title=&quot;基础用法&quot; is-link @click=&quot;state.visible = true;&quot;&gt;&lt;/nut-cell&gt;\n</code></pre><h3>显示按钮组</h3><pre><code class="language-html">&lt;nut-cell title=&quot;显示按钮组&quot; is-link @click=&quot;state.visible = true;state.noButton = false;&quot;&gt;&lt;/nut-cell&gt;\n</code></pre><h3>自定义密码长度4</h3><pre><code class="language-html">&lt;nut-cell title=&quot;自定义密码长度4&quot; is-link @click=&quot;state.visible = true;state.length = 4;&quot;&gt;&lt;/nut-cell&gt;\n</code></pre><h3>忘记密码提示语事件回调</h3><pre><code class="language-html">&lt;nut-cell title=&quot;忘记密码提示语事件回调&quot; is-link @click=&quot;state.visible = true;&quot;&gt;&lt;/nut-cell&gt;\n</code></pre><h3>错误提示语</h3><pre><code class="language-html">&lt;nut-cell title=&quot;错误提示语&quot; is-link @click=&quot;state.visible = true;state.errorMsg = &#39;请输入正确密码&#39;;&quot;&gt;&lt;/nut-cell&gt;\n</code></pre><h3>Prop</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>String</td><td>请输入密码</td></tr><tr><td>desc</td><td>密码框描述</td><td>String</td><td>您使用了虚拟资产，请进行验证</td></tr><tr><td>tips</td><td>提示语</td><td>String</td><td>忘记密码</td></tr><tr><td>visible</td><td>是否展示短密码框</td><td>Boolean</td><td>false</td></tr><tr><td>value</td><td>密码初始值</td><td>String</td><td>‘’</td></tr><tr><td>no-button</td><td>是否隐藏底部按钮</td><td>Boolean</td><td>true</td></tr><tr><td>length</td><td>密码长度，取值为4~6</td><td>String</td><td></td></tr><tr><td>error-msg</td><td>错误信息提示</td><td>String</td><td>‘’</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>输入密码时触发事件</td><td>–</td></tr><tr><td>ok</td><td>点击确实时触发事件</td><td>value</td></tr><tr><td>complete</td><td>输入完成的回调</td><td>value</td></tr></tbody></table>',23),l={expose:[],setup:n=>(n,l)=>(e(),t("div",o,[d]))};export default l;
