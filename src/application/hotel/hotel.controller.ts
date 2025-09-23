import { Request, Response } from "express";
import HousingRepo from "../../infrastructure/database/hotel/housing/housing.repo"

const repo = new HousingRepo();

class HotelController {

    static async getHousesList(req: Request, res: Response) {
        const housesList = await repo.getHousingList();
        return res.json(housesList);
    }
    static async getHouseById(req: Request, res: Response) {
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: "Missing ID param" });

        const house = await repo.getHouseById(parseInt(id));

        if (!house) return res.status(404).json({ error: "House not found" });
        return res.json(house);
    }
}

export default HotelController