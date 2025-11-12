# Meus Links

Este é um projeto de uma página de links pessoais, semelhante a um "link na bio", onde você pode agrupar e exibir seus links importantes em um só lugar.

## 🚀 Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)

## ▶️ Como Rodar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento.

1.  **Clone o repositório (se aplicável):**
    ```bash
    git clone <url-do-repositorio>
    cd my-links
    ```

2.  **Instale as dependências:**
    Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. Em seguida, instale as dependências do projeto.
    ```bash
    npm install
    ```

3.  **Execute a aplicação:**
    O comando abaixo iniciará o servidor de desenvolvimento.
    ```bash
    npm run dev
    ```

    A aplicação estará disponível em `http://localhost:5173` (ou outra porta, se a 5173 estiver em uso).

## 📂 Estrutura de Pastas

O projeto está organizado da seguinte forma:

-   **/public**: Contém arquivos estáticos como imagens e ícones que são servidos diretamente pelo servidor.
-   **/src**: Contém todo o código-fonte da aplicação.
    -   **assets**: Recursos como imagens e fontes que são processados pelo Vite.
    -   **components**: Componentes React reutilizáveis que formam a interface do usuário (cabeçalho, rodapé, cartões de link, etc.).
    -   **external**: Arquivos que contêm dados externos, como a lista de links.
    -   **main.jsx**: O ponto de entrada da aplicação React.
    -   **App.jsx**: O componente principal que organiza a estrutura da página.
-   **index.html**: O template HTML principal da aplicação.
-   **vite.config.js**: Arquivo de configuração do Vite.
-   **package.json**: Define os scripts e as dependências do projeto.