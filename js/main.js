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
        id: "iphone-x", brand: "Apple", name: "iPhone X", category: "iphone",
        storage: "64GB", grade: "Grade B", origin: "US Used", price: 170000,
        img: "img/phones/iphone-x.jpg",
        desc: "The one that started Face ID. Edge-to-edge display, dual camera, thoroughly tested battery and Face ID module."
    },
    {
        id: "iphone-11", brand: "Apple", name: "iPhone 11", category: "iphone",
        storage: "128GB", grade: "Grade B+", origin: "US Used", price: 230000,
        img: "img/phones/iphone-11.jpg",
        desc: "A dependable dual-camera classic with all-day battery life. Clean IMEI, factory unlocked, battery health tested."
    },
    {
        id: "iphone-13", brand: "Apple", name: "iPhone 13", category: "iphone",
        storage: "128GB", grade: "Grade A", origin: "US Used", price: 380000,
        img: "img/phones/iphone-13.jpg",
        desc: "Cinematic mode, longer battery life and a gorgeous Super Retina XDR display. Near-flawless cosmetic condition."
    },
    {
        id: "iphone-14-pro-max", brand: "Apple", name: "iPhone 14 Pro Max", category: "iphone",
        storage: "256GB", grade: "Grade A", origin: "US Used", price: 620000,
        img: "img/phones/iphone-14-pro-max.jpg",
        desc: "The biggest, boldest iPhone display with pro-level cameras and Dynamic Island. Mint condition, verified genuine parts."
    },
    {
        id: "iphone-15-pro-max", brand: "Apple", name: "iPhone 15 Pro Max", category: "iphone",
        storage: "256GB", grade: "Grade A+", origin: "US Used", price: 850000,
        img: "img/phones/iphone-15-pro-max.jpg",
        desc: "Titanium build, A17 Pro chip and a 5x telephoto camera. Near-flawless condition, battery health 90%+."
    },
    {
        id: "iphone-16-pro-max", brand: "Apple", name: "iPhone 16 Pro Max", category: "iphone",
        storage: "256GB", grade: "Grade A+", origin: "US Used", price: 1150000,
        img: "img/phones/iphone-16-pro-max.jpg",
        desc: "Apple's latest flagship — larger display, A18 Pro chip and the most capable iPhone camera system yet."
    },
    {
        id: "galaxy-s20-ultra", brand: "Samsung", name: "Galaxy S20 Ultra", category: "samsung",
        storage: "128GB", grade: "Grade B+", origin: "US Used", price: 210000,
        img: "img/phones/galaxy-s20-ultra.jpg",
        desc: "A 2020 flagship with a massive 6.9-inch display and a 108MP camera. Tested battery and clean IMEI."
    },
    {
        id: "galaxy-note20-ultra", brand: "Samsung", name: "Galaxy Note 20 Ultra", category: "samsung",
        storage: "256GB", grade: "Grade B+", origin: "US Used", price: 250000,
        img: "img/phones/galaxy-note20-ultra.jpg",
        desc: "Built-in S Pen precision on a stunning AMOLED display. Great for productivity, notes and creative work."
    },
    {
        id: "galaxy-s22-ultra", brand: "Samsung", name: "Galaxy S22 Ultra", category: "samsung",
        storage: "256GB", grade: "Grade A", origin: "US Used", price: 460000,
        img: "img/phones/galaxy-s22-ultra.jpg",
        desc: "Built-in S Pen, 108MP camera and a massive 6.8-inch display. A true productivity and photography powerhouse."
    },
    {
        id: "galaxy-s24-ultra", brand: "Samsung", name: "Galaxy S24 Ultra", category: "samsung",
        storage: "512GB", grade: "Grade A+", origin: "US Used", price: 780000,
        img: "img/phones/galaxy-s24-ultra.jpg",
        desc: "Titanium frame, AI-powered camera suite and a huge 512GB of storage. Barely-used condition."
    },
    {
        id: "galaxy-s25-ultra", brand: "Samsung", name: "Galaxy S25 Ultra", category: "samsung",
        storage: "512GB", grade: "Grade A+", origin: "US Used", price: 960000,
        img: "img/phones/galaxy-s25-ultra.jpg",
        desc: "Samsung's latest and greatest — flagship silicon, next-gen AI camera tools and a jaw-dropping display."
    },
    {
        id: "motorola-edge-plus", brand: "Motorola", name: "Motorola Edge+", category: "other",
        storage: "256GB", grade: "Grade A", origin: "US Used", price: 300000,
        img: "img/phones/motorola-edge-plus.jpg",
        desc: "A curved-display flagship with clean near-stock Android and fast charging. Smooth performance, tested thoroughly."
    },
    {
        id: "xiaomi-13-pro", brand: "Xiaomi", name: "Xiaomi 13 Pro", category: "other",
        storage: "256GB", grade: "Grade A", origin: "US Used", price: 340000,
        img: "img/phones/xiaomi-13-pro.jpg",
        desc: "Leica-tuned cameras and a razor-sharp AMOLED display in a premium glass-and-metal body. Excellent condition."
    },
    {
        id: "pixel-8-pro", brand: "Google", name: "Google Pixel 8 Pro", category: "other",
        storage: "128GB", grade: "Grade A", origin: "US Used", price: 400000,
        img: "img/phones/pixel-8-pro.jpg",
        desc: "Google's cleanest Android experience with a best-in-class computational camera. Verified genuine, battery tested."
    },
    {
        id: "galaxy-a54", brand: "Samsung", name: "Galaxy A54", category: "budget",
        storage: "128GB", grade: "Grade B+", origin: "US Used", price: 150000,
        img: "img/phones/galaxy-a54.jpg",
        desc: "A dependable mid-ranger with a bright AMOLED screen and solid all-day battery. Great value for everyday use."
    },
    {
        id: "moto-g-power", brand: "Motorola", name: "Moto G Power", category: "budget",
        storage: "128GB", grade: "Grade B", origin: "US Used", price: 95000,
        img: "img/phones/moto-g-power.jpg",
        desc: "Known for its huge battery life and clean Android software. A solid, affordable daily driver."
    },
    {
        id: "redmi-note-12-pro", brand: "Xiaomi", name: "Redmi Note 12 Pro", category: "budget",
        storage: "128GB", grade: "Grade B+", origin: "US Used", price: 120000,
        img: "img/phones/redmi-note-12-pro.jpg",
        desc: "A budget powerhouse with a sharp AMOLED display and surprisingly capable cameras. Fully tested and unlocked."
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
    const featured = PRODUCTS.filter(p => ["iphone-13", "galaxy-s22-ultra", "iphone-14-pro-max", "galaxy-s24-ultra", "pixel-8-pro", "galaxy-s25-ultra"].includes(p.id));
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
        const budget = form.budget.value;
        const message = form.message.value.trim();
        const text = `Hi Errandboy Communications, my name is ${name} (${phone}). My budget is ${budget}. ${message}`;
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
