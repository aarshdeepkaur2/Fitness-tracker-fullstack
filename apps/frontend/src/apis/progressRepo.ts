export class ProgressRepository {
  private baseUrl = "http://localhost:4000/api/v1/progress";

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
  }
}

export const progressRepository = new ProgressRepository();
