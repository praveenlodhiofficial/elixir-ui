import { promises as fs } from 'fs'
import path from 'path'

/**
 * Preloads an image on the server side for faster retrieval
 * @param imagePath - The relative path to the image from the public directory
 * @returns Promise<string> - The image path if it exists, or the original path as fallback
 */
export async function preloadImage(imagePath: string): Promise<string> {
     try {
          // Remove leading slash if present
          const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
          const fullPath = path.join(process.cwd(), 'public', cleanPath)

          // Check if file exists
          await fs.access(fullPath)

          // Return the original path for client-side use
          return imagePath
     } catch (error) {
          console.warn(`Image not found at ${imagePath}, using fallback:`, error)
          return imagePath
     }
}

/**
 * Preloads multiple images on the server side
 * @param imagePaths - Array of image paths to preload
 * @returns Promise<string[]> - Array of image paths
 */
export async function preloadImages(imagePaths: string[]): Promise<string[]> {
     const preloadPromises = imagePaths.map(path => preloadImage(path))
     return Promise.all(preloadPromises)
}

/**
 * Creates an optimized image URL with Next.js Image optimization parameters
 * @param src - The image source path
 * @param width - The desired width
 * @param height - The desired height
 * @param quality - The image quality (1-100)
 * @returns string - The optimized image URL
 */
export function createOptimizedImageUrl(
     src: string,
     width: number,
     height: number,
     quality: number = 75
): string {
     // For external images, return as is
     if (src.startsWith('http')) {
          return src
     }

     // For local images, add optimization parameters
     const url = new URL(src, 'http://localhost')
     url.searchParams.set('w', width.toString())
     url.searchParams.set('h', height.toString())
     url.searchParams.set('q', quality.toString())

     return url.pathname + url.search
}

/**
 * Checks if an image is likely to be cached by the browser
 * @param imagePath - The image path
 * @returns boolean - True if the image is likely cached
 */
export function isImageCached(imagePath: string): boolean {
     if (typeof window === 'undefined') return false

     const img = new window.Image()
     img.src = imagePath

     // Check if the image is already in the browser cache
     return img.complete
}
