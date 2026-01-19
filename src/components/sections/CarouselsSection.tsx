import { useEffect, useMemo, useState } from "react";
import { ComponentShowcase } from "../ComponentShowcase";
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from "lucide-react";
import { carouselsCodeSnippets, slidesData, productsData, testimonialsData, centerCardsData } from "../../../assets/carousels"

export function CarouselsSection() {
    // each carousel has its own index
    const [basicSlide, setBasicSlide] = useState(0);
    const [fadeSlide, setFadeSlide] = useState(0);
    const [thumbnailSlide, setThumbnailSlide] = useState(0);

    const [currentCard, setCurrentCard] = useState(0);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [currentProduct, setCurrentProduct] = useState(0);

    const [centerCard, setCenterCard] = useState(1);

    const slides = useMemo(
        () => slidesData,
        []
    );

    const products = useMemo(
        () => productsData,
        []
    );

    const testimonials = useMemo(
        () => testimonialsData,
        []
    );

    const centerCards = useMemo(
        () => centerCardsData,
        []
    );

    const nextIndex = (current: number, length: number) => (current + 1) % length;
    const prevIndex = (current: number, length: number) => (current - 1 + length) % length;

    // Basic autoplay
    useEffect(() => {
        const id = window.setInterval(() => {
            setBasicSlide((p) => nextIndex(p, slides.length));
        }, 3000);

        return () => window.clearInterval(id);
    }, [slides.length]);

    // Card carousel (3 slides)
    const nextCard = () => setCurrentCard((p) => nextIndex(p, 3));
    const prevCard = () => setCurrentCard((p) => prevIndex(p, 3));

    // Testimonials
    const nextTestimonial = () => setCurrentTestimonial((p) => nextIndex(p, testimonials.length));
    const prevTestimonial = () => setCurrentTestimonial((p) => prevIndex(p, testimonials.length));

    // Product scroller
    const nextProduct = () => setCurrentProduct((p) => Math.min(products.length - 1, p + 1));
    const prevProduct = () => setCurrentProduct((p) => Math.max(0, p - 1));

    // Center carousel
    const prevCenterCard = () => setCenterCard((prev) => (prev - 1 + centerCards.length) % centerCards.length);
    const nextCenterCard = () => setCenterCard((prev) => (prev + 1) % centerCards.length);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Carousels & Sliders</h1>
                <p className="text-slate-600">Image carousels, content sliders, and interactive slideshow components.</p>
            </div>

            {/* Basic Carousel */}
            <ComponentShowcase
                title="Basic Image Carousel"
                description="Simple carousel with navigation arrows"
                preview={
                    <div className="w-full max-w-2xl">
                        <div className="relative overflow-hidden rounded-xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${basicSlide * 100}%)` }}
                            >
                                {slides.map((slide) => (
                                    <div
                                        key={slide.id}
                                        className={`min-w-full h-64 ${slide.color} flex items-center justify-center text-white`}
                                    >
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">{slide.title}</div>
                                            <p className="text-white/80">Beautiful carousel slide</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button
                                type="button"
                                onClick={() => setBasicSlide((p) => prevIndex(p, slides.length))}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6 text-slate-700" />
                            </button>
                            <button
                                type="button"
                                onClick={() => setBasicSlide((p) => nextIndex(p, slides.length))}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
                            >
                                <ChevronRight className="w-6 h-6 text-slate-700" />
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => setBasicSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${basicSlide === index ? "bg-white w-6" : "bg-white/50"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                }
                code={carouselsCodeSnippets.basicCarouselCode}
            />
            {/* ✅ FIXED Card Carousel: no peeking, centered image, arrows symmetric */}
            <ComponentShowcase
                title="Card Carousel"
                description="Carousel showing cards with content"
                preview={
                    <div className="w-full max-w-2xl">
                        <div className="relative">
                            <button
                                type="button"
                                onClick={prevCard}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center shadow-lg z-10"
                            >
                                <ChevronLeft className="w-5 h-5 text-slate-700" />
                            </button>

                            <button
                                type="button"
                                onClick={nextCard}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center shadow-lg z-10"
                            >
                                <ChevronRight className="w-5 h-5 text-slate-700" />
                            </button>

                            <div className="overflow-hidden rounded-xl">
                                <div
                                    className="flex transition-transform duration-500 ease-out"
                                    style={{ transform: `translateX(-${currentCard * 100}%)` }}
                                >
                                    {[1, 2, 3].map((card) => (
                                        <div key={card} className="min-w-full">
                                            <div className="bg-white border border-slate-200 rounded-xl p-6">
                                                <div className="w-full h-40 bg-slate-100 rounded-lg mb-4 flex items-center justify-center text-slate-400">
                                                    Image {card}
                                                </div>
                                                <h3 className="text-slate-900 mb-2">Card Title {card}</h3>
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
                                {[0, 1, 2].map((index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => setCurrentCard(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${currentCard === index ? "bg-indigo-600 w-6" : "bg-slate-300"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                }
                code={carouselsCodeSnippets.cardCarouselCode}
            />

            {/* Testimonial Carousel */}
            <ComponentShowcase
                title="Testimonial Carousel"
                description="Carousel for customer testimonials"
                preview={
                    <div className="w-full max-w-2xl">
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100">
                            <div className="relative overflow-hidden">
                                <div
                                    className="flex transition-transform duration-500 ease-out"
                                    style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                                >
                                    {testimonials.map((testimonial) => (
                                        <div key={testimonial.id} className="min-w-full text-center px-8">
                                            <div className="flex justify-center mb-4">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                            <p className="text-lg text-slate-700 mb-6 italic">"{testimonial.text}"</p>
                                            <div>
                                                <div className="text-slate-900">{testimonial.author}</div>
                                                <div className="text-sm text-slate-600">{testimonial.role}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center gap-4 mt-6">
                                    <button
                                        type="button"
                                        onClick={prevTestimonial}
                                        className="w-8 h-8 bg-white hover:bg-slate-50 rounded-full flex items-center justify-center border border-slate-200"
                                    >
                                        <ChevronLeft className="w-4 h-4 text-slate-700" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={nextTestimonial}
                                        className="w-8 h-8 bg-white hover:bg-slate-50 rounded-full flex items-center justify-center border border-slate-200"
                                    >
                                        <ChevronRight className="w-4 h-4 text-slate-700" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                code={carouselsCodeSnippets.testimonialCarouselCode}
            />

            {/* Horizontal Scroll Carousel */}
            <ComponentShowcase
                title="Horizontal Scroll Carousel"
                description="Scrollable product carousel"
                preview={
                    <div className="w-full max-w-2xl">
                        <div className="relative">
                            <div className="overflow-hidden">
                                <div
                                    className="flex gap-4 transition-transform duration-500 ease-out"
                                    style={{ transform: `translateX(-${currentProduct * 220}px)` }}
                                >
                                    {products.map((product) => (
                                        <div
                                            key={product.id}
                                            className="flex-shrink-0 w-52 bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                                        >
                                            <div className="h-40 bg-slate-100 flex items-center justify-center text-slate-400">Product</div>
                                            <div className="p-4">
                                                <div className="flex items-center gap-1 mb-2">
                                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                    <span className="text-sm text-slate-600">{product.rating}</span>
                                                </div>
                                                <h4 className="text-slate-900 mb-2">{product.name}</h4>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-slate-900">{product.price}</span>
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
                                type="button"
                                onClick={prevProduct}
                                disabled={currentProduct === 0}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft className="w-5 h-5 text-slate-700" />
                            </button>
                            <button
                                type="button"
                                onClick={nextProduct}
                                disabled={currentProduct >= products.length - 1}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronRight className="w-5 h-5 text-slate-700" />
                            </button>
                        </div>
                    </div>
                }
                code={carouselsCodeSnippets.cardCarouselCode}
            />

            {/* Fade Carousel */}
            <ComponentShowcase
                title="Fade Transition Carousel"
                description="Carousel with fade effect"
                preview={
                    <div className="w-full max-w-2xl">
                        <div className="relative h-64 rounded-xl overflow-hidden">
                            {slides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`absolute inset-0 ${slide.color} flex items-center justify-center text-white transition-opacity duration-500 ${fadeSlide === index ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    <div className="text-center">
                                        <div className="text-3xl mb-2">{slide.title}</div>
                                        <p className="text-white/80">Fade transition effect</p>
                                    </div>
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={() => setFadeSlide((p) => prevIndex(p, slides.length))}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg z-10"
                            >
                                <ChevronLeft className="w-6 h-6 text-slate-700" />
                            </button>
                            <button
                                type="button"
                                onClick={() => setFadeSlide((p) => nextIndex(p, slides.length))}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg z-10"
                            >
                                <ChevronRight className="w-6 h-6 text-slate-700" />
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => setFadeSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${fadeSlide === index ? "bg-white w-6" : "bg-white/50"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                }
                code={carouselsCodeSnippets.fadeCarouselCode}
            />

            {/* Thumbnail Carousel */}
            <ComponentShowcase
                title="Thumbnail Navigation Carousel"
                description="Carousel with thumbnail preview"
                preview={
                    <div className="w-full max-w-2xl space-y-4">
                        <div className="relative overflow-hidden rounded-xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${thumbnailSlide * 100}%)` }}
                            >
                                {slides.map((slide) => (
                                    <div
                                        key={slide.id}
                                        className={`min-w-full h-64 ${slide.color} flex items-center justify-center text-white`}
                                    >
                                        <div className="text-3xl">{slide.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-2">
                            {slides.map((slide, index) => (
                                <button
                                    key={slide.id}
                                    type="button"
                                    onClick={() => setThumbnailSlide(index)}
                                    className={`h-16 ${slide.color} rounded-lg transition-all ${thumbnailSlide === index ? "ring-2 ring-indigo-600 ring-offset-2" : "opacity-60 hover:opacity-100"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                }
                code={carouselsCodeSnippets.thumbnailCarouselCode}
            />

            {/* ✅ 3D Center-Focused Carousel (real sliding feel, no motion lib) */}
            <ComponentShowcase
                title="3D Center-Focused Carousel"
                description="Carousel with larger center card and 3D perspective effect"
                preview={
                    <div className="w-full max-w-4xl">
                        <div className="relative py-16 px-8">
                            {/* Stage */}
                            <div
                                className="relative mx-auto h-[420px]"
                                style={{ perspective: "1200px" }}
                            >
                                {centerCards.map((card, i) => {
                                    // signed distance from centerCard in range [-2..2] (wraps)
                                    const n = centerCards.length;
                                    let d = i - centerCard;
                                    d = ((d % n) + n) % n; // 0..n-1
                                    if (d > n / 2) d -= n; // make it negative when shorter path

                                    // Position presets (tuned to match your current look)
                                    const isCenter = d === 0;
                                    const isLeft = d === -1;
                                    const isRight = d === 1;

                                    const x = isCenter ? 0 : isLeft ? -320 : isRight ? 320 : d < 0 ? -520 : 520;
                                    const scale = isCenter ? 1 : isLeft || isRight ? 0.82 : 0.7;
                                    const rotateY = isCenter ? 0 : isLeft ? 18 : isRight ? -18 : d < 0 ? 30 : -30;
                                    const opacity = isCenter ? 1 : isLeft || isRight ? 0.65 : 0;
                                    const zIndex = isCenter ? 10 : isLeft || isRight ? 5 : 0;
                                    const blur = isCenter ? "blur(0px)" : isLeft || isRight ? "blur(0px)" : "blur(2px)";

                                    // Keep your exact sizes
                                    const w = isCenter ? 320 : 256; // 80 and 64 in Tailwind
                                    const h = isCenter ? 384 : 320; // 96 and 80 in Tailwind
                                    const pad = isCenter ? 32 : 24;

                                    return (
                                        <button
                                            key={card.id}
                                            type="button"
                                            onClick={() => setCenterCard(i)}
                                            className="absolute left-1/2 top-1/2 -translate-y-1/2"
                                            style={{
                                                // IMPORTANT: animate the physical movement
                                                transform: `translateX(-50%) translateX(${x}px) scale(${scale}) rotateY(${rotateY}deg)`,
                                                transition: "transform 520ms cubic-bezier(0.22, 1, 0.36, 1), opacity 520ms ease",
                                                opacity,
                                                zIndex,
                                                filter: blur,
                                                transformStyle: "preserve-3d",
                                                pointerEvents: opacity === 0 ? "none" : "auto",
                                            }}
                                        >
                                            <div
                                                className={`bg-gradient-to-br ${card.color} rounded-2xl shadow-2xl flex flex-col justify-end text-white`}
                                                style={{
                                                    width: `${w}px`,
                                                    height: `${h}px`,
                                                    padding: `${pad}px`,
                                                }}
                                            >
                                                <h3 className={isCenter ? "text-3xl mb-3" : "text-2xl mb-2"}>{card.title}</h3>
                                                <p className={isCenter ? "text-lg text-white/90 mb-4" : "text-white/80"}>
                                                    {card.subtitle}
                                                </p>

                                                {isCenter && (
                                                    <span className="inline-flex">
                                                        <span className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg transition-colors">
                                                            Explore Now
                                                        </span>
                                                    </span>
                                                )}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Navigation Buttons (keep yours) */}
                            <button
                                onClick={prevCenterCard}
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center shadow-lg z-20"
                            >
                                <ChevronLeft className="w-6 h-6 text-slate-700" />
                            </button>
                            <button
                                onClick={nextCenterCard}
                                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center shadow-lg z-20"
                            >
                                <ChevronRight className="w-6 h-6 text-slate-700" />
                            </button>

                            {/* Dots */}
                            <div className="flex justify-center gap-2 mt-8">
                                {centerCards.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCenterCard(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${centerCard === index ? "bg-indigo-600 w-6" : "bg-slate-300"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                }
                code={carouselsCodeSnippets.centerCarouselCode}
            />
        </div>
    );
}
