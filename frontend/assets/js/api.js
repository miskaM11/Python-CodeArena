const API_BASE_URL = "http://127.0.0.1:5000";
 
async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  });
 
  let data;
 
  try {
    data = await response.json();
  } catch {
    data = {
      message: "Backend вернул не JSON."
    };
  }
 
  if (!response.ok) {
    throw new Error(data.message || data.error || "Ошибка запроса.");
  }
 
  return data;
}
 
export function getTasks() {
  return request("/api/tasks");
}
 
export function getTask(slug) {
  return request(`/api/tasks/${slug}`);
}
 
export function checkSolution(taskSlug, code) {
  return request("/api/check", {
    method: "POST",
    body: JSON.stringify({
      taskSlug,
      code
    })
  });
}