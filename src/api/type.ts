export interface Job {
  id: number
  title: string
  organization: string
  degree: string
  jobType: string
  locations: string[]
  minimumQualifications: string[]
  preferredQualifications: string[]
  description: string[]
  dateAdded: String
}

export interface Degree {
  id: number
  degree: string
}
