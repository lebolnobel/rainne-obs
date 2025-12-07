import * as React from 'react';

type ImageProps = {
  src: string;
  alt: string;
  description: string;
  subDescription?: string;
};

const Image = (props: ImageProps): React.ReactNode => {
  const { src, alt, description, subDescription } = props;

  return (
    <div className="relative h-48 w-full bg-gray-100 rounded-md group overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-125"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center justify-between text-gray-200 hover:text-white">
            <div>
              <h3 className="text-xl font-semibold">{description}</h3>
              {subDescription ? (
                <div className="flex italic flex flex-wrap">
                  <span>{subDescription}</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
