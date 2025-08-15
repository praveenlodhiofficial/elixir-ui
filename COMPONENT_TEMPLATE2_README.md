# ComponentTemplate2 - Interactive Component Documentation

A comprehensive React component template that **automatically** extracts code and generates usage instructions from your components. Simply pass your component and it handles everything else!

## ✨ **Key Features**

- **Preview Tab**: Live component preview with fullscreen toggle
- **Code Tab**: **Automatically extracted** source code with copy functionality  
- **Usage Tab**: **Auto-generated** step-by-step usage instructions
- **CLI Tab**: CLI installation commands with one-click copy to clipboard
- **Responsive Design**: Works on all device sizes
- **Dark Mode Support**: Seamless theme switching
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🚀 **How It Works**

The component automatically:
1. **Extracts source code** from your component function
2. **Generates usage steps** based on the component name and structure
3. **Renders live preview** of your component
4. **Provides copy functionality** for code and CLI commands

## 📦 **Installation**

The component uses existing UI components from your project:
- `@/components/ui/tabs` - For tab functionality
- `@/components/ui/copy` - For clipboard copying
- `@/components/docs/code-card/parts/code-highlight` - For code highlighting
- `@/registry/ui/icon` - For icons
- `@/components/ThemeToggleButton` - For theme switching

## 💻 **Usage**

### **Super Simple - Just Pass Your Component!**

```tsx
import ComponentTemplate2 from '@/components/ComponentTemplate2'

// Your component (any React component)
const MyAwesomeComponent = () => (
  <div className="p-4 bg-blue-500 text-white rounded">
    Hello World!
  </div>
)

export default function MyPage() {
  return (
    <ComponentTemplate2
      title="My Awesome Component"
      description="A beautiful and functional component"
      component={MyAwesomeComponent}
      cliCommand="npx shadcn add my-component"
    />
  )
}
```

### **That's It!** 

The component automatically:
- ✅ Extracts the source code from `MyAwesomeComponent`
- ✅ Generates usage steps (Import, Use in JSX, Customize)
- ✅ Shows live preview
- ✅ Provides copy functionality

## 🔧 **Props Interface**

```tsx
interface ComponentTemplate2Props {
  title: string                    // Component title
  description?: string             // Optional description
  component: React.ComponentType<any> // Your component (function/class)
  cliCommand: string              // CLI installation command
  className?: string              // Optional CSS classes
}
```

## 📋 **Auto-Generated Content**

### **Code Tab**
- Automatically extracts source code from your component function
- Cleans up function declarations for better readability
- Adds proper import/export statements
- Syntax highlighting with copy functionality

### **Usage Tab**
- **Step 1**: Import statement based on component name
- **Step 2**: Basic usage example in JSX
- **Step 3**: Customization examples with props and styling

### **Preview Tab**
- Live rendering of your component
- Fullscreen toggle for better viewing
- Responsive container with proper padding

### **CLI Tab**
- Your provided CLI command
- Terminal-style formatting
- One-click copy to clipboard

## 🎯 **Real Examples**

### **Simple Component**
```tsx
const Button = () => <button className="px-4 py-2 bg-blue-500">Click me</button>

<ComponentTemplate2
  title="Button"
  component={Button}
  cliCommand="npm install @your-org/button"
/>
```

### **Complex Component with Props**
```tsx
const Card = ({ title, children, className }) => (
  <div className={`p-6 border rounded-lg ${className}`}>
    <h3 className="text-xl font-bold">{title}</h3>
    {children}
  </div>
)

<ComponentTemplate2
  title="Card"
  component={Card}
  cliCommand="npx shadcn add card"
/>
```

## 🔍 **How Code Extraction Works**

The component uses JavaScript's `toString()` method to extract the source code:

1. **Function Detection**: Automatically detects different function declaration patterns
2. **Code Cleaning**: Removes function names and converts to arrow functions
3. **Formatting**: Adds proper imports and exports
4. **Fallback**: Handles errors gracefully if extraction fails

## 🎨 **Customization**

### **Styling**
```tsx
<ComponentTemplate2
  // ... other props
  className="my-custom-class max-w-4xl"
/>
```

### **Advanced CLI Commands**
```tsx
// For shadcn/ui components
cliCommand="npx shadcn add https://elixir-ui-xi.vercel.app/registry/component-name.json"

// For npm packages
cliCommand="npm install @your-org/component-name"

// For custom installations
cliCommand="curl -sSL https://install.example.com | bash"
```

## 🚨 **Limitations & Notes**

- **Source Maps**: Code extraction works best with uncompiled components
- **Minified Code**: May not work well with heavily minified/bundled code
- **Dynamic Components**: Components created dynamically might not extract properly
- **Server Components**: Works best with client-side components

## 🧪 **Testing**

The component includes error handling:
- Graceful fallback if code extraction fails
- Console warnings for debugging
- Empty state handling for missing content

## 📱 **Responsive Behavior**

- **Mobile**: Single column layout with scrollable tabs
- **Tablet**: Optimized spacing and touch targets
- **Desktop**: Full layout with hover effects and fullscreen support

## 🔗 **Examples**

See the demo at `/try` route for a complete working example of ComponentTemplate2 in action.

## 🤝 **Contributing**

When adding new features to ComponentTemplate2:

1. Maintain backward compatibility
2. Add proper TypeScript types
3. Include accessibility improvements
4. Test on different screen sizes
5. Update this documentation

## 📄 **License**

This component is part of the Elixir UI project and follows the same licensing terms.

---

## 🎉 **Why This Approach?**

**Before**: You had to manually write code examples and usage steps
**Now**: Just pass your component and everything is generated automatically!

This makes it incredibly easy to document any React component without the overhead of maintaining separate code examples and usage documentation.
