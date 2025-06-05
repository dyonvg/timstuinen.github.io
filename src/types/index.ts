export interface Photo {
    id: string;
    title: string;
    description?: string;
    imageUrl: string;
}

export interface GalleryProps {
    photos: Photo[];
}

export interface HeroProps {
    title: string;
    subtitle?: string;
    ctaText: string;
    ctaLink: string;
}

export interface HeaderProps {
    sections: { name: string; link: string }[];
}

export interface FooterProps {
    copyrightText: string;
    socialLinks: { platform: string; url: string }[];
}