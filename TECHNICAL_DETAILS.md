# 🔧 Detalles Técnicos - Perritos Tiernos

## Arquitectura

```
┌─────────────────────────────────────────────────────┐
│                    App.tsx                          │
│              (Estado Global)                        │
└────────────────────┬────────────────────────────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
    Navigation    Pages       Hooks
    ├─ Tabs      ├─ Random   ├─ useFavorites
    └─ Counter   ├─ Search   └─ localStorage
                 ├─ Breeds
                 └─ Favorites
                     │
                 Components
                 ├─ DogCard
                 └─ Navigation
                     │
                 Services
                 └─ api.ts
                     │
                 The Dog API
```

## Stack Tecnológico

### Frontend
- **React 18.2.0** - UI Framework
- **TypeScript 5.2.2** - Type Safety
- **Vite 5.0.8** - Build Tool
- **TailwindCSS 3.3.6** - Styling
- **Axios 1.6.0** - HTTP Client

### Build & Dev
- **PostCSS 8.4.32** - CSS Processing
- **Autoprefixer 10.4.16** - Vendor Prefixes
- **@vitejs/plugin-react 4.2.1** - React Plugin

## Estructura de Directorios

```
consumo-API-REST/
├── src/
│   ├── components/
│   │   ├── DogCard.tsx          # Tarjeta de perro
│   │   └── Navigation.tsx        # Barra de navegación
│   ├── pages/
│   │   ├── RandomDogs.tsx        # Página aleatorio
│   │   ├── SearchDogs.tsx        # Página búsqueda
│   │   ├── Breeds.tsx            # Página razas
│   │   └── Favorites.tsx         # Página favoritos
│   ├── services/
│   │   └── api.ts               # Cliente API
│   ├── hooks/
│   │   └── useFavorites.ts      # Hook de favoritos
│   ├── types/
│   │   └── index.ts             # Tipos TypeScript
│   ├── App.tsx                  # Componente raíz
│   ├── main.tsx                 # Punto de entrada
│   └── index.css                # Estilos globales
├── public/
│   └── vite.svg
├── index.html                   # HTML principal
├── vite.config.ts               # Config Vite
├── tsconfig.json                # Config TypeScript
├── tailwind.config.js           # Config Tailwind
├── postcss.config.js            # Config PostCSS
├── package.json                 # Dependencias
└── README.md                    # Documentación
```

## Flujo de Datos

### 1. Estado Global (App.tsx)
```typescript
const [activeTab, setActiveTab] = useState('random');
const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();
```

### 2. Props Down, Events Up
```
App
├─ Navigation (activeTab, onTabChange, favoritesCount)
├─ RandomDogs (onFavoriteToggle, isFavorite)
│   └─ DogCard (dog, isFavorite, onFavoriteToggle)
├─ SearchDogs (onFavoriteToggle, isFavorite)
│   └─ DogCard[] (dog, isFavorite, onFavoriteToggle)
├─ Breeds (onFavoriteToggle, isFavorite)
│   └─ DogCard[] (dog, isFavorite, onFavoriteToggle)
└─ Favorites (favorites, onRemoveFavorite, isFavorite)
    └─ DogCard[] (dog, isFavorite, onFavoriteToggle)
```

### 3. Llamadas a API
```typescript
// En RandomDogs.tsx
const randomDog = await dogAPI.getRandomDog();

// En SearchDogs.tsx
const results = await dogAPI.searchDogs({ limit, breed_id, order });

// En Breeds.tsx
const allBreeds = await dogAPI.getAllBreeds();
const images = await dogAPI.getImagesByBreed(breedId, limit);
```

## Tipos TypeScript

### Dog
```typescript
interface Dog {
  id: string;
  url: string;
  breeds?: Breed[];
  width?: number;
  height?: number;
}
```

### Breed
```typescript
interface Breed {
  id: number;
  name: string;
  temperament?: string;
  origin?: string;
  life_span?: string;
  weight?: { imperial: string; metric: string };
  height?: { imperial: string; metric: string };
  image?: { id: string; width: number; height: number; url: string };
}
```

### Favorite
```typescript
interface Favorite {
  id: string;
  url: string;
  addedAt: number;
}
```

### SearchParams
```typescript
interface SearchParams {
  limit?: number;
  page?: number;
  order?: 'RANDOM' | 'ASC' | 'DESC';
  breed_id?: number;
}
```

## Endpoints API

### The Dog API Base URL
```
https://api.thedogapi.com/v1
```

### Endpoints Utilizados

#### 1. Obtener Imagen Aleatoria
```
GET /images/search?limit=1
```

#### 2. Buscar Imágenes
```
GET /images/search?limit=10&page=0&order=RANDOM&breed_id=1
```

#### 3. Obtener Todas las Razas
```
GET /breeds
```

#### 4. Obtener Detalles de Raza
```
GET /breeds/{id}
```

#### 5. Obtener Imágenes de Raza
```
GET /images/search?breed_id=1&limit=12
```

## Gestión de Estado

### Local State
```typescript
// En cada página
const [data, setData] = useState<Type | null>(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
```

### Global State (useFavorites Hook)
```typescript
const [favorites, setFavorites] = useState<Favorite[]>([]);

// Persiste en localStorage
localStorage.setItem('dog_favorites', JSON.stringify(favorites));
```

## Ciclo de Vida de Componentes

### RandomDogs
```
1. Render inicial (sin perro)
2. Usuario hace click
3. setLoading(true)
4. Llamada a API
5. setDog(resultado)
6. setLoading(false)
7. Render con perro
```

### SearchDogs
```
1. useEffect: Cargar razas
2. Usuario selecciona filtros
3. Usuario hace click en buscar
4. setLoading(true)
5. Llamada a API con parámetros
6. setDogs(resultados)
7. setLoading(false)
8. Render cuadrícula
```

### Breeds
```
1. useEffect: Cargar razas
2. Usuario selecciona raza
3. setSelectedBreed(raza)
4. setLoading(true)
5. Llamada a API para imágenes
6. setBreadImages(imágenes)
7. setLoading(false)
8. Render detalles + galería
```

## Animaciones CSS

### Definidas en index.css
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes fadeInScale {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes shake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}
```

### Aplicadas en Tailwind
```javascript
animation: {
  float: 'float 3s ease-in-out infinite',
  fadeInScale: 'fadeInScale 0.5s ease-out',
}
```

## Manejo de Errores

### Try-Catch Pattern
```typescript
try {
  const data = await dogAPI.getRandomDog();
  setDog(data);
} catch (error) {
  setError('Mensaje de error');
  console.error(error);
} finally {
  setLoading(false);
}
```

### Error UI
```typescript
{error && (
  <div className="bg-red-500/80 text-white rounded-lg p-4">
    <p className="font-semibold">❌ {error}</p>
  </div>
)}
```

## Performance

### Optimizaciones
1. **Code Splitting** - Vite automático
2. **Lazy Loading** - Imágenes con lazy loading
3. **Memoization** - React.memo para componentes
4. **Debouncing** - En búsquedas (si se agrega)
5. **Caching** - localStorage para favoritos

### Métricas Esperadas
- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: ~150KB (gzipped ~50KB)

## Seguridad

### Prácticas Implementadas
1. **TypeScript Strict Mode** - Previene errores
2. **Input Validation** - Validación de datos
3. **Error Handling** - Manejo de excepciones
4. **HTTPS** - En producción
5. **CORS** - Manejado por la API

### No Implementado (No Necesario)
- Autenticación (API pública)
- Autorización (No hay datos sensibles)
- Encriptación (No hay datos sensibles)

## Testing (Recomendado)

### Librerías Sugeridas
```json
{
  "devDependencies": {
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "vitest": "^0.34.0"
  }
}
```

### Ejemplo de Test
```typescript
import { render, screen } from '@testing-library/react';
import { DogCard } from './DogCard';

test('renders dog card', () => {
  const dog = { id: '1', url: 'https://example.com/dog.jpg' };
  render(
    <DogCard 
      dog={dog} 
      isFavorite={false} 
      onFavoriteToggle={() => {}} 
    />
  );
  expect(screen.getByAltText('Perrito')).toBeInTheDocument();
});
```

## Deployment

### Build Process
```bash
npm run build
# Genera carpeta dist/ con archivos optimizados
```

### Environment Variables
```
VITE_API_BASE_URL=https://api.thedogapi.com/v1
```

### Hosting Recomendado
- Netlify (Recomendado)
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## Monitoreo

### Herramientas Recomendadas
- **Sentry** - Error tracking
- **Google Analytics** - Analíticas
- **Lighthouse** - Performance
- **WebPageTest** - Testing

## Escalabilidad Futura

### Mejoras Posibles
1. **Backend** - Node.js + Express
2. **Base de Datos** - MongoDB/PostgreSQL
3. **Autenticación** - JWT
4. **Caché** - Redis
5. **CDN** - Cloudflare
6. **PWA** - Service Workers
7. **Internacionalización** - i18n

---

**Documentación Técnica Completa**
**Versión**: 1.0.0
**Última Actualización**: 2024
