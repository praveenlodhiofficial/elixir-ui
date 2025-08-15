# Component Mapping Automation

This document explains how to use the automated component mapping system to avoid manually updating component mappings every time you add new components.

## Overview

Previously, you had to manually:
1. Import each preview component
2. Create a mapping object with numeric keys
3. Update the mapping every time you add a new component

Now, the system automatically generates these mappings based on your JSON data files.

## How It Works

### 1. Automated Mapping Function

The `generateComponentMapping` function in `src/lib/component-mapper.ts` automatically:
- Reads your component data from JSON files
- Maps preview components to their data
- Generates numeric keys (1, 2, 3, etc.)
- Creates the final mapping object

### 2. Usage in Component Pages

Instead of manual mapping:

```typescript
// OLD WAY - Manual mapping
const carouselComponents = {
  '1': {
    ...carouselData.carousel1,
    previewComponent: <Carousel1Preview />
  },
  '2': {
    ...carouselData.carousel2,
    previewComponent: <Carousel2Preview />
  }
}
```

Use the automated approach:

```typescript
// NEW WAY - Automated mapping
const carouselComponents = generateComponentMapping(
  carouselData,
  {
    carousel1: Carousel1Preview,
    carousel2: Carousel2Preview
  }
)
```

### 3. Adding New Components

When you add a new component:

1. **Add the component data** to your JSON file (e.g., `carousel.json`)
2. **Create the preview component** in the preview directory
3. **Import the preview component** in your page file
4. **Add it to the previewComponents object** in the `generateComponentMapping` call

The mapping will automatically update with the new numeric key.

## Available Functions

### `generateComponentMapping(data, previewComponents)`
- Automatically generates numeric keys (1, 2, 3...)
- Maps JSON data to preview components
- Returns a complete mapping object

### `generateCustomComponentMapping(data, previewComponents, keyMapper)`
- Allows custom key mapping logic
- Useful if you want different key patterns

### `getAvailableComponentKeys(mapping)`
- Returns array of available component keys
- Useful for error messages and validation

### `isValidComponentKey(key, mapping)`
- Validates if a component key exists
- Useful for error handling

## Auto-Generation Script

For even more automation, use the generation script:

```bash
# Generate mappings for all component types
npm run generate:mapping

# Or run the script directly
npx tsx scripts/generate-component-mapping.ts
```

This script will:
- Read all your JSON data files
- Generate complete page files with automated mappings
- Update all component pages at once

## File Structure

```
src/
├── lib/
│   └── component-mapper.ts          # Core automation utilities
├── app/docs/(content)/
│   ├── data/
│   │   ├── carousel.json           # Component data
│   │   └── card.json
│   ├── preview/
│   │   ├── carousel1.tsx          # Preview components
│   │   └── carousel2.tsx
│   └── components/
│       └── carousel/
│           └── [...slug]/
│               └── page.tsx        # Uses automated mapping
└── scripts/
    └── generate-component-mapping.ts # Auto-generation script
```

## Benefits

1. **No More Manual Updates**: Adding components automatically updates the mapping
2. **Consistent Structure**: All component pages follow the same pattern
3. **Type Safety**: Full TypeScript support with proper interfaces
4. **Maintainable**: Centralized logic for component mapping
5. **Scalable**: Easy to add new component types

## Example: Adding a New Carousel

1. **Add to `carousel.json`**:
```json
{
  "carousel3": {
    "title": "Carousel #3",
    "description": "A new carousel component",
    // ... other properties
  }
}
```

2. **Create `preview/carousel3.tsx`**:
```typescript
export function Carousel3Preview() {
  return <div>Carousel 3 Preview</div>
}
```

3. **Update your page file**:
```typescript
import { Carousel3Preview } from '@/app/docs/(content)/preview/carousel3'

const carouselComponents = generateComponentMapping(
  carouselData,
  {
    carousel1: Carousel1Preview,
    carousel2: Carousel2Preview,
    carousel3: Carousel3Preview  // Add this line
  }
)
```

The new component will automatically be available at `/docs/components/carousel/3`!

## Troubleshooting

### Component Not Found Error
- Check that the preview component is properly imported
- Verify the component exists in the JSON data
- Ensure the preview component name matches the JSON key

### Type Errors
- Make sure your JSON data matches the `ComponentData` interface
- Check that preview components are properly typed
- Verify import paths are correct

### Mapping Not Working
- Run `npm run generate:mapping` to regenerate all files
- Check console for any error messages
- Verify file paths in the generation script

## Future Enhancements

- **Dynamic Import Discovery**: Automatically find preview components based on naming conventions
- **Hot Reload**: Watch for changes and automatically regenerate mappings
- **Validation**: Check that all components have corresponding preview components
- **Documentation**: Auto-generate component documentation from JSON data
