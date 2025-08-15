import Carousel2 from '@/registry/components/carousel2'

const Carousel2Cards = [
     {
          link: '',    
          iconName: 'TbCircleNumber1Filled',
          title: 'Liquid Frame',
          category: 'Component',
          description:
               'Liquid Frame adds a fluid, interactive water ripple effect to images using Three.js.',
          imageURL: '/components/carousel/liquid-frame.png',
     },
     {
          link: '',
          iconName: 'TbCircleNumber2Filled',
          title: 'SideMenu',
          category: 'Components',
          description:
               'It offers a toggleable design with smooth animations, making it a versatile choice for modern web applications.',
          imageURL: '/components/carousel/sidemenu.png',
     },
     {
          link: '',
          iconName: 'TbCircleNumber3Filled',
          title: '3D Vanilla Tilt',
          category: 'Components / Cards',
          description: 'A React component containing stunning 3D tilt effects.',
          imageURL: '/components/carousel/3d-vanilla-tilt.png',
     },
     {
          link: '',
          iconName: 'TbCircleNumber4Filled',
          title: 'Showcase',
          category: 'Components',
          description:
               'Showcase your products or services with a beautiful and interactive showcase.',
          imageURL: '/components/carousel/showcase.png',
     },
     {
          link: '',
          iconName: 'TbCircleNumber5Filled', 
          title: 'Teammates v1.0.0',
          category: 'Components / Teams',
          description: 'A component that displays a list of teammates with a hover effect.',
          imageURL: '/components/carousel/teammates-v1.png',
     },
]

export default function Carousel2Preview() {
     return (
          <div className="h-full w-full max-w-5xl">
               <Carousel2 cards={Carousel2Cards} />
          </div>
     )
}
