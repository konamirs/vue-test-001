import axios from 'axios'
import type { Job } from '@/api/type'

const getJobs = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL
  const url = `${baseUrl}/jobs`
  const response = await axios.get<Job[]>(url)
  return response.data
}

export default getJobs
