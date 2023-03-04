import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { HiOutlineViewList } from 'react-icons/hi';
import * as Label from '@radix-ui/react-label';

interface SignatureDetailProps {
  label: string;
  id: string;
  index: number;
  value: string;
  onChange: (detailID: string, value: string) => void;
}

function SignatureDetailListItem(props: SignatureDetailProps): JSX.Element {
  return (
    <Draggable draggableId={props.id} index={props.index} key={props.index}>
      {(draggableProvided, draggableSnapshot) => (
        <>
          <div
            className="flex flex-col my-2"
            ref={draggableProvided.innerRef}
            {...draggableProvided.draggableProps}
          >
            <Label.Root className="pl-10 text-sm" htmlFor={props.id}>
              {props.label}
            </Label.Root>
            <div className="flex flex-row">
              <div className="p-1" {...draggableProvided.dragHandleProps}>
                <HiOutlineViewList size="1.5em" />
              </div>
              <div className="w-4/5">
                <input
                  type="text"
                  id={props.id}
                  spellCheck="false"
                  className=" border-dark-shade/60 border-b rounded-sm h-8 m-0.5 w-full"
                  defaultValue={props.value}
                  onChange={(e) => {
                    props.onChange(props.id, e.currentTarget.value);
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </Draggable>
  );
}

export default SignatureDetailListItem;
