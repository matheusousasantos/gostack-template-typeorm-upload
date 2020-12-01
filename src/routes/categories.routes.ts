import { Router } from 'express';

import CreateCategoryService from '../services/CreateCategoryService';

const categoriesRouter = Router();

categoriesRouter.post('/', async (request, response) => {
  try {
    const { title } = request.body;
    const createCategoryService = new CreateCategoryService();
    const category = await createCategoryService.execute({ title });
    return response.json(category);
  } catch (err) {
    return response.json({ err: err.message });
  }
});

export default categoriesRouter;
