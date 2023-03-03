import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

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
        <div
          className="flex flex-row bg-slate-300 rounded-sm m-2"
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
        >
          <div
            className="w-4 h-8 p-2 mr-2"
            {...draggableProvided.dragHandleProps}
          >
            X
          </div>
          <div>
            <input
              type="text"
              id={props.id}
              placeholder={props.label}
              spellCheck="false"
              className="bg-light-shade/90 border-dark-shade/60 border-b rounded-sm h-8 m-0.5"
              defaultValue={props.value}
              onChange={(e) => {
                props.onChange(props.id, e.currentTarget.value);
              }}
            />
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default SignatureDetailListItem;
