import HousingDomain from "../../../../domain/hotel/housing.domain";
import { db } from "../../postgres";
import housingSchema from "./housing.schema";



class HousingRepo {

    async getHousingList(): Promise<HousingDomain[]> {
        const rows = await db.select().from(housingSchema);
        return rows.map(row => new HousingDomain(
            row.id.toString(),
            row.title,
            row.description,
            row.rooms,
            row.bathrooms,
            row.max_people,
            row.max_children,
            row.featured_image_id ?? null,
            Number(row.price_per_night),
            row.type,
            row.location,
            row.status,
            row.created_at ?? null,
            row.updated_at ?? null
        ));
    }
}
export default HousingRepo