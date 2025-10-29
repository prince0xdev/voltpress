# 🧩 TODO — VoltPress Roadmap

> *“Learning by building. Reimagining by doing.”*
> VoltPress is the journey of a young developer who dares to rebuild WordPress — entirely in JavaScript ⚡

---

## 🏗️ Phase 0 — Setup & Foundations

**🎯 Goal:** Prepare the environment, the repo, and the core structure.

* [ ] Initialize monorepo (e.g. with **Turborepo** or **Nx**)
* [ ] Setup folders:

  * `/core` → main backend logic (posts, users, etc.)
  * `/admin` → Next.js dashboard
  * `/shared` → utils, constants, types
* [ ] Setup **TypeScript**, **ESLint**, **Prettier**, **Husky**
* [ ] Setup **PostgreSQL** with **Prisma ORM**
* [ ] Initialize **Fastify** (or Express) server
* [ ] Define `.env` and config system
* [ ] Write base README and manifesto (done ✅)

---

## ⚙️ Phase 1 — Core System (the “heart”)

**🎯 Goal:** Create a minimal CMS engine (without UI yet).

* [ ] Define core models: `User`, `Post`, `Media`, `Setting`
* [ ] Implement CRUD API routes (REST + GraphQL)
* [ ] Setup authentication (JWT / OAuth)
* [ ] Add plugin/hook system foundation (event bus)
* [ ] Add a logger & error handler
* [ ] Seed database with test data

---

## 🎨 Phase 2 — Admin Interface (Next.js + Tailwind)

**🎯 Goal:** Build the modern admin dashboard (VoltPress Admin).

* [ ] Setup Next.js + TailwindCSS project
* [ ] Create login/signup pages
* [ ] Build dashboard layout (sidebar, header, theme switcher)
* [ ] Pages:

  * [ ] Posts list & editor (Tiptap or Lexical)
  * [ ] Media library (drag & drop uploads)
  * [ ] Settings page (site title, logo, etc.)
* [ ] Integrate API routes with backend
* [ ] Add loading states, error messages, notifications

---

## 🔌 Phase 3 — Plugin & Theme System

**🎯 Goal:** Make VoltPress extensible and customizable.

* [ ] Define plugin API (register hooks, filters, events)
* [ ] Example plugin: “Hello VoltPress”
* [ ] Theme system using React components
* [ ] Create a base theme (“VoltPress Default”)
* [ ] Allow hot reloading of plugins/themes

---

## 🌍 Phase 4 — WordPress Importer (Fun Project)

**🎯 Goal:** Help users migrate their WordPress site to VoltPress.

* [ ] Create import tool (JSON/XML input)
* [ ] Convert posts, users, and media automatically
* [ ] Map categories/tags
* [ ] Add import progress UI

---

## ⚡ Phase 5 — Deployment & Open Source Polish

**🎯 Goal:** Make VoltPress usable by others.

* [ ] Docker setup (PostgreSQL + backend + admin)
* [ ] Deploy demo on **Vercel + Render**
* [ ] Write detailed docs: `docs/architecture.md`, `docs/plugins.md`
* [ ] Add logo, branding, and banner
* [ ] Create GitHub Discussions & Issues templates
* [ ] Write blog post / LinkedIn post: “The Birth of VoltPress”

---

## 💡 Long-Term Ideas (After MVP)

* [ ] Multi-language support
* [ ] AI-powered content assistant
* [ ] Markdown + block hybrid editor
* [ ] VoltPress CLI (`volt new theme`, `volt plugin create`)
* [ ] SaaS version (VoltCloud?)
* [ ] REST + GraphQL public APIs
* [ ] Federation with other VoltPress instances

---

## 🧑‍💻 Personal Dev Goals

> *Because VoltPress is as much about the journey as the code.*

* [ ] Learn **Prisma deeply** (relations, migrations, seeding)
* [ ] Master **Fastify** and middleware design
* [ ] Improve React + Next.js architecture patterns
* [ ] Study how WordPress manages themes/plugins internally
* [ ] Document everything — VoltPress should teach others too
