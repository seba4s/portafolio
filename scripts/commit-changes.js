import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

try {
  console.log('[v0] Iniciando commit de cambios...');
  
  // Cambiar al directorio del proyecto
  process.chdir(projectRoot);
  
  // Agregar todos los cambios
  console.log('[v0] Agregando cambios...');
  execSync('git add .', { stdio: 'inherit' });
  
  // Hacer commit
  console.log('[v0] Haciendo commit...');
  execSync('git commit -m "feat: add responsive design improvements and decorative circles\n\n- Made Hero, AboutPage, ProjectsPage, ExperiencePage, TestimonialsPage, and ContactPage responsive\n- Removed min-h-screen constraints for better mobile layout\n- Improved typography scaling for all screen sizes\n- Added DecoraCircles component with decorative elements\n- Fixed timeline positioning on mobile devices\n- Improved card and text overflow handling"', { stdio: 'inherit' });
  
  // Push a la rama actual
  console.log('[v0] Haciendo push...');
  execSync('git push origin HEAD', { stdio: 'inherit' });
  
  console.log('[v0] ✓ Cambios subidos exitosamente al repositorio');
  
} catch (error) {
  console.error('[v0] Error durante el proceso de git:', error.message);
  process.exit(1);
}
