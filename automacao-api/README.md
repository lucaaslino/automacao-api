Automação de API com Cypress
Este projeto contém testes automatizados para a API do Dog API, utilizando o Cypress para garantir o funcionamento correto da API.

Tecnologias utilizadas
Cypress: Framework para testes end-to-end.
JavaScript: Linguagem utilizada para escrever os testes.
Node.js: Ambiente de execução de JavaScript.
Estrutura do Projeto

automacao-api/
│
├── cypress/
│ ├── e2e/ # Testes automatizados
│ ├── support/ # Arquivos de suporte do Cypress
│ ├── reports/ # Relatórios de execução (JSON/HTML)
│ └── fixtures/ # Dados de exemplo para os testes
│
├── cypress.config.js # Configuração do Cypress
├── package.json # Dependências e scripts do projeto
└── README.md # Documentação do projeto

Como Rodar o Projeto
Pré-requisitos
Antes de rodar os testes, você precisa ter o Node.js e o npm instalados na sua máquina.

Instalação
Navegue até o diretório do projeto e rode o comando:

cd automacao-api

Instale as dependências rodando o seguinte comando:

npm install

Executando os Testes
Para rodar os testes, utilize o comando:

npx cypress open

Isso abrirá a interface do Cypress onde você pode executar os testes de API. Após a execução, os relatórios estarão disponíveis na pasta cypress/reports.

Executando os Testes em Modo Headless
Se preferir rodar os testes de forma automatizada (sem abrir a interface gráfica do Cypress), use o seguinte comando:

npx cypress run
Relatórios de Execução
Os relatórios de execução serão gerados na pasta cypress/reports tanto em formato JSON quanto HTML, dependendo da configuração do reporter.

Estrutura dos Testes
Os testes estão estruturados em arquivos de especificação no diretório cypress/e2e. Eles estão organizados de acordo com as funcionalidades da API e seguem a estrutura do Cucumber para facilitar a leitura e manutenção dos cenários de teste.
