import React from 'react';
import SignatureDetailsListItem from './SignatureDetailListItem';
import { type SignatureDetailModel } from '../Models/SignatureDetailModel';

import { DragDropContext, type DropResult } from 'react-beautiful-dnd';
import { StrictModeDroppable } from './StrictModeDroppable';
import { useRecoilState } from 'recoil';
import { signatureDetailsState } from '../State/SignatureDetailsState';

function SignatureDetailsList(): JSX.Element {
  const [signatureDetails, setSignatureDetails] = useRecoilState(
    signatureDetailsState
  );

  // TODO: Clean this up
  function setDetailValue(detailID: string, value: string): void {
    const currentList: SignatureDetailModel[] = signatureDetails.slice();
    const detailToChange: number | undefined = currentList.findIndex(
      (detail) => {
        return detail.id === detailID;
      }
    );
    if (currentList[detailToChange] !== undefined) {
      const clone: SignatureDetailModel = { ...currentList[detailToChange] };
      clone.value = value;
      currentList[detailToChange] = clone;
      setSignatureDetails(currentList);
    } else {
      console.error(`detailID: ${detailID} not found in sig details list.`);
    }
    console.log(signatureDetails);
  }

  function reorder(
    list: SignatureDetailModel[],
    startIndex: number,
    endIndex: number
  ): SignatureDetailModel[] {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }

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

    // TODO: Redux thunk thing here
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
                    (detail: SignatureDetailModel, index: number) => {
                      return (
                        <SignatureDetailsListItem
                          id={detail.id}
                          index={index}
                          label={detail.label}
                          value={detail.value}
                          key={detail.id}
                          onChange={setDetailValue}
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

export default SignatureDetailsList;
