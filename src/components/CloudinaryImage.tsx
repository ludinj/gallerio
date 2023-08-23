'use client';

import { CldImage } from 'next-cloudinary';

interface CloudinaryImageProps {
  public_id: string;
}

const CloudinaryImage = ({ public_id }: CloudinaryImageProps) => {
  return (
    <CldImage
      key={public_id}
      width='960'
      height='600'
      src={public_id}
      sizes='100vw'
      alt='Description of my image'
    />
  );
};

export default CloudinaryImage;
