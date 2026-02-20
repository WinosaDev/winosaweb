"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/portofolio/portfolio.module.css";
import Image from "next/image";
import { projects, type Project } from '@/lib/projectsData';

type FilterType = "All" | "Company Web" | "Enterprise System" | "Product/Platform" | "Web Application";

export default function SectionPortoCards() {
  const router = useRouter();
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

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    setCurrentIndex(0);
  };

  const handleLearnMore = (project: Project) => {
    router.push(`/portofolio/${project.slug}`);
  };

  const openWhatsApp = () => {
    const phoneNumber = '6281234567890';
    const message = 'Hi WINOSA! Saya tertarik untuk memulai project bersama setelah melihat portfolio Anda.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const getCardStyle = (index: number): React.CSSProperties => {
    const diff = index - currentIndex;
    const totalCards = filteredProjects.length;
    
    let normalizedDiff = diff;
    if (Math.abs(diff) > totalCards / 2) {
      normalizedDiff = diff > 0 ? diff - totalCards : diff + totalCards;
    }

    const isActive = normalizedDiff === 0;

    return {
      transform: `translateX(${normalizedDiff * 100}%) scale(${1 - Math.abs(normalizedDiff) * 0.15})`,
      opacity: Math.abs(normalizedDiff) > 1 ? 0 : 1 - Math.abs(normalizedDiff) * 0.4,
      zIndex: 10 - Math.abs(normalizedDiff),
      filter: isActive ? "blur(0px)" : "blur(4px)",
      pointerEvents: isActive ? "auto" : "none",
    };
  };

  return (
    <>
      <section id="portfolio-cards" className={styles.cardsSection}>
        <div className={styles.filterContainer}>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterBtn} ${
                activeFilter === filter ? styles.filterActive : ""
              }`}
              onClick={() => handleFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyStateIcon}>📦</div>
            <h3>No Projects Found</h3>
            <p>
              We're currently working on projects in this category. 
              Check back soon or explore other categories!
            </p>
          </div>
        ) : (
          <>
            <div className={styles.carouselWrapper}>
              <button 
                className={`${styles.navButton} ${styles.navLeft}`}
                onClick={handlePrev}
                aria-label="Previous project"
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
                        priority={index === currentIndex}
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{project.title}</h3>
                      <p className={styles.cardDescription}>{project.description}</p>
                      <div className={styles.cardFooter}>
                        <span className={styles.cardCategory}>{project.category}</span>
                        <button 
                          className={styles.learnMore}
                          onClick={() => handleLearnMore(project)}
                        >
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
                aria-label="Next project"
              >
                ›
              </button>
            </div>

            <div className={styles.dotsContainer}>
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ""}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}