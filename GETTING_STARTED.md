# 🎯 Comenzando con Perritos Tiernos

## 🚀 En 3 Pasos

### Paso 1: Instalar
```bash
npm install
```

### Paso 2: Ejecutar
```bash
npm run dev
```

### Paso 3: ¡Disfrutar!
Abre http://localhost:5173 en tu navegador

---

## 📱 Interfaz de la Aplicación

### Barra de Navegación
```
┌─────────────────────────────────────────────────────┐
│  🐶 Perritos Tiernos                                │
│  [🎲 Aleatorio] [🔍 Buscar] [📚 Razas] [❤️ Fav(0)] │
└─────────────────────────────────────────────────────┘
```

---

## 🎲 Sección: Perritos Aleatorios

### Pantalla
```
┌─────────────────────────────────────────┐
│  🎲 Perrito Aleatorio                   │
│  ¡Descubre un nuevo perrito adorable!   │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │                                  │  │
│  │     [Imagen del Perrito]         │  │
│  │                                  │  │
│  └──────────────────────────────────┘  │
│                                         │
│  [❤️ Obtener Perrito Aleatorio]        │
└─────────────────────────────────────────┘
```

### Funcionalidades
- Obtén un perro diferente cada vez
- Hover sobre la imagen para ver el botón de favoritos
- Animaciones suaves
- Indicador de carga mientras se obtiene el perro

---

## 🔍 Sección: Buscar Perros

### Pantalla
```
┌─────────────────────────────────────────┐
│  🔍 Buscar Perros                       │
│  Filtra por raza, cantidad y orden      │
│                                         │
│  ┌─────────────┬─────────┬──────────┐  │
│  │ Raza        │ Cantidad│ Orden    │  │
│  │ [Todas ▼]   │ [10  ]  │ [Aleatorio]│
│  └─────────────┴─────────┴──────────┘  │
│                                         │
│  [🔍 Buscar]                            │
│                                         │
│  ┌──────────┬──────────┬──────────┐   │
│  │ Perrito1 │ Perrito2 │ Perrito3 │   │
│  ├──────────┼──────────┼──────────┤   │
│  │ Perrito4 │ Perrito5 │ Perrito6 │   │
│  └──────────┴──────────┴──────────┘   │
└─────────────────────────────────────────┘
```

### Funcionalidades
- Selecciona raza de la lista completa
- Controla cantidad (1-100)
- Elige orden: Aleatorio, Ascendente, Descendente
- Cuadrícula responsive
- Agrega favoritos desde cualquier tarjeta

---

## 📚 Sección: Explorar Razas

### Pantalla
```
┌──────────────┬─────────────────────────┐
│ Razas        │ Detalles de Raza        │
│              │                         │
│ [Labrador]   │ Labrador Retriever      │
│ [Poodle]     │                         │
│ [Bulldog]    │ Temperamento:           │
│ [Beagle]     │ Amigable, Inteligente   │
│ [Husky]      │                         │
│              │ Origen: Canadá          │
│ ...          │ Peso: 25-36 kg          │
│              │ Esperanza: 10-12 años   │
│              │                         │
│              │ ┌──────┬──────┬──────┐ │
│              │ │ Img1 │ Img2 │ Img3 │ │
│              │ ├──────┼──────┼──────┤ │
│              │ │ Img4 │ Img5 │ Img6 │ │
│              │ └──────┴──────┴──────┘ │
└──────────────┴─────────────────────────┘
```

### Funcionalidades
- Sidebar con lista de todas las razas
- Información detallada de cada raza
- Galería de imágenes
- Agrega favoritos desde la galería

---

## ❤️ Sección: Mis Favoritos

### Pantalla (Con Favoritos)
```
┌─────────────────────────────────────────┐
│  ❤️ Mis Favoritos                       │
│  Tienes 3 perros favoritos              │
│                                         │
│  ┌──────────┬──────────┬──────────┐   │
│  │ Favorito1│ Favorito2│ Favorito3│   │
│  └──────────┴──────────┴──────────┘   │
└─────────────────────────────────────────┘
```

### Pantalla (Sin Favoritos)
```
┌─────────────────────────────────────────┐
│  ❤️ Mis Favoritos                       │
│  No tienes favoritos aún                │
│                                         │
│  💔 No tienes perros favoritos aún      │
│                                         │
│  Explora las otras secciones y agrega   │
│  perros a tus favoritos                 │
└─────────────────────────────────────────┘
```

### Funcionalidades
- Ver todos tus favoritos
- Contador en la navegación
- Elimina favoritos fácilmente
- Persiste en localStorage

---

## 🎨 Esquema de Colores

### Gradientes Animados
```
🎲 Aleatorio:    Púrpura → Rosa → Naranja
🔍 Búsqueda:     Azul → Púrpura → Rosa
📚 Razas:        Verde → Turquesa → Azul
❤️ Favoritos:    Rojo → Rosa → Púrpura
```

### Componentes
```
Botones:         Blanco con hover gradient
Tarjetas:        Glass-morphism (semi-transparente)
Texto:           Blanco con sombras
Iconos:          Emojis para mejor UX
```

---

## ⌨️ Atajos de Teclado

| Atajo | Acción |
|-------|--------|
| `F12` | Abrir DevTools |
| `Ctrl+Shift+I` | Abrir DevTools (alternativa) |
| `Ctrl+Shift+C` | Inspeccionar elemento |

---

## 🔄 Flujo de Usuario Típico

### Escenario 1: Descubrir Perros
```
1. Abre la app
2. Ve a "Aleatorio"
3. Haz click en "Obtener Perrito Aleatorio"
4. Ve un perro adorable
5. Hover sobre la imagen
6. Haz click en el corazón para agregar a favoritos
7. Repite pasos 3-6
```

### Escenario 2: Buscar Raza Específica
```
1. Ve a "Buscar"
2. Selecciona una raza del dropdown
3. Ajusta cantidad si deseas
4. Haz click en "Buscar"
5. Ve resultados en cuadrícula
6. Agrega favoritos haciendo hover
```

### Escenario 3: Explorar Razas
```
1. Ve a "Razas"
2. Haz click en una raza del sidebar
3. Lee información detallada
4. Ve galería de imágenes
5. Agrega favoritos
6. Selecciona otra raza
```

### Escenario 4: Ver Favoritos
```
1. Ve a "Favoritos"
2. Ve contador en navegación
3. Mira todos tus favoritos
4. Elimina si deseas
5. Vuelve a otras secciones
```

---

## 💡 Tips y Trucos

### Tip 1: Favoritos Persistentes
Los favoritos se guardan automáticamente. Cierra la app y vuelve a abrirla, ¡seguirán ahí!

### Tip 2: Responsive Design
Redimensiona la ventana o abre en móvil. La app se adapta perfectamente.

### Tip 3: Animaciones Suaves
Observa las animaciones de gradiente en el fondo. ¡Son hipnotizantes!

### Tip 4: DevTools
Abre DevTools (F12) → Application → Local Storage para ver tus favoritos guardados.

### Tip 5: Compartir
Copia la URL y comparte con amigos. Ellos verán la misma app.

---

## 🐛 Solución Rápida de Problemas

### Problema: No veo perros
**Solución**: Verifica tu conexión a internet. La app necesita conectarse a The Dog API.

### Problema: Los favoritos no se guardan
**Solución**: Verifica que no estés en modo incógnito. localStorage no funciona en modo incógnito.

### Problema: La app se ve rara
**Solución**: Limpia el caché del navegador (Ctrl+Shift+Delete) y recarga la página.

### Problema: Los estilos no se aplican
**Solución**: Recarga la página (Ctrl+R o Cmd+R).

---

## 📚 Documentación Completa

Para más detalles, consulta:
- `README.md` - Documentación general
- `QUICK_START.md` - Inicio rápido
- `FAQ.md` - Preguntas frecuentes
- `TECHNICAL_DETAILS.md` - Detalles técnicos
- `DEPLOYMENT.md` - Cómo desplegar
- `PROJECT_SUMMARY.md` - Resumen del proyecto

---

## 🎉 ¡Listo!

Ya estás listo para usar **Perritos Tiernos**. 

**Próximos pasos:**
1. Ejecuta `npm run dev`
2. Abre http://localhost:5173
3. ¡Disfruta explorando perros adorables!

---

**¡Que disfrutes! 🐕❤️**
