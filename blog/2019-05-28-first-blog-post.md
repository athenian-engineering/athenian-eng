---
slug: first-blog-post
title: First Blog Post
authors:
  name: Gao Wei
  title: Docusaurus Core Team
  url: https://github.com/wgao19
  image_url: https://github.com/wgao19.png
tags: [hola, docusaurus]
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet


```mdx-code-block
<BrowserWindow>

I can conveniently use <highlight color="#25c2a0">Docusaurus green</highlight> everywhere!

</BrowserWindow>
```


```mdx-code-block
<BrowserWindow>
```

```js
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return 'This text is highlighted!';
  }

  return 'Nothing highlighted';
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return 'This range is highlighted!';
  }
  // highlight-end

  return 'Nothing highlighted';
}
```

```mdx-code-block
</BrowserWindow>
```