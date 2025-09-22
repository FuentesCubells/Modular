import { Request, Response } from "express";
import HousingRepo from "../../infrastructure/database/hotel/housing/housing.repo"

const repo = new HousingRepo();

class HotelController  {

    static async getHousesList(req: Request, res: Response) {
        const housesList = await repo.getHousingList();
        return res.json(housesList);
    }
} 

export default HotelController