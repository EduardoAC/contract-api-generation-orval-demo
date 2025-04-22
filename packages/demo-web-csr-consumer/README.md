# Demo Web CSR consumer using vite and nestjs-api-hook

Welcome to **demo-web-csr-consumer**! 🎉

This project is a showcase of **React**, **TypeScript**, and **Vite** working together to create a fast, modern web application. It’s built to demonstrate the power of **Client-Side Rendering (CSR)**, using Vite's blazing fast development experience and hot module reloading (HMR) for smooth real-time updates. 🚀

If you're looking for a clean and simple React app setup with **ESLint** for linting, **TypeScript** for type safety, and a fast **Vite** dev server, you're in the right place! Let's dive in! 👇

## 🚀 Getting Started

To get this project up and running, follow these simple steps. Whether you're a beginner or a seasoned pro, you'll be up and running in no time.

### Prerequisites

Before you start, make sure you have these installed:

- **[Node.js](https://nodejs.org/)** (LTS version recommended)
- **[pnpm](https://pnpm.io/)** (the fastest and most efficient package manager for Node.js)

### 1. Clone the Repo

Start by cloning this project to your local machine:

```bash
git clone https://github.com/yourusername/demo-web-csr-consumer.git
cd demo-web-csr-consumer
```

### 2. Install Dependencies

Next, install the required dependencies using **pnpm**:

```bash
pnpm install
```

### 3. Start the Development Server

Run the development server and open your browser to **http://localhost:3000**:

```bash
pnpm dev
```

Enjoy the speed of Vite’s **Hot Module Replacement (HMR)** as your app updates in real-time. ⚡

---

## 🧑‍💻 Project Details

This project leverages the power of **React**, **TypeScript**, and **Vite**. Here’s what you’ll find:

- **React**: A declarative, efficient, and flexible JavaScript library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript, making the code more predictable and easier to work with.
- **Vite**: A modern, lightning-fast build tool that focuses on speed and developer experience.

In addition, we’ve included **ESLint** to help maintain clean, error-free code with real-time feedback while you develop.

## 🧑‍🔧 ESLint Configuration

We want you to write clean and error-free code! 🚫 That’s why we’ve configured **ESLint** in this project to keep your code in check.

### Type-Aware Linting

For a more robust linting experience (especially for large production apps), you can enable type-aware linting rules:

1. **Add TypeScript configuration** for ESLint:

   ```js
   export default tseslint.config({
     languageOptions: {
       parserOptions: {
         project: ['./tsconfig.node.json', './tsconfig.app.json'],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   })
   ```

2. **Switch to stricter ESLint configs**:

   Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.

3. Optionally, add stylistic rules for better code formatting:

   ```js
   ...tseslint.configs.stylisticTypeChecked
   ```

4. **Integrate React Plugin**:

   ```js
   import react from 'eslint-plugin-react'

   export default tseslint.config({
     settings: { react: { version: '18.3' } },
     plugins: { react },
     rules: {
       ...react.configs.recommended.rules,
       ...react.configs['jsx-runtime'].rules,
     },
   })
   ```

---

## 📂 Project Structure

Here’s how the project is organized:

```
/demo-web-csr-consumer
├── /public
│   └── /assets          # Public assets like images
├── /src
│   └── App.tsx          # Main React component
│   └── index.tsx        # Entry point for React app
├── /styles
│   └── globals.css      # Global styles for the app
├── vite.config.ts       # Vite configuration file
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```

---

## 💡 Learn More

Want to dive deeper into the technologies used? Check out these helpful resources:

- **[React Documentation](https://reactjs.org/docs/getting-started.html)** – Learn how React works and how you can build awesome UIs.
- **[TypeScript Documentation](https://www.typescriptlang.org/docs/)** – Explore how TypeScript helps you write better code with static typing.
- **[Vite Documentation](https://vitejs.dev/guide/)** – Discover the power of Vite, a super-fast build tool and development server.
- **[ESLint Documentation](https://eslint.org/docs/user-guide/getting-started)** – Learn how to use ESLint to enforce coding standards.

---

## 💬 Contributing

We love contributions! ❤️ Whether it's a bug fix, feature request, or documentation update, feel free to open an issue or a pull request. Here’s how you can contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature/your-feature-name`).
5. Create a pull request with a description of your changes.

We’ll be happy to review it and merge!

---

## 📝 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for more information.
