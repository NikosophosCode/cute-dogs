# ❓ Preguntas Frecuentes - Perritos Tiernos

## 🔧 Instalación y Configuración

### P: ¿Cómo instalo el proyecto?
**R:** 
```bash
git clone <repositorio>
cd consumo-API-REST
npm install
npm run dev
```

### P: ¿Qué versión de Node necesito?
**R:** Node 16+ (recomendado 18+)
```bash
node --version  # Verifica tu versión
```

### P: ¿Puedo usar yarn en lugar de npm?
**R:** Sí, pero usa uno consistentemente:
```bash
yarn install
yarn dev
```

### P: ¿Por qué no se instalan las dependencias?
**R:** Intenta:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🐕 Funcionalidades

### P: ¿De dónde vienen los datos de los perros?
**R:** De [The Dog API](https://thedogapi.com/), una API pública y gratuita.

### P: ¿Puedo usar una API key?
**R:** Sí, aunque no es necesaria. Puedes agregarla en `src/services/api.ts`:
```typescript
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'x-api-key': process.env.VITE_API_KEY
  }
});
```

### P: ¿Cómo agrego más filtros de búsqueda?
**R:** Edita `src/pages/SearchDogs.tsx` y agrega campos en el formulario.

### P: ¿Por qué algunos perros no tienen imagen?
**R:** Algunos registros en la API pueden no tener imágenes. Esto es normal.

---

## 💾 Favoritos

### P: ¿Dónde se guardan los favoritos?
**R:** En `localStorage` del navegador, bajo la clave `dog_favorites`.

### P: ¿Se sincronizan los favoritos entre dispositivos?
**R:** No, localStorage es local del navegador. Para sincronizar necesitarías una base de datos.

### P: ¿Cómo borro todos los favoritos?
**R:** Abre DevTools (F12) → Application → Local Storage → Elimina `dog_favorites`.

### P: ¿Qué pasa si limpio el caché del navegador?
**R:** Se perderán los favoritos. Considera agregar una opción de exportar/importar.

---

## 🎨 Diseño y Estilos

### P: ¿Cómo cambio los colores?
**R:** Edita `tailwind.config.js` o modifica las clases en los componentes.

### P: ¿Cómo agrego nuevas animaciones?
**R:** En `src/index.css` agrega `@keyframes` y úsalas en los componentes.

### P: ¿Por qué los estilos no se aplican?
**R:** Asegúrate de que:
1. Importaste `index.css` en `main.tsx`
2. Las clases de Tailwind están correctas
3. Ejecutaste `npm run build` si es necesario

### P: ¿Puedo cambiar el tema a modo oscuro?
**R:** Sí, agrega en `tailwind.config.js`:
```javascript
theme: {
  extend: {
    darkMode: 'class'
  }
}
```

---

## 🚀 Desarrollo

### P: ¿Cómo creo un nuevo componente?
**R:**
```bash
# En src/components/
touch MiComponente.tsx
```

```typescript
import React from 'react';

interface MiComponenteProps {
  // Define props aquí
}

export const MiComponente: React.FC<MiComponenteProps> = (props) => {
  return <div>Mi Componente</div>;
};
```

### P: ¿Cómo agrego una nueva página?
**R:**
```bash
# En src/pages/
touch MiPagina.tsx
```

Luego importa en `App.tsx` y agrega a la navegación.

### P: ¿Cómo hago llamadas a la API?
**R:** Usa el servicio en `src/services/api.ts`:
```typescript
import { dogAPI } from '../services/api';

const perros = await dogAPI.searchDogs({ limit: 10 });
```

### P: ¿Cómo manejo errores?
**R:**
```typescript
try {
  const data = await dogAPI.getRandomDog();
  // Usa los datos
} catch (error) {
  console.error('Error:', error);
  // Muestra mensaje de error al usuario
}
```

---

## 🐛 Problemas Comunes

### P: El servidor no inicia
**R:** Intenta:
```bash
npm run dev
# Si sigue sin funcionar:
rm -rf node_modules
npm install
npm run dev
```

### P: Los favoritos no se guardan
**R:** Verifica:
1. localStorage está habilitado (F12 → Application)
2. No estás en modo incógnito
3. El navegador permite almacenamiento local

### P: Las imágenes no cargan
**R:** Posibles causas:
1. Sin conexión a internet
2. La API está caída
3. CORS bloqueado (poco probable con esta API)

### P: TypeScript muestra errores
**R:** Ejecuta:
```bash
npm run lint
# O reinicia el servidor de desarrollo
npm run dev
```

### P: El build falla
**R:** Intenta:
```bash
npm run build
# Si hay errores, revisa el output
# Asegúrate de que no hay errores de TypeScript
```

---

## 📱 Responsive y Mobile

### P: ¿Funciona en móvil?
**R:** Sí, está completamente optimizado para móvil.

### P: ¿Cómo pruebo en móvil?
**R:** 
1. Abre DevTools (F12)
2. Haz click en el icono de móvil
3. Selecciona un dispositivo

### P: ¿Por qué se ve diferente en móvil?
**R:** Usa media queries en Tailwind:
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- Responsive grid -->
</div>
```

---

## 🌐 Despliegue

### P: ¿Cómo despliego la aplicación?
**R:** Ver `DEPLOYMENT.md` para instrucciones detalladas.

### P: ¿Cuál es la mejor opción de despliegue?
**R:** Recomendamos **Netlify** por su facilidad y características gratuitas.

### P: ¿Cuesta dinero desplegar?
**R:** No, Netlify y Vercel ofrecen planes gratuitos generosos.

### P: ¿Cómo actualizo el sitio en vivo?
**R:** Solo haz push a tu repositorio y se despliega automáticamente.

---

## 📚 Aprendizaje

### P: ¿Dónde aprendo más sobre React?
**R:** [React Docs](https://react.dev/)

### P: ¿Dónde aprendo TypeScript?
**R:** [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### P: ¿Dónde aprendo TailwindCSS?
**R:** [Tailwind Docs](https://tailwindcss.com/docs)

### P: ¿Dónde aprendo Vite?
**R:** [Vite Guide](https://vitejs.dev/guide/)

---

## 🤝 Contribuciones

### P: ¿Puedo contribuir?
**R:** ¡Claro! Haz un fork y crea un pull request.

### P: ¿Cómo reporto un bug?
**R:** Abre un issue en GitHub con:
1. Descripción del problema
2. Pasos para reproducir
3. Comportamiento esperado vs actual

### P: ¿Cómo sugiero una característica?
**R:** Abre un issue con la etiqueta `enhancement`.

---

## 📞 Contacto y Soporte

### P: ¿Dónde puedo obtener ayuda?
**R:** 
- Revisa este FAQ
- Abre un issue en GitHub
- Consulta la documentación de las librerías

### P: ¿Hay un Discord o comunidad?
**R:** Puedes crear uno o unirte a comunidades de React/TypeScript.

---

## 🎉 Conclusión

Si tu pregunta no está aquí, revisa:
1. La documentación oficial de las librerías
2. Stack Overflow
3. GitHub Issues del proyecto

¡Gracias por usar Perritos Tiernos! 🐕❤️

---

**Última actualización**: 2024
**Versión**: 1.0.0
