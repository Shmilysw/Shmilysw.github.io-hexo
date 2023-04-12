---
title: Hexo博客的使用总结
categories:
- 博客的总结
tags: [hexo, 博客搭建, 学习]
index_img: /img/article/logo.jpg
date: 2022-12-21 11:14:59

---

# git 的使用

### 使用git bash连接到gitee

+ #### 1、创建SSHkey
 打开Git Bash，输入ssh-keygen -t rsa
 会分别提示你文件名，密码（可不设置），确认密码。一般三次回车就可以
 在 C:\Users\“你的用户名”\.ssh 目录下就会有.pub结尾的文件，用记事本打开，复制里面的东西，这就是你的SSH key

+ #### 2、添加key到Gitee
gitee->设置->SSH公钥
把key粘贴进去，标题默认是本机的名字

+ #### 3、ssh链接
 ##### **我一般喜欢先建个仓库，然后本地再去连接那个仓库，hh ~**
 ```
 git remote add gitee git@gitee.com:YourUserName/YourProjectName.git
 ```
 YourUserName和YourProjectName都是要具体看你自己的实际用户名和仓库名字
 即可，可以通过git remote -v查看

  ```
  $ssh -T git@gitee.com
  Hi XXX! You've successfully authenticated, but GITEE.COM does not provide shell access.

  ```
  eg:
  ```
  $ ssh -T git@gitee.com
  Hi Shmilysw! You've successfully authenticated, but GITEE.COM does not provide shell access.
  ```

##### **其他都是些git的基本使用**

```
git status // 查看工作台状态
git add . // 添加文件
git commit -m "备注" // 提交修改，并备注
git push // 推送至远端仓库

```

# Hexo 命令
[Hexo文档](https://hexo.io/zh-cn/docs/)

+ #### 添加一张md页面

```
$ hexo new [layout] <title>
```
新建一篇文章。如果没有设置 layout 的话，默认使用 _config.yml 中的 default_layout 参数代替。如果标题包含空格的话，请使用引号括起来。

```
$ hexo new "post title with whitespace"
```

+ #### 本地查看效果
```
$ hexo server
或
$ hexo s
```

+ #### 生成静态文件
```
$ hexo generate
或
$ hexo g
```

+ #### 部署网站
```
$ hexo deploy
或
$ hexo d
```

+ #### 清除缓存文件
```
$ hexo clean
```
 清除缓存文件 (db.json) 和已生成的静态文件 (public)。
 在某些情况（尤其是更换主题后），如果发现您对站点的更改无论如何也不生效，您可能需要运行该命令。


### 具体部署步骤
+ git 进入项目文件下
 ```
 $ hexo clean
 
 $ hexo g
 
 $ hexo d
 ```

+ 打开gitee仓库
+ 点击服务
+ 点击Gitee Pages 服务
+ 进行部署更新
+ 等待更新 ~~~

# Fluid 主题

##### 主题可以根据自己的偏好自己设置

[Hexo Fluid 用户手册](https://hexo.fluid-dev.com/docs/)

[Hexo Fluid 配置指南](https://hexo.fluid-dev.com/docs/guide/#%E5%85%B3%E4%BA%8E%E6%8C%87%E5%8D%97)