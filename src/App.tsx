import React from 'react';
import './App.css';
import EmailSigPreview from './EmailSigPreview';
import EmailSigSettings from './EmailSigSettings';

function App(): JSX.Element {
  return (
    <>
      <div
        id="appWrapper"
        className="flex flex-col md:flex-row font-quicksand text-gray-600"
      >
        <div
          id="signatureCreationOptions"
          className="flex flex-col md:h-screen md:w-1/4 bg-gradient-to-br from-blue-500/70 to-blue-400/70"
        >
          <EmailSigSettings />
        </div>
        <div
          id="signaturePreview"
          className="flex flex-col items-center h-screen md:w-3/4 bg-gradient-to-br from-neutral-200 to-gray-100 py-2 px-6"
        >
          <EmailSigPreview />
        </div>
      </div>
    </>
  );
}
export default App;
