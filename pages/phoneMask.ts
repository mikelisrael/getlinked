//============== phone input masking ==============
const phoneMask = (e: React.ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value;
  value = value.replace(/[^\d]/g, ""); // Remove non-digit characters

  // Restrict the input to a maximum of 11 characters
  value = value.slice(0, 11);

  // Determine the appropriate pattern based on the length of the value
  let pattern;
  if (value.length === 11) {
    pattern = /^(\d{3})(\d{4})(\d{4})$/;
  } else if (value.length === 10) {
    pattern = /^(\d{3})(\d{3})(\d{4})$/;
  }

  // Apply the pattern to the value if a pattern is defined
  if (pattern) {
    value = value.replace(pattern, "$1 $2 $3");
  }

  // Add dashes after every 3 characters
  if (value.length > 3 && value.length <= 7) {
    value = value.replace(/^(\d{3})(\d+)/, "$1 $2");
  }
  if (value.length > 7) {
    value = value.replace(/^(\d{3})(\d{3})(\d+)/, "$1 $2 $3");
  }

  e.target.value = value;
  return e;
};

export default phoneMask;
