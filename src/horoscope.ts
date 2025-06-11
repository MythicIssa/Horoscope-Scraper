import axios from 'axios'
import { JSDOM } from 'jsdom'

// User-Agent header to mimic a mobile browser
const USER_AGENT =
  'Mozilla/5.0 (Linux; Android 10; SM-G996U Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36'

const headerOption = { headers: { 'User-Agent': USER_AGENT } }

export interface HoroscopeData {
  type: string | null
  love: string | null
  career: string | null
  friendship: string | null
  sex: string | null
  hustle: string | null
  vibe: string | null
  success: string | null
  holoscope: string | null
  error?: string
}

const getDefaultHoroscopeData = (): HoroscopeData => ({
  type: null,
  holoscope: null,
  love: null,
  friendship: null,
  career: null,
  sex: null,
  hustle: null,
  vibe: null,
  success: null
})

export const getHoroscope = async (
  time: string = 'today',
  num: number = 1
): Promise<HoroscopeData> => {
  if (!['today', 'tomorrow'].includes(time)) {
    return {
      error: 'Invalid time format',
      ...getDefaultHoroscopeData()
    }
  }

  if (!(num >= 1 && num <= 12)) {
    return {
      error: 'Invalid Zodiac Sign',
      ...getDefaultHoroscopeData()
    }
  }

  try {
    const response = await axios.get(
      `https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-${time}.aspx?sign=${num}`,
      headerOption
    )

    const dom = new JSDOM(response.data)

    const getText = (selector: string) =>
      dom.window.document.querySelector(selector)?.textContent?.trim() || null

    const extractRatings = (): Record<string, string> => {
      const result: Record<string, string> = {
        sex: '0 stars out of 5',
        hustle: '0 stars out of 5',
        vibe: '0 stars out of 5',
        success: '0 stars out of 5'
      }

      const ratingsBlock = dom.window.document.querySelector('.ratings')
      if (!ratingsBlock) return result

      const ratingLinks = ratingsBlock.querySelectorAll('a')

      ratingLinks.forEach((a) => {
        const category = a.querySelector('h4')?.textContent?.toLowerCase()
        const stars = a.querySelectorAll('i.icon-star-filled.highlight').length
        if (category && result.hasOwnProperty(category)) {
          result[category] = `${stars} stars out of 5`
        }
      })

      return result
    }

    const ratings = extractRatings()

    return {
      type: getText('body > section.banner > div > div > a > h1'),
      holoscope: getText(
        'body > div.grid.grid-right-sidebar.primis-rr > main > div.main-horoscope > p:nth-child(2)'
      ),
      love: getText('#src-horo-matchlove > p'),
      friendship: getText('#src-horo-matchfriend > p'),
      career: getText('#src-horo-matchcareer > p'),
      sex: ratings.sex,
      hustle: ratings.hustle,
      vibe: ratings.vibe,
      success: ratings.success
    }
  } catch (error) {
    console.error('Error fetching horoscope:', error)
    return {
      error: 'An error occurred while fetching the horoscope',
      ...getDefaultHoroscopeData()
    }
  }
}
