import React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { RxFileText } from 'react-icons/rx/';

function SignatureSettingsMenuBar(): JSX.Element {
  return (
    <ToggleGroup.Root
      className="ToggleGroup"
      type="single"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="left"
        aria-label="Left aligned"
      >
        <RxFileText className="text-red-800" title="File Details Icon" />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="center"
        aria-label="Center aligned"
      >
        <RxFileText size="6em" />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="right"
        aria-label="Right aligned"
      >
        <RxFileText />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}

export default SignatureSettingsMenuBar;
