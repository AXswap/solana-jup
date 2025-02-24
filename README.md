# solana-jup


```
用户
 |
 v
+---------------------+
|     前端界面(UI)     |
+----------+----------+
           |
           v
+---------------------+
|     前端应用逻辑     |
+----------+----------+
           |
           v
+---------------------+          +---------------------+
|     后端服务/API     |<-------->|    智能合约(Solana)  |
+----------+----------+          +----------+----------+
           |                                 |
           v                                 |
+---------------------+                      |
|   数据库/缓存(如需)  |<----------------------+
+---------------------+
```

---

```shell
npx create-next-app@latest 
pnpm add @solana/web3.js @solana/wallet-adapter-react @solana/wallet-adapter-base @solana/wallet-adapter-wallets @solana/wallet-adapter-react-ui
pnpm dlx shadcn@latest init
```

```shell
app/：存放页面组件，根据 Next.js的文件路由机制自动映射为路由。
components/：存放可重用的 UI 组件，如按钮、表单、模态窗口等。
styles/：存放全局样式文件和 Tailwind CSS 配置。
utils/：存放工具函数和辅助类，如格式化函数、请求封装等。
hooks/：存放自定义的 React Hooks，提高逻辑复用性。
public/：存放静态资源，如图像、字体等。
config/：存放配置文件，如环境变量、API 端点等。
```

---