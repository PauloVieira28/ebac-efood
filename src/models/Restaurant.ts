class Restaurant {

  id: number
  destaque: boolean
  typeDish: string
  name: string
  description: string
  note: number
  image: string
  imageLoja: string
  imageCard: {image: string, title: string, description: string}[]

  constructor(id: number, destaque: boolean, typeDish: string, name: string, description: string, note: number, image: string, imageLoja: string, imageCard: {image: string, title: string, description: string}[]) {
    this.id = id
    this.destaque = destaque
    this.typeDish = typeDish
    this.name = name
    this.description = description
    this.note = note
    this.image = image
    this.imageLoja = imageLoja
    this.imageCard = imageCard
  }
}

export default Restaurant
