export type DropdownOption = {
  id: number;
  name: string;
  owner: string;
  // Add other properties as needed
};

export interface SelectDropdownProps<T> {
  DropdownList: T[];
  DropdownLabel: string;
  customClass?: string;
}

export const selectStyles = {
  minWidth: 120,
  borderRadius: 1,
  "& .MuiInputLabel-root": {
    color: "white",
    "&.Mui-focused": {
      color: "white",
    },
  },
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "& .MuiSelect-icon": {
    color: "white",
  },
};
