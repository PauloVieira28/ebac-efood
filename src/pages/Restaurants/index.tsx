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
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    note: 4.9,
    image: sushi,
    imageLoja: primeiraimagemLojaJaponesa,
    imageCard: [
      {
      image: pizzaCards,
      title: 'Pizza Marguerita',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Pepperoni',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Marguerita',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Diavola',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Quatro Stagioni',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Frutti di Mare',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },

  ]
  },

  {
    id: 2,
    destaque: true,
    typeDish: 'Italiana',
    name: 'La Dolce Vita Trattoria',
    description: 'Peça já o melhor da culinária italiana no conforto da sua casa! Massas artesanais, pizzas saborosas e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente a Itália sem sair do lar com nosso delivery!',
    note: 4.6,
    image: italiana,
    imageLoja: primeiraimagemLojaJaponesa,
    imageCard: [
            {
      image: pizzaCards,
      title: 'Pizza Marguerita',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Pepperoni',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Marguerita',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Diavola',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Quatro Stagioni',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Frutti di Mare',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
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
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Pepperoni',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Marguerita',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Diavola',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Quatro Stagioni',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Frutti di Mare',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
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
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Pepperoni',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Marguerita',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Diavola',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Quatro Stagioni',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      image: pizzaCards,
      title: 'Pizza Frutti di Mare',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    ]


  }

]

export default Restaurants
