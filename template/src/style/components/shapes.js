// Direction Variables
const directions = {
  right: "-90deg",
  left: "90deg",
  up: "180deg",
  down: "0deg"
};

export const triangle = (length, color, direction, selector = "before") => `
  &:${selector} {
    content: '';
    width: 0; 
    height: 0; 
    border-left: ${length}px solid transparent;
    border-right: ${length}px solid transparent;
    border-top: ${length}px solid ${color};
    transform: rotate(${directions[direction] || direction});
  }
`;

export const circle = (radius, color, selector = "before") => `
  &:${selector} {
    content: '';
    width: ${radius}px; 
    height: ${radius}px;
    background: ${color};
    border-radius: 50%
  }
`;

export const square = (length, width, color, direction, selector = "before") => `
  &:${selector} {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: ${width}px; 
    height: ${length}px; 
    background: ${color};
    transform: rotate(${directions[direction] || direction});
  }
`;

export const cross = (size = 15) => `
  ${square(size, 2, "#000", "45deg")}
  ${square(size, 2, "#000", "-45deg", "after")}
`;
