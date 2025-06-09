import {Application} from "@oak/oak"

import {testDbConnection} from "./src/db/index.ts"
import {PORT} from "./src/config/env.ts"

await testDbConnection()

const app = new Application()

app.use(ctx=>{
  ctx.response.body="no routes matched"
})

console.log("app is runnig on port",PORT)
app.listen({port:PORT})

