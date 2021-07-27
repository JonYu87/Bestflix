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

batman_mask = Movie.create!(
  title: 'Batman: Mask of the Phantasm',
  description: 'Batman confronts a mysterious new villain',
  duration:'78 mins',
  year: 1993,
  rating:'PG-13'
)

black_panther = Movie.create!(
  title: 'Black Panther',
  description: 'Black Panther must fight for his people and keep Wakanda safe',
  duration:'134 mins',
  year: 2018,
  rating:'PG-13'
)

fast_five = Movie.create!(
  title: 'Fast & Furious: 5',
  description: 'Paul Walker and Vindiesel return in a high octane action packed film',
  duration:'126 mins',
  year: 2011,
  rating:'PG-13'
)

fast_furious_1 = Movie.create!(
  title: 'Fast & Furious',
  description: 'The first of a long running series of movies involving fast cars and family',
  duration:'84 mins',
  year: 2001,
  rating:'PG-13'
)

fast_furious_tokyo = Movie.create!(
  title: 'Fast & Furious: Tokyo Drift',
  description: 'The exiting franchise moves overseas to Tokyo',
  duration:'88 mins',
  year: 2006,
  rating: 'PG-13'
)

fast_nine = Movie.create!(
  title: 'Fast & Furious: 9',
  description: 'Dominic Toretto has to decide how important family is to him',
  duration:'135 mins',
  year: 2021,
  rating:'PG-13'
)

frozen = Movie.create!(
  title: 'Frozen 2',
  description: 'Elsa sets out on a new adventure as a mysterious voice calls out to her',
  duration: '86 mins',
  year: 2019,
  rating: 'PG'
)

pikachu = Movie.create!(
  title: 'Detective Pikachu',
  description: 'Pokemon come to life in a fun filled mystery story',
  duration: '85 mins',
  year: 2019,
  rating: 'PG'
)

player_one = Movie.create!(
  title: 'Ready Player One',
  description: 'In 2045, the world is on brink of chaos but humans find respite in the virual reality world known as OASIS',
  duration: '126 mins',
  year: 2018,
  rating: 'PG-13'
)

raya = Movie.create!(
  title: 'Raya and the Last Dragon',
  description: 'Set in the beautiful world of Kumandra, a princess named Raya sets off on a journey to save her world',
  duration: '95 mins',
  year: 2021,
  rating: 'PG-13'
)

sonic = Movie.create!(
  title: 'Sonic the Hedgehog',
  description: 'The beloved video game character finally arrives on the big screen in a fun filled adventure',
  duration: '84 mins',
  year: 2020,
  rating: 'PG'
)

space_jam = Movie.create!(
  title: 'Space Jam: A New Legacy',
  description: 'The looney toons team up with NBA superstar Lebron James in a high stakes basketball game, sound familiar?',
  duration: '120 mins',
  year: 2021,
  rating: 'PG'
)

spider_verse = Movie.create!(
  title: 'Spider-Man: Into the Spider-Verse',
  description: 'A young Miles Morales takes up the mantle of Spider-man to save his city and his universe',
  duration: '120 mins'
  year: 2018,
  rating: 'PG'
)

winter_soldier = Movie.create!(
  title: 'Captain America: The Winter Soldier'
  description: 'Capt comes face to face with a mysterious figure who reminds him of the past'
  duration: '136 mins'
  year: 2014,
  rating: 'PG-13'
)






#posters

poster1 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/demon_slayer.jpg')
demon_slayer.poster.attach(io: poster1, filename: 'demon_slayer.jpg')

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

poster7 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/batman_mask.jpg')
batman_mask.poster.attach(io: poster7, filename: 'batman_mask.jpg')

poster8 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/black_panther.jpg')
black_panther.poster.attach(io: poster8, filename: 'black_panther.jpg')

poster9 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/fast_five.jpg')
fast_five.poster.attach(io: poster9, filename: 'fast_five.jpg')

poster10 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/fast_furious_1.jpg')
fast_furious_1.poster.attach(io: poster10, filename: 'fast_furious_1.jpg')

poster11 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/fast_furious_tokyo.jpg')
fast_furious_tokyo.poster.attach(io: poster11, filename: 'fast_furious_tokyo.jpg')

poster12 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/fast_nine.jpg')
fast_nine.poster.attach(io: poster12, filename: 'fast_nine.jpg')

poster13 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/frozen.jpg')
frozen.poster.attach(io: poster13, filename: 'frozen.jpg')

poster14 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/pikachu.jpg')
pikachu.poster.attach(io: poster14, filename: 'pikachu.jpg')

poster15 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/player_one.jpg')
player_one.poster.attach(io: poster15, filename: 'player_one.jpg')

poster16 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/raya.jpg')
raya.poster.attach(io: poster16, filename: 'raya.jpg')

poster17 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/sonic.jpg')
sonic.poster.attach(io: poster17, filename: 'sonic.jpg')

poster18 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/space_jam.jpg')
space_jam.poster.attach(io: poster18, filename: 'space_jam.jpg')

poster19 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/spider_verse.jpg')
spider_verse.poster.attach(io: poster19, filename: 'spider_verse.jpg')

poster20 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/winter_soldier.jpg')
winter_soldier.poster.attach(io: poster20, filename: 'winter_soldier.jpg')





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

video7 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/batman_mask.mp4')
batman_mask.video.attach(io: video7, filename: 'batman_mask.mp4')

video8 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/black_panther.mp4')
black_panther.video.attach(io: video8, filename: 'black_panther.mp4')

video9 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/fast_five.mp4')
fast_five.video.attach(io: video9, filename: 'fast_five.mp4')

video10 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/fast_furious_1.mp4')
fast_furious_1.video.attach(io: video10, filename: 'fast_furious_1.mp4')

video11 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/fast_furious_tokyo.mp4')
fast_furious_tokyo.video.attach(io: video11, filename: 'fast_furious_tokyo.mp4')

video12 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/fast_nine.mp4')
fast_nine.video.attach(io: video12, filename: 'fast_nine.mp4')

video13 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/frozen.mp4')
frozen.video.attach(io: video13, filename: 'frozen.mp4')

video14 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/pikachu.mp4')
pikachu.video.attach(io: video14, filename: 'pikachu.mp4')

video15 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/player_one.mp4')
player_one.video.attach(io: video15, filename: 'player_one.mp4')

video16 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/raya.mp4')
raya.video.attach(io: video16, filename: 'raya.mp4')

video17 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/sonic.mp4')
sonic.video.attach(io: video17, filename: 'sonic.mp4')

video18 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/space_jam.mp4')
space_jam.video.attach(io: video18, filename: 'space_jam.mp4')

video19 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/spider_verse.mp4')
spider_verse.video.attach(io: video19, filename: 'spider_verse.mp4')

video20 = open('https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/winter_soldier.mp4')
winter_soldier.video.attach(io: video20, filename: 'winter_soldier.mp4')


#genres

action = Genre.create!(name: 'Action')
animation = Genre.create!(name: 'Animation')
comedy = Genre.create!(name: 'Comedy')
family = Genre.create!(name: 'Family')


#genre joins action
VideoGenre.create!(movie_id: demon_slayer.id, genre_id: action.id)
VideoGenre.create!(movie_id: dark_knight.id, genre_id: action.id)
VideoGenre.create!(movie_id: godzilla_vs_kong.id, genre_id: action.id)
VideoGenre.create!(movie_id: infinity_war.id, genre_id: action.id)
VideoGenre.create!(movie_id: endgame.id, genre_id: action.id)
VideoGenre.create!(movie_id: logan.id, genre_id: action.id)
VideoGenre.create!(movie_id: black_panther.id, genre_id: action.id)
VideoGenre.create!(movie_id: winter_soldier.id, genre_id: action.id)


#genre joins animation
VideoGenre.create!(movie_id: demon_slayer.id, genre_id: animation.id)
VideoGenre.create!(movie_id: batman_mask.id, genre_id: animation.id)
VideoGenre.create!(movie_id: frozen.id, genre_id: animation.id)
VideoGenre.create!(movie_id: raya.id, genre_id: animation.id)
VideoGenre.create!(movie_id: sonic.id, genre_id: animation.id)
VideoGenre.create!(movie_id: space_jam.id, genre_id: animation.id)
VideoGenre.create!(movie_id: spider_verse.id, genre_id: animation.id)

#genre joins comedy
VideoGenre.create!(movie_id: pikachu.id, genre_id: comedy.id)
VideoGenre.create!(movie_id: player_one.id, genre_id: comedy.id)
VideoGenre.create!(movie_id: sonic.id, genre_id: comedy.id)
VideoGenre.create!(movie_id: space_jam.id, genre_id: comedy.id)
VideoGenre.create!(movie_id: pikachu.id, genre_id: comedy.id)
VideoGenre.create!(movie_id: spider_verse.id, genre_id: comedy.id)
VideoGenre.create!(movie_id: frozen.id, genre_id: comedy.id)



#genre joins family
VideoGenre.create!(movie_id: black_panther.id, genre_id: family.id)
VideoGenre.create!(movie_id: fast_five.id, genre_id: family.id)
VideoGenre.create!(movie_id: fast_furious_1.id, genre_id: family.id)
VideoGenre.create!(movie_id: fast_furious_tokyo.id, genre_id: family.id)
VideoGenre.create!(movie_id: fast_nine.id, genre_id: family.id)
VideoGenre.create!(movie_id: frozen.id, genre_id: family.id)
VideoGenre.create!(movie_id: pikachu.id, genre_id: family.id)
VideoGenre.create!(movie_id: player_one.id, genre_id: family.id)
VideoGenre.create!(movie_id: raya.id, genre_id: family.id)
VideoGenre.create!(movie_id: space_jam.id, genre_id: family.id)


