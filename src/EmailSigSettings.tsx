import React, { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import './App.css';
import SignatureDetails from './EmailSigDetails';

function EmailSigSettings(): JSX.Element {
  return (
    <>
      <Tab.Group defaultIndex={0}>
        <Tab.List className="flex flex-row flex-wrap p-2 bg-gradient-to-br from-blue-700/40 to-blue-600/40">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`${
                  selected
                    ? 'bg-dark-shade/70 text-white/90 rounded-sm p-1 m-1 w-20 text-center hover:bg-dark-shade/70 focus:bg-dark-shade/70 cursor-pointer'
                    : 'bg-dark-shade/90 text-white/90 rounded-sm p-1 m-1 w-20 text-center hover:bg-dark-shade/70 focus:bg-dark-shade/70 cursor-pointer'
                }`}
              >
                Details
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={`${
                  selected
                    ? 'bg-dark-shade/70 text-white/90 rounded-sm p-1 m-1 w-20 text-center hover:bg-dark-shade/70 focus:bg-dark-shade/70 cursor-pointer'
                    : 'bg-dark-shade/90 text-white/90 rounded-sm p-1 m-1 w-20 text-center hover:bg-dark-shade/70 focus:bg-dark-shade/70 cursor-pointer'
                }`}
              >
                Tab 2
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={`${
                  selected
                    ? 'bg-dark-shade/70 text-white/90 rounded-sm p-1 m-1 w-20 text-center hover:bg-dark-shade/70 focus:bg-dark-shade/70 cursor-pointer'
                    : 'bg-dark-shade/90 text-white/90 rounded-sm p-1 m-1 w-20 text-center hover:bg-dark-shade/70 focus:bg-dark-shade/70 cursor-pointer'
                }`}
              >
                Tab 3
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="p-3">
          <Tab.Panel>
            <SignatureDetails />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
export default EmailSigSettings;
