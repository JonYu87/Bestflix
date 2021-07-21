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
VideoGenre.delete_all

u1 = User.create!(
  email: 'Peter_Porker@bestavenger.com',
  password: '1233456'
)

#movies

demon_slayer = Movie.create!(
  title: 'Demon Slayer: Mugen Train',
  description: 'Tanjiro and his comrades embark on a new mission aboard the Mugen Train',
  duration:'120 mins',
  year: 2020,
  rating:'R'
)

dark_knight = Movie.create!(
  title: 'The Dark Knight',
  description: 'Batman confronts what would become his greatest enemy in the Joker',
  duration:'153 mins',
  year: 2008,
  rating:'PG-13'
)

godzilla_vs_kong = Movie.create!(
  title: 'Godzilla vs Kong',
  description: 'An epic showdown between two of the most famous Kaiju',
  duration:'113 minutes',
  year: 2021,
  rating:'PG-13'
)

infinity_war = Movie.create!(
  title: 'Avengers: Infinity War',
  description: 'The Avengers are put to the test against their greatest foe yet, Thanos',
  duration:'160 minutes',
  year: 2018,
  rating:'PG-13'
)

endgame = Movie.create!(
  title: 'Avengers: Endgame',
  description: 'An epic conclusion to the Infinity War Saga',
  duration:'183 minutes',
  year: 2019,
  rating:'PG-13'
)

logan = Movie.create!(
  title: 'Logan',
  description: 'A weary Wolverine is reintroduced into the world after coming across a mysterious young mutant',
  duration:'141 minutes',
  year: 2017,
  rating:'R'
)



#posters

poster1 = open('https://app-bestflix-seeds.s3-us-west-1.amazonaws.com/movieImage1.jpg')
demon_slayer.poster.attach(io: poster1, filename: 'movieImage1.jpg')

poster2 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/dark_knight.jpg')
dark_knight.poster.attach(io: poster2, filename: 'dark_knight.jpg')

poster3 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/godzilla_vs_kong.jpg')
godzilla_vs_kong.poster.attach(io: poster3, filename: 'godzilla_vs_kong.jpg')

poster4 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/infinity_war.jpg')
infinity_war.poster.attach(io: poster4, filename: 'infinity_war.jpg')

poster5 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/endgame.jpg')
endgame.poster.attach(io: poster5, filename: 'endgame.jpg')

poster6 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/logan.jpg')
logan.poster.attach(io: poster6, filename: 'logan.jpg')

#videos

video1 = open('https://app-bestflix-seeds.s3-us-west-1.amazonaws.com/movieTrailer1.mp4')
demon_slayer.video.attach(io: video1, filename: 'movieTrailer1.mp4')

video2 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/dark_knight.mp4')
dark_knight.video.attach(io: video2, filename: 'dark_knight.mp4')

video3 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/godzilla_kong.mp4')
godzilla_vs_kong.video.attach(io: video3, filename: 'godzilla_kong.mp4')

video4 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/infinity_war.mp4')
infinity_war.video.attach(io: video4, filename: 'infinity_war.mp4')

video5 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/endgame.mp4')
endgame.video.attach(io: video5, filename: 'endgame.mp4')

video6 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/logan.mp4')
logan.video.attach(io: video6, filename: 'logan.mp4')

#genres

Genre.create!(name: 'Action')
Genre.create!(name: 'Animation')
Genre.create!(name: 'Comedy')
Genre.create!(name: 'Horror')



VideoGenre.create!(video_id: demon_slayer.id, genre_id: Genre.find_by(name: 'Action').id)
VideoGenre.create!(video_id: demon_slayer.id, genre_id: Genre.find_by(name: 'Animation').id)



