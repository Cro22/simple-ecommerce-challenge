<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>simple-ecommerce-challenge</h1>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Jest-C21325.svg?style&logo=Jest&logoColor=white" alt="Jest" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/SemVer-3F4551.svg?style&logo=SemVer&logoColor=white" alt="SemVer" />
<img src="https://img.shields.io/badge/Docker-2496ED.svg?style&logo=Docker&logoColor=white" alt="Docker" />
<img src="https://img.shields.io/badge/Express-000000.svg?style&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/Cro22/simple-ecommerce-challenge?style&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/Cro22/simple-ecommerce-challenge?style&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/Cro22/simple-ecommerce-challenge?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/Cro22/simple-ecommerce-challenge?style&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running simple-ecommerce-challenge](#-running-simple-ecommerce-challenge)
    - [🧪 Tests](#-tests)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---

## 📂 Repository Structure

```sh
└── simple-ecommerce-challenge/
    ├── .editorconfig
    ├── .env_example
    ├── .eslintrc.jest.js
    ├── .eslintrc.js
    ├── .gitIgnore
    ├── .prettierrc
    ├── docker-compose.yml
    ├── Dockerfile
    ├── jest.config.js
    ├── jest.setup.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── src/
    │   ├── config/
    │   ├── db/
    │   ├── main.js
    │   ├── modules/
    │   └── utils/
    ├── test/
    │   ├── addProduct.test.js
    │   ├── cart.mocks..js
    │   ├── createCart.test.js
    │   ├── createOrder.test.js
    │   └── updateCart.test.js
    └── Test.postman_collection.json
```


---

## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                                                       | Summary                   |
| ---                                                                                                                        | ---                       |
| [.env_example](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/.env_example)                                 ||
| [.eslintrc.jest.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/.eslintrc.jest.js)                       ||
| [.eslintrc.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/.eslintrc.js)                                 ||
| [.gitIgnore](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/.gitIgnore)                                     ||
| [docker-compose.yml](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/docker-compose.yml)                     ||
| [Dockerfile](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/Dockerfile)                                     ||
| [jest.config.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/jest.config.js)                             ||
| [jest.setup.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/jest.setup.js)                               ||
| [main.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/src\main.js)                                       ||
| [config.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/src\config\config.js)                            ||
| [models.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/src\db\models.js)                                ||
| [mongo.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/src\db\mongo.js)                                  ||
| [cart.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/src\db\schemas\cart.js)                            ||
| [order.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/src\db\schemas\order.js)                          ||
| [product.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/src\db\schemas\product.js)                      ||
| [routes.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/src\modules\routes.js)                           ||
| [validatorMiddleware.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/src\modules\validatorMiddleware.js) ||
| [cart.controller.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/src\modules\cart\cart.controller.js)    ||
| [cart.repository.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/src\modules\cart\cart.repository.js)    ||
| [cart.service.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/src\modules\cart\cart.service.js)          ||
| [validator.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/src\modules\validator\validator.js)           ||
| [errorsHandlers.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/src\utils\errorsHandlers.js)             ||
| [responses.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/src\utils\responses.js)                       ||
| [addProduct.test.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/test\addProduct.test.js)                ||
| [cart.mocks..js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/test\cart.mocks..js)                        ||
| [createCart.test.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/test\createCart.test.js)                ||
| [createOrder.test.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/test\createOrder.test.js)              ||
| [updateCart.test.js](https://github.com/Cro22/simple-ecommerce-challenge/blob/main/test\updateCart.test.js)                ||

</details>

---

## 🚀 Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- ℹ️ Node`

`- ℹ️ Docker`

### 🔧 Installation

1. Clone the simple-ecommerce-challenge repository:
```sh
git clone https://github.com/Cro22/simple-ecommerce-challenge
```

2. Change to the project directory:
```sh
cd simple-ecommerce-challenge
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Running simple-ecommerce-challenge

```sh
npm start
```

### 🧪 Tests
```sh
npm test
```

---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  MIT LICENSE-TYPE` License. See the [LICENSE-Type](LICENSE) file for additional info.

[↑ Return](#Top)

---
