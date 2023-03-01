export interface SignatureDetailModel {
  label: string;
  value: string;
  id: string;
  type: SignatureDetailType;
}

export enum SignatureDetailType {
  Text,
  Email,
  Phone,
  URL
}

export function CreateInitialSignatureDetails(): SignatureDetailModel[] {
  return [
    {
      label: 'First name',
      id: 'firstName',
      value: '',
      type: SignatureDetailType.Text
    },
    {
      label: 'Middle name',
      id: 'middleName',
      value: '',
      type: SignatureDetailType.Text
    },
    {
      label: 'Last name',
      id: 'lastName',
      value: '',
      type: SignatureDetailType.Text
    }
  ];
}
