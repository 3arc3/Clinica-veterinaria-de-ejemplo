# 🐾 Veterinaria Vida Animal - Sitio Web Profesional

Sitio web profesional y moderno para una clínica veterinaria, diseñado con una estética minimalista y colores pastel (verdes, beiges y blancos). Desarrollado con HTML5, CSS3 y JavaScript vanilla, optimizado para ser desplegado en GitHub Pages y Vercel.

## 📋 Descripción del Proyecto

Este proyecto es un sitio web completo para una clínica veterinaria ficticia llamada "Veterinaria Vida Animal". El sitio incluye:

- **Diseño responsive** que se adapta a todos los dispositivos
- **Animaciones minimalistas** y suaves para una experiencia de usuario agradable
- **Paleta de colores pastel** con tonos verdes, beiges y blancos
- **Secciones completas**: Inicio, Servicios, Nosotros, Equipo, Testimonios, Galería y Contacto
- **Formulario de contacto** funcional con validación
- **Galería interactiva** con lightbox
- **Navegación móvil** con menú hamburguesa
- **Optimización para SEO** y accesibilidad

## 🎨 Características de Diseño

### Paleta de Colores
- **Verde primario**: `#7CB342` (Verde pastel)
- **Verde secundario**: `#8BC34A` (Verde lima)
- **Beige**: `#F5F5DC` (Beige clásico)
- **Crema**: `#FFF8E1` (Crema suave)
- **Blanco**: `#FFFFFF` (Blanco puro)
- **Gris claro**: `#F5F5F5` (Gris pastel)

### Tipografías
- **Playfair Display**: Para títulos y encabezados (elegante y profesional)
- **Poppins**: Para texto general (moderna y legible)

### Animaciones
- Transiciones suaves en hover
- Efectos de scroll (fade-in, slide-in)
- Animaciones de carga
- Efectos parallax sutiles
- Interactividad en elementos del menú

## 📁 Estructura del Proyecto

```
clinica-veterinaria/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos CSS con animaciones
├── js/
│   └── main.js         # Funcionalidad JavaScript
├── images/             # Directorio para imágenes adicionales
├── .gitignore         # Archivos ignorados por Git
├── package.json        # Configuración del proyecto
├── vercel.json         # Configuración para Vercel
├── LICENSE             # Licencia MIT
└── README.md          # Este archivo
```

## 🚀 Instalación y Uso

### Requisitos Previos
- No se requieren dependencias externas
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desarrollo)

### Pasos para Ejecutar el Proyecto

1. **Clonar o descargar el proyecto**
   ```bash
   git clone [tu-repositorio]
   cd clinica-veterinaria
   ```

2. **Abrir el sitio web**
   - Opción A: Doble clic en `index.html`
   - Opción B: Usar un servidor local
     ```bash
     # Con Python 3
     python -m http.server 8000
     
     # Con Node.js (http-server)
     npx http-server
     ```
   - Opción C: Usar extensiones de VS Code como "Live Server"

3. **Acceder al sitio**
   - Si usas servidor local: `http://localhost:8000`
   - Si abres directamente: el archivo se abrirá en tu navegador

## 🌐 Despliegue

### GitHub Pages
1. Sube el proyecto a GitHub
2. Ve a Settings > Pages
3. Selecciona la rama principal (main/master)
4. El sitio estará disponible en `https://[tu-usuario].github.io/clinica-veterinaria`

### Vercel
1. Instala Vercel CLI: `npm i -g vercel`
2. En la carpeta del proyecto:
   ```bash
   vercel
   ```
3. Sigue las instrucciones del asistente
4. Tu sitio estará disponible en un dominio de Vercel

### Netlify
1. Arrastra la carpeta del proyecto a [Netlify Drop](https://app.netlify.com/drop)
2. El sitio se desplegará automáticamente

## 📱 Funcionalidades Principales

### 1. Navegación
- Menú de navegación fijo con efecto de transparencia
- Menú hamburguesa para dispositivos móviles
- Scroll suave entre secciones
- Indicador de progreso de scroll

### 2. Secciones del Sitio

#### Hero Section
- Animación de entrada suave
- Llamadas a la acción claras
- Imagen principal de alta calidad
- Efecto parallax

#### Servicios
- Grid de servicios con tarjetas interactivas
- 9 servicios principales detallados
- Efectos hover elegantes
- Iconos descriptivos

#### Nosotros
- Información sobre la clínica
- Estadísticas animadas
- Características destacadas
- Imagen con efecto de experiencia

#### Equipo
- Presentación del equipo médico
- Efectos hover en tarjetas
- Información de especialidades
- Enlaces a redes sociales

#### Testimonios
- Slider automático de testimonios
- Navegación manual
- Valoraciones con estrellas
- Información de clientes y mascotas

#### Galería
- Grid de imágenes responsive
- Efecto lightbox al hacer clic
- Overlay con información
- Imágenes de alta calidad

#### Contacto
- Formulario funcional con validación
- Información de contacto detallada
- Mapa de Google integrado
- Diseño responsive

### 3. Efectos Interactivos
- **Lightbox**: Galería con visualización ampliada
- **Validación de formularios**: En tiempo real
- **Animaciones al scroll**: Elementos aparecen suavemente
- **Contador animado**: Para estadísticas
- **Efecto ripple**: En botones
- **Partículas decorativas**: En el hero
- **Barra de progreso**: Indicador de scroll

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `css/styles.css`:
```css
:root {
    --primary-green: #7CB342;
    --secondary-green: #8BC34A;
    /* ... otras variables */
}
```

### Modificar Contenido
- **Textos**: Edita directamente en `index.html`
- **Imágenes**: Reemplaza las URLs de Unsplash con tus propias imágenes
- **Servicios**: Modifica las tarjetas de servicios en la sección correspondiente

### Añadir Nuevas Secciones
1. Añade el HTML en `index.html`
2. Añade estilos en `css/styles.css`
3. Añade funcionalidad en `js/main.js` si es necesario

## 📸 Imágenes

Las imágenes utilizadas en este proyecto son de Unsplash, un servicio de fotografía de alta calidad gratuita:

- **Animales**: Imágenes de perros, gatos y otros animales
- **Veterinarios**: Fotos profesionales del equipo
- **Instalaciones**: Imágenes de consultas y equipos médicos
- **Procedimientos**: Fotos de cirugías y tratamientos

Para usar tus propias imágenes:
1. Colócalas en la carpeta `images/`
2. Actualiza las rutas en el HTML
3. Asegúrate de optimizarlas para web (formato WebP, compresión adecuada)

## 🎯 Optimizaciones

### Performance
- Lazy loading de imágenes
- CSS y JavaScript minificados (opcional)
- Optimización de fuentes
- Imágenes comprimidas

### SEO
- Meta tags optimizados
- Estructura semántica HTML5
- Etiquetas alt en imágenes
- URLs amigables

### Accesibilidad
- Navegación por teclado
- Prefers reduced motion
- Contraste de colores adecuado
- Etiquetas ARIA donde es necesario

## 📱 Responsive Design

El sitio está optimizado para:
- **Desktop**: 1920px+
- **Laptop**: 1024px - 1920px
- **Tablet**: 768px - 1024px
- **Móvil**: 320px - 768px

## 🔒 Seguridad

- Validación de formularios en cliente
- Sanitización de inputs
- HTTPS recomendado para producción
- No se almacenan datos sensibles

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos y animaciones
- **JavaScript (ES6+)**: Interactividad
- **Google Fonts**: Tipografías
- **Unsplash**: Imágenes de stock

## 📞 Información de Contacto (Demo)

**Veterinaria Vida Animal**
- 📍 Dirección: Calle Salud 123, 28001 Madrid, España
- 📞 Teléfono: +34 91 123 45 67
- 📧 Email: info@vidaanimal.es
- 🕐 Horario: Lun-Vie 9:00-20:00, Sáb 10:00-14:00
- 🚑 Urgencias: 24 horas

## 🤝 Contribuciones

Este es un proyecto de demostración. Si deseas mejorarlo:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🙏 Agradecimientos

- Imágenes proporcionadas por [Unsplash](https://unsplash.com)
- Iconos del sistema emoji
- Fuentes de [Google Fonts](https://fonts.google.com)

## 📞 Soporte

Para preguntas o soporte sobre este proyecto:
- Abre un issue en el repositorio
- Contacta al desarrollador

## 🔄 Actualizaciones Futuras

Posibles mejoras:
- [ ] Sistema de reservas online
- [ ] Blog veterinario
- [ ] Tienda de productos
- [ ] Portal de clientes
- [ ] Integración con redes sociales
- [ ] Chat de soporte en vivo
- [ ] Multi-idioma (inglés, español)
- [ ] PWA (Progressive Web App)

---

**Desarrollado con ❤️ para el bienestar animal**

**Fecha de creación**: Septiembre 2024
**Versión**: 1.0.0
**Estado**: Production Ready