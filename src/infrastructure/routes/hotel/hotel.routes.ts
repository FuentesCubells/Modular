import { Router } from "express";
import HotelController from "../../../application/hotel/hotel.controller";

const housingRoutes = Router();
const asyncHandler = (fn: Function) => (req: Express.Request, res: Express.Response, next: any) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

housingRoutes.get("/", asyncHandler(HotelController.getHousesList));
housingRoutes.get("/:id", asyncHandler(HotelController.getHouseById));

export default housingRoutes