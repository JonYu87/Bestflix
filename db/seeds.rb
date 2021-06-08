# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Movie.destroy_all

u1 = User.create!(
  email: 'Peter_Porker@bestavenger.com',
  password: '1233456'
)

#movies

movie1 = Movie.create!(
  title: 'Demon Slayer: Mugen Train',
  description: 'Tanjiro and his comrades embark on a new mission aboard the Mugen Train',
  duration:'120 mins',
  year: 2020,
  rating:'R'
)

#posters

poster1 = open('https://app-bestflix-seeds.s3-us-west-1.amazonaws.com/movieImage1.jpg')
movie1.poster.attach(io: poster1, filename: 'movieImage1.jpg')

#videos

video1 = open('https://app-bestflix-seeds.s3-us-west-1.amazonaws.com/movieTrailer1.mp4')
movie1.video.attach(io: video1, filename: 'movieTrailer1.mp4')
