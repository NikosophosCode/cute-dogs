# Guía de Deploy en Vercel

## Requisitos Previos
- Cuenta en [Vercel](https://vercel.com)
- Repositorio en GitHub conectado a Vercel
- Node.js 18+ instalado localmente

## Pasos para Deploy

### Opción 1: Deploy Automático (Recomendado)

1. **Conectar Repositorio a Vercel**
   - Ve a [https://vercel.com/new](https://vercel.com/new)
   - Selecciona "Import Git Repository"
   - Busca y selecciona el repositorio `cute-dogs`
   - Haz click en "Import"

2. **Configurar Proyecto**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` (ya configurado)
   - **Output Directory**: `dist` (ya configurado)
   - **Install Command**: `npm install` (ya configurado)

3. **Variables de Entorno** (si es necesario)
   - No se requieren variables de entorno adicionales
   - Las APIs (TheDogAPI y DogAPI) son públicas

4. **Deploy**
   - Haz click en "Deploy"
   - Vercel compilará y desplegará automáticamente
   - Tu sitio estará disponible en: `https://cute-dogs.vercel.app`

### Opción 2: Deploy Manual con Vercel CLI

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Autenticarse
vercel login

# 3. Deploy
vercel

# 4. Para producción
vercel --prod
```

## Configuración Actual

El proyecto ya está configurado con:
- ✅ `vercel.json` - Configuración de build y rewrites
- ✅ `.vercelignore` - Archivos a ignorar en deploy
- ✅ `netlify.toml` - Configuración alternativa (compatible)
- ✅ Vite como build tool
- ✅ React 18
- ✅ TypeScript

## Características Desplegadas

### Página Principal - Random Dogs
- 🎲 Perro aleatorio con imagen
- 💡 Dato curioso sobre perros (traducido al español)
- ❤️ Sistema de favoritos
- 🔗 Logo clickeable para volver a inicio

### Traducción de Facts
- Traducción automática al español
- Caché en memoria y localStorage
- Sin API key requerida
- Fallback al inglés si falla la traducción

### Otras Páginas
- 🔍 Búsqueda de perros por raza
- 📚 Catálogo de razas
- ❤️ Página de favoritos

## Monitoreo Post-Deploy

1. **Verificar Funcionalidad**
   - Accede a https://cute-dogs.vercel.app
   - Prueba todas las páginas
   - Verifica que los facts se traduzcan correctamente
   - Prueba el sistema de favoritos

2. **Ver Logs**
   - En el dashboard de Vercel
   - Sección "Deployments"
   - Haz click en el deployment para ver detalles

3. **Configurar Dominio Personalizado** (Opcional)
   - En Vercel Dashboard → Settings → Domains
   - Agrega tu dominio personalizado
   - Sigue las instrucciones de DNS

## Troubleshooting

### Error: "Build failed"
```bash
# Limpiar y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Las APIs no funcionan
- Verifica que no haya CORS issues
- Las APIs usadas son públicas y no requieren autenticación
- Revisa la consola del navegador para errores

### Traducción no funciona
- Verifica conexión a internet
- MyMemory API podría tener límite de requests
- Revisa localStorage para ver si hay caché

## Commits Realizados

```
adec153 - feat: add DogFact type for dog facts API
39d723e - feat: add dog facts API with Spanish translation and caching
bd87129 - feat: add dog facts section to RandomDogs page with favorites
d2fc9e4 - feat: make logo clickable to navigate to home page
b038ec2 - chore: add Vercel deployment configuration
```

## URLs Importantes

- **Repositorio**: https://github.com/NikosophosCode/cute-dogs
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Sitio Desplegado**: https://cute-dogs.vercel.app (después del deploy)

## Próximos Pasos

1. Conecta el repositorio a Vercel
2. Vercel desplegará automáticamente en cada push a `main`
3. Monitorea el primer deploy
4. ¡Comparte tu sitio! 🎉
