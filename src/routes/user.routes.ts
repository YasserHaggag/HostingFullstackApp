
import { Router } from "express";
import { allusers,create,getuser ,deleteUser,updateUser, authenticate} from "../controllers/user.controllers";
import validateTokenMiddleware from "../middlewares/authentication.middleware";
const userRoutes=Router();


userRoutes.route('/').get(validateTokenMiddleware,allusers)
userRoutes.get('/:id',validateTokenMiddleware, getuser)
userRoutes.post('/', create)
userRoutes.delete('/:id',validateTokenMiddleware,deleteUser)
userRoutes.put('/',validateTokenMiddleware,updateUser)
userRoutes.post('/authenticate',authenticate)


/* userRoutes.post('/', (req: Request, res: Response) => {
    const article: users = {
      name: req.body.name,
      content: req.body.content
    }
    try {
       res.send('this is the CREATE route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
}) */

/* userRoutes.put('/users/:id', (req: Request, res: Response) => {
 const article: Article = {
      id: req.params.id, 
      title: req.body.title,
      content: req.body.content
    }
    try {
       res.send('this is the EDIT route')
    } catch (err) {
       res.status(400)
       res.json(err)
    } 
}) */

/* userRoutes.delete('/articles/:id', (_req: Request, res: Response) => {
    try {
       res.send('this is the DELETE route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
}

) */
export default userRoutes