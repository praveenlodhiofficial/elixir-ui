import VerticalFlow from '@/registry/default/carousel/components/vertical-flow'
import { FaBus, FaCar, FaSchool, FaTruckMoving } from 'react-icons/fa'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled, TbCircleNumber5Filled } from 'react-icons/tb'
const featuredCards = [
     {
          link: '/components/carousel/liquid-frame.png',
          icons: <TbCircleNumber1Filled className="h-7 w-7 text-2xl text-black dark:text-white" />,
          title: 'Liquid Frame',
          category: 'Component',
          description:
               'Liquid Frame adds a fluid, interactive water ripple effect to images using Three.js.',
          image: 'https://images.pexels.com/photos/2245434/pexels-photo-2245434.jpeg?auto=compress&cs=tinysrgb&w=1600',
     },
     {
          link: '/components/carousel/sidemenu.png',
          icons: <TbCircleNumber2Filled  className="h-7 w-7 text-xl text-black dark:text-white" />,
          title: 'SideMenu',
          category: 'Components',
          description:
               'It offers a toggleable design with smooth animations, making it a versatile choice for modern web applications.',
          image: 'https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=1600',
     },
     {
          link: '/components/carousel/3d-vanilla-tilt.png',
          icons: <TbCircleNumber3Filled className="h-7 w-7 text-xl text-black dark:text-white" />,
          title: '3D Vanilla Tilt',
          category: 'Components / Cards',
          description: 'A React component containing stunning 3D tilt effects.',
          image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
     },
     {
          link: '/components/carousel/showcase.png',
          icons: <TbCircleNumber4Filled className="h-7 w-7 text-xl text-black dark:text-white" />,
          title: 'Showcase',
          category: 'Components',
          description:
               'Showcase your products or services with a beautiful and interactive showcase.',
          image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
     },
     {
          link: '/components/carousel/teammates-v1.png',
          icons: <TbCircleNumber5Filled className="h-7 w-7 text-xl text-black dark:text-white" />,
          title: 'Teammates v1.0.0',
          category: 'Components / Teams',
          description: 'A component that displays a list of teammates with a hover effect.',
          image: 'https://images.pexels.com/photos/2245434/pexels-photo-2245434.jpeg?auto=compress&cs=tinysrgb&w=1600',
     },
]

export default function VerticalFlowExample() {
     return (
          <div className="h-full w-full">
               <VerticalFlow cards={featuredCards} />
          </div>
     )
}
