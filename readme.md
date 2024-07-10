# 项目记录

## 一些新掌握的功能

### git 篇

- 分支错误开发后，主分支与子分支属于两个不同项目代码如何合并

    使用 git read-tree 将子分支迁移到指定目录下

    如：master 存在 react-config ; webpack-react 为子分支；

    使用：

    ``` git
        git read-tree --prefix=react-config/ -u webpack-react
    ```
