export type NavItem = {
  href: string;
  label: string;
};

export type PrayerTime = {
  key: string;
  name: string;
  adhan: string;
  iqamah?: string;
  note?: string;
};

export type Program = {
  title: string;
  summary: string;
  schedule: string;
  audience: string;
  icon: string;
};

export type VideoItem = {
  title: string;
  summary: string;
  duration: string;
  published: string;
  href: string;
};

export type UpdateItem = {
  title: string;
  date: string;
  summary: string;
};

export const siteConfig = {
  name: "Masjid Benawf",
  shortName: "Benawf",
  description:
    "Masjid Benawf is a welcoming mosque focused on prayer, Qur'an, learning, and community care.",
  primaryColor: "#2b7a78",
  timezone: "Asia/Beirut",
  phone: "Replace with official phone",
  email: "Replace with official email",
  facebookUrl: "https://www.facebook.com/MasjidBenawf",
  youtubeUrl: "https://www.youtube.com/@masjidbenawf",
  mapQuery: "Masjid Benawf",
  heroMessage:
    "A calm place for salah, learning, and community connection.",
  addressLine:
    "Visit the mosque and check the Facebook page for the latest local updates and directions."
};

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/prayer-times", label: "Prayer Times" },
  { href: "/media", label: "Media" },
  { href: "/programs", label: "Programs" },
  { href: "/contact", label: "Contact" }
];

export const prayerTimes: PrayerTime[] = [
  { key: "fajr", name: "Fajr", adhan: "05:02", iqamah: "05:20" },
  { key: "sunrise", name: "Sunrise", adhan: "06:18", note: "No congregational prayer" },
  { key: "dhuhr", name: "Dhuhr", adhan: "12:06", iqamah: "12:20" },
  { key: "asr", name: "Asr", adhan: "15:32", iqamah: "15:45" },
  { key: "maghrib", name: "Maghrib", adhan: "18:01", iqamah: "18:06" },
  { key: "isha", name: "Isha", adhan: "19:23", iqamah: "19:35" },
  { key: "jumuah", name: "Jumu'ah", adhan: "13:00", note: "Khutbah begins at 12:45 on Fridays" }
];

export const programs: Program[] = [
  {
    title: "Daily Congregational Prayers",
    summary: "Five daily prayers in a calm, welcoming environment with short reminders after selected salawat.",
    schedule: "Every day",
    audience: "Open to all",
    icon: "◔"
  },
  {
    title: "Qur'an Circles",
    summary: "Weekly recitation and tajwid sessions for youth and adults with beginner-friendly guidance.",
    schedule: "Tuesdays and Thursdays",
    audience: "Youth and adults",
    icon: "۞"
  },
  {
    title: "Weekend Learning",
    summary: "Short lessons on fiqh, character, and family life designed for practical community benefit.",
    schedule: "Saturday mornings",
    audience: "Families",
    icon: "✦"
  },
  {
    title: "Community Support",
    summary: "A care-focused program connecting community members with food support, visits, and emergency referrals.",
    schedule: "By request",
    audience: "Community members",
    icon: "◡"
  }
];

export const videos: VideoItem[] = [
  {
    title: "Friday Reminder: Steadiness in Worship",
    summary: "A short khutbah-style reflection from the Masjid Benawf YouTube presence.",
    duration: "12 min",
    published: "3 days ago",
    href: "https://www.youtube.com/@masjidbenawf/videos"
  },
  {
    title: "Qur'an Reflection Session",
    summary: "A mock content entry showing how future YouTube API data can slot into the same card design.",
    duration: "18 min",
    published: "1 week ago",
    href: "https://www.youtube.com/@masjidbenawf/videos"
  },
  {
    title: "Community Advice for Families",
    summary: "A practical talk format for mosque programming, classes, and recorded reminders.",
    duration: "9 min",
    published: "2 weeks ago",
    href: "https://www.youtube.com/@masjidbenawf/videos"
  }
];

export const updates: UpdateItem[] = [
  {
    title: "Ramadan volunteer sign-up is open",
    date: "Apr 6",
    summary: "Community members can help with iftar setup, welcome, and post-prayer cleanup."
  },
  {
    title: "Family halaqah after Maghrib on Saturday",
    date: "Apr 10",
    summary: "A short reminder followed by tea and conversation for families and youth."
  },
  {
    title: "Monthly support drive",
    date: "Apr 14",
    summary: "Collection for local families in need through the community support team."
  }
];

export const aboutStats = [
  { label: "Daily prayers", value: "5" },
  { label: "Weekly programs", value: "6+" },
  { label: "Community-focused", value: "100%" }
];
