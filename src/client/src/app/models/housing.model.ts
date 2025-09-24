export type HousingStatus = 'Disponible' | 'Mantenimiento' | 'Ocupado' | 'Limpieza';

export interface HousingEquipment {
  key: string;
  label: string;
  value: boolean;
}

export interface Housing {
    id: string;
    title: string;
    description: string;
    rooms: number;
    bathrooms: number;
    max_people: number;
    max_children?: number;
    featured_image_id?: number;
    price_per_night: string;
    type: string;
    location: string;
    status: HousingStatus;
    main_equipment?: HousingEquipment[];
    created_at?: Date; 
    updated_at?: Date;
}

export const mockHousing: Housing[] = [
  {
    id: '1',
    title: 'Suite Ejecutiva',
    type: 'Suite Premium',
    location: 'C/Mayor, Madrid',
    description: 'Suite con vistas a la ciudad, perfecta para ejecutivos. Incluye escritorio y wifi de alta velocidad.',
    status: 'Ocupado',
    main_equipment: [
      { key: 'wifi', label: 'Wifi', value: true },
      { key: 'parking', label: 'Parking', value: true },
      { key: 'breakfast', label: 'Breakfast', value: false },
      { key: 'television', label: 'Television', value: true },
      { key: 'air_conditioning', label: 'Air Conditioning', value: true }
    ],
    rooms: 2,
    bathrooms: 1,
    max_people: 4,
    max_children: 2,
    featured_image_id: 1,
    price_per_night: "150",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: '2',
    title: 'Casa Rural Eco',
    type: 'Casa',
    location: 'Asturias, España',
    description: 'Casa rural con jardín y huerto ecológico. Ideal para familias que buscan desconectar.',
    status: 'Disponible',
    main_equipment: [
      { key: 'wifi', label: 'Wifi', value: false },
      { key: 'parking', label: 'Parking', value: true },
      { key: 'breakfast', label: 'Breakfast', value: true },
      { key: 'television', label: 'Television', value: false },
      { key: 'air_conditioning', label: 'Air Conditioning', value: false }
    ],
    rooms: 3,
    bathrooms: 2,
    max_people: 6,
    max_children: 3,
    featured_image_id: 2,
    price_per_night: "120",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: '3',
    title: 'Loft Minimal',
    type: 'Loft',
    location: 'Bilbao, España',
    description: 'Loft moderno en el centro, con decoración minimalista y luminosidad natural.',
    status: 'Mantenimiento',
    main_equipment: [
      { key: 'wifi', label: 'Wifi', value: true },
      { key: 'parking', label: 'Parking', value: false },
      { key: 'breakfast', label: 'Breakfast', value: false },
      { key: 'television', label: 'Television', value: true },
      { key: 'air_conditioning', label: 'Air Conditioning', value: true }
    ],
    rooms: 1,
    bathrooms: 1,
    max_people: 2,
    max_children: 0,
    featured_image_id: 3,
    price_per_night: "80",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: '4',
    title: 'Chalet Vista Mar',
    type: 'Chalet',
    location: 'Alicante, España',
    description: 'Chalet con terraza y piscina privada, vistas espectaculares al mar.',
    status: 'Disponible',
    main_equipment: [
      { key: 'wifi', label: 'Wifi', value: true },
      { key: 'parking', label: 'Parking', value: true },
      { key: 'breakfast', label: 'Breakfast', value: true },
      { key: 'television', label: 'Television', value: true },
      { key: 'air_conditioning', label: 'Air Conditioning', value: true }
    ],
    rooms: 4,
    bathrooms: 3,
    max_people: 8,
    max_children: 4,
    featured_image_id: 4,
    price_per_night: "250",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: '5',
    title: 'Ático Relax',
    type: 'Ático',
    location: 'Málaga, España',
    description: 'Ático moderno con jacuzzi y terraza, perfecto para escapadas románticas.',
    status: 'Limpieza',
    main_equipment: [
      { key: 'wifi', label: 'Wifi', value: true },
      { key: 'parking', label: 'Parking', value: false },
      { key: 'breakfast', label: 'Breakfast', value: false },
      { key: 'television', label: 'Television', value: true },
      { key: 'air_conditioning', label: 'Air Conditioning', value: true }
    ],
    rooms: 3,
    bathrooms: 2,
    max_people: 5,
    max_children: 2,
    featured_image_id: 5,
    price_per_night: "190",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: '6',
    title: 'Apartamento Centro',
    type: 'Apartamento',
    location: 'Sevilla, España',
    description: 'Apartamento céntrico, cerca de bares y restaurantes. Ideal para vacaciones cortas.',
    status: 'Disponible',
    main_equipment: [
      { key: 'wifi', label: 'Wifi', value: true },
      { key: 'parking', label: 'Parking', value: false },
      { key: 'breakfast', label: 'Breakfast', value: false },
      { key: 'television', label: 'Television', value: true },
      { key: 'air_conditioning', label: 'Air Conditioning', value: true }
    ],
    rooms: 2,
    bathrooms: 1,
    max_people: 3,
    max_children: 1,
    featured_image_id: 6,
    price_per_night: "110",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: '7',
    title: 'Casa Familiar',
    type: 'Casa',
    location: 'Valencia, España',
    description: 'Casa amplia para familias, con jardín y barbacoa.',
    status: 'Ocupado',
    main_equipment: [
      { key: 'wifi', label: 'Wifi', value: true },
      { key: 'parking', label: 'Parking', value: true },
      { key: 'breakfast', label: 'Breakfast', value: true },
      { key: 'television', label: 'Television', value: true },
      { key: 'air_conditioning', label: 'Air Conditioning', value: false }
    ],
    rooms: 4,
    bathrooms: 2,
    max_people: 8,
    max_children: 4,
    featured_image_id: 7,
    price_per_night: "200",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: '8',
    title: 'Studio Compacto',
    type: 'Studio',
    location: 'Granada, España',
    description: 'Pequeño estudio ideal para parejas o viajeros solitarios.',
    status: 'Disponible',
    main_equipment: [
      { key: 'wifi', label: 'Wifi', value: true },
      { key: 'parking', label: 'Parking', value: false },
      { key: 'breakfast', label: 'Breakfast', value: false },
      { key: 'television', label: 'Television', value: true },
      { key: 'air_conditioning', label: 'Air Conditioning', value: true }
    ],
    rooms: 1,
    bathrooms: 1,
    max_people: 2,
    max_children: 0,
    featured_image_id: 8,
    price_per_night: "70",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: '9',
    title: 'Apartamento Terraza',
    type: 'Apartamento',
    location: 'Barcelona, España',
    description: 'Luminoso apartamento con terraza y vistas a la ciudad.',
    status: 'Mantenimiento',
    main_equipment: [
      { key: 'wifi', label: 'Wifi', value: true },
      { key: 'parking', label: 'Parking', value: true },
      { key: 'breakfast', label: 'Breakfast', value: false },
      { key: 'television', label: 'Television', value: true },
      { key: 'air_conditioning', label: 'Air Conditioning', value: true }
    ],
    rooms: 2,
    bathrooms: 1,
    max_people: 4,
    max_children: 1,
    featured_image_id: 9,
    price_per_night: "130",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: '10',
    title: 'Loft Vintage',
    type: 'Loft',
    location: 'Madrid, España',
    description: 'Loft con decoración vintage, techos altos y gran iluminación natural.',
    status: 'Disponible',
    main_equipment: [
      { key: 'wifi', label: 'Wifi', value: true },
      { key: 'parking', label: 'Parking', value: false },
      { key: 'breakfast', label: 'Breakfast', value: false },
      { key: 'television', label: 'Television', value: true },
      { key: 'air_conditioning', label: 'Air Conditioning', value: true }
    ],
    rooms: 1,
    bathrooms: 1,
    max_people: 2,
    max_children: 0,
    featured_image_id: 10,
    price_per_night: "90",
    created_at: new Date(),
    updated_at: new Date()
  }
];

