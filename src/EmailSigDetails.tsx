import React, { useState } from 'react';
import {
  DragDropContext,
  Draggable,
  type DropResult
} from 'react-beautiful-dnd';
import { StrictModeDroppable } from './StrictModeDroppable';

enum SignatureDetailsType {
  Text,
  Email,
  Phone,
  URL
}

interface SignatureDetailProps {
  label: string;
  id: string;
  index: number;
  value: string;
}

interface SignatureDetail {
  label: string;
  value: string;
  id: string;
  type: SignatureDetailsType;
}

function SignatureDetailsList(): JSX.Element {
  const initSignatureDetails: SignatureDetail[] = [
    {
      label: 'First name',
      id: 'firstName',
      value: '',
      type: SignatureDetailsType.Text
    },
    {
      label: 'Middle name',
      id: 'middleName',
      value: '',
      type: SignatureDetailsType.Text
    },
    {
      label: 'Last name',
      id: 'lastName',
      value: '',
      type: SignatureDetailsType.Text
    }
  ];
  const [signatureDetails, setSignatureDetails] =
    useState(initSignatureDetails);

  console.log(signatureDetails);

  const reorder = (
    list: SignatureDetail[],
    startIndex: number,
    endIndex: number
  ): SignatureDetail[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  function onDragEnd(result: DropResult): void {
    const { source, destination } = result;

    if (destination == null) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }

    const reorderedDetails = reorder(
      signatureDetails,
      source.index,
      destination.index
    );

    setSignatureDetails(reorderedDetails);
  }
  return (
    <>
      <div id="signatureDetailsList" className="flex flex-col">
        <div className=" text-white/90 font-medium">Signature Details</div>
        <DragDropContext onDragEnd={onDragEnd}>
          <StrictModeDroppable droppableId="list">
            {(droppableProvided) => (
              <>
                <div
                  ref={droppableProvided.innerRef}
                  {...droppableProvided.droppableProps}
                >
                  {signatureDetails.map(
                    (detail: SignatureDetail, index: number) => {
                      return (
                        <SignatureDetailItem
                          id={detail.id}
                          index={index}
                          label={detail.label}
                          value={detail.value}
                          key={detail.id}
                        />
                      );
                    }
                  )}
                </div>
                {droppableProvided.placeholder}
              </>
            )}
          </StrictModeDroppable>
        </DragDropContext>
      </div>
    </>
  );
}

function SignatureDetailItem(props: SignatureDetailProps): JSX.Element {
  return (
    <Draggable draggableId={props.id} index={props.index} key={props.index}>
      {(draggableProvided, draggableSnapshot) => (
        <div
          className="flex flex-row bg-slate-300 rounded-sm"
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
              value={props.value}
            />
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default SignatureDetailsList;
