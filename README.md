<a href="https://ibb.co/4RLkxZM9">
  <img src="https://i.ibb.co/23rJB7Pm/horoscope.png" alt="horoscope" border="0">
</a>

<h2 align="center"><strong>🔮 Horoscope Scraper</strong></h2>
<p align="center"><em>A Simple Lightweight TypeScript Scraper for Daily Horoscopes</em></p>

<p align="center">
  <a href="#"><img title="HOROSCOPE-SCRAPER" src="https://img.shields.io/badge/HOROSCOPE-SCRAPER-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
  <a href="https://github.com/MythicIssa"><img title="Author" src="https://img.shields.io/badge/Author-Issa-red.svg?style=for-the-badge&logo=github"></a>
  <a href="https://github.com/MythicIssa/Horoscope-Scraper"><img title="Open Source" src="https://img.shields.io/badge/Open%20Source-YES-green.svg?style=for-the-badge"></a>
  <a href="https://github.com/MythicIssa/Horoscope-Scraper"><img title="License" src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge"></a>
  <a href="#"><img title="Language" src="https://img.shields.io/badge/Language-TypeScript-3178c6?style=for-the-badge"></a>
  <a href="#"><img title="Node.js" src="https://img.shields.io/badge/Node-%5E20.0.0-brightgreen?style=for-the-badge"></a>
  <a href="#"><img title="axios" src="https://img.shields.io/badge/axios-%5E1.6.8-yellow?style=for-the-badge"></a>
  <a href="#"><img title="jsdom" src="https://img.shields.io/badge/jsdom-%5E24.0.0-orange?style=for-the-badge"></a>
</p>

---

## 🛠️ Tech Stack

- **Language:** TypeScript
- **Runtime:** Node.js
- **Packages:**
  - [`axios`](https://www.npmjs.com/package/axios)
  - [`jsdom`](https://www.npmjs.com/package/jsdom)

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/MythicIssa/Horoscope-Scraper.git
cd Horoscope-Scraper
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Build the Project

```bash
yarn build
```

### 4. Run the CLI

```bash
node dist/cli.js [time] [sign]
```

- `time` can be `today` or `tomorrow`
- `sign` is a number from 1 (Aries) to 12 (Pisces)

#### Example

```bash
node dist/cli.js today 3
```

---

## 🧩 Programmatic Usage

You can import and use the scraper directly in your own scripts or bots.

### Example

```ts
import { getHoroscope } from './horoscope.js' // Adjust path if needed

(async () => {
  const data = await getHoroscope('today', 9) // 9 = Sagittarius

  if (data.error) {
    console.error('Failed to fetch horoscope:', data.error)
  } else {
    console.log(`🌟 ${data.type}`)
    console.log(`💬 ${data.holoscope}`)
    console.log(`❤️ Love: ${data.love}`)
    console.log(`💼 Career: ${data.career}`)
    console.log(`🤝 Friendship: ${data.friendship}`)
    console.log(`🔥 Sex: ${data.sex}`)
    console.log(`⚡ Hustle: ${data.hustle}`)
    console.log(`🎯 Vibe: ${data.vibe}`)
    console.log(`🏆 Success: ${data.success}`)
  }
})()
```

### 💻 Use Cases

- 🔁 Daily scheduler scripts
- 🤖 Chatbots (WhatsApp, Telegram, Discord, etc.)
- 📱 Backend API integrations
- 🖥 Terminal-based dashboard tools

---

## 🖼 Zodiac Sign Numbers

| Sign        | Number |
|-------------|--------|
| Aries       | 1      |
| Taurus      | 2      |
| Gemini      | 3      |
| Cancer      | 4      |
| Leo         | 5      |
| Virgo       | 6      |
| Libra       | 7      |
| Scorpio     | 8      |
| Sagittarius | 9      |
| Capricorn   | 10     |
| Aquarius    | 11     |
| Pisces      | 12     |

---

## 🔰 Disclaimer

> This is an open source project created by [`@Issa`](https://github.com/MythicIssa).  
> We are **not affiliated** with [`@Horoscope`](https://www.horoscope.com) or their trademarks in any way.
> This project is meant for education purposes only, so use it well.

---

## 🤝 Contributors

<a href="https://github.com/MythicIssa/Horoscope-Scraper/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=MythicIssa/Horoscope-Scraper" />
</a>

---

## 📄 License

This project is open-source and available under the [MIT License](./LICENSE).

