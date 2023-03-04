import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import SignatureSettingsMenuBar from './components/SignatureSettingsMenuBar';
import SignaturePreview from './components/SignaturePreview';
import SignatureDetailsList from './components/SignatureDetailsList';

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <>
        <div
          id="appWrapper"
          className="flex flex-col bg-neutral-100 font-normal text-gray-800/80"
        >
          <div
            id="signatureSettingsMenu"
            className="flex flex-row justify-center h-12 p-2 bg-white/90"
          >
            <SignatureSettingsMenuBar />
          </div>
          <div
            id="signatureDetailsAndPreviewWrapper"
            className="flex flex-col md:flex-row"
          >
            <div
              id="signatureCreationOptions"
              className="flex flex-col md:h-screen md:w-1/4 p-2 rounded-sm m-8 border border-gray/10 bg-white/90"
            >
              <SignatureDetailsList />
            </div>
            <div
              id="signaturePreview"
              className="flex flex-col items-center h-screen md:w-3/4 p-2 rounded-sm m-8 border border-gray/10 bg-white/90"
            >
              <SignaturePreview />
            </div>
          </div>
        </div>
      </>
    </RecoilRoot>
  );
}
export default App;
