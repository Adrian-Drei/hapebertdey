// Edit images and captions here. Lower order numbers appear first; ties keep array order.
const MEMORIES = [
  {
    order: 8,
    image: "photos/memory1.webp",
    label: "Elyu",
    alt: "Our memory 1 together",
  },
  {
    order: 7,
    image: "photos/memory2.webp",
    label: "Testing ng 360 cam",
    alt: "Our memory 2 together",
  },
  {
    order: 3,
    image: "photos/memory3.webp",
    label: "Birthday ni Jamayka (di ko alam spelling)",
    alt: "Our memory 3 together",
  },
  {
    order: 5,
    image: "photos/memory4.webp",
    label: "Kain with for keeps ft. Vanya",
    alt: "Our memory 4 together",
  },
  {
    order: 4,
    image: "photos/memory5.webp",
    label: "Camping night",
    alt: "Our memory 5 together",
  },
  {
    order: 10,
    image: "photos/memory6.webp",
    label: "Kain",
    alt: "Our memory 6 together",
  },
  {
    order: 6,
    image: "photos/memory7.webp",
    label: "Picture mo with Daniel Padilla",
    alt: "Our memory 7 together",
  },
  {
    order: 11,
    image: "photos/memory8.webp",
    label: "Kain kain",
    alt: "Our memory 8 together",
  },
  {
    order: 9,
    image: "photos/memory9.webp",
    label: "Birthday ni kapatids",
    alt: "Our memory 9 together",
  },
  {
    order: 2,
    image: "photos/memory10.webp",
    label: "After college picture",
    alt: "Our memory 10 together",
  },
  {
    order: 1,
    image: "photos/memory11.webp",
    label: "College",
    alt: "Our memory 11 together",
  },
  {
    order: 12,
    image: "photos/memory12.webp",
    label: "Kain kain kain",
    alt: "Our memory 12 together",
  },
  {
    order: 7,
    image: "photos/memory13.webp",
    label: "Baho ko naman dito",
    alt: "A smiling moment together",
  },
  {
    order: 13,
    image: "photos/memory14.webp",
    label: "Kain kain kain kain",
    alt: "Together at a scenic hillside cafe",
  },
  {
    order: 14,
    image: "photos/memory15.webp",
    label: "After Baguio kain sa sb",
    alt: "A playful selfie together",
  },
];

function renderMemories() {
  const gallery = document.getElementById("memory-gallery");
  const cards = document.createDocumentFragment();

  [...MEMORIES]
    .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity))
    .forEach(({ image, label, alt }) => {
    const card = document.createElement("div");
    card.className = "memory-card";
    card.addEventListener("click", () => openPreview(image));

    const photo = document.createElement("img");
    photo.src = image;
    photo.alt = alt || label;
    photo.loading = "lazy";

    const caption = document.createElement("p");
    caption.textContent = label;
    card.append(photo, caption);
    cards.appendChild(card);
  });

  gallery.replaceChildren(cards);
}

renderMemories();
