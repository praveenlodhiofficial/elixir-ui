import React from 'react'

const About = () => {
     return (
          <div className="mx-auto flex w-6xl flex-col items-center justify-center space-y-8 py-20">
               <h1 className="text-8xl font-bold">About Me</h1>
               <p className="text-muted-foreground text-center text-base">
                    Hi, I'm Praveen Lodhi, a Computer Science student from India who loves building
                    things with technology. I'm currently pursuing B.Tech in Computer Science at
                    Dwarkadas J. Sanghvi College of Engineering (DJSCE), Mumbai. My main interests
                    are web development & Blockchain development.
               </p>

               <p className="text-muted-foreground text-center text-base">
                    I started with a curiosity about how software works and quickly got hooked on
                    creating things that make a difference. Over time, I've worked on projects like
                    a real-time collaborative canvas app, an AI image generator, and a shared
                    calendar platform for teams. These projects have helped me get hands-on
                    experience with tools like React.js, Next.js, Node.js, Prisma, and PostgreSQL.
               </p>

               <p className="text-muted-foreground text-center text-base">
                    Outside of coding, I enjoy participating in hackathons, exploring open-source
                    projects, and keeping up with the latest tech trends. I'm always looking for
                    ways to learn more, improve my skills, and work on projects that solve real
                    problems.
               </p>
          </div>
     )
}

export default About
