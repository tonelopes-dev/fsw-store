# FSW Store

A **FSW Store** é uma aplicação de e-commerce desenvolvida com foco em fornecer uma experiência de compra moderna, responsiva e funcional. Este projeto foi criado com tecnologias modernas como **Next.js**, **Stripe** e **Tailwind CSS**, e segue as melhores práticas para desenvolvimento web.

## 🎨 Protótipo

O design do projeto foi cuidadosamente planejado no Figma. Você pode visualizar o protótipo completo [aqui](https://www.figma.com/design/5AQGxZZGDHFBaQK9c2sH0b/FSW-Store?node-id=89-280&p=f).

![App Screenshot](/public/prints/print-mockup-project-fsw-store.png)

## 🚀 Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento de aplicações web server-side e client-side.
- **Tailwind CSS**: Framework de CSS utilitário para estilização.
- **Stripe**: Integração para pagamentos e gerenciamento de checkout.
- **NextAuth.js**: Gerenciamento de autenticação com provedores como Google.
- **Lucide-react**: Ícones modernos para melhorar a interface.
- **React Context API**: Gerenciamento de estado global, como o carrinho de compras.

## 🛠️ Funcionalidades

- **Autenticação**: Login e logout com NextAuth.
- **Carrinho de Compras**: Adicionar, visualizar e gerenciar produtos no carrinho.
- **Checkout**: Integração com Stripe para finalizar compras.
- **Catálogo de Produtos**: Navegação entre categorias e visualização de produtos.
- **Menu Interativo**: Design responsivo e acessível.
- **Descontos**: Cálculo dinâmico de descontos no carrinho.

## 📦 Instalação e Uso

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/fsw-store.git
   cd fsw-store
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env.local`:

   ```env
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=<sua-chave-publica>
   STRIPE_SECRET_KEY=<sua-chave-secreta>
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=<seu-segredo>
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse no navegador:

   ```bash
   http://localhost:3000
   ```

## 📂 Estrutura do Projeto

```bash
src/
├── actions/       # Funções de ações, como o checkout
├── app/           # Páginas da aplicação
├── components/    # Componentes reutilizáveis
├── constants/     # Constantes do projeto
├── helpers/       # Funções utilitárias
├── lib/           # Configurações e bibliotecas
└── providers/     # Context API e providers
```

## 📌 Próximos Passos

- Versão Desktop 💻
- Melhorar a acessibilidade (a11y) com atributos ARIA.
- Adicionar testes unitários e de integração.
- Criar página "Meus Pedidos".
- Desenvolver um Dashboard Administrativo.

## 🌐 Acesso à Aplicação

Caso não queira clonar o repositório, você pode acessar a aplicação diretamente por este link: [FSW Store](https://fsw-store-xi-eight.vercel.app/)
