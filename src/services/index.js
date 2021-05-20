import { createServer } from "miragejs"

export function CreateServer () { 
  return createServer({
  routes() {
    this.post("/api/users/signup", (schema, request) => {
      return request.requestBody
    }, { timing: 3000})
  },
})
}
export default CreateServer;