import { reservation } from "@/drizzle/schema";
import reservationRepo from "@/src/db/reservations/reservation.repo";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";




export async function GET(req: NextRequest) {
  try {
    const reservationFound = await reservationRepo.getReservations();
    return NextResponse.json(reservationFound);
  } catch (error) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { action, payload } = await req.json();
    if (!action) return NextResponse.json({ error: "Action is required" }, { status: 400 });

    switch (action) {
      case "get_by_id":
        if (!payload.id) return NextResponse.json({ error: "ID is required" }, { status: 400 });
        return getById(payload.id);
      default:
        return NextResponse.json({ error: "Unknown action" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

async function getById(payload_id: string) {

  const id = parseInt(payload_id, 10);
  const reservation = await reservationRepo.getReservationById(id);
  return NextResponse.json(reservation || { error: "Not found" }, { status: reservation ? 200 : 404 });
}