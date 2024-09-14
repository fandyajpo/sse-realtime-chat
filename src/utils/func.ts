export function getRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, "0")}`; // Ensures it’s always 6 characters long
}

const documentFn = () => {
  if (typeof document != "undefined") {
    return document;
  }
};

export const documentById = (id: string) => {
  return documentFn?.()?.getElementById?.(id);
};
