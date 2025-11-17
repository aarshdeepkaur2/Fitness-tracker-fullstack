<<<<<<< HEAD
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
=======
export class ProgressRepository {
  private baseUrl = "http://localhost:3000/progress";

  // GET all
  async getAll() {
    const res = await fetch(this.baseUrl);
    return await res.json();
  }

  // POST create new goal
  async add(goal: string) {
    const res = await fetch(this.baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ goal })
    });
    return await res.json();
  }

  // PUT update
  async update(id: number, status: string) {
    const res = await fetch(`${this.baseUrl}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    });
    return await res.json();
  }

  // DELETE remove
  async remove(id: number) {
    const res = await fetch(`${this.baseUrl}/${id}`, {
      method: "DELETE"
    });
    return await res.json();
>>>>>>> f81c94d7b78e6fa92013529a69bcf5d8f4d9789a
  }
}

export const progressRepository = new ProgressRepository();
