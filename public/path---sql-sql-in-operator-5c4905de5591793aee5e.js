webpackJsonp([0xc5d8f138c63b],{6014:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>SQL In Operator</h2>\n<h2>IN Operator defined</h2>\n<p>The <code>IN</code> operator is used in a <code>WHERE</code> or <code>HAVING</code> (as part of the <code>GROUP BY</code>) to limit the selected rows to the items “IN” a list.</p>\n<p>Here is the current full student list to compare to the <code>WHERE</code> clause result set:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">select</span> studentID<span class="token punctuation">,</span> FullName<span class="token punctuation">,</span> sat_score<span class="token punctuation">,</span> rcd_updated <span class="token keyword">from</span> student<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>+-----------+------------------------+-----------+---------------------+\n| studentID | FullName               | sat_score | rcd_updated         |\n+-----------+------------------------+-----------+---------------------+\n|         1 | Monique Davis          |       400 | 2017-08-16 15:34:50 |\n|         2 | Teri Gutierrez         |       800 | 2017-08-16 15:34:50 |\n|         3 | Spencer Pautier        |      1000 | 2017-08-16 15:34:50 |\n|         4 | Louis Ramsey           |      1200 | 2017-08-16 15:34:50 |\n|         5 | Alvin Greene           |      1200 | 2017-08-16 15:34:50 |\n|         6 | Sophie Freeman         |      1200 | 2017-08-16 15:34:50 |\n|         7 | Edgar Frank "Ted" Codd |      2400 | 2017-08-16 15:35:33 |\n|         8 | Donald D. Chamberlin   |      2400 | 2017-08-16 15:35:33 |\n|         9 | Raymond F. Boyce       |      2400 | 2017-08-16 15:35:33 |\n+-----------+------------------------+-----------+---------------------+\n9 rows in set (0.00 sec)</code></pre>\n      </div>\n<p>Rows will be presented that have an SAT score in this list (1000, 2400):</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">select</span> studentID<span class="token punctuation">,</span> FullName<span class="token punctuation">,</span> sat_score<span class="token punctuation">,</span> rcd_updated\n<span class="token keyword">from</span> student\n<span class="token keyword">where</span> sat_score <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">2400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>+-----------+------------------------+-----------+---------------------+\n| studentID | FullName               | sat_score | rcd_updated         |\n+-----------+------------------------+-----------+---------------------+\n|         3 | Spencer Pautier        |      1000 | 2017-08-16 15:34:50 |\n|         7 | Edgar Frank "Ted" Codd |      2400 | 2017-08-16 15:35:33 |\n|         8 | Donald D. Chamberlin   |      2400 | 2017-08-16 15:35:33 |\n|         9 | Raymond F. Boyce       |      2400 | 2017-08-16 15:35:33 |\n+-----------+------------------------+-----------+---------------------+\n4 rows in set (0.00 sec)</code></pre>\n      </div>',fields:{slug:"/sql/sql-in-operator/"},frontmatter:{title:"SQL In Operator"}}},pathContext:{slug:"/sql/sql-in-operator/"}}}});
//# sourceMappingURL=path---sql-sql-in-operator-5c4905de5591793aee5e.js.map