export type Post = {
    slug: string;
    title: string;
    date: string;
    description: string;
    tag: string;
    content: string;
};

export const posts: Post[] = [
    {
        slug: "semester-wishlist",
        title: "Semester Wishlist — Things I Wanna Do Before I Graduate",
        date: "April 7, 2026",
        description: "A list of things I want to accomplish before walking across that stage.",
        tag: "Life",
        content: `
Prior to this semester, I had a pretty clear vision of what I wanted to do during my time at Cal State Fullerton. But as I get closer to graduation, I've realized there are still a few things on my wishlist I haven't checked off yet.

## SRC Fitness Goals

1. Rock Climbing: I went rock climbing a couple semesters ago and honestly despised it — which is exactly why I want to give it another shot before I leave.

2. Pilates: I've never tried pilates but I've heard great things. It seems like something I'd either love or hate, and I want to find out.

3. Spin Classes: I love biking and the Peloton is one of my favorites, so taking an actual spin class is something I am curious about.

## Personal & Career

1. Write a letter to myself: To open in five years. I want to see how much changes — and how much doesn't.

2. Get a job in the industry: I want to experience working in a professional setting and applying what I've learned in school to real-world projects.

        `.trim(),
    },
];


export function getPost(slug: string): Post | undefined {
    return posts.find(p => p.slug === slug);
}
