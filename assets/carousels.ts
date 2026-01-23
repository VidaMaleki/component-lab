export const carouselsCodeSnippets: { [key: string]: string } = {
  basicCarouselCode: `
    import { useEffect, useState } from "react";
    import { ChevronLeft, ChevronRight } from "lucide-react";

    const slides = [
    { id: 1, color: "bg-gradient-to-r from-indigo-500 to-purple-500", title: "Slide 1" },
    { id: 2, color: "bg-gradient-to-r from-purple-500 to-pink-500", title: "Slide 2" },
    { id: 3, color: "bg-gradient-to-r from-pink-500 to-red-500", title: "Slide 3" },
    { id: 4, color: "bg-gradient-to-r from-orange-500 to-yellow-500", title: "Slide 4" },
    ];

    export function BasicCarousel() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((p) => (p + 1) % slides.length);
    const prev = () => setIndex((p) => (p - 1 + slides.length) % slides.length);

    useEffect(() => {
        const id = window.setInterval(next, 3000);
        return () => window.clearInterval(id);
    }, []);

    return (
        <div className="w-full max-w-2xl">
        <div className="relative overflow-hidden rounded-xl">
            <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: "translateX(-" + index * 100 + "%)" }}
            >
            {slides.map((s) => (
                <div
                key={s.id}
                className={"min-w-full h-64 " + s.color + " flex items-center justify-center text-white"}
                >
                <div className="text-center">
                    <div className="text-3xl mb-2">{s.title}</div>
                    <p className="text-white/80">Beautiful carousel slide</p>
                </div>
                </div>
            ))}
            </div>

            <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg"
            >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
            </button>
            <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg"
            >
            <ChevronRight className="w-6 h-6 text-slate-700" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
                <button
                key={i}
                onClick={() => setIndex(i)}
                className={"w-2 h-2 rounded-full transition-all " + (index === i ? "bg-white w-6" : "bg-white/50")}
                />
            ))}
            </div>
        </div>
        </div>
    );
    }`,
  cardCarouselCode: `
    import { useState } from "react";
    import { ChevronLeft, ChevronRight } from "lucide-react";

    const cards = [1, 2, 3];

    export function CardCarousel() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((p) => (p + 1) % cards.length);
    const prev = () => setIndex((p) => (p - 1 + cards.length) % cards.length);

    return (
        <div className="w-full max-w-2xl">
        <div className="relative">
            <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center shadow-lg z-10"
            >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>

            <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center shadow-lg z-10"
            >
            <ChevronRight className="w-5 h-5 text-slate-700" />
            </button>

            <div className="overflow-hidden rounded-xl">
            <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: "translateX(-" + index * 100 + "%)" }}
            >
                {cards.map((n) => (
                <div key={n} className="min-w-full p-1">
                    <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <div className="w-full h-40 bg-slate-100 rounded-lg mb-4 flex items-center justify-center text-slate-400">
                        Image {n}
                    </div>

                    <h3 className="text-slate-900 mb-2">Card Title {n}</h3>
                    <p className="text-sm text-slate-600 mb-4">
                        This is a description of the card content. Lorem ipsum dolor sit amet.
                    </p>

                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                        Learn More
                    </button>
                    </div>
                </div>
                ))}
            </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
            {cards.map((_, i) => (
                <button
                key={i}
                onClick={() => setIndex(i)}
                className={"w-2 h-2 rounded-full transition-all " + (index === i ? "bg-indigo-600 w-6" : "bg-slate-300")}
                />
            ))}
            </div>
        </div>
        </div>
    );
    `,
  testimonialCarouselCode: `
    import { useState } from "react";
    import { ChevronLeft, ChevronRight, Star } from "lucide-react";

    const testimonials = [
    { id: 1, text: "This product has completely transformed how we work. Amazing!", author: "Sarah Johnson", role: "CEO, TechCorp" },
    { id: 2, text: "Outstanding quality and excellent customer service. Highly recommended!", author: "Michael Chen", role: "Designer, Creative Studio" },
    { id: 3, text: "The best investment we made this year. Worth every penny!", author: "Emily Davis", role: "Product Manager" },
    ];

    export function TestimonialCarousel() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((p) => (p + 1) % testimonials.length);
    const prev = () => setIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

    return (
        <div className="w-full max-w-2xl">
        <div className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100">
            <div className="overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: "translateX(-" + index * 100 + "%)" }}
            >
                {testimonials.map((t) => (
                <div key={t.id} className="min-w-full text-center px-8">
                    <div className="flex justify-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    </div>
                    <p className="text-lg text-slate-700 mb-6 italic">"{t.text}"</p>
                    <div>
                    <div className="text-slate-900">{t.author}</div>
                    <div className="text-sm text-slate-600">{t.role}</div>
                    </div>
                </div>
                ))}
            </div>
            </div>

            <div className="flex justify-center gap-4 mt-6">
            <button
                onClick={prev}
                className="w-8 h-8 bg-white hover:bg-slate-50 rounded-full flex items-center justify-center border border-slate-200"
            >
                <ChevronLeft className="w-4 h-4 text-slate-700" />
            </button>
            <button
                onClick={next}
                className="w-8 h-8 bg-white hover:bg-slate-50 rounded-full flex items-center justify-center border border-slate-200"
            >
                <ChevronRight className="w-4 h-4 text-slate-700" />
            </button>
            </div>
        </div>
        </div>
    );
    `,
  horizontalScrollCarouselCode: `
    import { useState } from "react";
    import { ChevronLeft, ChevronRight, ShoppingCart, Star } from "lucide-react";

    const products = [
    { id: 1, name: "Premium Headphones", price: "$299", rating: 4.5 },
    { id: 2, name: "Wireless Speaker", price: "$199", rating: 4.8 },
    { id: 3, name: "Smart Watch", price: "$399", rating: 4.6 },
    { id: 4, name: "Laptop Stand", price: "$79", rating: 4.7 },
    { id: 5, name: "Mechanical Keyboard", price: "$149", rating: 4.9 },
    ];

    export function ProductCarousel() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((p) => Math.min(products.length - 1, p + 1));
    const prev = () => setIndex((p) => Math.max(0, p - 1));

    return (
        <div className="w-full max-w-2xl">
        <div className="relative">
            <div className="overflow-hidden">
            <div
                className="flex gap-4 transition-transform duration-500 ease-out"
                style={{ transform: "translateX(-" + index * 220 + "px)" }}
            >
                {products.map((p) => (
                <div
                    key={p.id}
                    className="shrink-0 w-52 bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                    <div className="h-40 bg-slate-100 flex items-center justify-center text-slate-400">
                    Product
                    </div>
                    <div className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-slate-600">{p.rating}</span>
                    </div>
                    <h4 className="text-slate-900 mb-2">{p.name}</h4>
                    <div className="flex items-center justify-between">
                        <span className="text-slate-900">{p.price}</span>
                        <button className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        <ShoppingCart className="w-4 h-4" />
                        </button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>

            <button
            onClick={prev}
            disabled={index === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>
            <button
            onClick={next}
            disabled={index >= products.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
            <ChevronRight className="w-5 h-5 text-slate-700" />
            </button>
        </div>
        </div>
    );
    `,
  fadeCarouselCode: `
    import { useState } from "react";
    import { ChevronLeft, ChevronRight } from "lucide-react";

    const slides = [
    { id: 1, color: "bg-gradient-to-r from-indigo-500 to-purple-500", title: "Slide 1" },
    { id: 2, color: "bg-gradient-to-r from-purple-500 to-pink-500", title: "Slide 2" },
    { id: 3, color: "bg-gradient-to-r from-pink-500 to-red-500", title: "Slide 3" },
    { id: 4, color: "bg-gradient-to-r from-orange-500 to-yellow-500", title: "Slide 4" },
    ];

    export function FadeCarousel() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((p) => (p + 1) % slides.length);
    const prev = () => setIndex((p) => (p - 1 + slides.length) % slides.length);

    return (
        <div className="w-full max-w-2xl">
        <div className="relative h-64 rounded-xl overflow-hidden">
            {slides.map((s, i) => (
            <div
                key={s.id}
                className={"absolute inset-0 " + s.color + " flex items-center justify-center text-white transition-opacity duration-500 " + (index === i ? "opacity-100" : "opacity-0")}
            >
                <div className="text-center">
                <div className="text-3xl mb-2">{s.title}</div>
                <p className="text-white/80">Fade transition effect</p>
                </div>
            </div>
            ))}

            <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg z-10"
            >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
            </button>
            <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg z-10"
            >
            <ChevronRight className="w-6 h-6 text-slate-700" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, i) => (
                <button
                key={i}
                onClick={() => setIndex(i)}
                className={"w-2 h-2 rounded-full transition-all " + (index === i ? "bg-white w-6" : "bg-white/50")}
                />
            ))}
            </div>
        </div>
        </div>
    );
`,
  thumbnailCarouselCode: `
    import { useState } from "react";

    const slides = [
        { id: 1, color: "bg-gradient-to-r from-indigo-500 to-purple-500", title: "Slide 1" },
        { id: 2, color: "bg-gradient-to-r from-purple-500 to-pink-500", title: "Slide 2" },
        { id: 3, color: "bg-gradient-to-r from-pink-500 to-red-500", title: "Slide 3" },
        { id: 4, color: "bg-gradient-to-r from-orange-500 to-yellow-500", title: "Slide 4" },
    ];

    export function ThumbnailCarousel() {
        const [index, setIndex] = useState(0);

    return (
        <div className="w-full max-w-2xl space-y-4">
        <div className="overflow-hidden rounded-xl">
            <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: "translateX(-" + index * 100 + "%)" }}
            >
            {slides.map((s) => (
                <div
                key={s.id}
                className={"min-w-full h-64 " + s.color + " flex items-center justify-center text-white"}
                >
                <div className="text-3xl">{s.title}</div>
                </div>
            ))}
            </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
            {slides.map((s, i) => (
            <button
                key={s.id}
                onClick={() => setIndex(i)}
                className={"h-16 " + s.color + " rounded-lg transition-all " + (index === i ? "ring-2 ring-indigo-600 ring-offset-2" : "opacity-60 hover:opacity-100")}
            />
            ))}
        </div>
        </div>
    );
    `,
  center3DCarouselCode: `
    import { useState } from "react";
    import { ChevronLeft, ChevronRight } from "lucide-react";

    const cards = [
    { title: "Mountain Adventure", subtitle: "Explore Nature", color: "from-emerald-500 to-teal-600" },
    { title: "City Lights", subtitle: "Urban Experience", color: "from-blue-500 to-indigo-600" },
    { title: "Beach Paradise", subtitle: "Coastal Dreams", color: "from-cyan-500 to-blue-600" },
    { title: "Desert Safari", subtitle: "Wild Journey", color: "from-orange-500 to-red-600" },
    { title: "Forest Retreat", subtitle: "Natural Escape", color: "from-green-500 to-emerald-600" },
    ];

    export function CenterFocused3DCarousel() {
    const [index, setIndex] = useState(1);

    const prev = () => setIndex((i) => (i - 1 + cards.length) % cards.length);
    const next = () => setIndex((i) => (i + 1) % cards.length);

    return (
        <div className="relative py-14 overflow-hidden">
        <div className="relative flex items-center justify-center h-112">
            {cards.map((card, i) => {
            const offset = i - index;

            // wrap to shortest direction (so it loops nicely)
            const half = Math.floor(cards.length / 2);
            const wrappedOffset =
                offset > half ? offset - cards.length : offset < -half ? offset + cards.length : offset;

            const isCenter = wrappedOffset === 0;
            const isSide = Math.abs(wrappedOffset) === 1;

            const translateX = wrappedOffset * 260;
            const scale = isCenter ? 1 : isSide ? 0.85 : 0.75;
            const opacity = isCenter ? 1 : isSide ? 0.65 : 0;
            const zIndex = isCenter ? 10 : isSide ? 5 : 0;

            return (
                <div
                key={i}
                className={
                    "absolute transition-all duration-500 ease-out w-80 h-96 rounded-2xl shadow-2xl p-8 text-white flex flex-col justify-end bg-linear-to-br " +
                    card.color
                }
                style={{
                    transform: "translateX(" + translateX + "px) scale(" + scale + ")",
                    opacity,
                    zIndex,
                }}
                >
                <h3 className="text-3xl mb-3">{card.title}</h3>
                <p className="text-lg text-white/90 mb-4">{card.subtitle}</p>
                <button className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                    Explore Now
                </button>
                </div>
            );
            })}

            <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center shadow-lg z-20"
            >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
            </button>

            <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center shadow-lg z-20"
            >
            <ChevronRight className="w-6 h-6 text-slate-700" />
            </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
            {cards.map((_, i) => (
            <button
                key={i}
                onClick={() => setIndex(i)}
                className={"w-2 h-2 rounded-full transition-all " + (index === i ? "bg-indigo-600 w-6" : "bg-slate-300")}
            />
            ))}
        </div>
        </div>
    );
    `,
};

export const slidesData = [
  {
    id: 1,
    color: "bg-gradient-to-r from-indigo-500 to-purple-500",
    title: "Slide 1",
  },
  {
    id: 2,
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    title: "Slide 2",
  },
  {
    id: 3,
    color: "bg-gradient-to-r from-pink-500 to-red-500",
    title: "Slide 3",
  },
  {
    id: 4,
    color: "bg-gradient-to-r from-orange-500 to-yellow-500",
    title: "Slide 4",
  },
];

export const productsData = [
  { id: 1, name: "Premium Headphones", price: "$299", rating: 4.5 },
  { id: 2, name: "Wireless Speaker", price: "$199", rating: 4.8 },
  { id: 3, name: "Smart Watch", price: "$399", rating: 4.6 },
  { id: 4, name: "Laptop Stand", price: "$79", rating: 4.7 },
  { id: 5, name: "Mechanical Keyboard", price: "$149", rating: 4.9 },
];

export const testimonialsData = [
  {
    id: 1,
    text: "This product has completely transformed how we work. Amazing!",
    author: "Sarah Johnson",
    role: "CEO, TechCorp",
  },
  {
    id: 2,
    text: "Outstanding quality and excellent customer service. Highly recommended!",
    author: "Michael Chen",
    role: "Designer, Creative Studio",
  },
  {
    id: 3,
    text: "The best investment we made this year. Worth every penny!",
    author: "Emily Davis",
    role: "Product Manager",
  },
];

export const centerCardsData = [
  {
    id: 1,
    title: "Mountain Adventure",
    subtitle: "Explore Nature",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 2,
    title: "City Lights",
    subtitle: "Urban Experience",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Beach Paradise",
    subtitle: "Coastal Dreams",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 4,
    title: "Desert Safari",
    subtitle: "Wild Journey",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 5,
    title: "Forest Retreat",
    subtitle: "Natural Escape",
    color: "from-green-500 to-emerald-600",
  },
];
