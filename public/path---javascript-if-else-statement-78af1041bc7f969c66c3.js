webpackJsonp([0x740aae739517],{4529:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Introduction</h2>\n<p>The <code>if</code> statement executes a statement if a specified condition is <code>true</code>. If the condition is <code>false</code>, another statement can be executed using the <code>else</code> statement.</p>\n<p><strong>Note:</strong> The <code>else</code> statement is optional.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span>\n    <span class="token comment" spellcheck="true">/* do something */</span>\n<span class="token keyword">else</span>\n    <span class="token comment" spellcheck="true">/* do something else */</span>\n</code></pre>\n      </div>\n<p>Multiple <code>if...else</code> statements can be chained to create an <code>else if</code> clause. This specifies a new condition to test and can be repeated to test multiple conditions, checking until a true statement is presented to execute.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>condition1<span class="token punctuation">)</span>\n    <span class="token comment" spellcheck="true">/* do something */</span>\n<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>condition2<span class="token punctuation">)</span>\n    <span class="token comment" spellcheck="true">/* do something else */</span>\n<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>condition3<span class="token punctuation">)</span>\n    <span class="token comment" spellcheck="true">/* do something else */</span>\n<span class="token keyword">else</span>\n    <span class="token comment" spellcheck="true">/* final statement */</span>\n</code></pre>\n      </div>\n<p><strong>Note:</strong> If you want to execute more than one statement in the <code>if</code>, <code>else</code> or <code>else if</code> part, curly braces are required around the statements:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">/* do */</span>\n    <span class="token comment" spellcheck="true">/* something */</span>\n    <span class="token comment" spellcheck="true">/* with multiple statements */</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">/* do something */</span>\n    <span class="token comment" spellcheck="true">/* else */</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else\' target=\'_blank\' rel=\'nofollow\'>MDN link</a> | <a href=\'https://msdn.microsoft.com/en-us/library/85yyde5c.aspx\' target=\'_blank\' rel=\'nofollow\'>MSDN link</a></p>\n<h2>Examples</h2>\n<p><strong>Using</strong> <code>if...else</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    z <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n    q <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span>\n    z <span class="token operator">=</span> <span class="token number">19</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><strong>Using</strong> <code>else if</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token string">"Small number"</span><span class="token punctuation">;</span>\n<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token string">"Medium number"</span><span class="token punctuation">;</span>\n<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token string">"Large number"</span><span class="token punctuation">;</span>\n<span class="token keyword">else</span> <span class="token punctuation">{</span>\n    flag <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token string">"Invalid number"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',fields:{slug:"/javascript/if-else-statement/"},frontmatter:{title:"If-Else Statement"}}},pathContext:{slug:"/javascript/if-else-statement/"}}}});
//# sourceMappingURL=path---javascript-if-else-statement-78af1041bc7f969c66c3.js.map