export interface InputProps {
  placeholder?: string;
  onChange: (value?: string) => void;
  value?: string;
}

export interface SearchProps extends InputProps {
  onSearch: (value?: string) => void;
}