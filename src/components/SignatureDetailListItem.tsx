import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import {
  HiOutlineViewList,
  HiOutlineUserCircle,
  HiOutlineViewGrid,
  HiOutlineDeviceMobile,
  HiOutlineOfficeBuilding,
  HiOutlineBriefcase,
  HiOutlineGlobeAlt,
  HiOutlineMail
} from 'react-icons/hi';
import { type IconType } from 'react-icons';
import * as Label from '@radix-ui/react-label';

interface SignatureDetailProps {
  label: string;
  id: string;
  index: number;
  value: string;
  onChange: (detailID: string, value: string) => void;
}

function SignatureDetailListItem(props: SignatureDetailProps): JSX.Element {
  const Icon = getIcon(props.id);
  return (
    <Draggable draggableId={props.id} index={props.index} key={props.index}>
      {(draggableProvided, draggableSnapshot) => (
        <>
          <div
            className="flex flex-col pb-4"
            ref={draggableProvided.innerRef}
            {...draggableProvided.draggableProps}
          >
            <Label.Root className="pl-8 text-sm" htmlFor={props.id}>
              {props.label}
            </Label.Root>
            <div className="flex flex-row">
              <div
                className="pt-1.5 mr-1"
                {...draggableProvided.dragHandleProps}
              >
                <HiOutlineViewList size="1.5em" className="opacity-80" />
              </div>
              <div className="relative border border-gray-300/70 rounded-sm">
                <input
                  type="text"
                  id={props.id}
                  spellCheck="false"
                  className="h-8 pl-8 w-full border-0"
                  value={props.value}
                  onChange={(e) => {
                    props.onChange(props.id, e.currentTarget.value);
                  }}
                />
                <Icon
                  size="1.5em"
                  className="absolute left-1 top-1.5 pb-1 opacity-90"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </Draggable>
  );
}

function getIcon(inputId: string): IconType {
  switch (inputId) {
    case 'name': {
      return HiOutlineUserCircle;
    }
    case 'title': {
      return HiOutlineBriefcase;
    }
    case 'company': {
      return HiOutlineOfficeBuilding;
    }
    case 'phone': {
      return HiOutlineDeviceMobile;
    }
    case 'website': {
      return HiOutlineGlobeAlt;
    }
    case 'email': {
      return HiOutlineMail;
    }
    default: {
      return HiOutlineViewGrid;
    }
  }
}

export default SignatureDetailListItem;
