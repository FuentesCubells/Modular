import HousingDomain from "../../../../domain/hotel/housing.domain";
import { db } from "../../postgres";
import housingSchema from "./housing.schema";
import { eq } from "drizzle-orm";


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

    // housing.repo.ts
    async getHouseById(id: number): Promise<HousingDomain | null> {
        const row = await db
            .select()
            .from(housingSchema)
            .where( eq(housingSchema.id, id) )
            .limit(1);

        if (row.length === 0) return null;

        const house = row[0];
        return new HousingDomain(
            house.id.toString(),
            house.title,
            house.description,
            house.rooms,
            house.bathrooms,
            house.max_people,
            house.max_children,
            house.featured_image_id ?? null,
            Number(house.price_per_night),
            house.type,
            house.location,
            house.status,
            house.created_at ?? null,
            house.updated_at ?? null
        );
    }

}
export default HousingRepo