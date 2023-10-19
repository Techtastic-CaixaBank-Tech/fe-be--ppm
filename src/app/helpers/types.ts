export interface Message {
  id: number;
  sender: Sender;
  message: string;
}

export type Sender = 'user' | 'bot';

//TODO este es el tipo que define los posibles campos del formulatio
export type FormField = 'projectName' | "description" | "solicitantPriority" | "peticionaryGroup" | "gestoryPlatform" | "gestoryGroup" | "itService";


//TODO aquí inicializas el formulario seteando los valores de los campos como undefined, yo lo he puesto
//como string, pero si quieres se puede tipar con los valores del formulario para que quede más clean,
//pero es más trabajo
export const Form: Record<FormField, string | undefined> = {
  projectName: undefined,
  description: undefined,
  solicitantPriority: undefined,
  peticionaryGroup: undefined,
  gestoryPlatform: undefined,
  gestoryGroup: undefined,
  itService: undefined
};
