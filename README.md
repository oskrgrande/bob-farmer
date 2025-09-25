

# Monorepo - Backend & Frontend

Este repositorio contiene dos proyectos:

- **Backend** → Node.js + TypeScript (carpeta `backend`)
- **Frontend** → React + TypeScript (carpeta `frontend`)

Ambos usan **pnpm** como manejador de paquetes.

---

## 🚀 Requisitos previos

- [Node.js](https://nodejs.org/) (>= 18)
- [pnpm](https://pnpm.io/)

Instala `pnpm` globalmente si no lo tienes:

```bash
npm install -g pnpm
````

---

## 📥 Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

---

## ⚙️ Backend (Node.js + TypeScript)

### 1. Ir a la carpeta del backend

```bash
cd backend
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Ejecutar en desarrollo (Hot reaload)

```bash
pnpm dev
```

### 4. Ejecutar en producción

Primero compila el proyecto:

```bash
pnpm build
```

Luego corre:

```bash
pnpm start
```

---

## 💻 Frontend (React + Vite)

### 1. Ir a la carpeta del frontend

```bash
cd frontend
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Ejecutar en desarrollo

```bash
pnpm dev
```

### 4. Build de producción

```bash
pnpm build
```

### 5. Vista previa del build

```bash
pnpm preview
```

---

## 📜 Scripts útiles

### Backend

* `pnpm dev` → Levanta el servidor en modo desarrollo.
* `pnpm build` → Compila el proyecto.
* `pnpm start` → Corre el servidor compilado.

### Frontend

* `pnpm dev` → Levanta el servidor de desarrollo de React.
* `pnpm build` → Crea el build optimizado de producción.
* `pnpm preview` → Sirve el build generado.

---

## 📂 Estructura del repositorio

```
.
├── backend/   # Proyecto Node.js + TS
│   ├── src/
│   ├── package.json
│   └── ...
├── frontend/  # Proyecto React + Vite
│   ├── src/
│   ├── package.json
│   └── ...
└── README.md
```

---

## ✅ Notas

* Asegúrate de correr los comandos **dentro de cada carpeta** (`backend` o `frontend`).
* Usa **pnpm** en lugar de `npm` o `yarn` para evitar conflictos de dependencias.
