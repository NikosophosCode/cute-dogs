# 🐶 Perritos Tiernos - The Dog API

Una aplicación moderna y hermosa para explorar, buscar y guardar tus perros favoritos usando **The Dog API**.

## 🚀 Tecnologías

- **Vite.js** - Build tool rápido y moderno
- **React 18** - Librería de UI
- **TypeScript** - Type safety
- **TailwindCSS** - Estilos modernos
- **Axios** - Cliente HTTP
- **The Dog API** - API de perros

## ✨ Características

### 🎲 Perritos Aleatorios
- Obtén un perro aleatorio con un click
- Interfaz hermosa con animaciones suaves
- Agrega a favoritos directamente desde la tarjeta

### 🔍 Buscar Perros
- Filtra por raza específica
- Controla la cantidad de resultados
- Ordena por aleatorio, ascendente o descendente
- Visualiza múltiples perros en una cuadrícula

### 📚 Explorar Razas
- Lista completa de todas las razas disponibles
- Información detallada de cada raza (temperamento, origen, peso, esperanza de vida)
- Galería de imágenes de cada raza
- Interfaz intuitiva con sidebar

### ❤️ Mis Favoritos
- Guarda tus perros favoritos localmente
- Persiste los datos en localStorage
- Visualiza todos tus favoritos en una sección especial
- Elimina favoritos fácilmente

## 📦 Instalación

```bash
# Clonar o descargar el proyecto
cd consumo-API-REST

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm build

# Vista previa de producción
npm preview
```

## 🌐 Uso

1. **Abre la aplicación** en `http://localhost:5173`
2. **Navega entre las secciones** usando la barra de navegación superior
3. **Agrega favoritos** haciendo hover sobre las tarjetas de perros
4. **Busca y filtra** usando los parámetros disponibles
5. **Explora razas** y aprende sobre diferentes tipos de perros

## 🎨 Diseño

- **Gradientes animados** en el fondo
- **Animaciones suaves** en transiciones y hover
- **Glass-morphism** para efectos modernos
- **Responsive design** para todos los dispositivos
- **Emojis** para una interfaz amigable

## 📁 Estructura del Proyecto

```
src/
├── components/        # Componentes reutilizables
│   ├── DogCard.tsx   # Tarjeta de perro
│   └── Navigation.tsx # Barra de navegación
├── pages/            # Páginas principales
│   ├── RandomDogs.tsx
│   ├── SearchDogs.tsx
│   ├── Breeds.tsx
│   └── Favorites.tsx
├── services/         # Servicios API
│   └── api.ts       # Llamadas a The Dog API
├── hooks/           # Custom hooks
│   └── useFavorites.ts
├── types/           # Tipos TypeScript
│   └── index.ts
├── App.tsx          # Componente principal
├── main.tsx         # Punto de entrada
└── index.css        # Estilos globales
```

## 🔧 Configuración

### Variables de Entorno
No se requieren variables de entorno. La API de The Dog es pública.

### API Base URL
```
https://api.thedogapi.com/v1
```

## 🎯 Endpoints Utilizados

- `GET /images/search` - Buscar imágenes de perros
- `GET /breeds` - Obtener todas las razas
- `GET /breeds/{id}` - Obtener detalles de una raza

## 💾 Almacenamiento Local

Los favoritos se guardan en `localStorage` bajo la clave `dog_favorites`.

## 🐛 Troubleshooting

### El servidor no inicia
```bash
# Elimina node_modules y reinstala
rm -rf node_modules
npm install
npm run dev
```

### Los estilos no se aplican
```bash
# Reconstruye Tailwind
npm run build
```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Vista previa de build
- `npm run lint` - Ejecuta linter

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Siéntete libre de hacer fork y crear pull requests.

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## 🙏 Créditos

- [The Dog API](https://thedogapi.com/) - Fuente de datos
- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - Framework
- [TailwindCSS](https://tailwindcss.com/) - Estilos

---

Hecho con ❤️ para los amantes de los perros 🐕
