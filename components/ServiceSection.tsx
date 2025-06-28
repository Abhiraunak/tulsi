import { JSX, Key, SVGProps } from "react";
import Image from "next/image";
import { HovermeButton } from "./ui/hovermeButton";
import { TextAnimate } from "./ui/text-animate";

interface ServiceSectionProps {
  title: string;
  imageUrl: string;
  features: any;
  link: string;
  imagePosition: string;
}

export const ServiceSection = ({ title, imageUrl, features, link, imagePosition }: ServiceSectionProps) => (
  <section className="relative bg-green-50 overflow-hidden py-16 select-none">
    {/* Background Blobs - Reusable */}
    <div className="container mx-auto px-4">
      <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}>
        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-6 order-2 md:order-none">
          <TextAnimate
            className="text-4xl md:text-6xl font-bold"
            text={title}
            type="fadeInUp"
          />

          <div className="space-y-4">
            {features.map((feature: unknown, index: Key | null | undefined) => (
              <FeatureCard
                key={index}
                text={feature}
                className={index === 1 ? 'md:ml-16' : ''}
              />
            ))}
          </div>

          <div className="mt-4 flex justify-center md:justify-start">
            <HovermeButton title="Know more" to={link} />
          </div>
        </div>

        {/* Image - Order first on mobile, natural order on desktop */}
        <div className="flex-1 w-full order-1 md:order-none">
          <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src={imageUrl}
              alt={`${title} showcase`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// FeatureCard Component
// @ts-ignore
const FeatureCard = ({ text, className = '' }) => (
  <div className={`bg-white p-5 rounded-xl shadow-md shadow-green-500/30 transition-all hover:shadow-lg hover:shadow-green-500/50 ${className}`}>
    <div className="flex items-start gap-3">
      <div className="bg-green-100 p-1 rounded-full flex-shrink-0">
        <CheckIcon className="text-green-600 h-5 w-5" />
      </div>
      <p className="text-gray-700 text-base">
        {text}
      </p>
    </div>
  </div>
);

// CheckIcon Component (using Heroicons)
const CheckIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);