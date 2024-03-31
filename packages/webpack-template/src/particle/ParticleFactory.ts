import type { ParticleProps } from './ExplodingParticle'
import ExplodingParticle from './ExplodingParticle'

class ParticleFactory {
  particles: ExplodingParticle[]
  constructor() {
    this.particles = []
  }

  getParticles(): ExplodingParticle[] {
    return this.particles
  }

  clearParticles(): void {
    while (this.particles.length)
      this.particles.pop()
  }

  emit(particleProps?: ParticleProps): void {
    const particle = new ExplodingParticle(particleProps)
    this.particles.push(particle)
  }
}

export default ParticleFactory
