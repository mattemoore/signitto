import React from 'react';
import './App.css';
import SignaturePreview from './Components/SignaturePreview';
import SignatureSettings from './Components/SignatureSettings';

function App(): JSX.Element {
  return (
    <>
      <div
        id="appWrapper"
        className="flex flex-col md:flex-row font-quicksand text-gray-600"
      >
        {/* Create EmailSignatureApp and lift state EmailSigSettings state up to it} */}
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
    </>
  );
}
export default App;
