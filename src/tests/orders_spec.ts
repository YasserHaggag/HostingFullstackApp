import { orders } from '../models/orders.model'
import app from '../server'
import supertest from 'supertest'
const request=supertest(app)
const orders_model=new orders()
let accessToken:string 
let user: string
describe('Test Order Endpoints and Models',()=>
{
    beforeAll(async () => {
        const response=await request.post('/api/user').send({
    
            "name":"Ali",
            "telephone":1005464562,
            "address":"streeeeet 2222",
            "email":"yasser@gmail.test",
            "password":"Yasser@Admin123"
        }).then(async ()=>
        {
            const res = (await request.post("/api/user/authenticate").send({
            
                "email":"yasser@gmail.test",
                "password":"Yasser@Admin123"
            }));
          console.log(res.body.data.token)
          console.log(res.body.data.user.id,'User ID ID ID ID ID ID ')
           user= res.body.data.user.id
            accessToken = res.body.data.token;
          });

        })
    it('should have index method',()=>
    {
        expect(orders_model.getall).toBeDefined();

    })

    it('index method should return a list of orders',async ()=>
    {
        const result = await orders_model.getall();
        expect(result).not.toBeNull()

    })
    it('Create new Order Defined', ()=>
    {
        
        expect(orders_model.create).toBeDefined()

    })
    it('create new order API ',async ()=>
    {
        const response=await request.post('/api/order').set("Authorization", "Bearer " + accessToken).send({
    
            
                "user_id":user,
                "comments":"User comments in that area"
            
        });
        expect(response.body.status).toEqual('success')
        
    })

})