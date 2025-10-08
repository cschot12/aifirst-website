# AI First - Sitio Web Oficial

Sitio web moderno y elegante para AI First, especialistas en transformación con inteligencia artificial.

## 🚀 Guía Paso a Paso para Gestionar tu Sitio Web

Esta guía te permitirá editar, previsualizar y publicar tu sitio web de forma completamente independiente.

---

## 📋 Tabla de Contenidos

1. [Requisitos Previos](#requisitos-previos)
2. [Instalación Inicial](#instalación-inicial)
3. [Cómo Editar el Contenido](#cómo-editar-el-contenido)
4. [Cómo Previsualizar Cambios](#cómo-previsualizar-cambios)
5. [Cómo Publicar en Internet](#cómo-publicar-en-internet)
6. [Solución de Problemas](#solución-de-problemas)

---

## 1️⃣ Requisitos Previos

Antes de comenzar, necesitas instalar estos programas en tu computadora:

### A. Node.js (Motor de JavaScript)

**Windows/Mac:**
1. Ve a https://nodejs.org/
2. Descarga la versión **LTS** (recomendada)
3. Ejecuta el instalador y sigue las instrucciones
4. Verifica la instalación abriendo Terminal/CMD y escribiendo:
   ```bash
   node --version
   ```
   Deberías ver algo como `v22.13.0`

### B. Git (Control de Versiones)

**Windows:**
1. Ve a https://git-scm.com/download/win
2. Descarga e instala
3. Durante la instalación, acepta las opciones por defecto

**Mac:**
1. Abre Terminal
2. Escribe: `git --version`
3. Si no está instalado, macOS te pedirá instalarlo automáticamente

**Verifica la instalación:**
```bash
git --version
```

### C. Editor de Código (VS Code - Recomendado)

1. Ve a https://code.visualstudio.com/
2. Descarga e instala para tu sistema operativo
3. Abre VS Code

---

## 2️⃣ Instalación Inicial

### Paso 1: Descargar el Proyecto

1. **Abre Terminal (Mac) o CMD/PowerShell (Windows)**

2. **Navega a donde quieres guardar el proyecto:**
   ```bash
   cd Desktop
   ```
   (Esto lo guardará en tu Escritorio)

3. **Clona el repositorio:**
   ```bash
   git clone https://github.com/cschot12/aifirst-website.git
   ```

4. **Entra a la carpeta del proyecto:**
   ```bash
   cd aifirst-website
   ```

### Paso 2: Instalar Dependencias

1. **Instala pnpm (gestor de paquetes rápido):**
   ```bash
   npm install -g pnpm
   ```

2. **Instala las dependencias del proyecto:**
   ```bash
   pnpm install
   ```
   
   Esto puede tardar 1-2 minutos. Verás muchas líneas de texto, es normal.

### Paso 3: Abrir en VS Code

1. **Desde la terminal, abre el proyecto en VS Code:**
   ```bash
   code .
   ```

¡Listo! Ya tienes todo instalado. 🎉

---

## 3️⃣ Cómo Editar el Contenido

### Estructura del Proyecto

```
aifirst-website/
├── src/
│   ├── App.jsx          ← AQUÍ EDITAS EL CONTENIDO
│   ├── App.css          ← AQUÍ EDITAS LOS ESTILOS
│   └── assets/          ← AQUÍ ESTÁN LAS IMÁGENES
├── index.html           ← Título de la página
└── package.json         ← Configuración del proyecto
```

### Ediciones Comunes

#### 📝 Cambiar Textos

**Archivo:** `src/App.jsx`

1. Abre `src/App.jsx` en VS Code
2. Busca el texto que quieres cambiar (Ctrl+F / Cmd+F)
3. Edita el texto
4. Guarda (Ctrl+S / Cmd+S)

**Ejemplos:**

**Cambiar el título principal:**
```jsx
// Busca (línea ~178):
<span className="gradient-text-first text-glow">Transformamos</span>

// Cambia a:
<span className="gradient-text-first text-glow">Revolucionamos</span>
```

**Cambiar la descripción:**
```jsx
// Busca (línea ~184):
<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
  Ponemos la inteligencia artificial en el centro de tu estrategia...
</p>

// Cambia el texto dentro de <p>...</p>
```

**Cambiar el badge:**
```jsx
// Busca (línea ~174):
🚀 IA Primero, Resultados Siempre

// Cambia a:
🚀 Tu Texto Aquí
```

#### 🎨 Cambiar Colores

**Archivo:** `src/App.css`

**Cambiar colores del gradiente:**
```css
/* Busca (línea ~167): */
.gradient-text-first {
  background: linear-gradient(135deg, #00D9FF 0%, #FF006B 50%, #FF9500 100%);
  /* Cambia los colores HEX aquí */
}
```

**Colores actuales:**
- `#00D9FF` = Cyan
- `#FF006B` = Magenta
- `#FF9500` = Naranja

**Herramienta para elegir colores:** https://htmlcolorcodes.com/

#### 🖼️ Cambiar Imágenes

**Carpeta:** `src/assets/`

1. **Reemplaza la imagen:**
   - Guarda tu nueva imagen en `src/assets/`
   - Usa el mismo nombre que la imagen que quieres reemplazar
   - O cambia la referencia en `App.jsx`

2. **Cambiar el logo:**
   - Reemplaza `aifirst-logo-full-color.png`
   - Reemplaza `aifirst-logo-dark-bg.png`
   - Reemplaza `aifirst-icon-only.png`

3. **Cambiar imagen de fondo:**
```jsx
// En App.jsx, busca (línea ~11):
import heroImage from './assets/hero-friday.jpg'

// Cambia a:
import heroImage from './assets/tu-nueva-imagen.jpg'
```

#### 📧 Cambiar Información de Contacto

**Busca en `App.jsx` (línea ~800):**
```jsx
<div className="space-y-4">
  <div className="flex items-start gap-3">
    <Mail className="w-5 h-5 text-primary mt-1" />
    <div>
      <p className="font-semibold">Email</p>
      <p className="text-muted-foreground">contacto@aifirst.com</p>
      {/* CAMBIA EL EMAIL AQUÍ */}
    </div>
  </div>
  
  <div className="flex items-start gap-3">
    <Phone className="w-5 h-5 text-primary mt-1" />
    <div>
      <p className="font-semibold">Teléfono</p>
      <p className="text-muted-foreground">+1 (555) 123-4567</p>
      {/* CAMBIA EL TELÉFONO AQUÍ */}
    </div>
  </div>
</div>
```

---

## 4️⃣ Cómo Previsualizar Cambios

### Iniciar el Servidor de Desarrollo

1. **Abre la terminal en VS Code:**
   - Menú: `Terminal` → `New Terminal`
   - O presiona: `` Ctrl+` `` (Windows) / `` Cmd+` `` (Mac)

2. **Inicia el servidor:**
   ```bash
   pnpm run dev
   ```

3. **Abre tu navegador:**
   - Ve a: http://localhost:5173
   - O presiona Ctrl+Click en el link que aparece en la terminal

4. **Ver cambios en tiempo real:**
   - Edita cualquier archivo
   - Guarda (Ctrl+S / Cmd+S)
   - El navegador se actualizará automáticamente ✨

### Detener el Servidor

- En la terminal, presiona: `Ctrl+C`

---

## 5️⃣ Cómo Publicar en Internet

Hay 3 opciones para publicar tu sitio. **Vercel es la más fácil y recomendada.**

### Opción 1: Vercel (Recomendado - Gratis)

#### Primera vez:

1. **Ve a:** https://vercel.com/signup
2. **Regístrate con GitHub:**
   - Haz clic en "Continue with GitHub"
   - Autoriza Vercel

3. **Importa tu proyecto:**
   - Haz clic en "Add New..." → "Project"
   - Selecciona `aifirst-website`
   - Haz clic en "Import"

4. **Configura el proyecto:**
   - **Framework Preset:** Vite
   - **Build Command:** `pnpm run build`
   - **Output Directory:** `dist`
   - Haz clic en "Deploy"

5. **¡Listo!** 
   - En 2-3 minutos tendrás una URL como:
   - `https://aifirst-website.vercel.app`

#### Publicar actualizaciones:

**Método A: Desde VS Code (Recomendado)**

1. **Guarda tus cambios:**
   ```bash
   git add .
   git commit -m "Descripción de tus cambios"
   git push
   ```

2. **Vercel desplegará automáticamente** (1-2 minutos)

**Método B: Desde Vercel Dashboard**

1. Ve a https://vercel.com/dashboard
2. Selecciona tu proyecto
3. Haz clic en "Redeploy"

### Opción 2: Netlify (Alternativa - Gratis)

1. **Ve a:** https://netlify.com
2. **Regístrate con GitHub**
3. **"Add new site" → "Import an existing project"**
4. **Selecciona GitHub → `aifirst-website`**
5. **Configuración:**
   - Build command: `pnpm run build`
   - Publish directory: `dist`
6. **Deploy**

### Opción 3: GitHub Pages (Gratis pero más técnico)

1. **Instala gh-pages:**
   ```bash
   pnpm add -D gh-pages
   ```

2. **Edita `package.json`:**
   ```json
   {
     "scripts": {
       "deploy": "pnpm run build && gh-pages -d dist"
     }
   }
   ```

3. **Publica:**
   ```bash
   pnpm run deploy
   ```

4. **Tu sitio estará en:**
   `https://cschot12.github.io/aifirst-website/`

---

## 6️⃣ Solución de Problemas

### ❌ Error: "command not found: pnpm"

**Solución:**
```bash
npm install -g pnpm
```

### ❌ Error: "port 5173 is already in use"

**Solución:**
```bash
# Detén el servidor anterior (Ctrl+C)
# O usa otro puerto:
pnpm run dev -- --port 3000
```

### ❌ Los cambios no se ven en el navegador

**Solución:**
1. Guarda el archivo (Ctrl+S / Cmd+S)
2. Refresca el navegador (F5 o Cmd+R)
3. Si no funciona, detén el servidor (Ctrl+C) y reinícialo:
   ```bash
   pnpm run dev
   ```

### ❌ Error al hacer `git push`

**Solución:**
```bash
# Configura tu identidad (solo primera vez):
git config --global user.email "tu@email.com"
git config --global user.name "Tu Nombre"

# Intenta de nuevo:
git push
```

### ❌ "Cannot find module" o errores de dependencias

**Solución:**
```bash
# Reinstala las dependencias:
rm -rf node_modules
pnpm install
```

---

## 📚 Recursos Adicionales

### Aprende más sobre las tecnologías usadas:

- **React:** https://react.dev/learn
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vite:** https://vitejs.dev/guide/
- **Framer Motion:** https://www.framer.com/motion/

### Comunidades de ayuda:

- **Stack Overflow:** https://stackoverflow.com/
- **React Discord:** https://discord.gg/react

---

## 🎯 Flujo de Trabajo Recomendado

```bash
# 1. Abre el proyecto
cd aifirst-website
code .

# 2. Inicia el servidor de desarrollo
pnpm run dev

# 3. Edita archivos en VS Code
# 4. Previsualiza en http://localhost:5173

# 5. Cuando estés satisfecho, guarda los cambios:
git add .
git commit -m "Descripción de cambios"
git push

# 6. Vercel desplegará automáticamente
```

---

## 📄 Licencia

Este proyecto fue creado para AI First. Todos los derechos reservados.

---

**¡Felicidades! Ahora puedes gestionar tu sitio web de forma independiente.** 🎉
