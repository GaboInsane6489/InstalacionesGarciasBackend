# 🚀 Quick Start Guide

## Paso 1: Configurar Variables de Entorno

El archivo `.env` ya está configurado con tus credenciales de Supabase.

**✅ Credenciales configuradas:**

- Project URL: `https://lpqryrpdlifnuseytqlh.supabase.co`
- API Key: Configurada
- DB Password: `StMI5gxg5kXqOKoa`

## Paso 2: Ejecutar SQL Schema

1. Ve a tu proyecto de Supabase: https://supabase.com/dashboard/project/lpqryrpdlifnuseytqlh
2. Click en **SQL Editor** en el menú lateral
3. Click en **New Query**
4. Copia y pega todo el contenido de `sql/schema.sql`
5. Click en **RUN** (o presiona `Ctrl + Enter`)

**✅ Esto creará:**

- Tabla `leads` (para formularios de contacto)
- Tabla `proyectos` (para portafolio - opcional)
- Tabla `log_simulaciones` (para analytics - opcional)

## Paso 3: Instalar Dependencias (si no lo hiciste)

```bash
pnpm install
```

## Paso 4: Iniciar el Backend

```bash
pnpm dev
```

**Deberías ver:**

```
🚀 Server running on port 3000
📡 API available at http://localhost:3000/api
```

## Paso 5: Iniciar el Frontend

En otra terminal:

```bash
cd "../InstalacionesGarciasFronted"
pnpm dev
```

## Paso 6: Probar

1. **Health Check**: Abre http://localhost:3000 en tu navegador
2. **Simulador**: Ve al frontend y prueba el simulador de proyectos
3. **Contacto**: Llena el formulario de contacto
4. **Verificar en Supabase**: Ve a Table Editor → `leads` para ver los datos guardados

---

## 🧪 Testing con test.http

Si tienes la extensión **REST Client** en VS Code:

1. Abre `test.http`
2. Click en "Send Request" sobre cada endpoint
3. Verifica las respuestas

---

## ✅ Checklist de Verificación

- [ ] Backend corriendo en puerto 3000
- [ ] Frontend corriendo (puerto 4321 o similar)
- [ ] SQL ejecutado en Supabase
- [ ] Simulador funciona y muestra resultados
- [ ] Formulario de contacto envía datos
- [ ] Datos aparecen en Supabase Table Editor

---

## 🐛 Solución Rápida de Problemas

**Error: "Cannot find module 'express'"**

```bash
pnpm install
```

**Error: "SUPABASE_URL is missing"**

- Verifica que el archivo `.env` exista en la raíz del backend
- Reinicia el servidor

**CORS Error en el frontend**

- Verifica que el backend esté corriendo
- El CORS ya está configurado para `localhost:4321`

**"relation 'leads' does not exist"**

- Ejecuta el SQL en Supabase SQL Editor
