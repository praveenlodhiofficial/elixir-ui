import { ReflextGallery } from "@/components/elixir-ui/reflext-gallery";

export function ReflextGalleryPreview() {
   const images = [
      {
         src: "https://plus.unsplash.com/premium_photo-1682096467444-8861e1dc3bc2",
         alt: "Jane Doe",
      },
      {
         src: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b",
         alt: "John Doe",
      },
      {
         src: "https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01",
         alt: "Jane Doe",
      },
      {
         src: "https://plus.unsplash.com/premium_photo-1682096467444-8861e1dc3bc2",
         alt: "Jane Doe",
      },
      {
         src: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b",
         alt: "John Doe",
      },
      {
         src: "https://plus.unsplash.com/premium_photo-1682096467444-8861e1dc3bc2",
         alt: "Jane Doe",
      },
   ];

   return (
      <div className="relative top-30 flex h-fit w-full items-center justify-center">
         <ReflextGallery images={images} />
      </div>
   );
}
