//index.d.ts

//BlogList.tsx

export interface BlogPostType {
  id: number;        // ID único del post (cambiado a number si estás usando números para IDs)
  title: string;     // Título del post
  description: string; // Descripción del post
  image: string;     // Ruta de la imagen del post
  url: string;       // URL o slug del post
  hashtags: string[]; // Hashtags asociados con el post
  content: string[];   // Contenido del post en formato HTML
  date: string;      // Fecha del post (o Date, según prefieras)
  alt: string,
}




export interface Advertisement {
  title: string;
  description: string;
  ImageUrl: string;
  link: string;
}




// types/advertisements.ts




//Contacto.tsx

// // types/emailjs.d.ts

// declare module 'emailjs-com' {
//   interface EmailJSResponse {
//     status: number;
//     text: string;
//   }

//   interface SendOptions {
//     // No se proporcionan detalles específicos en la documentación, así que lo dejamos vacío.
//     // Puedes agregar opciones específicas aquí si las conoces.
//   }

//   export function send(
//     serviceID: string,
//     templateID: string,
//     templateParams: TemplateParams,
//     options?: SendOptions
//   ): Promise<EmailJSResponse>;

//   export function sendForm(
//     serviceID: string,
//     templateID: string,
//     form: string | HTMLFormElement,
//     options?: SendOptions
//   ): Promise<EmailJSResponse>;

//   export function init(publicKey: string): void;
// }



