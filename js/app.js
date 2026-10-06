(() => {
  'use strict';
  const C = window.SENADEM_CONFIG || {};
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const money = n => `${Number(n).toLocaleString(document.documentElement.lang === 'fr' ? 'fr-DZ' : 'ar-DZ')} ${C.CURRENCY || 'DA'}`;
  let language = 'ar';

  const copy = {
    ar: {
      navHome:'الرئيسية',navProducts:'منتجاتنا',navStory:'قصتنا',navOrder:'كيف نطلب',navFaq:'الأسئلة الشائعة',orderNow:'اطلب الآن',discover:'اكتشفوا منتجاتنا',
      heroEyebrow:'من خيرات الجزائر',heroTitle:'عسل طبيعي…<br>من خيرات الجزائر<br>إلى مائدتكم <span>🍯</span>',heroText:'اكتشفوا طعم العسل الأصيل، بجودة وعناية تليق بكل لحظة.',heroNote:'طبيعة. أصالة. جودة.',placeholderCaption:'رسم توضيحي — استبدلوه بصورة المنتج',
      trustNatural:'عسل طبيعي',trustNaturalSub:'اختيار بعناية',trustAlgeria:'منتج جزائري',trustAlgeriaSub:'نفخر بجذورنا',trustDelivery:'توصيل إلى 58 ولاية',trustDeliverySub:'حتى بابكم',trustQuality:'جودة Senadem',trustQualitySub:'تفاصيل تهمّنا',
      collectionEyebrow:'اختيرت لكم',productsTitle:'اكتشفوا <em>منتجاتنا</em>',productsIntro:'كل برطمان يحمل مذاقاً أصيلاً وتفصيلاً صُمّم ليجعل اللحظات اليومية أطيب.',addToOrder:'أضيفوا إلى الطلب',productPlaceholder:'مساحة لصورة المنتج',
      whyEyebrow:'ما يميزنا',whyTitle:'لماذا <em>Senadem Bees؟</em>',whyIntro:'نؤمن أن الأشياء الجميلة تبدأ من اختيار صادق واهتمام بالتفاصيل.',whyNature:'طبيعة',whyNatureText:'منتجات مستوحاة من جمال الطبيعة وجودتها.',whyAuthenticity:'أصالة',whyAuthenticityText:'طعم العسل الذي يجمع بين البساطة والأصالة.',whyAlgeria:'جزائري',whyAlgeriaText:'نفخر بعلامة تحمل روح الطبيعة الجزائرية.',whyCare:'عناية',whyCareText:'نهتم بالتفاصيل من المنتج إلى تجربة العميل.',
      storyEyebrow:'حكاية من الطبيعة',storyTitle:'قصتنا تبدأ<br>من <em>الطبيعة</em>',storyP1:'في Senadem Bees، نؤمن أن العسل ليس مجرد منتج، بل لحظة صغيرة من الطبيعة تدخل إلى حياتنا.',storyP2:'بدأنا لنقدم تجربة تجمع بين جودة العسل، جمال التقديم، والاهتمام بكل التفاصيل.',storyLink:'تعرفوا على طريقة الطلب',storyPlaceholder:'مساحة لصورة من عالم Senadem Bees',
      experienceEyebrow:'رحلة صغيرة، أثر جميل',experienceTitle:'من الطبيعة<br>إلى <em>مائدتكم</em>',stageNature:'من الطبيعة',stageNatureText:'حيث تبدأ الحكاية بين الزهور.',stageJar:'إلى البرطمان',stageJarText:'عناية بالتفاصيل في كل خطوة.',stageTable:'إلى مائدتكم',stageTableText:'لحظة حلوة تستحق المشاركة.',
      orderEyebrow:'بكل سهولة',orderTitle:'أربع خطوات<br><em>لطلبكم</em>',orderIntro:'اختاروا ما تحبون، وسنتواصل معكم لتأكيد التفاصيل.',step1:'اختاروا منتجكم',step1Text:'تصفحوا الأحجام واختاروا ما يناسبكم.',step2:'أرسلوا طلبكم',step2Text:'املؤوا التفاصيل وسيفتح واتساب برسالتكم.',step3:'نؤكد معلوماتكم',step3Text:'نتواصل معكم لتأكيد العنوان وطريقة الدفع.',step4:'استلموا طلبكم',step4Text:'توصيل إلى ولايتكم بعد تأكيد التفاصيل.',paymentNote:'الدفع عند الاستلام',deliveryEyebrow:'من قلب الجزائر',deliveryTitle:'نوصل إليكم أينما كنتم<br>في الجزائر',deliveryText:'توصيل إلى 58 ولاية — تواصلوا معنا لتأكيد التفاصيل.',
      testimonialsEyebrow:'كلمات لطيفة',testimonialsTitle:'تجارب <em>تُروى</em>',testimonialsIntro:'مساحة مخصصة لآراء عملائنا — الأمثلة الحالية نصوص تجريبية.',instagramTitle:'تابعوا عالم<br><em>Senadem Bees</em>',instagramText:'اكتشفوا منتجاتنا، جديدنا، وكواليس عالم العسل.',instagramButton:'تابعونا على Instagram',faqEyebrow:'نحن هنا لمساعدتكم',faqTitle:'أسئلة <em>شائعة</em>',faqIntro:'إجابات واضحة لتجربة طلب أسهل.',faqOrder:'لديكم سؤال آخر؟ تواصلوا معنا',
      footerTagline:'طبيعة. أصالة. جودة.',footerCountry:'علامة جزائرية بكل فخر',footerExplore:'اكتشفوا',footerHelp:'نحن هنا لكم',footerContact:'تواصلوا معنا',followUs:'تابعونا',copyright:'جميع الحقوق محفوظة.',whatsappLabel:'اطلبوا عبر واتساب',formEyebrow:'خطوة أخيرة',formTitle:'أرسلوا <em>طلبكم</em>',formIntro:'سنجهز رسالة طلبكم على واتساب لتأكيدها بسهولة.',fieldName:'الاسم الكامل',fieldPhone:'رقم الهاتف',fieldWilaya:'الولاية',fieldCity:'البلدية',fieldAddress:'العنوان',fieldProduct:'المنتج',fieldQuantity:'الكمية',fieldNotes:'ملاحظات',sendWhatsApp:'متابعة عبر واتساب',formPrivacy:'سيُفتح واتساب لإرسال تفاصيل الطلب. لن تُحفظ بياناتكم على هذا الموقع.',selectProduct:'اختاروا المنتج',missingNumber:'يرجى إضافة رقم واتساب Senadem في ملف الإعدادات قبل استقبال الطلبات.',
    },
    fr: {
      navHome:'Accueil',navProducts:'Nos produits',navStory:'Notre histoire',navOrder:'Comment commander',navFaq:'FAQ',orderNow:'Commander',discover:'Découvrir nos produits',
      heroEyebrow:'Les trésors de l’Algérie',heroTitle:'Un miel naturel…<br>des trésors d’Algérie<br>à votre table <span>🍯</span>',heroText:'Découvrez le goût authentique du miel, avec une qualité et un soin qui accompagnent chaque instant.',heroNote:'Nature. Authenticité. Qualité.',placeholderCaption:'Illustration — à remplacer par une photo du produit',
      trustNatural:'Miel naturel',trustNaturalSub:'Sélectionné avec soin',trustAlgeria:'Produit algérien',trustAlgeriaSub:'Fiers de nos racines',trustDelivery:'Livraison dans 58 wilayas',trustDeliverySub:'Jusqu’à votre porte',trustQuality:'Qualité Senadem',trustQualitySub:'Chaque détail compte',
      collectionEyebrow:'Choisi pour vous',productsTitle:'Découvrez <em>nos produits</em>',productsIntro:'Chaque pot célèbre une saveur authentique et apporte une touche douce à vos moments du quotidien.',addToOrder:'Ajouter à la commande',productPlaceholder:'Emplacement photo du produit',
      whyEyebrow:'Ce qui nous distingue',whyTitle:'Pourquoi <em>Senadem Bees ?</em>',whyIntro:'Nous croyons que les belles choses naissent d’un choix sincère et du soin des détails.',whyNature:'Nature',whyNatureText:'Des produits inspirés par la beauté et la richesse de la nature.',whyAuthenticity:'Authenticité',whyAuthenticityText:'Un miel qui réunit simplicité et caractère.',whyAlgeria:'Algérien',whyAlgeriaText:'Une marque fière de l’esprit de la nature algérienne.',whyCare:'Attention',whyCareText:'Nous soignons chaque détail, du produit à votre expérience.',
      storyEyebrow:'Une histoire de nature',storyTitle:'Notre histoire<br>commence dans <em>la nature</em>',storyP1:'Chez Senadem Bees, nous croyons que le miel est plus qu’un produit : c’est un petit instant de nature qui entre dans nos vies.',storyP2:'Nous avons créé une expérience qui associe la qualité du miel, une belle présentation et le soin apporté à chaque détail.',storyLink:'Découvrir comment commander',storyPlaceholder:'Emplacement photo de l’univers Senadem Bees',
      experienceEyebrow:'Un petit voyage, une jolie attention',experienceTitle:'De la nature<br>à <em>votre table</em>',stageNature:'De la nature',stageNatureText:'L’histoire commence parmi les fleurs.',stageJar:'Jusqu’au pot',stageJarText:'Le soin du détail à chaque étape.',stageTable:'À votre table',stageTableText:'Un doux moment à partager.',
      orderEyebrow:'Tout simplement',orderTitle:'Quatre étapes<br><em>pour commander</em>',orderIntro:'Choisissez vos produits, nous vous contacterons pour confirmer les détails.',step1:'Choisissez votre produit',step1Text:'Parcourez les formats et choisissez le vôtre.',step2:'Envoyez votre commande',step2Text:'Remplissez le formulaire : votre message WhatsApp est prêt.',step3:'Nous confirmons vos infos',step3Text:'Nous validons avec vous l’adresse et le mode de paiement.',step4:'Recevez votre commande',step4Text:'Livraison dans votre wilaya après confirmation.',paymentNote:'Paiement à la livraison',deliveryEyebrow:'Au cœur de l’Algérie',deliveryTitle:'Nous venons à vous,<br>où que vous soyez en Algérie',deliveryText:'Livraison dans 58 wilayas — contactez-nous pour les détails.',
      testimonialsEyebrow:'Quelques mots doux',testimonialsTitle:'Des expériences <em>à partager</em>',testimonialsIntro:'Un espace pour vos avis — les exemples actuels sont fictifs.',instagramTitle:'Suivez l’univers<br><em>Senadem Bees</em>',instagramText:'Nos produits, nos nouveautés et les coulisses du miel.',instagramButton:'Suivez-nous sur Instagram',faqEyebrow:'Nous sommes là pour vous',faqTitle:'Questions <em>fréquentes</em>',faqIntro:'Des réponses claires pour commander sereinement.',faqOrder:'Une autre question ? Écrivez-nous',
      footerTagline:'Nature. Authenticité. Qualité.',footerCountry:'Une marque algérienne, avec fierté',footerExplore:'Découvrir',footerHelp:'À votre écoute',footerContact:'Nous contacter',followUs:'Suivez-nous',copyright:'Tous droits réservés.',whatsappLabel:'Commander sur WhatsApp',formEyebrow:'Dernière étape',formTitle:'Envoyez <em>votre commande</em>',formIntro:'Votre message WhatsApp sera préparé pour confirmer votre commande.',fieldName:'Nom complet',fieldPhone:'Téléphone',fieldWilaya:'Wilaya',fieldCity:'Commune',fieldAddress:'Adresse',fieldProduct:'Produit',fieldQuantity:'Quantité',fieldNotes:'Notes',sendWhatsApp:'Continuer sur WhatsApp',formPrivacy:'WhatsApp s’ouvrira pour envoyer les détails. Aucune donnée n’est enregistrée sur ce site.',selectProduct:'Choisissez un produit',missingNumber:'Ajoutez le numéro WhatsApp de Senadem dans le fichier de configuration avant de recevoir des commandes.',
    }
  };
  const productName = p => language === 'fr' ? (p.nameFr || p.name) : p.name;
  const productDesc = p => language === 'fr' ? (p.descriptionFr || p.description) : p.description;

  function renderProducts() {
    const grid = $('#products-grid');
    if (!grid) return;
    grid.innerHTML = (C.PRODUCTS || []).map((p, i) => `<article class="product-card reveal ${p.featured ? 'featured' : ''}">
      <div class="product-image ${p.image ? 'has-photo' : ''}">${p.image ? `<img src="${escapeAttr(p.image)}" alt="${escapeAttr(p.imageAlt || productName(p))}" loading="lazy">` : `<div class="placeholder-product" role="img" aria-label="${escapeAttr(p.imageAlt || (language === 'fr' ? 'Illustration temporaire du produit, à remplacer par une photo réelle' : 'رسم توضيحي مؤقت للمنتج — استبدلوه بصورة حقيقية'))}"><div class="mini-jar"><div class="mini-lid"></div><div class="mini-glass"><span>Senadem<br><b>BEES</b></span></div></div><span class="placeholder-label">${copy[language].productPlaceholder}</span><span class="decor-flower">✿</span></div>`}${p.featured ? `<span class="product-tag">${language === 'fr' ? 'Notre sélection' : 'اختيارنا'}</span>` : ''}<button class="product-quick" type="button" data-select-product="${escapeAttr(p.id)}" aria-label="${copy[language].addToOrder}">↗</button></div>
      <div class="product-info"><div class="product-title-row"><h3>${escapeHTML(productName(p))}</h3><span class="product-weight">${escapeHTML(p.weight)}</span></div><p>${escapeHTML(productDesc(p))}</p><div class="product-buy"><strong>${money(p.price)}</strong><button type="button" class="product-order" data-select-product="${escapeAttr(p.id)}"><span>${copy[language].addToOrder}</span><span aria-hidden="true">↗</span></button></div></div></article>`).join('');
    observeReveals();
  }
  function renderFAQ() {
    $('#faq-list').innerHTML = (C.FAQ || []).map((item, i) => `<details class="faq-item"><summary><span>${escapeHTML(language === 'fr' ? (item.qFr || item.q) : item.q)}</span><span class="faq-plus" aria-hidden="true">+</span></summary><p>${escapeHTML(language === 'fr' ? (item.aFr || item.a) : item.a)}</p></details>`).join('');
  }
  function renderTestimonials() {
    $('#testimonials-grid').innerHTML = (C.TESTIMONIALS || []).map(item => `<article class="testimonial-card"><div class="stars" aria-label="${language === 'fr' ? 'Exemple fictif' : 'نص تجريبي'}">✳ ✳ ✳</div><blockquote>“${escapeHTML(language === 'fr' ? (item.textFr || item.text) : item.text)}”</blockquote><small>${escapeHTML(language === 'fr' ? (item.labelFr || item.label || '') : (item.label || ''))}</small></article>`).join('');
  }
  function renderSelect(selectedId) {
    const select = $('#order-product');
    const products = C.PRODUCTS || [];
    select.innerHTML = `<option value="">${copy[language].selectProduct}</option>` + products.map(p => `<option value="${escapeAttr(p.id)}">${escapeHTML(productName(p))} · ${escapeHTML(p.weight)} · ${money(p.price)}</option>`).join('');
    if (selectedId && products.some(p => p.id === selectedId)) select.value = selectedId;
  }
  function updateLanguage(lang) {
    language = lang;
    const fr = lang === 'fr';
    document.documentElement.lang = lang;
    document.documentElement.dir = fr ? 'ltr' : 'rtl';
    $$('[data-i18n]').forEach(el => { const value = copy[lang][el.dataset.i18n]; if (value) el.innerHTML = value; });
    $$('[data-lang]').forEach(b => { b.classList.toggle('active', b.dataset.lang === lang); b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    renderProducts(); renderFAQ(); renderTestimonials(); renderSelect($('#order-product')?.value);
    $('.menu-toggle')?.setAttribute('aria-label', fr ? 'Ouvrir le menu' : 'فتح القائمة');
    document.title = fr ? 'Senadem Bees | Miel naturel d’Algérie' : 'Senadem Bees | عسل طبيعي من الجزائر';
    localStorage.setItem('senadem-language', lang);
  }
  function showOrder(productId) {
    renderSelect(productId);
    const dialog = $('#order-dialog');
    if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
    setTimeout(() => $('[name="name"]', dialog).focus(), 50);
  }
  function whatsappUrl(message) {
    const number = String(C.WHATSAPP_NUMBER || '').replace(/\D/g, '');
    if (!number || number === 'WHATSAPPNUMBER') return null;
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }
  function orderMessage(data) {
    const p = (C.PRODUCTS || []).find(x => x.id === data.get('product'));
    const qty = Math.max(1, parseInt(data.get('quantity'), 10) || 1);
    if (language === 'fr') return `Bonjour 🌿\n\nJe souhaite commander :\n\nProduit : ${productName(p)} ${p.weight}\nQuantité : ${qty}\nPrix unitaire : ${money(p.price)}\n\nNom : ${data.get('name')}\nTéléphone : ${data.get('phone')}\nWilaya : ${data.get('wilaya')}\nCommune : ${data.get('city')}\nAdresse : ${data.get('address')}\nNotes : ${data.get('notes') || '—'}\n\nMerci 🤍`;
    return `السلام عليكم 🌿\n\nأرغب في طلب:\n\nالمنتج: ${productName(p)} ${p.weight}\nالكمية: ${qty}\nالسعر للوحدة: ${money(p.price)}\n\nالاسم: ${data.get('name')}\nالهاتف: ${data.get('phone')}\nالولاية: ${data.get('wilaya')}\nالبلدية: ${data.get('city')}\nالعنوان: ${data.get('address')}\nملاحظات: ${data.get('notes') || '—'}\n\nشكراً 🤍`;
  }
  function escapeHTML(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function escapeAttr(s) { return escapeHTML(s); }
  let observer;
  function observeReveals() {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) { $$('.reveal').forEach(e => e.classList.add('visible')); return; }
    observer ||= new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }), { threshold: .12 });
    $$('.reveal:not(.visible)').forEach(e => observer.observe(e));
  }

  document.addEventListener('click', e => {
    const order = e.target.closest('[data-order-link]');
    if (order) { e.preventDefault(); showOrder(); return; }
    const pick = e.target.closest('[data-select-product]');
    if (pick) { e.preventDefault(); showOrder(pick.dataset.selectProduct); return; }
    const lang = e.target.closest('[data-lang]'); if (lang) updateLanguage(lang.dataset.lang);
  });
  $('.menu-toggle').addEventListener('click', e => { const button = e.currentTarget; const open = button.getAttribute('aria-expanded') !== 'true'; button.setAttribute('aria-expanded', open); $('#main-nav').classList.toggle('open', open); });
  $$('#main-nav a').forEach(a => a.addEventListener('click', () => { $('.menu-toggle').setAttribute('aria-expanded', 'false'); $('#main-nav').classList.remove('open'); }));
  $('.dialog-close').addEventListener('click', () => $('#order-dialog').close());
  $('#order-dialog').addEventListener('click', e => { if (e.target === e.currentTarget) e.currentTarget.close(); });
  $('#order-form').addEventListener('submit', e => {
    e.preventDefault();
    const form = e.currentTarget; if (!form.reportValidity()) return;
    const error = $('#form-error'); const url = whatsappUrl(orderMessage(new FormData(form)));
    if (!url) { error.hidden = false; error.textContent = copy[language].missingNumber; return; }
    error.hidden = true; window.open(url, '_blank', 'noopener,noreferrer');
  });

  const social = C.INSTAGRAM_URL || '#instagram';
  ['instagram-link','footer-instagram'].forEach(id => { const a = document.getElementById(id); if (a) a.href = social; });
  $('#footer-facebook').href = C.FACEBOOK_URL || '#facebook';
  $('#payment-note').hidden = !C.CASH_ON_DELIVERY_ENABLED;
  $('#year').textContent = new Date().getFullYear();
  updateLanguage(localStorage.getItem('senadem-language') || 'ar');
  observeReveals();
})();

