
/* ==========================================================================
   FASHIONHUB — COMMERCIAL E-COMMERCE ENGINE (VANILLA JS)
   ========================================================================== */

(() => {
    'use strict';

    // Safe Fallback Image (SVG Data URI for zero broken images)
    const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='750' viewBox='0 0 600 750'%3E%3Crect width='600' height='750' fill='%23F7F7F7'/%3E%3Ctext x='50%25' y='48%25' font-family='sans-serif' font-size='28' font-weight='bold' fill='%23171717' text-anchor='middle'%3EFASHIONHUB%3C/text%3E%3Ctext x='50%25' y='53%25' font-family='sans-serif' font-size='16' fill='%23777777' text-anchor='middle'%3EPremium Apparel Preview%3C/text%3E%3C/svg%3E";

    // ======================================================================
    // 1. REALISTIC 32-PRODUCT FASHION CATALOG DATABASE
    // ======================================================================
    const PRODUCTS = [
        // --- MEN (11 Products) ---
        {
            id: 'FH-M001',
            name: "Men's Oversized Drop-Shoulder Black T-Shirt",
            category: 'Men',
            subCategory: 'Oversized T-Shirts',
            brand: 'FashionHub',
            description: 'Heavyweight 240 GSM combed organic cotton oversized T-shirt with ribbed crew neck and street-ready relaxed drape.',
            material: '100% Combed Ring-Spun Cotton (240 GSM)',
            care: 'Machine wash cold inside out. Do not bleach. Tumble dry low.',
            originalPrice: 1299,
            discountedPrice: 699,
            discount: 46,
            rating: 4.6,
            reviews: 418,
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Black', 'White', 'Grey'],
            inStock: true,
            trending: true,
            isNew: true,
            bestseller: true,
            images: [
                'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-M002',
            name: "Men's Essential White Crew Neck T-Shirt",
            category: 'Men',
            subCategory: 'Oversized T-Shirts',
            brand: 'H&M',
            description: 'Crisp breathable everyday white T-shirt engineered for effortless layering under overshirts and jackets.',
            material: '100% Pure Cotton Jersey',
            care: 'Machine wash warm with similar colors.',
            originalPrice: 999,
            discountedPrice: 499,
            discount: 50,
            rating: 4.4,
            reviews: 312,
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['White', 'Black', 'Blue'],
            inStock: true,
            trending: false,
            isNew: false,
            bestseller: true,
            images: [
                'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-M003',
            name: "Men's Classic Pique Polo T-Shirt",
            category: 'Men',
            subCategory: 'Polo T-Shirts',
            brand: 'Puma',
            description: 'Smart-casual breathable cotton pique polo featuring a two-button placket and tailored ribbed cuffs.',
            material: '96% Cotton, 4% Elastane Pique',
            care: 'Gentle machine wash. Iron on low heat.',
            originalPrice: 1799,
            discountedPrice: 1099,
            discount: 39,
            rating: 4.5,
            reviews: 245,
            sizes: ['S', 'M', 'L', 'XL'],
            colors: ['Blue', 'Black', 'Green'],
            inStock: true,
            trending: true,
            isNew: false,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1626557981101-aae6f84aa6ff?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-M004',
            name: "Men's Linen-Blend Casual Oxford Shirt",
            category: 'Men',
            subCategory: 'Casual Shirts',
            brand: 'Roadster',
            description: 'Lightweight linen-cotton casual shirt with button-down collar and curved hem for all-day comfort.',
            material: '55% Linen, 45% Cotton',
            care: 'Hand wash or gentle cycle. Line dry in shade.',
            originalPrice: 1999,
            discountedPrice: 1199,
            discount: 40,
            rating: 4.3,
            reviews: 189,
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Blue', 'White', 'Green'],
            inStock: true,
            trending: false,
            isNew: true,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-M005',
            name: "Men's Tailored Slim-Fit Formal Shirt",
            category: 'Men',
            subCategory: 'Formal Shirts',
            brand: 'FashionHub',
            description: 'Wrinkle-resistant satin-weave cotton formal shirt designed for sharp boardroom and evening styling.',
            material: '100% Egyptian Giza Cotton',
            care: 'Machine wash cold. Warm iron.',
            originalPrice: 2299,
            discountedPrice: 1399,
            discount: 39,
            rating: 4.7,
            reviews: 274,
            sizes: ['S', 'M', 'L', 'XL'],
            colors: ['White', 'Blue', 'Black'],
            inStock: true,
            trending: false,
            isNew: false,
            bestseller: true,
            images: [
                'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-M006',
            name: "Men's Slim Fit Indigo Denim Jeans",
            category: 'Men',
            subCategory: 'Denim Jeans',
            brand: "Levi's",
            description: 'Authentic mid-rise stretch denim jeans with subtle whiskering and classic 5-pocket construction.',
            material: '98% Cotton, 2% Lycra Stretch Denim',
            care: 'Wash sparingly inside out in cold water.',
            originalPrice: 2499,
            discountedPrice: 1399,
            discount: 44,
            rating: 4.5,
            reviews: 530,
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Blue', 'Black', 'Grey'],
            inStock: true,
            trending: true,
            isNew: false,
            bestseller: true,
            images: [
                'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-M007',
            name: "Men's Utility Multi-Pocket Cargo Pants",
            category: 'Men',
            subCategory: 'Cargo Pants',
            brand: 'Roadster',
            description: 'Tapered-fit cotton twill cargo trousers featuring gusseted flap pockets and elasticated ankle cuffs.',
            material: '100% Cotton Ripstop Twill',
            care: 'Machine wash cold. Tumble dry low.',
            originalPrice: 2199,
            discountedPrice: 1299,
            discount: 41,
            rating: 4.4,
            reviews: 210,
            sizes: ['S', 'M', 'L', 'XL'],
            colors: ['Green', 'Black', 'Grey'],
            inStock: true,
            trending: false,
            isNew: true,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-M008',
            name: "Men's Heavyweight Fleece Pullover Hoodie",
            category: 'Men',
            subCategory: 'Hoodies',
            brand: 'Adidas',
            description: 'Ultra-soft brushed fleece hoodie with double-lined hood, kangaroo pocket, and ribbed trim.',
            material: '80% Cotton, 20% Recycled Polyester Fleece',
            care: 'Machine wash cold. Do not iron print.',
            originalPrice: 2999,
            discountedPrice: 1799,
            discount: 40,
            rating: 4.8,
            reviews: 389,
            sizes: ['M', 'L', 'XL', 'XXL'],
            colors: ['Black', 'Grey', 'Green'],
            inStock: true,
            trending: true,
            isNew: true,
            bestseller: true,
            images: [
                'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-M009',
            name: "Men's Quilted Bomber Biker Jacket",
            category: 'Men',
            subCategory: 'Jackets',
            brand: 'FashionHub',
            description: 'Structured matte-finish bomber jacket with metallic zipper hardware and lightweight thermal insulation.',
            material: '100% Water-Repellent Nylon Shell',
            care: 'Dry clean or gentle cold wash.',
            originalPrice: 3999,
            discountedPrice: 2399,
            discount: 40,
            rating: 4.7,
            reviews: 164,
            sizes: ['S', 'M', 'L', 'XL'],
            colors: ['Black', 'Green'],
            inStock: true,
            trending: false,
            isNew: true,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-M010',
            name: "Men's AirPulse Court Low-Top Sneakers",
            category: 'Men',
            subCategory: 'Sneakers',
            brand: 'Nike',
            description: 'Cushioned everyday court sneakers with perforated vegan leather upper and high-traction rubber outsole.',
            material: 'Synthetic Leather Upper, EVA Foam Midsole',
            care: 'Wipe clean with damp cloth.',
            originalPrice: 4499,
            discountedPrice: 2999,
            discount: 33,
            rating: 4.8,
            reviews: 612,
            sizes: ['S', 'M', 'L', 'XL'],
            colors: ['White', 'Black', 'Red'],
            inStock: true,
            trending: true,
            isNew: false,
            bestseller: true,
            images: [
                'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-M011',
            name: "Men's Vintage Washed Charcoal Graphic Tee",
            category: 'Men',
            subCategory: 'Oversized T-Shirts',
            brand: 'Roadster',
            description: 'Acid-washed charcoal grey T-shirt with minimalist chest typography and dropped sleeves.',
            material: '100% Cotton (220 GSM)',
            care: 'Machine wash cold.',
            originalPrice: 1199,
            discountedPrice: 599,
            discount: 50,
            rating: 4.2,
            reviews: 95,
            sizes: ['S', 'M', 'L', 'XL'],
            colors: ['Grey', 'Black'],
            inStock: false,
            trending: false,
            isNew: false,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80'
            ]
        },

        // --- WOMEN (11 Products) ---
        {
            id: 'FH-W001',
            name: "Women's Wrap Midi Casual Dress",
            category: 'Women',
            subCategory: 'Dresses',
            brand: 'FashionHub',
            description: 'Flowy A-line midi dress featuring a flattering V-neckline, waist tie-up belt, and soft breathable drape.',
            material: '100% Sustainable Viscose Rayon',
            care: 'Gentle machine wash cold. Steam iron.',
            originalPrice: 2499,
            discountedPrice: 1499,
            discount: 40,
            rating: 4.7,
            reviews: 492,
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['Red', 'Black', 'Blue'],
            inStock: true,
            trending: true,
            isNew: true,
            bestseller: true,
            images: [
                'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-W002',
            name: "Women's Ribbed Knit Cropped Top",
            category: 'Women',
            subCategory: 'Tops',
            brand: 'H&M',
            description: 'Sculpted square-neck ribbed knit top offering four-way stretch and effortless day-to-night versatility.',
            material: '92% Modal Cotton, 8% Elastane',
            care: 'Machine wash cold in mesh bag.',
            originalPrice: 1099,
            discountedPrice: 549,
            discount: 50,
            rating: 4.5,
            reviews: 340,
            sizes: ['XS', 'S', 'M', 'L'],
            colors: ['Black', 'White', 'Green'],
            inStock: true,
            trending: true,
            isNew: false,
            bestseller: true,
            images: [
                'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-W003',
            name: "Women's Embroidered Chanderi Silk Kurti",
            category: 'Women',
            subCategory: 'Kurtis',
            brand: 'FashionHub',
            description: 'Straight-cut festive kurti adorned with delicate zari yoke embroidery and breathable cotton mulmul lining.',
            material: 'Chanderi Silk Blend with Cotton Lining',
            care: 'Dry clean recommended for lasting sheen.',
            originalPrice: 2199,
            discountedPrice: 1199,
            discount: 45,
            rating: 4.6,
            reviews: 285,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Blue', 'Red', 'Green'],
            inStock: true,
            trending: false,
            isNew: true,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-W004',
            name: "Women's High-Waist Wide-Leg Denim Jeans",
            category: 'Women',
            subCategory: 'Jeans',
            brand: "Levi's",
            description: 'Flattering high-rise waist with relaxed wide-leg silhouette crafted from soft vintage-wash denim.',
            material: '99% Cotton, 1% Elastane',
            care: 'Machine wash cold inside out.',
            originalPrice: 2799,
            discountedPrice: 1699,
            discount: 39,
            rating: 4.6,
            reviews: 378,
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['Blue', 'Black', 'White'],
            inStock: true,
            trending: true,
            isNew: false,
            bestseller: true,
            images: [
                'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-W005',
            name: "Women's Anarkali Festive Kurta & Dupatta Set",
            category: 'Women',
            subCategory: 'Ethnic Wear',
            brand: 'FashionHub',
            description: 'Three-piece flared Anarkali ensemble with matching palazzo trousers and sheer organza border dupatta.',
            material: 'Georgette & Pure Cotton Lining',
            care: 'Dry clean only.',
            originalPrice: 3999,
            discountedPrice: 2299,
            discount: 43,
            rating: 4.8,
            reviews: 214,
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Red', 'Green', 'Blue'],
            inStock: true,
            trending: false,
            isNew: true,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-W006',
            name: "Women's Structured Vegan Leather Tote Handbag",
            category: 'Women',
            subCategory: 'Handbags',
            brand: 'FashionHub',
            description: 'Spacious work-to-weekend structured tote with gold-tone hardware, zip closure, and detachable crossbody strap.',
            material: '100% Cruelty-Free Saffiano Vegan Leather',
            care: 'Wipe with soft dry cloth.',
            originalPrice: 2999,
            discountedPrice: 1599,
            discount: 47,
            rating: 4.7,
            reviews: 441,
            sizes: ['M'],
            colors: ['Black', 'Red', 'White'],
            inStock: true,
            trending: true,
            isNew: false,
            bestseller: true,
            images: [
                'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-W007',
            name: "Women's CloudStep Platform Lifestyle Sneakers",
            category: 'Women',
            subCategory: 'Sneakers',
            brand: 'Puma',
            description: 'Lightweight chunky-sole sneakers engineered with memory-foam footbed for effortless all-day walking.',
            material: 'Breathable Mesh & Suede Overlays',
            care: 'Spot clean with mild soap.',
            originalPrice: 3799,
            discountedPrice: 2299,
            discount: 39,
            rating: 4.6,
            reviews: 298,
            sizes: ['XS', 'S', 'M', 'L'],
            colors: ['White', 'Black', 'Grey'],
            inStock: true,
            trending: false,
            isNew: true,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-W008',
            name: "Women's Strappy Block-Heel Evening Sandals",
            category: 'Women',
            subCategory: 'Sandals',
            brand: 'H&M',
            description: 'Minimalist square-toe block heel sandals with cushioned insole and adjustable ankle buckle.',
            material: 'PU Leather Upper, Resin Sole',
            care: 'Store in dust bag away from moisture.',
            originalPrice: 1999,
            discountedPrice: 1099,
            discount: 45,
            rating: 4.4,
            reviews: 156,
            sizes: ['XS', 'S', 'M', 'L'],
            colors: ['Black', 'White', 'Red'],
            inStock: true,
            trending: false,
            isNew: false,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-W009',
            name: "Women's Satin Pleated Slip Midi Skirt",
            category: 'Women',
            subCategory: 'Dresses',
            brand: 'H&M',
            description: 'Lustrous bias-cut satin midi skirt with concealed elastic waistband for fluid movement.',
            material: '100% Recycled Polyester Satin',
            care: 'Hand wash cold.',
            originalPrice: 1899,
            discountedPrice: 999,
            discount: 47,
            rating: 4.5,
            reviews: 132,
            sizes: ['XS', 'S', 'M', 'L'],
            colors: ['Green', 'Black', 'White'],
            inStock: true,
            trending: false,
            isNew: true,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-W010',
            name: "Women's Oversized Poplin Button-Up Shirt",
            category: 'Women',
            subCategory: 'Tops',
            brand: 'FashionHub',
            description: 'Relaxed boyfriend-fit crisp cotton poplin shirt with dropped shoulders and single chest pocket.',
            material: '100% Organic Cotton Poplin',
            care: 'Machine wash cold. Medium iron.',
            originalPrice: 1699,
            discountedPrice: 899,
            discount: 47,
            rating: 4.6,
            reviews: 204,
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['White', 'Blue', 'Black'],
            inStock: true,
            trending: false,
            isNew: false,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-W011',
            name: "Women's Quilted Crossbody Sling Bag",
            category: 'Women',
            subCategory: 'Handbags',
            brand: 'Roadster',
            description: 'Compact diamond-quilted sling bag with chain-link strap and magnetic flap lock.',
            material: 'Faux Leather',
            care: 'Wipe clean.',
            originalPrice: 1499,
            discountedPrice: 749,
            discount: 50,
            rating: 4.3,
            reviews: 118,
            sizes: ['S'],
            colors: ['Red', 'Black'],
            inStock: false,
            trending: false,
            isNew: false,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80'
            ]
        },

        // --- KIDS (5 Products) ---
        {
            id: 'FH-K001',
            name: "Kids' Organic Cotton Graphic Print T-Shirt",
            category: 'Kids',
            subCategory: 'T-Shirts',
            brand: 'FashionHub',
            description: 'Super-soft tagless 100% organic cotton T-shirt built for active playground comfort.',
            material: '100% GOTS Certified Organic Cotton',
            care: 'Machine wash warm.',
            originalPrice: 699,
            discountedPrice: 399,
            discount: 43,
            rating: 4.7,
            reviews: 192,
            sizes: ['XS', 'S', 'M', 'L'],
            colors: ['Blue', 'Red', 'White'],
            inStock: true,
            trending: false,
            isNew: true,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-K002',
            name: "Girls' Floral Cotton Tiered Party Dress",
            category: 'Kids',
            subCategory: 'Dresses',
            brand: 'H&M',
            description: 'Charming flutter-sleeve tiered cotton dress with soft lining and button-back closure.',
            material: '100% Breathable Cotton Cambric',
            care: 'Gentle machine wash.',
            originalPrice: 1399,
            discountedPrice: 799,
            discount: 43,
            rating: 4.8,
            reviews: 165,
            sizes: ['XS', 'S', 'M', 'L'],
            colors: ['Red', 'White', 'Blue'],
            inStock: true,
            trending: false,
            isNew: true,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-K003',
            name: "Kids' Stretchable Elastic-Waist Denim Jeans",
            category: 'Kids',
            subCategory: 'Jeans',
            brand: "Levi's",
            description: 'Soft-touch flex denim jeans with adjustable inner waistband for growing kids.',
            material: '82% Cotton, 16% Polyester, 2% Elastane',
            care: 'Machine wash cold.',
            originalPrice: 1499,
            discountedPrice: 899,
            discount: 40,
            rating: 4.5,
            reviews: 140,
            sizes: ['XS', 'S', 'M', 'L'],
            colors: ['Blue', 'Black'],
            inStock: true,
            trending: false,
            isNew: false,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-K004',
            name: "Kids' Velcro-Strap Lightweight Running Shoes",
            category: 'Kids',
            subCategory: 'Shoes',
            brand: 'Adidas',
            description: 'Easy hook-and-loop strap sneakers with cushioned EVA sole and breathable knit upper.',
            material: 'Breathable Mesh & Non-Marking Rubber Sole',
            care: 'Wipe clean with damp sponge.',
            originalPrice: 2199,
            discountedPrice: 1299,
            discount: 41,
            rating: 4.7,
            reviews: 211,
            sizes: ['XS', 'S', 'M'],
            colors: ['Blue', 'Black', 'Red'],
            inStock: true,
            trending: false,
            isNew: false,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-K005',
            name: "Kids' Colorblock Fleece Zip Hoodie",
            category: 'Kids',
            subCategory: 'T-Shirts',
            brand: 'Puma',
            description: 'Cozy full-zip hoodie with soft brushed interior and ribbed cuffs for cool mornings.',
            material: '80% Cotton, 20% Polyester',
            care: 'Machine wash cold.',
            originalPrice: 1599,
            discountedPrice: 949,
            discount: 41,
            rating: 4.6,
            reviews: 88,
            sizes: ['XS', 'S', 'M', 'L'],
            colors: ['Green', 'Grey', 'Blue'],
            inStock: true,
            trending: false,
            isNew: false,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80'
            ]
        },

        // --- ACCESSORIES (5 Products) ---
        {
            id: 'FH-A001',
            name: "ChronoMinimalist Stainless Steel Analog Watch",
            category: 'Accessories',
            subCategory: 'Watches',
            brand: 'FashionHub',
            description: 'Ultra-thin 40mm brushed stainless steel timepiece with Japanese quartz movement and sapphire-coated mineral glass.',
            material: '316L Stainless Steel & Genuine Leather Strap',
            care: 'Water resistant up to 5 ATM. Wipe with microfiber cloth.',
            originalPrice: 5499,
            discountedPrice: 2749,
            discount: 50,
            rating: 4.8,
            reviews: 356,
            sizes: ['M'],
            colors: ['Black', 'Grey'],
            inStock: true,
            trending: false,
            isNew: true,
            bestseller: true,
            images: [
                'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-A002',
            name: "Polarized Aviator UV400 Sunglasses",
            category: 'Accessories',
            subCategory: 'Sunglasses',
            brand: 'Roadster',
            description: 'Classic lightweight metal-frame aviators with anti-glare polarized lenses and 100% UV400 protection.',
            material: 'Titanium Alloy Frame, TAC Polarized Lenses',
            care: 'Clean with included lens cloth and hard case.',
            originalPrice: 1799,
            discountedPrice: 899,
            discount: 50,
            rating: 4.5,
            reviews: 267,
            sizes: ['M'],
            colors: ['Black', 'Blue'],
            inStock: true,
            trending: false,
            isNew: false,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-A003',
            name: "UrbanCommute Water-Resistant Laptop Backpack",
            category: 'Accessories',
            subCategory: 'Bags',
            brand: 'Nike',
            description: '24L sleek commuter backpack with padded 16-inch laptop sleeve, hidden anti-theft pocket, and ergonomic straps.',
            material: '900D Ballistic Water-Resistant Polyester',
            care: 'Spot clean only.',
            originalPrice: 3299,
            discountedPrice: 1899,
            discount: 42,
            rating: 4.7,
            reviews: 318,
            sizes: ['M'],
            colors: ['Black', 'Grey'],
            inStock: true,
            trending: false,
            isNew: false,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-A004',
            name: "Reversible Full-Grain Leather Formal Belt",
            category: 'Accessories',
            subCategory: 'Belts',
            brand: "Levi's",
            description: 'Two-in-one black and dark espresso reversible leather belt with rotating brushed gunmetal buckle.',
            material: '100% Full-Grain Buff Leather',
            care: 'Condition periodically with leather balm.',
            originalPrice: 1499,
            discountedPrice: 799,
            discount: 47,
            rating: 4.6,
            reviews: 195,
            sizes: ['S', 'M', 'L', 'XL'],
            colors: ['Black'],
            inStock: true,
            trending: false,
            isNew: false,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80'
            ]
        },
        {
            id: 'FH-A005',
            name: "SignatureHeritage Chronograph Mesh Watch",
            category: 'Accessories',
            subCategory: 'Watches',
            brand: 'FashionHub',
            description: 'Statement sunray dial watch paired with a breathable Milanese stainless steel mesh strap.',
            material: 'Stainless Steel',
            care: 'Wipe with dry cloth.',
            originalPrice: 6499,
            discountedPrice: 3499,
            discount: 46,
            rating: 4.9,
            reviews: 142,
            sizes: ['M'],
            colors: ['Black', 'Blue'],
            inStock: true,
            trending: false,
            isNew: true,
            bestseller: false,
            images: [
                'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80'
            ]
        }
    ];

    // ======================================================================
    // 2. PERSISTENT STATE MANAGEMENT (LOCALSTORAGE)
    // ======================================================================
    const STORAGE_KEYS = {
        CART: 'fh_cart_v1',
        WISHLIST: 'fh_wishlist_v1',
        USER: 'fh_user_v1',
        ORDERS: 'fh_orders_v1',
        ADDRESSES: 'fh_addresses_v1'
    };

    const state = {
        cart: loadStorage(STORAGE_KEYS.CART, []),
        wishlist: loadStorage(STORAGE_KEYS.WISHLIST, []),
        user: loadStorage(STORAGE_KEYS.USER, null),
        orders: loadStorage(STORAGE_KEYS.ORDERS, []),
        addresses: loadStorage(STORAGE_KEYS.ADDRESSES, []),
        currentView: 'home',
        selectedProductId: null,
        pdpSelectedSize: null,
        pdpSelectedColor: null,
        pdpQuantity: 1,
        filters: {
            search: '',
            categories: [],
            subCategory: '',
            pricePreset: 'all',
            maxPrice: 7000,
            brands: [],
            minRating: 0,
            minDiscount: 0,
            sizes: [],
            colors: [],
            stock: 'all',
            quickTag: '' // 'new', 'offers', 'bestsellers'
        },
        sortBy: 'recommended'
    };

    function loadStorage(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch (err) {
            console.warn('Storage read error:', err);
            return fallback;
        }
    }

    function saveStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
            console.warn('Storage write error:', err);
        }
    }

    // Format Indian Rupee cleanly
    function formatINR(amount) {
        return '₹' + Number(amount).toLocaleString('en-IN');
    }

    // Toast Notification Utility
    function showToast(message, type = 'success') {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        const icon = type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check';
        toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            setTimeout(() => toast.remove(), 250);
        }, 3000);
    }

    // ======================================================================
    // 3. VIEW ROUTER & NAVIGATION
    // ======================================================================
    function navigateTo(viewName, options = {}) {
        state.currentView = viewName;
        document.querySelectorAll('.app-view').forEach(v => v.classList.add('hidden'));

        const targetView = document.getElementById(`view-${viewName}`);
        if (targetView) {
            targetView.classList.remove('hidden');
        }

        // Update active nav link highlight
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.dataset.route === viewName);
        });

        // Close mobile drawers & search suggestions
        closeMobileDrawer();
        closeMobileFilter();
        hideSearchSuggestions();

        if (viewName === 'home') {
            document.title = 'FashionHub | Style That Defines You — Premium Fashion Store';
            renderHomeSections();
        } else if (viewName === 'catalog') {
            document.title = 'Shop Collections | FashionHub';
            syncFilterInputsFromState();
            renderCatalog();
        } else if (viewName === 'product' && options.productId) {
            renderProductDetails(options.productId);
        } else if (viewName === 'cart') {
            document.title = 'Shopping Bag | FashionHub';
            renderCart();
        } else if (viewName === 'wishlist') {
            document.title = 'My Wishlist | FashionHub';
            renderWishlist();
        } else if (viewName === 'checkout') {
            if (state.cart.length === 0) {
                showToast('Your shopping bag is empty!', 'error');
                navigateTo('catalog');
                return;
            }
            document.title = 'Secure Checkout | FashionHub';
            renderCheckout();
        } else if (viewName === 'account') {
            document.title = 'My Account | FashionHub';
            renderAccountView(options.tab || 'orders');
        } else if (viewName === 'orders') {
            // Route orders directly into Account Dashboard -> My Orders tab
            navigateTo('account', { tab: 'orders' });
            return;
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ======================================================================
    // 4. PRODUCT CARD GENERATOR & HOMEPAGE RENDERING
    // ======================================================================
    function createProductCardHTML(product) {
        const isWishlisted = state.wishlist.includes(product.id);
        const primaryImg = product.images[0] || FALLBACK_IMAGE;

        return `
            <article class="product-card" data-product-id="${product.id}">
                <div class="product-thumb" data-open-product="${product.id}">
                    <div class="card-badges">
                        <span class="discount-badge">${product.discount}% OFF</span>
                        ${!product.inStock ? '<span class="stock-out-badge">OUT OF STOCK</span>' : ''}
                    </div>
                    <button type="button" class="wishlist-heart-btn ${isWishlisted ? 'active' : ''}" data-toggle-wishlist="${product.id}" aria-label="Save to wishlist">
                        <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                    <img src="${primaryImg}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';">
                    <div class="rating-pill">
                        <span>${product.rating.toFixed(1)}</span>
                        <i class="fa-solid fa-star"></i>
                        <span>(${product.reviews})</span>
                    </div>
                </div>
                <div class="product-info">
                    <span class="product-brand">${product.brand}</span>
                    <h3 class="product-title" data-open-product="${product.id}">${product.name}</h3>
                    <div class="product-price-row">
                        <span class="price-current">${formatINR(product.discountedPrice)}</span>
                        <span class="price-original">${formatINR(product.originalPrice)}</span>
                        <span class="price-off">(${product.discount}% OF
   
