import SearchSVG from "media/searchSVG";
import { useEffect } from "react";
import { InputContainer, InputField, Button } from "./Input.styled";

export const Input = ({ value, onChange, isRequired }) => {
  return (
    <InputContainer>
      <InputField
        name="searchfield"
        type="text"
        placeholder="Search me..."
        value={value}
        onChange={onChange}
        required={isRequired}
      />
      <Button>
        <SearchSVG></SearchSVG>
      </Button>
    </InputContainer>
  );
};
