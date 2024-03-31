import ParticleFactory from '../ParticleFactory'

describe('particleFactory', () => {
  it('should initial with empty particles array', () => {
    const factory = new ParticleFactory()
    expect(factory.getParticles()).toHaveLength(0)
  })

  it('should emit new particle toe particles array', () => {
    const factory = new ParticleFactory()

    expect(factory.getParticles()).toHaveLength(0)
    factory.emit()
    expect(factory.getParticles()).toHaveLength(1)
    factory.emit()
    expect(factory.getParticles()).toHaveLength(2)
  })

  it('should clear all particles when flush particles array', () => {
    const factory = new ParticleFactory()

    expect(factory.getParticles()).toHaveLength(0)
    factory.emit()
    factory.emit()
    factory.emit()
    expect(factory.getParticles()).toHaveLength(3)
    factory.clearParticles()
    expect(factory.getParticles()).toHaveLength(0)
  })
})
