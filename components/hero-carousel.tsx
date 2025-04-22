"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'
import type { TranslationFunction } from '@/types/language'

export function HeroCarousel() {
  const { t } = useLanguage()
  
  const slides = [
    {
      image: '/log1.jpg',
      title: t('carousel_global_network_title'),
      description: t('carousel_global_network_description')
    },
    {
      image: '/log2.jpg',
      title: t('carousel_safety_title'),
      description: t('carousel_safety_description')
    },
    {
      image: '/log3.jpg',
      title: t('carousel_customs_title'),
      description: t('carousel_customs_description')
    }
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[200px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
            <p className="text-lg">{slide.description}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === current ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  )
}
