import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import { useRecoilState } from 'recoil';
import { signatureImageState } from '../state/SignatureImageState';
import { type SignatureImageModel } from '../models/SingatureImageModel';
import { HiPlus } from 'react-icons/hi';

function SignatureLogo(): JSX.Element {
  const [images, setImages] = useRecoilState(signatureImageState);
  function onClickLogo(): void {
    const currentImages = images.slice();
    const image: SignatureImageModel = { ...currentImages[0] };
    image.url =
      'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80';
    currentImages[0] = image;
    setImages(currentImages);
  }
  return (
    <>
      <Avatar.Root className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gray-400/80">
        <Avatar.Image
          className="w-full h-full object-cover rounded-full"
          src={images[0].url}
          alt="{"
        />
        <Avatar.Fallback
          className="flex items-center justify-center w-full h-full bg-gray-400/80 text-black rounded-full"
          delayMs={600}
        >
          {images[0].label}
        </Avatar.Fallback>
      </Avatar.Root>
      <div id="avatarButtonContainer" className="flow-root h-24 pl-4 pt-4">
        <button
          onClick={onClickLogo}
          className="font-normal text-sm rounded-md border border-gray/10 px-2 hover:scale-110 hover:bg-slate-100"
        >
          <HiPlus size="1.5em" className="float-left pr-1" /> Logo / Photo
        </button>
        <button className="float-right font-normal text-sm px-2 pt-1 text-red-700 hover:font-semibold">
          Remove
        </button>
        <div className="text-xs pt-1">PNG or JPG (max. 800x400px)</div>
      </div>
    </>
  );
}
export default SignatureLogo;
