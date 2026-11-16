/* ==========================================================================
   FASHIONHUB — COMMERCIAL E-COMMERCE ENGINE (VANILLA JS)
   ========================================================================== */

(() => {
    'use strict';

    const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='750' viewBox='0 0 600 750'%3E%3Crect width='600' height='750' fill='%23F7F7F7'/%3E%3Ctext x='50%25' y='48%25' font-family='sans-serif' font-size='28' font-weight='bold' fill='%23171717' text-anchor='middle'%3EFASHIONHUB%3C/text%3E%3Ctext x='50%25' y='53%25' font-family='sans-serif' font-size='16' fill='%23777777' text-anchor='middle'%3EPremium Apparel Preview%3C/text%3E%3C/svg%3E";

    const PRODUCTS = [
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

    const STORAGE_KEYS = {
        CART: 'fh_cart_v1',
        WISHLIST: 'fh_wishlist_v1',
        USER: 'fh_user_v1',
        ORDERS: 'fh_orders_v1',
        ADDRESSES: 'fh_addresses_v1'
    };

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
            search: '', categories: [], subCategory: '', pricePreset: 'all', maxPrice: 7000,
            brands: [], minRating: 0, minDiscount: 0, sizes: [], colors: [], stock: 'all', quickTag: ''
        },
        sortBy: 'recommended'
    };

    function loadStorage(key, fallback) {
        try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch (err) { return fallback; }
    }

    function saveStorage(key, value) {
        try { localStorage.setItem(key, JSON.stringify(value)); } catch (err) {}
    }

    function formatINR(amount) {
        return '₹' + Number(amount).toLocaleString('en-IN');
    }

    function showToast(message, type = 'success') {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        const icon = type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check';
        toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateY(10px)'; setTimeout(() => toast.remove(), 250); }, 3000);
    }

    function navigateTo(viewName, options = {}) {
        state.currentView = viewName;
        document.querySelectorAll('.app-view').forEach(v => v.classList.add('hidden'));
        const targetView = document.getElementById(`view-${viewName}`);
        if (targetView) targetView.classList.remove('hidden');

        document.querySelectorAll('.nav-link').forEach(link => link.classList.toggle('active', link.dataset.route === viewName));
        closeMobileDrawer();
        closeMobileFilter();
        hideSearchSuggestions();

        if (viewName === 'home') { document.title = 'FashionHub | Style That Defines You'; renderHomeSections(); }
        else if (viewName === 'catalog') { document.title = 'Shop Collections | FashionHub'; syncFilterInputsFromState(); renderCatalog(); }
        else if (viewName === 'product' && options.productId) { renderProductDetails(options.productId); }
        else if (viewName === 'cart') { document.title = 'Shopping Bag | FashionHub'; renderCart(); }
        else if (viewName === 'wishlist') { document.title = 'My Wishlist | FashionHub'; renderWishlist(); }
        else if (viewName === 'checkout') {
            if (state.cart.length === 0) { showToast('Your shopping bag is empty!', 'error'); navigateTo('catalog'); return; }
            document.title = 'Secure Checkout | FashionHub';
            renderCheckout();
        } else if (viewName === 'account') { document.title = 'My Account | FashionHub'; renderAccountView(options.tab || 'orders'); }
        else if (viewName === 'orders') { navigateTo('account', { tab: 'orders' }); return; }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

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
                    <div class="rating-pill"><span>${product.rating.toFixed(1)}</span><i class="fa-solid fa-star"></i><span>(${product.reviews})</span></div>
                </div>
                <div class="product-info">
                    <span class="product-brand">${product.brand}</span>
                    <h3 class="product-title" data-open-product="${product.id}">${product.name}</h3>
                    <div class="product-price-row">
                        <span class="price-current">${formatINR(product.discountedPrice)}</span>
                        <span class="price-original">${formatINR(product.originalPrice)}</span>
                        <span class="price-off">(${product.discount}% OFF)</span>
                    </div>
                    <button type="button" class="card-action-btn" data-open-product="${product.id}" ${!product.inStock ? 'disabled' : ''}>
                        ${product.inStock ? 'SELECT SIZE & VIEW' : 'OUT OF STOCK'}
                    </button>
                </div>
            </article>
        `;
    }

    function renderHomeSections() {
        const trendingGrid = document.getElementById('homeTrendingGrid');
        const newGrid = document.getElementById('homeNewArrivalsGrid');
        const bestsellersGrid = document.getElementById('homeBestsellersGrid');
        if (trendingGrid) trendingGrid.innerHTML = PRODUCTS.filter(p => p.trending).slice(0, 8).map(createProductCardHTML).join('');
        if (newGrid) newGrid.innerHTML = PRODUCTS.filter(p => p.isNew).slice(0, 8).map(createProductCardHTML).join('');
        if (bestsellersGrid) bestsellersGrid.innerHTML = PRODUCTS.filter(p => p.bestseller).slice(0, 8).map(createProductCardHTML).join('');
    }

     function handleSearchInput(query, suggestionContainerId, clearBtnId) {
        const trimmed = query.trim();
        const clearBtn = document.getElementById(clearBtnId);
        const box = document.getElementById(suggestionContainerId);
        if (clearBtn) clearBtn.classList.toggle('hidden', trimmed.length === 0);
        if (!box) return;
        if (trimmed.length < 1) { box.classList.add('hidden'); return; }

        const q = trimmed.toLowerCase();
        const matches = PRODUCTS.filter(p =>
            p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) ||
            p.subCategory.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) ||
            p.colors.some(c => c.toLowerCase().includes(q))
        ).slice(0, 6);

        if (matches.length === 0) {
            box.innerHTML = `<div class="suggestion-item"><span>No direct matches for "<strong>${escapeHTML(trimmed)}</strong>". Press Enter to search catalog.</span></div>`;
        } else {
            box.innerHTML = matches.map(p => `
                <div class="suggestion-item" data-open-product="${p.id}">
                    <img src="${p.images[0]}" alt="${p.name}" onerror="this.src='${FALLBACK_IMAGE}'">
                    <div class="suggestion-meta">
                        <h5>${p.name}</h5>
                        <span>${p.brand} • ${p.category} • <strong>${formatINR(p.discountedPrice)}</strong></span>
                    </div>
                </div>
            `).join('');
        }
        box.classList.remove('hidden');
    }

    function executeSearch(query) { state.filters.search = query.trim(); state.filters.quickTag = ''; navigateTo('catalog'); }
    function hideSearchSuggestions() { document.getElementById('searchSuggestions')?.classList.add('hidden'); document.getElementById('mobileSearchSuggestions')?.classList.add('hidden'); }
    function escapeHTML(str) { return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m])); }

    function getFilteredProducts() {
        const f = state.filters;
        let list = [...PRODUCTS];
        if (f.search) {
            const tokens = f.search.toLowerCase().split(/\s+/).filter(Boolean);
            list = list.filter(p => tokens.every(tok => `${p.name} ${p.brand} ${p.category} ${p.subCategory} ${p.description} ${p.colors.join(' ')}`.toLowerCase().includes(tok)));
        }
        if (f.categories.length > 0) list = list.filter(p => f.categories.includes(p.category));
        if (f.subCategory) { const sub = f.subCategory.toLowerCase(); list = list.filter(p => p.subCategory.toLowerCase().includes(sub) || p.name.toLowerCase().includes(sub)); }
        if (f.quickTag === 'new') list = list.filter(p => p.isNew);
        if (f.quickTag === 'offers') list = list.filter(p => p.discount >= 40);
        if (f.quickTag === 'bestsellers') list = list.filter(p => p.bestseller);
        if (f.pricePreset !== 'all') { const [min, max] = f.pricePreset.split('-').map(Number); list = list.filter(p => p.discountedPrice >= min && p.discountedPrice <= max); }
        if (f.maxPrice < 7000) list = list.filter(p => p.discountedPrice <= f.maxPrice);
        if (f.brands.length > 0) list = list.filter(p => f.brands.includes(p.brand));
        if (f.minRating > 0) list = list.filter(p => p.rating >= f.minRating);
        if (f.minDiscount > 0) list = list.filter(p => p.discount >= f.minDiscount);
        if (f.sizes.length > 0) list = list.filter(p => f.sizes.some(sz => p.sizes.includes(sz)));
        if (f.colors.length > 0) list = list.filter(p => f.colors.some(col => p.colors.includes(col)));
        if (f.stock === 'in_stock') list = list.filter(p => p.inStock);
        if (f.stock === 'out_of_stock') list = list.filter(p => !p.inStock);

        switch (state.sortBy) {
            case 'popularity': list.sort((a, b) => b.reviews - a.reviews); break;
            case 'price-asc': list.sort((a, b) => a.discountedPrice - b.discountedPrice); break;
            case 'price-desc': list.sort((a, b) => b.discountedPrice - a.discountedPrice); break;
            case 'rating': list.sort((a, b) => b.rating - a.rating); break;
            case 'newest': list.sort((a, b) => Number(b.isNew) - Number(a.isNew)); break;
            case 'discount': list.sort((a, b) => b.discount - a.discount); break;
            default: list.sort((a, b) => (Number(b.trending) + Number(b.bestseller)) - (Number(a.trending) + Number(a.bestseller)));
        }
        return list;
    }

    function renderCatalog() {
        const results = getFilteredProducts();
        const grid = document.getElementById('catalogProductGrid');
        const countEl = document.getElementById('catalogResultCount');
        const noResults = document.getElementById('noResultsBox');
        const titleEl = document.getElementById('catalogPageTitle');
        const crumbEl = document.getElementById('catalogBreadcrumb');

        let pageHeading = 'All Fashion Collections';
        if (state.filters.search) pageHeading = `Search Results for "${state.filters.search}"`;
        else if (state.filters.subCategory) pageHeading = state.filters.subCategory;
        else if (state.filters.categories.length === 1) pageHeading = `${state.filters.categories[0]}'s Collection`;
        else if (state.filters.quickTag === 'new') pageHeading = 'New Arrivals';
        else if (state.filters.quickTag === 'offers') pageHeading = 'Special Offers & Deals';

        if (titleEl) titleEl.textContent = pageHeading;
        if (crumbEl) crumbEl.textContent = pageHeading;
        if (countEl) countEl.textContent = results.length;
        renderActiveFilterTags();

        if (results.length === 0) { grid.innerHTML = ''; noResults.classList.remove('hidden'); }
        else { noResults.classList.add('hidden'); grid.innerHTML = results.map(createProductCardHTML).join(''); }
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

        if (tags.length === 0) { bar.classList.add('hidden'); return; }
        bar.classList.remove('hidden');
        container.innerHTML = tags.map(t => `<span class="filter-tag-chip">${escapeHTML(t.label)} <button type="button" data-remove-tag="${t.type}" data-tag-val="${t.val || ''}">✕</button></span>`).join('');
    }

    function resetAllFilters() {
        state.filters = { search: '', categories: [], subCategory: '', pricePreset: 'all', maxPrice: 7000, brands: [], minRating: 0, minDiscount: 0, sizes: [], colors: [], stock: 'all', quickTag: '' };
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
        document.querySelectorAll('#filterSizeList .size-chip').forEach(btn => btn.classList.toggle('active', f.sizes.includes(btn.dataset.size)));
        document.querySelectorAll('#filterColorList .color-chip').forEach(btn => btn.classList.toggle('active', f.colors.includes(btn.dataset.color)));
    }

    function renderProductDetails(productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) { navigateTo('catalog'); return; }
        state.selectedProductId = product.id;
        state.pdpSelectedSize = null;
        state.pdpSelectedColor = product.colors[0] || 'Standard';
        state.pdpQuantity = 1;
        document.title = `${product.name} | FashionHub`;
        const container = document.getElementById('pdpContent');
        const isWishlisted = state.wishlist.includes(product.id);
        const deliveryDate = getEstimatedDeliveryDate(4);

        container.innerHTML = `
            <nav class="breadcrumb"><a href="#home" data-route="home">Home</a><span>/</span><a href="#catalog" data-filter-cat="${product.category}">${product.category}</a><span>/</span><span>${product.name}</span></nav>
            <div class="pdp-grid">
                <div class="pdp-gallery">
                    <div class="pdp-thumbs">${product.images.map((img, idx) => `<button type="button" class="pdp-thumb-btn ${idx === 0 ? 'active' : ''}" data-pdp-thumb="${img}"><img src="${img}" alt="${product.name}" onerror="this.src='${FALLBACK_IMAGE}'"></button>`).join('')}</div>
                    <div class="pdp-main-image"><img id="pdpMainImg" src="${product.images[0]}" alt="${product.name}" onerror="this.src='${FALLBACK_IMAGE}'"></div>
                </div>
                <div class="pdp-details-col">
                    <span class="product-brand">${product.brand}</span>
                    <h1>${product.name}</h1>
                    <div class="pdp-rating-row">
                        <span class="rating-pill" style="position:static;border:1px solid var(--border-color)">${product.rating.toFixed(1)} <i class="fa-solid fa-star"></i></span>
                        <span>${product.reviews} Verified Buyer Ratings</span><span>•</span>
                        <span style="color:${product.inStock ? 'var(--success)' : 'var(--danger)'};font-weight:700;">${product.inStock ? 'In Stock & Ready to Ship' : 'Currently Out of Stock'}</span>
                    </div>
                    <div class="pdp-price-box">
                        <span class="pdp-price-current">${formatINR(product.discountedPrice)}</span>
                        <span class="pdp-price-mrp">${formatINR(product.originalPrice)}</span>
                        <span class="pdp-price-off">(${product.discount}% OFF)</span>
                    </div>
                    <p class="tax-note">Inclusive of all taxes</p>
                    <div class="pdp-option-block">
                        <div class="pdp-option-head"><span>SELECT COLOR: <strong id="pdpSelectedColorText">${state.pdpSelectedColor}</strong></span></div>
                        <div class="pdp-color-list">${product.colors.map((c, idx) => `<button type="button" class="pdp-color-btn ${idx === 0 ? 'selected' : ''}" data-pdp-color="${c}">${c}</button>`).join('')}</div>
                    </div>
                    <div class="pdp-option-block">
                        <div class="pdp-option-head"><span>SELECT SIZE <span class="text-accent">*</span></span><button type="button" class="btn-link" data-info-modal="Size Guide"><i class="fa-solid fa-ruler-horizontal"></i> Size Guide</button></div>
                        <div class="pdp-size-list" id="pdpSizeButtons">${product.sizes.map(sz => `<button type="button" class="pdp-size-btn" data-pdp-size="${sz}">${sz}</button>`).join('')}</div>
                        <small class="field-error" id="pdpSizeError"></small>
                    </div>
                    <div class="pdp-option-block">
                        <div class="pdp-option-head"><span>QUANTITY</span></div>
                        <div class="qty-stepper"><button type="button" id="pdpQtyDec">−</button><span id="pdpQtyVal">1</span><button type="button" id="pdpQtyInc">+</button></div>
                    </div>
                    <div class="pdp-cta-group">
                        <button type="button" class="btn btn-primary btn-lg" id="pdpAddToCartBtn" ${!product.inStock ? 'disabled' : ''}><i class="fa-solid fa-bag-shopping"></i> ADD TO CART</button>
                        <button type="button" class="btn btn-dark btn-lg" id="pdpBuyNowBtn" ${!product.inStock ? 'disabled' : ''}>BUY NOW</button>
                        <button type="button" class="btn btn-outline btn-lg" data-toggle-wishlist="${product.id}"><i class="${isWishlisted ? 'fa-solid text-accent' : 'fa-regular'} fa-heart"></i></button>
                    </div>
                    <div class="pdp-specs-box">
                        <div class="spec-row"><strong>Product Description</strong><p>${product.description}</p></div>
                        <div class="spec-row"><strong>Material & Fabric</strong><p>${product.material}</p></div>
                        <div class="spec-row"><strong>Care Instructions</strong><p>${product.care}</p></div>
                        <div class="spec-row"><strong>Delivery & Returns</strong><p><i class="fa-solid fa-truck"></i> Estimated delivery by <strong>${deliveryDate}</strong> • 14-day easy returns.</p></div>
                    </div>
                </div>
            </div>
        `;
          }

          function addToCart(productId, size, color, qty = 1) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product || !product.inStock) return false;
        if (!size) { showToast('Please select a size before adding to bag.', 'error'); return false; }
        const existingIndex = state.cart.findIndex(item => item.productId === productId && item.size === size && item.color === color);
        if (existingIndex > -1) state.cart[existingIndex].quantity += qty;
        else state.cart.push({ productId, size, color: color || product.colors[0] || 'Standard', quantity: qty });
        saveStorage(STORAGE_KEYS.CART, state.cart);
        updateHeaderBadges();
        showToast(`${product.name} (Size ${size}) added to bag!`);
        return true;
    }

    function calculateCartTotals() {
        let totalMrp = 0, discountedSubtotal = 0, totalItems = 0;
        state.cart.forEach(item => {
            const p = PRODUCTS.find(prod => prod.id === item.productId);
            if (p) { totalMrp += p.originalPrice * item.quantity; discountedSubtotal += p.discountedPrice * item.quantity; totalItems += item.quantity; }
        });
        const totalDiscount = totalMrp - discountedSubtotal;
        const deliveryFee = discountedSubtotal === 0 ? 0 : (discountedSubtotal >= 999 ? 0 : 49);
        const platformFee = discountedSubtotal === 0 ? 0 : 10;
        const tax = Math.round(discountedSubtotal * 0.05);
        return { totalItems, totalMrp, discountedSubtotal, totalDiscount, deliveryFee, platformFee, tax, finalTotal: discountedSubtotal + deliveryFee + platformFee + tax };
    }

    function renderCart() {
        const itemsContainer = document.getElementById('cartItemsContainer');
        const summaryContainer = document.getElementById('cartSummaryContainer');
        const countHeader = document.getElementById('cartPageCount');
        const totals = calculateCartTotals();
        if (countHeader) countHeader.textContent = `(${totals.totalItems} ${totals.totalItems === 1 ? 'item' : 'items'})`;

        if (state.cart.length === 0) {
            itemsContainer.innerHTML = `<div class="empty-state-box"><i class="fa-solid fa-bag-shopping"></i><h3>Your shopping bag is empty</h3><p>Looks like you haven't added any styles to your bag yet.</p><button class="btn btn-primary" data-route="catalog">EXPLORE COLLECTIONS</button></div>`;
            summaryContainer.classList.add('hidden');
            return;
        }
        summaryContainer.classList.remove('hidden');
        itemsContainer.innerHTML = state.cart.map((item, index) => {
            const p = PRODUCTS.find(prod => prod.id === item.productId);
            if (!p) return '';
            return `
                <div class="cart-item-card">
                    <img src="${p.images[0]}" alt="${p.name}" data-open-product="${p.id}" onerror="this.src='${FALLBACK_IMAGE}'">
                    <div>
                        <div class="cart-item-top">
                            <div><span class="product-brand">${p.brand}</span><h4 class="product-title" data-open-product="${p.id}">${p.name}</h4></div>
                            <button type="button" class="icon-btn" data-cart-remove="${index}"><i class="fa-regular fa-trash-can"></i></button>
                        </div>
                        <div class="cart-item-meta"><span>Size: <strong>${item.size}</strong></span><span>Color: <strong>${item.color}</strong></span><span>Unit Price: <strong>${formatINR(p.discountedPrice)}</strong></span></div>
                        <div class="cart-item-controls">
                            <div class="qty-stepper"><button type="button" data-cart-dec="${index}">−</button><span>${item.quantity}</span><button type="button" data-cart-inc="${index}">+</button></div>
                            <div class="product-price-row" style="margin:0"><span class="price-current">${formatINR(p.discountedPrice * item.quantity)}</span><span class="price-original">${formatINR(p.originalPrice * item.quantity)}</span><span class="price-off">${p.discount}% OFF</span></div>
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

    function toggleWishlist(productId) {
        const idx = state.wishlist.indexOf(productId);
        const product = PRODUCTS.find(p => p.id === productId);
        if (idx > -1) { state.wishlist.splice(idx, 1); showToast(`Removed ${product?.name || 'item'} from wishlist`); }
        else { state.wishlist.push(productId); showToast(`Saved ${product?.name || 'item'} to wishlist!`); }
        saveStorage(STORAGE_KEYS.WISHLIST, state.wishlist);
        updateHeaderBadges();
        if (state.currentView === 'home') renderHomeSections();
        if (state.currentView === 'catalog') renderCatalog();
        if (state.currentView === 'wishlist') renderWishlist();
        if (state.currentView === 'product') renderProductDetails(productId);
    }

    function renderWishlist() {
        const grid = document.getElementById('wishlistGrid');
        const emptyBox = document.getElementById('emptyWishlistBox');
        const countEl = document.getElementById('wishlistPageCount');
        const wishProducts = PRODUCTS.filter(p => state.wishlist.includes(p.id));
        if (countEl) countEl.textContent = `(${wishProducts.length} ${wishProducts.length === 1 ? 'item' : 'items'})`;
        if (wishProducts.length === 0) { grid.innerHTML = ''; emptyBox.classList.remove('hidden'); return; }
        emptyBox.classList.add('hidden');
        grid.innerHTML = wishProducts.map(p => `
            <article class="product-card">
                <div class="product-thumb" data-open-product="${p.id}">
                    <span class="discount-badge" style="position:absolute;top:12px;left:12px;z-index:2">${p.discount}% OFF</span>
                    <button type="button" class="wishlist-heart-btn active" data-toggle-wishlist="${p.id}"><i class="fa-solid fa-xmark"></i></button>
                    <img src="${p.images[0]}" alt="${p.name}" loading="lazy" onerror="this.src='${FALLBACK_IMAGE}'">
                </div>
                <div class="product-info">
                    <span class="product-brand">${p.brand}</span>
                    <h3 class="product-title" data-open-product="${p.id}">${p.name}</h3>
                    <div class="product-price-row"><span class="price-current">${formatINR(p.discountedPrice)}</span><span class="price-original">${formatINR(p.originalPrice)}</span></div>
                    <button type="button" class="btn btn-primary btn-sm btn-full" data-move-to-cart="${p.id}" ${!p.inStock ? 'disabled' : ''}>${p.inStock ? 'MOVE TO BAG' : 'OUT OF STOCK'}</button>
                </div>
            </article>
        `).join('');
    }

    function renderCheckout() {
        document.getElementById('checkoutMainLayout').classList.remove('hidden');
        document.getElementById('orderConfirmationBox').classList.add('hidden');
        if (state.user) {
            if (!document.getElementById('chkFullName').value) document.getElementById('chkFullName').value = state.user.name || '';
            if (!document.getElementById('chkEmail').value) document.getElementById('chkEmail').value = state.user.email || '';
            if (!document.getElementById('chkMobile').value && state.user.phone) document.getElementById('chkMobile').value = state.user.phone;
        }
        if (state.addresses.length > 0) {
            const a = state.addresses[0];
            if (!document.getElementById('chkHouse').value) document.getElementById('chkHouse').value = a.house || '';
            if (!document.getElementById('chkStreet').value) document.getElementById('chkStreet').value = a.street || '';
            if (!document.getElementById('chkLandmark').value) document.getElementById('chkLandmark').value = a.landmark || '';
            if (!document.getElementById('chkPin').value) document.getElementById('chkPin').value = a.pin || '';
            if (!document.getElementById('chkCity').value) document.getElementById('chkCity').value = a.city || '';
            if (!document.getElementById('chkState').value) document.getElementById('chkState').value = a.state || '';
        }
        const totals = calculateCartTotals();
        document.getElementById('checkoutItemsList').innerHTML = state.cart.map(item => {
            const p = PRODUCTS.find(prod => prod.id === item.productId);
            return p ? `<div class="chk-mini-item"><img src="${p.images[0]}" alt="${p.name}" onerror="this.src='${FALLBACK_IMAGE}'"><div class="chk-mini-info"><h5>${p.name}</h5><p>Size: ${item.size} • Color: ${item.color} • Qty: ${item.quantity}</p><strong>${formatINR(p.discountedPrice * item.quantity)}</strong></div></div>` : '';
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
        return `FH${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}${String(state.orders.length + 1).padStart(4, '0')}`;
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
        if (!/^[6-9]\d{9}$/.test(mobile)) { document.getElementById('errMobile').textContent = 'Enter a valid 10-digit mobile number.'; isValid = false; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { document.getElementById('errEmail').textContent = 'Enter a valid email address.'; isValid = false; }
        if (!house) { document.getElementById('errHouse').textContent = 'House / Flat number is required.'; isValid = false; }
        if (!street) { document.getElementById('errStreet').textContent = 'Street / Locality is required.'; isValid = false; }
        if (!/^\d{6}$/.test(pin)) { document.getElementById('errPin').textContent = 'Enter a valid 6-digit PIN code.'; isValid = false; }
        if (!city) { document.getElementById('errCity').textContent = 'City is required.'; isValid = false; }
        if (!stateVal) { document.getElementById('errState').textContent = 'Please select your state.'; isValid = false; }
        if (!isValid) { showToast('Please fix the highlighted checkout fields.', 'error'); return; }

        const totals = calculateCartTotals();
        const orderId = generateOrderId();
        const orderDate = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
        const estDelivery = getEstimatedDeliveryDate(4);
        const orderedItems = state.cart.map(item => {
            const p = PRODUCTS.find(prod => prod.id === item.productId);
            return { productId: item.productId, name: p ? p.name : 'Product', brand: p ? p.brand : 'FashionHub', image: p ? p.images[0] : FALLBACK_IMAGE, size: item.size, color: item.color, quantity: item.quantity, price: p ? p.discountedPrice : 0 };
        });

        const addressObj = { fullName, mobile, email, house, street, landmark, city, state: stateVal, pin };
        state.orders.unshift({ orderId, date: orderDate, estimatedDelivery: estDelivery, customer: { fullName, email, mobile }, address: addressObj, items: orderedItems, totals, paymentMethod, status: 'Order Placed', statusIndex: 0 });
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
            <div class="confirm-hero"><div class="confirm-check-circle"><i class="fa-solid fa-check"></i></div><h2>YOUR ORDER HAS BEEN PLACED!</h2><p>Thank you for shopping with FashionHub, <strong>${escapeHTML(fullName)}</strong>.</p><div class="confirm-order-id">Order ID: ${orderId}</div></div>
            <div class="form-grid-2" style="margin-bottom:24px;">
                <div class="checkout-card" style="margin:0"><h4><i class="fa-solid fa-location-dot"></i> Delivery Address</h4><p style="font-size:0.88rem;margin-top:8px;color:var(--text-secondary);"><strong>${escapeHTML(fullName)}</strong> (${mobile})<br>${escapeHTML(house)}, ${escapeHTML(street)} ${landmark ? '(' + escapeHTML(landmark) + ')' : ''}<br>${escapeHTML(city)}, ${escapeHTML(stateVal)} - ${pin}</p></div>
                <div class="checkout-card" style="margin:0"><h4><i class="fa-solid fa-truck-fast"></i> Delivery & Payment</h4><p style="font-size:0.88rem;margin-top:8px;color:var(--text-secondary);">Estimated Delivery: <strong>${estDelivery}</strong><br>Payment Method: <strong>${paymentMethod}</strong><br>Final Bill Paid: <strong style="color:var(--text-primary)">${formatINR(totals.finalTotal)}</strong></p></div>
            </div>
            <h4 style="margin-bottom:12px;">Ordered Items (${orderedItems.length})</h4>
            <div style="margin-bottom:24px;">${orderedItems.map(it => `<div class="chk-mini-item"><img src="${it.image}" alt="${it.name}" onerror="this.src='${FALLBACK_IMAGE}'"><div class="chk-mini-info"><h5>${it.name}</h5><p>Size: ${it.size} • Color: ${it.color} • Qty: ${it.quantity}</p><strong>${formatINR(it.price * it.quantity)}</strong></div></div>`).join('')}</div>
            <div style="display:flex;gap:14px;flex-wrap:wrap;justify-content:center;"><button type="button" class="btn btn-primary" data-route="orders">VIEW MY ORDERS</button><button type="button" class="btn btn-outline" data-route="home">CONTINUE SHOPPING</button></div>
        `;
        showToast(`Order ${orderId} confirmed!`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const ORDER_STATUS_STEPS = ['Order Placed', 'Confirmed', 'Shipped', 'Out for Delivery', 'Delivered'];

    function renderAccountView(activeTab = 'orders') {
        const authWrapper = document.getElementById('authFormsWrapper');
        const dashboard = document.getElementById('accountDashboard');
        if (!state.user && state.orders.length === 0) { authWrapper.classList.remove('hidden'); dashboard.classList.add('hidden'); return; }
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
        switchDashboardTab(activeTab);
    }

    function switchDashboardTab(tabName) {
        document.querySelectorAll('.dash-nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.dashTab === tabName));
        document.querySelectorAll('.dash-panel').forEach(panel => panel.classList.toggle('hidden', panel.id !== `dash-${tabName}`));
        if (tabName === 'orders') renderOrdersList();
        if (tabName === 'addresses') renderSavedAddresses();
    }

    function renderOrdersList() {
        const container = document.getElementById('ordersListContainer');
        if (!container) return;
        if (state.orders.length === 0) {
            container.innerHTML = `<div class="empty-state-box"><i class="fa-solid fa-box-open"></i><h3>No orders yet</h3><p>When you place an order on FashionHub, you can track its live status here.</p><button class="btn btn-primary" data-route="catalog">Start Shopping</button></div>`;
            return;
        }
        container.innerHTML = state.orders.map((order, idx) => {
            const activeStep = order.statusIndex || 0;
            return `
                <div class="order-history-card">
                    <div class="order-card-head">
                        <div><strong>Order #${order.orderId}</strong><p style="font-size:0.8rem;color:var(--text-secondary);">Placed on ${order.date} • Est. Delivery: ${order.estimatedDelivery}</p></div>
                        <div style="text-align:right;"><span class="order-status-pill">${ORDER_STATUS_STEPS[activeStep]}</span><p style="font-weight:700;margin-top:6px;">Total: ${formatINR(order.totals.finalTotal)} (${order.paymentMethod})</p></div>
                    </div>
                    <div class="order-tracker-bar">${ORDER_STATUS_STEPS.map((stepLabel, sIdx) => `<div class="tracker-step ${sIdx <= activeStep ? 'done' : ''}"><i class="fa-solid ${sIdx <= activeStep ? 'fa-circle-check' : 'fa-circle'}"></i><span>${stepLabel}</span></div>`).join('')}</div>
                    <div style="margin-bottom:12px;">${order.items.map(it => `<div class="chk-mini-item"><img src="${it.image}" alt="${it.name}" onerror="this.src='${FALLBACK_IMAGE}'"><div class="chk-mini-info"><h5>${it.name}</h5><p>Size: ${it.size} • Color: ${it.color} • Qty: ${it.quantity} • ${formatINR(it.price * it.quantity)}</p></div></div>`).join('')}</div>
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
        if (state.addresses.length === 0) { container.innerHTML = `<p style="color:var(--text-secondary);">No saved addresses yet.</p>`; return; }
        container.innerHTML = state.addresses.map(addr => `<div class="order-history-card"><strong>${escapeHTML(addr.fullName)}</strong><p style="font-size:0.88rem;color:var(--text-secondary);margin-top:6px;">${escapeHTML(addr.house)}, ${escapeHTML(addr.street)}<br>${escapeHTML(addr.city)}, ${escapeHTML(addr.state)} - ${addr.pin}<br>Mobile: ${addr.mobile}</p></div>`).join('');
    }

    function updateHeaderBadges() {
        const cartCountEl = document.getElementById('cartCount');
        const wishlistCountEl = document.getElementById('wishlistCount');
        const accountLabelEl = document.getElementById('navAccountLabel');
        const drawerNameEl = document.getElementById('drawerUserName');
        const totalBagQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCountEl) cartCountEl.textContent = totalBagQty;
        if (wishlistCountEl) wishlistCountEl.textContent = state.wishlist.length;
        if (state.user) {
            if (accountLabelEl) accountLabelEl.textContent = state.user.name.split(' ')[0];
            if (drawerNameEl) drawerNameEl.textContent = `Hi, ${state.user.name}`;
        } else {
            if (accountLabelEl) accountLabelEl.textContent = 'Account';
            if (drawerNameEl) drawerNameEl.textContent = 'Welcome, Guest';
        }
    }

    function openMobileDrawer() { document.getElementById('mobileDrawer')?.classList.add('open'); document.getElementById('mobileDrawerBackdrop')?.classList.remove('hidden'); }
    function closeMobileDrawer() { document.getElementById('mobileDrawer')?.classList.remove('open'); document.getElementById('mobileDrawerBackdrop')?.classList.add('hidden'); }
    function openMobileFilter() { document.getElementById('filterSidebar')?.classList.add('open'); document.getElementById('filterBackdrop')?.classList.remove('hidden'); }
    function closeMobileFilter() { document.getElementById('filterSidebar')?.classList.remove('open'); document.getElementById('filterBackdrop')?.classList.add('hidden'); }

    function openInfoModal(topic) {
        const modal = document.getElementById('globalModalBackdrop');
        const titleEl = document.getElementById('globalModalTitle');
        const bodyEl = document.getElementById('globalModalBody');
        if (!modal || !titleEl || !bodyEl) return;
        titleEl.textContent = topic;
        const contentMap = {
            'Size Guide': `<table class="size-table"><thead><tr><th>Size</th><th>Chest (in)</th><th>Waist (in)</th><th>Hip (in)</th></tr></thead><tbody><tr><td>XS</td><td>34–36</td><td>28–30</td><td>35–37</td></tr><tr><td>S</td><td>36–38</td><td>30–32</td><td>37–39</td></tr><tr><td>M</td><td>38–40</td><td>32–34</td><td>39–41</td></tr><tr><td>L</td><td>40–42</td><td>34–36</td><td>41–43</td></tr><tr><td>XL</td><td>42–44</td><td>36–38</td><td>43–45</td></tr><tr><td>XXL</td><td>44–46</td><td>38–40</td><td>45–47</td></tr></tbody></table>`,
            'About FashionHub': `<p><strong>FashionHub</strong> is a contemporary fashion e-commerce showcase crafted for effortless everyday luxury across India.</p>`,
            'Return Policy': `<p>We offer a <strong>14-Day Hassle-Free Return & Exchange Policy</strong> on unworn items with original tags.</p>`,
            'Shipping Information': `<p><strong>FREE Express Delivery</strong> on orders above ₹999. Standard delivery ₹49 below ₹999.</p>`,
            'Privacy Policy': `<p>All cart, wishlist, and demo order data stays locally in your browser via localStorage.</p>`,
            'Terms & Conditions': `<p>Demo commercial storefront for FashionHub.</p>`,
            'FAQ': `<p><strong>How do I track orders?</strong> Open Account → My Orders to view simulated live tracking.</p>`,
            'Contact Us': `<p>Email: care@fashionhub-demo.in • Helpline: 1800-123-4567</p>`
        };
        bodyEl.innerHTML = contentMap[topic] || `<p>Follow FashionHub on <strong>${topic}</strong>.</p>`;
        modal.classList.remove('hidden');
    }

    function initEventListeners() {
        window.addEventListener('scroll', () => document.getElementById('siteHeader')?.classList.toggle('scrolled', window.scrollY > 12), { passive: true });
        document.getElementById('mobileMenuBtn')?.addEventListener('click', openMobileDrawer);
        document.getElementById('closeMobileDrawer')?.addEventListener('click', closeMobileDrawer);
        document.getElementById('mobileDrawerBackdrop')?.addEventListener('click', closeMobileDrawer);
        document.querySelectorAll('.drawer-acc-btn').forEach(btn => btn.addEventListener('click', () => btn.parentElement.classList.toggle('open')));
        document.getElementById('mobileSearchTrigger')?.addEventListener('click', () => {
            const bar = document.getElementById('mobileSearchBar');
            bar.classList.toggle('hidden');
            if (!bar.classList.contains('hidden')) document.getElementById('mobileSearchInput')?.focus();
        });

        const searchInput = document.getElementById('searchInput');
        searchInput?.addEventListener('input', e => handleSearchInput(e.target.value, 'searchSuggestions', 'clearSearchBtn'));
        document.getElementById('searchForm')?.addEventListener('submit', e => { e.preventDefault(); executeSearch(searchInput.value); });
        document.getElementById('clearSearchBtn')?.addEventListener('click', () => {
            searchInput.value = ''; handleSearchInput('', 'searchSuggestions', 'clearSearchBtn');
            if (state.currentView === 'catalog') { state.filters.search = ''; renderCatalog(); }
        });

        const mobileSearchInput = document.getElementById('mobileSearchInput');
        mobileSearchInput?.addEventListener('input', e => handleSearchInput(e.target.value, 'mobileSearchSuggestions', 'mobileClearSearchBtn'));
        document.getElementById('mobileSearchForm')?.addEventListener('submit', e => { e.preventDefault(); executeSearch(mobileSearchInput.value); document.getElementById('mobileSearchBar')?.classList.add('hidden'); });
        document.getElementById('mobileClearSearchBtn')?.addEventListener('click', () => { mobileSearchInput.value = ''; handleSearchInput('', 'mobileSearchSuggestions', 'mobileClearSearchBtn'); });
        document.addEventListener('click', e => { if (!e.target.closest('.search-wrapper') && !e.target.closest('.mobile-search-bar')) hideSearchSuggestions(); });

        document.querySelectorAll('input[name="category"]').forEach(cb => cb.addEventListener('change', () => { state.filters.categories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(el => el.value); state.filters.subCategory = ''; renderCatalog(); }));
        document.querySelectorAll('input[name="brand"]').forEach(cb => cb.addEventListener('change', () => { state.filters.brands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(el => el.value); renderCatalog(); }));
        document.querySelectorAll('input[name="pricePreset"]').forEach(r => r.addEventListener('change', e => { state.filters.pricePreset = e.target.value; renderCatalog(); }));
        document.getElementById('priceRangeSlider')?.addEventListener('input', e => { state.filters.maxPrice = Number(e.target.value); document.getElementById('maxPriceLabel').textContent = formatINR(state.filters.maxPrice); renderCatalog(); });
        document.querySelectorAll('input[name="rating"]').forEach(r => r.addEventListener('change', e => { state.filters.minRating = Number(e.target.value); renderCatalog(); }));
        document.querySelectorAll('input[name="discount"]').forEach(r => r.addEventListener('change', e => { state.filters.minDiscount = Number(e.target.value); renderCatalog(); }));
        document.querySelectorAll('input[name="stock"]').forEach(r => r.addEventListener('change', e => { state.filters.stock = e.target.value; renderCatalog(); }));
        document.getElementById('sortSelect')?.addEventListener('change', e => { state.sortBy = e.target.value; renderCatalog(); });

        document.getElementById('openMobileFilterBtn')?.addEventListener('click', openMobileFilter);
        document.getElementById('closeMobileFilterBtn')?.addEventListener('click', closeMobileFilter);
        document.getElementById('filterBackdrop')?.addEventListener('click', closeMobileFilter);
        document.getElementById('applyMobileFiltersBtn')?.addEventListener('click', closeMobileFilter);
        document.getElementById('clearAllFiltersBtn')?.addEventListener('click', resetAllFilters);
        document.getElementById('sidebarClearBtn')?.addEventListener('click', resetAllFilters);
        document.getElementById('noResultsResetBtn')?.addEventListener('click', resetAllFilters);

        document.getElementById('proceedCheckoutBtn')?.addEventListener('click', () => navigateTo('checkout'));
        document.getElementById('checkoutForm')?.addEventListener('submit', handlePlaceOrder);
        document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => radio.addEventListener('change', e => {
            document.querySelectorAll('.payment-option-card').forEach(c => c.classList.remove('selected'));
            e.target.closest('.payment-option-card')?.classList.add('selected');
            const demoBox = document.getElementById('paymentDemoDetails');
            if (e.target.value === 'Cash on Delivery') demoBox.classList.add('hidden');
            else { demoBox.classList.remove('hidden'); document.getElementById('paymentDemoText').textContent = `${e.target.value} ready. Click Place Order to confirm.`; }
        }));

        document.getElementById('newsletterForm')?.addEventListener('submit', e => {
            e.preventDefault();
            const val = document.getElementById('newsletterEmail').value.trim();
            const feedback = document.getElementById('newsletterFeedback');
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { feedback.textContent = 'Please enter a valid email address.'; feedback.className = 'form-feedback error'; return; }
            feedback.textContent = 'Subscribed! Use code STYLE500 for ₹500 off.';
            feedback.className = 'form-feedback success';
            document.getElementById('newsletterEmail').value = '';
            showToast('Subscribed to FashionHub!');
        });

        document.querySelectorAll('.auth-tab').forEach(tab => tab.addEventListener('click', () => {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const isLogin = tab.dataset.authTab === 'login';
            document.getElementById('loginForm').classList.toggle('hidden', !isLogin);
            document.getElementById('registerForm').classList.toggle('hidden', isLogin);
            document.getElementById('forgotPasswordBox').classList.add('hidden');
        }));

        document.getElementById('loginForm')?.addEventListener('submit', e => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value.trim();
            state.user = { name: email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'FashionHub Member', email };
            saveStorage(STORAGE_KEYS.USER, state.user); updateHeaderBadges(); showToast(`Signed in as ${state.user.name}`); renderAccountView('orders');
        });

        document.getElementById('registerForm')?.addEventListener('submit', e => {
            e.preventDefault();
            if (document.getElementById('regPassword').value !== document.getElementById('regConfirmPassword').value) { showToast('Passwords do not match!', 'error'); return; }
            state.user = { name: document.getElementById('regName').value.trim(), email: document.getElementById('regEmail').value.trim() };
            saveStorage(STORAGE_KEYS.USER, state.user); updateHeaderBadges(); showToast('Account created!'); renderAccountView('orders');
        });

        document.getElementById('forgotPasswordBtn')?.addEventListener('click', () => { document.getElementById('loginForm').classList.add('hidden'); document.getElementById('forgotPasswordBox').classList.remove('hidden'); });
        document.getElementById('backToLoginBtn')?.addEventListener('click', () => { document.getElementById('forgotPasswordBox').classList.add('hidden'); document.getElementById('loginForm').classList.remove('hidden'); });
        document.getElementById('sendResetLinkBtn')?.addEventListener('click', () => { showToast('Demo password reset link sent.'); document.getElementById('forgotPasswordBox').classList.add('hidden'); document.getElementById('loginForm').classList.remove('hidden'); });
        document.getElementById('logoutBtn')?.addEventListener('click', () => { state.user = null; localStorage.removeItem(STORAGE_KEYS.USER); updateHeaderBadges(); showToast('Signed out.'); navigateTo('home'); });

        document.getElementById('profileUpdateForm')?.addEventListener('submit', e => {
            e.preventDefault();
            state.user = { ...(state.user || {}), name: document.getElementById('profName').value.trim(), email: document.getElementById('profEmail').value.trim(), phone: document.getElementById('profPhone').value.trim() };
            saveStorage(STORAGE_KEYS.USER, state.user); updateHeaderBadges(); renderAccountView('profile'); showToast('Profile updated!');
        });

        document.getElementById('closeGlobalModal')?.addEventListener('click', () => document.getElementById('globalModalBackdrop')?.classList.add('hidden'));
        document.getElementById('globalModalBackdrop')?.addEventListener('click', e => { if (e.target.id === 'globalModalBackdrop') e.target.classList.add('hidden'); });

        document.addEventListener('click', e => {
            const routeEl = e.target.closest('[data-route]');
            if (routeEl) { e.preventDefault(); navigateTo(routeEl.dataset.route); return; }
            const catEl = e.target.closest('[data-filter-cat]');
            if (catEl) { e.preventDefault(); resetAllFilters(); state.filters.categories = [catEl.dataset.filterCat]; navigateTo('catalog'); return; }
            const megaEl = e.target.closest('[data-mega-cat]');
            if (megaEl) { e.preventDefault(); resetAllFilters(); if (megaEl.dataset.megaCat) state.filters.categories = [megaEl.dataset.megaCat]; if (megaEl.dataset.megaSub) state.filters.subCategory = megaEl.dataset.megaSub; navigateTo('catalog'); return; }
            const quickEl = e.target.closest('[data-quick-filter]');
            if (quickEl) { e.preventDefault(); resetAllFilters(); state.filters.quickTag = quickEl.dataset.quickFilter; navigateTo('catalog'); return; }
            const wishBtn = e.target.closest('[data-toggle-wishlist]');
            if (wishBtn) { e.stopPropagation(); toggleWishlist(wishBtn.dataset.toggleWishlist); return; }
            const moveCartBtn = e.target.closest('[data-move-to-cart]');
            if (moveCartBtn) { const pid = moveCartBtn.dataset.moveToCart; const prod = PRODUCTS.find(p => p.id === pid); if (prod && addToCart(pid, prod.sizes.includes('M') ? 'M' : prod.sizes[0], prod.colors[0], 1)) toggleWishlist(pid); return; }
            const openProdEl = e.target.closest('[data-open-product]');
            if (openProdEl) { navigateTo('product', { productId: openProdEl.dataset.openProduct }); return; }

            const sizeChip = e.target.closest('#filterSizeList .size-chip');
            if (sizeChip) { const sz = sizeChip.dataset.size; const idx = state.filters.sizes.indexOf(sz); if (idx > -1) state.filters.sizes.splice(idx, 1); else state.filters.sizes.push(sz); sizeChip.classList.toggle('active'); renderCatalog(); return; }
            const colorChip = e.target.closest('#filterColorList .color-chip');
            if (colorChip) { const col = colorChip.dataset.color; const idx = state.filters.colors.indexOf(col); if (idx > -1) state.filters.colors.splice(idx, 1); else state.filters.colors.push(col); colorChip.classList.toggle('active'); renderCatalog(); return; }

            const remTagBtn = e.target.closest('[data-remove-tag]');
            if (remTagBtn) {
                const type = remTagBtn.dataset.removeTag, val = remTagBtn.dataset.tagVal;
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
                syncFilterInputsFromState(); renderCatalog(); return;
            }

            const pdpThumb = e.target.closest('[data-pdp-thumb]');
            if (pdpThumb) { document.querySelectorAll('.pdp-thumb-btn').forEach(b => b.classList.remove('active')); pdpThumb.classList.add('active'); const mainImg = document.getElementById('pdpMainImg'); if (mainImg) mainImg.src = pdpThumb.dataset.pdpThumb; return; }
            const pdpSizeBtn = e.target.closest('[data-pdp-size]');
            if (pdpSizeBtn) { document.querySelectorAll('.pdp-size-btn').forEach(b => b.classList.remove('selected')); pdpSizeBtn.classList.add('selected'); state.pdpSelectedSize = pdpSizeBtn.dataset.pdpSize; const errEl = document.getElementById('pdpSizeError'); if (errEl) errEl.textContent = ''; return; }
            const pdpColorBtn = e.target.closest('[data-pdp-color]');
            if (pdpColorBtn) { document.querySelectorAll('.pdp-color-btn').forEach(b => b.classList.remove('selected')); pdpColorBtn.classList.add('selected'); state.pdpSelectedColor = pdpColorBtn.dataset.pdpColor; const colText = document.getElementById('pdpSelectedColorText'); if (colText) colText.textContent = state.pdpSelectedColor; return; }
            if (e.target.id === 'pdpQtyInc') { state.pdpQuantity = Math.min(10, state.pdpQuantity + 1); document.getElementById('pdpQtyVal').textContent = state.pdpQuantity; return; }
            if (e.target.id === 'pdpQtyDec') { state.pdpQuantity = Math.max(1, state.pdpQuantity - 1); document.getElementById('pdpQtyVal').textContent = state.pdpQuantity; return; }

            if (e.target.closest('#pdpAddToCartBtn')) {
                if (!state.pdpSelectedSize) { const errEl = document.getElementById('pdpSizeError'); if (errEl) errEl.textContent = 'Please select a size first.'; showToast('Please select a size before adding to bag.', 'error'); return; }
                addToCart(state.selectedProductId, state.pdpSelectedSize, state.pdpSelectedColor, state.pdpQuantity); return;
            }
            if (e.target.closest('#pdpBuyNowBtn')) {
                if (!state.pdpSelectedSize) { const errEl = document.getElementById('pdpSizeError'); if (errEl) errEl.textContent = 'Please select a size first.'; showToast('Please select a size to proceed.', 'error'); return; }
                if (addToCart(state.selectedProductId, state.pdpSelectedSize, state.pdpSelectedColor, state.pdpQuantity)) navigateTo('checkout'); return;
            }

            const cartInc = e.target.closest('[data-cart-inc]');
            if (cartInc) { const idx = Number(cartInc.dataset.cartInc); if (state.cart[idx]) { state.cart[idx].quantity = Math.min(10, state.cart[idx].quantity + 1); saveStorage(STORAGE_KEYS.CART, state.cart); updateHeaderBadges(); renderCart(); } return; }
            const cartDec = e.target.closest('[data-cart-dec]');
            if (cartDec) { const idx = Number(cartDec.dataset.cartDec); if (state.cart[idx]) { if (state.cart[idx].quantity > 1) state.cart[idx].quantity -= 1; else state.cart.splice(idx, 1); saveStorage(STORAGE_KEYS.CART, state.cart); updateHeaderBadges(); renderCart(); } return; }
            const cartRem = e.target.closest('[data-cart-remove]');
            if (cartRem) { state.cart.splice(Number(cartRem.dataset.cartRemove), 1); saveStorage(STORAGE_KEYS.CART, state.cart); updateHeaderBadges(); renderCart(); showToast('Item removed from bag'); return; }

            const dashTabBtn = e.target.closest('[data-dash-tab]');
            if (dashTabBtn) { switchDashboardTab(dashTabBtn.dataset.dashTab); return; }
            const advanceOrderBtn = e.target.closest('[data-advance-order]');
            if (advanceOrderBtn) {
                const idx = Number(advanceOrderBtn.dataset.advanceOrder);
                if (state.orders[idx] && state.orders[idx].statusIndex < 4) { state.orders[idx].statusIndex += 1; state.orders[idx].status = ORDER_STATUS_STEPS[state.orders[idx].statusIndex]; saveStorage(STORAGE_KEYS.ORDERS, state.orders); renderOrdersList(); showToast(`Order status updated to: ${state.orders[idx].status}`); }
                return;
            }
            const infoModalBtn = e.target.closest('[data-info-modal]');
            if (infoModalBtn) { e.preventDefault(); openInfoModal(infoModalBtn.dataset.infoModal); }
        });
    }

    function bootApp() {
        updateHeaderBadges();
        renderHomeSections();
        initEventListeners();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bootApp);
    else bootApp();
})();
