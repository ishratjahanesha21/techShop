import * as React from "react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Hero() {
  const images = [
    { src: "/placeholder.svg?height=400&width=900", alt: "Image 1" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Image 2" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Image 3" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Image 4" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Image 5" },
  ]

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={900}
                    height={200}
                    className="rounded-md object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}