# 🏗️ Instalaciones Garcias - Backend API

Backend RESTful API para el sitio web de Instalaciones Garcias. Sistema de gestión de leads, simulador de proyectos y administración de portafolio construido con **Express.js** y **Supabase**.

---

## 📋 Tabla de Contenidos

- [Descripción General](#-descripción-general)
- [Tecnologías](#-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [API Endpoints](#-api-endpoints)
- [Base de Datos](#-base-de-datos)
- [Desarrollo](#-desarrollo)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Seguridad](#-seguridad)
- [Escalabilidad](#-escalabilidad)
- [Troubleshooting](#-troubleshooting)
- [Contribución](#-contribución)

---

## 🎯 Descripción General

Este backend proporciona servicios para:

- **Simulador de Proyectos**: Cálculo de tiempo estimado y materiales necesarios para proyectos de instalación
- **Gestión de Leads**: Captura y almacenamiento de solicitudes de clientes potenciales
- **Portafolio de Proyectos**: API para consultar proyectos completados
- **CORS habilitado**: Preparado para integración con frontend en diferentes dominios

### Características Principales

- ✅ API RESTful con arquitectura modular
- ✅ Validación de datos en todas las rutas
- ✅ Manejo centralizado de errores
- ✅ Logging de requests
- ✅ CORS configurado para producción
- ✅ Base de datos PostgreSQL en Supabase
- ✅ Preparado para deployment en múltiples plataformas

---

## 🛠️ Tecnologías

| Tecnología     | Versión | Propósito                       |
| -------------- | ------- | ------------------------------- |
| **Node.js**    | ≥18.0.0 | Runtime de JavaScript           |
| **Express.js** | ^4.18.2 | Framework web                   |
| **Supabase**   | ^2.39.0 | Base de datos PostgreSQL + Auth |
| **CORS**       | ^2.8.5  | Cross-Origin Resource Sharing   |
| **dotenv**     | ^16.3.1 | Gestión de variables de entorno |
| **nodemon**    | ^3.0.2  | Auto-reload en desarrollo       |

---

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** v18 o superior ([Descargar](https://nodejs.org/))
- **pnpm** ([Instalación](https://pnpm.io/installation))
- **Cuenta de Supabase** ([Crear cuenta](https://supabase.com/))
- **Git** para control de versiones

### Verificar instalaciones:

```bash
node --version   # Debe ser v18+
pnpm --version   # Debe estar instalado
git --version    # Debe estar instalado
```

---

## 🚀 Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/GaboInsane6489/InstalacionesGarciasBackend.git
cd InstalacionesGarciasBackend
```

### 2. Instalar Dependencias

```bash
pnpm install
```

Este comando instalará todas las dependencias listadas en `package.json`.

---

## ⚙️ Configuración

### 1. Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto basándote en `.env.example`:

```bash
cp .env.example .env
```

Edita el archivo `.env` con tus credenciales:

```env
# Puerto del servidor (opcional, por defecto 3000)
PORT=3000

# Credenciales de Supabase
SUPABASE_URL=https://tu-proyecto-id.supabase.co
SUPABASE_KEY=tu-anon-key-aqui
SUPABASE_DB_PASSWORD=tu-contraseña-aqui
```

### 2. Obtener Credenciales de Supabase

1. Accede a [Supabase Dashboard](https://supabase.com/dashboard)
2. Selecciona o crea un proyecto
3. Ve a **Settings** → **API**
4. Copia los siguientes valores:
   - **Project URL** → `SUPABASE_URL`
   - **anon/public key** → `SUPABASE_KEY`
5. Para la contraseña de la base de datos:
   - Ve a **Settings** → **Database**
   - Usa la contraseña que configuraste al crear el proyecto

> ⚠️ **IMPORTANTE**: Nunca subas el archivo `.env` a Git. Ya está incluido en `.gitignore`.

### 3. Configurar Base de Datos

Ejecuta el script SQL para crear las tablas necesarias:

1. Ve al **SQL Editor** en tu proyecto de Supabase
2. Abre el archivo `sql/schema.sql` de este proyecto
3. Copia todo el contenido
4. Pégalo en el SQL Editor de Supabase
5. Haz clic en **Run** para ejecutar

Esto creará las siguientes tablas:

- `leads` - Almacena solicitudes de clientes
- `proyectos` - Portafolio de proyectos completados

---

## 📁 Estructura del Proyecto

```
InstalacionesGarciasBackend/
│
├── db/
│   └── supabase.js          # Cliente de Supabase configurado
│
├── routes/
│   ├── simulador.js         # Endpoints del simulador de proyectos
│   ├── leads.js             # Endpoints de gestión de leads
│   └── proyectos.js         # Endpoints de proyectos
│
├── sql/
│   └── schema.sql           # Esquema de base de datos
│
├── .env.example             # Plantilla de variables de entorno
├── .gitignore               # Archivos ignorados por Git
├── server.js                # Punto de entrada de la aplicación
├── package.json             # Dependencias y scripts
├── pnpm-lock.yaml           # Lock file de pnpm
├── test.http                # Ejemplos de requests HTTP
├── README.md                # Este archivo
├── QUICKSTART.md            # Guía rápida de inicio
└── SETUP_GUIDE.md           # Guía detallada de configuración
```

### Descripción de Módulos

#### `server.js`

Punto de entrada principal. Configura:

- Express app
- Middlewares (CORS, JSON parser, URL-encoded)
- Rutas
- Manejo de errores
- Inicio del servidor

#### `db/supabase.js`

Cliente de Supabase configurado y exportado para uso en toda la aplicación.

#### `routes/simulador.js`

Lógica de negocio para cálculos de proyectos:

- Estimación de tiempo basada en área y tipo de servicio
- Cálculo de materiales necesarios
- Factores de complejidad por acabado y pintura

#### `routes/leads.js`

Gestión de leads:

- Validación de datos de entrada
- Inserción en base de datos
- Respuestas estructuradas

#### `routes/proyectos.js`

Consulta de proyectos:

- Listado de proyectos completados
- Ordenamiento por fecha

---

## 🌐 API Endpoints

### Base URL

```
http://localhost:3000/api
```

### 1. Simulador - Calcular Tiempo

**Endpoint:** `POST /api/simulador/tiempo`

**Descripción:** Calcula el tiempo estimado para completar un proyecto.

**Request Body:**

```json
{
  "area": 100,
  "serviceType": "drywall",
  "finish": "premium",
  "painting": true
}
```

**Parámetros:**

- `area` (number, requerido): Área en m² del proyecto
- `serviceType` (string, requerido): Tipo de servicio (`drywall`, `cielo_raso`, `pintura`, `completo`)
- `finish` (string, opcional): Acabado (`basico`, `estandar`, `premium`)
- `painting` (boolean, opcional): Si incluye pintura

**Response:**

```json
{
  "tiempoEstimado": 15,
  "unidad": "días"
}
```

---

### 2. Simulador - Calcular Materiales

**Endpoint:** `POST /api/simulador/materiales`

**Descripción:** Calcula los materiales necesarios para un proyecto.

**Request Body:**

```json
{
  "area": 100,
  "serviceType": "drywall"
}
```

**Response:**

```json
{
  "materiales": {
    "placas_drywall": 34,
    "perfiles_metalicos": 50,
    "tornillos_kg": 3,
    "masilla_kg": 15,
    "cinta_metros": 120
  }
}
```

---

### 3. Leads - Crear Lead

**Endpoint:** `POST /api/leads`

**Descripción:** Guarda una solicitud de cliente en la base de datos.

**Request Body:**

```json
{
  "nombre": "Juan Pérez",
  "telefono": "+56912345678",
  "email": "juan@example.com",
  "tipo_servicio": "drywall",
  "m2": 150,
  "urgencia": "media",
  "mensaje": "Necesito cotización para remodelación"
}
```

**Parámetros:**

- `nombre` (string, requerido): Nombre del cliente
- `telefono` (string, requerido): Teléfono de contacto
- `email` (string, requerido): Email del cliente
- `tipo_servicio` (string, requerido): Tipo de servicio solicitado
- `m2` (number, opcional): Metros cuadrados del proyecto
- `urgencia` (string, opcional): Nivel de urgencia (`baja`, `media`, `alta`)
- `mensaje` (string, opcional): Mensaje adicional del cliente

**Response:**

```json
{
  "success": true,
  "message": "Lead guardado exitosamente",
  "data": {
    "id": "uuid-generado",
    "nombre": "Juan Pérez",
    "created_at": "2025-11-23T18:30:00Z"
  }
}
```

---

### 4. Proyectos - Listar Proyectos

**Endpoint:** `GET /api/proyectos`

**Descripción:** Obtiene la lista de proyectos completados.

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "titulo": "Remodelación Oficina Central",
      "descripcion": "Instalación de drywall y cielo raso",
      "imagen_url": "https://...",
      "categoria": "comercial",
      "fecha_completado": "2025-10-15",
      "created_at": "2025-10-20T10:00:00Z"
    }
  ]
}
```

---

## 🗄️ Base de Datos

### Esquema de Tablas

#### Tabla: `leads`

| Campo           | Tipo         | Descripción                 |
| --------------- | ------------ | --------------------------- |
| `id`            | UUID         | Primary key (auto-generado) |
| `nombre`        | VARCHAR(255) | Nombre del cliente          |
| `telefono`      | VARCHAR(50)  | Teléfono de contacto        |
| `email`         | VARCHAR(255) | Email del cliente           |
| `tipo_servicio` | VARCHAR(100) | Tipo de servicio solicitado |
| `m2`            | INTEGER      | Metros cuadrados (opcional) |
| `urgencia`      | VARCHAR(20)  | Nivel de urgencia           |
| `mensaje`       | TEXT         | Mensaje del cliente         |
| `created_at`    | TIMESTAMP    | Fecha de creación           |

#### Tabla: `proyectos`

| Campo              | Tipo         | Descripción                 |
| ------------------ | ------------ | --------------------------- |
| `id`               | UUID         | Primary key (auto-generado) |
| `titulo`           | VARCHAR(255) | Título del proyecto         |
| `descripcion`      | TEXT         | Descripción detallada       |
| `imagen_url`       | TEXT         | URL de imagen principal     |
| `categoria`        | VARCHAR(50)  | Categoría del proyecto      |
| `fecha_completado` | DATE         | Fecha de finalización       |
| `created_at`       | TIMESTAMP    | Fecha de registro           |

---

## 💻 Desarrollo

### Iniciar Servidor de Desarrollo

```bash
pnpm dev
```

Esto iniciará el servidor con **nodemon**, que reiniciará automáticamente cuando detecte cambios en los archivos.

### Iniciar Servidor de Producción

```bash
pnpm start
```

### Scripts Disponibles

```json
{
  "start": "node server.js", // Producción
  "dev": "nodemon server.js" // Desarrollo con auto-reload
}
```

---

## 🧪 Testing

### Testing Manual con `test.http`

El archivo `test.http` contiene ejemplos de todas las requests. Puedes usarlo con extensiones como **REST Client** en VS Code.

Ejemplo de uso:

1. Instala la extensión **REST Client** en VS Code
2. Abre `test.http`
3. Haz clic en "Send Request" sobre cada endpoint

### Testing con cURL

```bash
# Test simulador de tiempo
curl -X POST http://localhost:3000/api/simulador/tiempo \
  -H "Content-Type: application/json" \
  -d '{"area":100,"serviceType":"drywall","finish":"premium","painting":true}'

# Test crear lead
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test User","telefono":"+56912345678","email":"test@example.com","tipo_servicio":"drywall"}'

# Test listar proyectos
curl http://localhost:3000/api/proyectos
```

---

## 🚢 Deployment

### Plataformas Recomendadas

- **Render** (Recomendado)
- **Railway**
- **Vercel** (Serverless)
- **Heroku**
- **DigitalOcean App Platform**

### Deploy en Render

1. Crea una cuenta en [Render](https://render.com/)
2. Conecta tu repositorio de GitHub
3. Crea un nuevo **Web Service**
4. Configura:
   - **Build Command**: `pnpm install`
   - **Start Command**: `pnpm start`
5. Agrega las variables de entorno:
   - `SUPABASE_URL`
   - `SUPABASE_KEY`
   - `SUPABASE_DB_PASSWORD`
6. Deploy automático

### Deploy en Railway

1. Instala Railway CLI o usa la web
2. Conecta tu repositorio
3. Configura variables de entorno
4. Deploy automático en cada push a `main`

### Variables de Entorno en Producción

Asegúrate de configurar estas variables en tu plataforma de deployment:

```
SUPABASE_URL=https://tu-proyecto.supabase.co
SUPABASE_KEY=tu-anon-key
SUPABASE_DB_PASSWORD=tu-contraseña
PORT=3000  # Opcional, se asigna automáticamente
```

---

## 🔒 Seguridad

### Mejores Prácticas Implementadas

- ✅ Variables de entorno para credenciales sensibles
- ✅ `.env` en `.gitignore`
- ✅ CORS configurado
- ✅ Validación de datos de entrada
- ✅ Uso de `anon key` de Supabase (no service key)

### Recomendaciones Adicionales

Para producción, considera implementar:

- **Rate Limiting**: Limitar requests por IP
- **Helmet.js**: Headers de seguridad HTTP
- **Input Sanitization**: Sanitizar inputs para prevenir inyecciones
- **HTTPS**: Usar siempre HTTPS en producción
- **Authentication**: JWT o sesiones para endpoints protegidos
- **Logging**: Winston o similar para logs estructurados

---

## 📈 Escalabilidad

### Consideraciones para Escalar

#### 1. **Caché**

Implementar Redis para cachear:

- Resultados de simulador
- Lista de proyectos
- Queries frecuentes

#### 2. **Load Balancing**

- Usar múltiples instancias del servidor
- Nginx o balanceador de la plataforma cloud

#### 3. **Base de Datos**

- Índices en columnas frecuentemente consultadas
- Connection pooling (ya incluido en Supabase)
- Read replicas para queries de lectura

#### 4. **Monitoreo**

- Implementar APM (Application Performance Monitoring)
- Logs centralizados
- Alertas de errores

#### 5. **Microservicios**

Si el proyecto crece, considera separar en microservicios:

- Servicio de Simulador
- Servicio de Leads
- Servicio de Proyectos

---

## 🔧 Troubleshooting

### Error: "Cannot connect to Supabase"

**Solución:**

1. Verifica que `SUPABASE_URL` y `SUPABASE_KEY` estén correctos
2. Asegúrate de que el proyecto de Supabase esté activo
3. Revisa la conexión a internet

### Error: "Port already in use"

**Solución:**

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

### Error: "Module not found"

**Solución:**

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Logs no aparecen

**Solución:**
Verifica que no estés usando un proceso manager que capture stdout. En desarrollo usa `pnpm dev`.

---

## 👥 Contribución

### Workflow para Contribuir

1. **Fork** el repositorio
2. Crea una **branch** para tu feature:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. **Commit** tus cambios:
   ```bash
   git commit -m "feat: agregar nueva funcionalidad"
   ```
4. **Push** a tu branch:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un **Pull Request**

### Convenciones de Código

- Usa **camelCase** para variables y funciones
- Usa **PascalCase** para clases
- Comenta código complejo
- Mantén funciones pequeñas y enfocadas
- Sigue el estilo de código existente

### Commits Semánticos

```
feat: nueva funcionalidad
fix: corrección de bug
docs: cambios en documentación
style: formateo, punto y coma faltante, etc.
refactor: refactorización de código
test: agregar tests
chore: actualizar dependencias
```

---

## 📄 Licencia

Este proyecto es privado y pertenece a **Instalaciones Garcias**.

---

## 📞 Contacto

Para preguntas o soporte:

- **Desarrollador**: Gabriel Insane
- **GitHub**: [@GaboInsane6489](https://github.com/GaboInsane6489)
- **Proyecto**: [InstalacionesGarciasBackend](https://github.com/GaboInsane6489/InstalacionesGarciasBackend)

---

## 🗺️ Roadmap

### Próximas Funcionalidades

- [ ] Sistema de autenticación para admin
- [ ] Dashboard de administración
- [ ] Envío de emails automáticos al recibir leads
- [ ] Integración con WhatsApp Business API
- [ ] Sistema de notificaciones en tiempo real
- [ ] Analytics y reportes
- [ ] API de cotizaciones automáticas
- [ ] Integración con CRM

---

**Última actualización**: Noviembre 2025  
**Versión**: 1.0.0
