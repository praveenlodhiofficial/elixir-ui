#!/usr/bin/env tsx

/**
 * Utility script to add new icons to the centralized icon registry
 * Usage: npx tsx scripts/add-icon.ts <icon-name> <package>
 *
 * Examples:
 * npx tsx scripts/add-icon.ts FaGithub react-icons/fa
 * npx tsx scripts/add-icon.ts Home lucide-react
 */

import fs from 'fs'
import path from 'path'

const ICONS_FILE_PATH = path.join(__dirname, '../src/lib/icons.ts')

interface IconConfig {
     importSection: string
     iconMapSection: string
}

function getIconConfig(iconName: string, packageName: string): IconConfig {
     if (packageName.startsWith('react-icons/')) {
          const subPackage = packageName.split('/')[1]
          return {
               importSection: `import { ${iconName} } from 'react-icons/${subPackage}'`,
               iconMapSection: `  ${iconName},`,
          }
     } else if (packageName === 'lucide-react') {
          return {
               importSection: `  ${iconName},`,
               iconMapSection: `  ${iconName},`,
          }
     } else {
          throw new Error(`Unsupported package: ${packageName}`)
     }
}

function addIcon(iconName: string, packageName: string): void {
     try {
          // Read the current icons file
          let content = fs.readFileSync(ICONS_FILE_PATH, 'utf8')
          const config = getIconConfig(iconName, packageName)

          // Check if icon already exists
          if (content.includes(iconName)) {
               console.log(`⚠️  Icon "${iconName}" already exists in the registry`)
               return
          }

          // Add import
          if (packageName.startsWith('react-icons/')) {
               // Find the React Icons imports section
               const reactIconsMatch = content.match(
                    /(\/\/ React Icons imports\n)([\s\S]*?)(\n\/\/ Lucide React imports)/
               )
               if (reactIconsMatch) {
                    const existingImports = reactIconsMatch[2]
                    const newImports = existingImports + '\n' + config.importSection
                    content = content.replace(
                         reactIconsMatch[0],
                         reactIconsMatch[1] + newImports + reactIconsMatch[3]
                    )
               } else {
                    throw new Error('Could not find React Icons imports section')
               }
          } else if (packageName === 'lucide-react') {
               // Find the Lucide React imports section
               const lucideMatch = content.match(/(import \{[\s\S]*?)(\n\} from 'lucide-react')/)
               if (lucideMatch) {
                    const existingImports = lucideMatch[1]
                    const newImports = existingImports + config.importSection + lucideMatch[2]
                    content = content.replace(lucideMatch[0], newImports)
               } else {
                    throw new Error('Could not find Lucide React imports section')
               }
          }

          // Add to iconMap
          if (packageName.startsWith('react-icons/')) {
               // Add to React Icons section in iconMap
               const reactIconsSection = content.match(
                    /(\/\/ React Icons\n)([\s\S]*?)(\n  \/\/ Lucide React)/
               )
               if (reactIconsSection) {
                    const newSection =
                         reactIconsSection[1] +
                         reactIconsSection[2] +
                         config.iconMapSection +
                         '\n' +
                         reactIconsSection[3]
                    content = content.replace(reactIconsSection[0], newSection)
               } else {
                    throw new Error('Could not find React Icons section in iconMap')
               }
          } else if (packageName === 'lucide-react') {
               // Add to Lucide React section in iconMap
               const lucideSection = content.match(/(\/\/ Lucide React\n)([\s\S]*?)(\n\})/)
               if (lucideSection) {
                    const newSection =
                         lucideSection[1] +
                         lucideSection[2] +
                         config.iconMapSection +
                         '\n' +
                         lucideSection[3]
                    content = content.replace(lucideSection[0], newSection)
               } else {
                    throw new Error('Could not find Lucide React section in iconMap')
               }
          }

          // Write back to file
          fs.writeFileSync(ICONS_FILE_PATH, content, 'utf8')

          console.log(`✅ Successfully added ${iconName} from ${packageName} to the icon registry`)
          console.log(`📝 You can now use it as: <Icon name="${iconName}" />`)
     } catch (error) {
          console.error('❌ Error adding icon:', error instanceof Error ? error.message : error)
          process.exit(1)
     }
}

// CLI handling
const args = process.argv.slice(2)

if (args.length !== 2) {
     console.log('Usage: npx tsx scripts/add-icon.ts <icon-name> <package>')
     console.log('')
     console.log('Examples:')
     console.log('  npx tsx scripts/add-icon.ts FaGithub react-icons/fa')
     console.log('  npx tsx scripts/add-icon.ts Home lucide-react')
     console.log('')
     console.log('Supported packages:')
     console.log('  - react-icons/* (e.g., react-icons/fa, react-icons/ri, react-icons/tb)')
     console.log('  - lucide-react')
     process.exit(1)
}

const [iconName, packageName] = args

// Validate icon name format
if (!/^[A-Z][a-zA-Z0-9]*$/.test(iconName)) {
     console.error('❌ Invalid icon name. Icon names should be PascalCase (e.g., FaGithub, Home)')
     process.exit(1)
}

addIcon(iconName, packageName)
