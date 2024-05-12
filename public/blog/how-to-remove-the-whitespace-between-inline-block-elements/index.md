---
title: How to remove the whitespace between inline-block elements
date: "2019-04-22"
summary: ""
---

I was struggling with this issue when stepping in front-end development career and of course, I also looked for a solution on Google. I finally figured out variety of methods to solve this one. Let's get started to remove the whitespace with an example below.

So, here we go:

```html
<nav class="navigation">
  <a class="navigation-item" href="#" title="Overview">
    Overview
  </a>
  <a class="navigation-item" href="#" title="Repositories">
    Repositories
  </a>
  <a class="navigation-item" href="#" title="Stars">
    Stars
  </a>
  <a class="navigation-item" href="#" title="Followers">
    Followers
  </a>
  <a class="navigation-item" href="#" title="Following">
    Following
  </a>
</nav>
```

```css
a {
  text-decoration: none;
}

.navigation {
  /* code here */
}

.navigation-item {
  display: inline-block;
  background-color: lightblue;
  padding: 10px;

  /* code here */
}
```

*Original result:*
![original result](/blog/how-to-remove-the-whitespace-between-inline-block-elements/original-result.png)

### font-size
```css
.navigation {
  font-size: 0;
}

.navigation-item {
  /* ... */

  font-size: 16px
}
```

*Fixed result:*
![fixed result](/blog/how-to-remove-the-whitespace-between-inline-block-elements/fixed-result.png)

It's not such a good idea to solve the problem by using `font-size` cause it doesn't work on 100% browsers.

### letter-spacing
```css
.navigation {
  letter-spacing: -4px;
}

.navigation-item {
  /* ... */

  letter-spacing: normal;
}
```

*Fixed result:*
![fixed result](/blog/how-to-remove-the-whitespace-between-inline-block-elements/fixed-result.png)

### margin-right
```css
.navigation {
}

.navigation-item {
  /* ... */

  margin-right: -4px;
}
```

*Fixed result:*
![fixed result](/blog/how-to-remove-the-whitespace-between-inline-block-elements/fixed-result.png)

### word-spacing
```css
.navigation {
  word-spacing: -1ch;
}

.navigation-item {
  /* ... */
}
```

*Fixed result:*
![fixed result](/blog/how-to-remove-the-whitespace-between-inline-block-elements/fixed-result.png)

`word-spacing: -1ch` works for fonts which have characters is `1ch` wide and works in Firefox 10+, Chrome 27+, almost works in IE9+.

### Conclusion
We have lots of tricks to remove the whitespace between `inline-block` elements, but I only stay focused to solve it by using CSS. In additional, as you probably known, we also have several other methods to alternate instead of using `display: inline-block`.

Stay tuned for the next post. Thanks for reading :)
