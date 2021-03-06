import { products } from '../models/products.model'
import app from '../server'
import supertest from 'supertest'
const request=supertest(app)
const products_model=new products()
let accessToken: string
let user: string
const prod={       "pname":"Pepsi",
"price":1,
"pdescription":"streeeeet 2222"}
describe('Test User Model',()=>
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
        expect(products_model.getall).toBeDefined();

    })

    it('index method should return a list of orders',async ()=>
    {
        const result = await products_model.getall();
        expect(result.length).toBeGreaterThan(1)

    })
    it('Create product implemented', ()=>
    {
        
        expect(products_model.create).toBeDefined()

    })
    it('create new Product',async ()=>
    {
        const response=await request.post('/api/product').set("Authorization", "Bearer " + accessToken).send({
            "pname":"Pepsi",
            "price":1,
            "pdescription":"streeeeet 2222"
        });
        expect(response.body.status).toEqual('success')
        
    })

    it('create new Product through database',async ()=>
    {
        const response=await products_model.create(prod)
    console.log(response,'This is the DB')
        
        expect(response.pname).toEqual(prod.pname)
        
    })

    

})