# Instalaciones Garcias Backend

Backend API para el sitio web de Instalaciones Garcias. Construido con Express.js y Supabase.

## 🚀 Configuración Inicial

### 1. Instalar Dependencias

```bash
pnpm install
```

### 2. Configurar Variables de Entorno

Edita el archivo `.env` con tus credenciales de Supabase:

```env
PORT=3000
SUPABASE_URL=https://tu-proyecto.supabase.co
SUPABASE_KEY=tu-anon-key-aqui
SUPABASE_DB_PASSWORD=StMI5gxg5kXqOKoa
```

**Obtener credenciales de Supabase:**

1. Ve a tu proyecto en [Supabase Dashboard](https://supabase.com/dashboard)
2. Settings → API
3. Copia `Project URL` y `anon/public key`

### 3. Crear Tablas en Supabase

Ejecuta el SQL en `sql/schema.sql` en el SQL Editor de Supabase:

1. Ve a SQL Editor en tu proyecto
2. Copia y pega el contenido de `sql/schema.sql`
3. Ejecuta el script

### 4. Iniciar el Servidor

**Desarrollo (con auto-reload):**

```bash
pnpm dev
```

**Producción:**

```bash
pnpm start
```

El servidor estará disponible en `http://localhost:3000`

## 📡 Endpoints API

### Simulador

**POST** `/api/simulador/tiempo`

- Calcula tiempo estimado de proyecto
- Body: `{ area, serviceType, finish, painting }`

**POST** `/api/simulador/materiales`

- Calcula materiales necesarios
- Body: `{ area, serviceType }`

### Leads

**POST** `/api/leads`

- Guarda un lead en la base de datos
- Body: `{ nombre, telefono, email, tipo_servicio, m2, urgencia, mensaje }`

### Proyectos

**GET** `/api/proyectos`

- Obtiene lista de proyectos

## 🔧 Estructura del Proyecto

```
InstalacionesGarciasBackend/
├── db/
│   └── supabase.js       # Cliente de Supabase
├── routes/
│   ├── simulador.js      # Rutas del simulador
│   ├── leads.js          # Rutas de leads
│   └── proyectos.js      # Rutas de proyectos
├── sql/
│   └── schema.sql        # Esquema de base de datos
├── .env                  # Variables de entorno
├── server.js             # Punto de entrada
└── package.json
```

## 🌐 Deploy

### Render / Railway / Vercel

1. Conecta tu repositorio Git
2. Configura las variables de entorno
3. Deploy automático

**Variables de entorno requeridas:**

- `SUPABASE_URL`
- `SUPABASE_KEY`
- `PORT` (opcional, se asigna automáticamente)
