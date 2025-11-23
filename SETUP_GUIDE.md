# 🔧 Guía de Configuración Completa

## Paso 1: Obtener Credenciales de Supabase

Basándome en tus capturas de pantalla, tu proyecto se llama **InstalacionesGarcias**.

### Obtener URL y API Key:

1. Ve a tu proyecto en Supabase Dashboard
2. Click en **Settings** (⚙️) en el menú lateral
3. Click en **API**
4. Copia los siguientes valores:

   - **Project URL**: `https://[tu-proyecto-id].supabase.co`
   - **anon/public key**: Una clave larga que empieza con `eyJ...`

### Actualizar el archivo `.env`:

Abre `InstalacionesGarciasBackend/.env` y actualiza:

```env
PORT=3000
SUPABASE_URL=https://lpqrvpdlfmuseytqih.supabase.co
SUPABASE_KEY=eyJ... (tu clave aquí)
SUPABASE_DB_PASSWORD=StMI5gxg5kXqOKoa
```

---

## Paso 2: Crear Tablas en Supabase

1. En tu proyecto de Supabase, ve a **SQL Editor** (icono de código)
2. Click en **New Query**
3. Copia y pega todo el contenido de `InstalacionesGarciasBackend/sql/schema.sql`
4. Click en **RUN** o presiona `Ctrl + Enter`

Deberías ver un mensaje de éxito y las tablas aparecerán en **Table Editor**.

---

## Paso 3: Iniciar el Backend

Abre una terminal en `InstalacionesGarciasBackend`:

```bash
cd "c:/Escritorio/MiAreaDeTrabajo/Instalaciones Garcias/InstalacionesGarciasBackend"
pnpm dev
```

Deberías ver:

```
Server running on port 3000
```

---

## Paso 4: Iniciar el Frontend

Abre **otra terminal** en `InstalacionesGarciasFronted`:

```bash
cd "c:/Escritorio/MiAreaDeTrabajo/Instalaciones Garcias/InstalacionesGarciasFronted"
pnpm dev
```

---

## Paso 5: Probar la Integración

### Prueba 1: Simulador de Proyectos

1. Abre `http://localhost:4321` (o el puerto que use Astro)
2. Ve a la sección del **Simulador**
3. Ingresa:
   - Área: `50`
   - Tipo: `Drywall y Tablaroca`
   - Acabado: `Estándar`
4. Click en **Calcular Estimación**
5. Deberías ver el resultado con días y materiales

**Verificar en DevTools:**

- Abre `F12` → Network
- Deberías ver llamadas a:
  - `POST http://localhost:3000/api/simulador/tiempo`
  - `POST http://localhost:3000/api/simulador/materiales`

### Prueba 2: Formulario de Contacto

1. Ve a la página de **Contacto**
2. Llena el formulario con datos de prueba
3. Click en **Enviar Mensaje**
4. Deberías ver: "Mensaje enviado correctamente"

**Verificar en Supabase:**

- Ve a **Table Editor** → `leads`
- Deberías ver tu registro guardado

---

## 🐛 Solución de Problemas

### Error: "SUPABASE_URL is missing"

- Verifica que el archivo `.env` esté en la raíz de `InstalacionesGarciasBackend`
- Asegúrate de que las variables no tengan espacios extras

### Error: CORS

- El backend ya tiene CORS habilitado
- Si persiste, verifica que el frontend esté llamando a `http://localhost:3000`

### Error: "relation 'leads' does not exist"

- Ejecuta el SQL en `sql/schema.sql` en Supabase
- Verifica en Table Editor que las tablas existan

### El simulador no funciona

- Abre DevTools Console (`F12`)
- Busca errores de red o JavaScript
- Verifica que el backend esté corriendo en puerto 3000

---

## 📊 Próximos Pasos

1. **Deploy del Backend**: Render, Railway o Vercel
2. **Actualizar Frontend**: Cambiar `baseURL` en `apiClient.js` a la URL de producción
3. **Poblar Proyectos**: Insertar datos en la tabla `proyectos`
4. **Analytics**: Usar `log_simulaciones` para rastrear uso del simulador
