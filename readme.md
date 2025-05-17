# Validador de Bandeira de Cartão de Crédito

Este projeto é um validador de bandeiras de cartões de crédito, desenvolvido em JavaScript. Ele identifica a bandeira de um cartão com base nos números iniciais fornecidos, seguindo os padrões de identificação de bandeiras como Visa, MasterCard, Elo, American Express, Discover e Hipercard.

## 📋 Funcionalidades

- Identifica a bandeira de um cartão de crédito com base no número inicial.
- Suporte para as seguintes bandeiras:
  - **Visa**: Começa com o número `4`.
  - **MasterCard**: Começa com os dígitos entre `51` e `55`, ou entre `2221` e `2720`.
  - **Elo**: Pode começar com intervalos como `4011`, `4312`, `4389`, entre outros.
  - **American Express**: Inicia com `34` ou `37`.
  - **Discover**: Começa com `6011`, `65`, ou na faixa de `644` a `649`.
  - **Hipercard**: Geralmente começa com `6062`.

## 🚀 Como executar o projeto

### Pré-requisitos

- **Node.js**: Certifique-se de que o Node.js está instalado no seu sistema. [Baixe aqui](https://nodejs.org).

### Passos para rodar o projeto

1. **Clone ou baixe o repositório**:
   - Navegue até o diretório onde o projeto foi salvo.

2. **Abra o terminal**:
   - No Visual Studio Code ou em um terminal externo, navegue até o diretório do projeto.

3. **Execute o arquivo principal**:
   - Rode o seguinte comando:
     ```sh
     node src/index.js
     ```

4. **Resultado**:
   - O terminal exibirá a bandeira correspondente ao número do cartão configurado no código.

### Testando outros números de cartão

- Para testar outros números de cartão, edite a variável `numeroCartao` no arquivo `src/index.js`:
  ```javascript
  const numeroCartao = "4111111111111111";
  ```

  Salve o arquivo e execute novamente o comando node src/index.js.

🛠 Tecnologias utilizadas:
  - JavaScript: Linguagem principal do projeto.
  - Node.js: Ambiente de execução para rodar o código.
