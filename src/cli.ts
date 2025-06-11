import { getHoroscope } from './horoscope.js'

const day = process.argv[2] || 'today'
const sign = parseInt(process.argv[3] || '1', 10)

const signNames = [
  '',
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisces'
]

getHoroscope(day, sign).then((data) => {
  console.log(`\n🌟 Horoscope for ${signNames[sign] || 'Unknown'} (${day})`)
  console.log('----------------------------------')
  if (data.error) {
    console.error('❌', data.error)
  } else {
    console.log(`Type: ${data.type}`)
    console.log(`Love: ${data.love}`)
    console.log(`Career: ${data.career}`)
    console.log(`Friendship: ${data.friendship}`)
    console.log(`Sex: ${data.sex}`)
    console.log(`Hustle: ${data.hustle}`)
    console.log(`Vibe: ${data.vibe}`)
    console.log(`Success: ${data.success}`)
    console.log(`\n📝 ${data.holoscope}\n`)
  }
})
