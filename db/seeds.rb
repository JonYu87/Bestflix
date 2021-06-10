# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all
Movie.delete_all

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

movie2 = Movie.create!(
  title: 'The Dark Knight',
  description: 'Batman confronts what would become his greatest enemy in the Joker',
  duration:'153 mins',
  year: 2008,
  rating:'PG-13'
)

movie3 = Movie.create!(
  title: 'Godzilla vs Kong',
  description: 'An epic showdown between two of the most famous Kaiju',
  duration:'113 minutes',
  year: 2021,
  rating:'PG-13'
)

#posters

poster1 = open('https://app-bestflix-seeds.s3-us-west-1.amazonaws.com/movieImage1.jpg')
movie1.poster.attach(io: poster1, filename: 'movieImage1.jpg')

poster2 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/dark_knight.jpg')
movie2.poster.attach(io: poster2, filename: 'dark_knight.jpg')

poster3 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/godzilla_vs_kong.jpg')
movie3.poster.attach(io: poster3, filename: 'godzilla_vs_kong.jpg')

#videos

video1 = open('https://app-bestflix-seeds.s3-us-west-1.amazonaws.com/movieTrailer1.mp4')
movie1.video.attach(io: video1, filename: 'movieTrailer1.mp4')

video2 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/dark_knight_trailer.mp4')
movie2.video.attach(io: video2, filename: 'dark_knight_trailer.mp4')

video3 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/godzilla_trailer.mp4')
movie3.video.attach(io: video3, filename: 'godzilla_trailer.mp4')
