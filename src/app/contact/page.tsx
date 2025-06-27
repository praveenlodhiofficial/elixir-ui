import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'

const Contact = () => {
     return (
          <div className="flex flex-col items-center justify-center space-y-4 py-40">
               <h1 className="text-8xl font-bold">Contact Me</h1>

               <div className="flex flex-col items-center justify-center space-y-4">
                    <p className="text-muted-foreground text-center text-base">
                         I'm always looking for new opportunities to collaborate on projects. If you
                         have any questions or would like to get in touch, please don't hesitate to
                         reach out to me.
                    </p>
                    <div className="flex flex-row items-center justify-center space-x-4">
                         {/* Twitter */}
                         <Link href="https://x.com/praveenlodhi99" target="_blank">
                              <Button className="cursor-pointer">
                                   <Icon name="BsTwitterX" />
                                   Twitter
                              </Button>
                         </Link>

                         {/* Portfolio */}
                         <Link href="https://praveenlodhi.me" target="_blank">
                              <Button className="cursor-pointer">
                                   <Icon name="FaBriefcase" />
                                   Portfolio
                              </Button>
                         </Link>

                         {/* Github */}
                         <Link href="https://github.com/praveenlodhiofficial" target="_blank">
                              <Button className="cursor-pointer">
                                   <Icon name="GithubIcon" />
                                   Github
                              </Button>
                         </Link>

                         {/* LinkedIn */}
                         <Link
                              href="https://www.linkedin.com/in/praveenlodhiofficial"
                              target="_blank"
                         >
                              <Button className="cursor-pointer">
                                   <Icon name="FaLinkedin" />
                                   LinkedIn
                              </Button>
                         </Link>
                    </div>
               </div>
          </div>
     )
}

export default Contact
