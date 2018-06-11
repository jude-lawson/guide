webpackJsonp([0xec563a5694ea],{4439:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Output</h2>\n<p>There are 4 most common ways you will be outputting your data through console. These will be used the most part of your development process.</p>\n<h4><code>console.log</code></h4>\n<p>It is the most common and used way to output the data. It’s a common practice to insert a couple of these between statements to uderstand how the data is flowing and processed. Also, you can use <code>debugger</code> or breakpoints in devtools to do the same without polluting your code.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> numbers  <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nnumbers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>number <span class="token operator">+</span> <span class="token string">\' is divisible by 2\'</span><span class="token punctuation">,</span> number<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4><code>console.warn</code></h4>\n<p>As you guessed by the name this is used for showing warnings, and it’s typical yellow color differentiates it from error red &#x26; <code>console.log</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isAdult</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">\'You are not an adult\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h4><code>console.error</code></h4>\n<p>As you can guess, this is used when throwing an exception or in error in code. Gives you the red error message to grab attention fast.</p>\n<h4><code>console.table</code></h4>\n<p>Suppose you got a list of items or movies in a json object and you want to check that out in table format, then <code>console.table</code> is your best bet. It automatically detects rows and column headers from data.</p>\n<p><em>Try to run the code below in your console</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">"colors"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token string">"color"</span><span class="token punctuation">:</span> <span class="token string">"black"</span><span class="token punctuation">,</span>\n      <span class="token string">"category"</span><span class="token punctuation">:</span> <span class="token string">"hue"</span><span class="token punctuation">,</span>\n      <span class="token string">"type"</span><span class="token punctuation">:</span> <span class="token string">"primary"</span><span class="token punctuation">,</span>\n      <span class="token string">"rgba"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token string">"hex"</span><span class="token punctuation">:</span> <span class="token string">"#000"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token string">"color"</span><span class="token punctuation">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span>\n      <span class="token string">"category"</span><span class="token punctuation">:</span> <span class="token string">"value"</span><span class="token punctuation">,</span>\n      <span class="token string">"rgba"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token string">"hex"</span><span class="token punctuation">:</span> <span class="token string">"#FFF"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token string">"color"</span><span class="token punctuation">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span>\n      <span class="token string">"category"</span><span class="token punctuation">:</span> <span class="token string">"hue"</span><span class="token punctuation">,</span>\n      <span class="token string">"type"</span><span class="token punctuation">:</span> <span class="token string">"primary"</span><span class="token punctuation">,</span>\n      <span class="token string">"rgba"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token string">"hex"</span><span class="token punctuation">:</span> <span class="token string">"#FF0"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token string">"color"</span><span class="token punctuation">:</span> <span class="token string">"blue"</span><span class="token punctuation">,</span>\n      <span class="token string">"category"</span><span class="token punctuation">:</span> <span class="token string">"hue"</span><span class="token punctuation">,</span>\n      <span class="token string">"type"</span><span class="token punctuation">:</span> <span class="token string">"primary"</span><span class="token punctuation">,</span>\n      <span class="token string">"rgba"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token string">"hex"</span><span class="token punctuation">:</span> <span class="token string">"#00F"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token string">"color"</span><span class="token punctuation">:</span> <span class="token string">"yellow"</span><span class="token punctuation">,</span>\n      <span class="token string">"category"</span><span class="token punctuation">:</span> <span class="token string">"hue"</span><span class="token punctuation">,</span>\n      <span class="token string">"type"</span><span class="token punctuation">:</span> <span class="token string">"primary"</span><span class="token punctuation">,</span>\n      <span class="token string">"rgba"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token string">"hex"</span><span class="token punctuation">:</span> <span class="token string">"#FF0"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token string">"color"</span><span class="token punctuation">:</span> <span class="token string">"green"</span><span class="token punctuation">,</span>\n      <span class="token string">"category"</span><span class="token punctuation">:</span> <span class="token string">"hue"</span><span class="token punctuation">,</span>\n      <span class="token string">"type"</span><span class="token punctuation">:</span> <span class="token string">"secondary"</span><span class="token punctuation">,</span>\n      <span class="token string">"rgba"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token string">"hex"</span><span class="token punctuation">:</span> <span class="token string">"#0F0"</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>colors<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Also, you can control &#x26; filter the type of output you wish to see in console.</p>\n<ol>\n<li>All</li>\n<li>Verbose</li>\n<li>Warning</li>\n<li>Errors</li>\n</ol>\n<h4>More Information:</h4>\n<ul>\n<li><a href=\'https://developers.google.com/web/tools/chrome-devtools/console/console-reference\' target=\'_blank\' rel=\'nofollow\'>Complete reference of console object by Google</a></li>\n<li><a href=\'https://developer.mozilla.org/en-US/docs/Web/API/Console\' target=\'_blank\' rel=\'nofollow\'>Console MDN</a></li>\n</ul>',fields:{slug:"/javascript/output/"},frontmatter:{title:"Output"}}},pathContext:{slug:"/javascript/output/"}}}});
//# sourceMappingURL=path---javascript-output-614d91a24daac78724a0.js.map