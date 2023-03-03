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
      label: 'Name',
      id: 'name',
      value: '',
      type: SignatureDetailType.Text
    },
    {
      label: 'Title',
      id: 'title',
      value: '',
      type: SignatureDetailType.Text
    },
    {
      label: 'Company',
      id: 'company',
      value: '',
      type: SignatureDetailType.Text
    },
    {
      label: 'Phone',
      id: 'phone',
      value: '',
      type: SignatureDetailType.Text
    },
    {
      label: 'Mobile',
      id: 'mobile',
      value: '',
      type: SignatureDetailType.Text
    },
    {
      label: 'Website',
      id: 'website',
      value: '',
      type: SignatureDetailType.URL
    },
    {
      label: 'Email',
      id: 'email',
      value: '',
      type: SignatureDetailType.Email
    },
    {
      label: 'Address',
      id: 'address',
      value: '',
      type: SignatureDetailType.Text
    }
  ];
}
