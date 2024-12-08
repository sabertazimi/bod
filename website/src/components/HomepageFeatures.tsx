import clsx from 'clsx'
import MountainSVG from '../../static/img/undraw_docusaurus_mountain.svg'
import ReactSVG from '../../static/img/undraw_docusaurus_react.svg'
import TreeSVG from '../../static/img/undraw_docusaurus_tree.svg'
import styles from './HomepageFeatures.module.css'

type SVG = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: MountainSVG as unknown as SVG,
    description: (
      <>
        Bod was designed from the ground up to be easily installed and used to
        create your app and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: TreeSVG as unknown as SVG,
    description: (
      <>Bod lets you focus on your code. App boilerplate is out of box.</>
    ),
  },
  {
    title: 'Powered by React',
    Svg: ReactSVG as unknown as SVG,
    description: (
      <>
        Extend or customize template by reusing React. Bod can be extended while
        reusing the same React boilerplate.
      </>
    ),
  },
]

function Feature({
  Svg,
  title,
  description,
}: {
  Svg: SVG
  title: string
  description: React.ReactNode
}): React.JSX.Element {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.feature} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): React.JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map(({ title, Svg, description }) => (
            <Feature key={title} title={title} Svg={Svg} description={description} />
          ))}
        </div>
      </div>
    </section>
  )
}
