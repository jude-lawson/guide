webpackJsonp([0x6a5dde511558],{4470:function(n,s){n.exports={data:{markdownRemark:{html:'<h1>Getters &#x26; Setters</h1>\n<p>Getters and Setters are used to effectively protect your data, particularly when creating classes. For each variable, the get method returns its value, while the set method sets the method.</p>\n<p>By convention, getters start with get, followed by the variable name, with the first letter of the variable name capitalized. Setters start with set, followed by the variable name, with the first letter of the variable name capitalized.</p>\n<p><strong><em>Example:</em></strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span>\n  <span class="token keyword">private</span> String color<span class="token punctuation">;</span>\n  \n  <span class="token comment" spellcheck="true">// Getter</span>\n  <span class="token keyword">public</span> String <span class="token function">getColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> color<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  \n  <span class="token comment" spellcheck="true">// Setter</span>\n  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setColor</span><span class="token punctuation">(</span>String c<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> c<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The getter method returns the value of the attribute.\nThe setter method takes a parameter and assigns it to the attribute.</p>\n<p>Once the getter and setter have been defined, we use it in our main:</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> stativ <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Vehicle v1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vehicle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  v1<span class="token punctuation">.</span><span class="token function">setColor</span><span class="token punctuation">(</span><span class="token string">"Red"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>v1<span class="token punctuation">.</span><span class="token function">getColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// Outputs "Red"</span>\n</code></pre>\n      </div>\n<hr>\n<p>Getters and setters allow control over the values.  You may validate the given value in the setter before actually setting the value.</p>',fields:{slug:"/java/getters-and-setters/"},frontmatter:{title:"Getters & Setters"}}},pathContext:{slug:"/java/getters-and-setters/"}}}});
//# sourceMappingURL=path---java-getters-and-setters-0c8adc52baa47a126d45.js.map