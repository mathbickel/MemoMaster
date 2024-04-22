import { ExpressAdapter } from "./Http/Adapters/ExpressAdapter";
import { Router } from "./Http/Router/Router";

const client = new ExpressAdapter()
const port =  3000
client.listen(port)
const router = new Router(client)
router.init()
console.log('ON')