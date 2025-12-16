'use client'

import ScrollReveal from './ScrollReveal'

export default function CabinDescriptionSection() {
  return (
    <section className="min-h-screen bg-cabana-background px-4 md:px-8 pt-8 md:pt-20 pb-16 flex flex-col justify-center md:justify-start">
      <div className="w-full max-w-4xl mx-auto text-center mt-0 md:mt-16">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          containerClassName="font-josefin"
          textClassName=""
          baseTextColor="#cc6535"
          highlightWords={['4 personas', 'planta alta', 'cómoda cama matrimonial', 'dos camas individuales']}
          highlightColor="#7997ff"
        >
          Nuestra cabaña está pensada para recibir hasta 4 personas con toda la comodidad necesaria para disfrutar de una estadía placentera. En la planta alta encontrarás dos habitaciones: una con una cómoda cama matrimonial y otra con dos camas individuales, ideal para familias o grupos pequeños.
        </ScrollReveal>
      </div>
    </section>
  )
}