/**
 * Wedding content — edit this file to reuse the template for different couples.
 * UI components should import from here instead of hardcoding values.
 */
const weddingData = {
  couple: {
    bride: 'آمال',
    groom: 'أحمد',
  },
  date: {
    /** Local calendar date used by the countdown (YYYY-MM-DD). */
    iso: '2027-06-20',
    day: '٢٠',
    month: 'حزيران',
    year: '٢٠٢٧',
    /** Formatted display string for sections that need a single line. */
    display: '٢٠ حزيران ٢٠٢٧',
  },
  images: {
    openingCover: '/images/opening-cover.jpg',
    firstSectionBackground: '/images/first-section-background.jpg',
    flower: '/images/flower-decoration.png',
    waxSeal: '/images/wax-seal.png',
    waxSealVideo: '/videos/wax-seal.mp4',
    timelineFlower: '/images/timeline-flower.png',
    vineBranch: '/images/decor/vine-branch.png',
    vineSymmetric: '/images/decor/vine-symmetric.png',
    studioLogo: '/images/studio-logo.png',
    envelope: {
      seal: '/images/envelope/seal.png',
      flapTop: '/images/envelope/flap-top.png',
      flapBottom: '/images/envelope/flap-bottom.png',
      flapLeft: '/images/envelope/flap-left.png',
      flapRight: '/images/envelope/flap-right.png',
      card: '/images/envelope/invitation-card.jpg',
      assembled: '/images/envelope/assembled-ref.jpg',
    },
  },
  venue: {
    eyebrow: 'المكان',
    title: 'أين نحتفل',
    intro: 'يسعدنا أن نحتفل بهذا اليوم الخاص بوجودكم معنا.',
    name: 'اسم القاعة',
    address: 'عنوان القاعة',
    date: '٢٠ حزيران ٢٠٢٧',
    time: '٤:٠٠ مساءً',
    mapsUrl: 'https://maps.google.com/',
    mapsLabel: 'عرض على خرائط Google',
    labels: {
      venue: 'القاعة',
      address: 'العنوان',
      date: 'التاريخ',
      time: 'الوقت',
    },
  },
  dressCode: {
    eyebrow: 'قواعد اللباس',
    title: 'أمسية أنيقة',
    description:
      'ندعوكم لارتداء ملابس سهرة أنيقة والمشاركة معنا في هذه المناسبة الخاصة.',
    attire: 'ملابس رسمية',
  },
  rsvp: {
    eyebrow: 'تأكيد الحضور',
    title: 'هل ستشاركوننا؟',
    description:
      'يرجى إعلامنا إن كنتم ستشاركوننا الاحتفال بيومنا الخاص.',
    deadline: 'نرجو الرد قبل ١ حزيران ٢٠٢٧',
    whatsappNumber: 'YOUR_WHATSAPP_NUMBER',
    acceptLabel: 'نعم، سأحضر',
    declineLabel: 'للأسف، لن أتمكن',
    acceptMessage:
      'مرحباً! آمال وأحمد، يسعدني حضور زفافكما في ٢٠ حزيران ٢٠٢٧. شكراً لدعوتكما!',
    declineMessage:
      'مرحباً! آمال وأحمد، للأسف لن أتمكن من حضور زفافكما في ٢٠ حزيران ٢٠٢٧. شكراً لدعوتكما!',
  },
  closing: {
    eyebrow: 'بكل حب',
    title: 'لا نستطيع الانتظار للاحتفال معكم',
    message:
      'شكراً لكونكم جزءاً من قصتنا. حضوركم سيجعل يومنا الخاص أجمل وأكثر معنى.',
    signature: 'آمال وأحمد',
  },
  studio: {
    name: 'Thread & Vow',
    credit: 'من تصميم وتنفيذ',
    logo: '/images/studio-logo.png',
  },
  story: {
    eyebrow: 'قصتنا',
    title: 'كيف بدأ كل شيء',
    text: 'بدأ كل شيء بلحظة بسيطة لم نتوقع أن تكون بداية إلى الأبد. عبر أحاديث لا تُحصى، وذكريات لا تُنسى، ولحظات صغيرة جميلة، صارت قصتنا شيئاً لا نريد له أن ينتهي.',
  },
  timeline: {
    eyebrow: 'الاحتفال',
    title: 'يوم زفافنا',
    events: [
      {
        time: '٤:٠٠ مساءً',
        title: 'مراسم العقد',
        description:
          'انضموا إلينا بينما نتبادل العهود ونبدأ هذا الفصل الجميل معاً.',
      },
      {
        time: '٥:٣٠ مساءً',
        title: 'استقبال الضيوف',
        description:
          'استمتعوا بالمشروبات والموسيقى والمقبلات بينما نحتفل مع أحبائنا.',
      },
      {
        time: '٧:٠٠ مساءً',
        title: 'العشاء',
        description:
          'أمسية من العشاء والضحك واللحظات التي لا تُنسى.',
      },
      {
        time: '٩:٠٠ مساءً',
        title: 'الرقص',
        description: 'لنحتفل ونرقص ونصنع الذكريات معاً.',
      },
    ],
  },
  memories: {
    eyebrow: 'ذكريات',
    title: 'ذكرياتنا',
    intro: 'بعض اللحظات خُلقت لتبقى في الذاكرة إلى الأبد.',
    line: 'عمرٌ من اللحظات الصغيرة، مكتوب في إلى الأبد واحد.',
  },
  copy: {
    openingEyebrow: 'مع عائلتيهما',
    openButton: 'افتح الدعوة',
    openInvitationAria: 'افتح دعوة الزفاف',
    heroEyebrow: 'زفاف',
    heroInvite: 'ندعوكم للاحتفال بيومنا الخاص',
    scrollHint: 'مرّر للاستكشاف',
    weddingDayHeading: 'يوم زفافنا',
    dayArrived: 'لقد حان يومنا الخاص',
    pageTitleSuffix: 'دعوة زفاف',
    countdownLabels: {
      days: 'يوم',
      hours: 'ساعة',
      minutes: 'دقيقة',
      seconds: 'ثانية',
    },
  },
  theme: {
    template: 'stationery',
    colors: {
      background: '#f7f2e9',
      surface: '#fffdfb',
      ink: '#5c2f36',
      muted: '#7a6468',
      botanical: '#6e3a42',
      botanicalSoft: '#e8ddd0',
      line: '#d5c09a',
      blush: '#e8ddd0',
    },
  },
}

export default weddingData
