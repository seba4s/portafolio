#!/bin/bash

cd /vercel/share/v0-project

# Stage all changes
git add .

# Create commit
git commit -m "feat: hacer portafolio responsive y agregar elementos decorativos

- Optimizar responsividad en Hero, AboutPage, ProjectsPage, ExperiencePage, TestimonialsPage y ContactPage
- Reemplazar min-h-screen py-24 por py-16 sm:py-24 para mejor control en móvil
- Ajustar tamaños de fuente con escala progresiva (text-3xl a text-6xl)
- Mejorar padding y espaciado en pantallas pequeñas
- Corregir timeline en ExperiencePage para evitar solapamiento en móvil
- Agregar componente DecoCircles reutilizable con elementos decorativos animados
- Posicionar círculos decorativos en el fondo de cada sección sin dañar visibilidad de contenido
- Usar z-index y relative positioning para mantener jerarquía visual"

# Push changes
git push origin make-project-responsive

echo "✓ Cambios subidos a la rama make-project-responsive"
