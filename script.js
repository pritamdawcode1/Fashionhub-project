/* ==========================================================================
   FASHIONHUB — MULTI-PAGE COMMERCIAL E-COMMERCE ENGINE (VANILLA JS)
   ========================================================================== */

(() => {
    'use strict';

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

    const currentPage = document.body.dataset.page || 'home';

    const state = {
        cart: loadStorage(STORAGE_KEYS.CART, []),
        wishlist: loadStorage(STORAGE_KEYS.WISHLIST, []),
        user: loadStorage(STORAGE_KEYS.USER, null),
        orders: loadStorage(STORAGE_KEYS.ORDERS, []),
        addresses: loadStorage(STORAGE_KEYS.ADDRESSES, []),
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
            quickTag: ''
        },
        sortBy: 'recommended'
    };

    function loadStorage(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch (err) {
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

    function formatINR(amount) {
        return '₹' + Number(amount).toLocaleString('en-IN');
    }

    function escapeHTML(str) {
        return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
    }

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
    // 3. SHARED HEADER, MEGA MENU & FOOTER INJECTION (DRY MULTI-PAGE SHELL)
    // ======================================================================
    function renderSharedLayout() {
        const headerMount = document.getElementById('sharedHeaderMount');
        if (headerMount) {
            headerMount.innerHTML = `
                <!-- Top Announcement Bar -->
                <div class="announcement-bar" role="region" aria-label="Promotions">
                    <div class="container announcement-inner">
                        <span><i class="fa-solid fa-truck-fast"></i> FREE EXPRESS DELIVERY ON ORDERS ABOVE ₹999</span>
                        <span class="hide-mobile">|</span>
                        <span class="hide-mobile"><i class="fa-solid fa-rotate-left"></i> 14-DAY HASSLE-FREE RETURNS</span>
                    </div>
                </div>

                <!-- Sticky Main Header & Navigation -->
                <header class="site-header" id="siteHeader">
                    <div class="container navbar">
                        <div class="nav-left">
                            <button class="icon-btn mobile-menu-trigger" id="mobileMenuBtn" aria-label="Open navigation menu" aria-expanded="false">
                                <i class="fa-solid fa-bars"></i>
                            </button>
                            <a href="index.html" class="brand-logo" aria-label="FashionHub Home">
                                <span class="logo-mark">FH</span>
                                <span class="logo-text">FASHION<span class="accent-dot">HUB</span></span>
                            </a>
                        </div>

                        <nav class="desktop-nav" aria-label="Primary Navigation">
                            <ul class="nav-list">
                                <li class="nav-item"><a href="index.html" class="nav-link ${currentPage === 'home' ? 'active' : ''}">Home</a></li>
                                
                                <!-- MEN Mega Menu -->
                                <li class="nav-item has-mega">
                                    <a href="catalog.html?category=Men" class="nav-link">Men <i class="fa-solid fa-chevron-down nav-chevron"></i></a>
                                    <div class="mega-menu" role="menu">
                                        <div class="container mega-grid">
                                            <div class="mega-col">
                                                <h4>Topwear</h4>
                                                <ul>
                                                    <li><a href="catalog.html?category=Men&sub=Oversized T-Shirts">Oversized T-Shirts</a></li>
                                                    <li><a href="catalog.html?category=Men&sub=Polo T-Shirts">Polo T-Shirts</a></li>
                                                    <li><a href="catalog.html?category=Men&sub=Casual Shirts">Casual Shirts</a></li>
                                                    <li><a href="catalog.html?category=Men&sub=Formal Shirts">Formal Shirts</a></li>
                                                    <li><a href="catalog.html?category=Men&sub=Hoodies">Hoodies & Sweatshirts</a></li>
                                                    <li><a href="catalog.html?category=Men&sub=Jackets">Jackets & Outerwear</a></li>
                                                </ul>
                                            </div>
                                            <div class="mega-col">
                                                <h4>Bottomwear & Footwear</h4>
                                                <ul>
                                                    <li><a href="catalog.html?category=Men&sub=Denim Jeans">Denim Jeans</a></li>
                                                    <li><a href="catalog.html?category=Men&sub=Cargo Pants">Cargo Pants & Trousers</a></li>
                                                    <li><a href="catalog.html?category=Men&sub=Sneakers">Sneakers & Shoes</a></li>
                                                    <li><a href="catalog.html?category=Men">All Men's Wear</a></li>
                                                </ul>
                                            </div>
                                            <div class="mega-promo">
                                                <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=500&q=80" alt="Men's Urban Editorial Collection" loading="lazy">
                                                <div class="mega-promo-caption">
                                                    <span class="badge-tag">NEW SEASON</span>
                                                    <h5>Urban Streetwear Edit</h5>
                                                    <a href="catalog.html?category=Men" class="btn-link">Explore Men →</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <!-- WOMEN Mega Menu -->
                                <li class="nav-item has-mega">
                                    <a href="catalog.html?category=Women" class="nav-link">Women <i class="fa-solid fa-chevron-down nav-chevron"></i></a>
                                    <div class="mega-menu" role="menu">
                                        <div class="container mega-grid">
                                            <div class="mega-col">
                                                <h4>Western & Fusion</h4>
                                                <ul>
                                                    <li><a href="catalog.html?category=Women&sub=Tops">Tops & Blouses</a></li>
                                                    <li><a href="catalog.html?category=Women&sub=Dresses">Casual & Party Dresses</a></li>
                                                    <li><a href="catalog.html?category=Women&sub=Jeans">High-Rise Jeans</a></li>
                                                    <li><a href="catalog.html?category=Women&sub=Kurtis">Kurtis & Tunics</a></li>
                                                    <li><a href="catalog.html?category=Women&sub=Ethnic Wear">Ethnic Wear & Sets</a></li>
                                                </ul>
                                            </div>
                                            <div class="mega-col">
                                                <h4>Bags & Footwear</h4>
                                                <ul>
                                                    <li><a href="catalog.html?category=Women&sub=Handbags">Handbags & Totes</a></li>
                                                    <li><a href="catalog.html?category=Women&sub=Sneakers">Women's Sneakers</a></li>
                                                    <li><a href="catalog.html?category=Women&sub=Sandals">Heels & Sandals</a></li>
                                                    <li><a href="catalog.html?category=Women">All Women's Wear</a></li>
                                                </ul>
                                            </div>
                                            <div class="mega-promo">
                                                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80" alt="Women's Contemporary Style" loading="lazy">
                                                <div class="mega-promo-caption">
                                                    <span class="badge-tag">CURATED</span>
                                                    <h5>Autumn / Winter '26</h5>
                                                    <a href="catalog.html?category=Women" class="btn-link">Explore Women →</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <!-- KIDS Mega Menu -->
                                <li class="nav-item has-mega">
                                    <a href="catalog.html?category=Kids" class="nav-link">Kids <i class="fa-solid fa-chevron-down nav-chevron"></i></a>
                                    <div class="mega-menu" role="menu">
                                        <div class="container mega-grid">
                                            <div class="mega-col">
                                                <h4>Boys & Girls</h4>
                                                <ul>
                                                    <li><a href="catalog.html?category=Kids&sub=T-Shirts">Kids T-Shirts</a></li>
                                                    <li><a href="catalog.html?category=Kids&sub=Dresses">Girls Dresses</a></li>
                                                    <li><a href="catalog.html?category=Kids&sub=Jeans">Kids Denim & Jeans</a></li>
                                                    <li><a href="catalog.html?category=Kids&sub=Shoes">Kids Sneakers & Shoes</a></li>
                                                </ul>
                                            </div>
                                            <div class="mega-col">
                                                <h4>Shop By Age</h4>
                                                <ul>
                                                    <li><a href="catalog.html?category=Kids">2–5 Years (Toddlers)</a></li>
                                                    <li><a href="catalog.html?category=Kids">6–10 Years (Juniors)</a></li>
                                                    <li><a href="catalog.html?category=Kids">11–14 Years (Teens)</a></li>
                                                    <li><a href="catalog.html?category=Kids">All Kids Collection</a></li>
                                                </ul>
                                            </div>
                                            <div class="mega-promo">
                                                <img src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=500&q=80" alt="Kids Playful Comfort Wear" loading="lazy">
                                                <div class="mega-promo-caption">
                                                    <span class="badge-tag">100% COTTON</span>
                                                    <h5>Play-Ready Essentials</h5>
                                                    <a href="catalog.html?category=Kids" class="btn-link">Explore Kids →</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="nav-item"><a href="catalog.html?category=Accessories" class="nav-link">Accessories</a></li>
                                <li class="nav-item"><a href="catalog.html?quick=new" class="nav-link">New Arrivals</a></li>
                                <li class="nav-item"><a href="catalog.html?quick=offers" class="nav-link nav-offer">Offers</a></li>
                            </ul>
                        </nav>

                        <!-- Right: Search Bar & Action Icons -->
                        <div class="nav-right">
                            <div class="search-wrapper" id="desktopSearchWrapper">
                                <form class="search-bar" id="searchForm" role="search">
                                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                                    <input type="text" id="searchInput" placeholder="Search for T-Shirts, Dresses, Brands..." autocomplete="off" aria-label="Search products">
                                    <button type="button" class="clear-search-btn hidden" id="clearSearchBtn" aria-label="Clear search">
                                        <i class="fa-solid fa-xmark"></i>
                                    </button>
                                </form>
                                <div class="search-suggestions hidden" id="searchSuggestions" role="listbox"></div>
                            </div>

                            <button class="icon-btn mobile-search-trigger" id="mobileSearchTrigger" aria-label="Toggle search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>

                            <a href="account.html" class="action-icon-btn" aria-label="Account">
                                <i class="fa-regular fa-user"></i>
                                <span class="action-label" id="navAccountLabel">Account</span>
                            </a>

                            <a href="wishlist.html" class="action-icon-btn" aria-label="Wishlist">
                                <i class="fa-regular fa-heart"></i>
                                <span class="action-label">Wishlist</span>
                                <span class="count-badge" id="wishlistCount">0</span>
                            </a>

                            <a href="cart.html" class="action-icon-btn" aria-label="Shopping Bag">
                                <i class="fa-solid fa-bag-shopping"></i>
                                <span class="action-label">Bag</span>
                                <span class="count-badge accent" id="cartCount">0</span>
                            </a>
                        </div>
                    </div>

                    <!-- Mobile Expandable Search Bar -->
                    <div class="mobile-search-bar hidden" id="mobileSearchBar">
                        <div class="container">
                            <form class="search-bar mobile-form" id="mobileSearchForm">
                                <i class="fa-solid fa-magnifying-glass search-icon"></i>
                                <input type="text" id="mobileSearchInput" placeholder="Search FashionHub..." autocomplete="off">
                                <button type="button" class="clear-search-btn hidden" id="mobileClearSearchBtn"><i class="fa-solid fa-xmark"></i></button>
                            </form>
                            <div class="search-suggestions hidden" id="mobileSearchSuggestions"></div>
                        </div>
                    </div>
                </header>
                <!-- Mobile Side Drawer Navigation -->
                <div class="drawer-backdrop hidden" id="mobileDrawerBackdrop"></div>
                <aside class="mobile-drawer" id="mobileDrawer" aria-hidden="true">
                    <div class="drawer-header">
                        <span class="brand-logo"><span class="logo-mark">FH</span> FASHIONHUB</span>
                        <button class="icon-btn" id="closeMobileDrawer" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="drawer-user-card">
                        <div class="avatar-circle"><i class="fa-regular fa-user"></i></div>
                        <div>
                            <p class="drawer-user-name" id="drawerUserName">Welcome, Guest</p>
                            <a href="account.html" class="btn-link">Sign In / Register</a>
                        </div>
                    </div>
                    <div class="drawer-body">
                        <ul class="drawer-nav-list">
                            <li><a href="index.html" class="drawer-link">Home</a></li>
                            
                            <li class="drawer-accordion">
                                <button class="drawer-acc-btn" aria-expanded="false">Men <i class="fa-solid fa-chevron-down"></i></button>
                                <ul class="drawer-sublist">
                                    <li><a href="catalog.html?category=Men&sub=Oversized T-Shirts">Oversized T-Shirts</a></li>
                                    <li><a href="catalog.html?category=Men&sub=Polo T-Shirts">Polo T-Shirts</a></li>
                                    <li><a href="catalog.html?category=Men&sub=Casual Shirts">Casual Shirts</a></li>
                                    <li><a href="catalog.html?category=Men&sub=Formal Shirts">Formal Shirts</a></li>
                                    <li><a href="catalog.html?category=Men&sub=Denim Jeans">Denim Jeans</a></li>
                                    <li><a href="catalog.html?category=Men&sub=Cargo Pants">Cargo Pants</a></li>
                                    <li><a href="catalog.html?category=Men&sub=Hoodies">Hoodies</a></li>
                                    <li><a href="catalog.html?category=Men&sub=Jackets">Jackets</a></li>
                                    <li><a href="catalog.html?category=Men&sub=Sneakers">Sneakers</a></li>
                                    <li><a href="catalog.html?category=Men" class="text-accent">Shop All Men</a></li>
                                </ul>
                            </li>

                            <li class="drawer-accordion">
                                <button class="drawer-acc-btn" aria-expanded="false">Women <i class="fa-solid fa-chevron-down"></i></button>
                                <ul class="drawer-sublist">
                                    <li><a href="catalog.html?category=Women&sub=Tops">Tops</a></li>
                                    <li><a href="catalog.html?category=Women&sub=Dresses">Dresses</a></li>
                                    <li><a href="catalog.html?category=Women&sub=Kurtis">Kurtis</a></li>
                                    <li><a href="catalog.html?category=Women&sub=Jeans">Jeans</a></li>
                                    <li><a href="catalog.html?category=Women&sub=Ethnic Wear">Ethnic Wear</a></li>
                                    <li><a href="catalog.html?category=Women&sub=Handbags">Handbags</a></li>
                                    <li><a href="catalog.html?category=Women&sub=Sneakers">Sneakers & Sandals</a></li>
                                    <li><a href="catalog.html?category=Women" class="text-accent">Shop All Women</a></li>
                                </ul>
                            </li>

                            <li class="drawer-accordion">
                                <button class="drawer-acc-btn" aria-expanded="false">Kids <i class="fa-solid fa-chevron-down"></i></button>
                                <ul class="drawer-sublist">
                                    <li><a href="catalog.html?category=Kids&sub=T-Shirts">Boys & Girls T-Shirts</a></li>
                                    <li><a href="catalog.html?category=Kids&sub=Dresses">Girls Dresses</a></li>
                                    <li><a href="catalog.html?category=Kids&sub=Jeans">Kids Jeans</a></li>
                                    <li><a href="catalog.html?category=Kids&sub=Shoes">Kids Shoes</a></li>
                                    <li><a href="catalog.html?category=Kids" class="text-accent">Shop All Kids</a></li>
                                </ul>
                            </li>

                            <li><a href="catalog.html?category=Accessories" class="drawer-link">Accessories</a></li>
                            <li><a href="catalog.html?quick=new" class="drawer-link">New Arrivals</a></li>
                            <li><a href="catalog.html?quick=offers" class="drawer-link text-accent">Offers & Deals</a></li>
                        </ul>

                        <div class="drawer-quick-links">
                            <a href="wishlist.html" class="drawer-util-btn"><i class="fa-regular fa-heart"></i> My Wishlist</a>
                            <a href="account.html?tab=orders" class="drawer-util-btn"><i class="fa-solid fa-box-open"></i> My Orders</a>
                            <a href="account.html?tab=profile" class="drawer-util-btn"><i class="fa-regular fa-user"></i> Account Settings</a>
                        </div>
                    </div>
                </aside>
            `;
        }

        const footerMount = document.getElementById('sharedFooterMount');
        if (footerMount) {
            footerMount.innerHTML = `
                <footer class="site-footer">
                    <div class="container footer-grid">
                        <div class="footer-brand-col">
                            <a href="index.html" class="brand-logo footer-logo">
                                <span class="logo-mark">FH</span>
                                <span class="logo-text">FASHION<span class="accent-dot">HUB</span></span>
                            </a>
                            <p class="footer-about">FashionHub is a premier modern fashion destination crafting elevated everyday wear, contemporary silhouettes, and timeless accessories for Men, Women, and Kids.</p>
                            <div class="social-links" aria-label="Social Media">
                                <a href="#instagram" aria-label="Instagram" data-info-modal="Instagram"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#facebook" aria-label="Facebook" data-info-modal="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#twitter" aria-label="X Twitter" data-info-modal="X (Twitter)"><i class="fa-brands fa-x-twitter"></i></a>
                                <a href="#youtube" aria-label="YouTube" data-info-modal="YouTube"><i class="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>

                        <div class="footer-col">
                            <h4>Shop Categories</h4>
                            <ul>
                                <li><a href="catalog.html?category=Men">Men's Clothing</a></li>
                                <li><a href="catalog.html?category=Women">Women's Fashion</a></li>
                                <li><a href="catalog.html?category=Kids">Kids' Collection</a></li>
                                <li><a href="catalog.html?category=Accessories">Watches & Accessories</a></li>
                                <li><a href="catalog.html?quick=new">New Arrivals</a></li>
                                <li><a href="catalog.html?quick=offers">Special Offers</a></li>
                            </ul>
                        </div>

                        <div class="footer-col">
                            <h4>Customer Care</h4>
                            <ul>
                                <li><a href="account.html?tab=orders">Track Your Order</a></li>
                                <li><a href="#" data-info-modal="Return Policy">Return & Exchange Policy</a></li>
                                <li><a href="#" data-info-modal="Shipping Information">Shipping Information</a></li>
                                <li><a href="#" data-info-modal="FAQ">Frequently Asked Questions</a></li>
                                <li><a href="#" data-info-modal="Contact Us">Contact Us</a></li>
                            </ul>
                        </div>

                        <div class="footer-col">
                            <h4>Corporate & Legal</h4>
                            <ul>
                                <li><a href="#" data-info-modal="About FashionHub">About FashionHub</a></li>
                                <li><a href="#" data-info-modal="Privacy Policy">Privacy Policy</a></li>
                                <li><a href="#" data-info-modal="Terms & Conditions">Terms & Conditions</a></li>
                                <li><a href="#" data-info-modal="Size Guide">Universal Size Guide</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        <div class="container footer-bottom-inner">
                            <p>© 2026 FashionHub Retail Pvt. Ltd. All rights reserved. Demo E-Commerce Showcase.</p>
                            <div class="payment-methods" aria-label="Accepted Payment Methods">
                                <span class="pay-badge"><i class="fa-brands fa-cc-visa"></i> VISA</span>
                                <span class="pay-badge"><i class="fa-brands fa-cc-mastercard"></i> Mastercard</span>
                                <span class="pay-badge"><i class="fa-solid fa-mobile-screen"></i> UPI</span>
                                <span class="pay-badge"><i class="fa-solid fa-money-bill-wave"></i> COD</span>
                            </div>
                        </div>
                    </div>
                </footer>

                <!-- Global Modal Window -->
                <div class="modal-backdrop hidden" id="globalModalBackdrop">
                    <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="globalModalTitle">
                        <div class="modal-header">
                            <h3 id="globalModalTitle">Information</h3>
                            <button class="icon-btn" id="closeGlobalModal" aria-label="Close modal"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        <div class="modal-body" id="globalModalBody"></div>
                    </div>
                </div>

                <!-- Toast Notification Stack -->
                <div class="toast-container" id="toastContainer" aria-live="polite"></div>
            `;
        }
    }
    // ======================================================================
    // 4. PRODUCT CARD GENERATOR & HOMEPAGE RENDERING
    // ======================================================================
    function createProductCardHTML(product) {
        const isWishlisted = state.wishlist.includes(product.id);
        const primaryImg = product.images[0] || FALLBACK_IMAGE;

        return `
            <article class="product-card" data-product-id="${product.id}">
                <div class="product-thumb">
                    <div class="card-badges">
                        <span class="discount-badge">${product.discount}% OFF</span>
                        ${!product.inStock ? '<span class="stock-out-badge">OUT OF STOCK</span>' : ''}
                    </div>
                    <button type="button" class="wishlist-heart-btn ${isWishlisted ? 'active' : ''}" data-toggle-wishlist="${product.id}" aria-label="Save to wishlist">
                        <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                    <a href="product.html?id=${encodeURIComponent(product.id)}" aria-label="View ${product.name}">
                        <img src="${primaryImg}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';">
                    </a>
                    <div class="rating-pill">
                        <span>${product.rating.toFixed(1)}</span>
                        <i class="fa-solid fa-star"></i>
                        <span>(${product.reviews})</span>
                    </div>
                </div>
                <div class="product-info">
                    <span class="product-brand">${product.brand}</span>
                    <a href="product.html?id=${encodeURIComponent(product.id)}" class="product-title">${product.name}</a>
                    <div class="product-price-row">
                        <span class="price-current">${formatINR(product.discountedPrice)}</span>
                        <span class="price-original">${formatINR(product.originalPrice)}</span>
                        <span class="price-off">(${product.discount}% OFF)</span>
                    </div>
                    ${product.inStock
                        ? `<a href="product.html?id=${encodeURIComponent(product.id)}" class="card-action-btn" style="text-align:center;">SELECT SIZE & VIEW</a>`
                        : `<button type="button" class="card-action-btn" disabled>OUT OF STOCK</button>`
                    }
                </div>
            </article>
        `;
    }

    function renderHomeSections() {
        const trendingGrid = document.getElementById('homeTrendingGrid');
        const newGrid = document.getElementById('homeNewArrivalsGrid');
        const bestsellersGrid = document.getElementById('homeBestsellersGrid');

        if (trendingGrid) {
            trendingGrid.innerHTML = PRODUCTS.filter(p => p.trending).slice(0, 8).map(createProductCardHTML).join('');
        }
        if (newGrid) {
            newGrid.innerHTML = PRODUCTS.filter(p => p.isNew).slice(0, 8).map(createProductCardHTML).join('');
        }
        if (bestsellersGrid) {
            bestsellersGrid.innerHTML = PRODUCTS.filter(p => p.bestseller).slice(0, 8).map(createProductCardHTML).join('');
        }
    }

    // ======================================================================
    // 5. LIVE SEARCH & SUGGESTIONS (WORKS ACROSS ALL PAGES)
    // ======================================================================
    function handleSearchInput(query, suggestionContainerId, clearBtnId) {
        const trimmed = query.trim();
        const clearBtn = document.getElementById(clearBtnId);
        const box = document.getElementById(suggestionContainerId);

        if (clearBtn) clearBtn.classList.toggle('hidden', trimmed.length === 0);
        if (!box) return;

        if (trimmed.length < 1) {
            box.classList.add('hidden');
            return;
        }

        const q = trimmed.toLowerCase();
        const matches = PRODUCTS.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.subCategory.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            p.colors.some(c => c.toLowerCase().includes(q))
        ).slice(0, 6);

        if (matches.length === 0) {
            box.innerHTML = `<div class="suggestion-item"><span>No direct matches for "<strong>${escapeHTML(trimmed)}</strong>". Press Enter to search catalog.</span></div>`;
        } else {
            box.innerHTML = matches.map(p => `
                <a href="product.html?id=${encodeURIComponent(p.id)}" class="suggestion-item">
                    <img src="${p.images[0]}" alt="${p.name}" onerror="this.src='${FALLBACK_IMAGE}'">
                    <div class="suggestion-meta">
                        <h5>${p.name}</h5>
                        <span>${p.brand} • ${p.category} • <strong>${formatINR(p.discountedPrice)}</strong></span>
                    </div>
                </a>
            `).join('');
        }
        box.classList.remove('hidden');
    }

    function executeSearch(query) {
        const q = query.trim();
        if (currentPage === 'catalog') {
            state.filters.search = q;
            state.filters.quickTag = '';
            renderCatalog();
            hideSearchSuggestions();
        } else {
            window.location.href = `catalog.html?search=${encodeURIComponent(q)}`;
        }
    }

    function hideSearchSuggestions() {
        document.getElementById('searchSuggestions')?.classList.add('hidden');
        document.getElementById('mobileSearchSuggestions')?.classList.add('hidden');
    }
    // ======================================================================
    // 6. CATALOG PAGE: URL PARAMS, MULTI-FACET FILTERING & SORTING
    // ======================================================================
    function initCatalogFromURL() {
        const params = new URLSearchParams(window.location.search);
        const cat = params.get('category');
        const sub = params.get('sub');
        const search = params.get('search');
        const quick = params.get('quick');

        if (cat) state.filters.categories = [cat];
        if (sub) state.filters.subCategory = sub;
        if (search) {
            state.filters.search = search;
            const dInput = document.getElementById('searchInput');
            const mInput = document.getElementById('mobileSearchInput');
            if (dInput) dInput.value = search;
            if (mInput) mInput.value = search;
        }
        if (quick) state.filters.quickTag = quick;

        syncFilterInputsFromState();
        renderCatalog();
    }

    function getFilteredProducts() {
        const f = state.filters;
        let list = [...PRODUCTS];

        if (f.search) {
            const tokens = f.search.toLowerCase().split(/\s+/).filter(Boolean);
            list = list.filter(p => {
                const haystack = `${p.name} ${p.brand} ${p.category} ${p.subCategory} ${p.description} ${p.colors.join(' ')}`.toLowerCase();
                return tokens.every(tok => haystack.includes(tok));
            });
        }

        if (f.categories.length > 0) {
            list = list.filter(p => f.categories.includes(p.category));
        }

        if (f.subCategory) {
            const sub = f.subCategory.toLowerCase();
            list = list.filter(p => p.subCategory.toLowerCase().includes(sub) || p.name.toLowerCase().includes(sub));
        }

        if (f.quickTag === 'new') list = list.filter(p => p.isNew);
        if (f.quickTag === 'offers') list = list.filter(p => p.discount >= 40);
        if (f.quickTag === 'bestsellers') list = list.filter(p => p.bestseller);

        if (f.pricePreset !== 'all') {
            const [min, max] = f.pricePreset.split('-').map(Number);
            list = list.filter(p => p.discountedPrice >= min && p.discountedPrice <= max);
        }

        if (f.maxPrice < 7000) {
            list = list.filter(p => p.discountedPrice <= f.maxPrice);
        }

        if (f.brands.length > 0) {
            list = list.filter(p => f.brands.includes(p.brand));
        }

        if (f.minRating > 0) {
            list = list.filter(p => p.rating >= f.minRating);
        }

        if (f.minDiscount > 0) {
            list = list.filter(p => p.discount >= f.minDiscount);
        }

        if (f.sizes.length > 0) {
            list = list.filter(p => f.sizes.some(sz => p.sizes.includes(sz)));
        }

        if (f.colors.length > 0) {
            list = list.filter(p => f.colors.some(col => p.colors.includes(col)));
        }

        if (f.stock === 'in_stock') list = list.filter(p => p.inStock);
        if (f.stock === 'out_of_stock') list = list.filter(p => !p.inStock);

        switch (state.sortBy) {
            case 'popularity':
                list.sort((a, b) => b.reviews - a.reviews);
                break;
            case 'price-asc':
                list.sort((a, b) => a.discountedPrice - b.discountedPrice);
                break;
            case 'price-desc':
                list.sort((a, b) => b.discountedPrice - a.discountedPrice);
                break;
            case 'rating':
                list.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
                break;
            case 'discount':
                list.sort((a, b) => b.discount - a.discount);
                break;
            default:
                list.sort((a, b) => (Number(b.trending) + Number(b.bestseller)) - (Number(a.trending) + Number(a.bestseller)));
        }

        return list;
    }

    function renderCatalog() {
        const grid = document.getElementById('catalogProductGrid');
        if (!grid) return;

        const results = getFilteredProducts();
        const countEl = document.getElementById('catalogResultCount');
        const noResults = document.getElementById('noResultsBox');
        const titleEl = document.getElementById('catalogPageTitle');
        const crumbEl = document.getElementById('catalogBreadcrumb');

        let pageHeading = 'All Fashion Collections';
        if (state.filters.search) {
            pageHeading = `Search Results for "${state.filters.search}"`;
        } else if (state.filters.subCategory) {
            pageHeading = state.filters.subCategory;
        } else if (state.filters.categories.length === 1) {
            pageHeading = `${state.filters.categories[0]}'s Collection`;
        } else if (state.filters.quickTag === 'new') {
            pageHeading = 'New Arrivals';
        } else if (state.filters.quickTag === 'offers') {
            pageHeading = 'Special Offers & Deals';
        } else if (state.filters.quickTag === 'bestsellers') {
            pageHeading = 'Bestselling Styles';
        }

        document.title = `${pageHeading} | FashionHub`;
        if (titleEl) titleEl.textContent = pageHeading;
        if (crumbEl) crumbEl.textContent = pageHeading;
        if (countEl) countEl.textContent = results.length;

        renderActiveFilterTags();

        if (results.length === 0) {
            grid.innerHTML = '';
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
            grid.innerHTML = results.map(createProductCardHTML).join('');
        }
    }

    function renderActiveFilterTags() {
        const bar = document.getElementById('activeFiltersBar');
        const container = document.getElementById('activeFilterChips');
        if (!bar || !container) return;

        const tags = [];
        const f = state.filters;

        if (f.search) tags.push({ label: `Search: "${f.search}"`, type: 'search' });
        if (f.subCategory) tags.push({ label: f.subCategory, type: 'subCategory' });
        if (f.quickTag) tags.push({ label: f.quickTag.toUpperCase(), type: 'quickTag' });
        f.categories.forEach(c => tags.push({ label: c, type: 'category', val: c }));
        f.brands.forEach(b => tags.push({ label: b, type: 'brand', val: b }));
        f.sizes.forEach(s => tags.push({ label: `Size: ${s}`, type: 'size', val: s }));
        f.colors.forEach(c => tags.push({ label: `Color: ${c}`, type: 'color', val: c }));
        if (f.pricePreset !== 'all') tags.push({ label: `₹${f.pricePreset.replace('-', '–₹')}`, type: 'pricePreset' });
        if (f.maxPrice < 7000) tags.push({ label: `Up to ${formatINR(f.maxPrice)}`, type: 'maxPrice' });
        if (f.minRating > 0) tags.push({ label: `${f.minRating}★ & above`, type: 'minRating' });
        if (f.minDiscount > 0) tags.push({ label: `${f.minDiscount}%+ OFF`, type: 'minDiscount' });
        if (f.stock !== 'all') tags.push({ label: f.stock === 'in_stock' ? 'In Stock' : 'Out of Stock', type: 'stock' });

        if (tags.length === 0) {
            bar.classList.add('hidden');
            return;
        }

        bar.classList.remove('hidden');
        container.innerHTML = tags.map(t => `
            <span class="filter-tag-chip">
                ${escapeHTML(t.label)}
                <button type="button" data-remove-tag="${t.type}" data-tag-val="${t.val || ''}" aria-label="Remove filter">✕</button>
            </span>
        `).join('');
    }

    function resetAllFilters() {
        state.filters = {
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
            quickTag: ''
        };
        const desktopInput = document.getElementById('searchInput');
        const mobileInput = document.getElementById('mobileSearchInput');
        if (desktopInput) desktopInput.value = '';
        if (mobileInput) mobileInput.value = '';
        syncFilterInputsFromState();
        renderCatalog();
    }

    function syncFilterInputsFromState() {
        const f = state.filters;
        document.querySelectorAll('input[name="category"]').forEach(cb => cb.checked = f.categories.includes(cb.value));
        document.querySelectorAll('input[name="brand"]').forEach(cb => cb.checked = f.brands.includes(cb.value));
        document.querySelectorAll('input[name="pricePreset"]').forEach(r => r.checked = r.value === f.pricePreset);
        document.querySelectorAll('input[name="rating"]').forEach(r => r.checked = Number(r.value) === f.minRating);
        document.querySelectorAll('input[name="discount"]').forEach(r => r.checked = Number(r.value) === f.minDiscount);
        document.querySelectorAll('input[name="stock"]').forEach(r => r.checked = r.value === f.stock);

        const slider = document.getElementById('priceRangeSlider');
        const label = document.getElementById('maxPriceLabel');
        if (slider) slider.value = f.maxPrice;
        if (label) label.textContent = formatINR(f.maxPrice);

        document.querySelectorAll('#filterSizeList .size-chip').forEach(btn => {
            btn.classList.toggle('active', f.sizes.includes(btn.dataset.size));
        });
        document.querySelectorAll('#filterColorList .color-chip').forEach(btn => {
            btn.classList.toggle('active', f.colors.includes(btn.dataset.color));
        });
    }
     // ======================================================================
    // 7. PRODUCT DETAILS PAGE (product.html?id=...)
    // ======================================================================
    function renderProductDetailsPage() {
        const container = document.getElementById('pdpContent');
        if (!container) return;

        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id') || PRODUCTS[0].id;
        const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

        state.selectedProductId = product.id;
        state.pdpSelectedSize = null;
        state.pdpSelectedColor = product.colors[0] || 'Standard';
        state.pdpQuantity = 1;

        document.title = `${product.name} | FashionHub`;

        const isWishlisted = state.wishlist.includes(product.id);
        const deliveryDate = getEstimatedDeliveryDate(4);

        container.innerHTML = `
            <nav class="breadcrumb" aria-label="Breadcrumb">
                <a href="index.html">Home</a>
                <span>/</span>
                <a href="catalog.html?category=${encodeURIComponent(product.category)}">${product.category}</a>
                <span>/</span>
                <span>${product.name}</span>
            </nav>

            <div class="pdp-grid">
                <div class="pdp-gallery">
                    <div class="pdp-thumbs">
                        ${product.images.map((img, idx) => `
                            <button type="button" class="pdp-thumb-btn ${idx === 0 ? 'active' : ''}" data-pdp-thumb="${img}">
                                <img src="${img}" alt="${product.name} view ${idx + 1}" onerror="this.src='${FALLBACK_IMAGE}'">
                            </button>
                        `).join('')}
                    </div>
                    <div class="pdp-main-image">
                        <img id="pdpMainImg" src="${product.images[0]}" alt="${product.name}" onerror="this.src='${FALLBACK_IMAGE}'">
                    </div>
                </div>

                <div class="pdp-details-col">
                    <span class="product-brand">${product.brand}</span>
                    <h1>${product.name}</h1>

                    <div class="pdp-rating-row">
                        <span class="rating-pill" style="position:static;border:1px solid var(--border-color)">
                            ${product.rating.toFixed(1)} <i class="fa-solid fa-star"></i>
                        </span>
                        <span>${product.reviews} Verified Buyer Ratings</span>
                        <span>•</span>
                        <span style="color:${product.inStock ? 'var(--success)' : 'var(--danger)'};font-weight:700;">
                            ${product.inStock ? 'In Stock & Ready to Ship' : 'Currently Out of Stock'}
                        </span>
                    </div>

                    <div class="pdp-price-box">
                        <span class="pdp-price-current">${formatINR(product.discountedPrice)}</span>
                        <span class="pdp-price-mrp">${formatINR(product.originalPrice)}</span>
                        <span class="pdp-price-off">(${product.discount}% OFF)</span>
                    </div>
                    <p class="tax-note">Inclusive of all taxes</p>

                    <div class="pdp-option-block">
                        <div class="pdp-option-head">
                            <span>SELECT COLOR: <strong id="pdpSelectedColorText">${state.pdpSelectedColor}</strong></span>
                        </div>
                        <div class="pdp-color-list">
                            ${product.colors.map((c, idx) => `
                                <button type="button" class="pdp-color-btn ${idx === 0 ? 'selected' : ''}" data-pdp-color="${c}">
                                    ${c}
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <div class="pdp-option-block">
                        <div class="pdp-option-head">
                            <span>SELECT SIZE <span class="text-accent">*</span></span>
                            <button type="button" class="btn-link" data-info-modal="Size Guide"><i class="fa-solid fa-ruler-horizontal"></i> Size Guide</button>
                        </div>
                        <div class="pdp-size-list" id="pdpSizeButtons">
                            ${product.sizes.map(sz => `
                                <button type="button" class="pdp-size-btn" data-pdp-size="${sz}">${sz}</button>
                            `).join('')}
                        </div>
                        <small class="field-error" id="pdpSizeError"></small>
                    </div>

                    <div class="pdp-option-block">
                        <div class="pdp-option-head"><span>QUANTITY</span></div>
                        <div class="qty-stepper">
                            <button type="button" id="pdpQtyDec" aria-label="Decrease quantity">−</button>
                            <span id="pdpQtyVal">1</span>
                            <button type="button" id="pdpQtyInc" aria-label="Increase quantity">+</button>
                        </div>
                    </div>

                    <div class="pdp-cta-group">
                        <button type="button" class="btn btn-primary btn-lg" id="pdpAddToCartBtn" ${!product.inStock ? 'disabled' : ''}>
                            <i class="fa-solid fa-bag-shopping"></i> ADD TO CART
                        </button>
                        <button type="button" class="btn btn-dark btn-lg" id="pdpBuyNowBtn" ${!product.inStock ? 'disabled' : ''}>
                            BUY NOW
                        </button>
                        <button type="button" class="btn btn-outline btn-lg" data-toggle-wishlist="${product.id}" aria-label="Wishlist">
                            <i class="${isWishlisted ? 'fa-solid text-accent' : 'fa-regular'} fa-heart"></i>
                        </button>
                    </div>

                    <div class="pdp-specs-box">
                        <div class="spec-row">
                            <strong>Product Description</strong>
                            <p>${product.description}</p>
                        </div>
                        <div class="spec-row">
                            <strong>Material & Fabric</strong>
                            <p>${product.material}</p>
                        </div>
                        <div class="spec-row">
                            <strong>Care Instructions</strong>
                            <p>${product.care}</p>
                        </div>
                        <div class="spec-row">
                            <strong>Delivery & Returns</strong>
                            <p><i class="fa-solid fa-truck"></i> Estimated delivery by <strong>${deliveryDate}</strong> • 14-day easy returns & exchange.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Render Related Products
        const relatedGrid = document.getElementById('relatedProductsGrid');
        if (relatedGrid) {
            const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
            relatedGrid.innerHTML = related.map(createProductCardHTML).join('');
        }
    }
    // ======================================================================
    // 8. SHOPPING CART & AUTOMATIC BILLING CALCULATIONS (cart.html)
    // ======================================================================
    function addToCart(productId, size, color, qty = 1) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product || !product.inStock) return false;

        if (!size) {
            showToast('Please select a size before adding to bag.', 'error');
            return false;
        }

        const existingIndex = state.cart.findIndex(
            item => item.productId === productId && item.size === size && item.color === color
        );

        if (existingIndex > -1) {
            state.cart[existingIndex].quantity += qty;
        } else {
            state.cart.push({
                productId,
                size,
                color: color || product.colors[0] || 'Standard',
                quantity: qty
            });
        }

        saveStorage(STORAGE_KEYS.CART, state.cart);
        updateHeaderBadges();
        showToast(`${product.name} (Size ${size}) added to bag!`);
        return true;
    }

    function calculateCartTotals() {
        let totalMrp = 0;
        let discountedSubtotal = 0;
        let totalItems = 0;

        state.cart.forEach(item => {
            const p = PRODUCTS.find(prod => prod.id === item.productId);
            if (p) {
                totalMrp += p.originalPrice * item.quantity;
                discountedSubtotal += p.discountedPrice * item.quantity;
                totalItems += item.quantity;
            }
        });

        const totalDiscount = totalMrp - discountedSubtotal;
        const deliveryFee = discountedSubtotal === 0 ? 0 : (discountedSubtotal >= 999 ? 0 : 49);
        const platformFee = discountedSubtotal === 0 ? 0 : 10;
        const tax = Math.round(discountedSubtotal * 0.05);
        const finalTotal = discountedSubtotal + deliveryFee + platformFee + tax;

        return { totalItems, totalMrp, discountedSubtotal, totalDiscount, deliveryFee, platformFee, tax, finalTotal };
    }

    function renderCart() {
        const itemsContainer = document.getElementById('cartItemsContainer');
        if (!itemsContainer) return;

        const summaryContainer = document.getElementById('cartSummaryContainer');
        const countHeader = document.getElementById('cartPageCount');
        const totals = calculateCartTotals();

        if (countHeader) countHeader.textContent = `(${totals.totalItems} ${totals.totalItems === 1 ? 'item' : 'items'})`;

        if (state.cart.length === 0) {
            itemsContainer.innerHTML = `
                <div class="empty-state-box">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <h3>Your shopping bag is empty</h3>
                    <p>Looks like you haven't added any styles to your bag yet.</p>
                    <a href="catalog.html" class="btn btn-primary">EXPLORE COLLECTIONS</a>
                </div>
            `;
            summaryContainer?.classList.add('hidden');
            return;
        }

        summaryContainer?.classList.remove('hidden');

        itemsContainer.innerHTML = state.cart.map((item, index) => {
            const p = PRODUCTS.find(prod => prod.id === item.productId);
            if (!p) return '';
            const lineTotal = p.discountedPrice * item.quantity;
            const lineMrp = p.originalPrice * item.quantity;

            return `
                <div class="cart-item-card">
                    <a href="product.html?id=${encodeURIComponent(p.id)}">
                        <img src="${p.images[0]}" alt="${p.name}" onerror="this.src='${FALLBACK_IMAGE}'">
                    </a>
                    <div>
                        <div class="cart-item-top">
                            <div>
                                <span class="product-brand">${p.brand}</span>
                                <a href="product.html?id=${encodeURIComponent(p.id)}" class="product-title">${p.name}</a>
                            </div>
                            <button type="button" class="icon-btn" data-cart-remove="${index}" aria-label="Remove item">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </div>

                        <div class="cart-item-meta">
                            <span>Size: <strong>${item.size}</strong></span>
                            <span>Color: <strong>${item.color}</strong></span>
                            <span>Unit Price: <strong>${formatINR(p.discountedPrice)}</strong></span>
                        </div>

                        <div class="cart-item-controls">
                            <div class="qty-stepper">
                                <button type="button" data-cart-dec="${index}" aria-label="Decrease quantity">−</button>
                                <span>${item.quantity}</span>
                                <button type="button" data-cart-inc="${index}" aria-label="Increase quantity">+</button>
                            </div>
                            <div class="product-price-row" style="margin:0">
                                <span class="price-current">${formatINR(lineTotal)}</span>
                                <span class="price-original">${formatINR(lineMrp)}</span>
                                <span class="price-off">${p.discount}% OFF</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        document.getElementById('summaryMrp').textContent = formatINR(totals.totalMrp);
        document.getElementById('summaryDiscount').textContent = `- ${formatINR(totals.totalDiscount)}`;
        document.getElementById('summaryDelivery').textContent = totals.deliveryFee === 0 ? 'FREE' : formatINR(totals.deliveryFee);
        document.getElementById('summaryPlatform').textContent = formatINR(totals.platformFee);
        document.getElementById('summaryTax').textContent = formatINR(totals.tax);
        document.getElementById('summaryFinalTotal').textContent = formatINR(totals.finalTotal);
        document.getElementById('summarySavingsText').textContent = `You will save ${formatINR(totals.totalDiscount)} on this order!`;
    }
    // ======================================================================
    // 9. WISHLIST MANAGEMENT (wishlist.html)
    // ======================================================================
    function toggleWishlist(productId) {
        const idx = state.wishlist.indexOf(productId);
        const product = PRODUCTS.find(p => p.id === productId);
        if (idx > -1) {
            state.wishlist.splice(idx, 1);
            showToast(`Removed ${product?.name || 'item'} from wishlist`);
        } else {
            state.wishlist.push(productId);
            showToast(`Saved ${product?.name || 'item'} to wishlist!`);
        }
        saveStorage(STORAGE_KEYS.WISHLIST, state.wishlist);
        updateHeaderBadges();

        if (currentPage === 'home') renderHomeSections();
        if (currentPage === 'catalog') renderCatalog();
        if (currentPage === 'wishlist') renderWishlist();
        if (currentPage === 'product') renderProductDetailsPage();
    }

    function renderWishlist() {
        const grid = document.getElementById('wishlistGrid');
        if (!grid) return;

        const emptyBox = document.getElementById('emptyWishlistBox');
        const countEl = document.getElementById('wishlistPageCount');
        const wishProducts = PRODUCTS.filter(p => state.wishlist.includes(p.id));

        if (countEl) countEl.textContent = `(${wishProducts.length} ${wishProducts.length === 1 ? 'item' : 'items'})`;

        if (wishProducts.length === 0) {
            grid.innerHTML = '';
            emptyBox?.classList.remove('hidden');
            return;
        }

        emptyBox?.classList.add('hidden');
        grid.innerHTML = wishProducts.map(p => `
            <article class="product-card">
                <div class="product-thumb">
                    <span class="discount-badge" style="position:absolute;top:12px;left:12px;z-index:2">${p.discount}% OFF</span>
                    <button type="button" class="wishlist-heart-btn active" data-toggle-wishlist="${p.id}" aria-label="Remove from wishlist">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <a href="product.html?id=${encodeURIComponent(p.id)}">
                        <img src="${p.images[0]}" alt="${p.name}" loading="lazy" onerror="this.src='${FALLBACK_IMAGE}'">
                    </a>
                </div>
                <div class="product-info">
                    <span class="product-brand">${p.brand}</span>
                    <a href="product.html?id=${encodeURIComponent(p.id)}" class="product-title">${p.name}</a>
                    <div class="product-price-row">
                        <span class="price-current">${formatINR(p.discountedPrice)}</span>
                        <span class="price-original">${formatINR(p.originalPrice)}</span>
                    </div>
                    <button type="button" class="btn btn-primary btn-sm btn-full" data-move-to-cart="${p.id}" ${!p.inStock ? 'disabled' : ''}>
                        ${p.inStock ? 'MOVE TO BAG' : 'OUT OF STOCK'}
                    </button>
                </div>
            </article>
        `).join('');
    }

    // ======================================================================
    // 10. MULTI-STEP CHECKOUT & ORDER CONFIRMATION (checkout.html)
    // ======================================================================
    function renderCheckout() {
        const itemsList = document.getElementById('checkoutItemsList');
        if (!itemsList) return;

        if (state.cart.length === 0) {
            window.location.href = 'cart.html';
            return;
        }

        if (state.user) {
            const nameInput = document.getElementById('chkFullName');
            const emailInput = document.getElementById('chkEmail');
            const phoneInput = document.getElementById('chkMobile');
            if (nameInput && !nameInput.value) nameInput.value = state.user.name || '';
            if (emailInput && !emailInput.value) emailInput.value = state.user.email || '';
            if (phoneInput && !phoneInput.value && state.user.phone) phoneInput.value = state.user.phone;
        }

        if (state.addresses.length > 0) {
            const lastAddr = state.addresses[0];
            if (!document.getElementById('chkHouse').value) document.getElementById('chkHouse').value = lastAddr.house || '';
            if (!document.getElementById('chkStreet').value) document.getElementById('chkStreet').value = lastAddr.street || '';
            if (!document.getElementById('chkLandmark').value) document.getElementById('chkLandmark').value = lastAddr.landmark || '';
            if (!document.getElementById('chkPin').value) document.getElementById('chkPin').value = lastAddr.pin || '';
            if (!document.getElementById('chkCity').value) document.getElementById('chkCity').value = lastAddr.city || '';
            if (!document.getElementById('chkState').value) document.getElementById('chkState').value = lastAddr.state || '';
        }

        const totals = calculateCartTotals();

        itemsList.innerHTML = state.cart.map(item => {
            const p = PRODUCTS.find(prod => prod.id === item.productId);
            if (!p) return '';
            return `
                <div class="chk-mini-item">
                    <img src="${p.images[0]}" alt="${p.name}" onerror="this.src='${FALLBACK_IMAGE}'">
                    <div class="chk-mini-info">
                        <h5>${p.name}</h5>
                        <p>Size: ${item.size} • Color: ${item.color} • Qty: ${item.quantity}</p>
                        <strong>${formatINR(p.discountedPrice * item.quantity)}</strong>
                    </div>
                </div>
            `;
        }).join('');

        document.getElementById('chkSubMrp').textContent = formatINR(totals.totalMrp);
        document.getElementById('chkSubDiscount').textContent = `- ${formatINR(totals.totalDiscount)}`;
        document.getElementById('chkSubDelivery').textContent = totals.deliveryFee === 0 ? 'FREE' : formatINR(totals.deliveryFee);
        document.getElementById('chkSubPlatform').textContent = formatINR(totals.platformFee);
        document.getElementById('chkSubTax').textContent = formatINR(totals.tax);
        document.getElementById('chkFinalPayable').textContent = formatINR(totals.finalTotal);
    }

    function generateOrderId() {
        const now = new Date();
        const yyyy = now.getFullYear();
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const dd = String(now.getDate()).padStart(2, '0');
        const seq = String(state.orders.length + 1).padStart(4, '0');
        return `FH${yyyy}${mm}${dd}${seq}`;
    }

    function getEstimatedDeliveryDate(daysAhead = 4) {
        const d = new Date();
        d.setDate(d.getDate() + daysAhead);
        return d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
    }

    function handlePlaceOrder(e) {
        e.preventDefault();
        document.querySelectorAll('.field-error').forEach(el => el.textContent = '');

        const fullName = document.getElementById('chkFullName').value.trim();
        const mobile = document.getElementById('chkMobile').value.trim();
        const email = document.getElementById('chkEmail').value.trim();
        const house = document.getElementById('chkHouse').value.trim();
        const street = document.getElementById('chkStreet').value.trim();
        const landmark = document.getElementById('chkLandmark').value.trim();
        const pin = document.getElementById('chkPin').value.trim();
        const city = document.getElementById('chkCity').value.trim();
        const stateVal = document.getElementById('chkState').value.trim();
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'Cash on Delivery';

        let isValid = true;
        if (fullName.length < 2) { document.getElementById('errFullName').textContent = 'Please enter your full name.'; isValid = false; }
        if (!/^[6-9]\d{9}$/.test(mobile)) { document.getElementById('errMobile').textContent = 'Enter a valid 10-digit Indian mobile number.'; isValid = false; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { document.getElementById('errEmail').textContent = 'Enter a valid email address.'; isValid = false; }
        if (!house) { document.getElementById('errHouse').textContent = 'House / Flat number is required.'; isValid = false; }
        if (!street) { document.getElementById('errStreet').textContent = 'Street / Locality is required.'; isValid = false; }
        if (!/^\d{6}$/.test(pin)) { document.getElementById('errPin').textContent = 'Enter a valid 6-digit PIN code.'; isValid = false; }
        if (!city) { document.getElementById('errCity').textContent = 'City is required.'; isValid = false; }
        if (!stateVal) { document.getElementById('errState').textContent = 'Please select your state.'; isValid = false; }

        if (!isValid) {
            showToast('Please fix the highlighted checkout fields.', 'error');
            return;
        }

        const totals = calculateCartTotals();
        const orderId = generateOrderId();
        const orderDate = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
        const estDelivery = getEstimatedDeliveryDate(4);

        const orderedItems = state.cart.map(item => {
            const p = PRODUCTS.find(prod => prod.id === item.productId);
            return {
                productId: item.productId,
                name: p ? p.name : 'Product',
                brand: p ? p.brand : 'FashionHub',
                image: p ? p.images[0] : FALLBACK_IMAGE,
                size: item.size,
                color: item.color,
                quantity: item.quantity,
                price: p ? p.discountedPrice : 0
            };
        });

        const addressObj = { fullName, mobile, email, house, street, landmark, city, state: stateVal, pin };

        const newOrder = {
            orderId,
            date: orderDate,
            estimatedDelivery: estDelivery,
            customer: { fullName, email, mobile },
            address: addressObj,
            items: orderedItems,
            totals,
            paymentMethod,
            status: 'Order Placed',
            statusIndex: 0
        };

        state.orders.unshift(newOrder);
        saveStorage(STORAGE_KEYS.ORDERS, state.orders);

        state.addresses = [addressObj, ...state.addresses.slice(0, 2)];
        saveStorage(STORAGE_KEYS.ADDRESSES, state.addresses);

        state.cart = [];
        saveStorage(STORAGE_KEYS.CART, state.cart);
        updateHeaderBadges();

        document.getElementById('checkoutMainLayout').classList.add('hidden');
        const confirmBox = document.getElementById('orderConfirmationBox');
        confirmBox.classList.remove('hidden');

        confirmBox.innerHTML = `
            <div class="confirm-hero">
                <div class="confirm-check-circle"><i class="fa-solid fa-check"></i></div>
                <h2>YOUR ORDER HAS BEEN PLACED!</h2>
                <p>Thank you for shopping with FashionHub, <strong>${escapeHTML(fullName)}</strong>.</p>
                <div class="confirm-order-id">Order ID: ${orderId}</div>
            </div>

            <div class="form-grid-2" style="margin-bottom:24px;">
                <div class="checkout-card" style="margin:0">
                    <h4><i class="fa-solid fa-location-dot"></i> Delivery Address</h4>
                    <p style="font-size:0.88rem;margin-top:8px;color:var(--text-secondary);">
                        <strong>${escapeHTML(fullName)}</strong> (${mobile})<br>
                        ${escapeHTML(house)}, ${escapeHTML(street)} ${landmark ? '(' + escapeHTML(landmark) + ')' : ''}<br>
                        ${escapeHTML(city)}, ${escapeHTML(stateVal)} - ${pin}
                    </p>
                </div>
                <div class="checkout-card" style="margin:0">
                    <h4><i class="fa-solid fa-truck-fast"></i> Delivery & Payment</h4>
                    <p style="font-size:0.88rem;margin-top:8px;color:var(--text-secondary);">
                        Estimated Delivery: <strong>${estDelivery}</strong><br>
                        Payment Method: <strong>${paymentMethod}</strong><br>
                        Final Bill Paid: <strong style="color:var(--text-primary)">${formatINR(totals.finalTotal)}</strong>
                    </p>
                </div>
            </div>

            <h4 style="margin-bottom:12px;">Ordered Items (${orderedItems.length})</h4>
            <div style="margin-bottom:24px;">
                ${orderedItems.map(it => `
                    <div class="chk-mini-item">
                        <img src="${it.image}" alt="${it.name}" onerror="this.src='${FALLBACK_IMAGE}'">
                        <div class="chk-mini-info">
                            <h5>${it.name}</h5>
                            <p>Size: ${it.size} • Color: ${it.color} • Qty: ${it.quantity}</p>
                            <strong>${formatINR(it.price * it.quantity)}</strong>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div style="display:flex;gap:14px;flex-wrap:wrap;justify-content:center;">
                <a href="account.html?tab=orders" class="btn btn-primary">VIEW MY ORDERS</a>
                <a href="index.html" class="btn btn-outline">CONTINUE SHOPPING</a>
            </div>
        `;

        showToast(`Order ${orderId} confirmed!`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // ======================================================================
    // 11. ACCOUNT & MY ORDERS PAGE (account.html)
    // ======================================================================
    function renderAccountPage() {
        const authWrapper = document.getElementById('authFormsWrapper');
        const dashboard = document.getElementById('accountDashboard');
        if (!authWrapper || !dashboard) return;

        const params = new URLSearchParams(window.location.search);
        const requestedTab = params.get('tab') || 'orders';

        if (!state.user && state.orders.length === 0) {
            authWrapper.classList.remove('hidden');
            dashboard.classList.add('hidden');
            return;
        }

        authWrapper.classList.add('hidden');
        dashboard.classList.remove('hidden');

        const displayName = state.user ? state.user.name : (state.orders[0]?.customer.fullName || 'Guest Shopper');
        const displayEmail = state.user ? state.user.email : (state.orders[0]?.customer.email || 'guest@fashionhub.in');

        document.getElementById('dashUserName').textContent = displayName;
        document.getElementById('dashUserEmail').textContent = displayEmail;
        document.getElementById('dashAvatar').textContent = displayName.slice(0, 2).toUpperCase();

        document.getElementById('profName').value = displayName;
        document.getElementById('profEmail').value = displayEmail;
        document.getElementById('profPhone').value = state.user?.phone || '';

        switchDashboardTab(requestedTab);
    }

    function switchDashboardTab(tabName) {
        document.querySelectorAll('.dash-nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.dashTab === tabName);
        });
        document.querySelectorAll('.dash-panel').forEach(panel => {
            panel.classList.toggle('hidden', panel.id !== `dash-${tabName}`);
        });

        if (tabName === 'orders') renderOrdersList();
        if (tabName === 'addresses') renderSavedAddresses();
    }

    const ORDER_STATUS_STEPS = ['Order Placed', 'Confirmed', 'Shipped', 'Out for Delivery', 'Delivered'];

    function renderOrdersList() {
        const container = document.getElementById('ordersListContainer');
        if (!container) return;

        if (state.orders.length === 0) {
            container.innerHTML = `
                <div class="empty-state-box">
                    <i class="fa-solid fa-box-open"></i>
                    <h3>No orders yet</h3>
                    <p>When you place an order on FashionHub, you can track its live status here.</p>
                    <a href="catalog.html" class="btn btn-primary">Start Shopping</a>
                </div>
            `;
            return;
        }

        container.innerHTML = state.orders.map((order, idx) => {
            const activeStep = order.statusIndex || 0;
            return `
                <div class="order-history-card">
                    <div class="order-card-head">
                        <div>
                            <strong>Order #${order.orderId}</strong>
                            <p style="font-size:0.8rem;color:var(--text-secondary);">Placed on ${order.date} • Est. Delivery: ${order.estimatedDelivery}</p>
                        </div>
                        <div style="text-align:right;">
                            <span class="order-status-pill">${ORDER_STATUS_STEPS[activeStep]}</span>
                            <p style="font-weight:700;margin-top:6px;">Total: ${formatINR(order.totals.finalTotal)} (${order.paymentMethod})</p>
                        </div>
                    </div>

                    <div class="order-tracker-bar">
                        ${ORDER_STATUS_STEPS.map((stepLabel, sIdx) => `
                            <div class="tracker-step ${sIdx <= activeStep ? 'done' : ''}">
                                <i class="fa-solid ${sIdx <= activeStep ? 'fa-circle-check' : 'fa-circle'}"></i>
                                <span>${stepLabel}</span>
                            </div>
                        `).join('')}
                    </div>

                    <div style="margin-bottom:12px;">
                        ${order.items.map(it => `
                            <div class="chk-mini-item">
                                <img src="${it.image}" alt="${it.name}" onerror="this.src='${FALLBACK_IMAGE}'">
                                <div class="chk-mini-info">
                                    <h5>${it.name}</h5>
                                    <p>Size: ${it.size} • Color: ${it.color} • Qty: ${it.quantity} • ${formatINR(it.price * it.quantity)}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;font-size:0.82rem;color:var(--text-secondary);">
                        <span><i class="fa-solid fa-location-dot"></i> Deliver to: ${escapeHTML(order.address.house)}, ${escapeHTML(order.address.city)} - ${order.address.pin}</span>
                        ${activeStep < 4 ? `<button type="button" class="btn btn-outline btn-sm" data-advance-order="${idx}">Simulate Next Tracking Step</button>` : '<span><i class="fa-solid fa-check-double text-accent"></i> Package Delivered</span>'}
                    </div>
                </div>
            `;
        }).join('');
    }

    function renderSavedAddresses() {
        const container = document.getElementById('savedAddressesContainer');
        if (!container) return;

        if (state.addresses.length === 0) {
            container.innerHTML = `<p style="color:var(--text-secondary);">No saved addresses yet. Addresses entered during checkout are saved here automatically.</p>`;
            return;
        }

        container.innerHTML = state.addresses.map(addr => `
            <div class="order-history-card">
                <strong>${escapeHTML(addr.fullName)}</strong>
                <p style="font-size:0.88rem;color:var(--text-secondary);margin-top:6px;">
                    ${escapeHTML(addr.house)}, ${escapeHTML(addr.street)}<br>
                    ${escapeHTML(addr.city)}, ${escapeHTML(addr.state)} - ${addr.pin}<br>
                    Mobile: ${addr.mobile}
                </p>
            </div>
        `).join('');
    }

    // ======================================================================
    // 12. HEADER BADGES, DRAWERS & GLOBAL MODALS
    // ======================================================================
    function updateHeaderBadges() {
        const cartCountEl = document.getElementById('cartCount');
        const wishlistCountEl = document.getElementById('wishlistCount');
        const accountLabelEl = document.getElementById('navAccountLabel');
        const drawerNameEl = document.getElementById('drawerUserName');

        const totalBagQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCountEl) cartCountEl.textContent = totalBagQty;
        if (wishlistCountEl) wishlistCountEl.textContent = state.wishlist.length;

        if (state.user) {
            const firstName = state.user.name.split(' ')[0];
            if (accountLabelEl) accountLabelEl.textContent = firstName;
            if (drawerNameEl) drawerNameEl.textContent = `Hi, ${state.user.name}`;
        } else {
            if (accountLabelEl) accountLabelEl.textContent = 'Account';
            if (drawerNameEl) drawerNameEl.textContent = 'Welcome, Guest';
        }
    }

    function openMobileDrawer() {
        document.getElementById('mobileDrawer')?.classList.add('open');
        document.getElementById('mobileDrawerBackdrop')?.classList.remove('hidden');
        document.getElementById('mobileMenuBtn')?.setAttribute('aria-expanded', 'true');
    }

    function closeMobileDrawer() {
        document.getElementById('mobileDrawer')?.classList.remove('open');
        document.getElementById('mobileDrawerBackdrop')?.classList.add('hidden');
        document.getElementById('mobileMenuBtn')?.setAttribute('aria-expanded', 'false');
    }

    function openMobileFilter() {
        document.getElementById('filterSidebar')?.classList.add('open');
        document.getElementById('filterBackdrop')?.classList.remove('hidden');
    }

    function closeMobileFilter() {
        document.getElementById('filterSidebar')?.classList.remove('open');
        document.getElementById('filterBackdrop')?.classList.add('hidden');
    }

    function openInfoModal(topic) {
        const modal = document.getElementById('globalModalBackdrop');
        const titleEl = document.getElementById('globalModalTitle');
        const bodyEl = document.getElementById('globalModalBody');
        if (!modal || !titleEl || !bodyEl) return;

        titleEl.textContent = topic;

        const contentMap = {
            'Size Guide': `
                <p>Use our standard FashionHub body measurement chart (in inches) to find your ideal fit:</p>
                <table class="size-table">
                    <thead><tr><th>Size</th><th>Chest (in)</th><th>Waist (in)</th><th>Hip (in)</th></tr></thead>
                    <tbody>
                        <tr><td><strong>XS</strong></td><td>34–36</td><td>28–30</td><td>35–37</td></tr>
                        <tr><td><strong>S</strong></td><td>36–38</td><td>30–32</td><td>37–39</td></tr>
                        <tr><td><strong>M</strong></td><td>38–40</td><td>32–34</td><td>39–41</td></tr>
                        <tr><td><strong>L</strong></td><td>40–42</td><td>34–36</td><td>41–43</td></tr>
                        <tr><td><strong>XL</strong></td><td>42–44</td><td>36–38</td><td>43–45</td></tr>
                        <tr><td><strong>XXL</strong></td><td>44–46</td><td>38–40</td><td>45–47</td></tr>
                    </tbody>
                </table>
            `,
            'About FashionHub': `<p><strong>FashionHub</strong> is a contemporary fashion e-commerce showcase designed to deliver effortless luxury, transparent pricing, and trend-forward wardrobes across India.</p>`,
            'Return Policy': `<p>We offer a <strong>14-Day Hassle-Free Return & Exchange Policy</strong>. Items must be unworn, unwashed, and have original brand tags intact.</p>`,
            'Shipping Information': `<p>Enjoy <strong>FREE Express Delivery</strong> on all orders above ₹999. Standard shipping is ₹49 for orders under ₹999. Orders dispatch within 24 hours.</p>`,
            'Privacy Policy': `<p>Your privacy matters. In this frontend demo application, cart, wishlist, and order data are stored exclusively in your browser's localStorage and never transmitted to external servers.</p>`,
            'Terms & Conditions': `<p>All product imagery, pricing, and checkout steps on FashionHub are provided for commercial UI/UX and e-commerce demonstration purposes.</p>`,
            'FAQ': `<p><strong>Q: How do I track my order?</strong><br>Click on Account → My Orders to view simulated real-time tracking updates for any order placed.<br><br><strong>Q: Can I pay via Cash on Delivery?</strong><br>Yes! Select Cash on Delivery at checkout.</p>`,
            'Contact Us': `<p><strong>FashionHub Customer Concierge</strong><br>Email: care@fashionhub-demo.in<br>Helpline: 1800-123-4567 (Mon–Sat, 9 AM – 8 PM IST)</p>`
        };

        bodyEl.innerHTML = contentMap[topic] || `<p>Connect with FashionHub on <strong>${topic}</strong> for daily style inspiration and drop alerts.</p>`;
        modal.classList.remove('hidden');
    }
    // ======================================================================
    // 13. EVENT LISTENERS & DELEGATION
    // ======================================================================
    function initEventListeners() {
        window.addEventListener('scroll', () => {
            document.getElementById('siteHeader')?.classList.toggle('scrolled', window.scrollY > 12);
        }, { passive: true });

        document.getElementById('mobileMenuBtn')?.addEventListener('click', openMobileDrawer);
        document.getElementById('closeMobileDrawer')?.addEventListener('click', closeMobileDrawer);
        document.getElementById('mobileDrawerBackdrop')?.addEventListener('click', closeMobileDrawer);

        document.querySelectorAll('.drawer-acc-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.parentElement.classList.toggle('open');
            });
        });

        document.getElementById('mobileSearchTrigger')?.addEventListener('click', () => {
            const bar = document.getElementById('mobileSearchBar');
            bar.classList.toggle('hidden');
            if (!bar.classList.contains('hidden')) {
                document.getElementById('mobileSearchInput')?.focus();
            }
        });

        const searchInput = document.getElementById('searchInput');
        searchInput?.addEventListener('input', e => handleSearchInput(e.target.value, 'searchSuggestions', 'clearSearchBtn'));
        document.getElementById('searchForm')?.addEventListener('submit', e => {
            e.preventDefault();
            executeSearch(searchInput.value);
        });
        document.getElementById('clearSearchBtn')?.addEventListener('click', () => {
            searchInput.value = '';
            handleSearchInput('', 'searchSuggestions', 'clearSearchBtn');
            if (currentPage === 'catalog') {
                state.filters.search = '';
                renderCatalog();
            }
        });

        const mobileSearchInput = document.getElementById('mobileSearchInput');
        mobileSearchInput?.addEventListener('input', e => handleSearchInput(e.target.value, 'mobileSearchSuggestions', 'mobileClearSearchBtn'));
        document.getElementById('mobileSearchForm')?.addEventListener('submit', e => {
            e.preventDefault();
            executeSearch(mobileSearchInput.value);
            document.getElementById('mobileSearchBar')?.classList.add('hidden');
        });
        document.getElementById('mobileClearSearchBtn')?.addEventListener('click', () => {
            mobileSearchInput.value = '';
            handleSearchInput('', 'mobileSearchSuggestions', 'mobileClearSearchBtn');
        });

        document.addEventListener('click', e => {
            if (!e.target.closest('.search-wrapper') && !e.target.closest('.mobile-search-bar')) {
                hideSearchSuggestions();
            }
        });

        // Catalog Filters
        document.querySelectorAll('input[name="category"]').forEach(cb => {
            cb.addEventListener('change', () => {
                state.filters.categories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(el => el.value);
                state.filters.subCategory = '';
                renderCatalog();
            });
        });

        document.querySelectorAll('input[name="brand"]').forEach(cb => {
            cb.addEventListener('change', () => {
                state.filters.brands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(el => el.value);
                renderCatalog();
            });
        });

        document.querySelectorAll('input[name="pricePreset"]').forEach(radio => {
            radio.addEventListener('change', e => {
                state.filters.pricePreset = e.target.value;
                renderCatalog();
            });
        });

        document.getElementById('priceRangeSlider')?.addEventListener('input', e => {
            const val = Number(e.target.value);
            state.filters.maxPrice = val;
            document.getElementById('maxPriceLabel').textContent = formatINR(val);
            renderCatalog();
        });

        document.querySelectorAll('input[name="rating"]').forEach(radio => {
            radio.addEventListener('change', e => {
                state.filters.minRating = Number(e.target.value);
                renderCatalog();
            });
        });

        document.querySelectorAll('input[name="discount"]').forEach(radio => {
            radio.addEventListener('change', e => {
                state.filters.minDiscount = Number(e.target.value);
                renderCatalog();
            });
        });

        document.querySelectorAll('input[name="stock"]').forEach(radio => {
            radio.addEventListener('change', e => {
                state.filters.stock = e.target.value;
                renderCatalog();
            });
        });

        document.getElementById('sortSelect')?.addEventListener('change', e => {
            state.sortBy = e.target.value;
            renderCatalog();
        });

        document.getElementById('openMobileFilterBtn')?.addEventListener('click', openMobileFilter);
        document.getElementById('closeMobileFilterBtn')?.addEventListener('click', closeMobileFilter);
        document.getElementById('filterBackdrop')?.addEventListener('click', closeMobileFilter);
        document.getElementById('applyMobileFiltersBtn')?.addEventListener('click', closeMobileFilter);

        document.getElementById('clearAllFiltersBtn')?.addEventListener('click', resetAllFilters);
        document.getElementById('sidebarClearBtn')?.addEventListener('click', resetAllFilters);
        document.getElementById('noResultsResetBtn')?.addEventListener('click', resetAllFilters);

        // Checkout Form
        document.getElementById('checkoutForm')?.addEventListener('submit', handlePlaceOrder);
        document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
            radio.addEventListener('change', e => {
                document.querySelectorAll('.payment-option-card').forEach(c => c.classList.remove('selected'));
                e.target.closest('.payment-option-card')?.classList.add('selected');
                const demoBox = document.getElementById('paymentDemoDetails');
                const demoText = document.getElementById('paymentDemoText');
                if (e.target.value === 'Cash on Delivery') {
                    demoBox.classList.add('hidden');
                } else {
                    demoBox.classList.remove('hidden');
                    demoText.textContent = `${e.target.value} selected. Click "Place Order & Confirm" to simulate instant payment approval.`;
                }
            });
        });

        // Newsletter Form
        document.getElementById('newsletterForm')?.addEventListener('submit', e => {
            e.preventDefault();
            const emailEl = document.getElementById('newsletterEmail');
            const feedback = document.getElementById('newsletterFeedback');
            const val = emailEl.value.trim();

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
                feedback.textContent = 'Please enter a valid email address.';
                feedback.className = 'form-feedback error';
                return;
            }
            feedback.textContent = 'Welcome to FashionHub! Your ₹500 welcome voucher code is STYLE500.';
            feedback.className = 'form-feedback success';
            emailEl.value = '';
            showToast('Subscribed to FashionHub newsletter!');
        });

        // Account Page Forms
        document.querySelectorAll('.auth-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const isLogin = tab.dataset.authTab === 'login';
                document.getElementById('loginForm').classList.toggle('hidden', !isLogin);
                document.getElementById('registerForm').classList.toggle('hidden', isLogin);
                document.getElementById('forgotPasswordBox').classList.add('hidden');
            });
        });

        document.getElementById('loginForm')?.addEventListener('submit', e => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value.trim();
            const nameFromEmail = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            state.user = { name: nameFromEmail || 'FashionHub Member', email };
            saveStorage(STORAGE_KEYS.USER, state.user);
            updateHeaderBadges();
            showToast(`Signed in as ${state.user.name}`);
            renderAccountPage();
        });

        document.getElementById('registerForm')?.addEventListener('submit', e => {
            e.preventDefault();
            const name = document.getElementById('regName').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const pass = document.getElementById('regPassword').value;
            const confirmPass = document.getElementById('regConfirmPassword').value;

            if (pass !== confirmPass) {
                showToast('Passwords do not match!', 'error');
                return;
            }
            state.user = { name, email };
            saveStorage(STORAGE_KEYS.USER, state.user);
            updateHeaderBadges();
            showToast('Demo account created successfully!');
            renderAccountPage();
        });

        document.getElementById('forgotPasswordBtn')?.addEventListener('click', () => {
            document.getElementById('loginForm').classList.add('hidden');
            document.getElementById('forgotPasswordBox').classList.remove('hidden');
        });

        document.getElementById('backToLoginBtn')?.addEventListener('click', () => {
            document.getElementById('forgotPasswordBox').classList.add('hidden');
            document.getElementById('loginForm').classList.remove('hidden');
        });

        document.getElementById('sendResetLinkBtn')?.addEventListener('click', () => {
            showToast('Simulated password reset instructions sent to your email.');
            document.getElementById('forgotPasswordBox').classList.add('hidden');
            document.getElementById('loginForm').classList.remove('hidden');
        });

        document.getElementById('logoutBtn')?.addEventListener('click', () => {
            state.user = null;
            localStorage.removeItem(STORAGE_KEYS.USER);
            updateHeaderBadges();
            showToast('Signed out of demo account.');
            window.location.href = 'index.html';
        });

        document.getElementById('profileUpdateForm')?.addEventListener('submit', e => {
            e.preventDefault();
            const name = document.getElementById('profName').value.trim();
            const email = document.getElementById('profEmail').value.trim();
            const phone = document.getElementById('profPhone').value.trim();
            state.user = { ...(state.user || {}), name, email, phone };
            saveStorage(STORAGE_KEYS.USER, state.user);
            updateHeaderBadges();
            renderAccountPage();
            showToast('Profile details updated!');
        });

        // Global Modal Close
        document.getElementById('closeGlobalModal')?.addEventListener('click', () => {
            document.getElementById('globalModalBackdrop')?.classList.add('hidden');
        });
        document.getElementById('globalModalBackdrop')?.addEventListener('click', e => {
            if (e.target.id === 'globalModalBackdrop') {
                e.target.classList.add('hidden');
            }
        });

        // Global Event Delegation
        document.addEventListener('click', e => {
            const wishBtn = e.target.closest('[data-toggle-wishlist]');
            if (wishBtn) {
                e.preventDefault();
                e.stopPropagation();
                toggleWishlist(wishBtn.dataset.toggleWishlist);
                return;
            }

            const moveCartBtn = e.target.closest('[data-move-to-cart]');
            if (moveCartBtn) {
                const pid = moveCartBtn.dataset.moveToCart;
                const prod = PRODUCTS.find(p => p.id === pid);
                if (prod) {
                    const defaultSize = prod.sizes.includes('M') ? 'M' : prod.sizes[0];
                    if (addToCart(pid, defaultSize, prod.colors[0], 1)) {
                        toggleWishlist(pid);
                    }
                }
                return;
            }

            const sizeChip = e.target.closest('#filterSizeList .size-chip');
            if (sizeChip) {
                const sz = sizeChip.dataset.size;
                const idx = state.filters.sizes.indexOf(sz);
                if (idx > -1) state.filters.sizes.splice(idx, 1);
                else state.filters.sizes.push(sz);
                sizeChip.classList.toggle('active');
                renderCatalog();
                return;
            }

            const colorChip = e.target.closest('#filterColorList .color-chip');
            if (colorChip) {
                const col = colorChip.dataset.color;
                const idx = state.filters.colors.indexOf(col);
                if (idx > -1) state.filters.colors.splice(idx, 1);
                else state.filters.colors.push(col);
                colorChip.classList.toggle('active');
                renderCatalog();
                return;
            }

            const remTagBtn = e.target.closest('[data-remove-tag]');
            if (remTagBtn) {
                const type = remTagBtn.dataset.removeTag;
                const val = remTagBtn.dataset.tagVal;
                if (type === 'search') state.filters.search = '';
                if (type === 'subCategory') state.filters.subCategory = '';
                if (type === 'quickTag') state.filters.quickTag = '';
                if (type === 'category') state.filters.categories = state.filters.categories.filter(c => c !== val);
                if (type === 'brand') state.filters.brands = state.filters.brands.filter(b => b !== val);
                if (type === 'size') state.filters.sizes = state.filters.sizes.filter(s => s !== val);
                if (type === 'color') state.filters.colors = state.filters.colors.filter(c => c !== val);
                if (type === 'pricePreset') state.filters.pricePreset = 'all';
                if (type === 'maxPrice') state.filters.maxPrice = 7000;
                if (type === 'minRating') state.filters.minRating = 0;
                if (type === 'minDiscount') state.filters.minDiscount = 0;
                if (type === 'stock') state.filters.stock = 'all';
                syncFilterInputsFromState();
                renderCatalog();
                return;
            }

            const pdpThumb = e.target.closest('[data-pdp-thumb]');
            if (pdpThumb) {
                document.querySelectorAll('.pdp-thumb-btn').forEach(b => b.classList.remove('active'));
                pdpThumb.classList.add('active');
                const mainImg = document.getElementById('pdpMainImg');
                if (mainImg) mainImg.src = pdpThumb.dataset.pdpThumb;
                return;
            }

            const pdpSizeBtn = e.target.closest('[data-pdp-size]');
            if (pdpSizeBtn) {
                document.querySelectorAll('.pdp-size-btn').forEach(b => b.classList.remove('selected'));
                pdpSizeBtn.classList.add('selected');
                state.pdpSelectedSize = pdpSizeBtn.dataset.pdpSize;
                const errEl = document.getElementById('pdpSizeError');
                if (errEl) errEl.textContent = '';
                return;
            }

            const pdpColorBtn = e.target.closest('[data-pdp-color]');
            if (pdpColorBtn) {
                document.querySelectorAll('.pdp-color-btn').forEach(b => b.classList.remove('selected'));
                pdpColorBtn.classList.add('selected');
                state.pdpSelectedColor = pdpColorBtn.dataset.pdpColor;
                const colText = document.getElementById('pdpSelectedColorText');
                if (colText) colText.textContent = state.pdpSelectedColor;
                return;
            }

            if (e.target.id === 'pdpQtyInc') {
                state.pdpQuantity = Math.min(10, state.pdpQuantity + 1);
                document.getElementById('pdpQtyVal').textContent = state.pdpQuantity;
                return;
            }

            if (e.target.id === 'pdpQtyDec') {
                state.pdpQuantity = Math.max(1, state.pdpQuantity - 1);
                document.getElementById('pdpQtyVal').textContent = state.pdpQuantity;
                return;
            }

            if (e.target.closest('#pdpAddToCartBtn')) {
                if (!state.pdpSelectedSize) {
                    const errEl = document.getElementById('pdpSizeError');
                    if (errEl) errEl.textContent = 'Please select a size first.';
                    showToast('Please select a size before adding to bag.', 'error');
                    return;
                }
                addToCart(state.selectedProductId, state.pdpSelectedSize, state.pdpSelectedColor, state.pdpQuantity);
                return;
            }

            if (e.target.closest('#pdpBuyNowBtn')) {
                if (!state.pdpSelectedSize) {
                    const errEl = document.getElementById('pdpSizeError');
                    if (errEl) errEl.textContent = 'Please select a size first.';
                    showToast('Please select a size to proceed.', 'error');
                    return;
                }
                if (addToCart(state.selectedProductId, state.pdpSelectedSize, state.pdpSelectedColor, state.pdpQuantity)) {
                    window.location.href = 'checkout.html';
                }
                return;
            }

            const cartInc = e.target.closest('[data-cart-inc]');
            if (cartInc) {
                const idx = Number(cartInc.dataset.cartInc);
                if (state.cart[idx]) {
                    state.cart[idx].quantity = Math.min(10, state.cart[idx].quantity + 1);
                    saveStorage(STORAGE_KEYS.CART, state.cart);
                    updateHeaderBadges();
                    renderCart();
                }
                return;
            }

            const cartDec = e.target.closest('[data-cart-dec]');
            if (cartDec) {
                const idx = Number(cartDec.dataset.cartDec);
                if (state.cart[idx]) {
                    if (state.cart[idx].quantity > 1) state.cart[idx].quantity -= 1;
                    else state.cart.splice(idx, 1);
                    saveStorage(STORAGE_KEYS.CART, state.cart);
                    updateHeaderBadges();
                    renderCart();
                }
                return;
            }

            const cartRem = e.target.closest('[data-cart-remove]');
            if (cartRem) {
                const idx = Number(cartRem.dataset.cartRemove);
                state.cart.splice(idx, 1);
                saveStorage(STORAGE_KEYS.CART, state.cart);
                updateHeaderBadges();
                renderCart();
                showToast('Item removed from shopping bag');
                return;
            }

            const dashTabBtn = e.target.closest('[data-dash-tab]');
            if (dashTabBtn) {
                switchDashboardTab(dashTabBtn.dataset.dashTab);
                return;
            }

            const advanceOrderBtn = e.target.closest('[data-advance-order]');
            if (advanceOrderBtn) {
                const idx = Number(advanceOrderBtn.dataset.advanceOrder);
                if (state.orders[idx] && state.orders[idx].statusIndex < 4) {
                    state.orders[idx].statusIndex += 1;
                    state.orders[idx].status = ORDER_STATUS_STEPS[state.orders[idx].statusIndex];
                    saveStorage(STORAGE_KEYS.ORDERS, state.orders);
                    renderOrdersList();
                    showToast(`Order status updated to: ${state.orders[idx].status}`);
                }
                return;
            }

            const infoModalBtn = e.target.closest('[data-info-modal]');
            if (infoModalBtn) {
                e.preventDefault();
                openInfoModal(infoModalBtn.dataset.infoModal);
                return;
            }
        });
    }

    // ======================================================================
    // 14. INITIALIZE MULTI-PAGE APPLICATION ON DOM READY
    // ======================================================================
    document.addEventListener('DOMContentLoaded', () => {
        renderSharedLayout();
        updateHeaderBadges();
        initEventListeners();

        switch (currentPage) {
            case 'home':
                renderHomeSections();
                break;
            case 'catalog':
                initCatalogFromURL();
                break;
            case 'product':
                renderProductDetailsPage();
                break;
            case 'cart':
                renderCart();
                break;
            case 'wishlist':
                renderWishlist();
                break;
            case 'checkout':
                renderCheckout();
                break;
            case 'account':
                renderAccountPage();
                break;
        }
    });

})();