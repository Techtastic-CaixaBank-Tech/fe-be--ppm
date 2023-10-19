import { create } from 'zustand';
import { Form, FormField } from '../helpers/types';

interface FormState {
  form: Record<FormField, string | undefined>;
  setValue: (field: FormField, value: string) => void;
}

//TODO esto gestiona el estado global del formulario con su correspondiente metodo para setear un valor
const useFormStore = create<FormState>((set) => ({
    form: Form,
    setValue: (field, value) => {
      set((state) => ({
        ...state,
        form: {
          ...state.form,
          [field]: value,
        },
      }));
    },
  }));

export default useFormStore;
