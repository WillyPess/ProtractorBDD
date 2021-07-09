## Projeto de automação de testes do Aura Push

### Descrição geral

Esse projeto é uma POC de como funcionaria os testes automatizados no Push.
Inicialmente só tem os casos de teste para o CRUD de usuários.

O ambiente que está sendo testado é o de homologação e pode ser acessado
através do link: https://aurapushui-dev.telefonicabigdata.com/login

Para executar a automação é preciso antes de tudo baixar as dependencias
do projeto através do comando:
> npm install

Após a instalação das dependências o projeto pode ser executado através do comando:
> npm run cucumbertest

Ao final dos testes um relatório é criado e se encontra no arquivo: **testreport.html**

### Estrutura do projeto

../
- features []
    - Casos de teste
- pageObjects []
    - Páginas web
- stepDefinations []
    - Steps de cada caso de teste
    - hook para determinar suites de caso de teste, before e after test
    - Configuração de timeout
- cucumber-config.ts
- package.json

Dentro dos casos de teste se encontra os valores que serão passados nas steps (url, campos, etc)
O mapeamento das páginas se encontram na pasta pageObject. Não foi feito o mapeamento de todos os
elementos de cada página, apenas dos elementos necessários para os testes que foram escritos.

No arquivo **hook.ts** é possível configurar quais casos de teste devem rodar de acordo com algum
critério do QA. Lá é possível configurar diferentes suítes de teste, bem como definir o after/before

### Links úteis

[Locators com protractor](https://www.lambdatest.com/blog/selenium-locators-in-protractor/)
[Locators básico](https://medium.com/appgambit/protractor-e2e-testing-locator-and-action-397eecd83eb1)

