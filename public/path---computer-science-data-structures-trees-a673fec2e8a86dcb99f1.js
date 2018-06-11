webpackJsonp([88376607333990],{3865:function(e,n){e.exports={data:{markdownRemark:{html:"<h1>Trees</h1>\n<p>A tree data structure can be defined recursively (locally) as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the “children”), with the constraints that no reference is duplicated, and none points to the root. A tree with no nodes is called a null or empty tree.</p>\n<p>A binary tree is a non linear data structure consisting nodes, where each node has the following 3 components:</p>\n<p><strong>Data element</strong>: Stores any kind of data in the node\n<strong>Left pointer</strong>: Points to the sub-tree on the left side of node\n<strong>Right pointer</strong>: Points to the sub-tree on the right side of the node\nAs the name suggests, the data element stores any kind of data in the node.\nThe left and right pointers point to binary trees on the left and right side of the node respectively.</p>\n<p>If a tree is empty, it is represented by a null pointer.</p>\n<h2>Terminology used in trees:</h2>\n<p><strong>Root</strong> :\nThe top node in a tree.</p>\n<p><strong>Child</strong>:\nA node directly connected to another node when moving away from the Root.</p>\n<p><strong>Parent</strong>:\nThe converse notion of a child.</p>\n<p><strong>Siblings</strong>:\nA group of nodes with the same parent.</p>\n<p><strong>Descendant</strong>:\nA node reachable by repeated proceeding from parent to child.</p>\n<p><strong>Ancestor</strong>:\nA node reachable by repeated proceeding from child to parent.</p>\n<p><strong>Branch</strong>(internal node):\nA node of a tree that has child nodes.</p>\n<p><strong>Leaf</strong>(less commonly called External node):\nA node with no children.</p>\n<p><strong>Degree</strong>:\nThe number of subtrees of a node.</p>\n<p><strong>Edge</strong>:\nThe connection between one node and another.</p>\n<p><strong>Path</strong>:\nA sequence of nodes and edges connecting a node with a descendant.</p>\n<p><strong>Level</strong>:\nThe level of a node is defined by 1 + (the number of connections between the node and the root). </p>\n<p><strong>Height of tree</strong>:\nThe height of a tree is the height of its root node.</p>\n<p><strong>Depth</strong>:\nThe depth of a node is the number of edges from the tree’s root node to the node.</p>\n<p><strong>Forest</strong>:\nA forest is a set of n ≥ 0 disjoint trees. </p>\n<h3>Some Popular Types of Trees:</h3>\n<ul>\n<li>Binary Tree</li>\n<li>Binary Search Tree</li>\n<li>AVL Tree</li>\n<li>Red Black Tree</li>\n<li>Splay Tree</li>\n<li>Huffmann Tree</li>\n</ul>\n<h3>Common uses</h3>\n<ul>\n<li>Representing hierarchical data</li>\n<li>Storing data in a way that makes it easily searchable</li>\n<li>Representing sorted lists of data</li>\n<li>Routing algorithms</li>\n</ul>\n<h3>Code of a tree node</h3>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-c_cpp\"><code>struct node\n    {\n         int data;                 //Data element\n         struct node * left;          //Pointer to left node\n         struct node * right;         //Pointer to right node\n    };</code></pre>\n      </div>\n<h4>More Information:</h4>\n<!-- Please add any articles you think might be helpful to read before writing the article -->\n<ul>\n<li><a href='https://en.wikipedia.org/wiki/Tree_(data_structure)' target='_blank' rel='nofollow'>Trees (data structure)</a></li>\n</ul>",fields:{slug:"/computer-science/data-structures/trees/"},frontmatter:{title:"Trees"}}},pathContext:{slug:"/computer-science/data-structures/trees/"}}}});
//# sourceMappingURL=path---computer-science-data-structures-trees-a673fec2e8a86dcb99f1.js.map