type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "racun1601@gmail.com",
  title: "Hi, I’m Fuji 👋",
  description:
    "Halo! 👋 Saya Fuji Halim Rabani, seorang penjelajah internet",
  socials: [
    {
      label: "Facebook",
      link: "https://www.facebook.com/kang.komen.798",
    },
    {
      label: "Github",
      link: "https://github.com/fujitime", 
    },
  ],
};

export default presentation;
