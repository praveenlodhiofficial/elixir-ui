import React from 'react'

export interface ComponentData {
  title: string
  description: string
  componentPath: string
  previewPath: string
  category: string
  tags: string[]
  installation: {
    cliSteps: Array<{
      step: number
      title: string
      code: string
    }>
    manualSteps: Array<{
      step: number
      title: string
      code: string
    }>
  }
  usage: {
    steps: Array<{
      step: number
      title: string
      code: string
    }>
  }
  features: string[]
  dependencies: string[]
}

export interface ComponentMapping {
  [key: string]: ComponentData & {
    previewComponent: React.ReactElement
  }
}

/**
 * Automatically generates component mappings from JSON data and preview components
 * @param data - The JSON data object containing component information
 * @param previewComponents - Object mapping component keys to their preview components
 * @returns Object with numeric keys mapping to component data + preview components
 */
export function generateComponentMapping<T extends Record<string, ComponentData>>(
  data: T,
  previewComponents: Record<keyof T, React.ComponentType<any>>
): ComponentMapping {
  const mapping: ComponentMapping = {}
  
  Object.keys(data).forEach((key, index) => {
    const componentKey = (index + 1).toString()
    const PreviewComponent = previewComponents[key as keyof T]
    
    if (PreviewComponent) {
      mapping[componentKey] = {
        ...data[key as keyof T],
        previewComponent: React.createElement(PreviewComponent)
      }
    }
  })
  
  return mapping
}

/**
 * Alternative approach: Generate mapping with custom keys
 * @param data - The JSON data object
 * @param previewComponents - Object mapping component keys to preview components
 * @param keyMapper - Function to map original keys to new keys
 * @returns Object with custom keys mapping to component data + preview components
 */
export function generateCustomComponentMapping<T extends Record<string, ComponentData>>(
  data: T,
  previewComponents: Record<keyof T, React.ComponentType<any>>,
  keyMapper: (originalKey: string, index: number) => string
): ComponentMapping {
  const mapping: ComponentMapping = {}
  
  Object.keys(data).forEach((key, index) => {
    const componentKey = keyMapper(key, index)
    const PreviewComponent = previewComponents[key as keyof T]
    
    if (PreviewComponent) {
      mapping[componentKey] = {
        ...data[key as keyof T],
        previewComponent: React.createElement(PreviewComponent)
      }
    }
  })
  
  return mapping
}

/**
 * Advanced: Auto-discover preview components based on naming convention
 * This function can be used to automatically find preview components
 * based on the component names in your data
 * 
 * Usage example:
 * const carouselComponents = generateAutoComponentMapping(
 *   carouselData,
 *   'carousel', // component type
 *   '@/app/docs/(content)/preview' // preview components path
 * )
 */
export function generateAutoComponentMapping<T extends Record<string, ComponentData>>(
  data: T,
  componentType: string,
  previewPath: string
): ComponentMapping {
  const mapping: ComponentMapping = {}
  
  Object.keys(data).forEach((key, index) => {
    const componentKey = (index + 1).toString()
    
    // This would need to be implemented with dynamic imports
    // For now, it's a placeholder showing the concept
    mapping[componentKey] = {
      ...data[key as keyof T],
      previewComponent: React.createElement('div', {}, `Auto-generated preview for ${key}`)
    }
  })
  
  return mapping
}

/**
 * Helper function to get available component keys
 * Useful for error messages and validation
 */
export function getAvailableComponentKeys(mapping: ComponentMapping): string[] {
  return Object.keys(mapping)
}

/**
 * Helper function to validate if a component key exists
 */
export function isValidComponentKey(key: string, mapping: ComponentMapping): boolean {
  return key in mapping
}
