import postModel from "../models/post_model";
import baseController from "./base_controller";

const postsController = new baseController(postModel);

export default postsController;