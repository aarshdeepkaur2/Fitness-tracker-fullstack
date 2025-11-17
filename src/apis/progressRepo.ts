import axios from "axios";

export class ProgressRepository {
  private baseUrl = "http://localhost:3000/progress";

  // GET
  async getAll() {
    const res = await axios.get(this.baseUrl);
    return res.data;
  }

  // ADD
  async add(goal: string) {
    const res = await axios.post(this.baseUrl, { goal });
    return res.data;
  }

  // UPDATE
  async update(id: number, status: string) {
    const res = await axios.put(`${this.baseUrl}/${id}`, { status });
    return res.data;
  }

  // DELETE
  async remove(id: number) {
    const res = await axios.delete(`${this.baseUrl}/${id}`);
    return res.data;
  }
}

export const progressRepository = new ProgressRepository();
