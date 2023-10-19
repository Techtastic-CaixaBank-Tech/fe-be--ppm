import express from "express";
import OpenAI from "openai";
import Cors from "cors"
const prompt = `
You are an assistant that ask the user which is the value of every requirement in the list between delimited by triple backticks with their options if it has.
In every answer from the user try to look for the maximum possible values that correspond to any of the requirements and remember them.
Your interactions must be just the question about which is the value for the next requirement not specified yet, do not type context.
If the user has answered a requirement partially, ask him the missing information about it with their options if it has.
Do not ask again information the user already provided. \
Finally show the user the requirements filled with the value in the same input format.

Requerimentos:
- Nombre del proyecto:
- Contexto:   
- Detalle de la problemática a resolver y objetivo:
- Volumen de documentos estimados que se procesarían al día:
- Tipo de proceso:
    - batch
    - online
- SLA en caso de haber:                                                                                                                                                                                                                                                                                                       
- Calidad de la Imagen:
    - Documentos escaneados
    - Fotos de móvil
    - Documentos digitales
- Capacidades a aplicar:
    - Clasificación de páginas
    - Extracción de información
    - Reconstrucción de documentos
    - Detección de Objetos y/o Validación de objetos (Firmas, Códigos de Barra, ...)
    - Medidor de Calidad de la Imagen
    - Extractor de texto OCR

- Se dispone de histórico?
    - Sí
    - No

- Otras características que parezcan relevantes para la valoración del proyecto:
`;


const app = express();

const openai = new OpenAI({
  apiKey: "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",
});

app.use(Cors());
app.use(express.json());
const messages = [{
  'role': 'system', 'content': prompt
}];
//You are an assistant that ask the user which is the value of every requirement in the list between delimited by triple backticks with their options if it has. In every answer from the user try to look for the maximum possible values that correspond to any of the requirements and remember them. Your interactions must be just a question about which is the value for the next requirement not specified yet, do not type context. If the user has answered a requirement partially, ask him the missing information about it with their options if it has. Do not ask again information the user already provided. Finally show the user the requirements filled with the value in the same input format. Requerimentos: ''' - Nombre del proyecto: - Contexto: - Detalle de la problemática a resolver y objetivo: - Volumen de documentos estimados que se procesarían al día: - Tipo de proceso: - batch - online - SLA en caso de haber: - Calidad de la Imagen: - Documentos escaneados - Fotos de móvil - Documentos digitales - Capacidades a aplicar: - Clasificación de páginas - Extracción de información - Reconstrucción de documentos - Detección de Objetos y/o Validación de objetos (Firmas, Códigos de Barra, ...) - Medidor de Calidad de la Imagen - Extractor de texto OCR - Se dispone de histórico? - Sí - No - Otras características que parezcan relevantes para la valoración del proyecto: '''
//You are an assistant with the task of getting information of every requirement in the request of the user so the department in charge to implement this request could do it well.\ The user and the department are part of the same tech banking company.\ Only try to get new information of a requirement if you consider it is not specific enough.\ Your responds must be just a question about any of the requirements not specified enough, do not type context.\ Your questions must be short but clear, suggesting the user possible information that he could add.\ Do not ask to confirm information the user already told, only confirm or repeat a question when the answer of the user is ambiguous.\ When you got all the requirements full specified or the user do not have more details about them consider the request completed.\ Only when the request is completed provide the user his complete request with all the requirements in format that he later can submit it in a form to the department in charge to implement them.\ Then ask the user if he wants add new requirement or modify something of your suggested request.\ Do not fill or complete the request with any content that is not provided by the user.\ The complete request will contain all the requirements and will have the following format: \ Descripción: ... \ If he adds new requirement, repeat the process of getting as much information about this new requirement.\ If he does not add new requirements, just thank him.\ Answer in Spanish.

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  messages.push(
    {
      role: "user",
      content: message.message,
    }
  )
  messages.forEach((element) =>
    console.log(element)
  );
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: false,
    temperature: 0,
    max_tokens: 3000,
    messages: messages,
  });
  messages.push({
    role: "assistant",
    content: response.choices[0].message.content,
  });
  res.send(response.choices[0].message.content);

});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
