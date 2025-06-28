import TeammatesSection from "@/components/teammates-v2";

const teammates = [
{
id: 'carlosmendes',
name: 'Carlos Mendes',
role: 'Co-Founder and CTO',
company: 'NextTech',
companyUrl: 'https://nexttech.com',
image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
socialLinks: {
twitter: 'https://x.com/praveenlodhi99',
linkedin: 'https://www.linkedin.com/in/praveenlodhiofficial'
},
},
{
id: 'sophielaurent',
name: 'Sophie Laurent',
role: 'Operations Director',
company: 'NextTech',
companyUrl: 'https://nexttech.com',
image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
socialLinks: {
twitter: 'https://x.com/praveenlodhi99',
linkedin: 'https://www.linkedin.com/in/praveenlodhiofficial'
},
},
{
id: 'larseriksson',
name: 'Lars Eriksson',
role: 'Senior Software Developer',
company: 'FreshMeals',
companyUrl: 'https://www.freshmeals.com',
image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
socialLinks: {
twitter: 'https://x.com/praveenlodhi99',
linkedin: 'https://www.linkedin.com/in/praveenlodhiofficial'
},
},
{
id: 'elenakowalski',
name: 'Elena Kowalski',
role: 'Product Lead',
company: 'NextTech',
companyUrl: 'https://nexttech.com',
image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
socialLinks: {
twitter: 'https://x.com/praveenlodhi99',
linkedin: 'https://www.linkedin.com/in/praveenlodhiofficial'
},
},
{
id: 'johannilsson',
name: 'Johan Nilsson',
role: 'Lead Software Engineer',
company: 'TechRetail',
companyUrl: 'https://www.techretail.com',
image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
socialLinks: {
twitter: 'https://x.com/praveenlodhi99',
linkedin: 'https://www.linkedin.com/in/praveenlodhiofficial'
},
},
{
id: 'michaelchen',
name: 'Michael Chen',
role: 'Junior Developer',
company: 'DataMetrics',
companyUrl: 'https://datametrics.com',
image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f',
socialLinks: {
twitter: 'https://x.com/praveenlodhi99',
linkedin: 'https://www.linkedin.com/in/praveenlodhiofficial'
},
}
];

export default function Page() {
return (

<div className="mx-auto w-7xl ">
<TeammatesSection teammates={teammates} nameSize="xl" descriptionSize="sm" />
</div>
);
}
