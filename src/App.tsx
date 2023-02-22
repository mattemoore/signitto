import React from 'react';
import './App.css';

function App(): JSX.Element {
  return (
    <>
      <div
        id="appWrapper"
        className="flex flex-col md:flex-row font-quicksand text-gray-600"
      >
        <div
          id="signatureCreator"
          className="flex flex-col md:h-screen md:w-1/4 bg-primary/90"
        >
          {/* Switch to UIHeadless tabs */}
          <div
            id="signatureCreatorMenu"
            className="flex flex-row flex-wrap bg-dark-accent/90 p-2"
          >
            <div className=" bg-dark-shade/90 text-white/90 rounded-sm p-1 m-1 w-20 text-center hover:bg-dark-shade/70 focus:bg-dark-shade/70 cursor-pointer">
              Details
            </div>
            <div className="bg-dark-shade/90 text-white/90 rounded-sm p-1 m-1 w-20 text-center hover:bg-dark-shade/70 focus:bg-dark-shade/70 cursor-pointer">
              Button2
            </div>
            <div className="bg-dark-shade/90 text-white/90 rounded-sm p-1 m-1 w-20 text-center hover:bg-dark-shade/70 focus:bg-dark-shade/70 cursor-pointer">
              Button3
            </div>
            <div className="bg-dark-shade/90 text-white/90 rounded-sm p-1 m-1 w-20 text-center hover:bg-dark-shade/70 focus:bg-dark-shade/70 cursor-pointer">
              Button4
            </div>
          </div>
          <div id="signatureCreatorSettings" className="px-3 py-4">
            <div id="signatureDetails" className="flex flex-col">
              <div className=" text-white/90 font-medium">
                Signature Details
              </div>
              <div>
                {/* Make draggable list: https://github.com/atlassian/react-beautiful-dnd */}
                <input
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  spellCheck="false"
                  className="bg-light-shade/90 rounded-sm h-8 m-0.5"
                />
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                  spellCheck="false"
                  className="bg-light-shade/90 rounded-sm h-8 m-0.5"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="signaturePreview"
          className="flex flex-col items-center md:h-screen md:w-3/4 bg-light-shade py-2 px-6"
        >
          <div className="font-quicksand text-center w-full font-medium">
            Email Preview
          </div>
          <div className="h-3/4 w-3/4 rounded-md border border-dark-shade p-2">
            <div className="">
              <div>Insert preview component here</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
