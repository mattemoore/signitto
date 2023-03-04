import React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import {
  HiOutlineShare,
  HiOutlineTemplate,
  HiOutlineNewspaper,
  HiOutlineViewList
} from 'react-icons/hi';

function SignatureSettingsMenuBar(): JSX.Element {
  return (
    <ToggleGroup.Root
      className="inline-flex flex-wrap justify-center"
      type="single"
      defaultValue="details"
      aria-label="Signature Settings Menu"
    >
      <ToggleGroup.Item
        className="hover:border-b-2 hover:border-b-black data-[state=on]:border-b-black data-[state=on]:border-b-2 mx-5 px-5"
        value="details"
        aria-label="Details"
      >
        Details
        <HiOutlineViewList
          className="text-gray-700-800 float-left h-6 w-6 mr-1"
          title="Design Settings Icon"
        />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="hover:border-b-2 hover:border-b-black data-[state=on]:border-b-black data-[state=on]:border-b-2 mx-5 px-5"
        value="social"
        aria-label="Social Settings"
      >
        Social
        <HiOutlineShare
          className="text-gray-700-800 float-left h-6 w-6 mr-1"
          title="Social Settings Icon"
        />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="hover:border-b-2 hover:border-b-black data-[state=on]:border-b-black data-[state=on]:border-b-2 mx-5 px-5"
        value="template"
        aria-label="Template Settings"
      >
        Template
        <HiOutlineTemplate
          className="text-gray-700-800 float-left h-6 w-6 mr-1"
          title="Template Settings Icon"
        />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="hover:border-b-2 hover:border-b-black data-[state=on]:border-b-black data-[state=on]:border-b-2 mx-5 px-5"
        value="design"
        aria-label="Design Settings"
      >
        Design
        <HiOutlineNewspaper
          className="text-gray-700-800 float-left h-6 w-6 mr-1"
          title="Design Settings Icon"
        />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}

export default SignatureSettingsMenuBar;
