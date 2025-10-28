# 🚀 Guía de Despliegue - Perritos Tiernos

## Opciones de Despliegue

### 1. Netlify (Recomendado)

#### Opción A: Usando Git
```bash
# 1. Sube tu código a GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/perritos-tiernos.git
git push -u origin main

# 2. Ve a https://netlify.com
# 3. Conecta tu repositorio de GitHub
# 4. Netlify detectará automáticamente:
#    - Build command: npm run build
#    - Publish directory: dist
# 5. ¡Listo! Tu sitio estará en vivo
```

#### Opción B: Usando Netlify CLI
```bash
# 1. Instala Netlify CLI
npm install -g netlify-cli

# 2. Construye el proyecto
npm run build

# 3. Despliega
netlify deploy --prod --dir=dist
```

### 2. Vercel

```bash
# 1. Instala Vercel CLI
npm install -g vercel

# 2. Despliega
vercel --prod

# 3. Sigue las instrucciones interactivas
```

### 3. GitHub Pages

```bash
# 1. Crea un repositorio llamado: tu-usuario.github.io

# 2. Actualiza vite.config.ts
# Agrega: base: '/perritos-tiernos/'

# 3. Construye y despliega
npm run build
git add dist/
git commit -m "Deploy"
git push origin main
```

### 4. Docker (Para servidores propios)

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:18-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=0 /app/dist ./dist

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

```bash
# Construir imagen
docker build -t perritos-tiernos .

# Ejecutar contenedor
docker run -p 3000:3000 perritos-tiernos
```

## Checklist Pre-Despliegue

- [ ] Ejecutar `npm run build` sin errores
- [ ] Verificar que `dist/` se creó correctamente
- [ ] Probar localmente con `npm run preview`
- [ ] Verificar que todas las rutas funcionan
- [ ] Comprobar que los favoritos se guardan
- [ ] Verificar responsive en móvil
- [ ] Revisar la consola para errores
- [ ] Actualizar README con URL en vivo

## Variables de Entorno

No se requieren variables de entorno especiales ya que la API es pública.

Si necesitas agregar una API key en el futuro:

```bash
# .env.production
VITE_API_BASE_URL=https://api.thedogapi.com/v1
VITE_API_KEY=tu_api_key_aqui
```

## Optimizaciones para Producción

```bash
# Verificar tamaño del bundle
npm run build

# Resultado esperado:
# dist/index.html                 0.46 kB │ gzip:  0.30 kB
# dist/assets/index-xxx.js     150.00 kB │ gzip: 50.00 kB
```

## Monitoreo Post-Despliegue

1. **Verificar que el sitio carga**
   - Abre la URL en el navegador
   - Verifica que no hay errores en consola

2. **Probar funcionalidades**
   - Obtener perro aleatorio
   - Buscar perros
   - Explorar razas
   - Agregar/eliminar favoritos

3. **Verificar performance**
   - Abre DevTools (F12)
   - Ve a Network
   - Verifica que las imágenes cargan rápido

4. **Monitorear errores**
   - Usa Sentry o similar
   - Revisa logs de Netlify/Vercel

## Rollback (En caso de problemas)

### Netlify
1. Ve a Deploys
2. Selecciona el deploy anterior
3. Haz click en "Restore"

### Vercel
1. Ve a Deployments
2. Selecciona el anterior
3. Haz click en "Promote to Production"

## URLs Útiles

- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [The Dog API](https://thedogapi.com/)

## Soporte

Si encuentras problemas:
1. Revisa los logs del servidor
2. Verifica la consola del navegador (F12)
3. Comprueba que todas las dependencias están instaladas
4. Intenta un rebuild: `npm run build`

---

¡Tu aplicación está lista para el mundo! 🌍🐕
