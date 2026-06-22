import type { PrayerTime } from "../data/site";

const activeKeys = ["fajr", "dhuhr", "asr", "maghrib", "isha"];

export function toMinutes(value: string) {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}

export function getCurrentPrayer(prayers: PrayerTime[], currentMinutes: number) {
  const dailyPrayers = prayers
    .filter((prayer) => activeKeys.includes(prayer.key))
    .sort((a, b) => toMinutes(a.adhan) - toMinutes(b.adhan));

  let current = dailyPrayers[dailyPrayers.length - 1];
  let next = dailyPrayers[0];

  for (let index = 0; index < dailyPrayers.length; index += 1) {
    const prayer = dailyPrayers[index];
    const prayerMinutes = toMinutes(prayer.adhan);
    const nextPrayer = dailyPrayers[(index + 1) % dailyPrayers.length];

    if (currentMinutes >= prayerMinutes) {
      current = prayer;
      next = nextPrayer;
    } else {
      if (index === 0) {
        current = dailyPrayers[dailyPrayers.length - 1];
        next = prayer;
      }
      break;
    }
  }

  return { current, next };
}

export function getMinutesInTimezone(timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone
  }).formatToParts(new Date());

  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "0");

  return hour * 60 + minute;
}
