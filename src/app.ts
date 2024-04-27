import "reflect-metadata";

import { ExpressAdapter } from "./Http/Adapters/ExpressAdapter";
import { Router } from "./Http/Router/Router";
import { bootstrapStart } from "./commom/bootstrap/bootstrapStart";

const boostrap = async () => {
    await bootstrapStart()
}
boostrap()
const port =  3000
const client = new ExpressAdapter()
client.listen(port)
const router = new Router(client)
router.init()
console.log('ON')