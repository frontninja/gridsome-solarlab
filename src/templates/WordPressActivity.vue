<template>
  <Layout>
    <article class="activity-page">
      <div class="container">
        <nav class="activity-nav">
          <ul class="activity-nav__ul">
            <li class="activity-nav__li">
              <a href="#" class="activity-nav__link">Результаты</a>
            </li>
            <li class="activity-nav__li">
              <a href="#" class="activity-nav__link">Спонсоры</a>
            </li>
            <li class="activity-nav__li">
              <a href="#" class="activity-nav__link">Новости</a>
            </li>
            <li class="activity-nav__li">
              <a href="#" class="activity-nav__link">Регламент</a>
            </li>
            <li class="activity-nav__li">
              <a href="#" class="activity-nav__link">Список участников</a>
            </li>
          </ul>
        </nav>
      </div>
      <ActivityTop :title="$page.wordPressActivity.title" />
      <div class="activity-banner">
        <div class="activity-banner__item">
          <g-image
            class="activity-banner__logo"
            :src="$page.wordPressActivity.acf.logo"
            :alt="$page.wordPressActivity.title"
          ></g-image>
          <a href="#" class="button activity-banner__button">Регистрация</a>
        </div>
        <div
          class="activity-banner__item activity-banner__item--row activity-banner__item--overlay"
          :style="{backgroundImage: 'url(' + $page.wordPressActivity.acf.banner + ')'}"
        >
          <div class="activity-banner__item-content">
            <h2 class="activity-banner__title">
              <span
                class="activity-banner__title-item"
                v-for="tag of $page.wordPressActivity.acf.tag"
                :key="tag"
              >{{tag}}</span>
            </h2>
            <p class="activity-banner__date">18.02 - 25.03.20</p>
          </div>
          <div class="activity-banner__stages">
            <span
              class="activity-banner__stage-value"
            >{{ $page.wordPressActivity.acf.numberOfStages}}</span>
            <span
              class="activity-banner__stage-text"
            >{{ $page.wordPressActivity.acf.numberOfStages | pluralize('ru', ['Этап', 'Этапа', 'Этапов']) }}</span>
          </div>
        </div>
      </div>

      <div class="container">
        <section class="activity-timing">
          <h2 class="title-2">Тайминг</h2>
          <div class="timings">
            <div class="timings__item timings__item--start">
              <div class="timings__item-top">
                Старт
                <br />квалификации
              </div>
              <div class="timings__item-bot">
                <div class="timings__item-desc">
                  Результаты
                  <br />квалификации
                </div>
                <div class="timings__item-date">7.02</div>
              </div>
            </div>
            <div class="timings__item" v-for="(stage, index) of stages" :key="stage">
              <div class="timings__item-top">
                <div class="timings__stage">
                  <span class="timings__stage-value">{{stage}}</span>
                  <span class="timings__stage-text">Этап</span>
                </div>
              </div>
              <div class="timings__item-bot">
                <div class="timings__item-desc" v-if="index + 1 < stages.length">
                  Промежуточный
                  <br />результат
                </div>
                <div class="timings__item-desc" v-else>
                  Результат
                  <br />финиша
                </div>
                <div class="timings__item-date">7.02</div>
              </div>
            </div>
            <div class="timings__item timings__item--end">
              <div class="timings__item-top">Награждение</div>
              <div class="timings__item-bot">
                <div class="timings__item-date">7.02</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="periods">
        <article
          class="period"
          v-for="(period, index) of this.$page.wordPressActivity.acf.periods"
          :key="index"
        >
          <div
            class="period__main"
            :class="{'period__main--second': index % 2 === 0, 'green': index % 2 !== 0 }"
          >
            <div class="period__content">
              <p class="period__title">{{index + 1}} Этап</p>
              <h2 class="period__title">{{period.title}}</h2>
              <p class="period__date">{{period.textDate}}</p>
              <p class="period__text">{{period.content}}</p>
              <a
                :href="period.registerLink"
                :class="{'button--second': index % 2 === 0}"
                class="button period__button"
              >Регистрация</a>
            </div>
          </div>
          <video class="period__video" controls>
            <source :src="period.video" type="video/mp4" />
          </video>
          <g-image :src="image" class="period__image" v-for="image of period.images" :key="image"></g-image>
        </article>
      </div>
    </article>
    <section class="news">
      <div class="news__main">
        <h2 class="news__title">Новости</h2>
      </div>

      <g-link
        class="news__item"
        :to="news.item.path"
        v-for="news of $page.wordPressActivity.acf.news"
        :key="news.item.id"
      >
        <span class="news__item-bg" :style="{backgroundImage: 'url(' + news.item.acf.image + ')'}"></span>
        <span class="news__item-content">{{news.item.title}}</span>
      </g-link>
    </section>
    <section class="documents-section">
      <div class="container documents-section__container">
        <h2 class="documents-section__title">Документы</h2>
        <div class="documents">
          <g-link class="documents__item">
            <Document class="documents__item-icon" />
            <p class="documents__item-text">Регламент гонки</p>
          </g-link>
          <g-link class="documents__item">
            <Document class="documents__item-icon" />
            <p class="documents__item-text">Регламент гонки</p>
          </g-link>
          <g-link class="documents__item">
            <Document class="documents__item-icon" />
            <p class="documents__item-text">Регламент гонки</p>
          </g-link>
          <g-link class="documents__item">
            <Document class="documents__item-icon" />
            <p class="documents__item-text">Регламент гонки</p>
          </g-link>
          <g-link class="documents__item">
            <Document class="documents__item-icon" />
            <p class="documents__item-text">Регламент гонки</p>
          </g-link>
        </div>
      </div>
    </section>

    <section class="container sponsors-section">
      <h2 class="sponsors-section__title">Спонсоры</h2>
      <div class="sponsors">
        <g-link class="sponsors__item">
          <g-image src="../assets/images/sponsor.png"></g-image>
        </g-link>
        <g-link class="sponsors__item">
          <g-image src="../assets/images/sponsor2.png"></g-image>
        </g-link>
        <g-link class="sponsors__item">
          <g-image src="../assets/images/sponsor3.png"></g-image>
        </g-link>
      </div>
    </section>
    <section class="media-section">
      <div class="media-section__main">
        <h2 class="media-section__main-title">Медиа</h2>
      </div>
      <g-link class="media-section__item">
        <span
          class="media-section__item-bg"
          :style="{backgroundImage: 'url(' + $page.wordPressActivity.acf.banner + ')'}"
        ></span>
        <span class="media-section__item-content">последнее событие</span>
      </g-link>
      <g-link class="media-section__item">
        <span
          class="media-section__item-bg"
          :style="{backgroundImage: 'url(' + $page.wordPressActivity.acf.banner + ')'}"
        ></span>
        <span class="media-section__item-content">последнее событие</span>
      </g-link>
      <g-link class="media-section__item">
        <span
          class="media-section__item-bg"
          :style="{backgroundImage: 'url(' + $page.wordPressActivity.acf.banner + ')'}"
        ></span>
        <span class="media-section__item-content">последнее событие</span>
      </g-link>
      <g-link class="media-section__item">
        <span
          class="media-section__item-bg"
          :style="{backgroundImage: 'url(' + $page.wordPressActivity.acf.banner + ')'}"
        ></span>
        <span class="media-section__item-content">последнее событие</span>
      </g-link>
      <g-link class="media-section__item">
        <span
          class="media-section__item-bg"
          :style="{backgroundImage: 'url(' + $page.wordPressActivity.acf.banner + ')'}"
        ></span>
        <span class="media-section__item-content">последнее событие</span>
      </g-link>
      <g-link class="media-section__item">
        <span
          class="media-section__item-bg"
          :style="{backgroundImage: 'url(' + $page.wordPressActivity.acf.banner + ')'}"
        ></span>
        <span class="media-section__item-content">последнее событие</span>
      </g-link>
    </section>
    <div class="container">
      <div>
        <div id="vk_comments"></div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
    query Activity ($path: String!) {
        wordPressActivity (path: $path){
            slug
            id
            title
            acf {
                logo
                banner
                tag
                description
                numberOfStages
                totalDistance
                numberOfDays
                period {
                    from
                    to
                }
                periods {
                    title
                    textDate
                    content
                    registerLink
                    video
                    images
                }
                news {
                    item {
                        path
                        slug
                        id
                        title
                        acf {
                            image
                        }
                    }
                }
            }
        }
    }
</page-query>

<script>
import Document from "../assets/svg/document.svg";
import ActivityTop from "../components/ActivitiyTop";
import { injectVKOpenApi, initVK } from "../assets/js/vkinit.js";
export default {
  components: {
    Document,
    ActivityTop
  },
  metaInfo() {
    return { title: this.$page.wordPressActivity.title };
  },
  data: () => ({
    stages: null,
    periods: []
  }),
  mounted() {
    if (this.$page) {
      this.stages = Array(+this.$page.wordPressActivity.acf.numberOfStages)
        .fill(1)
        .map((_, i) => i + 1);
    }
    injectVKOpenApi()
      .then(initVK(true))
      .then(() => {
        VK.Widgets.Comments("vk_comments", { limit: 5, attach: "*" });
      });
  }
};
</script>

<style scoped lang="scss">
.media-section {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 220px;
  color: var(--color-second);
}

.media-section__main {
  background: var(--color-third);
  display: flex;
  justify-content: center;
  padding: 95px 15px;
  grid-column: 1/3;
  grid-row: 1/3;
}

.media-section__main-title {
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 800;
}

.media-section__item {
  display: flex;
  text-align: left;
  background-size: cover;
  font-size: 24px;
  line-height: 31px;
  padding: 23px 20px;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--color-second);
    background: var(--color-main);
    .media-section__item-bg {
      filter: grayscale(0.2);
    }
    .media-section__item-content {
      color: var(--color-second);
    }
  }
  &:hover {
    outline: none;
  }

  &:first-of-type {
    padding-top: 95px;
    grid-column: 3/-1;
    grid-row: 1/3;
  }

  &:nth-of-type(2) {
    grid-row: 3/5;
  }

  &:nth-of-type(3) {
    grid-column: 2/4;
    grid-row: 3/5;
  }

  &:nth-of-type(5) {
    grid-column: 5/7;
  }
  &:nth-of-type(6) {
    grid-column: 4/7;
    grid-row: 4/5;
  }
  &:nth-of-type(6) {
    grid-column: 4/7;
    grid-row: 4/5;
  }
}
.media-section__item-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease-in-out;
  opacity: 0.6;
  filter: grayscale(1);
}

.media-section__item-content {
  position: relative;
  z-index: 1;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-main);
  transition: all 0.3s ease-in-out;
}

.sponsors-section {
  padding-top: 85px;
  padding-bottom: 85px;
}

.sponsors-section__title {
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 85px;
}

.sponsors {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 150px;
  align-items: center;
}

.sponsors__item {
  justify-self: center;
}

.documents-section {
  background-color: var(--color-second-main);
  padding: 85px 0;
  color: var(--color-second);
  background-image: url("../assets/images/design-element.png");
  background-position: right bottom;
  background-repeat: no-repeat;
}

.documents-section__title {
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 85px;
}

.documents {
  display: grid;
  grid-template-columns: repeat(6, 126px);
  grid-gap: 20px;
}

.documents__item {
  color: var(--color-second);
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--color-second-accent);
    .documents__item-icon {
      fill: var(--color-second-accent);
    }
  }
}

.documents__item-icon {
  margin-bottom: 12px;
  transition: all 0.3s ease-in-out;
}
.documents__item-text {
  font-size: 18px;
  line-height: 1.2;
}

.news {
  color: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 450px;
}

.news__main {
  padding: 95px 20px 0;
  display: flex;
  text-align: center;
  justify-content: center;
  background: var(--color-second-accent);
}

.news__title {
  text-transform: uppercase;
  font-weight: 800;
  font-size: 24px;
}

.news__item {
  display: flex;
  text-align: left;
  background-size: cover;
  font-size: 24px;
  line-height: 31px;
  padding: 95px 20px;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--color-second);
    background: var(--color-main);
    .news__item-bg {
      filter: grayscale(0.2);
    }
    .news__item-content {
      color: var(--color-second);
    }
  }
  &:hover {
    outline: none;
  }
}
.news__item-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease-in-out;
  opacity: 0.6;
  filter: grayscale(1);
}

.news__item-content {
  position: relative;
  z-index: 1;
  max-width: 75%;
  font-weight: 600;
  text-decoration: none;
  color: var(--color-main);
  transition: all 0.3s ease-in-out;
}

.period {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 450px;
  color: var(--color-second);
}

.period__main {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-second-main);

  &--second {
    background-color: var(--color-second-accent);
    & + .period__video {
      height: 450px;
      width: 100%;
      padding-top: 15px;
      background: linear-gradient(90deg, #9b191a 0%, #ec681d 50%, #fcbe0e 100%);
    }
  }
}

.period__video {
  height: 450px;
  width: 100%;
  padding: 10px;
  background: linear-gradient(
    90deg,
    #fcbe0e 0%,
    var(--color-second-accent) 50%,
    var(--color-second-main) 100%
  );
}

.period__content {
  width: 50%;
}

.period__title {
  text-transform: uppercase;
  font-weight: 800;
  font-size: 24px;
  line-height: 1.5;
}

.period__date {
  font-size: 18px;
  margin-bottom: 10px;
}

.period__text {
  font-size: 12px;
  line-height: 1.2;
}

.period__button {
  margin-top: 20px;
}

.period__image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.period__media {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
}

.period__media-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.activity-page {
  padding-top: 100px;
}

.activity-nav {
  margin-bottom: 50px;
}

.activity-page__breadcrumbs {
  margin-bottom: 50px;
}

.activity-nav__ul {
  display: flex;
}

.activity-nav__li {
  & + & {
    margin-left: 50px;
  }
}

.activity-nav__link {
  font-size: 17px;
  letter-spacing: 0.6px;
  font-weight: 600;
  text-decoration: none;
  color: var(--color-main);

  &:hover {
    text-decoration: underline;
  }
}

.activity-banner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.activity-banner__item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50%;
  height: 438px;
  padding-top: 100px;
  color: var(--color-second);
  background: var(--color-second-main);
  background-size: cover;
  background-position: center;
  position: relative;

  & > * {
    position: relative;
    z-index: 1;
  }

  &--overlay {
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--color-main);
      opacity: 0.45;
    }
  }

  &--row {
    align-items: stretch;
    justify-content: center;
    flex-direction: row;
  }
}

.activity-banner__logo {
  margin-bottom: 80px;
}

.activity-banner__title {
  font-weight: 800;
  font-size: 36px;
  text-transform: uppercase;
  line-height: 1.5;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.activity-banner__title-item {
  display: flex;
}

.activity-banner__date {
  font-weight: 600;
  font-size: 18px;
}

.activity-banner__stages {
  margin-left: 15px;
}

.activity-banner__stage-value {
  font-size: 144px;
  font-weight: 800;
  color: var(--color-second-accent);
}

.activity-banner__stage-text {
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
}

.activity-timing {
  padding: 100px 0;
}

.timings {
  display: flex;
  border-bottom: 1px solid var(--color-main);
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
}

.title-2 {
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 50px;
}

.timings__item {
  flex: 1;
  position: relative;
}

.timings__item-top {
  margin-bottom: 17px;
}

.timings__item-bot {
  position: relative;
  border-left: 1px solid var(--color-main);
  padding-left: 25%;
  height: 104px;
  display: flex;
  align-items: flex-end;
}

.timings__item-desc {
  font-size: 10px;
  line-height: 1.2;

  &:after {
    content: "";
    margin-top: 11px;
    display: block;
    height: 54px;
    width: 1px;
    background: var(--color-main);
  }
}

.timings__item-date {
  top: calc(100% + 5px);
  left: 0;
  position: absolute;
}

.timings__stage {
  display: flex;
  align-items: baseline;
}

.timings__stage-value {
  font-size: 48px;
  color: var(--color-second-accent);
  font-weight: 800;
}

.timings__stage-text {
  font-size: 18px;
  margin-left: 3px;
  text-transform: lowercase;
}

.timings__item--end {
  flex: inherit;
  width: 0;

  .timings__item-bot {
    border-left: none;
    border-right: 1px solid var(--color-main);
    padding-left: 0;
  }

  .timings__item-top {
    position: absolute;
    top: -33px;
    right: 0;
  }

  .timings__item-date {
    left: inherit;
    right: 0;
  }
}

@media (max-width: 1200px) {
  .news {
    grid-template-columns: repeat(2, 1fr);
  }

  .activity-banner {
    grid-template-columns: repeat(1, 1fr);
  }
  .activity-banner__item {
    min-width: 100%;
    order: 2;
    padding-left: 15px;
    &--row {
      order: 1;
      justify-content: flex-start;
    }
  }

  .documents {
    grid-template-columns: repeat(3, 126px);
  }
}
</style>

