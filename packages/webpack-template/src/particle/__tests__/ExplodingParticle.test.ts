import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import ExplodingParticle from '../ExplodingParticle'

describe('explodingParticle', () => {
  let mockContextFunctions: object
  let mockContextProps: object
  let mockContext: CanvasRenderingContext2D

  beforeEach(() => {
    mockContextFunctions = {
      save: vi.fn(),
      restore: vi.fn(),
      beginPath: vi.fn(),
      closePath: vi.fn(),
      arc: vi.fn(),
      fill: vi.fn(),
    }
    mockContextProps = {
      fillStyle: '',
    }
    mockContext = {
      ...mockContextFunctions,
      ...mockContextProps,
    } as unknown as CanvasRenderingContext2D
  })

  afterEach(() => {
    mockContextFunctions = {}
    mockContextProps = {}
    mockContext = {} as unknown as CanvasRenderingContext2D
  })

  it('should get same x, y, color and duration with empty props', () => {
    const particle = new ExplodingParticle()
    const defaultProps = ExplodingParticle.getDefaultProps()

    expect(particle.startX).toBe(defaultProps.x)
    expect(particle.startY).toBe(defaultProps.y)
    expect(particle.color).toStrictEqual(defaultProps.color)
    expect(particle.animationDuration).toBe(defaultProps.duration)
  })

  it('should get random radius, speed and life with empty props', () => {
    const particle = new ExplodingParticle()
    const defaultProps = ExplodingParticle.getDefaultProps()

    expect(particle.radius).not.toBe(defaultProps.radius)
    expect(particle.speed).not.toStrictEqual(defaultProps.speed)
    expect(particle.life).toBe(particle.remainingLife)
    expect(particle.life).not.toBe(defaultProps.life)
    expect(particle.remainingLife).not.toBe(defaultProps.life)
  })

  it('should move according to its speed', () => {
    const particle = new ExplodingParticle({
      x: 1,
      y: 2,
      speed: { x: 1, y: -2 },
    })

    expect(particle.startX).toBe(1)
    expect(particle.startY).toBe(2)
    particle.draw(mockContext)
    expect(particle.startX).toBe(2)
    expect(particle.startY).toBe(0)
    particle.draw(mockContext)
    expect(particle.startX).toBe(3)
    expect(particle.startY).toBe(-2)
    Object.values(mockContextFunctions).forEach((mockFunction) => {
      expect(mockFunction).toHaveBeenCalledTimes(2)
    })
  })

  it('should shrink radius when time passed', () => {
    const particle = new ExplodingParticle({
      radius: 1.25,
    })

    expect(particle.radius).toBe(1.25)
    particle.draw(mockContext)
    expect(particle.radius).toBe(1)
    particle.draw(mockContext)
    expect(particle.radius).toBe(0.75)
    particle.draw(mockContext)
    expect(particle.radius).toBe(0.5)
    Object.values(mockContextFunctions).forEach((mockFunction) => {
      expect(mockFunction).toHaveBeenCalledTimes(3)
    })
  })

  it('should disappear (freezed) when radius becomes zero', () => {
    const particle = new ExplodingParticle({
      x: 0,
      y: 0,
      speed: { x: 1, y: 1 },
      radius: 0.25,
    })

    expect(particle.startX).toBe(0)
    expect(particle.startY).toBe(0)
    expect(particle.radius).toBe(0.25)
    expect(particle.speed).toStrictEqual({ x: 1, y: 1 })
    particle.draw(mockContext)
    expect(particle.startX).toBe(1)
    expect(particle.startY).toBe(1)
    expect(particle.radius).toBe(0)
    particle.draw(mockContext)
    expect(particle.startX).toBe(1)
    expect(particle.startY).toBe(1)
    expect(particle.radius).toBe(0)
    Object.values(mockContextFunctions).forEach((mockFunction) => {
      expect(mockFunction).toHaveBeenCalledTimes(1)
    })
  })
})
