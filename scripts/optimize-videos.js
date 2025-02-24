import { exec } from 'child_process';
import { readdir, mkdir } from 'fs/promises';
import { join } from 'path';
import util from 'util';

const execPromise = util.promisify(exec);

async function optimizeVideos() {
  const inputDir = join(process.cwd(), 'public/videos-raw');
  const outputDir = join(process.cwd(), 'public/videos');

  try {
    await mkdir(outputDir, { recursive: true });
    const files = await readdir(inputDir);
    
    for (const file of files) {
      if (file.match(/\.(mp4|mov|avi)$/i)) {
        const inputPath = join(inputDir, file);
        const outputMP4 = join(outputDir, `${file.split('.')[0]}.mp4`);
        const outputWebM = join(outputDir, `${file.split('.')[0]}.webm`);
        const posterPath = join(outputDir, `${file.split('.')[0]}-poster.jpg`);

        console.log(`Procesando: ${file}`);

        // Generar versión MP4 optimizada
        await execPromise(`ffmpeg -i "${inputPath}" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k "${outputMP4}"`);
        console.log(`✅ MP4 generado: ${file}`);

        // Generar versión WebM
        await execPromise(`ffmpeg -i "${inputPath}" -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus "${outputWebM}"`);
        console.log(`✅ WebM generado: ${file}`);

        // Generar poster
        await execPromise(`ffmpeg -i "${inputPath}" -ss 00:00:01 -vframes 1 "${posterPath}"`);
        console.log(`✅ Poster generado: ${file}`);
      }
    }
  } catch (error) {
    console.error('Error optimizando videos:', error);
  }
}

optimizeVideos();