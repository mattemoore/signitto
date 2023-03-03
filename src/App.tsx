import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import SignatureSettingsMenuBar from './components/SignatureSettingsMenuBar';
import SignaturePreview from './components/SignaturePreview';
import SignatureSettings from './components/SignatureSettings';

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <>
        <div
          id="appWrapper"
          className="flex flex-col font-quicksand text-gray-800"
        >
          <div
            id="signatureSettingsMenu"
            className="flex flex-row justify-center"
          >
            <SignatureSettingsMenuBar />
          </div>
          <div
            id="signatureDetailsAndPreviewWrapper"
            className="flex flex-col md:flex-row"
          >
            <div
              id="signatureCreationOptions"
              className="flex flex-col md:h-screen md:w-1/4 bg-gradient-to-br from-blue-500/70 to-blue-400/70"
            >
              <SignatureSettings />
            </div>
            <div
              id="signaturePreview"
              className="flex flex-col items-center h-screen md:w-3/4 bg-gradient-to-br from-neutral-200 to-gray-100 py-2 px-6"
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
