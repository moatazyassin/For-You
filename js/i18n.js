/* ════ I18N ════ */
window.currentLang = localStorage.getItem('lang') || 'en';

const TRANSLATIONS = {
  en: {
    'nav.logo':  '💕 For You',
    'nav.back':  '← back to our garden',
    'nav.lang':  'العربية',
    'hero.eyebrow': '✦ A little world, made just for you ✦',
    'hero.line1': 'Gardens of',
    'hero.line2': 'Our Love',
    'hero.sub':  'Every flower here bloomed thinking of you.<br/>Every animation carries a heartbeat — yours.',
    'card1.cat':   'Amber Garden',
    'card1.title': 'Orange Blossom Night',
    'card1.desc':  'Warm amber flowers bloom one by one under a velvet sky, their glow reaching out like your smile in the dark.',
    'card1.link':  'open the garden →',
    'card1.btn':   'Explore ✦',
    'card2.cat':   'Moonlit Garden',
    'card2.title': 'Blue Teal Night Blooms',
    'card2.desc':  'Ethereal teal flowers rise from darkness, stars blink and fireflies dance — peaceful as holding your hand at night.',
    'card2.link':  'open the garden →',
    'card2.btn':   'Explore ✦',
    'card3.cat':   'A Little Game',
    'card3.title': 'Will You Be Mine?',
    'card3.desc':  'A sweet game — clicking "No" only makes the "Yes" grow bigger, because there\'s only one right answer.',
    'card3.link':  'play the game →',
    'card3.btn':   'Play ✦',
    'card4.cat':   'Neon Garden',
    'card4.title': 'Pink Blossom in the Dark',
    'card4.desc':  'Bold neon-pink flowers glow against the dark — vibrant and electric, like the feeling whenever I see you.',
    'card4.link':  'open the garden →',
    'card4.btn':   'Explore ✦',
    'card5.cat':   'Particle Heart',
    'card5.title': 'A Thousand Sparks of Love',
    'card5.desc':  'Thousands of glowing particles drift and find each other, forming a perfect heart — just like we found each other.',
    'card5.link':  'feel the magic →',
    'card5.btn':   'Feel it ✦',
    'card6.cat':   'Eid Mubarak',
    'card6.title': 'Eid Mubarak, My Love',
    'card6.desc':  'A luminous Eid letter in ivory and gold — where every word is a prayer and every line a blessing written just for you.',
    'card6.link':  'open the letter →',
    'card6.btn':   'Open ✦',
    'lovenote.p':   '"Every pixel here was placed with love.<br/>This garden is yours — always."',
    'lovenote.sig': '— with all my heart 💕',
    'valentine.question': 'Will you be my Valentine?',
    'valentine.yes':      'Yes 💖',
    'valentine.no':       'No',
    'valentine.win.h2':   'Yay! I knew it! 💖',
    'valentine.win.p':    'You made the bear very happy!',
    'heart.btn.green':  'Emerald',
    'heart.btn.purple': 'Violet',
    'heart.btn.cyan':   'Sapphire',
    'heart.btn.red':    'Rose',
    'eid.heading':    'Eid Mubarak,<br/><em>My Love</em>',
    'eid.sub':        'عيد سعيد &nbsp;·&nbsp; With All My Heart',
    'eid.salutation': 'My dearest,',
    'eid.p1': 'On this blessed Eid, the only thought in my heart is you. Every prayer I offer carries your name within it — quietly, tenderly, the way the moon rises each night without needing to announce itself.',
    'eid.p2': 'You make every celebration feel fuller, every moment of gratitude deeper. Having you in my life is the greatest gift I could ever ask for — and on a day meant for joy, I can think of no greater joy than you.',
    'eid.p3': 'May this Eid bring softness to everything around you. May the things that worry you quiet down, and may every beautiful thing you deserve find its way gently to you.',
    'eid.p4': 'I love you — in this season and every season after.',
    'eid.sig.label': 'With love, always',
    'eid.sig.name':  'Yours, forever',
    'eid.footer':    'Wishing you light, peace, and all things beautiful &nbsp;✦',
  },
  ar: {
    'nav.logo':  '💕 لكِ أنتِ',
    'nav.back':  'العودة إلى حديقتنا →',
    'nav.lang':  'English',
    'hero.eyebrow': '✦ عالَم صغير، صُنع خصيصاً لكِ ✦',
    'hero.line1': 'حدائق',
    'hero.line2': 'حُبِّنا',
    'hero.sub':  'كل زهرة هنا تفتّحت وأنا أفكّر فيكِ.<br/>كل حركة تحمل نبضة قلب — قلبكِ.',
    'card1.cat':   'حديقة العنبر',
    'card1.title': 'ليلة زهر البرتقال',
    'card1.desc':  'تتفتّح زهور عنبرية دافئة واحدة تلو الأخرى تحت سماء من المخمل، ضوؤها يمتد كابتسامتكِ في الظلام.',
    'card1.link':  'افتحي الحديقة ←',
    'card1.btn':   'استكشفي ✦',
    'card2.cat':   'حديقة ضوء القمر',
    'card2.title': 'أزهار ليلية فيروزية',
    'card2.desc':  'أزهار فيروزية أثيرية تنبثق من الظلام، النجوم تومض واليراعات ترقص — هادئة كإمساك يدكِ في الليل.',
    'card2.link':  'افتحي الحديقة ←',
    'card2.btn':   'استكشفي ✦',
    'card3.cat':   'لعبة صغيرة',
    'card3.title': 'هل ستكونين معي؟',
    'card3.desc':  'لعبة حلوة — الضغط على "لا" يجعل "نعم" تكبر أكثر، لأن هناك إجابة واحدة صحيحة فقط.',
    'card3.link':  'العبي اللعبة ←',
    'card3.btn':   'العبي ✦',
    'card4.cat':   'حديقة النيون',
    'card4.title': 'أزهار وردية في الظلام',
    'card4.desc':  'زهور وردية نيونية جريئة تتألق في الظلام — حيّة وكهربائية، كالشعور الذي أحسّه كلما رأيتكِ.',
    'card4.link':  'افتحي الحديقة ←',
    'card4.btn':   'استكشفي ✦',
    'card5.cat':   'قلب الجسيمات',
    'card5.title': 'ألف شرارة من الحب',
    'card5.desc':  'آلاف الجسيمات المضيئة تتحرك وتجد بعضها، مشكّلةً قلباً مثالياً — تماماً كما وجدنا بعضنا.',
    'card5.link':  'أحسّي السحر ←',
    'card5.btn':   'أحسّيه ✦',
    'card6.cat':   'عيد مبارك',
    'card6.title': 'عيد مبارك، حبيبتي',
    'card6.desc':  'رسالة عيد مضيئة بالعاج والذهب — كل كلمة دعاء وكل سطر بركة كُتبت خصيصاً لكِ.',
    'card6.link':  'افتحي الرسالة ←',
    'card6.btn':   'افتحي ✦',
    'lovenote.p':   '"كل بكسل هنا وُضع بمحبة.<br/>هذه الحديقة لكِ — دائماً."',
    'lovenote.sig': '— بكل قلبي 💕',
    'valentine.question': 'هل ستكونين حبيبتي؟',
    'valentine.yes':      'نعم 💖',
    'valentine.no':       'لا',
    'valentine.win.h2':   'رائع! كنت أعرف! 💖',
    'valentine.win.p':    'لقد جعلتِ الدبّ سعيداً جداً!',
    'heart.btn.green':  'زمرد',
    'heart.btn.purple': 'بنفسجي',
    'heart.btn.cyan':   'ياقوت',
    'heart.btn.red':    'وردي',
    'eid.heading':    'عيد مبارك،<br/><em>حبيبتي</em>',
    'eid.sub':        'عيد سعيد &nbsp;·&nbsp; بكل قلبي',
    'eid.salutation': 'حبيبتي الغالية،',
    'eid.p1': 'في هذا العيد المبارك، الفكر الوحيد في قلبي هو أنتِ. كل دعاء أرفعه يحمل اسمكِ بداخله — بهدوء وحنان، كما يطلع القمر كل ليلة دون أن يحتاج إلى أن يُعلن عن نفسه.',
    'eid.p2': 'أنتِ تجعلين كل احتفال أكثر اكتمالاً، وكل لحظة امتنان أعمق. وجودكِ في حياتي هو أعظم هبة يمكن أن أطلبها — وفي يوم صُنع للفرح، لا يخطر لي فرح أعظم منكِ.',
    'eid.p3': 'أسأل الله أن يجلب هذا العيد اللطف لكل ما يحيط بكِ. وأن يهدأ كل ما يقلقكِ، وأن يجد كل شيء جميل تستحقينه طريقه إليكِ برفق.',
    'eid.p4': 'أحبّكِ — في هذا الموسم وكل موسم بعده.',
    'eid.sig.label': 'بالمحبة، دائماً',
    'eid.sig.name':  'لكِ، للأبد',
    'eid.footer':    'أتمنى لكِ النور والسلام وكل ما هو جميل &nbsp;✦',
  }
};

function setLanguage(lang) {
  window.currentLang = lang;
  localStorage.setItem('lang', lang);

  const html = document.documentElement;
  html.lang = lang;
  html.dir  = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-ar', lang === 'ar');

  const t = TRANSLATIONS[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* refresh nav title if on a sub-page */
  const navTitle = document.getElementById('navTitle');
  if (navTitle && window.currentPage && window.currentPage !== 'home') {
    const p = PROJECTS.find(x => x.id === window.currentPage);
    if (p) {
      navTitle.textContent = lang === 'ar' ? (p.titleAr || p.title) : p.title;
    }
  }

  /* reset valentine state so No-button text matches the new language */
  const noBtn = document.getElementById('vnoBtn');
  if (noBtn) {
    noBtn.textContent = t['valentine.no'];
    window.vMsgIdx   = 0;
    window.vFontSize = 22;
    const yesBtn = document.getElementById('vyesBtn');
    if (yesBtn) { yesBtn.style.fontSize = '22px'; yesBtn.style.padding = ''; }
  }
}

function toggleLang() {
  setLanguage(window.currentLang === 'en' ? 'ar' : 'en');
}

document.addEventListener('DOMContentLoaded', () => setLanguage(window.currentLang));
