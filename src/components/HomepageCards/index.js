import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';

const FeatureList = [
  {
    title: 'Seamless workflow from planning to commanding',
    Img: require('@site/static/img/cards/plandev-feature-planning-commanding-light.png').default,
    ImgDark: require('@site/static/img/cards/plandev-feature-planning-commanding-dark.png').default,
    size: 'col--8',
    description: (
      <>
        Build sequences and commands that execute on-board a spacecraft directly from activities in your plans. Author
        and refine sequences derived from your command dictionary.
      </>
    ),
  },
  {
    title: 'Extensible mission modeling and simulation',
    Img: require('@site/static/img/cards/plandev-feature-mission-modeling-light.png').default,
    ImgDark: require('@site/static/img/cards/plandev-feature-mission-modeling-dark.png').default,
    size: 'col--4',
    description: (
      <>
        Model your system with access to the entire Java ecosystem. Validate plans against your models using PlanDev's
        discrete event simulator through the user interface or PlanDev API.
      </>
    ),
  },
  {
    title: 'Real-time collaboration and versioning',
    Img: require('@site/static/img/cards/plandev-feature-collaboration-light.png').default,
    ImgDark: require('@site/static/img/cards/plandev-feature-collaboration-dark.png').default,
    size: 'col--4',
    description: (
      <>
        Create, modify, and test out plans together in real time from across the world. Or make branches, edit them
        asynchronously, and merge them together when you're ready.
      </>
    ),
  },
  {
    title: 'Flexible scheduling and rule checking',
    Img: require('@site/static/img/cards/plandev-feature-rule-checking-light.png').default,
    ImgDark: require('@site/static/img/cards/plandev-feature-rule-checking-dark.png').default,
    size: 'col--8',
    description: (
      <>
        Automate plan creation with prioritized scheduling goals. Author constraints, evaluate them against a simulation
        of your plan, and visualize violations on the plan timeline.
      </>
    ),
  },
];

const GetStartedList = [
  {
    title: 'For Mission Planners',
    Img: require('@site/static/img/cards/plandev-getstarted-mission-planners-light.png').default,
    ImgDark: require('@site/static/img/cards/plandev-getstarted-mission-planners-dark.png').default,
    size: 'col--4',
    link: '/plandev-docs/category/planning/',
    linkTitle: 'Planning docs',
    description: (
      <>
        Create a viable plan that meets mission objectives while adhering to all constraints throughout the project
        lifecycle.
      </>
    ),
  },
  {
    title: 'For Systems Engineers',
    Img: require('@site/static/img/cards/plandev-getstarted-systems-engineers-light.png').default,
    ImgDark: require('@site/static/img/cards/plandev-getstarted-systems-engineers-dark.png').default,
    size: 'col--4',
    // link: '/plandev-docs/category/planning/',
    // linkTitle: 'Planning docs',
    description: <>Analyze and inform spacecraft design and architecture during development.</>,
  },
  {
    title: 'For Spacecraft Operators',
    Img: require('@site/static/img/cards/plandev-getstarted-spacecraftops-light.png').default,
    ImgDark: require('@site/static/img/cards/plandev-getstarted-spacecraftops-dark.png').default,
    size: 'col--4',
    // link: '/plandev-docs/category/planning/',
    // linkTitle: 'Planning docs',
    description: (
      <>
        Build and collaboratively iterate on an integrated plan and set of commands that meets plan goals and
        constraints.
      </>
    ),
  },
  {
    title: 'Open source and zero cost',
    Img: require('@site/static/img/cards/plandev-getstarted-opensource-light.png').default,
    ImgDark: require('@site/static/img/cards/plandev-getstarted-opensource-dark.png').default,
    size: 'col--4',
    link: 'https://opensource.org/license/mit/',
    linkTitle: 'MIT License',
    description: (
      <>Community driven flexible workspace designed to support flagship missions to exploratory proposals.</>
    ),
  },
  {
    title: 'Quick set up and customization',
    Img: require('@site/static/img/cards/plandev-getstarted-customize-light.png').default,
    ImgDark: require('@site/static/img/cards/plandev-getstarted-customize-dark.png').default,
    size: 'col--8',
    link: '/plandev-docs/introduction/#fast-track',
    linkTitle: 'PlanDev quick start',
    description: (
      <>
        PlanDev was designed from the ground up to be easily installed and used to get your mission up and running
        quickly. PlanDev lets you focus on your mission, and we'll do the chores.
      </>
    ),
  },
];

const LearnMoreList = [
  {
    title: 'Ask a question on Slack',
    Img: require('@site/static/img/cards/plandev-learn-slack.png').default,
    ImgDark: require('@site/static/img/cards/plandev-learn-slack-dark.png').default,
    size: 'col--4',
    link: 'https://join.slack.com/t/nasa-ammos/shared_invite/zt-1mlgmk5c2-MgqVSyKzVRUWrXy87FNqPw',
    linkTitle: 'Join Slack',
    description: (
      <>Say hi or get help by joining our Slack conversations or posting a question in our GitHub discussions.</>
    ),
  },
  {
    title: 'Discuss or contribute on Github',
    Img: require('@site/static/img/cards/plandev-learn-github.png').default,
    ImgDark: require('@site/static/img/cards/plandev-learn-github-dark.png').default,
    size: 'col--4',
    link: 'https://github.com/PlanDev/plandev',
    linkTitle: 'PlanDev on Github',
    description: (
      <>Post a question in GitHub discussions, or contribute back and help make PlanDev even better than it is today.</>
    ),
  },
  {
    title: 'Sign up for news and updates',
    Img: require('@site/static/img/cards/plandev-learn-googlegroup.png').default,
    ImgDark: require('@site/static/img/cards/plandev-learn-googlegroup-dark.png').default,
    size: 'col--4',
    link: 'https://groups.google.com/u/3/g/plandev-users',
    linkTitle: 'PlanDev Users Group',
    description: <>Stay up-to-date on the latest news and releases by joining the PlanDev Users Google Group.</>,
  },
  {
    title: 'Dive into the docs',
    size: 'col--4',
    links: [
      { url: '/plandev-docs/overview/concept-of-operations/', text: 'Concept of Operations' },
      { url: '/plandev-docs/overview/software-design-document/', text: 'Software Design Document' },
      { url: '/plandev-docs/mission-modeling/introduction/', text: 'Mission Modeling' },
      { url: '/plandev-docs/category/planning/', text: 'Planning' },
      { url: '/plandev-docs/constraints/introduction/', text: 'Constraints' },
      { url: '/plandev-docs/java-docs/introduction/', text: 'Java Docs' },
    ],
    description: <>See the details of how different components work in PlanDev.</>,
  },
  {
    title: 'Explore a universe of extensions',
    Img: require('@site/static/img/cards/plandev-learn-extensions.png').default,
    ImgDark: require('@site/static/img/cards/plandev-learn-extensions-dark.png').default,
    size: 'col--4',
    link: '/plandev-docs/introduction/#fast-track',
    linkTitle: 'Coming soon',
    description: (
      <>
        Project and community members have begun to build a marketplace of extensions you can use to jump start your
        modeling and ground system integration efforts.
      </>
    ),
  },
  {
    title: 'Something else?',
    size: 'col--4',
    link: 'support@plandev.dev',
    linkTitle: 'support@plandev.dev',
    description: (
      <>
        Have a specific quesion that you'd like help with? Curious to speak with someone directly? Send us an email and
        we can find to chat or demo PlanDev.
      </>
    ),
  },
];

function Feature({ Img, ImgDark, title, description, size, link, linkTitle, links }) {
  const { colorMode } = useColorMode();

  return (
    <div className={clsx(`col ${styles.featureSection}`, size)}>
      <div className={styles.card}>
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className={clsx(`card__body ${styles.cardBody}`)}>
          <div className={styles.cardDescription}>
            <p>{description}</p>
            {links && (
              <ul className={styles.linksList}>
                {links.map((linkItem, index) => (
                  <li key={index}>
                    <a href={linkItem.url} target={linkItem.newTab ? '_blank' : '_self'} rel="noopener noreferrer">
                      {linkItem.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {Img && <img src={colorMode === 'light' ? Img : ImgDark} className={styles.cardImg} alt={title} />}

          {link && (
            <div className={styles.cardFooter}>
              {linkTitle === 'Coming soon' ? (
                <p style={{ marginBottom: 0 }}>Coming soon</p>
              ) : (
                <a href={link}>
                  {linkTitle}
                  <span className={styles.linkArrow}>→</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function HomepageFeatures() {
  return (
    <section className={styles.cardSection}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomepageGetStarted() {
  return (
    <section className={styles.cardSection}>
      <div className="container">
        <div className="row">
          {GetStartedList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomepageLearnMore() {
  return (
    <section className={styles.cardSection}>
      <div className="container">
        <div className="row">
          {LearnMoreList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
