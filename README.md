# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:


# Hello developer 

The project was conceived as a platform. But with separate pages for services.
The architecture uses an approach with data inside the application itself (Mock folder), as there was a need to present using Vercel. The Redux storage is made on a preliminary basis. Not all data passes through it (this decision was made as a temporary one in favor of saving money and waiting for the backend developer).
The rest is a classic react application.

# Translations
The application supports multilingualism. Translations are connected everywhere except FooterDesktop.tsx
To connect, you need to enable debugging mode and add all phrases to the list. Then, using AI, generate any language and connect this file.
# Search locations
Using react select, a request to the API for obtaining settlements is implemented. You will have to generate your own key.
# Search Forms
All forms are based on Formik and are ready to be sent to API. There is a small validation in the utilities.
# Buttons
The buttons are reusable and customizable. I assumed that it was necessary to put the button component into a container of a suitable size. Everything else is typified and clear. It is quite easy to scale.
# And the most important thing
This whole functionality - nobody needs it! You just need to lay out the page and that's it. The faster, the better. It's important to have a lot of beautiful pages. You don't need to think of it as a platform (as I did).
# If you read to the end
If you read to the end, then I hope to see this project online someday.  
For questions about cooperation and development, write to me by [email](mailto:sendega89@gmail.com)
or [telegram]((https://t.me/@sendMikhailo))
