export interface Project {
  title: string
  description: string
  tech: string[]
  image?: string
  video?: string
  images?: string[]
  githubUrl?: string
  liveUrl?: string
  type: 'image' | 'images' | 'video'
}