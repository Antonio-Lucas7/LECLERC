import { Product, Category, LookbookItem, InstagramPost } from '../types';

export const STORE_CONTACT = {
  instagram: '@loja.leclerc',
  instagramUrl: 'https://www.instagram.com/loja.leclerc/',
  whatsapp: '+55 (11) 99887-6655',
  whatsappUrl: 'https://wa.me/5511998876655?text=Ol%C3%A1!%20Vim%20pelo%20site%20oficial%20da%20Leclerc%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20pe%C3%A7as.',
  address: 'Alameda Gabriel Monteiro da Silva, Jardins, São Paulo - SP',
  email: 'contato@lojaleclerc.com.br',
  hours: 'Segunda a Sexta: 10h às 19h | Sábado: 10h às 16h',
};

export const PRODUCTS: Product[] = [
  {
    id: 'blazer-leclerc-alfaiataria',
    name: 'BLAZER LECLERC ALFAIATARIA',
    category: 'Alfaiataria',
    description: 'Uma peça de alfaiataria pensada para acompanhar diferentes momentos com elegância e sofisticação.',
    detailedDescription: 'O Blazer Leclerc é a síntese da nossa filosofia quiet luxury. Desenvolvido em crepe estruturado com caimento fluido, lapela chanfrada clássica, botões encapados e forro em cetim com toque de seda. Proporciona versatilidade impecável para composições do dia à noite.',
    image: '/images/blazer_leclerc.jpg',
    secondaryImage: '/images/hero.jpg',
    detailImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop',
    price: 'R$ 689,00',
    badge: 'Flagship Collection',
    isFlagship: true,
    features: [
      'Alfaiataria contemporânea de estrutura leve',
      'Caimento elegante e acinturado',
      'Versatilidade para looks casuais e formais',
      'Acabamento sofisticado em cetim interno',
      'Botões delicados com gravação artesanal'
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Off-White Creme', hex: '#FAF7F2' },
      { name: 'Nude Areia', hex: '#E2D6C6' },
      { name: 'Preto Absoluto', hex: '#141211' }
    ]
  },
  {
    id: 'vestido-midi-seda',
    name: 'VESTIDO MIDI ELEGANCE SEDA',
    category: 'Vestidos',
    description: 'Modelagem fluida com decote sutil em v e caimento impecável em toque de seda.',
    detailedDescription: 'Esculpido em toque de seda pura com sutil brilho acetinado. O Vestido Midi Elegance envolve a silhueta feminina com leveza incomparável, destacando o movimento natural do corpo.',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop',
    price: 'R$ 749,00',
    badge: 'Nova Coleção',
    isNewIn: true,
    features: [
      'Teceura ultra fluida em cetim toque de seda',
      'Decote V sofisticado nas costas',
      'Fenda lateral discreta e elegante',
      'Comprimento midi atemporal'
    ],
    sizes: ['PP', 'P', 'M', 'G'],
    colors: [
      { name: 'Champagne Nude', hex: '#EBE3D5' },
      { name: 'Marsala Vinho', hex: '#581825' },
      { name: 'Preto Nobre', hex: '#0E0E0E' }
    ]
  },
  {
    id: 'calca-pantalona-alfaiataria',
    name: 'CALÇA PANTALONA HIGH WAIST',
    category: 'Calças',
    description: 'Corte pantalona de cintura alta com pregas frontais e caimento arquitetônico.',
    detailedDescription: 'Design sofisticado com cós estruturado, bolsos faca e caimento que alonga a silhueta. Perfeita para harmonizar com blazers e tricots da coleção.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1000&auto=format&fit=crop',
    price: 'R$ 529,00',
    badge: 'Best Seller',
    features: [
      'Modelagem pantalona com cintura alta',
      'Pregas duplas frontais de alta costura',
      'Tecido encorpado que não amassa com facilidade',
      'Fechamento invisível e acabamento limpo'
    ],
    sizes: ['36', '38', '40', '42', '44'],
    colors: [
      { name: 'Chocolate Caramelo', hex: '#4A3728' },
      { name: 'Off-White', hex: '#FAF7F2' },
      { name: 'Preto', hex: '#141211' }
    ]
  },
  {
    id: 'blusa-seda-drapejada',
    name: 'BLUSA DRAPEADA SILK ESSENCE',
    category: 'Blusas',
    description: 'Blusa em crepe de seda com drapeado delicado no gola e manga sutilmente fluida.',
    detailedDescription: 'A peça ideal para adicionar textura e toque refinado às composições do dia a dia. Seu drapeado artesanal proporciona elegância natural sem esforço.',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=1000&auto=format&fit=crop',
    price: 'R$ 439,00',
    isNewIn: true,
    features: [
      'Gola drapeada minimalista',
      'Punhos finos com botão perolado',
      'Toque macio de alta respirabilidade'
    ],
    sizes: ['PP', 'P', 'M', 'G'],
    colors: [
      { name: 'Creme Baunilha', hex: '#FCFBF9' },
      { name: 'Nude Suave', hex: '#EFE8DE' }
    ]
  },
  {
    id: 'conjunto-linen-quiet',
    name: 'CONJUNTO TRENTO LINHO & SEDA',
    category: 'Conjuntos',
    description: 'Colete de alfaiataria ajustado com bermuda ou calça coordenada em linho nobre.',
    detailedDescription: 'Conjunto pensado para mulheres modernas que valorizam a elegância prática. O linho com viscose confere estrutura refinada mantendo o frescor natural.',
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    price: 'R$ 890,00',
    badge: 'Edição Limitada',
    features: [
      'Linho nobre pré-lavado e amaciado',
      'Colete estruturado acinturado',
      'Calça/shorts de alfaiataria impecável',
      'Acabamentos artesanais'
    ],
    sizes: ['P', 'M', 'G'],
    colors: [
      { name: 'Nude Fio Natural', hex: '#E2D6C6' },
      { name: 'Preto', hex: '#0E0E0E' }
    ]
  },
  {
    id: 'trench-coat-leclerc',
    name: 'TRENCH COAT MINIMAL LECLERC',
    category: 'Alfaiataria',
    description: 'Casaco clássico reimaginado com linhas minimalistas, cinto removível e ombreiras suaves.',
    detailedDescription: 'Uma peça icônica no guarda-roupa feminino contemporâneo. O Trench Coat Leclerc une caimento alongado e corte de alfaiataria rigorosa para dias mais amenos.',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    price: 'R$ 1.120,00',
    badge: 'Exclusivo Editorial',
    isNewIn: true,
    features: [
      'Comprimento alongado midi',
      'Fivela forrada em couro ecológico no tom',
      'Resistente à água com toque aveludado'
    ],
    sizes: ['P', 'M', 'G'],
    colors: [
      { name: 'Beige Camel', hex: '#C5AF97' },
      { name: 'Preto Nobre', hex: '#141211' }
    ]
  },
  {
    id: 'cinto-couro-fivela-dourada',
    name: 'CINTO EM COURO SLIM GOLD',
    category: 'Acessórios',
    description: 'Couro legítimo de acabamento macio com fivela autoral minimalista em banho dourado suave.',
    detailedDescription: 'O toque final para acentuar a cintura de blazers, vestidos e pantalonas da Leclerc com sofisticação discreta.',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1000&auto=format&fit=crop',
    price: 'R$ 289,00',
    features: [
      '100% couro nobre macio',
      'Fivela minimalista com banho ouro escovado',
      'Passador em couro combinando'
    ],
    sizes: ['Único (Ajustável)'],
    colors: [
      { name: 'Caramelo Warm', hex: '#C89665' },
      { name: 'Preto', hex: '#0E0E0E' }
    ]
  },
  {
    id: 'vestido-chemisier-linho',
    name: 'VESTIDO CHEMISIER LINHO PURE',
    category: 'Vestidos',
    description: 'Silhueta chemisier com botões mother of pearl e faixa delicada para amarração.',
    detailedDescription: 'Clássico, atemporal e extremamente confortável. Transita perfeitamente de encontros diurnos a eventos ao entardecer.',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop',
    price: 'R$ 690,00',
    features: [
      'Teceura de linho leve respirável',
      'Botões madreperóla selecionados',
      'Manga dobrável com martingale'
    ],
    sizes: ['PP', 'P', 'M', 'G'],
    colors: [
      { name: 'Off-White', hex: '#FAF7F2' },
      { name: 'Nude Areia', hex: '#D5C4AF' }
    ]
  }
];

export const CATEGORIES: Category[] = [
  {
    id: 'alfaiataria',
    name: 'Alfaiataria',
    image: '/images/blazer_leclerc.jpg',
    count: 14,
    description: 'Blazers, tricots estruturados e casacos de corte rigoroso.'
  },
  {
    id: 'vestidos',
    name: 'Vestidos',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop',
    count: 18,
    description: 'Modelagens fluidas, comprimentos midi e tecidos nobres.'
  },
  {
    id: 'blusas',
    name: 'Blusas & Tops',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop',
    count: 12,
    description: 'Seda, linho e algodão com detalhes artesanais.'
  },
  {
    id: 'calcas',
    name: 'Calças & Saias',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
    count: 16,
    description: 'Pantalonas, cortes retos e cintura alta acentuada.'
  },
  {
    id: 'conjuntos',
    name: 'Conjuntos',
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1000&auto=format&fit=crop',
    count: 8,
    description: 'Combinações harmônicas de elegância prática.'
  },
  {
    id: 'acessorios',
    name: 'Acessórios Quiet Luxury',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1000&auto=format&fit=crop',
    count: 10,
    description: 'Cintos de couro, lenços de seda e pequenos detalhes.'
  }
];

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'look-01',
    title: 'THE NEW EDIT — EDIÇÃO AUTÊNTICA',
    subtitle: 'Harmonia entre alfaiataria rigorosa e tecidos de movimento fluido.',
    mainImage: '/images/hero.jpg',
    secondaryImage1: '/images/blazer_leclerc.jpg',
    secondaryImage2: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
    description: 'A nova coleção da Leclerc explora tons terrosos suaves, fios nobres de linho e cortes de alfaiataria pensados para empoderar a mulher contemporânea em sua rotina com ar de revista editorial.',
    quote: '“A roupa não deve disfarçar quem você é, mas sim revelar a sua melhor essência.”'
  },
  {
    id: 'look-02',
    title: 'SEDA & FLUIDEZ EDITORIAL',
    subtitle: 'Leveza sofisticada com presença marcante em tons nude e champagne.',
    mainImage: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop',
    secondaryImage1: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop',
    secondaryImage2: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop',
    description: 'Uma seleção de peças em seda e cetim nobre projetadas para proporcionar um toque aveludado na pele e um caimento escultural.',
    quote: '“Quiet luxury é a arte de chamar atenção pelo acabamento impecável e discrição visual.”'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: '/images/hero.jpg',
    likes: '1.420',
    caption: 'Detalhes da nova alfaiataria em tom off-white. É tudo sobre você. #LeclercModa #QuietLuxury'
  },
  {
    id: 'ig-2',
    image: '/images/blazer_leclerc.jpg',
    likes: '984',
    caption: 'O Blazer Leclerc em seu caimento impecável. Descubra mais no site. @loja.leclerc'
  },
  {
    id: 'ig-3',
    image: '/images/boutique.jpg',
    likes: '2.150',
    caption: 'Nosso espaço boutique planejado para acolher momentos especiais de escolha.'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop',
    likes: '1.830',
    caption: 'Seda e fluidez: o vestido midi champagne é destaque da coleção.'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
    likes: '1.240',
    caption: 'Tons terrosos e corte pantalona. Elegância que acompanha o seu dia.'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop',
    likes: '1.670',
    caption: 'Novidades da semana no nosso editorial. Atendimento exclusivo via Direct & WhatsApp.'
  }
];
