import React from 'react';
import '../App.css';
import { useRecoilState } from 'recoil';
import { signatureDetailsState } from '../state/SignatureDetailsState';
import { signatureImageState } from '../state/SignatureImageState';
import {
  type SignatureDetailModel,
  SignatureDetailType
} from '../models/SignatureDetailModel';
import * as Avatar from '@radix-ui/react-avatar';
import * as Separator from '@radix-ui/react-separator';
import { HiOutlinePhone, HiOutlineMail, HiLink } from 'react-icons/hi';
import classNames from 'classnames';

function Signature(): JSX.Element {
  const [signatureDetails] = useRecoilState(signatureDetailsState);
  const [signatureImages] = useRecoilState(signatureImageState);
  const company: string | undefined = getDetail(
    signatureDetails,
    'company'
  )?.value;

  /* TODO: Convert layout to use TABLE for better cut and pasting */
  return (
    <div className="flex flex-row my-10 space-x-4">
      <div className="flex flex-col items-center space-y-3">
        {/* TODO: Make component wrapper for Avatar as it is used here and also in SignatureLogoDetail */}
        <Avatar.Root className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gray-400/80">
          <Avatar.Image
            className="w-full h-full object-cover rounded-full"
            src={signatureImages[0].url}
            alt="{"
          />
          <Avatar.Fallback
            className="flex items-center justify-center w-full h-full bg-gray-400/80 text-black rounded-full"
            delayMs={600}
          >
            {signatureImages[0].label}
          </Avatar.Fallback>
        </Avatar.Root>
        {company != null && (
          <div className="text-yellow-500 w-25 font-bold max-w-20 text-center">
            {company}
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-1">
        {signatureDetails
          .filter((detail) => detail.value !== '')
          .map((detail, index) => {
            return (
              <div key={detail.id}>
                {index === 3 && (
                  <Separator.Root className="bg-yellow-500/80 h-px my-2 text-center" />
                )}

                <div key={detail.id}>
                  <div className="flex flex-row">
                    {detail.type === SignatureDetailType.Phone && (
                      <HiOutlinePhone className="mr-2" />
                    )}
                    {detail.type === SignatureDetailType.Email && (
                      <HiOutlineMail className="mr-2" />
                    )}
                    {detail.type === SignatureDetailType.URL && (
                      <HiLink className="mr-2" />
                    )}
                    <div
                      className={classNames({
                        'font-bold': index === 0,
                        'text-normal': index < 3,
                        'text-xs': index >= 3
                      })}
                    >
                      {detail.value}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

function getDetail(
  details: SignatureDetailModel[],
  detailId: string
): SignatureDetailModel | undefined {
  return details.find((detail) => detail.id === detailId);
}

export default Signature;
