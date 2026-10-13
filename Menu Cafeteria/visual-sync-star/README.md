# Coffee House Specialty · Carta digital

Carta digital de Coffee House Specialty: café, pastelería y bebidas frías, con
composiciones de café e información detallada de cada producto.

Desarrollado por GastroQode.

## Desarrollo local

Requiere Node.js y npm (o bun).

```sh
npm install
npm run dev
```

## Scripts

| Script           | Qué hace                                  |
| ---------------- | ----------------------------------------- |
| `npm run dev`    | Servidor de desarrollo con recarga en vivo |
| `npm run build`  | Build de producción                        |
| `npm run preview`| Sirve el build de producción localmente    |
| `npm run lint`   | Revisa el código con ESLint                |
| `npm run format` | Formatea el código con Prettier            |
| `npm test`       | Corre los tests con Vitest                 |

## Stack

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Dónde se edita la carta

Todo el contenido de la carta (secciones, productos, precios, descripciones y el
enlace de reseñas de Google) vive en un solo archivo: `src/data/menu.ts`.
