

class HousingDomain {
    constructor(
    public id: string,
    public description: string,
    public rooms: number,
    public bathrooms: number,
    public max_people: number,
    public max_children: number,
    public featured_image_id: number | null,
    public price_per_night: number,
    public type: string,
    public location: string,
    public created_at?: Date | null,
    public updated_at?: Date | null
    ) {}
}

export default HousingDomain