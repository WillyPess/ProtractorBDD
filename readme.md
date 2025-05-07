# 🧪 Protractor BDD – User Management Automation

![Protractor](https://img.shields.io/badge/Protractor-E2E--Testing-red?logo=protractor)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)
![BDD](https://img.shields.io/badge/Cucumber-BDD-green?logo=cucumber)
![Local App](https://img.shields.io/badge/App-Static%20HTML-lightgrey)
![Portfolio Project](https://img.shields.io/badge/Project-Portfolio-orange)

This project demonstrates end-to-end test automation using **Protractor + Cucumber (BDD) + TypeScript**, targeting a simulated **user management application** built in static HTML.

It is designed as part of my **QA and automation engineering portfolio**, showcasing my ability to integrate testing frameworks, build modular automation structures, and validate key UI workflows.

---

## 🧩 Tech Stack

- ✅ [Protractor](https://www.protractortest.org) – E2E testing framework for Angular/JS apps
- ✅ [Cucumber.js](https://cucumber.io/docs/installation/javascript/) – BDD testing with Gherkin syntax
- ✅ [TypeScript](https://www.typescriptlang.org/) – Strongly typed automation code
- ✅ [ChromeDriver + Selenium] – Browser control

---

## 🔍 What This Project Tests

This test suite covers **UI simulations for a user management system** including:

- 🔹 Add new user
- 🔹 Edit existing user
- 🔹 Delete user
- 🔹 List all users

It uses a **locally available HTML form** or static file (no backend or API), making it simple to execute without needing a live server or database.

---

## 🛠 Project Structure

```

ProtractorBDD/
├── features/
│   ├── addUser.feature
│   ├── editUser.feature
│   ├── deleteUser.feature
│   ├── listUsers.feature
├── stepDefinitions/      → Step logic for each feature
├── pageObjects/          → Page elements abstraction
├── helper/               → Helper functions/utilities
├── cucumber-config.ts    → Protractor + Cucumber config (TS)
├── cucumber-config.js    → Compiled JS version (used at runtime)
├── testreport.html       → Generated test report
├── testreport.json       → Raw report output
└── tsconfig.json         → TypeScript compiler config

````

---

## ⚙️ How to Run Locally

### 🧰 Prerequisites

- Node.js (LTS)
- Git
- Google Chrome
- ChromeDriver (auto-managed)
- Windows (or macOS/Linux with adjustments)

### 📦 Installation

```bash
git clone https://github.com/WillyPess/ProtractorBDD.git
cd ProtractorBDD
npm install
npm run clean     # optional but recommended
npm run update
````

### 🔧 Build the project

```bash
npm run build
```

### 🚀 Execute tests

```bash
npm run test
```

> This will open Chrome and run each Gherkin scenario against the simulated HTML user management interface.

---

## 📸 Reporting

* ✅ JSON test result saved to `testreport.json`
* ✅ Optional HTML report (`testreport.html`)
* ✅ Built-in Protractor/Cucumber console output

---

## 🔒 Backend/Server?

No backend or database is needed.
All tests run **locally**, interacting with either static HTML or simulated DOM elements.

This project is excellent for demonstrating:

* BDD structure
* Protractor framework usage
* Reusability via Page Objects
* Test organization and scalability

---

## 👨‍💻 Author

Created by **Willy Pessoa**
🔗 [GitHub](https://github.com/willypess)
🔗 [Portfolio](https://willypess.github.io)
🔗 [LinkedIn](https://www.linkedin.com/in/seu-perfil-aqui)

---

> 💼 This project is part of my professional portfolio. For more real-world automation examples, check out my GitHub or portfolio page.

```

---

Se quiser, posso também:
- Adicionar imagens ou GIFs de execução dos testes
- Criar um `index.html` simples de CRUD fake para você usar como interface de teste

Deseja isso também?
```
