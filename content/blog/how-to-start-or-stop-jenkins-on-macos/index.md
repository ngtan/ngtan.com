---
title: How to start or stop Jenkins on macOS
date: "2017-10-09"
---

In the past, I was looking for a way start or stop Jenkins service on my machine. I finally figured out a method to unstuck the issue.

Open a terminal session and run the following commands to start or stop Jenkins service.

#### Start Jenkins service
  ```bash
    sudo launchctl load /Library/LaunchDaemons/org.jenkins-ci.plist
  ```

#### Stop Jenkins service
  ```bash
    sudo launchctl unload /Library/LaunchDaemons/org.jenkins-ci.plist
  ```

Hopefully, it's useful.
