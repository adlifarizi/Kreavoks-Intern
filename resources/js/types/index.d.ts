export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    [key: string]: unknown;
}

export interface Auth {
    user?: User;
}

export interface SharedData {
    name: string;
    auth: Auth;
    [key: string]: unknown;
}

// Course
export interface Course {
    updated: string[];
    released: string[];
    learn: string[];
    benefit: string[];
    id: number;
    title: string;
    category: string;
    price: number;
    discount_price: any;
    rating: number;
    sold: number;
    videos: number;
    status: string;
    slug: string;
    description?: string;
    image?: string;
    level?: string;
    duration?: string;
    students_count?: number;
    instructor?: {
        name: string;
        avatar: string;
        role: string;
    };
}

// Event
export interface EventBatch {
    name: string;
    price: number;
    start_date: string;
    end_date: string;
    time: string;
    status?: string;
}

export interface Event {
    id: number;
    type: string;
    title: string;
    slug: string;
    price: number;
    start_date: string;
    end_date: string;
    time: string;
    mode: string;
    status: string;
    image?: string | null;
    description?: string;
    benefit?: string[];
    learn?: string[];
    category?: string;
    location?: string;
    discount_price?: any;
    speaker?: {
        name: string;
        avatar: string;
        role: string;
    };
    batches?: EventBatch[];
}

export type ServicePackageList = {
    [category: string]: ServicePackage[];
};

// Paket & Jasa
export interface ServicePackageFeature {
    name: string;
    status: boolean;
}

export interface ServicePackage {
    id: number;
    title: string;
    description: string;
    price: number;
    discount: number;
    highlight: boolean;
    features: ServicePackageFeature[];
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    title: string;
    message: string;
    image: string;
    avatar: string;
    content: any;
    company: ReactNode;
}

export interface Portfolio {
    id: number;
    title: string;
    client: string;
    category: string;
    description: string;
    image: string;
    year: number;
    link?: string;
}

export interface Mentor {
    id: number;
    name: string;
    job: string;
    role: string;
    image?: string;
}
