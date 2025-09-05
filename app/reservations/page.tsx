"use client";

import reservationService from "@/src/services/reservation.service";
import { useState } from "react";


export default function ReservationsPage() {
  const [reservation, setReservation] = useState<any>(null);

  async function getReservationData() {
    try {
      const res = await reservationService.fetchReservations();
      const by_id = await reservationService.fetchReservationById(1);
      console.log(by_id, 'id')
      setReservation(res.data);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <button onClick={getReservationData}>Fetch Reservation</button>

      {reservation && (
        <div>
          <h2>Reserva:</h2>
          <pre>{JSON.stringify(reservation, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
