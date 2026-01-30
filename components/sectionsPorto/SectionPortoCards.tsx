"use client";

import { useState } from "react";
import styles from "@/app/portofolio/portfolio.module.css";
import Image from "next/image";

type FilterType = "All" | "Company Web" | "Enterprise System" | "Product/Platform" | "Web Application";

interface Project {
  id: number;
  title: string;
  description: string;
  category: FilterType;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Prowerty",
    description: "Platform market place untuk property",
    category: "Web Application",
    image: "/images/Prowperty.png",
  },
  {
    id: 2,
    title: "SAAS Platform",
    description: "Enterprise solution for business",
    category: "Company Web",
    image: "/images/project2.png",
  },
  {
    id: 3,
    title: "Enterprise Dashboard",
    description: "Data analytics platform",
    category: "Enterprise System",
    image: "/images/project3.png",
  },
  {
    id: 4,
    title: "NDPIE System",
    description: "Management system",
    category: "Product/Platform",
    image: "/images/project4.png",
  },
  {
    id: 5,
    title: "Business App",
    description: "Custom business solution",
    category: "Web Application",
    image: "/images/project5.png",
  },
];

export default function SectionPortoCards() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filters: FilterType[] = [
    "All",
    "Company Web",
    "Enterprise System",
    "Product/Platform",
    "Web Application",
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const totalCards = filteredProjects.length;
    
    // Normalize diff untuk handle looping
    let normalizedDiff = diff;
    if (Math.abs(diff) > totalCards / 2) {
      normalizedDiff = diff > 0 ? diff - totalCards : diff + totalCards;
    }

    return {
      transform: `translateX(${normalizedDiff * 100}%) scale(${1 - Math.abs(normalizedDiff) * 0.15})`,
      opacity: Math.abs(normalizedDiff) > 1 ? 0 : 1 - Math.abs(normalizedDiff) * 0.4,
      zIndex: 10 - Math.abs(normalizedDiff),
      filter: normalizedDiff === 0 ? "blur(0px)" : "blur(4px)",
    };
  };

  return (
    <section className={styles.cardsSection}>
      {/* Filter Buttons */}
      <div className={styles.filterContainer}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={`${styles.filterBtn} ${
              activeFilter === filter ? styles.filterActive : ""
            }`}
            onClick={() => {
              setActiveFilter(filter);
              setCurrentIndex(0); // Reset ke awal saat ganti filter
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Carousel Cards */}
      <div className={styles.carouselWrapper}>
        <button 
          className={`${styles.navButton} ${styles.navLeft}`}
          onClick={handlePrev}
          aria-label="Previous"
        >
          ‹
        </button>

        <div className={styles.carouselContainer}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={styles.carouselCard}
              style={getCardStyle(index)}
            >
              <div className={styles.cardImage}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardCategory}>{project.category}</span>
                  <button className={styles.learnMore}>
                    Learn More <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className={`${styles.navButton} ${styles.navRight}`}
          onClick={handleNext}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* Dots Indicator */}
      <div className={styles.dotsContainer}>
        {filteredProjects.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom Description */}
      <div className={styles.bottomText}>
        <p>
          A selection of digital projects developed by WINOSA, focusing on
          enterprise systems, web applications, and product solutions built
          to support business operations and growth.
        </p>
      </div>

      {/* Big Title */}
      <div className={styles.bigTitle}>
        <h2>
          We Design, We Create,
          <br />
          We Build For YOU
        </h2>
      </div>
    </section>
  );
}