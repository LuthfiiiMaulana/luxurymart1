/* ============================================
   LUXMART — E-Commerce Premium
   JavaScript Application
   ============================================ */

// ============================================
// DATA
// ============================================
const PRODUCTS = [
  // FASHION
  { id:1, name:'Kemeja Linen Premium Pria', cat:'fashion', price:289000, oriPrice:450000, disc:36, rating:4.8, reviews:1240, icon:'👔', img:'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop', badge:'sale', desc:'Kemeja linen berkualitas tinggi dengan bahan lembut dan adem. Tersedia dalam berbagai warna pilihan.' },
  { id:2, name:'Dress Batik Eksklusif Wanita', cat:'fashion', price:425000, oriPrice:650000, disc:35, rating:4.9, reviews:876, icon:'👗', img:'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&h=400&fit=crop', badge:'best', desc:'Dress batik motif kontemporer yang memadukan keanggunan tradisional dengan sentuhan modern.' },
  { id:3, name:'Celana Cargo Slim Fit', cat:'fashion', price:315000, oriPrice:480000, disc:34, rating:4.7, reviews:534, icon:'👖', img:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop', badge:'sale', desc:'Celana cargo dengan desain slim fit yang nyaman dipakai sehari-hari maupun formal.' },
  { id:4, name:'Jaket Bomber Premium', cat:'fashion', price:567000, oriPrice:850000, disc:33, rating:4.8, reviews:923, icon:'🧥', img:'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop', badge:'new', desc:'Jaket bomber berbahan polyester premium dengan lapisan fleece hangat. Cocok untuk semua musim.' },
  { id:5, name:'Sneakers Limited Edition', cat:'fashion', price:899000, oriPrice:1350000, disc:33, rating:4.9, reviews:2341, icon:'👟', img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', badge:'best', desc:'Sneakers edisi terbatas dengan desain eksklusif. Nyaman dan stylish untuk aktivitas sehari-hari.' },
  { id:6, name:'Tas Kulit Wanita Elegan', cat:'fashion', price:756000, oriPrice:1200000, disc:37, rating:4.7, reviews:445, icon:'👜', img:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop', badge:'sale', desc:'Tas kulit sintetis premium dengan finishing mewah. Dilengkapi banyak kantong fungsional.' },
  { id:7, name:'Topi Baseball Branded', cat:'fashion', price:125000, oriPrice:200000, disc:38, rating:4.6, reviews:789, icon:'🧢', img:'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop', badge:'', desc:'Topi baseball dengan logo bordir eksklusif. Bahan cotton twill berkualitas tinggi.' },
  { id:8, name:'Sandal Platform Wanita', cat:'fashion', price:234000, oriPrice:380000, disc:38, rating:4.5, reviews:312, icon:'👡', img:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop', badge:'new', desc:'Sandal platform trendy dengan ketinggian 5cm. Sangat cocok untuk tampilan kasual hingga semi-formal.' },

  // ELEKTRONIK
  { id:9, name:'Smartphone 5G Ultra Series', cat:'elektronik', price:8999000, oriPrice:12000000, disc:25, rating:4.9, reviews:4521, icon:'📱', img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop', badge:'best', desc:'Smartphone flagship dengan prosesor terkencang, kamera 200MP, dan baterai 6000mAh. Garansi resmi 2 tahun.' },
  { id:10, name:'Laptop Gaming Ryzen 9', cat:'elektronik', price:15499000, oriPrice:20000000, disc:22, rating:4.8, reviews:1876, icon:'💻', img:'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop', badge:'sale', desc:'Laptop gaming performa tinggi dengan RAM 32GB DDR5, SSD 1TB NVMe, dan GPU RTX 4070.' },
  { id:11, name:'True Wireless Earbuds Pro', cat:'elektronik', price:1299000, oriPrice:1999000, disc:35, rating:4.7, reviews:3421, icon:'🎧', img:'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop', badge:'sale', desc:'Earbuds TWS dengan ANC aktif, audio Dolby Atmos, dan ketahanan baterai 36 jam bersama case.' },
  { id:12, name:'Smart TV 55" 4K OLED', cat:'elektronik', price:12990000, oriPrice:18000000, disc:28, rating:4.8, reviews:987, icon:'📺', img:'https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?w=400&h=400&fit=crop', badge:'best', desc:'Smart TV OLED 55 inci dengan resolusi 4K HDR, Android TV 13, dan sound system Dolby Vision.' },
  { id:13, name:'Action Camera 4K 60FPS', cat:'elektronik', price:2799000, oriPrice:3999000, disc:30, rating:4.7, reviews:678, icon:'📷', img:'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop', badge:'new', desc:'Action camera waterproof hingga 30m, resolusi 4K@60fps, stabilisasi gambar HyperSmooth 5.0.' },
  { id:14, name:'Smartwatch Health Monitor', cat:'elektronik', price:1899000, oriPrice:2800000, disc:32, rating:4.6, reviews:1234, icon:'⌚', img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', badge:'sale', desc:'Smartwatch dengan monitor kesehatan lengkap: SpO2, detak jantung, ECG, dan GPS built-in.' },
  { id:15, name:'Tablet 11" Pro Edition', cat:'elektronik', price:6799000, oriPrice:9500000, disc:28, rating:4.8, reviews:567, icon:'📱', img:'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop', badge:'new', desc:'Tablet premium 11 inci dengan layar AMOLED 120Hz, stylus pen, dan keyboard magnetic.' },

  // KECANTIKAN
  { id:16, name:'Serum Vitamin C Brightening', cat:'kecantikan', price:189000, oriPrice:300000, disc:37, rating:4.8, reviews:2345, icon:'✨', img:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop', badge:'best', desc:'Serum vitamin C 20% dengan niacinamide untuk mencerahkan dan meratakan warna kulit secara efektif.' },
  { id:17, name:'Cushion SPF 50 PA++++', cat:'kecantikan', price:165000, oriPrice:250000, disc:34, rating:4.7, reviews:1876, icon:'💄', img:'https://images.unsplash.com/photo-1586495777744-4e6232bf2f16?w=400&h=400&fit=crop', badge:'sale', desc:'BB cushion dengan perlindungan SPF 50 PA++++ dan coverage medium natural untuk tampilan flawless.' },
  { id:18, name:'Retinol Night Cream Premium', cat:'kecantikan', price:345000, oriPrice:550000, disc:37, rating:4.9, reviews:943, icon:'🌙', img:'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop', badge:'best', desc:'Krim malam dengan retinol 0.3% untuk anti-aging, memudarkan kerutan dan mencerahkan kulit.' },
  { id:19, name:'Lip Gloss Hydrating Set', cat:'kecantikan', price:89000, oriPrice:150000, disc:41, rating:4.6, reviews:2890, icon:'💋', img:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop', badge:'sale', desc:'Set lip gloss 6 warna dengan formula moisturizing dan shimmer halus untuk bibir berkilau.' },
  { id:20, name:'Parfum Eau de Parfum 100ml', cat:'kecantikan', price:799000, oriPrice:1200000, disc:33, rating:4.8, reviews:678, icon:'🌸', img:'https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&h=400&fit=crop', badge:'new', desc:'Parfum mewah dengan top note floral, middle note musky, dan base note cedarwood yang tahan lama.' },

  // SPORT
  { id:21, name:'Sepatu Running Pro Elite', cat:'sport', price:1299000, oriPrice:1999000, disc:35, rating:4.8, reviews:1567, icon:'👟', img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', badge:'best', desc:'Sepatu lari dengan teknologi foam berenergi tinggi, upper mesh breathable, dan outsole carbon plate.' },
  { id:22, name:'Gym Set Performance 3-in-1', cat:'sport', price:456000, oriPrice:700000, disc:35, rating:4.7, reviews:892, icon:'🏋️', img:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop', badge:'sale', desc:'Set baju gym 3 item: kaos compression, celana pendek, dan jaket ringan dengan bahan quick-dry.' },
  { id:23, name:'Dumbbell Set Adjustable 40kg', cat:'sport', price:1890000, oriPrice:2800000, disc:32, rating:4.9, reviews:345, icon:'💪', img:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop', badge:'new', desc:'Set dumbbell adjustable 5-40kg dengan sistem rotary cepat. Cocok untuk home gym.' },
  { id:24, name:'Yoga Mat Premium Anti-Slip', cat:'sport', price:289000, oriPrice:450000, disc:36, rating:4.7, reviews:1234, icon:'🧘', img:'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop', badge:'sale', desc:'Matras yoga premium 6mm dengan permukaan anti-slip dan bahan TPE ramah lingkungan.' },

  // RUMAH
  { id:25, name:'Coffee Maker Automatic Pro', cat:'rumah', price:2490000, oriPrice:3800000, disc:34, rating:4.8, reviews:678, icon:'☕', img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop', badge:'best', desc:'Mesin kopi otomatis dengan grinder built-in, frother susu, dan 12 preset minuman kopi.' },
  { id:26, name:'Air Fryer Digital 6.5L', cat:'rumah', price:1290000, oriPrice:1999000, disc:35, rating:4.8, reviews:2345, icon:'🥘', img:'https://images.unsplash.com/photo-1626788186666-8b0a0d2de21b?w=400&h=400&fit=crop', badge:'sale', desc:'Air fryer digital 6.5L dengan 8 mode masak, layar LCD, dan teknologi rapid air circulation.' },
  { id:27, name:'Set Tempat Tidur Mewah', cat:'rumah', price:2890000, oriPrice:4500000, disc:36, rating:4.7, reviews:234, icon:'🛏️', img:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop', badge:'new', desc:'Set bedding premium 6 pcs dengan bahan katun Egyptian 800 thread count, lembut dan breathable.' },
  { id:28, name:'Robot Vacuum Cleaner Smart', cat:'rumah', price:3490000, oriPrice:5200000, disc:33, rating:4.8, reviews:567, icon:'🤖', img:'https://images.unsplash.com/photo-1563208723-03d73cbe5b91?w=400&h=400&fit=crop', badge:'best', desc:'Robot vacuum dengan AI mapping, mop function, dan kontrol via smartphone. Hisap & ngepel sekaligus.' },

  // MAKANAN
  { id:29, name:'Coklat Artisan Box Premium', cat:'makanan', price:189000, oriPrice:290000, disc:35, rating:4.9, reviews:1456, icon:'🍫', img:'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=400&fit=crop', badge:'best', desc:'Box coklat artisan 20 pcs dengan berbagai rasa premium. Cocok untuk hadiah dan camilan.' },
  { id:30, name:'Kopi Arabika Single Origin', cat:'makanan', price:145000, oriPrice:220000, disc:34, rating:4.8, reviews:2341, icon:'☕', img:'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop', badge:'sale', desc:'Kopi arabika single origin dari perkebunan terbaik. Roast medium dengan rasa fruity & nutty.' },
  { id:31, name:'Hamper Snack Premium', cat:'makanan', price:350000, oriPrice:550000, disc:36, rating:4.7, reviews:789, icon:'🎁', img:'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=400&h=400&fit=crop', badge:'new', desc:'Hamper berisi 15 snack premium pilihan, dikemas dalam kotak eksklusif siap kado.' },
];

// ============================================
// STATE
// ============================================
let state = {
  currentUser: null,
  cart: [],
  wishlist: [],
  currentFilter: 'all',
  currentSlide: 0,
  sliderInterval: null,
  modalQty: 1,
  modalProduct: null,
  orderCounter: Math.floor(Math.random() * 1000) + 100,
  lastOrderId: '',
  products: [...PRODUCTS],
};

// ============================================
// INIT
// ============================================
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('splash').style.display = 'none';
    showPage('auth-page');
  }, 3000);

  startCountdown();
});

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  const el = document.getElementById(pageId);
  if (el) { el.classList.remove('hidden'); }
}

// ============================================
// AUTH
// ============================================
function switchTab(tab) {
  document.getElementById('tab-login').classList.toggle('active', tab === 'login');
  document.getElementById('tab-register').classList.toggle('active', tab === 'register');
  document.getElementById('form-login').classList.toggle('hidden', tab !== 'login');
  document.getElementById('form-register').classList.toggle('hidden', tab !== 'register');
}

function togglePass(id) {
  const inp = document.getElementById(id);
  inp.type = inp.type === 'password' ? 'text' : 'password';
}

function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-pass').value.trim();
  if (!email || !pass) { showToast('⚠️ Isi email dan password!', 'error'); return; }
  if (!email.includes('@')) { showToast('⚠️ Format email tidak valid!', 'error'); return; }

  state.currentUser = { name: email.split('@')[0], email };
  enterMainPage();
}

function doRegister() {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const phone = document.getElementById('reg-phone').value.trim();
  const pass = document.getElementById('reg-pass').value.trim();
  if (!name || !email || !phone || !pass) { showToast('⚠️ Lengkapi semua data!', 'error'); return; }
  if (!email.includes('@')) { showToast('⚠️ Format email tidak valid!', 'error'); return; }

  state.currentUser = { name, email };
  showToast('🎉 Registrasi berhasil! Selamat datang!', 'success');
  setTimeout(enterMainPage, 800);
}

function enterMainPage() {
  showPage('main-page');
  const nameEl = document.getElementById('user-name-nav');
  const avatarEl = document.getElementById('user-avatar');
  if (nameEl) nameEl.textContent = capitalize(state.currentUser.name);
  if (avatarEl) avatarEl.textContent = state.currentUser.name[0].toUpperCase();
  renderProducts(state.products);
  startSlider();
  showToast('👋 Selamat datang, ' + capitalize(state.currentUser.name) + '!', 'success');
}

function doLogout() {
  state.currentUser = null;
  state.cart = [];
  state.wishlist = [];
  updateBadges();
  stopSlider();
  showPage('auth-page');
  showToast('👋 Sampai jumpa!', 'info');
}

function toggleUserMenu() {
  const dd = document.getElementById('user-dropdown');
  dd.classList.toggle('hidden');
}
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-user')) {
    const dd = document.getElementById('user-dropdown');
    if (dd) dd.classList.add('hidden');
  }
});

// ============================================
// SLIDER
// ============================================
function startSlider() {
  state.sliderInterval = setInterval(() => {
    state.currentSlide = (state.currentSlide + 1) % 3;
    updateSlider();
  }, 4000);
}
function stopSlider() { clearInterval(state.sliderInterval); }
function goSlide(n) {
  state.currentSlide = n;
  updateSlider();
}
function updateSlider() {
  document.querySelectorAll('.hero-slide').forEach((s, i) => s.classList.toggle('active', i === state.currentSlide));
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === state.currentSlide));
}

// ============================================
// COUNTDOWN
// ============================================
function startCountdown() {
  const end = new Date();
  end.setHours(end.getHours() + 5, 30, 0);
  function tick() {
    const now = new Date();
    const diff = end - now;
    if (diff <= 0) { document.getElementById('countdown').textContent = '00:00:00'; return; }
    const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
    const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
    const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
    const el = document.getElementById('countdown');
    if (el) el.textContent = `${h}:${m}:${s}`;
  }
  tick();
  setInterval(tick, 1000);
}

// ============================================
// PRODUCTS
// ============================================
function renderProducts(list) {
  const grid = document.getElementById('product-grid');
  const noRes = document.getElementById('no-results');
  if (!grid) return;
  if (!list || list.length === 0) {
    grid.innerHTML = '';
    noRes.classList.remove('hidden');
    return;
  }
  noRes.classList.add('hidden');
  grid.innerHTML = list.map((p, idx) => `
    <div class="product-card" style="animation-delay:${idx * 0.05}s" onclick="openProductModal(${p.id})">
      <div class="card-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
        <div class="card-img-icon" style="display:none">${p.icon}</div>
        <div class="card-badges">
          ${p.badge === 'sale' ? '<span class="badge-sale">SALE</span>' : ''}
          ${p.badge === 'new' ? '<span class="badge-new">NEW</span>' : ''}
          ${p.badge === 'best' ? '<span class="badge-best">BEST</span>' : ''}
        </div>
        <button class="btn-wishlist ${state.wishlist.includes(p.id) ? 'active' : ''}" onclick="toggleWishlistItem(event, ${p.id})">
          <i class="fa${state.wishlist.includes(p.id) ? 's' : 'r'} fa-heart"></i>
        </button>
      </div>
      <div class="card-body">
        <div class="card-cat">${p.cat}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-rating">
          <div class="stars">${getStars(p.rating)}</div>
          <span class="rating-val">${p.rating}</span>
          <span class="review-count">(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="card-price">
          <span class="price-ori">${formatRp(p.oriPrice)}</span>
          <span class="price-main">${formatRp(p.price)}</span>
          <span class="discount-pct">-${p.disc}%</span>
        </div>
        <button class="btn-add-cart" onclick="addToCart(event, ${p.id})">
          <i class="fa fa-shopping-bag"></i> Tambah
        </button>
      </div>
    </div>
  `).join('');
}

function filterCat(cat) {
  state.currentFilter = cat;
  document.querySelectorAll('.cat-btn').forEach((b, i) => {
    const cats = ['all','fashion','elektronik','kecantikan','sport','rumah','makanan'];
    b.classList.toggle('active', cats[i] === cat);
  });
  const titles = { all:'Produk Pilihan', fashion:'Fashion & Pakaian', elektronik:'Elektronik & Gadget', kecantikan:'Kecantikan & Perawatan', sport:'Sport & Outdoor', rumah:'Rumah & Living', makanan:'Makanan & Minuman' };
  const titleEl = document.getElementById('section-title');
  if (titleEl) titleEl.textContent = titles[cat] || 'Produk';
  applyFilters();
}

function searchProducts() {
  applyFilters();
}

function sortProducts() { applyFilters(); }

function applyFilters() {
  const q = (document.getElementById('search-input')?.value || '').toLowerCase();
  const sort = document.getElementById('sort-select')?.value || 'default';
  let list = PRODUCTS.filter(p => {
    const matchCat = state.currentFilter === 'all' || p.cat === state.currentFilter;
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q);
    return matchCat && matchQ;
  });
  if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
  renderProducts(list);
}

// ============================================
// PRODUCT MODAL
// ============================================
function openProductModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  state.modalProduct = p;
  state.modalQty = 1;
  const inner = document.getElementById('modal-inner');
  inner.innerHTML = `
    <div class="modal-img-wrap">
      <img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;" onerror="this.style.display='none';this.parentElement.innerHTML='<span style=\\'font-size:5rem\\'>${p.icon}</span>'"/>
    </div>
    <div class="modal-info">
      <div class="modal-cat">${p.cat}</div>
      <div class="modal-name">${p.name}</div>
      <div class="modal-rating">
        <div class="stars">${getStars(p.rating)}</div>
        <span style="font-size:0.85rem;color:#888">${p.rating} (${p.reviews.toLocaleString()} ulasan)</span>
      </div>
      <div class="modal-price-ori">${formatRp(p.oriPrice)}</div>
      <div class="modal-price">${formatRp(p.price)}</div>
      <div class="modal-disc">Hemat ${p.disc}% — ${formatRp(p.oriPrice - p.price)}</div>
      <div class="modal-desc">${p.desc}</div>
      <div class="modal-qty">
        <span style="font-weight:600;font-size:0.9rem">Jumlah:</span>
        <div class="modal-qty-ctrl">
          <button class="modal-qty-btn" onclick="changeModalQty(-1)">−</button>
          <span class="modal-qty-val" id="modal-qty-display">1</span>
          <button class="modal-qty-btn" onclick="changeModalQty(1)">+</button>
        </div>
      </div>
      <div class="modal-actions">
        <button class="modal-btn-cart" onclick="addToCartModal()">
          <i class="fa fa-shopping-bag"></i> Tambah ke Keranjang
        </button>
        <button class="modal-btn-wish" onclick="toggleWishlistItem(event, ${p.id})">
          <i class="fa${state.wishlist.includes(p.id) ? 's' : 'r'} fa-heart"></i>
        </button>
      </div>
    </div>
  `;
  document.getElementById('product-modal-overlay').classList.remove('hidden');
  document.getElementById('product-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('product-modal-overlay').classList.add('hidden');
  document.getElementById('product-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

function changeModalQty(delta) {
  state.modalQty = Math.max(1, Math.min(99, state.modalQty + delta));
  const el = document.getElementById('modal-qty-display');
  if (el) el.textContent = state.modalQty;
}

function addToCartModal() {
  if (!state.modalProduct) return;
  for (let i = 0; i < state.modalQty; i++) addToCartById(state.modalProduct.id);
  closeProductModal();
}

// ============================================
// CART
// ============================================
function addToCart(event, id) {
  event.stopPropagation();
  addToCartById(id);
}

function addToCartById(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const existing = state.cart.find(x => x.id === id);
  if (existing) existing.qty++;
  else state.cart.push({ ...p, qty: 1 });
  updateBadges();
  showToast(`🛍️ "${p.name.substring(0,30)}..." ditambahkan!`, 'success');
}

function openCart() {
  renderCart();
  document.getElementById('cart-overlay').classList.remove('hidden');
  document.getElementById('cart-sidebar').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-overlay').classList.add('hidden');
  document.getElementById('cart-sidebar').classList.add('hidden');
  document.body.style.overflow = '';
}

function renderCart() {
  const container = document.getElementById('cart-items');
  if (!container) return;
  if (state.cart.length === 0) {
    container.innerHTML = '<div class="empty-cart"><i class="fa fa-shopping-bag"></i><p>Keranjang masih kosong</p></div>';
    document.getElementById('cart-total').textContent = 'Rp 0';
    return;
  }
  container.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-icon">${item.icon}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatRp(item.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
          <button class="cart-item-del" onclick="removeFromCart(${item.id})"><i class="fa fa-trash"></i></button>
        </div>
      </div>
    </div>
  `).join('');
  document.getElementById('cart-total').textContent = formatRp(getCartTotal());
}

function changeQty(id, delta) {
  const item = state.cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { updateBadges(); renderCart(); }
}

function removeFromCart(id) {
  state.cart = state.cart.filter(x => x.id !== id);
  updateBadges(); renderCart();
}

function getCartTotal() { return state.cart.reduce((s, i) => s + i.price * i.qty, 0); }
function getCartCount() { return state.cart.reduce((s, i) => s + i.qty, 0); }

function updateBadges() {
  const cb = document.getElementById('cart-badge');
  const wb = document.getElementById('wishlist-badge');
  if (cb) cb.textContent = getCartCount();
  if (wb) wb.textContent = state.wishlist.length;
}

// ============================================
// WISHLIST
// ============================================
function toggleWishlist() {
  showToast('❤️ Halaman wishlist segera hadir!', 'info');
}

function toggleWishlistItem(event, id) {
  event.stopPropagation();
  const idx = state.wishlist.indexOf(id);
  if (idx > -1) { state.wishlist.splice(idx, 1); showToast('💔 Dihapus dari wishlist', 'info'); }
  else { state.wishlist.push(id); showToast('❤️ Ditambahkan ke wishlist!', 'success'); }
  updateBadges();
  applyFilters();
}

// ============================================
// CHECKOUT
// ============================================
function goCheckout() {
  if (state.cart.length === 0) { showToast('🛒 Keranjang kosong!', 'error'); return; }
  closeCart();
  showPage('checkout-page');
  renderOrderSummary('order-summary-items', 'sum-sub', 'sum-total');
  setStep(1);
  document.getElementById('checkout-step1').classList.remove('hidden');
  document.getElementById('checkout-step2').classList.add('hidden');
  document.getElementById('checkout-step3').classList.add('hidden');
}

function renderOrderSummary(itemsId, subId, totalId) {
  const items = document.getElementById(itemsId);
  const sub = document.getElementById(subId);
  const total = document.getElementById(totalId);
  const ship = getShippingCost();
  if (items) {
    items.innerHTML = state.cart.map(i => `
      <div class="order-sum-item">
        <div class="order-sum-icon">${i.icon}</div>
        <div class="order-sum-info">
          <div class="order-sum-name">${i.name}</div>
          <div class="order-sum-qty">x${i.qty}</div>
        </div>
        <div class="order-sum-price">${formatRp(i.price * i.qty)}</div>
      </div>
    `).join('');
  }
  const cartTotal = getCartTotal();
  const disc = state.discountAmount || 0;
  if (sub) sub.textContent = formatRp(cartTotal);
  if (total) total.textContent = formatRp(cartTotal + ship - disc);
  const discEl = document.getElementById('sum-disc');
  if (discEl) discEl.textContent = disc > 0 ? `- ${formatRp(disc)}` : '- Rp 0';
  const shipEl = document.getElementById('sum-ship');
  if (shipEl) shipEl.textContent = formatRp(ship);
}

function getShippingCost() {
  const selected = document.querySelector('input[name="shipping"]:checked');
  if (!selected) return 15000;
  return { reg: 15000, exp: 30000, same: 50000 }[selected.value] || 15000;
}

function applyVoucher() {
  const code = document.getElementById('voucher-input')?.value.trim().toUpperCase();
  const codes = { 'LUXMART10': 0.1, 'HEMAT20': 0.2, 'NEWUSER': 0.15, 'FLASH50': 0.5 };
  if (codes[code]) {
    state.discountAmount = Math.floor(getCartTotal() * codes[code]);
    showToast(`🎉 Voucher berhasil! Diskon ${codes[code]*100}%`, 'success');
    renderOrderSummary('order-summary-items', 'sum-sub', 'sum-total');
  } else {
    showToast('❌ Voucher tidak valid', 'error');
  }
}

function goToPayment() {
  const name = document.getElementById('c-name')?.value.trim();
  const phone = document.getElementById('c-phone')?.value.trim();
  const address = document.getElementById('c-address')?.value.trim();
  const city = document.getElementById('c-city')?.value.trim();
  if (!name || !phone || !address || !city) {
    showToast('⚠️ Lengkapi data alamat!', 'error'); return;
  }
  setStep(2);
  document.getElementById('checkout-step1').classList.add('hidden');
  document.getElementById('checkout-step2').classList.remove('hidden');
  renderOrderSummary('order-summary-items2', 'sum-sub2', 'sum-total2');
  const s2 = document.getElementById('sum-ship2');
  if (s2) s2.textContent = formatRp(getShippingCost());
}

function doPay() {
  const method = document.querySelector('input[name="payment"]:checked');
  if (!method) { showToast('⚠️ Pilih metode pembayaran!', 'error'); return; }

  // Simulate payment loading
  const btn = document.querySelector('#checkout-step2 .btn-checkout-next');
  if (btn) { btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Memproses...'; btn.disabled = true; }

  setTimeout(() => {
    setStep(3);
    document.getElementById('checkout-step2').classList.add('hidden');
    document.getElementById('checkout-step3').classList.remove('hidden');
    state.orderCounter++;
    state.lastOrderId = `#LXM2025${String(state.orderCounter).padStart(3, '0')}`;
    const orderEl = document.getElementById('order-id-display');
    if (orderEl) orderEl.textContent = state.lastOrderId;
    state.cart = [];
    state.discountAmount = 0;
    updateBadges();
    showToast('✅ Pembayaran berhasil!', 'success');
  }, 2000);
}

function setStep(n) {
  for (let i = 1; i <= 3; i++) {
    const el = document.getElementById('step' + i);
    if (el) {
      el.classList.toggle('active', i === n);
      el.classList.toggle('done', i < n);
    }
  }
}

function showMain() {
  showPage('main-page');
  renderProducts(PRODUCTS);
}

function showOrders() {
  document.getElementById('user-dropdown').classList.add('hidden');
  showToast('📦 Halaman pesanan segera hadir!', 'info');
}

// ============================================
// TRACK
// ============================================
function showTrack() {
  document.getElementById('user-dropdown')?.classList.add('hidden');
  showPage('track-page');
  document.getElementById('track-input').value = state.lastOrderId || '';
}

function doTrack() {
  const val = document.getElementById('track-input').value.trim();
  const resultEl = document.getElementById('track-result');
  if (!val) { showToast('⚠️ Masukkan nomor pesanan!', 'error'); return; }

  // Show mock tracking
  resultEl.classList.remove('hidden');
  resultEl.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
      <div>
        <strong style="font-size:1rem">Pesanan ${val}</strong><br>
        <small style="color:#888">Diperkirakan tiba: 3-5 hari kerja</small>
      </div>
      <div style="background:#e8f5e9;color:#27ae60;padding:6px 14px;border-radius:20px;font-size:0.8rem;font-weight:700">DIPROSES</div>
    </div>
    <ul class="track-timeline">
      <li>
        <div class="t-dot done"><i class="fa fa-check" style="font-size:0.6rem"></i></div>
        <div class="t-info"><strong>Pesanan Dikonfirmasi</strong><small>Hari ini, ${getTimeStr(0)}</small></div>
      </li>
      <li>
        <div class="t-dot done"><i class="fa fa-check" style="font-size:0.6rem"></i></div>
        <div class="t-info"><strong>Pembayaran Diterima</strong><small>Hari ini, ${getTimeStr(5)}</small></div>
      </li>
      <li>
        <div class="t-dot done"><i class="fa fa-check" style="font-size:0.6rem"></i></div>
        <div class="t-info"><strong>Pesanan Dikemas</strong><small>Hari ini, ${getTimeStr(30)}</small></div>
      </li>
      <li>
        <div class="t-dot" style="background:#e8e8e8"></div>
        <div class="t-info"><strong style="color:#aaa">Dalam Pengiriman</strong><small style="color:#bbb">Menunggu pickup kurir</small></div>
      </li>
      <li>
        <div class="t-dot" style="background:#e8e8e8"></div>
        <div class="t-info"><strong style="color:#aaa">Pesanan Tiba</strong><small style="color:#bbb">Estimasi 3-5 hari</small></div>
      </li>
    </ul>
  `;
}

function getTimeStr(addMin) {
  const d = new Date();
  d.setMinutes(d.getMinutes() - addMin);
  return d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}

// ============================================
// UTILS
// ============================================
function formatRp(n) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < full; i++) html += '★';
  if (half) html += '½';
  for (let i = full + (half ? 1 : 0); i < 5; i++) html += '☆';
  return html;
}

function capitalize(s) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
}

let toastTimeout;
function showToast(msg, type = 'info') {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.className = `toast ${type}`;
  el.classList.remove('hidden');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => { el.classList.add('hidden'); }, 2800);
}

// Handle shipping change for real-time total update
document.addEventListener('change', (e) => {
  if (e.target.name === 'shipping') {
    renderOrderSummary('order-summary-items', 'sum-sub', 'sum-total');
  }
});
