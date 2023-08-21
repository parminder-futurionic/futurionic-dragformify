export interface InputItem {
  id: string;
  label: string;
  icon: string;
  name: string;
  component: string;
  property: InputProperty[];
}

export interface InputProperty {
  id: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  minLength?: number;
  maxLength?: number;
  required: boolean;
  options?: any;
  value: string | number | boolean | [];
  isReadOnly: boolean;
  isDisabled: boolean;
}

export interface HeadingItem {
  id: string;
  label: string;
  icon: string;
  name: string;
  component: string;
  property: HeadingProperty[];
}

export interface HeadingProperty {
  id: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  minLength?: number;
  maxLength?: number;
  required: boolean;
  value: string | number | boolean;
  isReadOnly: boolean;
  isDisabled: boolean;
}
