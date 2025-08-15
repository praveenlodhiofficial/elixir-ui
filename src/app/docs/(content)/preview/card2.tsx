import Card2 from "@/registry/components/card2"

const Card2Data = {
     imageUrl:
          'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800',
     description:
          "Discover the power of Elixir UI - a comprehensive collection of modern, customizable React components. Whether you're building a landing page, dashboard, or complex web application, our carefully crafted components will help you create stunning user interfaces with ease. Start building beautiful UIs today!",
     title: 'Ready to Build Something Amazing?',
     infoBadge: [
          {
               title: 'Modern React Components',
               iconColor: 'orange',
               iconName: 'Circle',
          },
          {
               title: 'Fully Customizable',
               iconColor: 'green',
               iconName: 'Check',
          },
          {
               title: 'TypeScript Ready',
               iconColor: 'blue',
               iconName: 'Info',
          },
     ],
     featureBox: [
          {
               title: 'Beautiful Animations',
               description: 'Smooth, performant animations that enhance user experience.',
               iconColor: 'blue',
               iconName: 'FaRocket',
          },
          {
               title: 'Dark Mode Support',
               description: 'Built-in dark mode with seamless theme switching.',
               iconColor: 'purple',
               iconName: 'FaLightbulb',
          },
     ],
}

export function Card2Preview() {
     return (
          <div className="scale-94">
               <Card2
                    infoBadge={Card2Data.infoBadge}
                    featureBox={Card2Data.featureBox}
                    imageUrl={Card2Data.imageUrl}
                    description={Card2Data.description}
                    title={Card2Data.title}
               />
          </div>
     )
}
