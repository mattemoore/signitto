import React from 'react';
import SignatureDetailsListItem from './SignatureDetailListItem';
import { type SignatureDetailModel } from '../models/SignatureDetailModel';
import SignatureLogoDetail from './SignatureLogoDetail';
import { DragDropContext, type DropResult } from 'react-beautiful-dnd';
import { StrictModeDroppable } from './StrictModeDroppable';
import { useRecoilState } from 'recoil';
import { signatureDetailsState } from '../state/SignatureDetailsState';
import * as Separator from '@radix-ui/react-separator';
import { HiOutlineHand } from 'react-icons/hi';

function SignatureDetailsList(): JSX.Element {
  const [signatureDetails, setSignatureDetails] = useRecoilState(
    signatureDetailsState
  );

  function setDetailValue(detailID: string, value: string): void {
    const currentList: SignatureDetailModel[] = signatureDetails.slice();
    const detailToChange: number | undefined = currentList.findIndex(
      (detail) => {
        return detail.id === detailID;
      }
    );
    if (currentList[detailToChange] !== undefined) {
      const detail: SignatureDetailModel = { ...currentList[detailToChange] };
      detail.value = value;
      currentList[detailToChange] = detail;
      setSignatureDetails(currentList);
    } else {
      console.error(`detailID: ${detailID} not found in sig details list.`);
    }
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
    setSignatureDetails(reorderedDetails);
  }

  return (
    <>
      <div id="signatureDetailsList" className="flex flex-col px-4">
        <div className="flow-root text-gray-700 font-medium py-2">
          <div className="float-left text-lg pt-0.5">Signature Details</div>
          <div className="float-right">
            <button className="h-8 font-normal text-sm rounded-md border border-gray/10 px-2 hover:scale-110 hover:bg-slate-100">
              <HiOutlineHand size="1.5em" className="float-left pr-1" /> I need
              help!
            </button>
          </div>
        </div>
        <Separator.Root className="bg-slate-200/80 h-px my-2 text-center" />
        <div id="detailsListContainer" className="py-2">
          <div id="avatarContainer" className="flex flex-row">
            <SignatureLogoDetail />
          </div>
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
      </div>
    </>
  );
}

export default SignatureDetailsList;
