export type ValidationMessage = {
  message: string;
  name: string; // name keys in input
};

export function isValidationMessage(object: any): object is ValidationMessage {
  return "message" in object;
}
