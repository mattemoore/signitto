import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import SignatureSettingsMenuBar from './components/SignatureSettingsMenuBar';
import SignaturePreview from './components/SignaturePreview';
import SignatureDetailsList from './components/SignatureDetailsList';
import SignatureSettingsFooter from './components/SignatureSettingsFooter';

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
            className="flex flex-row justify-center h-14 p-2 bg-white/90"
          >
            <SignatureSettingsMenuBar />
          </div>
          <div
            id="signatureDetailsAndPreviewWrapper"
            className="flex flex-col lg:flex-row border-t border-b border-gray/10"
          >
            <div
              id="signatureCreationOptions"
              className="flex flex-col lg:w-1/4 p-2 rounded-sm m-8 border border-gray/10 bg-white/90"
            >
              <SignatureDetailsList />
            </div>
            <div
              id="signaturePreview"
              className="flex flex-col items-center lg:w-3/4 p-2 rounded-sm m-8 border border-gray/10 bg-white/90"
            >
              <SignaturePreview />
            </div>
          </div>
          <div id="footer">
            <div className="flex flex-col h-14 p-2 bg-white/90">
              <SignatureSettingsFooter />
            </div>
          </div>
        </div>
      </>
    </RecoilRoot>
  );
}
export default App;
