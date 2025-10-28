# 🚀 Guía Rápida - Perritos Tiernos

## Inicio Rápido

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Iniciar Servidor de Desarrollo
```bash
npm run dev
```

La aplicación se abrirá automáticamente en `http://localhost:5173`

### 3. Compilar para Producción
```bash
npm run build
```

## 📱 Secciones de la Aplicación

### 🎲 Perritos Aleatorios
- **URL**: Sección "Aleatorio"
- **Función**: Obtén un perro diferente cada vez que hagas click
- **Características**:
  - Animaciones suaves
  - Botón para agregar a favoritos
  - Indicador de carga

### 🔍 Buscar Perros
- **URL**: Sección "Buscar"
- **Función**: Busca perros con filtros avanzados
- **Filtros**:
  - Raza (selecciona de la lista completa)
  - Cantidad (1-100)
  - Orden (Aleatorio, Ascendente, Descendente)
- **Resultado**: Cuadrícula de perros

### 📚 Explorar Razas
- **URL**: Sección "Razas"
- **Función**: Explora todas las razas disponibles
- **Información**:
  - Nombre de la raza
  - Temperamento
  - Origen
  - Esperanza de vida
  - Peso
  - Galería de imágenes
- **Sidebar**: Lista de todas las razas

### ❤️ Mis Favoritos
- **URL**: Sección "Favoritos"
- **Función**: Ve todos tus perros favoritos
- **Características**:
  - Persiste en localStorage
  - Contador en la navegación
  - Elimina favoritos fácilmente

## 🎨 Características de Diseño

### Animaciones
- ✨ Gradientes animados en fondos
- 🎈 Elementos flotantes
- 🔄 Transiciones suaves
- 📈 Escalado en hover

### Colores
- 🎲 Aleatorio: Púrpura → Rosa → Naranja
- 🔍 Búsqueda: Azul → Púrpura → Rosa
- 📚 Razas: Verde → Turquesa → Azul
- ❤️ Favoritos: Rojo → Rosa → Púrpura

## 💾 Almacenamiento Local

Los favoritos se guardan automáticamente en tu navegador:
- **Ubicación**: localStorage
- **Clave**: `dog_favorites`
- **Formato**: JSON Array

## 🔧 Desarrollo

### Estructura de Carpetas
```
src/
├── components/    # Componentes reutilizables
├── pages/        # Páginas principales
├── services/     # Llamadas a API
├── hooks/        # Custom hooks
├── types/        # Interfaces TypeScript
├── App.tsx       # Componente raíz
└── main.tsx      # Entrada
```

### Agregar Nueva Funcionalidad

1. **Crear componente**:
   ```bash
   # En src/components/
   touch NuevoComponente.tsx
   ```

2. **Crear página**:
   ```bash
   # En src/pages/
   touch NuevaPagina.tsx
   ```

3. **Agregar tipo**:
   ```typescript
   // En src/types/index.ts
   export interface NuevoTipo {
     // propiedades
   }
   ```

## 🐛 Solución de Problemas

### El servidor no inicia
```bash
# Elimina node_modules
rm -rf node_modules

# Reinstala
npm install

# Intenta de nuevo
npm run dev
```

### Los estilos no se aplican
```bash
# Reconstruye Tailwind
npm run build
```

### Los favoritos no se guardan
- Verifica que localStorage esté habilitado en el navegador
- Abre DevTools (F12) → Application → Local Storage

## 📚 Recursos

- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React](https://react.dev/)
- [Documentación de TypeScript](https://www.typescriptlang.org/)
- [Documentación de TailwindCSS](https://tailwindcss.com/)
- [The Dog API](https://thedogapi.com/)

## 🎯 Próximos Pasos

- [ ] Agregar filtros adicionales
- [ ] Implementar paginación
- [ ] Agregar búsqueda por nombre
- [ ] Implementar compartir favoritos
- [ ] Agregar modo oscuro/claro
- [ ] Mejorar accesibilidad

---

¡Disfruta explorando perros adorables! 🐕❤️
