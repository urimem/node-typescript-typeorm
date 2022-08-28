import bodyParser from "body-parser"
import express, { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { UsersService } from "./services/users.service"

const app = express()
const port = 3000
let counter = 0

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`)
})

AppDataSource.initialize()
console.log('AppDataSource initialized')
const usersService = new UsersService()

app.use(bodyParser.json()) 
app.route('/users')
  .get(async (request: Request, response: Response) => {
    try {
      counter++
      const result = await usersService.getAllUsers()
      console.log(`GET call counter ${counter}`)
      response.status(200).json(result)
    } catch (error) {
      console.error(error)
      throw error
    }
  })
  .post(async (request: Request, response: Response) => {
    try {
      const result = await usersService.create(request.body)
      response.status(200).json(result)
    } catch (error) {
      console.error(error)
      throw error
    }
  })

  app.delete('/users/:user_id', async (request: Request, response: Response) => {
    try {
      const userId = request.params['user_id']
      if (userId !== undefined && !isNaN(+userId)) {
        const userIdNumber: number  = +userId
        const deleteActionResult = await usersService.delete(userIdNumber)
        deleteActionResult
          ? response.status(200).end()
          : response.status(404).end()
      } else {
        response.status(400).end()
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  })

