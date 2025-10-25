interface IFormField {
  title: string;
  fieldIndicator?: string;
  inputMode?: "text" | "email" | "tel";
  value: string;
  placeholder?: string;
  fieldIcon?: any;
  HeaderIcon?: any;
  maxLength?: number;
  handleChangeText: (text: string) => void;
  otherStyles: string;
  textStyles?: string;
  errorMsg?: string;
  editable?: boolean;
  isPhoneNumber?: boolean;
}

