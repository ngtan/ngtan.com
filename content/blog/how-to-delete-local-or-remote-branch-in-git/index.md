---
title: How to delete a local or remote branch in Git
date: "2020-06-11"
---



### Deletes a local branch
```javascript
  git branch --delete <branch-name>
```

Shorthand 
```javascript
  git branch -d <branch-name>
```

Force a branch to be deleted even if it hasn't been pushed or merged yet.
```javascript
  git branch -D <branch-name>
```

### Deletes a remote branch
```javascript
  git push origin --delete <branch-name>
```


### Conclusion
Have fun and stay tuned for the next post. Thanks for reading 😉
