import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Layout, Row, Col, Card, Timeline } from 'antd'
import { withI18n, useI18n } from 'react-simple-i18n'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import MobileDetect from 'mobile-detect'
import ContactForm from './contact-form'
import WordCloud from './react-d3-cloud'
import { ROOT_URL } from './../../../constants'
import './home.less'

const { Content } = Layout

const data = [
  { text: 'JavaScript', value: 650 },
  { text: 'HTML', value: 500 },
  { text: 'Jest', value: 400 },
  { text: 'CSS', value: 300 },
  { text: 'Ember', value: 150 },
  { text: 'VSCode', value: 120 },
  { text: 'Node', value: 88 },
  { text: 'React', value: 80 },
  { text: 'Antd', value: 74 },
  { text: 'Sass', value: 72 },
  { text: 'Less', value: 60 },
  { text: 'Apollo', value: 54 },
  { text: 'Nginx', value: 48 },
  { text: 'jQuery', value: 42 },
  { text: 'Bootstrap', value: 38 },
  { text: 'WebStorm', value: 34 },
  { text: 'Enzyme', value: 32 },
  { text: 'Github', value: 29 },
  { text: 'MongoDB', value: 25 },
  { text: 'Ubuntu', value: 22 },
  { text: 'Docker', value: 18 },
  { text: 'Webpack', value: 14 },
  { text: 'Jest', value: 13 },
  { text: 'Babel', value: 12 },
  { text: 'Eslint', value: 11 },
]

const playlist = [
  { name: '枝芽', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/zhiya.mp3', duration: '05:17' },
  { name: '自由女神', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3', duration: '04:19' },
  { name: '无雨无晴', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3', duration: '04:09' },
  { name: '碎片', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/suipian.mp3', duration: '05:06' },
  {
    name: '永恒的港湾',
    src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/yonghengdegangwan.mp3',
    duration: '04:46',
  },
]

const fontSizeMapper = word => Math.log2(word.value) * 5
const rotate = () => (Math.random() - 0.5) * 30

const scrollTo = (to, duration) => {
  const difference = to - window.pageYOffset
  const perTick = (difference / duration) * 10

  const scroll = currentPos => {
    setTimeout(() => {
      const newPos = currentPos + perTick
      window.scrollBy(null, perTick)
      if (window.pageYOffset >= to - 1) return
      scroll(newPos)
    }, 10)
  }
  scroll(window.pageYOffset)
}

const Home = ({ staticContext, t }) => {
  const { a } = useI18n()
  const [currentMusicIndex, setMusicIndex] = useState(0)
  function handleClickPrevious() {
    setMusicIndex(currentMusicIndex === 0 ? playlist.length - 1 : currentMusicIndex - 1)
  }
  function handleClickNext() {
    setMusicIndex(currentMusicIndex < playlist.length - 1 ? currentMusicIndex + 1 : 0)
  }

  const md = new MobileDetect(__CLIENT__ ? window.navigator.userAgent : staticContext.userAgent)

  return (
    <Content>
      <Helmet>
        <title>{t('nav.home')} | Hanz Luo</title>
      </Helmet>
      <div id="blue-bg-wrapper">
        <div id="avatar-and-intro">
          <Row type="flex" justify="center" align="middle">
            <Col className="avatar" xs={24} sm={6} md={6} lg={5} xl={4}>
              <img src={`${ROOT_URL}public/images/hanz.jpg`} alt="Hanz Luo" />
              <h1>
                {t('home.hanzluo')}&nbsp;
                <i
                  className="fa fa-envelope-o"
                  aria-hidden="true"
                  id="send-message"
                  onClick={() => scrollTo(document.body.scrollHeight - window.innerHeight, 250)}
                />
              </h1>
              <p>{t('home.softwareEngineer')}</p>
            </Col>
            <Col className="intro" xs={24} sm={14} md={12} lg={9} xl={8}>
              <p>{t('home.introduction')}</p>
            </Col>
          </Row>
        </div>
      </div>
      <div id="timeline">
        <Row type="flex" justify="center">
          <Col className="words-cloud" xs={24} sm={20} md={13} lg={12} xl={10}>
            <WordCloud
              data={data}
              padding={3}
              fontSizeMapper={fontSizeMapper}
              rotate={rotate}
              font="'Helvetica Neue For Number', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif"
            />
          </Col>
          <Col className="timeline-right" xs={22} sm={20} md={7} lg={6} xl={5}>
            <Timeline>
              <Timeline.Item color="#001064" dot={<i className="fa fa-suitcase" aria-hidden="true" />}>
                Dec. 2018 - Present
                <br />
                Software Engineer - LinkedIn
              </Timeline.Item>
              <Timeline.Item color="#001064" dot={<i className="fa fa-suitcase" aria-hidden="true" />}>
                Jan. 2018 - Dec. 2018
                <br />
                Software Engineer UI - ServiceMax from GE Digital
              </Timeline.Item>
              <Timeline.Item color="#001064" dot={<i className="fa fa-suitcase" aria-hidden="true" />}>
                Sep, 2016 - Jan. 2018
                <br />
                Web Developer - Maodou
              </Timeline.Item>
              <Timeline.Item color="#001064" dot={<i className="fa fa-graduation-cap" aria-hidden="true" />}>
                Sep. 2014 - Jun. 2016
                <br />
                Multimedia (MA) - CSUEB
              </Timeline.Item>
              <Timeline.Item color="#001064" dot={<i className="fa fa-suitcase" aria-hidden="true" />}>
                Feb. 2014 - Sep. 2014
                <br />
                Web Developer Intern - KleenSpeed
              </Timeline.Item>
              <Timeline.Item color="#001064" dot={<i className="fa fa-graduation-cap" aria-hidden="true" />}>
                Jan. 2010 - Dec, 2013
                <br />
                Computer Science (BS) - CSUEB
              </Timeline.Item>
            </Timeline>
          </Col>
        </Row>
      </div>
      <div id="skills">
        <Row type="flex" justify="center">
          <Col className="skill" xs={11} sm={10} md={6} lg={5} xl={4}>
            <div className="skill-icon">
              <i className="fa fa-terminal" aria-hidden="true" />
            </div>
            <h3>Server</h3>
            <div className="skill-desc">
              <p>Ubuntu, CentOS</p>
              <p>DNS Config</p>
              <p>Nginx/SSL</p>
              <p>MongoDB, MySQL</p>
            </div>
          </Col>
          <Col className="skill" xs={11} sm={10} md={6} lg={5} xl={4}>
            <div className="skill-icon">
              <i className="fa fa-cogs" aria-hidden="true" />
            </div>
            <h3>Frameworks</h3>
            <div className="skill-desc">
              <p>Node.js</p>
              <p>React</p>
              <p>Sass/Less</p>
              <p>Apollo GraphQL</p>
            </div>
          </Col>
          <Col className="skill" xs={11} sm={10} md={6} lg={5} xl={4}>
            <div className="skill-icon">
              <i className="fa fa-plug" aria-hidden="true" />
            </div>
            <h3>API</h3>
            <div className="skill-desc">
              <p>Google Maps</p>
              <p>Yelp</p>
              <p>Stripe</p>
              <p>Facebook</p>
            </div>
          </Col>
          <Col className="skill" xs={11} sm={10} md={6} lg={5} xl={4}>
            <div className="skill-icon">
              <i className="fa fa-code" aria-hidden="true" />
            </div>
            <h3>UI</h3>
            <div className="skill-desc">
              <p>Semantic UI</p>
              <p>Bootstrap</p>
              <p>Materialize</p>
              <p>Ant Design</p>
            </div>
          </Col>
        </Row>
      </div>
      <div id="projects">
        <Row type="flex" justify="center">
          <h1>{t('home.projects')}</h1>
        </Row>
        <Row className="project-list" type="flex" justify="center">
          <Col xs={22} sm={20} md={7} lg={6} xl={5}>
            <Card style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
              <a
                href="https://github.com/maodouio/meteor-react-redux-base"
                target="_blank"
                rel="noopener noreferrer"
                className="container"
              >
                <h2>meteor-react-redux-base</h2>
                <ul className="texts">
                  <li>Mantra-plus integrated</li>
                  <li>Webpack integrated</li>
                  <li>Wechat Login supported</li>
                  <li>Admin configuration</li>
                </ul>
                <div className="overlay bg-1" />
              </a>
            </Card>
          </Col>
          <Col xs={22} sm={20} md={7} lg={6} xl={5}>
            <Card style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
              <a
                href="https://github.com/lhz516/react-h5-audio-player"
                target="_blank"
                rel="noopener noreferrer"
                className="container"
              >
                <h2>react-h5-audio-player</h2>
                <ul className="texts">
                  <li>React audio player component with UI</li>
                  <li>Provides time indicator on different devices</li>
                  <li>Flexbox design with CSS shapes</li>
                  <li>No extra dependencies</li>
                </ul>
                <div className="overlay bg-2" />
              </a>
            </Card>
          </Col>
          <Col xs={22} sm={20} md={7} lg={6} xl={5}>
            <Card style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
              <a
                href="https://github.com/lhz516/hanzRhymes"
                target="_blank"
                rel="noopener noreferrer"
                className="container"
              >
                <h2>hanz-rhymes</h2>
                <ul className="texts">
                  <li>Seeks rhymes of Chinese characters</li>
                  <li>Rhyme rules configured in MongoDB</li>
                  <li>Uses redux to manage data flow</li>
                </ul>
                <div className="overlay bg-3" />
              </a>
            </Card>
          </Col>
        </Row>
      </div>
      <div id="music">
        <Row type="flex" justify="center">
          <h1>{t('home.music')}</h1>
        </Row>
        <Row className="" type="flex" justify="center">
          <Col xs={22} sm={14} md={10} lg={8} xl={6}>
            <AudioPlayer
              showSkipControls={true}
              showJumpControls={false}
              onClickPrevious={handleClickPrevious}
              onClickNext={handleClickNext}
              onEnded={handleClickNext}
              src={playlist[currentMusicIndex].src}
              customVolumeControls={md.mobile() ? [] : [RHAP_UI.VOLUME]}
              volume={0.8}
            />
            <div className="music-playlist">
              <ul>
                {playlist.map((song, i) => (
                  <li
                    role="menuitem"
                    tabIndex={0}
                    onClick={() => setMusicIndex(i)}
                    onKeyPress={() => {}}
                    key={i}
                    className={`${currentMusicIndex === i && 'playing'}`}
                  >
                    {currentMusicIndex === i && <i className="fa fa-play" aria-hidden="true"></i>}&nbsp;
                    {song.name}
                    <div className="song-duration">{song.duration}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <div id="contact">
        <Row className="contact-wrapper" type="flex" justify="center">
          <Col xs={22} sm={20} md={7} lg={6} xl={5}>
            <h1 className="contact-title">{t('home.contact.title')}</h1>
            <p className="contact-desc">{t('home.contact.description')}</p>
            <div className="social-medias">
              <a
                className="social-media-link"
                href="https://www.facebook.com/hanzhang.luo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook-square" aria-hidden="true" />
                &nbsp;&nbsp;&nbsp;
                <span>Facebook</span>
              </a>
              <a
                className="social-media-link"
                href="https://github.com/lhz516/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
                &nbsp;&nbsp;&nbsp;
                <span>Github</span>
              </a>
              <a
                className="social-media-link"
                href="https://www.linkedin.com/in/hanzluo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
                &nbsp;&nbsp;&nbsp;
                <span>LinkedIn</span>
              </a>
            </div>
          </Col>
          <Col
            className="contact-form"
            xs={22}
            sm={20}
            md={{ span: 8, offset: 1 }}
            lg={{ span: 7, offset: 1 }}
            xl={{ span: 6, offset: 1 }}
          >
            <ContactForm />
          </Col>
        </Row>
      </div>
    </Content>
  )
}

export default withI18n(Home)
