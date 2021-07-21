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
Genre.delete_all

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

movie4 = Movie.create!(
  title: 'Avengers: Infinity War',
  description: 'The Avengers are put to the test against their greatest foe yet, Thanos',
  duration:'160 minutes',
  year: 2018,
  rating:'PG-13'
)

movie5 = Movie.create!(
  title: 'Avengers: Endgame',
  description: 'An epic conclusion to the Infinity War Saga',
  duration:'183 minutes',
  year: 2019,
  rating:'PG-13'
)

movie6 = Movie.create!(
  title: 'Logan',
  description: 'A weary Wolverine is reintroduced into the world after coming across a mysterious young mutant',
  duration:'141 minutes',
  year: 2017,
  rating:'R'
)



#posters

poster1 = open('https://app-bestflix-seeds.s3-us-west-1.amazonaws.com/movieImage1.jpg')
movie1.poster.attach(io: poster1, filename: 'movieImage1.jpg')

poster2 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/dark_knight.jpg')
movie2.poster.attach(io: poster2, filename: 'dark_knight.jpg')

poster3 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/godzilla_vs_kong.jpg')
movie3.poster.attach(io: poster3, filename: 'godzilla_vs_kong.jpg')

poster4 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/infinity_war.jpg')
movie4.poster.attach(io: poster4, filename: 'infinity_war.jpg')

poster5 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/endgame.jpg')
movie5.poster.attach(io: poster5, filename: 'endgame.jpg')

poster6 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/logan.jpg')
movie6.poster.attach(io: poster6, filename: 'logan.jpg')

#videos

video1 = open('https://app-bestflix-seeds.s3-us-west-1.amazonaws.com/movieTrailer1.mp4')
movie1.video.attach(io: video1, filename: 'movieTrailer1.mp4')

video2 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/dark_knight.mp4')
movie2.video.attach(io: video2, filename: 'dark_knight.mp4')

video3 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/godzilla_kong.mp4')
movie3.video.attach(io: video3, filename: 'godzilla_kong.mp4')

video4 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/infinity_war.mp4')
movie4.video.attach(io: video4, filename: 'infinity_war.mp4')

video5 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/endgame.mp4')
movie5.video.attach(io: video5, filename: 'endgame.mp4')

video6 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/logan.mp4')
movie6.video.attach(io: video6, filename: 'logan.mp4')

#genres

Genre.create!(name: 'Action')
Genre.create!(name: 'Animation')
Genre.create!(name: 'Comedy')
Genre.create!(name: 'Horror')



VideoGenre.create!(video_id: movie1.id, genre_id: Genre.find_by(name: 'Action').id)
VideoGenre.create!(video_id: movie1.id, genre_id: Genre.find_by(name: 'Animation').id)



