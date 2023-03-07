import React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import {
  HiOutlineShare,
  HiOutlineTemplate,
  HiOutlineNewspaper,
  HiOutlineViewList
} from 'react-icons/hi';
import { IoDiamondOutline } from 'react-icons/io5';

function SignatureSettingsMenuBar(): JSX.Element {
  return (
    <>
      <div className="px-4 flex flex-row w-full justify-between items-center">
        <div>
          <img src="logo-signitto.svg" alt="Signitto logo"></img>
        </div>
        <div>
          <ToggleGroup.Root
            className="flex flex-wrap justify-center h-10"
            type="single"
            defaultValue="details"
            aria-label="Signature Settings Menu"
          >
            <ToggleGroup.Item
              className="hover:border-b-4 hover:border-b-black data-[state=on]:border-b-black data-[state=on]:border-b-4 mx-5 px-5"
              value="details"
              aria-label="Details"
            >
              Details
              <HiOutlineViewList
                className="text-gray-700-800 float-left h-6 w-6 mr-3"
                title="Design Settings Icon"
              />
            </ToggleGroup.Item>
            <ToggleGroup.Item
              className="hover:border-b-4 hover:border-b-black data-[state=on]:border-b-black data-[state=on]:border-b-4 mx-5 px-5"
              value="social"
              aria-label="Social Settings"
            >
              Social
              <HiOutlineShare
                className="text-gray-700-800 float-left h-6 w-6 mr-3"
                title="Social Settings Icon"
              />
            </ToggleGroup.Item>
            <ToggleGroup.Item
              className="hover:border-b-4 hover:border-b-black data-[state=on]:border-b-black data-[state=on]:border-b-4 mx-5 px-5"
              value="template"
              aria-label="Template Settings"
            >
              Template
              <HiOutlineTemplate
                className="text-gray-700-800 float-left h-6 w-6 mr-3"
                title="Template Settings Icon"
              />
            </ToggleGroup.Item>
            <ToggleGroup.Item
              className="hover:border-b-4 hover:border-b-black data-[state=on]:border-b-black data-[state=on]:border-b-4 mx-5 px-5"
              value="design"
              aria-label="Design Settings"
            >
              Design
              <HiOutlineNewspaper
                className="text-gray-700-800 float-left h-6 w-6 mr-3"
                title="Design Settings Icon"
              />
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </div>
        <div>
          <button className="h-10 font-normal text-blue-700/90 text-sm rounded-md border border-blue-700/90 px-2 hover:scale-110 hover:bg-slate-100">
            <IoDiamondOutline size="1.5em" className="float-left pr-1" /> Unlock
            Pro
          </button>
        </div>
      </div>
    </>
  );
}

export default SignatureSettingsMenuBar;
