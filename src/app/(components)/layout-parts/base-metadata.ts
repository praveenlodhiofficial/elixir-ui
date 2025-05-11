import { Metadata } from 'next';

interface BaseMetadataProps {
  title?: string;
  description?: string;
}
export function baseMetadata({ title, description }: BaseMetadataProps): Metadata {
  return {
    title: `${title} Elixir UI -Praveen Lodhi`,
    description: `Elixir UI: ${description}`,
    authors: [{ name: 'Praveen Lodhi' }, { url: 'https://praveenlodhi.me/', name: 'Praveen' }],
  };
}