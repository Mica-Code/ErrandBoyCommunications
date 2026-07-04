/* ==========================================================================
   Errandboy Communications — site data & interactions
   ========================================================================== */

const COMPANY = {
    name: "Errandboy Communications",
    email: "errandboyliaisonservices@gmail.com",
    phoneDisplay: "0813 353 2138",
    phoneIntl: "+2348133532138",
    address: "25 Lateef Adegboyega Street, Ago-Okota, Lagos State",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1494458260872!2d3.3076612748186625!3d6.502758093489496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ec297349e15%3A0xeedc809272d88f10!2s25%20Lateef%20Adegboyega%20St%2C%20Ilasamaja%2C%20Lagos%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1756254193493!5m2!1sen!2sng"
};

function waLink(message) {
    return `https://wa.me/${COMPANY.phoneIntl}?text=${encodeURIComponent(message)}`;
}

/* ---------------- Product catalogue ---------------- */
const PRODUCTS = [
    {
        id: "iphone-5s", brand: "Apple", name: "iPhone 5s", category: "budget",
        storage: "16GB", grade: "Grade B", origin: "US Used", price: 65000,
        img: "img/phones/iphone-5s.jpg",
        desc: "A reliable entry-level classic — great as a first smartphone or backup device. Fully functional, screen and body show light wear consistent with age."
    },
    {
        id: "iphone-6s", brand: "Apple", name: "iPhone 6s", category: "budget",
        storage: "32GB", grade: "Grade B+", origin: "US Used", price: 85000,
        img: "img/phones/iphone-6s.jpg",
        desc: "Compact, snappy and dependable. Battery health tested, minor cosmetic marks, fully unlocked for any network."
    },
    {
        id: "galaxy-note5", brand: "Samsung", name: "Galaxy Note 5", category: "budget",
        storage: "32GB", grade: "Grade B", origin: "US Used", price: 95000,
        img: "img/phones/galaxy-note5.jpg",
        desc: "Big-screen legacy flagship with S Pen included. Solid choice for calls, browsing and social media on a budget."
    },
    {
        id: "iphone-x", brand: "Apple", name: "iPhone X", category: "iphone",
        storage: "64GB", grade: "Grade B+", origin: "US Used", price: 185000,
        img: "img/phones/iphone-x.jpg",
        desc: "The one that started Face ID. Edge-to-edge display, dual camera, thoroughly tested battery and Face ID module."
    },
    {
        id: "iphone-12", brand: "Apple", name: "iPhone 12", category: "iphone",
        storage: "128GB", grade: "Grade A", origin: "US Used", price: 345000,
        img: "img/phones/iphone-12.jpg",
        desc: "5G ready with a bright OLED display and tough ceramic shield glass. Clean IMEI, factory unlocked, battery health 85%+."
    },
    {
        id: "samsung-s22", brand: "Samsung", name: "Galaxy S22", category: "samsung",
        storage: "128GB", grade: "Grade A", origin: "US Used", price: 340000,
        img: "img/phones/galaxy-s22.jpg",
        desc: "Compact flagship power with a stunning AMOLED screen and pro-grade cameras. Neat, tested, and ready to go."
    },
    {
        id: "iphone-13", brand: "Apple", name: "iPhone 13", category: "iphone",
        storage: "128GB", grade: "Grade A+", origin: "US Used", price: 395000,
        img: "img/phones/iphone-13.jpg",
        desc: "Cinematic mode, longer battery life and a gorgeous Super Retina XDR display. Near-flawless cosmetic condition."
    },
    {
        id: "samsung-s22-ultra", brand: "Samsung", name: "Galaxy S22 Ultra", category: "samsung",
        storage: "256GB", grade: "Grade A+", origin: "US Used", price: 520000,
        img: "img/phones/galaxy-s22-ultra.jpg",
        desc: "Built-in S Pen, 108MP camera and a massive 6.8-inch display. A true productivity and photography powerhouse."
    },
    {
        id: "samsung-s23-ultra", brand: "Samsung", name: "Galaxy S23 Ultra", category: "samsung",
        storage: "256GB", grade: "Grade A", origin: "US Used", price: 640000,
        img: "img/phones/galaxy-s23-ultra.jpg",
        desc: "Flagship-grade cameras, S Pen precision and all-day battery life in a premium cream finish."
    },
    {
        id: "iphone-14-pro", brand: "Apple", name: "iPhone 14 Pro", category: "iphone",
        storage: "256GB", grade: "Grade A", origin: "US Used", price: 780000,
        img: "img/phones/iphone-14-pro.jpg",
        desc: "Dynamic Island, Always-On display and a 48MP main camera. Immaculate glass, verified genuine parts."
    },
    {
        id: "samsung-s24-ultra", brand: "Samsung", name: "Galaxy S24 Ultra", category: "samsung",
        storage: "512GB", grade: "Grade A+", origin: "US Used", price: 810000,
        img: "img/phones/galaxy-s24-ultra.jpg",
        desc: "Titanium frame, AI-powered camera suite and a huge 512GB of storage. Barely-used condition."
    },
    {
        id: "iphone-14-pro-max", brand: "Apple", name: "iPhone 14 Pro Max", category: "iphone",
        storage: "256GB", grade: "Grade A+", origin: "US Used", price: 890000,
        img: "img/phones/iphone-14-pro-max.jpg",
        desc: "The biggest, boldest iPhone display with pro-level cameras and incredible battery life. Mint condition."
    },
    {
        id: "samsung-s25-ultra", brand: "Samsung", name: "Galaxy S25 Ultra", category: "samsung",
        storage: "512GB", grade: "Grade A+", origin: "US Used", price: 980000,
        img: "img/phones/galaxy-s25-ultra.jpg",
        desc: "Samsung's latest and greatest — flagship silicon, next-gen AI camera tools and a jaw-dropping display."
    }
];

function gradeClass(grade) {
    return grade.includes("+") ? "product-tag grade-good" : "product-tag";
}

function productCardHTML(p) {
    const msg = `Hi Errandboy Communications, I'm interested in the ${p.name} (${p.storage}, ${p.grade}) listed on your website. Please let me know the price and if it's still available.`;
    return `
    <div class="product-card reveal" data-id="${p.id}" data-category="${p.category}" data-price="${p.price}" data-name="${p.name.toLowerCase()}">
        <div class="product-media">
            <img src="${p.img}" alt="${p.name}" loading="lazy">
            <span class="${gradeClass(p.grade)}">${p.grade}</span>
        </div>
        <div class="product-body">
            <span class="product-brand">${p.brand} &middot; ${p.origin}</span>
            <h3 class="product-name">${p.name}</h3>
            <div class="product-specs"><span>${p.storage}</span><span>${p.origin}</span></div>
            <div class="product-price"><i class="bi bi-whatsapp"></i> Chat for Price</div>
            <div class="product-actions">
                <button class="btn btn-ghost btn-sm details-btn" data-id="${p.id}"><i class="bi bi-eye"></i> Details</button>
                <a class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener" href="${waLink(msg)}"><i class="bi bi-whatsapp"></i> Chat</a>
            </div>
        </div>
    </div>`;
}

function renderGrid(containerId, list) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = list.length
        ? list.map(productCardHTML).join("")
        : `<div class="empty-state" style="grid-column:1/-1"><i class="bi bi-search"></i><p>No phones match your search. Try a different keyword or filter.</p></div>`;
    attachDetailListeners();
    observeReveal();
}

/* ---------------- Modal ---------------- */
function openProductModal(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const overlay = document.getElementById("productModal");
    if (!overlay) return;
    const msg = `Hi Errandboy Communications, I'd like to buy the ${p.name} (${p.storage}, ${p.grade}, ${p.origin}). Please confirm the price and availability.`;
    overlay.innerHTML = `
        <div class="pm-box">
            <div class="pm-media">
                <img src="${p.img}" alt="${p.name}">
                <div class="pm-close" id="pmClose"><i class="bi bi-x-lg"></i></div>
            </div>
            <div class="pm-body">
                <span class="product-brand">${p.brand} &middot; ${p.origin}</span>
                <h3>${p.name}</h3>
                <p style="color:var(--muted);font-size:.92rem;">${p.desc}</p>
                <div class="pm-spec-list">
                    <div>Storage<b>${p.storage}</b></div>
                    <div>Condition<b>${p.grade}</b></div>
                    <div>Origin<b>${p.origin}</b></div>
                    <div>Warranty<b>7-Day Testing</b></div>
                </div>
                <div class="pm-price"><i class="bi bi-whatsapp"></i> Chat for Price</div>
                <div class="pm-actions">
                    <a class="btn btn-whatsapp btn-block" target="_blank" rel="noopener" href="${waLink(msg)}"><i class="bi bi-whatsapp"></i> Inquire on WhatsApp</a>
                </div>
            </div>
        </div>`;
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
    document.getElementById("pmClose").addEventListener("click", closeProductModal);
}

function closeProductModal() {
    const overlay = document.getElementById("productModal");
    if (!overlay) return;
    overlay.classList.remove("show");
    document.body.style.overflow = "";
}

function attachDetailListeners() {
    document.querySelectorAll(".details-btn").forEach(btn => {
        btn.addEventListener("click", () => openProductModal(btn.dataset.id));
    });
}

/* ---------------- Reveal on scroll ---------------- */
function observeReveal() {
    const items = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) {
        items.forEach(i => i.classList.add("in"));
        return;
    }
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in");
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    items.forEach(i => io.observe(i));
}

/* ---------------- Navbar + mobile panel ---------------- */
function initNav() {
    const nav = document.getElementById("mainNav");
    const toggle = document.getElementById("navToggle");
    const panel = document.getElementById("mobilePanel");
    const veil = document.getElementById("backdropVeil");
    const closeBtn = document.getElementById("panelClose");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 30) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
    });

    function openPanel() {
        panel.classList.add("open");
        veil.classList.add("show");
    }
    function closePanel() {
        panel.classList.remove("open");
        veil.classList.remove("show");
    }
    toggle?.addEventListener("click", openPanel);
    closeBtn?.addEventListener("click", closePanel);
    veil?.addEventListener("click", closePanel);
}

/* ---------------- Catalog page controller ---------------- */
function initCatalogPage() {
    const grid = document.getElementById("catalogGrid");
    if (!grid) return;

    const params = new URLSearchParams(window.location.search);
    let state = {
        category: params.get("cat") || "all",
        query: "",
        sort: "default"
    };

    function apply() {
        let list = PRODUCTS.slice();
        if (state.category !== "all") list = list.filter(p => p.category === state.category);
        if (state.query) {
            const q = state.query.toLowerCase();
            list = list.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
        }
        if (state.sort === "low") list.sort((a, b) => a.price - b.price);
        if (state.sort === "high") list.sort((a, b) => b.price - a.price);

        renderGrid("catalogGrid", list);
        const meta = document.getElementById("resultsMeta");
        if (meta) meta.textContent = `${list.length} phone${list.length === 1 ? "" : "s"} found`;
    }

    document.querySelectorAll(".filter-pills button").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-pills button").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            state.category = btn.dataset.filter;
            apply();
        });
        if (btn.dataset.filter === state.category) btn.classList.add("active");
    });

    const searchInput = document.getElementById("searchInput");
    searchInput?.addEventListener("input", (e) => {
        state.query = e.target.value.trim();
        apply();
    });

    const sortSelect = document.getElementById("sortSelect");
    sortSelect?.addEventListener("change", (e) => {
        state.sort = e.target.value;
        apply();
    });

    apply();
}

/* ---------------- Home page featured products ---------------- */
function initHomeFeatured() {
    const el = document.getElementById("featuredGrid");
    if (!el) return;
    const featured = PRODUCTS.filter(p => ["iphone-13", "samsung-s22-ultra", "iphone-14-pro", "samsung-s24-ultra", "iphone-14-pro-max", "samsung-s25-ultra"].includes(p.id));
    renderGrid("featuredGrid", featured);
}

/* ---------------- Contact form -> WhatsApp ---------------- */
function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = form.name.value.trim();
        const phone = form.phone.value.trim();
        const message = form.message.value.trim();
        const text = `Hi Errandboy Communications, my name is ${name} (${phone}). ${message}`;
        window.open(waLink(text), "_blank");
    });
}

/* ---------------- Boot ---------------- */
document.addEventListener("DOMContentLoaded", () => {
    initNav();
    initHomeFeatured();
    initCatalogPage();
    initContactForm();
    attachDetailListeners();
    observeReveal();

    document.querySelectorAll("[data-wa-generic]").forEach(a => {
        a.href = waLink("Hi Errandboy Communications, I'd like to ask about a phone on your website.");
    });

    document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear());
});
