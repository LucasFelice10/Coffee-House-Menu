# Coffee House Specialty · Carta digital

Mini proyecto desarrollado por **GastroQode**: una carta digital de ejemplo para
la cafetería *Coffee House Specialty*, con café, pastelería y bebidas frías,
composiciones de café e información detallada de cada producto.

> Este repositorio es un proyecto de demostración de GastroQode. Los productos,
> precios y el enlace de reseñas son de ejemplo.

**Sitio publicado:** https://lucasfelice10.github.io/Coffee-House-Menu/

## Estructura

El código vive en [`Menu Cafeteria/visual-sync-star`](Menu%20Cafeteria/visual-sync-star)
(TanStack Start, React, TypeScript y Tailwind CSS). Para correrlo en local, ver el
[README del proyecto](Menu%20Cafeteria/visual-sync-star/README.md).

La carta se edita en un solo archivo: `src/data/menu.ts`.

## Despliegue

Cada push a `main` ejecuta `.github/workflows/deploy.yml`, que compila el sitio
como estático y lo publica en GitHub Pages (en Settings → Pages, la fuente debe
ser **GitHub Actions**).

---

Desarrollado por GastroQode.
