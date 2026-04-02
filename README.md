<div align="center">
  <h1>🌟 EventMaster Front-End</h1>
  <p>Uma interface web moderna e dinâmica para gerenciamento de eventos, construída com React, Vite e conceitos avançados de UI/UX.</p>
</div>

---

## 📖 Sobre o Projeto

O **EventMasterFront** é a camada visual (cliente) de um sistema completo de gerenciamento de eventos. Ele permite aos organizadores e usuários listar, visualizar, buscar detalhadamente por IDs únicos, criar, atualizar e excluir eventos de forma síncrona através de uma API Java RESTful.

O foco central deste projeto, além do consumo eficiente da API com Axios, foi construir uma **interface esteticamente premium e envolvente**, utilizando técnicas modernas de web-design como *Glassmorphism* e paletas de cores dinâmicas.

## ✨ Principais Funcionalidades

- **📋 Listagem de Eventos:** Exibição elegante em grade contendo todos os eventos, adaptável para qualquer tela (Responsivo).
- **➕ Criação de Eventos:** Formulários acessíveis e com validações para adicionar eventos rapidamente.
- **🔍 Busca por ID (Discovery):** Abordagem otimizada para buscar detalhes únicos de um evento sabendo seu código.
- **🛠️ Gestão Completa (CRUD):** Botões ágeis para edição rápida (Update) e exclusão (Delete) em cada item visualizado.
- **🎨 Design UI/UX Premium:** Transições suaves, animações de entrada, elevação (*box-shadowing*), uso de transparências desocadas (*backdrop-filter/glassmorphism*) e tipografia desenhada para alta legibilidade (Inter).

## 🛠️ Tecnologias Utilizadas

- **[React 18](https://reactjs.org/)** - Biblioteca base para a construção da interface.
- **[Vite](https://vitejs.dev/)** - *Bundler* ultrarrápido garantindo HMR e builds otimizados.
- **[React Router DOM](https://reactrouter.com/)** - Navegação inteligente (SPA) sem recarregamentos.
- **[Axios](https://axios-http.com/)** - Cliente HTTP para comunicação e consumo da API na nuvem.
- **CSS3 Vanilla (Moderno)** - Uso de Flexbox, CSS Grid, media-queries e keyframes, sem dependência pesada de frameworks externos.

## 🗺️ Mapa de Rotas

| Rota | Componente | Descrição |
| :--- | :--- | :--- |
| `/` | `PageEvents` | Exibe a galeria com todos os eventos disponíveis. |
| `/insert` | `PageInsert` | Interface com formulário limpo para cadastro. |
| `/search` | `PageSearchId` | Modal centralizado e amigável para explorar IDs únicos. |
| `/events/:id`| `PageId` | Página inteira detalhando as informações de um evento achado na busca. |

## 🚀 Como Executar o Projeto Localmente

1. **Clone o repositório:**
```bash
git clone https://github.com/SeuUsuario/EventMasterFront.git
cd EventMasterFront/event-master-front
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse no seu navegador:**
A aplicação estará rodando perfeitamente e ultrarrápida, geralmente no endereço `http://localhost:5173/`. *(Nota: É necessário que a API Java esteja online no Render, ou repontada para localhost, para visualização e persistência de dados reais).*

---
<div align="center">
  <sub>Desenvolvido com 🩵 e alto padrão de UI para ser rápido e fluído.</sub>
</div>
