// Centralized icon registry
// This file manages all icon imports and provides a mapping for easy access

// React Icons imports
import { FaFigma, FaReact } from 'react-icons/fa6'
import {
     FaBus,
     FaCar,
     FaSchool,
     FaTruckMoving,
     FaLinkedin,
     FaFacebookF,
     FaInstagram,
     FaServicestack,
} from 'react-icons/fa'
import { RiNextjsFill, RiBankCardFill } from 'react-icons/ri'
import {
     TbBrandTailwind,
     TbBrandTypescript,
     TbCircleNumber1Filled,
     TbCircleNumber2Filled,
     TbCircleNumber3Filled,
     TbCircleNumber4Filled,
     TbCircleNumber5Filled,
} from 'react-icons/tb'
import { MdViewCarousel } from 'react-icons/md'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { GrArticle } from 'react-icons/gr'
import { FaChalkboardUser, FaSass } from 'react-icons/fa6'
import { BsTwitterX } from 'react-icons/bs'
import { BiLogoPaypal, BiSupport } from 'react-icons/bi'
import { LuSunMoon, LuSunMedium } from 'react-icons/lu'
import { TbBrandFramerMotion } from 'react-icons/tb'
import { SiShadcnui } from 'react-icons/si'
import { FaBriefcase } from 'react-icons/fa'
import { MdOutlineZoomOutMap, MdZoomInMap  } from 'react-icons/md'

// Lucide React imports
import {
     ArrowRight,
     Zap,
     MoonIcon,
     SunIcon,
     Check,
     Copy,
     ChevronDownIcon,
     Menu,
     X,
     ChevronDown,
     ChevronRight,
     Search,
     Eye,
     Star,
     Users,
     Github,
     Sparkles,
     Palette,
     Code,
     Download,
     Layers,
     MousePointer,
     Wind,
     Library,
     BookOpen,
     Rocket,
     Grid3X3,
     GithubIcon,
     LinkedinIcon,
     TwitterIcon,
     BriefcaseIcon,
     Info,
     ArrowRightIcon,
     BookMarked,
     Circle,
     Copyright,
     CreditCard,
     Hammer,
     Package,
     Phone,
     Shield,
     TrendingUp,
} from 'lucide-react'

// Icon mapping object
export const iconMap: { [key: string]: React.ComponentType<any> } = {
     // React Icons
     FaFigma,
     FaReact,
     FaBus,
     FaCar,
     FaSchool,
     FaTruckMoving,
     FaLinkedin,
     FaFacebookF,
     FaInstagram,
     FaServicestack,
     RiNextjsFill,
     RiBankCardFill,
     TbBrandTailwind,
     TbBrandTypescript,
     TbCircleNumber1Filled,
     TbCircleNumber2Filled,
     TbCircleNumber3Filled,
     TbCircleNumber4Filled,
     TbCircleNumber5Filled,
     MdViewCarousel,
     HiOutlineMenuAlt1,
     GrArticle,
     FaChalkboardUser,
     FaSass,
     BsTwitterX,
     BiLogoPaypal,
     BiSupport,
     LuSunMoon,
     LuSunMedium,
     TbBrandFramerMotion,
     SiShadcnui,
     FaBriefcase,
     MdOutlineZoomOutMap,
     MdZoomInMap,
     // Lucide React
     ArrowRight,
     Zap,
     MoonIcon,
     SunIcon,
     Check,
     Copy,
     ChevronDownIcon,
     Menu,
     X,
     ChevronDown,
     ChevronRight,
     Search,
     Eye,
     Star,
     Users,
     Github,
     Sparkles,
     Palette,
     Code,
     Download,
     Layers,
     MousePointer,
     Wind,
     Library,
     BookOpen,
     Rocket,
     Grid3X3,
     GithubIcon,
     LinkedinIcon,
     TwitterIcon,
     BriefcaseIcon,
     Info,
     ArrowRightIcon,
     BookMarked,
     Circle,
     Copyright,
     CreditCard,
     Hammer,
     Package,
     Phone,
     Shield,
     TrendingUp,
}

// Helper function to get an icon component by name
export function getIcon(iconName: string): React.ComponentType<any> | null {
     return iconMap[iconName] || null
}

// Type for icon names
export type IconName = keyof typeof iconMap

// Helper function to check if an icon exists
export function hasIcon(iconName: string): boolean {
     return iconName in iconMap
}
