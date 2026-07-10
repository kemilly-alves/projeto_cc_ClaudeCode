# Curso ClaudeCode

Projeto Next.js 16 moderno com React 19, TypeScript e TailwindCSS 4. Template para aprendizado e desenvolvimento de aplicações web com a stack mais atual.

## Tech Stack

- **Framework**: [Next.js 16.2](https://nextjs.org) com App Router
- **React**: 19.2.4
- **Linguagem**: TypeScript 5
- **Estilos**: TailwindCSS 4
- **Fonts**: Geist (Google Fonts) para Sans e Mono

## Requisitos

- Node.js 18+ (recomendado 20+)
- npm, yarn, pnpm ou bun

## Instalação

```bash
npm install
```

## Desenvolvimento

Para rodar o servidor de desenvolvimento localmente na porta 3000:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado. A página se atualiza automaticamente conforme você edita `src/app/page.tsx`.

## Builds

**Build de produção:**
```bash
npm run build
```

**Iniciar servidor de produção:**
```bash
npm start
```

**Linting:**
```bash
npm run lint
```

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx      # Layout raiz com metadados
│   ├── page.tsx        # Página inicial
│   └── globals.css     # Estilos globais
```

## Desenvolvimento

### Primeiros passos

1. Clone ou rode o projeto
2. Instale as dependências: `npm install`
3. Inicie o servidor: `npm run dev`
4. Edite `src/app/page.tsx` para começar

### Guia de estilo

- **Componentes**: PascalCase em `src/components/`
- **Arquivos**: kebab-case
- **Estilos**: Tailwind only (sem CSS inline)
- **Tipos**: TypeScript com `strict: true`
- Sem `any` — usar `unknown` + type guards

## Recursos úteis

- [Documentação Next.js](https://nextjs.org/docs) - Features e API
- [Aprender Next.js](https://nextjs.org/learn) - Tutorial interativo
- [Repositório Next.js](https://github.com/vercel/next.js) - Issues e contribuições

## Deploy

A forma mais simples de fazer deploy é usar [Vercel Platform](https://vercel.com/new) (criadores do Next.js):

```bash
npm run build
npm start
```

Veja [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.
