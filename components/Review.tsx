import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";


const reviews = [
  {
    name: "Abhishek",
    body: "I was blown away by how elegant my living room looks after Tulsi installed the false ceiling",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Rakesh Kumar",
    body: "Tulsi completely transformed my home with their painting services",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Ankit Mehra",
    body: "From layout planning to choosing materials, Tulsi made sure my bedroom turned into a peaceful retreat.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Deepika Raut",
    body: "“Tulsi did a phenomenal job with our new flooring. ",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Rohit",
    body: "I never knew wallpaper could add so much personality to a room until Tulsi showed me the possibilities.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Meera Patel",
    body: "The wall panels installed by Tulsi added a premium touch to our hallway. Sleek, modern, and flawlessly fitted",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
    </figure>
  );
};

export function Review() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard  {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4"></div>
    </div>
  );
}
