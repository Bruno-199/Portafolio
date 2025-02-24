import { exec } from 'child_process';
import { readdir, mkdir } from 'fs/promises';
import { join } from 'path';
import util from 'util';

const execPromise = util.promisify(exec);
const FFMPEG_PATH = 'C:\\ffmpeg\\ffmpeg.exe';

async function optimizeVideosSimple() {
  const inputDir = join(process.cwd(), 'public', 'videos-raw');
  const outputDir = join(process.cwd(), 'public', 'videos');

  try {
    // Crear directorio de salida si no existe
    await mkdir(outputDir, { recursive: true });
    console.log('✅ Directorio de salida listo');

    const files = await readdir(inputDir);
    
    for (const file of files) {
      if (file.match(/\.(mp4|mov|avi)$/i)) {
        const inputPath = join(inputDir, file);
        const outputMP4 = join(outputDir, `${file.split('.')[0]}.mp4`);
        const posterPath = join(outputDir, `${file.split('.')[0]}-poster.jpg`);

        console.log(`\n🎬 Procesando: ${file}`);

        // Solo crear MP4 optimizado y poster
        await execPromise(`"${FFMPEG_PATH}" -i "${inputPath}" -c:v libx264 -preset medium "${outputMP4}"`);
        console.log(`✅ Video optimizado creado`);

        await execPromise(`"${FFMPEG_PATH}" -i "${inputPath}" -ss 00:00:01 -vframes 1 "${posterPath}"`);
        console.log(`✅ Poster creado`);
      }
    }
    
    console.log('\n✨ Proceso completado');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

optimizeVideosSimple();