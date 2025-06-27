import AnnoncementBanner from '@/components/home/Banner'
import Navbar from '@/components/home/Navbar'
import TemplateCard from '@/components/templates/TemplateCard'
import { Separator } from '@/components/ui/separator'
import TemplateBanner from '@/components/templates/TemplateBanner'
import templatesData from '@/data/templates.json'
import Footer2 from '@/components/home/Footer2'

async function getTemplates() {
     return templatesData
}

export default async function Templates() {
     const templates = await getTemplates()
     return (
          <>
               <AnnoncementBanner />
               <div className="mx-auto mb-10 flex h-full max-w-7xl flex-col space-y-15">
                    <Navbar />
                    <TemplateBanner />
                    <Separator />
                    {templates.map((template: any, index: number) => (
                         <TemplateCard
                              key={index}
                              name={template.name}
                              price={template.price}
                              description={template.description}
                              templatePageURL={template.templatePageURL}
                              techStack={template.techStack}
                              techStackIcons={template.techStackIcons}
                              image={template.image}
                         />
                    ))}
               </div>
               {/* <Footer2 /> */}
          </>
     )
}
