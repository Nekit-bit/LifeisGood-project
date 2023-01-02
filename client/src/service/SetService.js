import axios from 'axios'

export default class SetService {
  async getAllSets() {
    const responce = await axios.get('http://localhost:5000/ppset');
    console.log(responce.data)
    return await responce.data
  }

  async createSet() {
    const responce = await axios.post('')
  }
}