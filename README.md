# Anshu Kushwaha — Platform Architect & SRE Portfolio

[![Deploy to GitHub Pages](https://github.com/kushawahaanshu8858/anshu-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/kushawahaanshu8858/anshu-portfolio/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.x-cyan.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646cff.svg)](https://vitejs.dev/)

> **Live Portfolio:** [https://anshu8858.github.io/anshu-portfolio/](https://anshu8858.github.io/anshu-portfolio/)

---

## ⚡ Overview

A high-density, observability-inspired portfolio engineered for **Anshu Kushwaha** (Senior Full-Stack & DevOps Engineer // Lead Cloud Architect at Quancore Softech) and the **SYS_ARCH** Platform Architecture Dossier.

---

## 🚀 Key Features

### 1. Dual Architectural Identity Switcher
- **Anshu Kushwaha Profile:** 9+ years tenure at Quancore Softech (Sep 2015 – Present), highlighting GPU-aware Kubernetes clusters, multi-cloud operations (AWS, GCP, Hostinger), and 6 flagship platforms:
  - **Dzicard & Quancore Suite:** Automated digital invitation & poster rendering engine (FastAPI, Cairo vector compositor, AWS S3 streaming).
  - **Expoburg B2B Virtual Trade Expo:** Large-scale virtual expo platform with WebRTC video mesh and Elasticsearch directory querying.
  - **NuHire Cloud Platform:** Kubernetes cluster optimization, DMZ traffic boundaries, and GPU proctoring evaluation nodes.
  - **Infizero & ERP Systems:** Multi-tenant equipment rental ERP with PostgreSQL GiST exclusion atomic locks and dynamic form hydration.
  - **MyVapi City Portal & Directory:** Hyperlocal B2B search and municipal services portal with high-efficiency caching layers.
  - **Enterprise Storefronts & Telegram Bot Fleet:** Bagisto/Magento commerce backends paired with asynchronous Telegram webhook state machines.
- **SYS_ARCH Staff Dossier Mode:** Multi-region EKS migrations, Internal Developer Platforms (IDP / Crossplane), and KEDA event-driven autoscaling.

### 2. Interactive Kubernetes Topology Visualizer (`TopologyView`)
- Vector SVG diagram with dynamic **framer-motion** particle flow animations visualizing network packet movement.
- Dynamic mapping to active `profileMode` (Quancore Cloud & GPU Cluster vs. EKS Multi-Region Service Mesh).
- Clickable cluster nodes exposing real-time specifications, namespaces, replica targets, resource bounds, and simulated `kubectl describe` CLI diagnostics.
- Real-time animation controls (traffic pause/resume and tier filtering across Ingress, Compute, GPU, and Storage).

### 3. Production Architectures & Deep Dives
- 3-column Problem, Solution, and Quantified Impact breakdown across all featured platforms.
- Syntax-highlighted code viewers (`flagger-canary.yaml`, `render_engine.py`, `reconciler.go`, `reservation_lock.sql`, `matchmaker.service.ts`) with line numbers, copy-to-clipboard, and direct file download.
- Interactive workflow schematics and architecture topology mini-maps.

### 4. Interactive Bastion Management Console
- Functional terminal shell simulating a production Bastion host (`anshu@quancore-bastion:~$` / `devops-platform@mesh-bastion:~$`).
- Interactive command execution supporting:
  - `help` — command listing
  - `kubectl get nodes -o wide` — inspect cluster node pools
  - `kubectl get pods -n prod-platform` — inspect SRE workloads and KEDA scalers
  - `platformctl list-platforms` — list all 6 production platforms
  - `argocd app list` — verify GitOps synchronization and canary status
  - `cat flagger-canary.yaml` / `cat render_engine.py` — inspect source manifests
  - `curl contact` — launch direct engineering handshake
  - `clear` — reset terminal session

### 5. Continuous Delivery Pipeline Tracker
- Visual step tracker modeling a 5-stage zero-downtime deployment chain (`Lint & Test` → `OCI Build` → `Trivy Scan` → `IaC Apply` → `Argo Canary`).
- Click any stage to inspect real runner execution logs, durations, and Cosign container signing attestations.

### 6. Technical Resume Dossier & Contact Handshake
- Clean, print-ready, ATS-friendly technical resume modal (`ResumeModal`) with one-click print-to-PDF (`window.print()`).
- Direct communication modal with CLI quick-connect snippet:
  ```bash
  curl -s https://sysarch.engineer/contact.sh | sh
  ```

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, TypeScript 5, Vite 8 |
| **Styling & Theme** | Tailwind CSS v4, Obsidian Telemetry Design Tokens |
| **Motion & Animation** | Framer Motion (Motion v12) |
| **Iconography** | Lucide React |
| **CI/CD & Deployment** | GitHub Actions (`.github/workflows/deploy.yml`), GitHub Pages |
| **Typography** | Geist, JetBrains Mono, Plus Jakarta Sans |

---

## 💻 Local Development

### Prerequisites
- **Node.js**: v20 or higher
- **npm**: v10 or higher

### 1. Clone the repository
```bash
git clone https://github.com/kushawahaanshu8858/anshu-portfolio.git
cd anshu-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

### 4. Build for production
```bash
npm run build
```
Compiled static assets will be output to the `dist/` directory with `base: '/anshu-portfolio/'`.

### 5. Run Type Check & Lint
```bash
npm run lint
```

---

## 🚢 Deploying to GitHub Pages

This project is pre-configured for automated deployment via GitHub Actions:

1. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "feat: platform portfolio updates"
   git push origin main
   ```
2. In your GitHub repository:
   - Navigate to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, ensure **GitHub Actions** is selected.
3. The `.github/workflows/deploy.yml` workflow will automatically build and publish the site to:
   ```text
   https://<username>.github.io/anshu-portfolio/
   ```

---

## 📬 Contact & Engagements

- **Lead Engineer:** Anshu Kushwaha
- **Role:** Senior Full-Stack & DevOps Engineer // Lead Cloud Architect
- **Company:** Quancore Softech (Serving since Sep 2015)
- **Email:** [kushawahaanshu8858@gmail.com](mailto:kushawahaanshu8858@gmail.com)
- **Specializations:** Kubernetes Cluster Orchestration, GPU Scheduling, Python/Node Microservices, GitOps & Multi-Cloud Infrastructure.

---

## 📄 License

Distributed under the [MIT License](LICENSE). Built with clean architecture principles.
