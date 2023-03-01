import React from 'react';
import '../App.css';
import { useRecoilState } from 'recoil';
import { signatureDetailsState } from '../State/SignatureDetailsState';

function SignaturePreview(): JSX.Element {
  const [signatureDetails] = useRecoilState(signatureDetailsState);
  return (
    <>
      <div className="font-quicksand text-center w-full font-medium">
        Email Preview
      </div>
      <div className="h-3/4 w-3/4 rounded-md border border-dark-shade/60 p-2">
        <div className="">
          <div>{JSON.stringify(signatureDetails)}</div>
        </div>
      </div>
    </>
  );
}
export default SignaturePreview;
