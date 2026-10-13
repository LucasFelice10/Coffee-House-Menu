// Edita este archivo para actualizar la carta: categorías, productos, imágenes y precios.
// Cada producto tiene su propia foto (id de Unsplash o URL completa).

export type Product = {
  id: string;
  name: string;
  short: string;
  description: string;
  details: { label: string; value: string }[];
  price: number;
  image: string;
};
export type Category = { id: string; name: string; tagline: string; products: Product[] };

const img = (id: string, w = 900) =>
  id.startsWith("http") ? id : `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
export const hiRes = (url: string) => url.replace(/w=\d+/, "w=1600");

type Raw = [name: string, short: string, description: string, details: [string, string][], price: number, image: string];
const build = (prefix: string, items: Raw[]): Product[] =>
  items.map(([name, short, description, details, price, image], i) => ({
    id: `${prefix}-${i}`, name, short, description, price, image: img(image),
    details: details.map(([label, value]) => ({ label, value })),
  }));

const originalCategories: Category[] = [
  {
    id: "cafe", name: "Café de Especialidad", tagline: "Granos de origen único, tostados en casa",
    products: build("cafe", [
      ["Espresso Etiopía", "Floral, cítrico y luminoso.", "Extracción precisa de un lavado etíope de altura, con cuerpo sedoso y final largo.", [["Origen", "Yirgacheffe, Etiopía · 2.000 msnm"], ["Proceso", "Lavado"], ["Notas", "Jazmín, bergamota, durazno"]], 3200, "1514432324607-a09d9b4aefdd"],
      ["Cappuccino de Autor", "Microespuma sedosa y arte latte.", "Doble ristretto de nuestro blend de la casa con leche texturizada a 60 °C.", [["Blend", "Brasil Cerrado + Colombia Huila"], ["Notas", "Cacao, avellana, caramelo"]], 3800, "1572442388796-11668a67e53d"],
      ["Flat White Colombia", "Intenso, cremoso y equilibrado.", "Ristretto doble con una fina capa de microespuma para resaltar el origen.", [["Origen", "Huila, Colombia"], ["Proceso", "Honey"], ["Notas", "Panela, ciruela, chocolate"]], 3900, "1534778101976-62847782c213"],
      ["Latte de Vainilla", "Suave, dulce y aterciopelado.", "Espresso, leche vaporizada y almíbar casero de vainilla de Madagascar.", [["Vainilla", "Bourbon de Madagascar"], ["Notas", "Caramelo, crema"]], 4100, "1541167760496-1628856ab772"],
      ["Cortado Brasil", "Corto, dulce y redondo.", "Espresso cortado con un toque de leche caliente.", [["Origen", "Sul de Minas, Brasil"], ["Proceso", "Natural"], ["Notas", "Maní tostado, dulce de leche"]], 3000, "1485808191679-5f86510681a2"],
      ["Americano de la Casa", "Limpio, largo y aromático.", "Doble espresso alargado con agua filtrada a temperatura justa.", [["Blend", "De la casa"], ["Notas", "Cacao, nuez"]], 3100, "1461023058943-07fcbe16d735"],
      ["Doble Ristretto", "Concentrado y almibarado.", "Extracción corta para máxima dulzura y textura.", [["Origen", "Guatemala Antigua"], ["Notas", "Melaza, cereza negra"]], 3300, "1510591509098-f4fdc6d0ff04"],
      ["Latte Art Duo", "Para compartir en pareja.", "Dos lattes con arte en tulipán preparados al momento.", [["Unidades", "2"], ["Leche", "Entera o vegetal"]], 7200, "1509042239860-f550ce710b93"],
      ["Iced Latte", "Frío, cremoso y refrescante.", "Espresso doble sobre leche fría y hielo cristalino.", [["Opcional", "Leche de avena o almendras"]], 4200, "1517701604599-bb29b565090c"],
      ["Cold Brew 18 Horas", "Suave y sin amargor.", "Infusión en frío durante 18 horas, servida sobre hielo.", [["Origen", "Perú Cajamarca"], ["Notas", "Cacao amargo, frutos secos"]], 4400, "1521302080334-4bebac2763a6"],
      ["Mocha Valrhona", "Chocolate belga y espresso.", "Ganache Valrhona 70% con espresso doble y leche vaporizada.", [["Chocolate", "Guanaja 70%"], ["Notas", "Cacao profundo, vainilla"]], 4500, "1497515114629-f71d768fd07c"],
      ["Cappuccino Oscuro", "Tostado intenso, espuma densa.", "Blend de tueste medio-oscuro con leche entera texturizada.", [["Blend", "Sumatra + Brasil"], ["Notas", "Chocolate amargo, especias"]], 3800, "1495474472287-4d71bcdd2085"],
    ]),
  },
  {
    id: "filtrado", name: "Métodos de Filtrado", tagline: "Preparaciones manuales que revelan cada origen",
    products: build("fil", [
      ["V60 Kenia AA", "Jugoso y vibrante.", "Goteo manual que revela la acidez brillante de este kenyano.", [["Origen", "Nyeri, Kenia"], ["Variedad", "SL28 · SL34"], ["Notas", "Grosella, pomelo"]], 4600, "1545665225-b23b99e4d45e"],
      ["Chemex Geisha Panamá", "Delicado y perfumado.", "Una de las variedades más codiciadas del mundo, para compartir.", [["Origen", "Boquete, Panamá"], ["Variedad", "Geisha"], ["Notas", "Azahar, mango, té negro"]], 7800, "1442512595331-e89e73853f31"],
      ["Kalita Wave Ruanda", "Dulce, limpio y floral.", "Lecho plano para una extracción uniforme y redonda.", [["Origen", "Lago Kivu, Ruanda"], ["Notas", "Hibisco, frutilla, miel"]], 4800, "1494314671902-399b18174975"],
      ["AeroPress Guji", "Intenso y afrutado.", "Inmersión y presión que resaltan el dulzor de un natural etíope.", [["Origen", "Guji, Etiopía"], ["Proceso", "Natural"], ["Notas", "Arándano, vino tinto"]], 4600, "1498804103079-a6351b050096"],
      ["Prensa Francesa Sumatra", "Cuerpo pleno y terroso.", "Inmersión de cuatro minutos con molienda gruesa.", [["Origen", "Aceh, Sumatra"], ["Notas", "Cedro, cacao, especias"]], 4300, "1525803377221-4f6ccdaa5133"],
      ["Sifón Japonés", "Teatral, aromático y nítido.", "Preparación al vacío frente a tu mesa.", [["Origen", "Tarrazú, Costa Rica"], ["Notas", "Manzana roja, panela"]], 6200, "1504630083234-14187a9df0f5"],
      ["Vuelo de Orígenes", "Tres cafés, tres continentes.", "Degustación comparada de tres filtrados en pequeñas tazas.", [["Incluye", "África · América · Asia"]], 8900, "1453614512568-c4024d13c247"],
      ["Origen del Mes", "Microlote seleccionado.", "Un café de edición limitada elegido por nuestro tostador.", [["Disponibilidad", "Limitada"]], 5500, "1447933601403-0c6688de566e"],
    ]),
  },
  {
    id: "pasteleria", name: "Pastelería Fina", tagline: "Horneado cada mañana con manteca francesa",
    products: build("pas", [
      ["Croissant de Manteca", "Hojaldrado y crujiente.", "Laminado durante 72 horas con manteca AOP de Normandía.", [["Manteca", "AOP Charentes-Poitou"], ["Capas", "27"]], 2800, "1555507036-ab1f4038808a"],
      ["Croissants Glaseados", "Dorados con almíbar cítrico.", "Croissants pincelados con almíbar de naranja y limón.", [["Cítricos", "De estación"]], 3200, "1549903072-7e6e0bedb7fb"],
      ["Torta Sacher Belga", "Chocolate intenso y cremoso.", "Bizcocho de cacao, confitura de damasco y ganache.", [["Chocolate", "Callebaut 70%"]], 4900, "1578985545062-69928b1d9587"],
      ["Tartaletas de Frutos Rojos", "Masa sablée y fruta fresca.", "Masa sablée, crema de vainilla y frutos rojos de estación.", [["Fruta", "De estación"]], 4600, "1464305795204-6f5bbfc7fb81"],
      ["Mil Hojas de Café", "Capas crocantes y crema.", "Hojaldre caramelizado con crema diplomática de café.", [["Capas", "3 hojaldres"]], 4700, "1571115177098-24ec42ed204d"],
      ["Panna Cotta de Frutilla", "Sedosa y fresca.", "Crema de vainilla con coulis de frutillas.", [["Sin TACC", "Sí"]], 4200, "1488477181946-6428a0291777"],
      ["Cupcakes de Pistacho", "Esponjosos y aromáticos.", "Bizcocho de vainilla y frosting de pistacho.", [["Pistacho", "Bronte, Sicilia"]], 3400, "1486427944299-d1955d23e34d"],
      ["Cookies de Chocolate", "Crujientes por fuera, tiernas adentro.", "Masa madurada 48 h con chips de chocolate amargo y sal marina.", [["Sal", "Maldon"]], 2600, "1558961363-fa8fdf82db35"],
      ["Pan de Campo", "Masa madre y harinas antiguas.", "Hogaza rústica fermentada 48 horas, con manteca de campo.", [["Fermentación", "48 h"]], 3000, "1509440159596-0249088772ff"],
      ["Mini Cupcakes Rosados", "Frutilla y crema.", "Seis bocados de frutilla con buttercream suave.", [["Unidades", "6"]], 4800, "1563729784474-d77dbb933a9e"],
      ["Selección de la Vitrina", "Lo mejor del día.", "Surtido de viennoiserie recién horneada para compartir.", [["Piezas", "5"]], 7900, "1517433670267-08bbd4be890f"],
    ]),
  },
  {
    id: "brunch", name: "Brunch y Salados", tagline: "Productos de estación y panes de masa madre",
    products: build("bru", [
      ["Avocado Toast", "Masa madre, palta y huevo.", "Pan de masa madre, palta pisada con lima, huevo y brotes.", [["Pan", "Masa madre 48 h"], ["Huevo", "De campo"]], 7200, "1541519227354-08fa5d50c44d"],
      ["Tostadas Francesas", "Brioche, bananas y arándanos.", "Brioche embebido en crema de vainilla con frutas y maple.", [["Maple", "Grado A, Canadá"]], 6900, "1484723091739-30a097e8f929"],
      ["Huevos con Hongos", "Rústico y reconfortante.", "Huevos de campo, hongos salteados y hierbas frescas.", [["Hongos", "Portobello y gírgolas"]], 7400, "1482049016688-2d3e1b311543"],
      ["Huevo en Tostada", "Yema líquida y pan crocante.", "Pan de campo dorado, huevo frito y pimienta negra.", [["Huevo", "De campo"]], 6200, "1525351484163-7529414344d8"],
      ["Desayuno Completo", "Huevos, tostadas y más.", "Huevos a elección, tostadas, manteca y acompañamientos.", [["Huevos", "Fritos o revueltos"]], 8400, "1533089860892-a7c6f0a88666"],
      ["Bowl Proteico", "Salmón, quinoa y vegetales.", "Quinoa, salmón, palta, repollo morado y aderezo cítrico.", [["Salmón", "Ahumado en frío"]], 9200, "1546069901-ba9599a7e63c"],
      ["Pancakes con Maple", "Pila esponjosa y dorada.", "Pancakes de ricota con maple y manteca batida.", [["Maple", "Grado A"]], 6800, "1528207776546-365bb710ee93"],
      ["Pancakes de Frutos Rojos", "Arándanos y frutillas.", "Pancakes con frutos rojos frescos y crema chantilly.", [["Fruta", "De estación"]], 7100, "1567620905732-2d1ec7ab7445"],
      ["Mesa de Brunch", "Para compartir entre dos.", "Selección de huevos, panes, frutas, yogur y dulces.", [["Personas", "2"]], 16500, "1504754524776-8f4f37790ca0"],
      ["Tostón Verde", "Palta, huevo y sésamo.", "Rebanadas de palta, huevos mollet y semillas tostadas.", [["Vegetariano", "Sí"]], 7300, "1490645935967-10de6ba17061"],
      ["Ensalada Buddha", "Colorida y nutritiva.", "Garbanzos, palta, hojas, batata y hummus.", [["Vegano", "Sí"]], 7800, "1512621776951-a57141f2eefd"],
      ["Ensalada Tibia", "Hojas verdes y vegetales asados.", "Vegetales asados, mix de hojas y vinagreta de miel.", [["Aderezo", "Mostaza y miel"]], 7500, "1540189549336-e6e99c3679fe"],
    ]),
  },
  {
    id: "te", name: "Tés e Infusiones", tagline: "Hojas enteras de jardines seleccionados",
    products: build("te", [
      ["Matcha Latte Ceremonial", "Batido a mano, umami puro.", "Matcha de primera cosecha de Uji con leche texturizada.", [["Origen", "Uji, Kioto"], ["Grado", "Ceremonial"]], 5400, "1515823064-d6e0c04616a7"],
      ["Chai Masala de la Casa", "Especiado y reconfortante.", "Assam con cardamomo, canela, jengibre y clavo, con leche.", [["Base", "Assam"], ["Especias", "Molidas en casa"]], 4500, "1556679343-c7306c1976bc"],
      ["Té Helado de Lima", "Cítrico y refrescante.", "Té negro infusionado en frío con lima y menta.", [["Base", "Ceylán"]], 3900, "1564890369478-c89ca6d9cde9"],
      ["Oolong Tie Guan Yin", "Floral y untuoso.", "Oolong semioxidado de Fujian, ideal para varias infusiones.", [["Origen", "Anxi, China"], ["Notas", "Orquídea, manteca"]], 4800, "1576092768241-dec231879fc3"],
      ["Earl Grey Imperial", "Bergamota de Calabria.", "Té negro de Ceylán con aceite natural de bergamota.", [["Notas", "Cítricos, malta"]], 3900, "1597318181409-cf64d0b5d8a2"],
      ["Darjeeling First Flush", "El champagne de los tés.", "Cosecha de primavera del Himalaya, ligero y muscatel.", [["Origen", "Darjeeling, India"]], 4200, "1571934811356-5cc061b6821f"],
      ["Assam Dorado", "Malteado y robusto.", "Té negro de hoja entera con puntas doradas.", [["Origen", "Assam, India"]], 4000, "1594631252845-29fc4cc8cde9"],
      ["Infusión de Velas", "Manzanilla, lavanda y miel.", "Blend herbal relajante para cerrar el día.", [["Cafeína", "Libre"]], 3600, "1563911892437-1feda0179e1b"],
      ["Colección de Hebras", "Elegí tu blend.", "Seleccioná entre nuestras hebras de la vitrina.", [["Opciones", "+12 blends"]], 4200, "1558160074-4d7d8bdf4256"],
      ["Pu-erh Añejo 2015", "Terroso y profundo.", "Pu-erh añejado diez años, servido en tetera de barro.", [["Origen", "Yunnan, China"]], 5600, "1544787219-7f47ccb76574"],
    ]),
  },
];

const productsIn = (id: string) => originalCategories.find((category) => category.id === id)?.products ?? [];
const coldCoffeeIds = new Set(["cafe-8", "cafe-9"]);

export const MAX_PRODUCTS_PER_SECTION = 5;

export const categories: Category[] = [
  { id: "cafe", name: "Cafe", tagline: "Granos de origen único, preparados con precisión", products: [
    ...productsIn("cafe").filter((product) => !coldCoffeeIds.has(product.id)),
    ...productsIn("filtrado"),
  ].slice(0, MAX_PRODUCTS_PER_SECTION) },
  { id: "pasteleria", name: "Pasteleria", tagline: "Horneado cada mañana con manteca francesa", products: productsIn("pasteleria").slice(0, MAX_PRODUCTS_PER_SECTION) },
  { id: "bebidas-frias", name: "Bebidas frias", tagline: "Café e infusiones para disfrutar en frío", products: [
    ...productsIn("cafe").filter((product) => coldCoffeeIds.has(product.id)),
    ...productsIn("te").filter((product) => ["te-0", "te-2", "te-3"].includes(product.id)),
  ].slice(0, MAX_PRODUCTS_PER_SECTION) },
];

export type CoffeeLayer = { ingredient: "espresso" | "milk" | "water" | "foam" | "chocolate"; label: string; proportion: number };
// Illustrative recipes, not measured nutritional or preparation specifications.
export function coffeeComposition(product: Product): CoffeeLayer[] {
  const layer = (ingredient: CoffeeLayer["ingredient"], label: string, proportion: number): CoffeeLayer => ({ ingredient, label, proportion });
  if (product.id.startsWith("fil-")) return [layer("espresso", "Café", 100)];
  switch (product.id) {
    case "cafe-1": case "cafe-11": return [layer("espresso", "Espresso", 33), layer("milk", "Leche", 34), layer("foam", "Espuma", 33)];
    case "cafe-2": return [layer("espresso", "Espresso", 35), layer("milk", "Leche", 60), layer("foam", "Espuma", 5)];
    case "cafe-3": case "cafe-7": return [layer("espresso", "Espresso", 20), layer("milk", "Leche", 70), layer("foam", "Espuma", 10)];
    case "cafe-4": return [layer("espresso", "Espresso", 60), layer("milk", "Leche", 40)];
    case "cafe-5": return [layer("espresso", "Espresso", 30), layer("water", "Agua", 70)];
    case "cafe-10": return [layer("espresso", "Espresso", 25), layer("chocolate", "Chocolate", 20), layer("milk", "Leche", 45), layer("foam", "Espuma", 10)];
    default: return [layer("espresso", "Espresso", 100)];
  }
}

export const GOOGLE_REVIEW_URL = "https://www.google.com/maps/search/?api=1&query=Coffee+House+Specialty";
export const formatPrice = (n: number) => `$${n.toLocaleString("es-AR")}`;
