//  page.tsx

import React from 'react'
import TeamMates from './teammates-component'

const Teammates = () => {
    return (
        <TeamMates
            teamMembers={[
                {
                    name: 'John Lennon',
                    alt: 'John Lennon',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbyFx0xQ3G2dkq-lqayWCpO0X2-w4u_OKdNSYoHnFVAHRGTr8OCVY36l0H70gAPU3xpM&usqp=CAU'
                },
                {
                    name: 'Paul McCartney',
                    alt: 'Paul McCartney',
                    url: 'https://i2-prod.liverpoolecho.co.uk/article30944658.ece/ALTERNATES/s615/0_Paul-McCartney-Press-Conference.jpg'
                },
                {
                    name: 'George Harrison',
                    alt: 'George Harrison',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBleaQNyfFvrLIzZvO--vrs_wL_d1D2krIj2YNMZhObgWRxJ36C9tq5EoxLltUhmHZHc&usqp=CAU'
                },
                {
                    name: 'Ringo Starr',
                    alt: 'Ringo Starr',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUQBHhh4v6JNARVkXmWNu9dqQgiDoSxZ1sg&s'
                },
            ]}
        />
    )
}

export default Teammates;









