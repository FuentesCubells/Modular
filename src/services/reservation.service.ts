import axios from "axios";

//capa de api para reservation
async function fetchReservations() {
    const res = await axios.get("/api/reservations/admin");
    return res.data
}
async function fetchReservationById( id: number) {
    const res = await axios.post("/api/reservations/admin", {
        action: "get_by_id",
        payload: { id }
    });
    return res.data
}

export default {fetchReservations, fetchReservationById}