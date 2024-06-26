---
title: How to delete a local or remote branch in Git
date: "2020-06-11"
summary: ""
---



### Deletes a local branch
```sh
  git branch --delete <branch-name>
```

Shorthand 
```sh
  git branch -d <branch-name>
```

Force a branch to be deleted even if it hasn't been pushed or merged yet.
```sh
  git branch -D <branch-name>
```

Delete all branches but keeping others like "develop", "master"
```sh
  git branch | grep -v "develop" | grep -v "master" | xargs git branch -D
```

### Deletes a remote branch
```sh
  git push origin --delete <branch-name>
```


### Conclusion
Have fun and stay tuned for the next post. Thanks for reading 😉
