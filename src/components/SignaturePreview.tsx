import React from 'react';
import '../App.css';
import { useRecoilState } from 'recoil';
import { signatureDetailsState } from '../state/SignatureDetailsState';
import { signatureImageState } from '../state/SignatureImageState';

function SignaturePreview(): JSX.Element {
  const [signatureDetails] = useRecoilState(signatureDetailsState);
  const [signatureImages] = useRecoilState(signatureImageState);
  return (
    <>
      <div className="font-quicksand text-center w-full font-medium">
        Email Preview
      </div>
      <div className="h-3/4 w-3/4 rounded-sm border border-dark-shade/60 p-2">
        <div>{JSON.stringify(signatureDetails)}</div>
        <table className="font-sans mt-10">
          <thead></thead>
          <tbody>
            <tr>
              <td rowSpan={10} colSpan={2}>
                <div className="w-20 h-20">
                  <img
                    src={signatureImages[0].url}
                    alt="Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </td>
            </tr>
            {signatureDetails
              .filter((detail) => detail.value !== '')
              .map((detail) => {
                return (
                  <tr key={detail.id}>
                    <td className="px-4">{detail.value}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default SignaturePreview;
