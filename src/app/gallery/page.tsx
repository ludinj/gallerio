import UploadButton from '@/components/ui/UploadButton';
import React, { FC } from 'react';
import cloudinary from 'cloudinary';
import { CldImage } from 'next-cloudinary';
import CloudinaryImage from '@/components/CloudinaryImage';

interface pageProps {}

const page = async ({}: pageProps) => {
  const result = (await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at', 'desc')
    .max_results(10)
    .execute()) as { resources: SearchResult[] };

  console.log(result, 'test');
  return (
    <section>
      <div className=' flex flex-col gap-8'>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-bold'>Gallery</h1>
          <UploadButton />
        </div>
        <div className='grid grid-cols-4 gap-4'>
          {result.resources.map((result) => (
            <CloudinaryImage
              public_id={result.public_id}
              key={result.public_id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
