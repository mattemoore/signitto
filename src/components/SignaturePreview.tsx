import React from 'react';
import '../App.css';
import Signature from './Signature';
import { HiOutlineEye } from 'react-icons/hi';

function SignaturePreview(): JSX.Element {
  return (
    <>
      <div className="flex flex-col h-3/4 w-3/4">
        <div className="flex flex-row justify-center space-x-4 p-4">
          <div className="rounded-full border px-4 py-2 shadow-lg">
            <HiOutlineEye size="1.5em" className=" mr-2 float-left" />
            Preview
          </div>
        </div>
        <div
          id="emailWindow"
          className="border-gray/10 rounded-md border shadow-lg m-4"
        >
          <div className="flex flex-row space-x-1.5 items-center bg-neutral-700 w-full h-8 rounded-t-md p-3">
            <div className="w-3 h-3 bg-gray-200 rounded-full" />
            <div className="w-3 h-3 bg-gray-200 rounded-full" />
            <div className="w-3 h-3 bg-gray-200 rounded-full" />
          </div>
          <div className="mx-6">
            <div className="flex flex-row items-center space-x-3 py-3 border-b border-gray/10">
              <div>To:</div>
              <div className="rounded-full px-3 py-1 border border-gray/10 bg-slate-100">
                Elizabeth Gillis
              </div>
            </div>
            <div className="flex flex-row items-center space-x-3 py-3 border-b border-gray/10">
              <div>Let&apos;s do lunch today!</div>
            </div>
            <h3 className="h-2 mt-5 w-1/4 bg-gray-200 rounded-md dark:bg-gray-700" />
            <ul className="mt-5 space-y-3">
              <li className="w-full h-2 bg-gray-200 rounded-md dark:bg-gray-700" />
              <li className="w-full h-2 bg-gray-200 rounded-md dark:bg-gray-700" />
            </ul>
            <Signature></Signature>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <button className="font-semibold px-4 py-2 rounded-md border border-gray/10 text-white bg-blue-700/90 hover:scale-110 hover:bg-slate-400 ">
            Create Signature
          </button>
        </div>
      </div>
    </>
  );
}
export default SignaturePreview;
