import db from "@/src/db";
import { eq } from "drizzle-orm";
import { reservation } from "../schema";


async function getReservations(): Promise<any> {
    const res = db.select().from(reservation);
    return res;
}
async function getReservationById( id: number ): Promise<any> {
    const res = db.select().from(reservation).where(eq(reservation.id, id));
    return res;
}



export default {
    getReservations,
    getReservationById
}

