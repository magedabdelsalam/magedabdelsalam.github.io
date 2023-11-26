import { work } from 'work'

export async function GET(request) {
  request.status(200).json(work)
}
