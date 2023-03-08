import React from 'react';
import { useResetRecoilState } from 'recoil';
import { signatureDetailsState } from '../state/SignatureDetailsState';
import { HiOutlineQuestionMarkCircle, HiArrowRight } from 'react-icons/hi';
import { FaUndo } from 'react-icons/fa';

function SignatureSettingsFooter(): JSX.Element {
  const resetDetails = useResetRecoilState(signatureDetailsState);
  return (
    <>
      <div className="flow-root px-6 py-2">
        <button className="h-10 float-left font-normal text-sm rounded-md border border-gray/10 px-4 hover:scale-110 hover:bg-slate-100">
          <HiOutlineQuestionMarkCircle
            size="1.5em"
            className="float-left pr-1"
          />
          FAQs
        </button>
        <div>
          <button className="h-10 float-right font-normal text-sm rounded-md border border-gray/10 px-4 mx-4 hover:scale-110 hover:bg-slate-100">
            <HiArrowRight size="1.5em" className="float-right pl-2" />
            Continue to Social
          </button>
          <button
            onClick={resetDetails}
            className="h-10 float-right font-normal text-sm rounded-md border border-gray/10 px-4 mx-4 text-red-800 bg-red-200/90 hover:scale-110 hover:bg-slate-100"
          >
            <FaUndo size="1.5em" className="float-left pr-2" />
            Reset Signature
          </button>
        </div>
      </div>
    </>
  );
}

export default SignatureSettingsFooter;
