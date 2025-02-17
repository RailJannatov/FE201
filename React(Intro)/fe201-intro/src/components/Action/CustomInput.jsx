export const CustomInput = ({ inputType, placeholder, handleInput }) => {
  return (
    <input
      type={inputType}
      placeholder={placeholder}
      style={{ display: "block", marginLeft: "40px" }}
      onChange={handleInput}
    />
  );
};
