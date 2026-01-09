export type LifePhoto = {
    src: string;
    caption: string;
    section?: string;
  };
  
  export const lifePhotos: LifePhoto[] = [
    // Replace these with your real filenames under /public/life/
    { src: "/life/archery-1.jpg", caption: "Trojan Archery — training and competition.", section: "Archery" },
    { src: "/life/archery-2.jpg", caption: "Practice session with the team.", section: "Archery" },
    { src: "/life/campus-1.jpg", caption: "USC life — studying and building.", section: "Campus" },
    { src: "/life/work-1.jpg", caption: "Internship memories and teamwork.", section: "Work" },
    { src: "/life/travel-1.jpg", caption: "Exploring new places.", section: "Travel" },
    { src: "/life/travel-2.jpg", caption: "A short reset and reflection.", section: "Travel" },
  ];
  