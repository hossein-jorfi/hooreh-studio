export interface ClassType {
  name: string;
  description: string;
  tags: string[];
  technics?: string[];
  status: "open" | "closed";
  image: string;
}

export const classes: ClassType[] = [
  {
    image: "/images/test.jpeg",
    name: "کلاس سفالگری کار با دست مقدماتی",
    description:
      "در این کلاس شما تکنیک‌های اولیه سفالگری با دست را یاد گرفته و هر جلسه یک حجم با این تکنیک‌ها می‌سازید. این دوره نیاز به هیچ پیش زمینه‌ای ندارد و اگر دنبال یک هنر برای آرامش ذهن و افکارتون هستید این کلاس مناسب شماست.",
    tags: ["۵ جلسه", "۳ ساعت و نیمه", "یک جلسه در هفته"],
    technics: [
      "۵ جلسه",
      "۳ ساعت و نیمه",
      "یک جلسه در هفته",
      "یک جلسه در هفته",
      "یک جلسه در هفته",
      "یک جلسه در هفته",
      "یک جلسه در هفته",
    ],
    status: "open",
  },
];
