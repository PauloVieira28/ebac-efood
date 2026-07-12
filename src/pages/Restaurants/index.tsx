import type Restaurant from "../../models/Restaurant"

import sushi from '../../assets/sushi.png'
import italiana from '../../assets/italiana.png'


import primeiraimagemLojaJaponesa from '../../assets/loja_japonesa.jpg'

import pizzaCards from '../../assets/image-Cards.png'




const Restaurants: Restaurant[] = [

  {
    id: 1,
    destaque: true,
    typeDish: 'Japonesa',
    name: 'Hioki Sushi',
    description: 'O melhor sushi da cidade',
    note: 4.9,
    image: sushi,
    imageLoja: primeiraimagemLojaJaponesa,
    imageCard: [
      {
      image: pizzaCards,
      title: 'Pizza Marguerita',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Pepperoni',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Marguerita',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Diavola',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Quatro Stagioni',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Frutti di Mare',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

  ]
  },

  {
    id: 2,
    destaque: true,
    typeDish: 'Italiana',
    name: 'La Dolce Vita Trattoria',
    description: 'Deliciosa comida italiana',
    note: 4.6,
    image: italiana,
    imageLoja: primeiraimagemLojaJaponesa,
    imageCard: [
            {
      image: pizzaCards,
      title: 'Pizza Marguerita',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Pepperoni',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Marguerita',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Diavola',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Quatro Stagioni',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Frutti di Mare',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    ]


  },

  {
    id: 3,
    destaque: true,
    typeDish: 'Japonesa',
    name: 'Hioki Sushi',
    description: 'O melhor sushi da cidade',
    note: 4.9,
    image: sushi,
    imageLoja: primeiraimagemLojaJaponesa,
    imageCard: [
            {
      image: pizzaCards,
      title: 'Pizza Marguerita',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Pepperoni',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Marguerita',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Diavola',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Quatro Stagioni',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Frutti di Mare',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    ]

  },

  {
    id: 4,
    destaque: true,
    typeDish: 'Italiana',
    name: 'La Dolce Vita Trattoria',
    description: 'Deliciosa comida italiana',
    note: 4.6,
    image: italiana,
    imageLoja: primeiraimagemLojaJaponesa,
    imageCard: [
            {
      image: pizzaCards,
      title: 'Pizza Marguerita',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Pepperoni',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Marguerita',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Diavola',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Quatro Stagioni',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: pizzaCards,
      title: 'Pizza Frutti di Mare',
      description: 'lorem ipsum dolor sit amagna aliqua.  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    ]


  }

]

export default Restaurants
