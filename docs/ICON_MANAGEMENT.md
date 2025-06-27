# Icon Management System

This project uses a centralized icon management system to avoid manual imports and make icon usage consistent across the codebase.

## How It Works

### 1. Centralized Icon Registry (`src/lib/icons.ts`)

All icons are imported and registered in a single file:

```typescript
// React Icons imports
import { FaFigma, FaReact } from 'react-icons/fa6'
import { RiNextjsFill } from 'react-icons/ri'
// ... more imports

// Lucide React imports
import { ArrowRight, Zap, Menu, X } from 'lucide-react'
// ... more imports

// Icon mapping object
export const iconMap: { [key: string]: React.ComponentType<any> } = {
     FaFigma,
     FaReact,
     RiNextjsFill,
     ArrowRight,
     Zap,
     Menu,
     X,
     // ... all icons
}
```

### 2. Reusable Icon Component (`src/components/ui/icon.tsx`)

A reusable component that renders icons by name:

```tsx
import { Icon } from '@/components/ui/icon'

// Usage
<Icon name="FaReact" className="h-5 w-5" />
<Icon name="ArrowRight" size={24} />
```

## Adding New Icons

### Method 1: Using the TypeScript Utility Script (Recommended)

```bash
# Add a React Icon
npx tsx scripts/add-icon.ts FaGithub react-icons/fa

# Add a Lucide Icon
npx tsx scripts/add-icon.ts Home lucide-react
```

The script will:

- ✅ Validate icon name format (must be PascalCase)
- ✅ Check if icon already exists
- ✅ Add import to the correct section
- ✅ Add icon to the iconMap
- ✅ Provide helpful error messages

### Method 2: Manual Addition

1. Add the import to `src/lib/icons.ts`:

     ```typescript
     import { FaGithub } from 'react-icons/fa'
     ```

2. Add the icon to the `iconMap`:
     ```typescript
     export const iconMap = {
          // ... existing icons
          FaGithub,
     }
     ```

## Usage Examples

### In Components

```tsx
import { Icon } from '@/components/ui/icon'

function MyComponent() {
     return (
          <div>
               <Icon name="FaReact" className="h-6 w-6 text-blue-500" />
               <Icon name="ArrowRight" size={20} />
               <Icon name="Zap" className="text-yellow-500" />
          </div>
     )
}
```

### Dynamic Icon Rendering

```tsx
const techStackIcons = ['FaReact', 'TbBrandTypescript', 'TbBrandTailwind']

{
     techStackIcons.map((iconName, index) => (
          <Icon key={index} name={iconName} className="h-5 w-5" />
     ))
}
```

### With Props

```tsx
<Icon
     name="ArrowRight"
     className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
     onClick={() => console.log('clicked')}
/>
```

## Benefits

1. **No Manual Imports**: No need to import icons in every component
2. **Type Safety**: TypeScript support with `IconName` type
3. **Consistent API**: Same interface for all icons regardless of source
4. **Easy Maintenance**: All icons in one place
5. **Bundle Optimization**: Only imports what's actually used
6. **Error Handling**: Warns when an icon doesn't exist
7. **Automated Management**: TypeScript script for adding new icons

## Available Icons

### React Icons

- `FaFigma`, `FaReact`, `FaLinkedin` (from `react-icons/fa6`)
- `FaBus`, `FaCar`, `FaSchool`, `FaTruckMoving` (from `react-icons/fa`)
- `RiNextjsFill`, `RiBankCardFill` (from `react-icons/ri`)
- `TbBrandTailwind`, `TbBrandTypescript` (from `react-icons/tb`)
- `MdViewCarousel` (from `react-icons/md`)
- `HiOutlineMenuAlt1` (from `react-icons/hi`)
- `GrArticle` (from `react-icons/gr`)
- `BsTwitterX` (from `react-icons/bs`)

### Lucide React

- `ArrowRight`, `Zap`, `Menu`, `X`
- `MoonIcon`, `SunIcon`, `Check`, `Copy`
- `ChevronDownIcon`, `ChevronDown`, `ChevronRight`
- `Search`, `Eye`, `Star`, `Users`
- `Github`, `Sparkles`, `Palette`, `Code`
- `Download`, `Layers`, `MousePointer`, `Wind`
- `Library`, `BookOpen`, `Rocket`, `Grid3X3`
- `GithubIcon`, `LinkedinIcon`, `TwitterIcon`, `BriefcaseIcon`
- `Info`

## Migration Guide

To migrate existing components:

1. **Before:**

     ```tsx
     import { FaReact } from 'react-icons/fa6'
     import { ArrowRight } from 'lucide-react'

     <FaReact className="h-5 w-5" />
     <ArrowRight className="h-4 w-4" />
     ```

2. **After:**

     ```tsx
     import { Icon } from '@/components/ui/icon'

     <Icon name="FaReact" className="h-5 w-5" />
     <Icon name="ArrowRight" className="h-4 w-4" />
     ```

## Troubleshooting

### Icon Not Found

If you see a warning like `Icon "MyIcon" not found in icon registry`, it means:

1. The icon wasn't added to the registry
2. The icon name is misspelled
3. The icon doesn't exist in the specified package

### TypeScript Errors

Make sure to use the `IconName` type for icon names:

```tsx
import { Icon, type IconName } from '@/components/ui/icon'

const iconName: IconName = 'FaReact' // Type-safe
```

### Script Errors

If the add-icon script fails:

1. Make sure you have `tsx` installed: `npm install -g tsx`
2. Check that the icon name is PascalCase (e.g., `FaGithub`, not `faGithub`)
3. Verify the package name is correct (e.g., `react-icons/fa`, `lucide-react`)
