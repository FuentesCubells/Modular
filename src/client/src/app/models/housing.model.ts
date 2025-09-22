export type HousingStatus = 'Disponible' | 'Mantenimiento' | 'Ocupado' | 'Limpieza';

export interface Housing {
    id: string;
    title: string;
    description: string;
    rooms: number;
    bathrooms: number;
    max_people: number;
    max_children: number;
    featured_image_id: number;
    price_per_night: number;
    type: string;
    location: string;
    status: HousingStatus;
    created_at: Date;
    updated_at: Date;
}

export const mockHousing = [
        {
            "id": "1",
            "title": "Suite Estándar",
            "description": "Apartamento céntrico en Madrid",
            "rooms": 3,
            "bathrooms": 2,
            "max_people": 6,
            "max_children": 2,
            "featured_image_id": 1,
            "price_per_night": 120,
            "type": "apartamento",
            "location": "Madrid, España",
            "status": "Disponible",
            "created_at": "2025-09-05T13:14:37.913Z",
            "updated_at": "2025-09-05T13:14:37.913Z"
        },
        {
            "id": "2",
            "title": "Suite Doble",
            "description": "Casa con piscina en la playa",
            "rooms": 4,
            "bathrooms": 3,
            "max_people": 8,
            "max_children": 4,
            "featured_image_id": 3,
            "price_per_night": 200,
            "type": "casa",
            "location": "Valencia, España",
            "status": "Ocupado",
            "created_at": "2025-09-05T13:14:37.913Z",
            "updated_at": "2025-09-05T13:14:37.913Z"
        },
        {
            "id": "3",
            "title": "Habitación Plus",
            "description": "Loft moderno cerca del río",
            "rooms": 2,
            "bathrooms": 1,
            "max_people": 4,
            "max_children": 1,
            "featured_image_id": 4,
            "price_per_night": 90,
            "type": "loft",
            "location": "Sevilla, España",
            "status": "Mantenimiento",
            "created_at": "2025-09-05T13:14:37.913Z",
            "updated_at": "2025-09-05T13:14:37.913Z"
        },
        {
            "id": "4",
            "title": "Villa Familiar",
            "description": "Villa con jardín y terraza",
            "rooms": 5,
            "bathrooms": 4,
            "max_people": 10,
            "max_children": 5,
            "featured_image_id": 5,
            "price_per_night": 350,
            "type": "villa",
            "location": "Mallorca, España",
            "status": "Limpieza",
            "created_at": "2025-09-05T13:14:37.913Z",
            "updated_at": "2025-09-05T13:14:37.913Z"
        },
        {
            "id": "5",
            "title": "Estudio Económico",
            "description": "Estudio acogedor en el centro histórico",
            "rooms": 1,
            "bathrooms": 1,
            "max_people": 2,
            "max_children": 0,
            "featured_image_id": 6,
            "price_per_night": 60,
            "type": "estudio",
            "location": "Granada, España",
            "status": "Disponible",
            "created_at": "2025-09-05T13:14:37.913Z",
            "updated_at": "2025-09-05T13:14:37.913Z"
        },
        {
            "id": "6",
            "title": "Casa Rústica",
            "description": "Casa rústica con chimenea y piscina",
            "rooms": 3,
            "bathrooms": 2,
            "max_people": 6,
            "max_children": 2,
            "featured_image_id": 7,
            "price_per_night": 180,
            "type": "casa",
            "location": "Toledo, España",
            "status": "Ocupado",
            "created_at": "2025-09-05T13:14:37.913Z",
            "updated_at": "2025-09-05T13:14:37.913Z"
        }
]
