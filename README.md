A FSW Store é uma aplicação de e-commerce desenvolvida com foco em fornecer uma experiência de compra moderna, responsiva e funcional. Este projeto foi criado com tecnologias modernas como Next.js, Stripe e Tailwind CSS, e segue as melhores práticas para desenvolvimento web.

## 🎨 Protótipo

O design do projeto foi cuidadosamente planejado no Figma. Você pode visualizar o protótipo completo [aqui](https://www.figma.com/design/5AQGxZZGDHFBaQK9c2sH0b/FSW-Store?node-id=89-280&p=f).

![App Screenshot](/public/prints/print-mockup-project-fsw-store.png)

## 🚀 Tecnologias Utilizadas

- **Next.js:** Framework React para desenvolvimento de aplicações web server-side e client-side.
- **Tailwind CSS:** Framework de CSS utilitário para estilização.
- **Stripe:** Integração para pagamentos e gerenciamento de checkout.
- **NextAuth.js:** Gerenciamento de autenticação com provedores como Google.
- **Lucide-react:** Ícones modernos para melhorar a interface.
- **React Context API:** Gerenciamento de estado global, como o carrinho de compras.

## 🚀 Tecnologias Utilizadas

- **Autenticação:** Login e logout com NextAuth.
- **Carrinho de Compras:** Adicionar, visualizar e gerenciar produtos no carrinho.
- **Checkout:** Integração com Stripe para finalizar compras.
- **Catálogo de Produtos:** Navegação entre categorias e visualização de produtos.
- **Menu Interativo:** Design responsivo e acessível.
- **Descontos:** Cálculo dinâmico de descontos no carrinho.

## 🚀 Tecnologias Utilizadas

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/fsw-store.git
cd fsw-store
```

2.Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente no arquivo .env.local:

```bash
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
├── components/    # Componentes reutilizáveis
├── helpers/       # Funções utilitárias
├── pages/         # Páginas da aplicação
├── providers/     # Context API e providers
└── styles/        # Configuração de estilos
```

## 📌 Próximos Passos

- Melhorar a acessibilidade (a11y) com atributos ARIA.
- Adicionar testes unitários e integração.
- Expandir as funcionalidades do carrinho, como salvamento persistente.
