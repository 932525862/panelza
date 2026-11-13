// Barcha matnlar shu yerda. Sahifa, JSON-LD (FAQ, mahsulotlar) va meta teglar
// bitta manbadan olinadi, shuning uchun ular hech qachon bir-biridan farq qilmaydi.

export const PHONE = "+998 77 408 00 05";
export const PHONE_RAW = "+998774080005";
export const EMAIL = "panelzagroup@gmail.com";

const ru = {
  code: "ru",
  htmlLang: "ru",
  ogLocale: "ru_RU",
  path: "/",
  langName: "Русский",
  seo: {
    title: "Сэндвич-панели в Ташкенте и Узбекистане | Panelza",
    description:
      "Завод Panelza: стеновые и кровельные сэндвич-панели из минеральной ваты и пенополистирола. Производство с 2016 года, доставка по Узбекистану. Закажите!",
    keywords:
      "сэндвич панели, сэндвич панели Ташкент, сэндвич панели Узбекистан, купить сэндвич панели, завод сэндвич панелей, стеновые сэндвич панели, кровельные сэндвич панели, сэндвич панели минеральная вата, сэндвич панели пенополистирол, Panelza",
  },
  menu: {
    home: "Главная",
    products: "Продукция",
    features: "Преимущества",
    ourStory: "О заводе",
    projects: "Проекты",
    faq: "Вопросы",
    contact: "Контакты",
  },
  common: {
    order: "Заказать",
    call: "Позвонить",
    logoAlt: "Panelza — завод сэндвич-панелей, логотип",
    menuToggle: "Открыть меню",
    switchLang: "Сменить язык",
    mainNav: "Основная навигация",
  },
  home: {
    h1: "Сэндвич-панели в Ташкенте и по всему Узбекистану",
    h1Accent: "— напрямую с завода Panelza",
    subtitle:
      "Panelza производит стеновые и кровельные сэндвич-панели из минеральной ваты и пенополистирола и поставляет их по Узбекистану и в страны СНГ.",
    description:
      "Наши панели прочные, тёплые и долговечные: подходят для складов, промышленных зданий, торговых центров, ангаров и частного строительства.",
    cta: "Получить каталог с ценами",
    heroAlt: "Монтаж сэндвич-панелей Panelza на строительном объекте",
    stats: [
      { value: "2016", label: "год основания завода" },
      { value: "450 000", label: "панелей в год — мощность" },
      { value: "50–150 мм", label: "толщина панелей" },
    ],
  },
  features: {
    sectionTitle: "Почему выбирают сэндвич-панели Panelza",
    intro:
      "Покупая сэндвич-панели у производителя, вы получаете стабильное качество, понятные сроки и цену без посредников.",
    cards: [
      {
        title: "Современное производство",
        description:
          "Европейское автоматизированное оборудование и контроль качества на каждом этапе — от резки до упаковки.",
      },
      {
        title: "Качественные материалы",
        description:
          "Оцинкованная сталь 0,45 мм и сертифицированные утеплители: минеральная плита на базальтовой основе и пенополистирол.",
      },
      {
        title: "Надёжная упаковка и доставка",
        description:
          "Каждая панель надёжно упаковывается. Доставляем по всему Узбекистану и помогаем рассчитать сроки и маршрут.",
      },
      {
        title: "Экспортные стандарты",
        description:
          "Продукция соответствует международным требованиям, возможны поставки в Казахстан, Кыргызстан и другие страны региона.",
      },
    ],
  },
  products: {
    heading: "Наши сэндвич-панели: стеновые и кровельные",
    intro:
      "Производим четыре основных вида сэндвич-панелей. Стеновые панели применяют для наружных стен и перегородок, кровельные — для устройства крыш. Утеплитель — минеральная вата или пенополистирол.",
    order: "Заказать",
    items: [
      {
        key: "wall-mineral",
        title: "Стеновые сэндвич-панели из минеральной ваты",
        alt: "Стеновые сэндвич-панели из минеральной ваты Panelza",
        description:
          "Негорючий утеплитель, высокая звукоизоляция. Для стен складов, цехов и общественных зданий.",
        specs: [
          ["Толщина", "50, 80, 100, 120, 150 мм"],
          ["Плотность", "ρ = 100 кг/м³"],
          ["Толщина стали", "0,45 мм"],
          ["Рабочая ширина", "1200 мм"],
          ["Утеплитель", "Минеральная плита на базальтовой основе"],
        ],
      },
      {
        key: "roof-mineral",
        title: "Кровельные сэндвич-панели из минеральной ваты",
        alt: "Кровельные сэндвич-панели из минеральной ваты Panelza",
        description:
          "Надёжная кровля с теплоизоляцией и защитой от шума. Подходит для промышленных и коммерческих зданий.",
        specs: [
          ["Толщина", "50, 80, 100, 120, 150 мм"],
          ["Плотность", "ρ = 100 кг/м³"],
          ["Толщина стали", "0,45 мм"],
          ["Рабочая ширина", "960 мм"],
          ["Высота волны", "35 мм"],
          ["Утеплитель", "Минеральная плита на базальтовой основе"],
        ],
      },
      {
        key: "wall-eps",
        title: "Стеновые сэндвич-панели из пенополистирола",
        alt: "Стеновые сэндвич-панели из пенополистирола Panelza",
        description:
          "Лёгкие панели с хорошей теплоизоляцией для быстрого монтажа стен и перегородок.",
        specs: [
          ["Толщина", "50, 80, 100, 120, 150 мм"],
          ["Плотность", "ρ = 10–20 кг/м³"],
          ["Толщина стали", "0,45 мм"],
          ["Рабочая ширина", "1200 мм"],
          ["Утеплитель", "Пенополистирольные плиты"],
        ],
      },
      {
        key: "roof-eps",
        title: "Кровельные сэндвич-панели из пенополистирола",
        alt: "Кровельные сэндвич-панели из пенополистирола Panelza",
        description:
          "Лёгкая тёплая кровля для складов, навесов и частных построек.",
        specs: [
          ["Толщина", "50, 80, 100, 120, 150 мм"],
          ["Плотность", "ρ = 10–20 кг/м³"],
          ["Толщина стали", "0,45 мм"],
          ["Рабочая ширина", "960 мм"],
          ["Высота волны", "35 мм"],
          ["Утеплитель", "Пенополистирольные плиты"],
        ],
      },
    ],
  },
  ourStory: {
    heading: "О заводе Panelza — производитель сэндвич-панелей в Узбекистане",
    subheading:
      "С 2016 года Panelza предлагает надёжные решения для современного строительства.",
    focusIntro: "С первого дня работы мы ориентированы на:",
    focus: [
      "инновации в технологиях и производстве;",
      "безупречное качество на всех этапах;",
      "надёжность в сроках и исполнении заказов.",
    ],
    paragraphs: [
      "Наш завод в Ташкенте оснащён современным европейским оборудованием, которое позволяет изготавливать сэндвич-панели различных размеров и характеристик — быстро, точно и в больших объёмах. Производственная мощность — до 450 000 панелей в год.",
      "Мы используем только сертифицированные материалы, соответствующие международным стандартам. Каждая панель проходит строгий контроль качества, что гарантирует прочность, теплоизоляцию и долговечность.",
      "Нам доверяют как крупные строительные компании, так и частные застройщики по всему Узбекистану. Мы гордимся тем, что участвуем в создании зданий, которые служат людям десятилетиями.",
    ],
  },
  projects: {
    heading: "Производство, технологии и доставка",
    more: "Связаться с нами",
    prev: "Предыдущий слайд",
    next: "Следующий слайд",
    items: [
      {
        key: "factory",
        title: "Производственная база",
        location: "Ташкент, Узбекистан",
        client: "Современное производство сэндвич-панелей",
        duration: "Мощность: до 450 000 панелей в год",
        description:
          "Линия оснащена европейским оборудованием с высокой степенью автоматизации. Предприятие ориентировано на крупные строительные проекты по всей стране.",
        alt: "Производственная линия завода сэндвич-панелей Panelza в Ташкенте",
      },
      {
        key: "technology",
        title: "Технологии и материалы",
        location: "Ташкент, Узбекистан",
        client: "",
        duration: "",
        description:
          "Мы применяем современные утеплители: минеральную вату и пенополистирол. Производственный процесс автоматизирован на всех этапах — от резки до упаковки. Это даёт высокую точность и энергоэффективность продукции.",
        alt: "Технология производства сэндвич-панелей из минеральной ваты",
      },
      {
        key: "delivery",
        title: "Логистика и доставка",
        location: "Ташкент, Узбекистан",
        client: "",
        duration: "",
        description:
          "Доставка осуществляется по всей территории Узбекистана. Наш логистический отдел помогает с расчётом сроков и оптимальных маршрутов. Возможны экспортные поставки в страны региона (Казахстан, Кыргызстан и др.).",
        alt: "Доставка сэндвич-панелей по Узбекистану",
      },
    ],
  },
  gallery: {
    heading: "Наши последние объекты из сэндвич-панелей",
    alts: [
      "Здание из сэндвич-панелей Panelza — внешний вид",
      "Современное здание со стенами из сэндвич-панелей",
      "Монтаж сэндвич-панелей на строительном объекте",
      "Интерьер здания с панельной отделкой",
      "Металлоконструкция со стеновыми сэндвич-панелями",
      "Фасад из сэндвич-панелей в процессе монтажа",
      "Завершающий этап строительства здания из сэндвич-панелей",
      "Каркасное здание с кровельными сэндвич-панелями",
    ],
  },
  faq: {
    heading: "Частые вопросы о сэндвич-панелях",
    items: [
      {
        q: "Какие сэндвич-панели производит Panelza?",
        a: "Мы производим стеновые и кровельные сэндвич-панели с утеплителем из минеральной ваты (базальтовая плита) и из пенополистирола. Всего четыре основных вида, все с оцинкованной сталью толщиной 0,45 мм.",
      },
      {
        q: "Какая толщина сэндвич-панелей доступна?",
        a: "Толщина панелей — 50, 80, 100, 120 и 150 мм. Нужную толщину подбирают под климат, назначение здания и требования к теплоизоляции.",
      },
      {
        q: "Чем панели из минеральной ваты отличаются от панелей из пенополистирола?",
        a: "Минеральная вата (плотность 100 кг/м³) негорючая и лучше защищает от шума, поэтому её выбирают для производственных и общественных зданий. Пенополистирол легче, что упрощает монтаж, и хорошо сохраняет тепло — его часто берут для складов, навесов и частных построек.",
      },
      {
        q: "Какая рабочая ширина у стеновых и кровельных панелей?",
        a: "Рабочая ширина стеновых панелей — 1200 мм, кровельных — 960 мм при высоте волны 35 мм.",
      },
      {
        q: "Вы доставляете сэндвич-панели по Узбекистану?",
        a: "Да, доставляем по всей территории Узбекистана. Логистический отдел поможет рассчитать сроки и маршрут. Возможны экспортные поставки в Казахстан, Кыргызстан и другие страны региона.",
      },
      {
        q: "Как узнать цену и заказать сэндвич-панели?",
        a: "Оставьте заявку в форме на сайте или позвоните по номеру +998 77 408 00 05 — мы пришлём каталог с ценами и рассчитаем стоимость под ваш объект.",
      },
      {
        q: "Где находится завод Panelza?",
        a: "Завод находится в Ташкенте, МФЙ Гульбог, улица Зиё Нур. Производственная мощность — до 450 000 панелей в год.",
      },
    ],
  },
  contact: {
    heading: "Каталог с ценами на сэндвич-панели",
    tagline: "Завод по производству сэндвич-панелей",
    formTitle: "Каталог с ценами и описанием каждой позиции",
    formText: "Заполните форму и получите каталог нашей продукции",
    name: "Ваше имя",
    phone: "Телефон",
    submit: "Отправить",
    phoneError: "Номер телефона введён не полностью!",
    success: "Успешно отправлено!",
    sendError: "Ошибка при отправке. Попробуйте позже или позвоните нам.",
    leadTitle: "Новая заявка!",
    leadName: "Имя",
    leadPhone: "Телефон",
    panelAlt: "Сэндвич-панели Panelza",
  },
  footer: {
    pages: "Разделы",
    products: "Продукция",
    productLinks: [
      "Стеновые панели из минеральной ваты",
      "Кровельные панели из минеральной ваты",
      "Стеновые панели из пенополистирола",
      "Кровельные панели из пенополистирола",
    ],
    contactTitle: "Контакты",
    address: "Адрес: Ташкент, МФЙ Гульбог, улица Зиё Нур",
    quickPhone: "Введите свой номер",
    submit: "Отправить",
    rights: "Все права защищены.",
  },
  schema: {
    streetAddress: "МФЙ Гульбог, улица Зиё Нур",
    city: "Ташкент",
    orgDescription:
      "Завод по производству стеновых и кровельных сэндвич-панелей из минеральной ваты и пенополистирола в Ташкенте. Доставка по Узбекистану.",
    category: "Сэндвич-панели",
  },
};

const uz = {
  code: "uz",
  htmlLang: "uz",
  ogLocale: "uz_UZ",
  path: "/uz/",
  langName: "Oʻzbekcha",
  seo: {
    title: "Sendvich panel Toshkent va O'zbekistonda | Panelza",
    description:
      "Panelza zavodi: mineral paxta va penopolistirolli devor hamda tom sendvich panellari. 2016-yildan beri ishlab chiqaramiz, O'zbekiston bo'ylab yetkazamiz.",
    keywords:
      "sendvich panel, sendvich panel Toshkent, sendvich panel O'zbekiston, sendvich panel narxi, sendvich panel sotib olish, sendvich panel zavodi, devor sendvich panel, tom sendvich panel, mineral paxtali sendvich panel, penopolistirol sendvich panel, panel, Panelza",
  },
  menu: {
    home: "Bosh sahifa",
    products: "Mahsulotlar",
    features: "Afzalliklar",
    ourStory: "Zavod haqida",
    projects: "Loyihalar",
    faq: "Savollar",
    contact: "Aloqa",
  },
  common: {
    order: "Buyurtma berish",
    call: "Qoʻngʻiroq qilish",
    logoAlt: "Panelza — sendvich panel zavodi logotipi",
    menuToggle: "Menyuni ochish",
    switchLang: "Tilni almashtirish",
    mainNav: "Asosiy menyu",
  },
  home: {
    h1: "Toshkentda va butun O'zbekiston bo'ylab sendvich panel",
    h1Accent: "— to'g'ridan-to'g'ri Panelza zavodidan",
    subtitle:
      "Panelza mineral paxta va penopolistirolli devor hamda tom sendvich panellarini ishlab chiqaradi va O'zbekiston hamda MDH mamlakatlariga yetkazib beradi.",
    description:
      "Panellarimiz mustahkam, issiq va uzoq xizmat qiladi: omborlar, sanoat binolari, savdo markazlari, angarlar va xususiy qurilish uchun mos.",
    cta: "Narxlar bilan katalogni olish",
    heroAlt: "Qurilish obyektida Panelza sendvich panellarini o'rnatish",
    stats: [
      { value: "2016", label: "zavod tashkil etilgan yil" },
      { value: "450 000", label: "yiliga panel — quvvat" },
      { value: "50–150 mm", label: "panel qalinligi" },
    ],
  },
  features: {
    sectionTitle: "Nima uchun Panelza sendvich panellari",
    intro:
      "Sendvich panelni ishlab chiqaruvchidan sotib olsangiz, barqaror sifat, aniq muddat va vositachisiz narxga ega bo'lasiz.",
    cards: [
      {
        title: "Zamonaviy ishlab chiqarish",
        description:
          "Yevropa avtomatlashtirilgan uskunalari va kesishdan qadoqlashgacha har bosqichda sifat nazorati.",
      },
      {
        title: "Sifatli materiallar",
        description:
          "0,45 mm ruxlangan po'lat va sertifikatlangan izolyatsiya: bazalt asosli mineral plita hamda penopolistirol.",
      },
      {
        title: "Ishonchli qadoqlash va yetkazish",
        description:
          "Har bir panel ehtiyotkorlik bilan qadoqlanadi. O'zbekiston bo'ylab yetkazamiz, muddat va yo'nalishni hisoblashga yordam beramiz.",
      },
      {
        title: "Eksport standartlari",
        description:
          "Mahsulotimiz xalqaro talablarga javob beradi, Qozog'iston, Qirg'iziston va boshqa mamlakatlarga yetkazish mumkin.",
      },
    ],
  },
  products: {
    heading: "Bizning sendvich panellar: devor va tom",
    intro:
      "To'rtta asosiy turdagi sendvich panel ishlab chiqaramiz. Devor panellari tashqi devor va to'siqlar uchun, tom panellari tomni yopish uchun. Izolyatsiya — mineral paxta yoki penopolistirol.",
    order: "Buyurtma berish",
    items: [
      {
        key: "wall-mineral",
        title: "Mineral paxtali devor sendvich panellari",
        alt: "Panelza mineral paxtali devor sendvich panellari",
        description:
          "Yonmaydigan izolyatsiya, yuqori tovush izolyatsiyasi. Omborlar, sexlar va jamoat binolari devorlari uchun.",
        specs: [
          ["Qalinligi", "50, 80, 100, 120, 150 mm"],
          ["Zichligi", "ρ = 100 kg/m³"],
          ["Po'lat qalinligi", "0,45 mm"],
          ["Ishchi kengligi", "1200 mm"],
          ["Izolyatsiya", "Bazalt asosli mineral plita"],
        ],
      },
      {
        key: "roof-mineral",
        title: "Mineral paxtali tom sendvich panellari",
        alt: "Panelza mineral paxtali tom sendvich panellari",
        description:
          "Issiqlik va shovqindan himoyalovchi ishonchli tom. Sanoat va tijorat binolari uchun mos.",
        specs: [
          ["Qalinligi", "50, 80, 100, 120, 150 mm"],
          ["Zichligi", "ρ = 100 kg/m³"],
          ["Po'lat qalinligi", "0,45 mm"],
          ["Ishchi kengligi", "960 mm"],
          ["To'lqin balandligi", "35 mm"],
          ["Izolyatsiya", "Bazalt asosli mineral plita"],
        ],
      },
      {
        key: "wall-eps",
        title: "Penopolistirolli devor sendvich panellari",
        alt: "Panelza penopolistirolli devor sendvich panellari",
        description:
          "Yengil va issiqlikni yaxshi saqlaydigan panellar, devor va to'siqlarni tez o'rnatish uchun.",
        specs: [
          ["Qalinligi", "50, 80, 100, 120, 150 mm"],
          ["Zichligi", "ρ = 10–20 kg/m³"],
          ["Po'lat qalinligi", "0,45 mm"],
          ["Ishchi kengligi", "1200 mm"],
          ["Izolyatsiya", "Penopolistirol plitalar"],
        ],
      },
      {
        key: "roof-eps",
        title: "Penopolistirolli tom sendvich panellari",
        alt: "Panelza penopolistirolli tom sendvich panellari",
        description:
          "Omborlar, shiypon va xususiy qurilishlar uchun yengil va issiq tom.",
        specs: [
          ["Qalinligi", "50, 80, 100, 120, 150 mm"],
          ["Zichligi", "ρ = 10–20 kg/m³"],
          ["Po'lat qalinligi", "0,45 mm"],
          ["Ishchi kengligi", "960 mm"],
          ["To'lqin balandligi", "35 mm"],
          ["Izolyatsiya", "Penopolistirol plitalar"],
        ],
      },
    ],
  },
  ourStory: {
    heading: "Panelza zavodi haqida — O'zbekistondagi sendvich panel ishlab chiqaruvchisi",
    subheading:
      "2016-yildan beri Panelza zamonaviy qurilish uchun ishonchli yechimlar taklif qiladi.",
    focusIntro: "Birinchi kundan boshlab biz quyidagilarga tayanamiz:",
    focus: [
      "texnologiya va ishlab chiqarishdagi yangiliklar;",
      "har bosqichda benuqson sifat;",
      "muddat va buyurtmalarni bajarishdagi ishonchlilik.",
    ],
    paragraphs: [
      "Toshkentdagi zavodimiz zamonaviy Yevropa uskunalari bilan jihozlangan: turli o'lcham va xususiyatdagi sendvich panellarni tez, aniq va katta hajmda tayyorlaymiz. Ishlab chiqarish quvvati — yiliga 450 000 tagacha panel.",
      "Biz faqat xalqaro standartlarga mos sertifikatlangan materiallardan foydalanamiz. Har bir panel qat'iy sifat nazoratidan o'tadi, bu uning mustahkamligi, issiqlik izolyatsiyasi va uzoq xizmat muddatini kafolatlaydi.",
      "Bizga yirik qurilish kompaniyalari ham, xususiy quruvchilar ham butun O'zbekiston bo'ylab ishonadi. Biz odamlarga o'nlab yillar xizmat qiladigan binolarni yaratishda ishtirok etishdan faxrlanamiz.",
    ],
  },
  projects: {
    heading: "Ishlab chiqarish, texnologiya va yetkazib berish",
    more: "Biz bilan bog'lanish",
    prev: "Oldingi slayd",
    next: "Keyingi slayd",
    items: [
      {
        key: "factory",
        title: "Ishlab chiqarish bazasi",
        location: "Toshkent, O'zbekiston",
        client: "Zamonaviy sendvich panel ishlab chiqarish",
        duration: "Quvvat: yiliga 450 000 tagacha panel",
        description:
          "Liniya yuqori darajada avtomatlashtirilgan Yevropa uskunalari bilan jihozlangan. Korxona butun mamlakat bo'ylab yirik qurilish loyihalariga mo'ljallangan.",
        alt: "Toshkentdagi Panelza sendvich panel zavodi ishlab chiqarish liniyasi",
      },
      {
        key: "technology",
        title: "Texnologiya va materiallar",
        location: "Toshkent, O'zbekiston",
        client: "",
        duration: "",
        description:
          "Zamonaviy izolyatsiyalardan foydalanamiz: mineral paxta va penopolistirol. Ishlab chiqarish jarayoni kesishdan qadoqlashgacha avtomatlashtirilgan. Bu mahsulotning yuqori aniqligi va energiya samaradorligini ta'minlaydi.",
        alt: "Mineral paxtali sendvich panel ishlab chiqarish texnologiyasi",
      },
      {
        key: "delivery",
        title: "Logistika va yetkazib berish",
        location: "Toshkent, O'zbekiston",
        client: "",
        duration: "",
        description:
          "O'zbekistonning butun hududiga yetkazib beramiz. Logistika bo'limi muddat va eng qulay yo'nalishni hisoblashga yordam beradi. Mintaqa mamlakatlariga (Qozog'iston, Qirg'iziston va boshqalar) eksport mumkin.",
        alt: "Sendvich panellarni O'zbekiston bo'ylab yetkazib berish",
      },
    ],
  },
  gallery: {
    heading: "Sendvich panellardan qurilgan oxirgi obyektlarimiz",
    alts: [
      "Panelza sendvich panellaridan qurilgan bino — tashqi ko'rinish",
      "Devorlari sendvich paneldan bo'lgan zamonaviy bino",
      "Qurilish obyektida sendvich panellarni o'rnatish",
      "Panel pardozli bino interyeri",
      "Devor sendvich panellari bilan metall konstruksiya",
      "O'rnatilayotgan sendvich panel fasad",
      "Sendvich panelli bino qurilishining yakuniy bosqichi",
      "Tom sendvich panellari yopilgan karkasli bino",
    ],
  },
  faq: {
    heading: "Sendvich panel haqida ko'p so'raladigan savollar",
    items: [
      {
        q: "Panelza qanday sendvich panellar ishlab chiqaradi?",
        a: "Biz mineral paxta (bazalt plita) va penopolistirol izolyatsiyali devor hamda tom sendvich panellarini ishlab chiqaramiz. Jami to'rtta asosiy tur, hammasida qalinligi 0,45 mm ruxlangan po'lat ishlatiladi.",
      },
      {
        q: "Sendvich panel qalinligi qanday bo'ladi?",
        a: "Panel qalinligi — 50, 80, 100, 120 va 150 mm. Kerakli qalinlik iqlim, bino vazifasi va issiqlik izolyatsiyasi talablariga qarab tanlanadi.",
      },
      {
        q: "Mineral paxtali panel penopolistirolli paneldan nimasi bilan farq qiladi?",
        a: "Mineral paxta (zichligi 100 kg/m³) yonmaydi va shovqindan yaxshiroq himoya qiladi, shuning uchun u ishlab chiqarish va jamoat binolari uchun tanlanadi. Penopolistirol yengilroq, shu sababli o'rnatish osonroq va issiqlikni yaxshi saqlaydi — omborlar, shiponlar va xususiy qurilishlar uchun ko'p olinadi.",
      },
      {
        q: "Devor va tom panellarining ishchi kengligi qancha?",
        a: "Devor panellarining ishchi kengligi — 1200 mm, tom panellariniki — 960 mm, to'lqin balandligi 35 mm.",
      },
      {
        q: "Sendvich panelni O'zbekiston bo'ylab yetkazib berasizlarmi?",
        a: "Ha, O'zbekistonning butun hududiga yetkazib beramiz. Logistika bo'limi muddat va yo'nalishni hisoblashga yordam beradi. Qozog'iston, Qirg'iziston va boshqa mamlakatlarga eksport ham mumkin.",
      },
      {
        q: "Sendvich panel narxini qanday bilish va buyurtma berish mumkin?",
        a: "Saytdagi formani to'ldiring yoki +998 77 408 00 05 raqamiga qo'ng'iroq qiling — narxlar bilan katalogni yuboramiz va obyektingiz uchun narxni hisoblab beramiz.",
      },
      {
        q: "Panelza zavodi qayerda joylashgan?",
        a: "Zavod Toshkentda, Gulbog MFY, Ziyo Nur ko'chasida joylashgan. Ishlab chiqarish quvvati — yiliga 450 000 tagacha panel.",
      },
    ],
  },
  contact: {
    heading: "Sendvich panel narxlari bilan katalog",
    tagline: "Sendvich panel ishlab chiqarish zavodi",
    formTitle: "Har bir mahsulot narxi va tavsifi bilan katalog",
    formText: "Formani to'ldiring va mahsulotlarimiz katalogini oling",
    name: "Ismingiz",
    phone: "Telefon",
    submit: "Yuborish",
    phoneError: "Telefon raqami to'liq kiritilmagan!",
    success: "Muvaffaqiyatli yuborildi!",
    sendError: "Yuborishda xatolik. Keyinroq urinib ko'ring yoki qo'ng'iroq qiling.",
    leadTitle: "Yangi ariza!",
    leadName: "Ism",
    leadPhone: "Telefon",
    panelAlt: "Panelza sendvich panellari",
  },
  footer: {
    pages: "Bo'limlar",
    products: "Mahsulotlar",
    productLinks: [
      "Mineral paxtali devor panellari",
      "Mineral paxtali tom panellari",
      "Penopolistirolli devor panellari",
      "Penopolistirolli tom panellari",
    ],
    contactTitle: "Aloqa",
    address: "Manzil: Toshkent, Gulbog MFY, Ziyo Nur ko'chasi",
    quickPhone: "Raqamingizni kiriting",
    submit: "Yuborish",
    rights: "Barcha huquqlar himoyalangan.",
  },
  schema: {
    streetAddress: "Gulbog MFY, Ziyo Nur ko'chasi",
    city: "Toshkent",
    orgDescription:
      "Toshkentda mineral paxta va penopolistirolli devor hamda tom sendvich panellari ishlab chiqarish zavodi. O'zbekiston bo'ylab yetkazib berish.",
    category: "Sendvich panellar",
  },
};

const en = {
  code: "en",
  htmlLang: "en",
  ogLocale: "en_US",
  path: "/en/",
  langName: "English",
  seo: {
    title: "Sandwich Panels in Tashkent, Uzbekistan | Panelza",
    description:
      "Panelza factory: wall and roof sandwich panels with mineral wool or EPS insulation. Manufacturing since 2016, delivery across Uzbekistan. Get a price list!",
    keywords:
      "sandwich panels, sandwich panels Uzbekistan, sandwich panels Tashkent, sandwich panel manufacturer, buy sandwich panels, wall sandwich panels, roof sandwich panels, mineral wool sandwich panels, EPS sandwich panels, Panelza",
  },
  menu: {
    home: "Home",
    products: "Products",
    features: "Benefits",
    ourStory: "About us",
    projects: "Projects",
    faq: "FAQ",
    contact: "Contact",
  },
  common: {
    order: "Order",
    call: "Call us",
    logoAlt: "Panelza — sandwich panel factory logo",
    menuToggle: "Open menu",
    switchLang: "Switch language",
    mainNav: "Main navigation",
  },
  home: {
    h1: "Sandwich panels in Tashkent and across Uzbekistan",
    h1Accent: "— direct from the Panelza factory",
    subtitle:
      "Panelza manufactures wall and roof sandwich panels with mineral wool or EPS insulation and delivers them across Uzbekistan and the CIS.",
    description:
      "Our panels are strong, warm and durable — suitable for warehouses, industrial buildings, shopping centres, hangars and private construction.",
    cta: "Get the price catalogue",
    heroAlt: "Panelza sandwich panels being installed on a construction site",
    stats: [
      { value: "2016", label: "factory founded" },
      { value: "450,000", label: "panels per year capacity" },
      { value: "50–150 mm", label: "panel thickness" },
    ],
  },
  features: {
    sectionTitle: "Why choose Panelza sandwich panels",
    intro:
      "Buying sandwich panels from the manufacturer means consistent quality, clear lead times and prices without middlemen.",
    cards: [
      {
        title: "Modern production",
        description:
          "European automated equipment and quality control at every stage, from cutting to packaging.",
      },
      {
        title: "Quality materials",
        description:
          "0.45 mm galvanised steel and certified insulation: basalt-based mineral wool slabs and expanded polystyrene (EPS).",
      },
      {
        title: "Secure packaging and delivery",
        description:
          "Every panel is carefully packed. We deliver across Uzbekistan and help plan lead times and routes.",
      },
      {
        title: "Export-ready standards",
        description:
          "Our products meet international requirements; shipments to Kazakhstan, Kyrgyzstan and other regional markets are possible.",
      },
    ],
  },
  products: {
    heading: "Our sandwich panels: wall and roof",
    intro:
      "We produce four main types of sandwich panels. Wall panels are used for exterior walls and partitions, roof panels for roofing. Insulation is mineral wool or expanded polystyrene.",
    order: "Order",
    items: [
      {
        key: "wall-mineral",
        title: "Mineral wool wall sandwich panels",
        alt: "Panelza mineral wool wall sandwich panels",
        description:
          "Non-combustible insulation with high sound absorption. For walls of warehouses, workshops and public buildings.",
        specs: [
          ["Thickness", "50, 80, 100, 120, 150 mm"],
          ["Density", "ρ = 100 kg/m³"],
          ["Steel thickness", "0.45 mm"],
          ["Effective width", "1200 mm"],
          ["Insulation", "Basalt-based mineral wool slab"],
        ],
      },
      {
        key: "roof-mineral",
        title: "Mineral wool roof sandwich panels",
        alt: "Panelza mineral wool roof sandwich panels",
        description:
          "Reliable roofing with thermal and noise insulation. Suited to industrial and commercial buildings.",
        specs: [
          ["Thickness", "50, 80, 100, 120, 150 mm"],
          ["Density", "ρ = 100 kg/m³"],
          ["Steel thickness", "0.45 mm"],
          ["Effective width", "960 mm"],
          ["Profile height", "35 mm"],
          ["Insulation", "Basalt-based mineral wool slab"],
        ],
      },
      {
        key: "wall-eps",
        title: "EPS wall sandwich panels",
        alt: "Panelza EPS wall sandwich panels",
        description:
          "Lightweight panels with good thermal insulation for fast installation of walls and partitions.",
        specs: [
          ["Thickness", "50, 80, 100, 120, 150 mm"],
          ["Density", "ρ = 10–20 kg/m³"],
          ["Steel thickness", "0.45 mm"],
          ["Effective width", "1200 mm"],
          ["Insulation", "Expanded polystyrene (EPS) slabs"],
        ],
      },
      {
        key: "roof-eps",
        title: "EPS roof sandwich panels",
        alt: "Panelza EPS roof sandwich panels",
        description:
          "A light, warm roof for warehouses, canopies and private buildings.",
        specs: [
          ["Thickness", "50, 80, 100, 120, 150 mm"],
          ["Density", "ρ = 10–20 kg/m³"],
          ["Steel thickness", "0.45 mm"],
          ["Effective width", "960 mm"],
          ["Profile height", "35 mm"],
          ["Insulation", "Expanded polystyrene (EPS) slabs"],
        ],
      },
    ],
  },
  ourStory: {
    heading: "About Panelza — sandwich panel manufacturer in Uzbekistan",
    subheading:
      "Since 2016, Panelza has delivered reliable solutions for modern construction.",
    focusIntro: "From day one we have focused on:",
    focus: [
      "innovation in technology and production;",
      "flawless quality at every stage;",
      "reliable lead times and order fulfilment.",
    ],
    paragraphs: [
      "Our factory in Tashkent is equipped with modern European machinery that lets us produce sandwich panels of various sizes and specifications — quickly, precisely and in large volumes. Production capacity is up to 450,000 panels per year.",
      "We use only certified materials that meet international standards. Every panel goes through strict quality control, guaranteeing strength, thermal insulation and durability.",
      "We are trusted by large construction companies and private developers across Uzbekistan. We are proud to help create buildings that serve people for decades.",
    ],
  },
  projects: {
    heading: "Production, technology and delivery",
    more: "Contact us",
    prev: "Previous slide",
    next: "Next slide",
    items: [
      {
        key: "factory",
        title: "Production facility",
        location: "Tashkent, Uzbekistan",
        client: "Modern sandwich panel manufacturing",
        duration: "Capacity: up to 450,000 panels per year",
        description:
          "The line is equipped with highly automated European machinery. The plant is geared towards large construction projects across the country.",
        alt: "Panelza sandwich panel factory production line in Tashkent",
      },
      {
        key: "technology",
        title: "Technology and materials",
        location: "Tashkent, Uzbekistan",
        client: "",
        duration: "",
        description:
          "We use modern insulation: mineral wool and expanded polystyrene. The production process is automated at every stage, from cutting to packaging, giving high precision and energy efficiency.",
        alt: "Mineral wool sandwich panel manufacturing technology",
      },
      {
        key: "delivery",
        title: "Logistics and delivery",
        location: "Tashkent, Uzbekistan",
        client: "",
        duration: "",
        description:
          "We deliver across Uzbekistan. Our logistics team helps calculate lead times and optimal routes. Export shipments to regional countries (Kazakhstan, Kyrgyzstan and others) are possible.",
        alt: "Sandwich panel delivery across Uzbekistan",
      },
    ],
  },
  gallery: {
    heading: "Our latest sandwich panel projects",
    alts: [
      "Building made of Panelza sandwich panels — exterior",
      "Modern building with sandwich panel walls",
      "Installing sandwich panels on a construction site",
      "Building interior with panel cladding",
      "Steel frame with wall sandwich panels",
      "Sandwich panel facade during installation",
      "Final stage of building construction with sandwich panels",
      "Framed building with roof sandwich panels",
    ],
  },
  faq: {
    heading: "Sandwich panels: frequently asked questions",
    items: [
      {
        q: "What sandwich panels does Panelza manufacture?",
        a: "We manufacture wall and roof sandwich panels with mineral wool (basalt slab) or expanded polystyrene insulation. There are four main types, all using 0.45 mm galvanised steel.",
      },
      {
        q: "What thicknesses of sandwich panels are available?",
        a: "Panel thickness is 50, 80, 100, 120 or 150 mm. The right thickness depends on climate, building purpose and thermal insulation requirements.",
      },
      {
        q: "How do mineral wool panels differ from EPS panels?",
        a: "Mineral wool (density 100 kg/m³) is non-combustible and offers better sound insulation, so it is chosen for industrial and public buildings. EPS is lighter, which makes installation easier, and retains heat well — it is often used for warehouses, canopies and private buildings.",
      },
      {
        q: "What is the effective width of wall and roof panels?",
        a: "Wall panels have an effective width of 1200 mm; roof panels 960 mm with a 35 mm profile height.",
      },
      {
        q: "Do you deliver sandwich panels across Uzbekistan?",
        a: "Yes, we deliver throughout Uzbekistan. Our logistics team helps calculate lead times and routes. Export shipments to Kazakhstan, Kyrgyzstan and other countries in the region are also possible.",
      },
      {
        q: "How can I get a price and order sandwich panels?",
        a: "Fill in the form on the site or call +998 77 408 00 05 — we will send our price catalogue and calculate the cost for your project.",
      },
      {
        q: "Where is the Panelza factory located?",
        a: "The factory is in Tashkent, Gulbog MFY, Ziyo Nur street. Production capacity is up to 450,000 panels per year.",
      },
    ],
  },
  contact: {
    heading: "Sandwich panel price catalogue",
    tagline: "Sandwich panel manufacturing plant",
    formTitle: "Catalogue with prices and a description of every item",
    formText: "Fill in the form and get our product catalogue",
    name: "Your name",
    phone: "Phone",
    submit: "Send",
    phoneError: "Phone number is incomplete!",
    success: "Sent successfully!",
    sendError: "Could not send. Please try again later or call us.",
    leadTitle: "New request!",
    leadName: "Name",
    leadPhone: "Phone",
    panelAlt: "Panelza sandwich panels",
  },
  footer: {
    pages: "Sections",
    products: "Products",
    productLinks: [
      "Mineral wool wall panels",
      "Mineral wool roof panels",
      "EPS wall panels",
      "EPS roof panels",
    ],
    contactTitle: "Contact",
    address: "Address: Tashkent, Gulbog MFY, Ziyo Nur street",
    quickPhone: "Enter your number",
    submit: "Send",
    rights: "All rights reserved.",
  },
  schema: {
    streetAddress: "Gulbog MFY, Ziyo Nur street",
    city: "Tashkent",
    orgDescription:
      "Factory producing wall and roof sandwich panels with mineral wool and EPS insulation in Tashkent. Delivery across Uzbekistan.",
    category: "Sandwich panels",
  },
};

const translations = { ru, uz, en };
export const LANGS = ["ru", "uz", "en"];
export const DEFAULT_LANG = "ru";

export default translations;
